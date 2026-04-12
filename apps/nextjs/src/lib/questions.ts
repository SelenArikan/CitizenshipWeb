import crypto from "crypto";

import { getDb } from "./db";
import type { QuestionStatus } from "./admin-types";

export type QuestionReplyMode = "public" | "private";

export type Question = {
  id: string;
  name: string;
  email: string;
  phone: string;
  question: string;
  replyMode: QuestionReplyMode;
  status: QuestionStatus;
  locale: string;
  answer: string | null;
  answeredBy: string | null;
  answeredAt: string | null;
  privateReplySentAt: string | null;
  privateReplyError: string | null;
  submittedAt: string;
  updatedAt: string;
  isPublic: boolean;
};

type QuestionRow = {
  id: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  question: string;
  replyMode: string | null;
  status: QuestionStatus;
  locale: string;
  answer: string | null;
  answeredBy: string | null;
  answeredAt: string | null;
  privateReplySentAt: string | null;
  privateReplyError: string | null;
  submittedAt: string;
  updatedAt: string;
  isPublic: number;
};

function hasColumn(table: string, column: string) {
  const db = getDb();
  const rows = db.prepare(`PRAGMA table_info(${table})`).all() as Array<{ name: string }>;
  return rows.some((row) => row.name === column);
}

function ensureColumn(table: string, column: string, definition: string) {
  const db = getDb();
  if (!hasColumn(table, column)) {
    db.prepare(`ALTER TABLE ${table} ADD COLUMN ${column} ${definition}`).run();
  }
}

function ensureQuestionsTable() {
  const db = getDb();
  db.prepare(`
    CREATE TABLE IF NOT EXISTS questions (
      id TEXT PRIMARY KEY,
      name TEXT,
      email TEXT,
      phone TEXT,
      question TEXT NOT NULL,
      replyMode TEXT NOT NULL DEFAULT 'public',
      status TEXT NOT NULL DEFAULT 'pending',
      locale TEXT NOT NULL DEFAULT 'tr',
      answer TEXT,
      answeredBy TEXT,
      answeredAt TEXT,
      privateReplySentAt TEXT,
      privateReplyError TEXT,
      submittedAt TEXT NOT NULL,
      updatedAt TEXT NOT NULL,
      isPublic INTEGER NOT NULL DEFAULT 0
    )
  `).run();

  ensureColumn("questions", "replyMode", "TEXT NOT NULL DEFAULT 'public'");
  ensureColumn("questions", "privateReplySentAt", "TEXT");
  ensureColumn("questions", "privateReplyError", "TEXT");
}

function mapQuestion(row: QuestionRow): Question {
  return {
    id: row.id,
    name: row.name ?? "Anonim",
    email: row.email ?? "",
    phone: row.phone ?? "",
    question: row.question,
    replyMode: row.replyMode === "private" ? "private" : "public",
    status: row.status,
    locale: row.locale,
    answer: row.answer ?? null,
    answeredBy: row.answeredBy ?? null,
    answeredAt: row.answeredAt ?? null,
    privateReplySentAt: row.privateReplySentAt ?? null,
    privateReplyError: row.privateReplyError ?? null,
    submittedAt: row.submittedAt,
    updatedAt: row.updatedAt,
    isPublic: row.isPublic === 1,
  };
}

export function getQuestions({
  locale,
  status,
}: {
  locale?: string;
  status?: QuestionStatus | "all";
}): Question[] {
  ensureQuestionsTable();
  const db = getDb();

  if (locale && status && status !== "all") {
    return (db
      .prepare("SELECT * FROM questions WHERE locale = ? AND status = ? ORDER BY submittedAt DESC")
      .all(locale, status) as QuestionRow[]).map(mapQuestion);
  }

  if (locale) {
    return (db
      .prepare("SELECT * FROM questions WHERE locale = ? ORDER BY submittedAt DESC")
      .all(locale) as QuestionRow[]).map(mapQuestion);
  }

  if (status && status !== "all") {
    return (db
      .prepare("SELECT * FROM questions WHERE status = ? ORDER BY submittedAt DESC")
      .all(status) as QuestionRow[]).map(mapQuestion);
  }

  return (db
    .prepare("SELECT * FROM questions ORDER BY submittedAt DESC")
    .all() as QuestionRow[]).map(mapQuestion);
}

