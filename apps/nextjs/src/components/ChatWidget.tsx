'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Socket } from 'socket.io-client';

type ChatMessage = {
    id: string;
    message: string;
    sender_type: 'user' | 'admin';
};

type ChatPollResponse = {
    success?: boolean;
    status?: string;
    admin_online?: boolean;
    messages?: Array<{
        id: string | number;
        message: string;
        sender_type: string;
    }>;
};

type SocketMessagePayload = {
    chat_id: string;
    message: {
        id: string | number;
        body: string;
        sender: string;
    };
};

type ChatCopy = {
    title: string;
    intro: string;
    placeholder: string;
    status_online: string;
    status_offline: string;
};

function getChatStorageKey(lang: string, suffix: string) {
    const safeLang = (lang || 'tr').trim().toLowerCase() || 'tr';
    return `chat_${suffix}_${safeLang}`;
}

function migrateLegacyChatStorage(lang: string): string | null {
    const legacyId = localStorage.getItem('chat_id');
    const legacyDate = localStorage.getItem('chat_session_date');
    const today = new Date().toISOString().slice(0, 10);

    if (legacyId && legacyDate === today) {
        const idKey = getChatStorageKey(lang, 'id');
        const dateKey = getChatStorageKey(lang, 'session_date');
        localStorage.setItem(idKey, legacyId);
        localStorage.setItem(dateKey, legacyDate);
        localStorage.removeItem('chat_id');
        localStorage.removeItem('chat_session_date');
        return legacyId;
    }

    if (legacyId || legacyDate) {
        localStorage.removeItem('chat_id');
        localStorage.removeItem('chat_session_date');
    }

    return null;
}

// Her gün ve her dil için yeni oturum: bugünün tarihi yoksa yeni chat_id üret
function getOrCreateChatId(lang: string): string {
    const today = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
    const idKey = getChatStorageKey(lang, 'id');
    const dateKey = getChatStorageKey(lang, 'session_date');
    const stored = localStorage.getItem(idKey);
    const storedDate = localStorage.getItem(dateKey);

    if (stored && storedDate === today) {
        return stored;
    }

    const migratedLegacy = migrateLegacyChatStorage(lang);
    if (migratedLegacy) {
        return migratedLegacy;
    }

    // Yeni gün → yeni oturum
    const id = Math.random().toString(36).substring(2) + Date.now().toString(36);
    localStorage.setItem(idKey, id);
    localStorage.setItem(dateKey, today);
    return id;
}

const RTL_LANGS = ['ar', 'fa'];

