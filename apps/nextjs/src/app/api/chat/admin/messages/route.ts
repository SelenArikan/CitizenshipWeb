import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/admin-auth';
import { canAdminAccessChat } from '@/lib/admin-chat';
import { archiveInactive } from '@/lib/chat';
import { getDb } from '@/lib/db';

type ChatRow = {
    status: string;
    lang: string;
};

export async function GET(request: NextRequest) {
    try {
        archiveInactive();

        const session = await getSession();
        if (!session) {
            return NextResponse.json({ success: false, error: 'unauthorized' }, { status: 401 });
        }

        const url = new URL(request.url);
        const chat_id = url.searchParams.get('chat_id');
        const last_id = parseInt(url.searchParams.get('last_id') || '0', 10);
        
        if (!chat_id) {
            return NextResponse.json({ success: false, error: 'Missing chat_id' }, { status: 400 });
        }
        
        const db = getDb();
        const chat = db.prepare('SELECT status, lang FROM chats WHERE id = ?').get(chat_id) as ChatRow | undefined;
        if (!chat) {
            return NextResponse.json({ success: false, error: 'Chat not found' }, { status: 404 });
        }
        if (!canAdminAccessChat(session, chat.lang)) {
            return NextResponse.json({ success: false, error: 'forbidden' }, { status: 403 });
        }
        
        // Polling messages logic
        const messages = db.prepare('SELECT id, sender_type, message, created_at FROM messages WHERE chat_id = ? AND id > ? ORDER BY id ASC').all(chat_id, last_id);
        
        return NextResponse.json({ success: true, messages, status: chat.status });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ success: false, error: message }, { status: 500 });
    }
}