export function getQuestion(id: string): Question | null {
  ensureQuestionsTable();
  const db = getDb();
  const row = db.prepare("SELECT * FROM questions WHERE id = ?").get(id) as QuestionRow | undefined;
  return row ? mapQuestion(row) : null;
}

export function getPublicQuestions(locale: string): Question[] {
  ensureQuestionsTable();
  const db = getDb();

  return (db
    .prepare(`
      SELECT *
      FROM questions
      WHERE locale = ?
        AND status = 'approved'
        AND isPublic = 1
        AND replyMode = 'public'
        AND answer IS NOT NULL
      ORDER BY COALESCE(answeredAt, submittedAt) DESC
    `)
    .all(locale) as QuestionRow[]).map(mapQuestion);
}

export function getStats(locale?: string) {
  ensureQuestionsTable();
  const db = getDb();

  const total = locale
    ? db.prepare("SELECT COUNT(*) as count FROM questions WHERE locale = ?").get(locale)
    : db.prepare("SELECT COUNT(*) as count FROM questions").get();
  const pending = locale
    ? db.prepare("SELECT COUNT(*) as count FROM questions WHERE locale = ? AND status = 'pending'").get(locale)
    : db.prepare("SELECT COUNT(*) as count FROM questions WHERE status = 'pending'").get();
  const approved = locale
    ? db.prepare("SELECT COUNT(*) as count FROM questions WHERE locale = ? AND status = 'approved'").get(locale)
    : db.prepare("SELECT COUNT(*) as count FROM questions WHERE status = 'approved'").get();
  const rejected = locale
    ? db.prepare("SELECT COUNT(*) as count FROM questions WHERE locale = ? AND status = 'rejected'").get(locale)
    : db.prepare("SELECT COUNT(*) as count FROM questions WHERE status = 'rejected'").get();

  return {
    total: Number((total as { count: number }).count ?? 0),
    pending: Number((pending as { count: number }).count ?? 0),
    approved: Number((approved as { count: number }).count ?? 0),
    rejected: Number((rejected as { count: number }).count ?? 0),
  };
}

export function createQuestion(data: {
  name?: string;
  email?: string;
  phone?: string;
  question: string;
  locale?: string;
  replyMode?: QuestionReplyMode;
}) {
  ensureQuestionsTable();
  const db = getDb();
  const now = new Date().toISOString();
  const id = crypto.randomUUID();

  db.prepare(`
    INSERT INTO questions (
      id, name, email, phone, question, replyMode, status, locale,
      answer, answeredBy, answeredAt, privateReplySentAt, privateReplyError, submittedAt, updatedAt, isPublic
    ) VALUES (?, ?, ?, ?, ?, ?, 'pending', ?, NULL, NULL, NULL, NULL, NULL, ?, ?, 0)
  `).run(
    id,
    data.name?.trim() || "Anonim",
    data.email?.trim() || "",
    data.phone?.trim() || "",
    data.question.trim(),
    data.replyMode === "private" ? "private" : "public",
    data.locale?.trim() || "tr",
    now,
    now
  );

  return getQuestion(id);
}

export function answerQuestion(
  id: string,
  answer: string,
  answeredBy: string,
  status: QuestionStatus,
  isPublic: boolean
) {
  ensureQuestionsTable();
  const db = getDb();
  const now = new Date().toISOString();

  db.prepare(`
    UPDATE questions
    SET answer = ?, answeredBy = ?, answeredAt = ?, status = ?, isPublic = ?, updatedAt = ?
    WHERE id = ?
  `).run(
    answer.trim(),
    answeredBy.trim(),
    now,
    status,
    status === "approved" && isPublic ? 1 : 0,
    now,
    id
  );
}

export function markPrivateReplySent(id: string, sentAt: string) {
  ensureQuestionsTable();
  const db = getDb();
  db.prepare(`
    UPDATE questions
    SET privateReplySentAt = ?, privateReplyError = NULL, updatedAt = ?
    WHERE id = ?
  `).run(sentAt, new Date().toISOString(), id);
}

export function markPrivateReplyFailed(id: string, error: string) {
  ensureQuestionsTable();
  const db = getDb();
  db.prepare(`
    UPDATE questions
    SET privateReplyError = ?, updatedAt = ?
    WHERE id = ?
  `).run(error, new Date().toISOString(), id);
}

export function deleteQuestion(id: string) {
  ensureQuestionsTable();
  const db = getDb();
  db.prepare("DELETE FROM questions WHERE id = ?").run(id);
}
