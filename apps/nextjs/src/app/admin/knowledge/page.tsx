import Link from "next/link";
import { redirect } from "next/navigation";

import { getSession }      from "../../../lib/admin-auth";
import { getArticles, getArticleStats } from "../../../lib/knowledge";
import { LOCALE_FLAGS, LOCALE_LABELS }  from "../../../lib/admin-types";
import Sidebar from "../_components/Sidebar";

const LOCALES = ["tr", "en", "ru", "ar", "fa"];

const STATUS_COLORS = {
  published: "badge-approved",
  draft:     "badge-pending",
  archived:  "badge-rejected"
} as const;

const STATUS_LABELS = {
  published: "Yayında",
  draft:     "Taslak",
  archived:  "Arşiv"
} as const;

export default async function KnowledgePage({
  searchParams
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const session = await getSession();
  if (!session) redirect("/admin/login?error=unauthorized");

  const params = await searchParams;
  const isSuper = session.role === "super";

  const selectedLocale = isSuper
    ? (params.locale || undefined)
    : (session.locale ?? undefined);

  const selectedStatus = params.status || "all";

  const articles = getArticles({
    locale: selectedLocale,
    status: selectedStatus === "all" ? "all" : selectedStatus as "draft" | "published" | "archived"
  });

  const stats = getArticleStats(isSuper ? selectedLocale : (session.locale ?? undefined));

  function filterUrl(overrides: Record<string, string | undefined>): string {
    const base: Record<string, string> = {};
    if (selectedLocale)           base.locale = selectedLocale;
    if (selectedStatus !== "all") base.status = selectedStatus;
    const merged = { ...base, ...overrides };
    const qs = Object.entries(merged)
      .filter(([, v]) => v !== undefined && v !== "all" && v !== "")
      .map(([k, v]) => `${k}=${encodeURIComponent(v!)}`)
      .join("&");
    return `/admin/knowledge${qs ? `?${qs}` : ""}`;
  }

  return (
    <div className="admin-root">
      <Sidebar session={session} activePath="knowledge" />

      <div className="admin-main">
        <div className="admin-topbar">
          <span className="admin-topbar-title">Bilgi Kütüphanesi</span>
          <div className="admin-topbar-actions">
            <Link href="/admin/knowledge/new" className="admin-btn admin-btn-gold admin-btn-sm">
              + Yeni Makale
            </Link>
          </div>
        </div>

        <div className="admin-content">

          {/* Stats */}
          <div className="admin-stats">
            <div className="admin-stat-card total">
              <div className="admin-stat-value">{stats.total}</div>
              <div className="admin-stat-label">Toplam Makale</div>
            </div>
            <div className="admin-stat-card approved">
              <div className="admin-stat-value">{stats.published}</div>
              <div className="admin-stat-label">Yayında</div>
            </div>
            <div className="admin-stat-card pending">
              <div className="admin-stat-value">{stats.draft}</div>
              <div className="admin-stat-label">Taslak</div>
            </div>
            <div className="admin-stat-card rejected">
              <div className="admin-stat-value">{stats.archived}</div>
              <div className="admin-stat-label">Arşiv</div>
            </div>
          </div>

          {/* Filters */}
          <div className="admin-card" style={{ marginBottom: "20px" }}>
            <div className="admin-filters">
              {isSuper && (
                <div className="admin-filter-row">
                  <span className="admin-filter-label">Dil</span>
                  <div className="admin-filter-tabs">
                    <Link href={filterUrl({ locale: undefined })} className={`admin-filter-tab${!selectedLocale ? " active" : ""}`}>
                      🌐 Tümü
                    </Link>
                    {LOCALES.map((loc) => (
                      <Link key={loc} href={filterUrl({ locale: loc })} className={`admin-filter-tab${selectedLocale === loc ? " active" : ""}`}>
                        {LOCALE_FLAGS[loc]} {loc.toUpperCase()}
                        <span style={{ marginLeft: "4px", fontSize: "10px", background: "rgba(0,0,0,0.08)", padding: "1px 5px", borderRadius: "999px" }}>
                          {getArticleStats(loc).total}
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
                        selectedStatus === s ? (s === "all" ? " active" : ` active-${s === "published" ? "approved" : s === "draft" ? "pending" : "rejected"}`) : ""
                      }`}
                    >
                      {s === "all" ? "Tümü" : STATUS_LABELS[s]}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Article list */}
          {articles.length === 0 ? (
            <div className="admin-card">
              <div className="admin-empty">
                <div className="admin-empty-icon">📚</div>
                <div className="admin-empty-title">Makale bulunamadı</div>
                <div className="admin-empty-text">
                  Seçili filtreler için makale yok.{" "}
                  <Link href="/admin/knowledge/new" style={{ color: "#c9a76b" }}>Yeni makale ekleyin.</Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="admin-question-list">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href={`/admin/knowledge/${article.id}`}
                  className="admin-question-card"
                >
                  {/* Cover image thumbnail */}
                  {article.coverImage && (
                    <div style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "8px",
                      background: `url(${article.coverImage}) center/cover no-repeat`,
                      flexShrink: 0
                    }} />
                  )}

                  {/* Meta */}
                  <div className="admin-question-meta">
                    <span className="badge-locale">
                      {LOCALE_FLAGS[article.locale] ?? ""} {article.locale.toUpperCase()}
                    </span>
                    <span className={`badge ${STATUS_COLORS[article.status]}`}>
                      {STATUS_LABELS[article.status]}
                    </span>
                    {article.isFeatured && (
                      <span title="Öne çıkan" style={{ fontSize: "14px" }}>⭐</span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="admin-question-body">
                    <div className="admin-question-name">
                      {article.title}
                      <span style={{ fontWeight: 400, color: "#9ca3af", fontSize: "11px", marginLeft: "8px" }}>
                        {article.category}
                      </span>
                    </div>
                    <div className="admin-question-text">{article.summary}</div>
                    <div className="admin-question-date">
                      {new Date(article.updatedAt).toLocaleDateString("tr-TR", {
                        day: "numeric", month: "long", year: "numeric"
                      })}
                      {article.tags.length > 0 && (
                        <span style={{ marginLeft: "12px" }}>
                          {article.tags.slice(0, 3).map(t => `#${t}`).join(" ")}
                        </span>
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
