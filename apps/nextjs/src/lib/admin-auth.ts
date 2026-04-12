import { cookies } from "next/headers";
import crypto from "crypto";
import { getDb } from "./db";
import { AdminRole, AdminSession } from "./admin-types";

type AdminCountRow = { count: number };
type AdminRecord = {
  id: string;
  username: string;
  name: string;
  role: AdminRole | "locale";
  locale: string | null;
  passwordHash: string;
};

function normalizeRole(role: unknown): AdminRole {
  return role === "super" ? "super" : "lang";
}

function setupDb() {
  const db = getDb();
  db.prepare(`
    CREATE TABLE IF NOT EXISTS admins (
      id TEXT PRIMARY KEY,
      username TEXT UNIQUE,
      name TEXT,
      role TEXT,
      locale TEXT,
      passwordHash TEXT
    )
  `).run();
}

export function hasAdmins() {
  try {
    setupDb();
    const db = getDb();
    const result = db.prepare("SELECT COUNT(*) as count FROM admins").get() as AdminCountRow;
    return result.count > 0;
  } catch {
    return false;
  }
}

export function findAdminByUsername(username: string) {
  try {
    const db = getDb();
    const admin = db.prepare("SELECT * FROM admins WHERE username = ?").get(username) as AdminRecord | undefined;
    if (!admin) return null;
    return {
      ...admin,
      role: normalizeRole(admin.role),
    };
  } catch {
    return null;
  }
}

export function hashPassword(plain: string) {
  return crypto.createHash("sha256").update(plain).digest("hex");
}

export function createAdmin(data: {
  username: string;
  name: string;
  role: AdminRole;
  locale: string | null;
  passwordHash: string;
}) {
  const db = getDb();
  const id = crypto.randomUUID();
  db.prepare("INSERT INTO admins (id, username, name, role, locale, passwordHash) VALUES (?, ?, ?, ?, ?, ?)")
    .run(id, data.username, data.name, normalizeRole(data.role), data.locale, data.passwordHash);
}

export function verifyPassword(plain: string, hash: string) {
  return crypto.createHash("sha256").update(plain).digest("hex") === hash;
}

export async function getSession(): Promise<AdminSession | null> {
  const cookieStore = await cookies();
  const val = cookieStore.get("admin_session")?.value;
  if (!val) return null;
  // very basic unpack
  try {
    const json = Buffer.from(val, "base64").toString("utf-8");
    const session = JSON.parse(json) as AdminSession;
    return {
      ...session,
      role: normalizeRole(session.role),
    };
  } catch { return null; }
}

export async function setSession(admin: Pick<AdminRecord, "id" | "username" | "name" | "role" | "locale">) {
  const val = Buffer.from(JSON.stringify({
    id: admin.id,
    username: admin.username,
    name: admin.name,
    role: normalizeRole(admin.role),
    locale: admin.locale,
  })).toString("base64");
  const cookieStore = await cookies();
  cookieStore.set("admin_session", val, { httpOnly: true, secure: process.env.NODE_ENV === "production" });
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
}
