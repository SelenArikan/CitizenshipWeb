import type { AdminSession } from "./admin-types";
import { getDb } from "./db";
import { getSafeLocale } from "./seo";

export type ChatAccessRow = {
  id: string;
  lang: string;
  status: string;
  created_at: string;
  updated_at: string;
  admin_heartbeat_at: string | null;
};

export function getEffectiveAdminChatLocale(session: AdminSession, requestedLocale?: string | null) {
  if (session.role !== "super") {
    return session.locale ? getSafeLocale(session.locale) : null;
  }

  if (!requestedLocale || requestedLocale === "all") {
    return undefined;
  }

  return getSafeLocale(requestedLocale);
}

export function canAdminAccessChat(session: AdminSession, chatLocale?: string | null) {
  if (session.role === "super") return true;
  if (!chatLocale) return false;
  return session.locale === chatLocale;
}

export function getChatAccessRow(chatId: string) {
  const db = getDb();
  return db
    .prepare("SELECT id, lang, status, created_at, updated_at, admin_heartbeat_at FROM chats WHERE id = ?")
    .get(chatId) as ChatAccessRow | undefined;
}
