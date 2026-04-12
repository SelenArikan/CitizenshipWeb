import crypto from "crypto";

import { getDb } from "./db";

export type BulletinStatus = "draft" | "published" | "archived";

export type Bulletin = {
  id: string;
  locale: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  coverImage: string;
  tags: string[];
  authorName: string;
  isFeatured: boolean;
  status: BulletinStatus;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
};

type BulletinRow = {
  id: string;
  locale: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  coverImage: string | null;
  tags: string | null;
  authorName: string | null;
  isFeatured: number;
  status: BulletinStatus;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
};

type BulletinInput = Omit<Bulletin, "id" | "createdAt" | "updatedAt">;

function ensureBulletinsTable() {
  const db = getDb();
  db.prepare(`
    CREATE TABLE IF NOT EXISTS news_bulletins (
      id TEXT PRIMARY KEY,
      locale TEXT NOT NULL,
      slug TEXT NOT NULL,
      title TEXT NOT NULL,
      summary TEXT NOT NULL,
      content TEXT NOT NULL,
      category TEXT NOT NULL,
      coverImage TEXT,
      tags TEXT NOT NULL DEFAULT '[]',
      authorName TEXT,
      isFeatured INTEGER NOT NULL DEFAULT 0,
      status TEXT NOT NULL DEFAULT 'draft',
      createdAt TEXT NOT NULL,
      updatedAt TEXT NOT NULL,
      publishedAt TEXT,
      UNIQUE(locale, slug)
    )
  `).run();
}

function parseTags(raw: string | null): string[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((tag): tag is string => typeof tag === "string") : [];
  } catch {
    return [];
  }
}

function mapBulletin(row: BulletinRow): Bulletin {
  return {
    id: row.id,
    locale: row.locale,
    slug: row.slug,
    title: row.title,
    summary: row.summary,
    content: row.content,
    category: row.category,
    coverImage: row.coverImage ?? "",
    tags: parseTags(row.tags),
    authorName: row.authorName ?? "",
    isFeatured: row.isFeatured === 1,
    status: row.status,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
    publishedAt: row.publishedAt ?? null,
  };
}

export function getBulletins({
  locale,
  status,
}: {
  locale?: string;
  status?: BulletinStatus | "all";
} = {}): Bulletin[] {
  ensureBulletinsTable();
  const db = getDb();

  if (locale && status && status !== "all") {
    return (db
      .prepare("SELECT * FROM news_bulletins WHERE locale = ? AND status = ? ORDER BY COALESCE(publishedAt, updatedAt) DESC")
      .all(locale, status) as BulletinRow[]).map(mapBulletin);
  }

  if (locale) {
    return (db
      .prepare("SELECT * FROM news_bulletins WHERE locale = ? ORDER BY COALESCE(publishedAt, updatedAt) DESC")
      .all(locale) as BulletinRow[]).map(mapBulletin);
  }

  if (status && status !== "all") {
    return (db
      .prepare("SELECT * FROM news_bulletins WHERE status = ? ORDER BY COALESCE(publishedAt, updatedAt) DESC")
      .all(status) as BulletinRow[]).map(mapBulletin);
  }

  return (db
    .prepare("SELECT * FROM news_bulletins ORDER BY COALESCE(publishedAt, updatedAt) DESC")
    .all() as BulletinRow[]).map(mapBulletin);
}

export function getBulletin(id: string): Bulletin | null {
  ensureBulletinsTable();
  const db = getDb();
  const row = db.prepare("SELECT * FROM news_bulletins WHERE id = ?").get(id) as BulletinRow | undefined;
  return row ? mapBulletin(row) : null;
}

