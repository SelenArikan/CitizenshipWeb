import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/admin-auth";
import { canAdminAccessChat } from "@/lib/admin-chat";
import { archiveInactive } from "@/lib/chat";
import { getDb } from "@/lib/db";

type ChatRow = {
  status: string;
  lang: string;
};

type TimestampRow = {
  unix_ts: string;
};

export async function POST(request: NextRequest) {
  try {
    archiveInactive();

    const session = await getSession();
    if (!session) {
      return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
    }

    const data = await request.json();
    const { session_id, body } = data;

    if (!session_id || !body) {
      return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
    }

    const db = getDb();

    // Verify chat exists
    const chat = db.prepare("SELECT status, lang FROM chats WHERE id = ?").get(session_id) as ChatRow | undefined;
    if (!chat) {
      return NextResponse.json({ ok: false, error: "not_found" }, { status: 404 });
    }

    if (!canAdminAccessChat(session, chat.lang)) {
      return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
    }

    if (chat.status === "finished") {
      return NextResponse.json({ ok: false, error: "archived" }, { status: 400 });
    }

    db.prepare("UPDATE chats SET status = 'active', updated_at = CURRENT_TIMESTAMP WHERE id = ?").run(session_id);

    const info = db.prepare("INSERT INTO messages (chat_id, sender_type, message) VALUES (?, 'admin', ?)").run(session_id, body);
    const messageId = String(info.lastInsertRowid);

    const msg = db.prepare("SELECT strftime('%s', created_at) as unix_ts FROM messages WHERE id = ?").get(info.lastInsertRowid) as TimestampRow | undefined;
    const createdAt = Number.parseInt(msg?.unix_ts ?? "0", 10);

    // Broadcast internally
    try {
      fetch('http://localhost:3000/api/internal/ws-broadcast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: session_id,
          message: {
            id: messageId,
            sender: 'admin',
            body: body,
            createdAt: createdAt
          }
        })
      }).catch(() => {});
    } catch {}

    return NextResponse.json({
      ok: true,
      message_id: messageId,
      created_at: createdAt,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
