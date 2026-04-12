import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/admin-auth';
import { getEffectiveAdminChatLocale } from '@/lib/admin-chat';
import { archiveInactive } from '@/lib/chat';
import { getDb } from '@/lib/db';

type ChatRow = {
    id: string;
    lang: string;
    status: string;
    created_at: string;
    updated_at: string;
    admin_heartbeat_at: string | null;
};

type MessageRow = {
    message: string;
    sender_type: string;
    created_at: string;
};

function toUtcMs(value?: string | null) {
    if (!value) return 0;
    const normalized = value.includes('Z') || value.includes('+') ? value : `${value}Z`;
    const ms = new Date(normalized).getTime();
    return Number.isNaN(ms) ? 0 : ms;
}

export async function GET(request: NextRequest) {
    try {
        archiveInactive();

        const session = await getSession();
        if (!session) {
            return NextResponse.json({ success: false, error: 'unauthorized' }, { status: 401 });
        }

        const url = new URL(request.url);
        const lang = getEffectiveAdminChatLocale(session, url.searchParams.get('lang'));
        if (lang === null) {
            return NextResponse.json({ success: false, error: 'forbidden' }, { status: 403 });
        }
        const db = getDb();
        
        let chats: ChatRow[];
        if (!lang) {
            chats = db.prepare(
                'SELECT id, lang, status, created_at, updated_at, admin_heartbeat_at FROM chats ORDER BY updated_at DESC'
            ).all() as ChatRow[];
        } else {
            chats = db.prepare(
                'SELECT id, lang, status, created_at, updated_at, admin_heartbeat_at FROM chats WHERE lang = ? ORDER BY updated_at DESC'
            ).all(lang) as ChatRow[];
        }
        
        // Her sohbetin son mesajını çek
        const fetchMsg = db.prepare(
            'SELECT message, sender_type, created_at FROM messages WHERE chat_id = ? ORDER BY id DESC LIMIT 1'
        );
        
        const enhancedChats = chats.map((c) => {
            const lastMsg = fetchMsg.get(c.id) as MessageRow | undefined;
            const lastMessage = lastMsg
                ? {
                    message: lastMsg.message,
                    sender_type: lastMsg.sender_type,
                    created_at: lastMsg.created_at,
                  }
                : null;
            const needsAttention = c.status !== 'finished' && (
                !lastMessage
                    ? c.status === 'waiting'
                    : lastMessage.sender_type === 'user' &&
                      (
                          !c.admin_heartbeat_at ||
                          toUtcMs(lastMessage.created_at) > toUtcMs(c.admin_heartbeat_at)
                      )
            );

            return {
                id: c.id,
                lang: c.lang,
                status: c.status,
                created_at: c.created_at,
                updated_at: c.updated_at,
                // SQLite CURRENT_TIMESTAMP = UTC without 'Z' — keep as-is, clients will append 'Z'
                admin_heartbeat_at: c.admin_heartbeat_at ?? null,
                last_message: lastMessage,
                needs_attention: needsAttention,
            };
        });
        
        return NextResponse.json({ success: true, chats: enhancedChats });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ success: false, error: message }, { status: 500 });
    }
}