export default function ChatWidget({
    lang = 'tr',
    copy,
}: {
    lang?: string;
    copy: ChatCopy;
}) {
    const isRtl = RTL_LANGS.includes(lang);
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [adminOnline, setAdminOnline] = useState<boolean | null>(null);

    const chatIdRef = useRef<string | null>(null);
    const socketRef = useRef<Socket | null>(null);
    const chatViewRef = useRef<HTMLDivElement>(null);
    const lastMessageIdRef = useRef(0);
    const pollTimerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

    const scrollToBottom = useCallback(() => {
        if (chatViewRef.current) {
            chatViewRef.current.scrollTop = chatViewRef.current.scrollHeight;
        }
    }, []);

    const updateLastMessageId = useCallback((value: string | number) => {
        const numeric = typeof value === 'number' ? value : Number.parseInt(String(value), 10);
        if (!Number.isNaN(numeric)) {
            lastMessageIdRef.current = Math.max(lastMessageIdRef.current, numeric);
        }
    }, []);

    const applyAdminStatus = useCallback((data: ChatPollResponse) => {
        if (typeof data?.admin_online === 'boolean') {
            setAdminOnline(data.admin_online);
            return;
        }
        if (data?.status === 'active') {
            setAdminOnline(true);
            return;
        }
        if (data?.status) {
            setAdminOnline(false);
        }
    }, []);

    const mergeMessages = useCallback((incoming: ChatMessage[]) => {
        if (!incoming.length) return;

        setMessages(prev => {
            const existingIds = new Set(prev.map(msg => String(msg.id)));
            const next = [...prev];

            incoming.forEach((msg) => {
                const id = String(msg.id);
                if (existingIds.has(id)) return;

                next.push({
                    id,
                    message: msg.message,
                    sender_type: msg.sender_type === 'admin' ? 'admin' : 'user',
                });
                existingIds.add(id);
                updateLastMessageId(id);
            });

            return next;
        });

        setTimeout(scrollToBottom, 50);
    }, [scrollToBottom, updateLastMessageId]);

    const pollChat = useCallback(async (markUserActive: boolean) => {
        if (!chatIdRef.current) return;

        const params = new URLSearchParams({
            chat_id: chatIdRef.current,
            last_id: String(lastMessageIdRef.current),
        });

        if (markUserActive) {
            params.set('is_user', '1');
        }

        try {
            const res = await fetch(`/api/chat/poll?${params.toString()}`);
            const data = await res.json() as ChatPollResponse;
            if (!data.success) return;

            applyAdminStatus(data);
            mergeMessages((data.messages ?? []).map((msg) => ({
                id: String(msg.id),
                message: msg.message,
                sender_type: msg.sender_type === 'admin' ? 'admin' : 'user',
            })));
        } catch { }
    }, [applyAdminStatus, mergeMessages]);

    // Socket.IO bağlantısı
    useEffect(() => {
        import("socket.io-client").then(({ io }) => {
            const socket = io();
            socketRef.current = socket;
            socket.on("connect", () => {
                if (chatIdRef.current) socket.emit("join-chat", chatIdRef.current);
            });
            socket.on("new-message", (data: SocketMessagePayload) => {
                if (data.chat_id === chatIdRef.current) {
                    mergeMessages([{
                        id: String(data.message.id),
                        message: data.message.body,
                        sender_type: data.message.sender === 'admin' ? 'admin' : 'user',
                    }]);
                }
            });
        });
        return () => {
            if (socketRef.current) socketRef.current.disconnect();
        };
    }, [mergeMessages]);

    // Chat ID'yi localStorage'dan al (günlük sıfırlama ile)
    useEffect(() => {
        const chatId = getOrCreateChatId(lang);
        chatIdRef.current = chatId;
        lastMessageIdRef.current = 0;
        setMessages([]);
        setAdminOnline(null);

        if (socketRef.current?.connected) {
            socketRef.current.emit("join-chat", chatId);
        }

        fetch(`/api/chat/poll?chat_id=${chatId}&last_id=0`)
            .then(r => r.json())
            .then((data: ChatPollResponse) => {
                applyAdminStatus(data);
                mergeMessages((data.messages ?? []).map((msg) => ({
                    id: String(msg.id),
                    message: msg.message,
                    sender_type: msg.sender_type === 'admin' ? 'admin' : 'user',
                })));
            })
            .catch(() => { });

        const openButtons = document.querySelectorAll('button');
        const handleOpen = (e: Event) => {
            e.preventDefault();
            setIsOpen(true);
        };

        openButtons.forEach(b => {
            if (b.textContent?.includes('Yapay Zeka') || b.textContent?.includes('AI') || b.textContent?.includes('Asistan') || b.textContent?.includes('Ask AI')) {
                b.addEventListener('click', handleOpen);
            }
        });

        return () => {
            openButtons.forEach(b => {
                if (b.textContent?.includes('Yapay Zeka') || b.textContent?.includes('AI') || b.textContent?.includes('Asistan') || b.textContent?.includes('Ask AI')) {
                    b.removeEventListener('click', handleOpen);
                }
            });
        };
    }, [applyAdminStatus, lang, mergeMessages]);

    useEffect(() => {
        if (!isOpen || !chatIdRef.current) {
            clearInterval(pollTimerRef.current);
            return;
        }

        pollChat(true);
        pollTimerRef.current = setInterval(() => {
            pollChat(true);
        }, 2000);

        setTimeout(scrollToBottom, 50);

        return () => {
            clearInterval(pollTimerRef.current);
        };
    }, [isOpen, pollChat, scrollToBottom]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputText.trim() || isLoading) return;

        const txt = inputText.trim();
        setInputText('');
        setIsLoading(true);

        // Optimistic update: mesajı hemen kullanıcı balonu olarak göster
        const tempId = 'temp-' + Date.now();
        setMessages(prev => [...prev, { id: tempId, message: txt, sender_type: 'user' }]);
        setTimeout(scrollToBottom, 50);

        try {
            const res = await fetch('/api/chat/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatIdRef.current,
                    message: txt,
                    lang: lang
                })
            });
            const data = await res.json();
            if (data.success && data.message_id) {
                const realId = String(data.message_id);
                updateLastMessageId(realId);
                setMessages(prev => {
                    const withoutTemp = prev.filter(m => m.id !== tempId);
                    if (withoutTemp.some(m => m.id === realId)) {
                        return withoutTemp;
                    }
                    return [...withoutTemp, { id: realId, message: txt, sender_type: 'user' }];
                });
                if (socketRef.current?.connected && chatIdRef.current) {
                    socketRef.current.emit("join-chat", chatIdRef.current);
                }
            }
        } catch (error) {
            console.error(error);
            // Hata durumunda temp mesajı kaldır
            setMessages(prev => prev.filter(m => m.id !== tempId));
        }
        setIsLoading(false);
    };

    return (
        <div
            className="fixed bottom-6 z-50 flex flex-col items-end pointer-events-none"
            style={{ right: '1.5rem', left: 'auto' }}
            dir="ltr"
        >
            {/* Chat Window */}
            <div
                className={`bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 sm:w-96 mb-4 overflow-hidden flex flex-col transition-all duration-300 transform pointer-events-auto ${isOpen ? 'scale-100' : 'scale-0'}`}
                style={{ height: '500px', maxHeight: '80vh', transformOrigin: 'bottom right' }}
            >
                <div className="bg-navy text-white p-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-burgundy rounded-full flex justify-center items-center">
                            <span className="text-xl">🤖</span>
                        </div>
                        <div>
                            <h4 className="font-bold">{copy.title}</h4>
                            <div className="flex items-center gap-2 text-xs text-gray-300">
                                <span
                                    style={{
                                        display: 'inline-block',
                                        width: 8,
                                        height: 8,
                                        borderRadius: '999px',
                                        background: adminOnline ? '#22c55e' : '#6b7280',
                                        boxShadow: adminOnline ? '0 0 0 3px rgba(34,197,94,0.25)' : 'none',
                                        transition: 'all 0.2s ease',
                                    }}
                                    title={adminOnline ? copy.status_online : copy.status_offline}
                                />
                                <p>{adminOnline ? copy.status_online : copy.status_offline}</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300 border-none bg-transparent text-xl leading-none">&times;</button>
                </div>

                <div ref={chatViewRef} className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 bg-gray-50" dir={isRtl ? 'rtl' : 'ltr'}>
                    {messages.length === 0 && (
                        <div className="flex gap-2 w-full">
                            <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center text-sm flex-shrink-0">🤖</div>
                            <div className="bg-white border border-gray-200 text-gray-800 p-3 rounded-2xl rounded-tl-sm text-sm" style={{ maxWidth: '80%' }}>
                                {copy.intro}
                            </div>
                        </div>
                    )}
                    {messages.map((msg, idx) => {
                        const isUser = msg.sender_type === 'user';
                        return (
                            <div key={msg.id ?? idx} className={`flex gap-2 w-full ${isUser ? 'justify-end' : ''}`}>
                                {!isUser && <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center text-sm flex-shrink-0">🤖</div>}
                                <div className={`${isUser ? 'bg-navy text-white rounded-tr-sm' : 'bg-white border border-gray-200 text-gray-800 rounded-tl-sm'} p-3 rounded-2xl text-sm`} style={{ maxWidth: '80%' }}>
                                    {msg.message}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="p-3 bg-white border-t border-gray-200">
                    <form onSubmit={handleSubmit} className="flex items-center gap-2" dir={isRtl ? 'rtl' : 'ltr'}>
                        <input
                            type="text"
                            value={inputText}
                            onChange={e => setInputText(e.target.value)}
                            placeholder={copy.placeholder}
                            required
                            disabled={isLoading}
                            className="flex-1 py-2 px-4 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-burgundy/50 text-sm"
                            dir={isRtl ? 'rtl' : 'ltr'}
                        />
                        <button type="submit" disabled={isLoading} className="w-10 h-10 bg-burgundy hover:bg-burgundy-light text-white rounded-full flex justify-center items-center transition-colors">
                            <svg
                                className="w-5 h-5"
                                style={{ marginLeft: isRtl ? 0 : '0.25rem', marginRight: isRtl ? '0.25rem' : 0, transform: isRtl ? 'scaleX(-1)' : 'none' }}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>

            {/* Floating Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 bg-burgundy hover:bg-burgundy-light shadow-2xl rounded-full text-white flex justify-center items-center transition-transform hover:scale-110 pointer-events-auto">
                {!isOpen ? (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                ) : (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                )}
            </button>
        </div>
    );
}
