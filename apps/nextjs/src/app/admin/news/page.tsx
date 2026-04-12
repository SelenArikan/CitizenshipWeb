import Link from "next/link";
import { redirect } from "next/navigation";

import { getSession }                  from "../../../lib/admin-auth";
import { getBulletins, getBulletinStats } from "../../../lib/news";
import { LOCALE_FLAGS, LOCALE_LABELS } from "../../../lib/admin-types";
import Sidebar from "../_components/Sidebar";

const LOCALES = ["tr", "en", "ru", "ar", "fa"];

const STATUS_COLORS = { published: "badge-approved", draft: "badge-pending", archived: "badge-rejected" } as const;
const STATUS_LABELS = { published: "Yayında", draft: "Taslak", archived: "Arşiv" } as const;

export default async function NewsAdminPage({
  searchParams
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const session = await getSession();
  if (!session) redirect("/admin/login?error=unauthorized");

  const params      = await searchParams;
  const isSuper     = session.role === "super";
  const selLocale   = isSuper ? (params.locale || undefined) : (session.locale ?? undefined);
  const selStatus   = params.status || "all";

  const bulletins = getBulletins({
    locale: selLocale,
    status: selStatus === "all" ? "all" : selStatus as "draft" | "published" | "archived"
  });

  const stats = getBulletinStats(isSuper ? selLocale : (session.locale ?? undefined));

  function filterUrl(ov: Record<string, string | undefined>) {
    const base: Record<string, string> = {};
    if (selLocale)          base.locale = selLocale;
    if (selStatus !== "all") base.status = selStatus;
    const merged = { ...base, ...ov };
    const qs = Object.entries(merged)
      .filter(([, v]) => v !== undefined && v !== "all" && v !== "")
      .map(([k, v]) => `${k}=${encodeURIComponent(v!)}`)
      .join("&");
    return `/admin/news${qs ? `?${qs}` : ""}`;
  }

  return (
    <div className="admin-root">
      <Sidebar session={session} activePath="news" />

      <div className="admin-main">
        <div className="admin-topbar">
          <span className="admin-topbar-title">Haber Bültenleri</span>
          <div className="admin-topbar-actions">
            <Link href="/admin/news/new" className="admin-btn admin-btn-gold admin-btn-sm">
              + Yeni Bülten
            </Link>
          </div>
        </div>

        <div className="admin-content">
          {/* Stats */}
          <div className="admin-stats">
            <div className="admin-stat-card total"><div className="admin-stat-value">{stats.total}</div><div className="admin-stat-label">Toplam</div></div>
            <div className="admin-stat-card approved"><div className="admin-stat-value">{stats.published}</div><div className="admin-stat-label">Yayında</div></div>
            <div className="admin-stat-card pending"><div className="admin-stat-value">{stats.draft}</div><div className="admin-stat-label">Taslak</div></div>
            <div className="admin-stat-card rejected"><div className="admin-stat-value">{stats.archived}</div><div className="admin-stat-label">Arşiv</div></div>
          </div>

          {/* Filters */}
          <div className="admin-card" style={{ marginBottom: "20px" }}>
            <div className="admin-filters">
              {isSuper && (
                <div className="admin-filter-row">
                  <span className="admin-filter-label">Dil</span>
                  <div className="admin-filter-tabs">
                    <Link href={filterUrl({ locale: undefined })} className={`admin-filter-tab${!selLocale ? " active" : ""}`}>🌐 Tümü</Link>
                    {LOCALES.map((loc) => (
                      <Link key={loc} href={filterUrl({ locale: loc })} className={`admin-filter-tab${selLocale === loc ? " active" : ""}`}>
                        {LOCALE_FLAGS[loc]} {loc.toUpperCase()}
                        <span style={{ marginLeft: "4px", fontSize: "10px", background: "rgba(0,0,0,0.08)", padding: "1px 5px", borderRadius: "999px" }}>
                          {getBulletinStats(loc).total}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {!isSuper && session.locale && (
                <div className="admin-filter-row">
                  <span className="admin-filter-label">Dil</span>
                  <div className="admin-filter-tab active" style={{ cursor: "default" }}>
                    {LOCALE_FLAGS[session.locale]} {LOCALE_LABELS[session.locale]}
                  </div>
                </div>
              )}

              <div className="admin-filter-row">
                <span className="admin-filter-label">Durum</span>
                <div className="admin-filter-tabs">
                  {(["all", "published", "draft", "archived"] as const).map((s) => (
                    <Link
                      key={s}
                      href={filterUrl({ status: s === "all" ? undefined : s })}
                      className={`admin-filter-tab${
                        selStatus === s
                          ? s === "all" ? " active"
                          : s === "published" ? " active-approved"
                          : s === "draft" ? " active-pending"
                          : " active-rejected"
                          : ""
                      }`}
                    >
                      {s === "all" ? "Tümü" : STATUS_LABELS[s]}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* List */}
          {bulletins.length === 0 ? (
            <div className="admin-card">
              <div className="admin-empty">
                <div className="admin-empty-icon">📰</div>
                <div className="admin-empty-title">Bülten bulunamadı</div>
                <div className="admin-empty-text">
                  <Link href="/admin/news/new" style={{ color: "#c9a76b" }}>Yeni bülten ekleyin.</Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="admin-question-list">
              {bulletins.map((b) => (
                <Link key={b.id} href={`/admin/news/${b.id}`} className="admin-question-card">
                  {b.coverImage && (
                    <div style={{
                      width: "64px", height: "64px", borderRadius: "8px",
                      background: `url(${b.coverImage}) center/cover no-repeat`,
                      flexShrink: 0
                    }} />
                  )}
                  <div className="admin-question-meta">
                    <span className="badge-locale">{LOCALE_FLAGS[b.locale] ?? ""} {b.locale.toUpperCase()}</span>
                    <span className={`badge ${STATUS_COLORS[b.status]}`}>{STATUS_LABELS[b.status]}</span>
                    {b.isFeatured && <span title="Öne çıkan" style={{ fontSize: "14px" }}>⭐</span>}
                  </div>
                  <div className="admin-question-body">
                    <div className="admin-question-name">
                      {b.title}
                      <span style={{ fontWeight: 400, color: "#9ca3af", fontSize: "11px", marginLeft: "8px" }}>{b.category}</span>
                    </div>
                    <div className="admin-question-text">{b.summary}</div>
                    <div className="admin-question-date">
                      {b.publishedAt
                        ? new Date(b.publishedAt).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })
                        : "Yayın tarihi yok"}
                      {b.tags.length > 0 && (
                        <span style={{ marginLeft: "10px" }}>{b.tags.slice(0, 3).map((t) => `#${t}`).join(" ")}</span>
                      )}
                    </div>
                  </div>
                  <div style={{ color: "#d1d5db", fontSize: "18px", flexShrink: 0 }}>›</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
