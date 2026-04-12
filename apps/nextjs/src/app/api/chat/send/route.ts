import { NextRequest, NextResponse } from 'next/server';
import { archiveInactive } from '@/lib/chat';
import { getDb } from '@/lib/db';
import { getSafeLocale } from '@/lib/seo';

type TimestampRow = {
    unix_ts: string;
};

export async function POST(request: NextRequest) {
    try {
        archiveInactive();

        const body = await request.json();
        const { chat_id, message, lang = 'tr' } = body;
        const safeLang = getSafeLocale(typeof lang === 'string' ? lang : 'tr');
        
        if (!chat_id || !message) {
            return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 });
        }
        
        const db = getDb();
        
        const chat = db.prepare('SELECT status FROM chats WHERE id = ?').get(chat_id);
        
        if (!chat) {
            db.prepare('INSERT INTO chats (id, lang, status) VALUES (?, ?, ?)').run(chat_id, safeLang, 'waiting');
        } else {
            db.prepare('UPDATE chats SET lang = ?, status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?').run(safeLang, 'waiting', chat_id);
        }
        
        const info = db.prepare('INSERT INTO messages (chat_id, sender_type, message) VALUES (?, ?, ?)').run(chat_id, 'user', message);
        const messageId = String(info.lastInsertRowid);
        const msg = db.prepare("SELECT strftime('%s', created_at) as unix_ts FROM messages WHERE id = ?").get(info.lastInsertRowid) as TimestampRow | undefined;
        const createdAt = Number.parseInt(msg?.unix_ts ?? '0', 10);

        try {
          fetch('http://localhost:3000/api/internal/ws-broadcast', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: chat_id,
              message: {
                id: messageId,
                sender: 'visitor',
                body: message,
                createdAt: createdAt
              }
            })
          }).catch(() => {});
        } catch {}

        return NextResponse.json({ success: true, message_id: messageId });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ success: false, error: message }, { status: 500 });
    }
}
