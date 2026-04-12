"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import type { Socket } from "socket.io-client";

type Msg = {
  id: string;
  sender: "visitor" | "admin";
  body: string;
  createdAt: number;
};

type AdminPollResponse = {
  error?: string;
  status?: string;
  session?: { visitorName: string; locale: string; visitorEmail: string; status: string; createdAt: number };
  messages?: Msg[];
};

type SocketMessagePayload = {
  chat_id: string;
  message: {
    id: string | number;
    sender: "admin" | "visitor";
    body: string;
    createdAt: number;
  };
};

function fmtTime(ts: number) {
  const d = new Date(ts * 1000);
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

function fmtDate(ts: number) {
  return new Date(ts * 1000).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

const LOCALE_FLAGS: Record<string, string> = { tr: "🇹🇷", en: "🇬🇧", ru: "🇷🇺", ar: "🇸🇦", fa: "🇮🇷" };

export default function ChatSessionClient({ sessionId }: { sessionId: string }) {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [adminOnline, setAdminOnline] = useState<boolean | null>(null);
  const [sessionInfo, setSessionInfo] = useState<{ visitorName: string; locale: string; visitorEmail: string; status: string; createdAt: number } | null>(null);
  const [isArchived, setIsArchived] = useState(false);
  const [loading, setLoading] = useState(true);
  const [wsConnected, setWsConnected] = useState(false);

  const lastMsgTimeRef = useRef(0);
  const msgRef = useRef<HTMLDivElement>(null);
  const hbTimer = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const pollTimer = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const socketRef = useRef<Socket | null>(null);

  const scrollBottom = () => {
    if (msgRef.current) msgRef.current.scrollTop = msgRef.current.scrollHeight;
  };

  const mergeMessages = useCallback((incoming: Msg[]) => {
    setMessages((prev) => {
      const existingIds = new Set(prev.map((m) => m.id));
      const fresh = incoming.filter((m) => !existingIds.has(m.id));
      if (fresh.length === 0) return prev;
      return [...prev, ...fresh];
    });
  }, []);

  const pollNewMessages = useCallback(() => {
    if (isArchived) return;
    fetch(`/api/chat/admin-poll?session_id=${sessionId}&since=${lastMsgTimeRef.current}`)
      .then((r) => r.json())
      .then((data: AdminPollResponse) => {
        if (data.messages && data.messages.length > 0) {
          mergeMessages(data.messages);
          const last = data.messages.at(-1);
          if (last) lastMsgTimeRef.current = last.createdAt;
          setTimeout(scrollBottom, 50);
        }
        if (data.status === "archived") setIsArchived(true);
      })
      .catch(() => {});
  }, [sessionId, isArchived, mergeMessages]);

  useEffect(() => {
    fetch(`/api/chat/admin-poll?session_id=${sessionId}&since=0`)
      .then((r) => r.json())
      .then((data: AdminPollResponse) => {
        if (data.error === "not_found") {
          setLoading(false);
          return;
        }
        if (data.messages) {
          setMessages(data.messages);
          const last = data.messages.at(-1);
          if (last) lastMsgTimeRef.current = last.createdAt;
        }
        if (data.session) setSessionInfo(data.session);
        if (data.status === "archived") setIsArchived(true);
        setLoading(false);
        setTimeout(scrollBottom, 100);
      })
      .catch(() => setLoading(false));

    import("socket.io-client").then(({ io }) => {
      const socket = io();
      socketRef.current = socket;

      socket.on("connect", () => {
        setWsConnected(true);
        socket.emit("join-chat", sessionId);
      });

      socket.on("disconnect", () => {
        setWsConnected(false);
      });

      socket.on("new-message", (data: SocketMessagePayload) => {
        if (data.chat_id === sessionId) {
          setMessages((prev) => {
            if (prev.some((m) => m.id === String(data.message.id))) return prev;
            const msg: Msg = {
              id: String(data.message.id),
              sender: data.message.sender === "admin" ? "admin" : "visitor",
              body: data.message.body,
              createdAt: data.message.createdAt,
            };
            return [...prev, msg];
          });
          if (data.message.createdAt > lastMsgTimeRef.current) {
            lastMsgTimeRef.current = data.message.createdAt;
          }
          setTimeout(scrollBottom, 50);
        }
      });
    }).catch(() => {});

    return () => {
      if (socketRef.current) socketRef.current.disconnect();
    };
  }, [sessionId]);

  useEffect(() => {
    if (!wsConnected && !isArchived) {
      pollTimer.current = setInterval(pollNewMessages, 5000);
    } else {
      clearInterval(pollTimer.current);
    }
    return () => clearInterval(pollTimer.current);
  }, [wsConnected, isArchived, pollNewMessages]);

  const sendHeartbeat = useCallback(() => {
    if (isArchived) return;
    fetch("/api/chat/heartbeat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ session_id: sessionId }),
    })
      .then((r) => r.json())
      .then((d) => { if (d.ok) setAdminOnline(true); else setAdminOnline(false); })
      .catch(() => { setAdminOnline(false); });
  }, [sessionId, isArchived]);

  useEffect(() => {
    sendHeartbeat();
    hbTimer.current = setInterval(sendHeartbeat, 10000);
    return () => {
      clearInterval(hbTimer.current);
    };
  }, [sendHeartbeat]);

  const handleSend = () => {
    if (!input.trim() || sending || isArchived) return;
    setSending(true);
    const body = input.trim();
    setInput("");
    fetch("/api/chat/admin-send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ session_id: sessionId, body }),
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.ok) {
          const newMsg: Msg = { id: d.message_id, sender: "admin", body, createdAt: d.created_at };
          setMessages((prev) => {
            if (prev.some((m) => m.id === d.message_id)) return prev;
            return [...prev, newMsg];
          });
          lastMsgTimeRef.current = d.created_at;
          setTimeout(scrollBottom, 50);
        }
        setSending(false);
      })
      .catch(() => setSending(false));
  };

  if (loading) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", color: "#6b7280" }}>
        Yükleniyor...
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div style={{
        background: "#0d1f3c", color: "#fff", padding: "14px 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link href="/admin/chat" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: 13 }}>
            ← Sohbet Listesi
          </Link>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>|</span>
          <div>
            <div style={{ fontWeight: 700, fontSize: 15 }}>
              {sessionId.slice(0, 8)}…
            </div>
            {sessionInfo && (
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>
                {LOCALE_FLAGS[sessionInfo.locale] ?? ""} {sessionInfo.locale.toUpperCase()}
                {sessionInfo.createdAt ? " · " + fmtDate(sessionInfo.createdAt) : ""}
              </div>
            )}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 5,
            padding: "4px 12px", borderRadius: 999,
            background: wsConnected ? "rgba(34,197,94,0.2)" : "rgba(255,165,0,0.2)",
            fontSize: 11, fontWeight: 600,
            color: wsConnected ? "#86efac" : "#fbbf24"
          }}>
            <span style={{
              display: "inline-block", width: 7, height: 7, borderRadius: "50%",
              background: wsConnected ? "#22c55e" : "#f59e0b"
            }} />
            {wsConnected ? "Canlı" : "Polling"}
          </div>

          <div style={{
            display: "flex", alignItems: "center", gap: 5,
            padding: "4px 12px", borderRadius: 999,
            background: adminOnline === true ? "rgba(34,197,94,0.2)" : "rgba(255,255,255,0.1)",
            fontSize: 11, fontWeight: 600,
            color: adminOnline === true ? "#86efac" : "rgba(255,255,255,0.5)"
          }}>
            <span style={{
              display: "inline-block", width: 7, height: 7, borderRadius: "50%",
              background: adminOnline === true ? "#22c55e" : "#6b7280"
            }} />
            {adminOnline === null ? "Bağlanıyor…" : adminOnline ? "Admin bağlı" : "Bağlantı kesildi"}
          </div>

          {isArchived && (
            <span style={{
              padding: "4px 10px", background: "#fef9c3", color: "#92400e",
              borderRadius: 999, fontSize: 11, fontWeight: 600
            }}>Arşivlendi</span>
          )}
        </div>
      </div>

      <div
        ref={msgRef}
        style={{
          flex: 1, overflowY: "auto", padding: "20px 24px",
          display: "flex", flexDirection: "column", gap: 10,
          background: "#f7f8fa"
        }}
      >
        {messages.length === 0 && (
          <div style={{ textAlign: "center", color: "#9ca3af", fontSize: 13, padding: "40px 0" }}>
            Henüz mesaj yok. Ziyaretçi mesaj gönderdiğinde burada görünecek.
          </div>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              display: "flex", flexDirection: "column",
              alignSelf: msg.sender === "admin" ? "flex-end" : "flex-start",
              maxWidth: "70%"
            }}
          >
            <div style={{
              fontSize: 10, color: "#9ca3af", marginBottom: 3,
              paddingLeft: 4, paddingRight: 4,
              textAlign: msg.sender === "admin" ? "right" : "left"
            }}>
              {msg.sender === "admin" ? "Admin" : "Ziyaretçi"}
            </div>
            <div style={{
              padding: "10px 14px", borderRadius: 14,
              background: msg.sender === "admin" ? "#0d1f3c" : "#fff",
              color: msg.sender === "admin" ? "#fff" : "#111827",
              border: msg.sender === "visitor" ? "1px solid #e5e7eb" : "none",
              fontSize: 14, lineHeight: 1.5, wordBreak: "break-word",
              borderBottomRightRadius: msg.sender === "admin" ? 4 : 14,
              borderBottomLeftRadius: msg.sender === "visitor" ? 4 : 14,
            }}>
              {msg.body}
            </div>
            <div style={{
              fontSize: 10, color: "#9ca3af", marginTop: 3, paddingLeft: 4, paddingRight: 4,
              textAlign: msg.sender === "admin" ? "right" : "left"
            }}>
              {msg.createdAt ? fmtTime(msg.createdAt) : ""}
            </div>
          </div>
        ))}
      </div>

      {isArchived ? (
        <div style={{
          padding: "14px 24px", background: "#fef9c3", borderTop: "1px solid #fde68a",
          fontSize: 13, color: "#92400e", textAlign: "center"
        }}>
          Bu sohbet arşivlendi. Ziyaretçi yeni bir sohbet başlatmalı.
        </div>
      ) : (
        <div style={{
          padding: "12px 20px", background: "#fff", borderTop: "1px solid #e5e7eb",
          display: "flex", gap: 10, alignItems: "flex-end"
        }}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
            placeholder="Cevabınızı yazın... (Enter = Gönder, Shift+Enter = Satır)"
            rows={2}
            style={{
              flex: 1, padding: "10px 14px", border: "1.5px solid #e5e7eb",
              borderRadius: 10, fontSize: 14, fontFamily: "inherit",
              resize: "none", outline: "none"
            }}
          />
          <button
            onClick={handleSend}
            disabled={sending || !input.trim()}
            style={{
              padding: "10px 22px", background: "#c9a76b", color: "#fff",
              border: "none", borderRadius: 10, fontWeight: 600, fontSize: 14,
              cursor: "pointer", opacity: sending || !input.trim() ? 0.5 : 1,
              flexShrink: 0
            }}
          >
            {sending ? "…" : "Gönder"}
          </button>
        </div>
      )}
    </div>
  );
}
