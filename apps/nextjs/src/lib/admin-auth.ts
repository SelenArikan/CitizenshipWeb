import { cookies } from "next/headers";
import crypto from "crypto";
import { getDb, getDbRuntimeInfo } from "./db";
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
    setupDb();
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
  setupDb();
  const db = getDb();
  const id = crypto.randomUUID();
  const role = normalizeRole(data.role);

  db.prepare("INSERT INTO admins (id, username, name, role, locale, passwordHash) VALUES (?, ?, ?, ?, ?, ?)")
    .run(id, data.username, data.name, role, data.locale, data.passwordHash);

  return {
    id,
    username: data.username,
    name: data.name,
    role,
    locale: data.locale,
  };
}

export function getAdminMutationErrorMessage(error: unknown) {
  const message = error instanceof Error ? error.message : "";
  const runtimeInfo = getDbRuntimeInfo();

  if (/UNIQUE constraint failed: admins\.username/i.test(message)) {
    return "Bu kullanıcı adı zaten kullanılıyor.";
  }

  if (/readonly|attempt to write a readonly database/i.test(message)) {
    return runtimeInfo.isEphemeral
      ? "Sunucu veritabanına kalıcı yazamıyor. Vercel üzerinde geçici disk kullanıldığı için admin ve içerik değişiklikleri kalıcı olmayabilir."
      : "Veritabanına yazılamadı. Sunucu veritabanı yolunu kontrol edin.";
  }

  if (/no such table: admins/i.test(message)) {
    return "Admin tablosu oluşturulamadı. Veritabanı yapılandırmasını kontrol edin.";
  }

  if (/unable to open database file/i.test(message)) {
    return "Veritabanı dosyası açılamadı. Sunucu yapılandırmasını kontrol edin.";
  }

  return "Admin hesabı oluşturulurken beklenmeyen bir sunucu hatası oluştu.";
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