export function createBulletin(data: BulletinInput): Bulletin {
  ensureBulletinsTable();
  const db = getDb();
  const id = crypto.randomUUID();
  const now = new Date().toISOString();

  db.prepare(`
    INSERT INTO news_bulletins (
      id, locale, slug, title, summary, content, category, coverImage,
      tags, authorName, isFeatured, status, createdAt, updatedAt, publishedAt
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    id,
    data.locale,
    data.slug,
    data.title,
    data.summary,
    data.content,
    data.category,
    data.coverImage || "",
    JSON.stringify(data.tags),
    data.authorName || "",
    data.isFeatured ? 1 : 0,
    data.status,
    now,
    now,
    data.publishedAt
  );

  const bulletin = getBulletin(id);
  if (!bulletin) {
    throw new Error("Bulletin could not be created");
  }
  return bulletin;
}

export function updateBulletin(id: string, data: Partial<BulletinInput>) {
  ensureBulletinsTable();
  const existing = getBulletin(id);
  if (!existing) return null;

  const db = getDb();
  const nextStatus = data.status ?? existing.status;
  const nextPublishedAt = data.publishedAt !== undefined
    ? data.publishedAt
    : existing.publishedAt ?? (nextStatus === "published" ? new Date().toISOString() : null);

  db.prepare(`
    UPDATE news_bulletins
    SET locale = ?, slug = ?, title = ?, summary = ?, content = ?, category = ?,
        coverImage = ?, tags = ?, authorName = ?, isFeatured = ?, status = ?, updatedAt = ?, publishedAt = ?
    WHERE id = ?
  `).run(
    data.locale ?? existing.locale,
    data.slug ?? existing.slug,
    data.title ?? existing.title,
    data.summary ?? existing.summary,
    data.content ?? existing.content,
    data.category ?? existing.category,
    data.coverImage ?? existing.coverImage,
    JSON.stringify(data.tags ?? existing.tags),
    data.authorName ?? existing.authorName,
    (data.isFeatured ?? existing.isFeatured) ? 1 : 0,
    nextStatus,
    new Date().toISOString(),
    nextPublishedAt,
    id
  );

  return getBulletin(id);
}

export function deleteBulletin(id: string) {
  ensureBulletinsTable();
  const db = getDb();
  db.prepare("DELETE FROM news_bulletins WHERE id = ?").run(id);
}

export function isBulletinSlugUnique(locale: string, slug: string, excludeId?: string) {
  ensureBulletinsTable();
  const db = getDb();
  const row = excludeId
    ? db.prepare("SELECT id FROM news_bulletins WHERE locale = ? AND slug = ? AND id != ?").get(locale, slug, excludeId)
    : db.prepare("SELECT id FROM news_bulletins WHERE locale = ? AND slug = ?").get(locale, slug);
  return !row;
}

export function getBulletinStats(locale?: string) {
  ensureBulletinsTable();
  const db = getDb();

  const total = locale
    ? db.prepare("SELECT COUNT(*) as count FROM news_bulletins WHERE locale = ?").get(locale)
    : db.prepare("SELECT COUNT(*) as count FROM news_bulletins").get();
  const published = locale
    ? db.prepare("SELECT COUNT(*) as count FROM news_bulletins WHERE locale = ? AND status = 'published'").get(locale)
    : db.prepare("SELECT COUNT(*) as count FROM news_bulletins WHERE status = 'published'").get();
  const draft = locale
    ? db.prepare("SELECT COUNT(*) as count FROM news_bulletins WHERE locale = ? AND status = 'draft'").get(locale)
    : db.prepare("SELECT COUNT(*) as count FROM news_bulletins WHERE status = 'draft'").get();
  const archived = locale
    ? db.prepare("SELECT COUNT(*) as count FROM news_bulletins WHERE locale = ? AND status = 'archived'").get(locale)
    : db.prepare("SELECT COUNT(*) as count FROM news_bulletins WHERE status = 'archived'").get();

  return {
    total: Number((total as { count: number }).count ?? 0),
    published: Number((published as { count: number }).count ?? 0),
    draft: Number((draft as { count: number }).count ?? 0),
    archived: Number((archived as { count: number }).count ?? 0),
  };
}
