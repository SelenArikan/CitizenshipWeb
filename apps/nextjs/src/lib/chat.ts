import { getDb } from "./db";

export function archiveInactive() {
    try {
        const db = getDb();
        db.prepare("UPDATE chats SET status = 'finished' WHERE status != 'finished' AND updated_at < datetime('now', '-30 minutes')").run();
    } catch(e) {}
}

export function getActiveSessions(locale?: string) {
    try {
        const db = getDb();
        const sql = locale
            ? "SELECT * FROM chats WHERE status != 'finished' AND lang = ? ORDER BY updated_at DESC"
            : "SELECT * FROM chats WHERE status != 'finished' ORDER BY updated_at DESC";
        const chats = locale ? db.prepare(sql).all(locale) : db.prepare(sql).all();

        return chats.map((c: any) => {
            // Son mesajı çek
            const lastMsgRow = db.prepare(
                "SELECT message, sender_type, strftime('%s', created_at) as unix_ts FROM messages WHERE chat_id = ? ORDER BY id DESC LIMIT 1"
            ).get(c.id) as any;

            return {
                id: c.id,
                locale: c.lang,
                visitorName: "Ziyaretçi - " + c.id.substring(0, 4),
                lastMessage: lastMsgRow ? lastMsgRow.message : "",
                lastMessageAt: lastMsgRow
                    ? parseInt(lastMsgRow.unix_ts, 10)
                    : Math.floor(new Date(c.updated_at).getTime() / 1000),
                createdAt: Math.floor(new Date(c.created_at).getTime() / 1000),
                unread: c.status === "waiting" ? 1 : 0,
                adminHeartbeatAt: c.admin_heartbeat_at
                    ? Math.floor(new Date(c.admin_heartbeat_at).getTime() / 1000)
                    : null,
            };
        });
    } catch(e) { return []; }
}

export function getArchivedSessions(locale?: string, limit = 40) {
    try {
        const db = getDb();
        const sql = locale
            ? "SELECT * FROM chats WHERE status = 'finished' AND lang = ? ORDER BY updated_at DESC LIMIT ?"
            : "SELECT * FROM chats WHERE status = 'finished' ORDER BY updated_at DESC LIMIT ?";
        const chats = locale ? db.prepare(sql).all(locale, limit) : db.prepare(sql).all(limit);

        return chats.map((c: any) => {
            const msgCount = db.prepare("SELECT count(*) as cnt FROM messages WHERE chat_id = ?").get(c.id) as any;
            return {
                id: c.id,
                locale: c.lang,
                visitorName: "Ziyaretçi - " + c.id.substring(0, 4),
                messageCount: msgCount.cnt,
                archivedAt: Math.floor(new Date(c.updated_at).getTime() / 1000),
            };
        });
    } catch(e) { return []; }
}

export function getChatStats(locale?: string) {
    try {
        const db = getDb();
        const activeSql = locale
            ? "SELECT count(*) as cnt FROM chats WHERE status != 'finished' AND lang = ?"
            : "SELECT count(*) as cnt FROM chats WHERE status != 'finished'";
        const archSql = locale
            ? "SELECT count(*) as cnt FROM chats WHERE status = 'finished' AND lang = ?"
            : "SELECT count(*) as cnt FROM chats WHERE status = 'finished'";
        const active = locale ? db.prepare(activeSql).get(locale) : db.prepare(activeSql).get();
        const arch   = locale ? db.prepare(archSql).get(locale)   : db.prepare(archSql).get();
        return {
            active: (active as any).cnt,
            archived: (arch as any).cnt,
        };
    } catch(e) { return { active: 0, archived: 0 }; }
}

/**
 * Admin çevrimiçi kabul edilir: son 25 saniye içinde heartbeat göndermişse.
 * SQLite CURRENT_TIMESTAMP → UTC string ama 'Z' suffix'siz; düzeltmek için 'Z' ekliyoruz.
 */
export function isAdminOnline(session: { adminHeartbeatAt?: number | null }): boolean {
    if (!session.adminHeartbeatAt) return false;
    const nowSec = Math.floor(Date.now() / 1000);
    return nowSec - session.adminHeartbeatAt < 25;
}
