import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/admin-auth';
import { canAdminAccessChat } from '@/lib/admin-chat';
import { archiveInactive } from '@/lib/chat';
import { getDb } from '@/lib/db';

export async function POST(request: NextRequest) {
    try {
        archiveInactive();

        const session = await getSession();
        if (!session) {
            return NextResponse.json({ success: false, error: 'unauthorized' }, { status: 401 });
        }

        const body = await request.json();
        const { chat_id, action_type, message } = body;
        
        if (!chat_id || !action_type) {
            return NextResponse.json({ success: false, error: 'Missing parameters' }, { status: 400 });
        }
        
        const db = getDb();
        const chat = db.prepare('SELECT status, lang FROM chats WHERE id = ?').get(chat_id) as { status: string; lang: string } | undefined;
        if (!chat) return NextResponse.json({ success: false, error: 'Chat not found' }, { status: 404 });
        if (!canAdminAccessChat(session, chat.lang)) {
            return NextResponse.json({ success: false, error: 'forbidden' }, { status: 403 });
        }
        
        if (action_type === 'send') {
            db.prepare('UPDATE chats SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?').run('active', chat_id);
            
            // Insert admin message
            db.prepare('INSERT INTO messages (chat_id, sender_type, message) VALUES (?, ?, ?)').run(chat_id, 'bot', message || '');
            
            return NextResponse.json({ success: true });
        } else if (action_type === 'finish') {
            db.prepare('UPDATE chats SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?').run('finished', chat_id);
            return NextResponse.json({ success: true });
        }
        
        return NextResponse.json({ success: false, error: 'Invalid action type' }, { status: 400 });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ success: false, error: message }, { status: 500 });
    }
}
