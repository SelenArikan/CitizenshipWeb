import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/admin-auth";
import { canAdminAccessChat } from "@/lib/admin-chat";
import { archiveInactive } from "@/lib/chat";
import { getDb } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    archiveInactive();

    const session = await getSession();
    if (!session) {
      return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
    }

    const data = await request.json();
    const { session_id } = data;

    if (!session_id) {
      return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
    }

    const db = getDb();
    const chat = db.prepare("SELECT lang FROM chats WHERE id = ?").get(session_id) as { lang: string } | undefined;
    if (!chat) {
      return NextResponse.json({ ok: false, error: "not_found" }, { status: 404 });
    }

    if (!canAdminAccessChat(session, chat.lang)) {
      return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
    }
    
    // Update admin_heartbeat_at so we can tell when admin last viewed this chat
    db.prepare("UPDATE chats SET admin_heartbeat_at = CURRENT_TIMESTAMP, updated_at = CURRENT_TIMESTAMP WHERE id = ?").run(session_id);

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
