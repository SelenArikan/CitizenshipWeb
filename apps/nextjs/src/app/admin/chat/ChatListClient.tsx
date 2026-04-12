"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";

const LOCALE_FLAGS: Record<string, string> = { tr: "🇹🇷", en: "🇬🇧", ru: "🇷🇺", ar: "🇸🇦", fa: "🇮🇷" };
const LOCALES = ["tr", "en", "ru", "ar", "fa"];

type ChatSession = {
  id: string;
  lang: string;
  status: string;
  updated_at: string;
  created_at: string;
  needs_attention?: boolean;
  admin_heartbeat_at?: string | null;
  last_message?: { message: string; sender_type: string; created_at: string } | null;
};

function fmtTime(ts: string): string {
  const date = new Date(ts + (ts.includes("Z") || ts.includes("+") ? "" : "Z"));
  const diff = Math.floor((Date.now() - date.getTime()) / 1000);
  if (diff < 60)    return `${diff}sn önce`;
  if (diff < 3600)  return `${Math.floor(diff / 60)}dk önce`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}sa önce`;
  return date.toLocaleDateString("tr-TR", { day: "numeric", month: "short" });
}

function isAdminOnline(hbAt?: string | null): boolean {
  if (!hbAt) return false;
  // SQLite CURRENT_TIMESTAMP = UTC without 'Z' suffix — append Z for proper parse
  const normalized = hbAt.includes("Z") || hbAt.includes("+") ? hbAt : hbAt + "Z";
  const diffSec = (Date.now() - new Date(normalized).getTime()) / 1000;
  return diffSec < 25;
}

export default function AdminChatClient({
  isSuper,
  initialLocale,
}: {
  isSuper: boolean;
  initialLocale?: string;
}) {
  const [localeFilter, setLocaleFilter] = useState<string | undefined>(initialLocale);
  const [tab, setTab]                   = useState<"active" | "archived">("active");
  const [active, setActive]             = useState<ChatSession[]>([]);
  const [archived, setArchived]         = useState<ChatSession[]>([]);
  const [stats, setStats]               = useState({ active: 0, archived: 0 });
  const [loading, setLoading]           = useState(true);

  const pollTimer      = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  // ─── Polling ─────────────────────────────────────────────────────────────
  const fetchSessions = useCallback(async (showLoader = false) => {
    try {
      if (showLoader) {
        setLoading(true);
      }
      const lang = localeFilter ?? "all";
      const res = await fetch(`/api/chat/admin/list?lang=${lang}`);
      const data = await res.json();
      if (!data.success) {
        setLoading(false);
        return;
      }

      const chats: ChatSession[] = data.chats ?? [];
      const freshActive   = chats.filter(c => c.status !== "finished");
      const freshArchived = chats.filter(c => c.status === "finished");

      setActive(freshActive);
      setArchived(freshArchived);
      setStats({ active: freshActive.length, archived: freshArchived.length });
      setLoading(false);
    } catch {
      setLoading(false);
    }
  }, [localeFilter]);

  // İlk yükleme + polling başlat
  useEffect(() => {
    const bootTimer = setTimeout(() => {
      fetchSessions(true);
    }, 0);
    pollTimer.current = setInterval(() => {
      fetchSessions();
    }, 4000);
    return () => {
      clearTimeout(bootTimer);
      clearInterval(pollTimer.current);
    };
  }, [fetchSessions]);

  return (
    <div className="admin-content">
      {/* İstatistik satırı */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <span style={{ fontSize: 12, color: "#6b7280" }}>
          <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "#22c55e", marginRight: 5 }} />
          Aktif: {stats.active}
        </span>
        <span style={{ fontSize: 12, color: "#6b7280" }}>
          <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "#d1d5db", marginRight: 5 }} />
          Arşiv: {stats.archived}
        </span>
        <span style={{ fontSize: 11, color: "#9ca3af", display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{
            display: "inline-block", width: 6, height: 6, borderRadius: "50%",
            background: "#22c55e",
            animation: "pulse-dot 1.5s infinite",
          }} />
          Otomatik yenileniyor
        </span>
      </div>

      {/* Dil filtresi (sadece süper admin) */}
      {isSuper && (
        <div className="admin-card" style={{ marginBottom: "16px" }}>
          <div className="admin-filter-row">
            <span className="admin-filter-label">Dil</span>
            <div className="admin-filter-tabs">
              <button
                onClick={() => setLocaleFilter(undefined)}
                className={`admin-filter-tab${!localeFilter ? " active" : ""}`}
              >🌐 Tümü</button>
              {LOCALES.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setLocaleFilter(loc)}
                  className={`admin-filter-tab${localeFilter === loc ? " active" : ""}`}
                >
                  {LOCALE_FLAGS[loc]} {loc.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab */}
      <div className="admin-card" style={{ marginBottom: "16px" }}>
        <div className="admin-filter-row">
          <span className="admin-filter-label">Görünüm</span>
          <div className="admin-filter-tabs">
            <button
              onClick={() => setTab("active")}
              className={`admin-filter-tab${tab === "active" ? " active" : ""}`}
            >Aktif</button>
            <button
              onClick={() => setTab("archived")}
              className={`admin-filter-tab${tab === "archived" ? " active-rejected" : ""}`}
            >Arşiv</button>
          </div>
        </div>
      </div>

      {/* Yükleniyor */}
      {loading && (
        <div className="admin-card">
          <div className="admin-empty">
            <div className="admin-empty-text">Sohbetler yükleniyor...</div>
          </div>
        </div>
      )}

      {/* Aktif sohbetler */}
      {!loading && tab === "active" && (
        active.length === 0 ? (
          <div className="admin-card">
            <div className="admin-empty">
              <div className="admin-empty-icon">💬</div>
              <div className="admin-empty-title">Aktif sohbet yok</div>
              <div className="admin-empty-text">Ziyaretçiler sohbet başlattığında burada görünecek.</div>
            </div>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "14px" }}>
            {active.map((s) => {
              const online = isAdminOnline(s.admin_heartbeat_at);
              const hasUnread = !!s.needs_attention;
              return (
                <Link key={s.id} href={`/admin/chat/${s.id}`} style={{ textDecoration: "none" }}>
                  <div className="admin-question-card" style={{ position: "relative", cursor: "pointer" }}>
                    {/* Admin online göstergesi */}
                    <div style={{
                      position: "absolute", top: 12, right: 12,
                      width: 11, height: 11, borderRadius: "50%",
                      background: online ? "#22c55e" : "#d1d5db",
                      boxShadow: online ? "0 0 0 3px rgba(34,197,94,0.2)" : "none",
                    }} title={online ? "Admin bağlı" : "Admin çevrimdışı"} />

                    <div className="admin-question-meta">
                      <span className="badge-locale">{LOCALE_FLAGS[s.lang] ?? ""} {s.lang.toUpperCase()}</span>
                      {hasUnread && (
                        <span style={{
                          background: "#ef4444", color: "#fff", fontSize: 10,
                          fontWeight: 700, padding: "1px 7px", borderRadius: 999,
                          animation: "pulse-dot 1.5s infinite",
                        }}>● Yanıt bekliyor</span>
                      )}
                    </div>

                    <div className="admin-question-body">
                      <div className="admin-question-name">
                        Ziyaretçi - {s.id.substring(0, 4)}
                      </div>
                      <div className="admin-question-text">
                        {s.last_message?.message
                          ? s.last_message.message.slice(0, 80) + (s.last_message.message.length > 80 ? "…" : "")
                          : <em style={{ color: "#9ca3af" }}>Henüz mesaj yok</em>}
                      </div>
                      <div className="admin-question-date">
                        {s.last_message?.created_at ? fmtTime(s.last_message.created_at) : fmtTime(s.updated_at)}
                        &nbsp;·&nbsp;
                        <span style={{ color: online ? "#15803d" : "#6b7280" }}>
                          {online ? "● Admin bağlı" : "○ Bekleniyor"}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )
      )}

      {/* Arşivlenmiş sohbetler */}
      {!loading && tab === "archived" && (
        archived.length === 0 ? (
          <div className="admin-card">
            <div className="admin-empty">
              <div className="admin-empty-icon">📁</div>
              <div className="admin-empty-title">Arşiv boş</div>
              <div className="admin-empty-text">30 dakika hareketsiz kalan sohbetler otomatik arşivlenir.</div>
            </div>
          </div>
        ) : (
          <div className="admin-question-list">
            {archived.map((s) => (
              <Link key={s.id} href={`/admin/chat/${s.id}`} className="admin-question-card">
                <div className="admin-question-meta">
                  <span className="badge-locale">{LOCALE_FLAGS[s.lang] ?? ""} {s.lang.toUpperCase()}</span>
                  <span style={{ background: "#f3f4f6", color: "#6b7280", fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 999 }}>Arşiv</span>
                </div>
                <div className="admin-question-body">
                  <div className="admin-question-name">Ziyaretçi - {s.id.substring(0, 4)}</div>
                  <div className="admin-question-date">
                    {fmtTime(s.updated_at)} arşivlendi
                  </div>
                </div>
                <div style={{ color: "#d1d5db", fontSize: 18 }}>›</div>
              </Link>
            ))}
          </div>
        )
      )}

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
