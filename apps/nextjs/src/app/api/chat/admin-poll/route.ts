import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/admin-auth";
import { canAdminAccessChat } from "@/lib/admin-chat";
import { archiveInactive } from "@/lib/chat";
import { getDb } from "@/lib/db";

type ChatRow = {
  id: string;
  lang: string;
  status: string;
  created_at: string;
  admin_heartbeat_at: string | null;
};

type MessageRow = {
  id: number | string;
  sender_type: string;
  message: string;
  unix_ts: string;
};

export async function GET(request: NextRequest) {
  try {
    archiveInactive();

    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }

    const url = new URL(request.url);
    const session_id = url.searchParams.get("session_id");
    const sinceText = url.searchParams.get("since") || "0";
    const since = parseInt(sinceText, 10);

    if (!session_id) {
      return NextResponse.json({ error: "missing_session_id" }, { status: 400 });
    }

    const db = getDb();

    // Check chat session
    const chat = db.prepare("SELECT id, lang, status, created_at, admin_heartbeat_at FROM chats WHERE id = ?").get(session_id) as ChatRow | undefined;
    if (!chat) {
      return NextResponse.json({ error: "not_found" }, { status: 404 });
    }

    if (!canAdminAccessChat(session, chat.lang)) {
      return NextResponse.json({ error: "forbidden" }, { status: 403 });
    }

    const status = chat.status === "finished" ? "archived" : chat.status;

    // We only fetch messages newer than `since`
    // SQLite created_at is 'YYYY-MM-DD HH:MM:SS' strings.
    // If we want to compare with `since` (which is unix timestamp in seconds), we convert sqlite created_at to unixepoch
    let messagesRows: MessageRow[];
    if (since > 0) {
        messagesRows = db.prepare("SELECT id, sender_type, message, strftime('%s', created_at) as unix_ts FROM messages WHERE chat_id = ? AND strftime('%s', created_at) > ? ORDER BY id ASC").all(session_id, since) as MessageRow[];
    } else {
        messagesRows = db.prepare("SELECT id, sender_type, message, strftime('%s', created_at) as unix_ts FROM messages WHERE chat_id = ? ORDER BY id ASC").all(session_id) as MessageRow[];
    }

    const messages = messagesRows.map((m) => ({
      id: String(m.id),
      sender: m.sender_type === "admin" ? "admin" : "visitor",
      body: m.message,
      createdAt: parseInt(m.unix_ts, 10),
    }));

    const sessionInfo = {
      visitorName: "Ziyaretçi - " + chat.id.substring(0, 4),
      locale: chat.lang,
      visitorEmail: "",
      status: status,
      createdAt: Math.floor(new Date(chat.created_at + "Z").getTime() / 1000)
    };

    return NextResponse.json({
      status,
      session: since === 0 ? sessionInfo : undefined,
      messages: messages,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
