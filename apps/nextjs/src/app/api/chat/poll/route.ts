import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { archiveInactive } from '@/lib/chat';

type ChatRow = {
    status: string;
    admin_heartbeat_at: string | null;
};

export async function GET(request: NextRequest) {
    try {
        archiveInactive();

        const url = new URL(request.url);
        const chat_id = url.searchParams.get('chat_id');
        const last_id = parseInt(url.searchParams.get('last_id') || '0', 10);
        const is_user = url.searchParams.get('is_user');
        
        if (!chat_id) {
            return NextResponse.json({ success: false, error: 'Missing chat_id' }, { status: 400 });
        }
        
        const db = getDb();
        
        if (is_user) {
            db.prepare('UPDATE chats SET updated_at = CURRENT_TIMESTAMP WHERE id = ?').run(chat_id);
        }
        
        const chat = db.prepare('SELECT status, admin_heartbeat_at FROM chats WHERE id = ?').get(chat_id) as ChatRow | undefined;
        const status = chat?.status ?? 'waiting';
        let adminOnline = false;

        if (chat?.admin_heartbeat_at) {
            const hbAt = `${chat.admin_heartbeat_at}Z`;
            adminOnline = (Date.now() - new Date(hbAt).getTime()) < 30000;
        }
        
        const messages = db.prepare('SELECT id, sender_type, message, created_at FROM messages WHERE chat_id = ? AND id > ? ORDER BY id ASC').all(chat_id, last_id);
        
        return NextResponse.json({ success: true, status, admin_online: adminOnline, messages });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ success: false, error: message }, { status: 500 });
    }
}
