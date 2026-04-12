import Link from "next/link";
import { redirect } from "next/navigation";

import { getSession }  from "../../../lib/admin-auth";
import { getQuestions, getStats } from "../../../lib/questions";
import {
  LOCALE_FLAGS,
  LOCALE_LABELS,
  STATUS_COLORS,
  STATUS_LABELS,
  type QuestionStatus
} from "../../../lib/admin-types";
import Sidebar from "../_components/Sidebar";

const LOCALES: string[] = ["tr", "en", "ru", "ar", "fa"];

export default async function DashboardPage({
  searchParams
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const session = await getSession();
  if (!session) redirect("/admin/login?error=unauthorized");

  const params = await searchParams;

  /* ── Filter logic ──────────────────────────────────────── */
  const isSuper = session.role === "super";
  const hasLocaleAccess = isSuper || Boolean(session.locale);
  const localeForQueries = isSuper
    ? (params.locale || undefined)
    : (session.locale || "__missing_locale__");

  // For locale admins, locale is fixed to their assigned language
  const selectedLocale: string | undefined = isSuper ? localeForQueries : session.locale;

  const selectedStatus = (params.status ?? "all") as QuestionStatus | "all";

  /* ── Data ──────────────────────────────────────────────── */
  const questions = getQuestions({
    locale: localeForQueries,
    status: selectedStatus
  });

  const stats = getStats(localeForQueries);

  const pendingCount = getStats(
    isSuper ? undefined : localeForQueries
  ).pending;

  /* ── Build filter URL helper ────────────────────────────── */
  function filterUrl(overrides: Record<string, string | undefined>): string {
    const base: Record<string, string> = {};
    if (selectedLocale)              base.locale = selectedLocale;
    if (selectedStatus !== "all")    base.status = selectedStatus;
    const merged = { ...base, ...overrides };
    const qs = Object.entries(merged)
      .filter(([, v]) => v !== undefined && v !== "all" && v !== "")
      .map(([k, v]) => `${k}=${encodeURIComponent(v!)}`)
      .join("&");
    return `/admin/dashboard${qs ? `?${qs}` : ""}`;
  }

  /* ── Render ─────────────────────────────────────────────── */
  return (
    <div className="admin-root">
      <Sidebar session={session} pendingCount={pendingCount} activePath="dashboard" />

      <div className="admin-main">
        {/* Top bar */}
        <div className="admin-topbar">
          <div>
            <span className="admin-topbar-title">Sorular</span>
            {selectedLocale && (
              <span style={{ marginLeft: "10px", fontSize: "12px", color: "#6b7280" }}>
                {LOCALE_FLAGS[selectedLocale]} {LOCALE_LABELS[selectedLocale]}
              </span>
            )}
          </div>
          <div className="admin-topbar-actions">
            <span style={{ fontSize: "12px", color: "#9ca3af" }}>
              {session.name} olarak giriş yapıldı
            </span>
          </div>
        </div>

        <div className="admin-content">
          {!hasLocaleAccess && (
            <div className="admin-error" style={{ marginBottom: "20px" }}>
              Bu dil adminine henüz bir dil atanmadığı için soru listesi gösterilmiyor.
            </div>
          )}

          {/* Stats */}
          <div className="admin-stats">
            <div className="admin-stat-card total">
              <div className="admin-stat-value">{stats.total}</div>
              <div className="admin-stat-label">Toplam Soru</div>
            </div>
            <div className="admin-stat-card pending">
              <div className="admin-stat-value">{stats.pending}</div>
              <div className="admin-stat-label">Bekleyen</div>
            </div>
            <div className="admin-stat-card approved">
              <div className="admin-stat-value">{stats.approved}</div>
              <div className="admin-stat-label">Onaylanan</div>
            </div>
            <div className="admin-stat-card rejected">
              <div className="admin-stat-value">{stats.rejected}</div>
              <div className="admin-stat-label">Reddedilen</div>
            </div>
          </div>

          {/* Filters */}
          <div className="admin-card" style={{ marginBottom: "20px" }}>
            <div className="admin-filters">

              {/* Language filter — only for super admin */}
              {isSuper && (
                <div className="admin-filter-row">
                  <span className="admin-filter-label">Dil</span>
                  <div className="admin-filter-tabs">
                    <Link
                      href={filterUrl({ locale: undefined })}
                      className={`admin-filter-tab${!selectedLocale ? " active" : ""}`}
                    >
                      🌐 Tümü
                    </Link>
                    {LOCALES.map((loc) => (
                      <Link
                        key={loc}
                        href={filterUrl({ locale: loc })}
                        className={`admin-filter-tab${selectedLocale === loc ? " active" : ""}`}
                      >
                        {LOCALE_FLAGS[loc]} {loc.toUpperCase()}
                        <span style={{
                          marginLeft: "4px",
                          fontSize: "10px",
                          background: "rgba(0,0,0,0.08)",
                          padding: "1px 5px",
                          borderRadius: "999px"
                        }}>
                          {getStats(loc).total}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Locale admin info */}
              {!isSuper && session.locale && (
                <div className="admin-filter-row">
                  <span className="admin-filter-label">Dil</span>
                  <div
                    className="admin-filter-tab active"
                    style={{ cursor: "default" }}
                  >
                    {LOCALE_FLAGS[session.locale]} {LOCALE_LABELS[session.locale]}
                    <span style={{ marginLeft: "4px", opacity: 0.7, fontSize: "10px" }}>
                      (yetki kısıtlaması)
                    </span>
                  </div>
                </div>
              )}

              {!isSuper && !session.locale && (
                <div className="admin-filter-row">
                  <span className="admin-filter-label">Dil</span>
                  <div
                    className="admin-filter-tab active"
                    style={{ cursor: "default", background: "#fee2e2", borderColor: "#fecaca", color: "#b91c1c" }}
                  >
                    Dil atanmamış
                  </div>
                </div>
              )}

              {/* Status filter */}
              <div className="admin-filter-row">
                <span className="admin-filter-label">Durum</span>
                <div className="admin-filter-tabs">
                  {([
                    { key: "all",      label: "Tümü" },
                    { key: "pending",  label: "Bekleyen" },
                    { key: "approved", label: "Onaylanan" },
                    { key: "rejected", label: "Reddedilen" }
                  ] as { key: QuestionStatus | "all"; label: string }[]).map(({ key, label }) => {
                    const isActive = selectedStatus === key;
                    const activeClass = isActive
                      ? key === "all" ? " active" : ` active-${key}`
                      : "";
                    return (
                      <Link
                        key={key}
                        href={filterUrl({ status: key === "all" ? undefined : key })}
                        className={`admin-filter-tab${activeClass}`}
                      >
                        {label}
                        {key !== "all" && (
                          <span style={{
                            marginLeft: "4px",
                            fontSize: "10px",
                            background: "rgba(0,0,0,0.1)",
                            padding: "1px 5px",
                            borderRadius: "999px"
                          }}>
                            {key === "pending"  ? stats.pending  :
                             key === "approved" ? stats.approved :
                             stats.rejected}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Question list */}
          {questions.length === 0 ? (
            <div className="admin-card">
              <div className="admin-empty">
                <div className="admin-empty-icon">📭</div>
                <div className="admin-empty-title">Soru bulunamadı</div>
                <div className="admin-empty-text">
                  Seçili filtreler için henüz soru yok. Ziyaretçiler soru gönderdiğinde burada görünecek.
                </div>
              </div>
            </div>
          ) : (
            <div className="admin-question-list">
              {questions.map((q) => (
                <Link
                  key={q.id}
                  href={`/admin/questions/${q.id}`}
                  className={`admin-question-card${q.status === "pending" ? " unread" : ""}`}
                >
                  {/* Locale + status badges */}
                  <div className="admin-question-meta">
                    <span className="badge-locale">
                      {LOCALE_FLAGS[q.locale] ?? ""} {q.locale.toUpperCase()}
                    </span>
                    <span className={`badge ${STATUS_COLORS[q.status]}`}>
                      {STATUS_LABELS[q.status]}
                    </span>
                    <span
                      className="badge"
                      style={{
                        background: q.replyMode === "private" ? "#ede9fe" : "#fef3c7",
                        color: q.replyMode === "private" ? "#6d28d9" : "#92400e",
                      }}
                    >
                      {q.replyMode === "private" ? "📧 Özel" : "🌍 Public"}
                    </span>
                    {q.isPublic && q.status === "approved" && (
                      <span title="Herkese açık" style={{ fontSize: "14px" }}>🌍</span>
                    )}
                  </div>

                  {/* Question body */}
                  <div className="admin-question-body">
                    <div className="admin-question-name">
                      {q.name}
                      {q.email && (
                        <span style={{ fontWeight: 400, color: "#9ca3af", fontSize: "11px", marginLeft: "8px" }}>
                          {q.email}
                        </span>
                      )}
                    </div>
                    <div className="admin-question-text">{q.question}</div>
                    {q.answer && (
                      <div style={{
                        marginTop: "4px",
                        fontSize: "11px",
                        color: "#6b7280",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px"
                      }}>
                        <span>✓</span> Cevaplandı — {q.answeredBy}
                      </div>
                    )}
                    <div className="admin-question-date">
                      {new Date(q.submittedAt).toLocaleDateString("tr-TR", {
                        day: "numeric", month: "long", year: "numeric",
                        hour: "2-digit", minute: "2-digit"
                      })}
                    </div>
                  </div>

                  {/* Arrow */}
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
