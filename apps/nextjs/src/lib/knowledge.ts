import crypto from "crypto";

import { getDb } from "./db";

export type ArticleStatus = "draft" | "published" | "archived";

export type Article = {
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
  status: ArticleStatus;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
};

type ArticleRow = {
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
  status: ArticleStatus;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
};

type ArticleInput = Omit<Article, "id" | "createdAt" | "updatedAt">;

function ensureArticlesTable() {
  const db = getDb();
  db.prepare(`
    CREATE TABLE IF NOT EXISTS knowledge_articles (
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

function mapArticle(row: ArticleRow): Article {
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

export function getArticles({
  locale,
  status,
}: {
  locale?: string;
  status?: ArticleStatus | "all";
} = {}): Article[] {
  ensureArticlesTable();
  const db = getDb();

  if (locale && status && status !== "all") {
    return (db
      .prepare("SELECT * FROM knowledge_articles WHERE locale = ? AND status = ? ORDER BY updatedAt DESC")
      .all(locale, status) as ArticleRow[]).map(mapArticle);
  }

  if (locale) {
    return (db
      .prepare("SELECT * FROM knowledge_articles WHERE locale = ? ORDER BY updatedAt DESC")
      .all(locale) as ArticleRow[]).map(mapArticle);
  }

  if (status && status !== "all") {
    return (db
      .prepare("SELECT * FROM knowledge_articles WHERE status = ? ORDER BY updatedAt DESC")
      .all(status) as ArticleRow[]).map(mapArticle);
  }

  return (db
    .prepare("SELECT * FROM knowledge_articles ORDER BY updatedAt DESC")
    .all() as ArticleRow[]).map(mapArticle);
}

export function getArticle(id: string): Article | null {
  ensureArticlesTable();
  const db = getDb();
  const row = db.prepare("SELECT * FROM knowledge_articles WHERE id = ?").get(id) as ArticleRow | undefined;
  return row ? mapArticle(row) : null;
}

export function createArticle(data: ArticleInput): Article {
  ensureArticlesTable();
  const db = getDb();
  const id = crypto.randomUUID();
  const now = new Date().toISOString();

  db.prepare(`
    INSERT INTO knowledge_articles (
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

  const article = getArticle(id);
  if (!article) {
    throw new Error("Article could not be created");
  }
  return article;
}

export function updateArticle(id: string, data: Partial<ArticleInput>) {
  ensureArticlesTable();
  const existing = getArticle(id);
  if (!existing) return null;

  const db = getDb();
  const nextStatus = data.status ?? existing.status;
  const nextPublishedAt = data.publishedAt !== undefined
    ? data.publishedAt
    : existing.publishedAt ?? (nextStatus === "published" ? new Date().toISOString() : null);

  db.prepare(`
    UPDATE knowledge_articles
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

  return getArticle(id);
}

export function deleteArticle(id: string) {
  ensureArticlesTable();
  const db = getDb();
  db.prepare("DELETE FROM knowledge_articles WHERE id = ?").run(id);
}

export function isSlugUnique(locale: string, slug: string, excludeId?: string) {
  ensureArticlesTable();
  const db = getDb();
  const row = excludeId
    ? db.prepare("SELECT id FROM knowledge_articles WHERE locale = ? AND slug = ? AND id != ?").get(locale, slug, excludeId)
    : db.prepare("SELECT id FROM knowledge_articles WHERE locale = ? AND slug = ?").get(locale, slug);
  return !row;
}

export function getArticleStats(locale?: string) {
  ensureArticlesTable();
  const db = getDb();

  const total = locale
    ? db.prepare("SELECT COUNT(*) as count FROM knowledge_articles WHERE locale = ?").get(locale)
    : db.prepare("SELECT COUNT(*) as count FROM knowledge_articles").get();
  const published = locale
    ? db.prepare("SELECT COUNT(*) as count FROM knowledge_articles WHERE locale = ? AND status = 'published'").get(locale)
    : db.prepare("SELECT COUNT(*) as count FROM knowledge_articles WHERE status = 'published'").get();
  const draft = locale
    ? db.prepare("SELECT COUNT(*) as count FROM knowledge_articles WHERE locale = ? AND status = 'draft'").get(locale)
    : db.prepare("SELECT COUNT(*) as count FROM knowledge_articles WHERE status = 'draft'").get();
  const archived = locale
    ? db.prepare("SELECT COUNT(*) as count FROM knowledge_articles WHERE locale = ? AND status = 'archived'").get(locale)
    : db.prepare("SELECT COUNT(*) as count FROM knowledge_articles WHERE status = 'archived'").get();

  return {
    total: Number((total as { count: number }).count ?? 0),
    published: Number((published as { count: number }).count ?? 0),
    draft: Number((draft as { count: number }).count ?? 0),
    archived: Number((archived as { count: number }).count ?? 0),
  };
}
