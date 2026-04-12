"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { AdminSession } from "../../../lib/admin-types";
import { LOCALE_FLAGS, LOCALE_LABELS } from "../../../lib/admin-types";

async function logoutAction() {
  const res = await fetch("/api/admin/logout", { method: "POST" });
  if (res.ok) window.location.href = "/admin/login";
}

type Props = {
  session:       AdminSession;
  pendingCount?: number;
  activePath?:   string;
};

export default function Sidebar({ session, pendingCount = 0, activePath = "" }: Props) {
  const isSuper = session.role === "super";
  const [chatBadge, setChatBadge] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    const poll = async () => {
      try {
        const chatLang = isSuper ? "all" : (session.locale ?? "all");
        const res = await fetch(`/api/chat/admin/list?lang=${chatLang}`);
        const data = await res.json();
        if (!data.success) return;

        const attention: ChatBadgeSession[] = (data.chats ?? []).filter(
          (c: ChatBadgeSession) => c.needs_attention
        );
        setChatBadge(attention.length);
      } catch {}
    };

    poll();
    timerRef.current = setInterval(poll, 3000);
    return () => clearInterval(timerRef.current);
  }, [isSuper, session.locale]);

  return (
    <aside className="admin-sidebar">
      {/* Logo */}
      <Link href="/admin/dashboard" className="admin-sidebar-logo">
        <div className="admin-sidebar-logo-mark">C</div>
        <div className="admin-sidebar-logo-text">
          CitizanShip
          <span className="admin-sidebar-logo-sub">Admin Panel</span>
        </div>
      </Link>

      {/* Admin info */}
      <div className="admin-info">
        <div className="admin-info-name">{session.name}</div>
        <div className="admin-info-meta">
          {session.locale ? (
            <span className="admin-locale-badge">
              {LOCALE_FLAGS[session.locale] ?? ""} {session.locale.toUpperCase()}
            </span>
          ) : !isSuper ? (
            <span className="admin-locale-badge" style={{ background: "#fee2e2", color: "#b91c1c" }}>
              Dil atanmamış
            </span>
          ) : (
            <span className="admin-locale-badge">🌐 Tüm Diller</span>
          )}
          <span className="admin-role-badge">
            {isSuper ? "Süper Admin" : "Dil Admini"}
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="admin-nav">
        <div className="admin-nav-section">
          <div className="admin-nav-title">Yönetim</div>

          <Link
            href="/admin/dashboard"
            className={`admin-nav-link${activePath === "dashboard" ? " active" : ""}`}
          >
            <span className="admin-nav-icon">📋</span>
            Sorular
            {pendingCount > 0 && (
              <span className="admin-nav-badge">{pendingCount}</span>
            )}
          </Link>

          <Link
            href="/admin/knowledge"
            className={`admin-nav-link${activePath === "knowledge" ? " active" : ""}`}
          >
            <span className="admin-nav-icon">📚</span>
            Bilgi Kütüphanesi
          </Link>

          <Link
            href="/admin/news"
            className={`admin-nav-link${activePath === "news" ? " active" : ""}`}
          >
            <span className="admin-nav-icon">📰</span>
            Haber Bültenleri
          </Link>

          <Link
            href="/admin/chat"
            className={`admin-nav-link${activePath === "chat" ? " active" : ""}`}
          >
            <span className="admin-nav-icon">💬</span>
            Canlı Sohbetler
            {chatBadge > 0 && (
              <span className="admin-nav-badge" style={{
                background: "#ef4444",
                animation: "sidebar-badge-pulse 1.5s ease-in-out infinite",
              }}>
                {chatBadge > 9 ? "9+" : chatBadge}
              </span>
            )}
          </Link>

          {isSuper && (
            <Link
              href="/admin/setup"
              className={`admin-nav-link${activePath === "setup" ? " active" : ""}`}
            >
              <span className="admin-nav-icon">👤</span>
              Admin Ekle
            </Link>
          )}
        </div>

        {/* Language legend */}
        {isSuper && (
          <div className="admin-nav-section">
            <div className="admin-nav-title">Dil Yetkileri</div>
            {["tr", "en", "ru", "ar", "fa"].map((loc) => (
              <div key={loc} className="admin-nav-link" style={{ cursor: "default", opacity: 0.7 }}>
                <span className="admin-nav-icon">{LOCALE_FLAGS[loc]}</span>
                <span style={{ fontSize: "12px" }}>
                  {LOCALE_LABELS[loc]} <span style={{ opacity: 0.5 }}>({loc})</span>
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="admin-nav-section">
          <div className="admin-nav-title">Site</div>
          <Link href="/" target="_blank" className="admin-nav-link">
            <span className="admin-nav-icon">🌐</span>
            Siteye Git
          </Link>
        </div>
      </nav>

      {/* Logout */}
      <div className="admin-logout">
        <button
          type="button"
          className="admin-logout-btn"
          onClick={logoutAction}
        >
          <span>🚪</span> Çıkış Yap
        </button>
      </div>

      <style>{`
        @keyframes sidebar-badge-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.1); }
        }
      `}</style>
    </aside>
  );
}

type ChatBadgeSession = {
  id: string;
  needs_attention?: boolean;
};
