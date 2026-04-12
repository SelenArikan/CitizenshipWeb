import Link from "next/link";
import { redirect, notFound } from "next/navigation";

import { getSession } from "../../../../lib/admin-auth";
import { sendPrivateQuestionReply } from "../../../../lib/mail";
import {
  answerQuestion,
  getQuestion,
  deleteQuestion,
  markPrivateReplyFailed,
  markPrivateReplySent,
} from "../../../../lib/questions";
import {
  LOCALE_FLAGS,
  LOCALE_LABELS,
  STATUS_COLORS,
  STATUS_LABELS,
  type QuestionStatus
} from "../../../../lib/admin-types";
import Sidebar from "../../_components/Sidebar";

/* ── Server Actions ─────────────────────────────────────── */
async function saveAnswer(formData: FormData) {
  "use server";

  const session = await getSession();
  if (!session) redirect("/admin/login");

  const id       = formData.get("id") as string;
  const answer   = formData.get("answer") as string;
  const status   = formData.get("status") as QuestionStatus;
  const isPublic = formData.get("isPublic") === "true";

  if (!id || !answer?.trim()) return;

  // Locale admin can only answer questions in their locale
  const q = getQuestion(id);
  if (!q) return;
  if (session.role === "lang" && q.locale !== session.locale) return;

  const nextIsPublic = q.replyMode === "public" ? isPublic : false;
  const trimmedAnswer = answer.trim();
  const shouldSendPrivateReply =
    q.replyMode === "private" &&
    status === "approved" &&
    Boolean(q.email) &&
    trimmedAnswer.length > 0 &&
    (q.status !== "approved" || (q.answer ?? "").trim() !== trimmedAnswer || !q.privateReplySentAt);

  answerQuestion(id, answer, session.name, status, nextIsPublic);

  let mailStatus = "";
  if (q.replyMode === "private" && status === "approved") {
    if (!q.email) {
      mailStatus = "missing";
      markPrivateReplyFailed(id, "Private reply was approved but the question does not have an email address.");
    } else if (shouldSendPrivateReply) {
      try {
        await sendPrivateQuestionReply(
          {
            ...q,
            answer: trimmedAnswer,
            answeredBy: session.name,
            answeredAt: new Date().toISOString(),
            status,
            isPublic: false,
          },
          trimmedAnswer,
        );
        markPrivateReplySent(id, new Date().toISOString());
        mailStatus = "sent";
      } catch (error) {
        const message = error instanceof Error ? error.message : "Private reply email could not be sent.";
        markPrivateReplyFailed(id, message);
        mailStatus = "failed";
      }
    }
  }

  redirect(`/admin/questions/${id}?saved=1${mailStatus ? `&mail=${mailStatus}` : ""}`);
}

async function deleteQuestionAction(formData: FormData) {
  "use server";

  const session = await getSession();
  if (!session || session.role !== "super") redirect("/admin/dashboard");

  const id = formData.get("id") as string;
  deleteQuestion(id);
  redirect("/admin/dashboard");
}

/* ── Page ───────────────────────────────────────────────── */
export default async function QuestionDetailPage({
  params,
  searchParams
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string>>;
}) {
  const session = await getSession();
  if (!session) redirect("/admin/login?error=unauthorized");

  const { id }  = await params;
  const sp      = await searchParams;
  const saved   = sp.saved === "1";
  const mailStatus = sp.mail;

  const q = getQuestion(id);
  if (!q) notFound();

  // Locale admin cannot access other locale's questions
  if (session.role === "lang" && q.locale !== session.locale) {
    redirect("/admin/dashboard");
  }

  const pendingCount = 0; // simplified

  return (
    <div className="admin-root">
      <Sidebar session={session} pendingCount={pendingCount} activePath="dashboard" />

      <div className="admin-main">
        {/* Top bar */}
        <div className="admin-topbar">
          <div className="admin-breadcrumb" style={{ margin: 0 }}>
            <Link href="/admin/dashboard">Sorular</Link>
            <span>›</span>
            <span style={{ color: "#374151" }}>Soru Detayı</span>
          </div>
          <div className="admin-topbar-actions">
            <Link href="/admin/dashboard" className="admin-btn admin-btn-ghost admin-btn-sm">
              ← Geri Dön
            </Link>
          </div>
        </div>

        <div className="admin-content">
          {saved && (
            <div className="admin-success" style={{ marginBottom: "20px" }}>
              ✓ Cevap başarıyla kaydedildi.
            </div>
          )}
          {mailStatus === "sent" && (
            <div className="admin-success" style={{ marginBottom: "20px" }}>
              ✓ Özel cevap e-posta ile kullanıcıya gönderildi.
            </div>
          )}
          {mailStatus === "failed" && (
            <div className="admin-error" style={{ marginBottom: "20px" }}>
              Özel cevap kaydedildi ancak e-posta gönderimi başarısız oldu. SMTP ayarlarını kontrol edin.
            </div>
          )}
          {mailStatus === "missing" && (
            <div className="admin-error" style={{ marginBottom: "20px" }}>
              Bu soru özel yanıt talebiyle geldi ancak kayıtlı e-posta adresi yok.
            </div>
          )}

          <div className="admin-detail-grid">

            {/* Left: Question + Answer form */}
            <div>

              {/* Question display */}
              <div className="admin-card" style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
                      {q.replyMode === "private" ? "📧 Özel cevap" : "🌍 Paylaşılabilir"}
                    </span>
                    {q.isPublic && q.status === "approved" && (
                      <span className="badge" style={{ background: "#e0f2fe", color: "#0369a1" }}>
                        🌍 Herkese Açık
                      </span>
                    )}
                  </div>
                </div>

                <div className="admin-question-display">
                  <div className="admin-question-display-label">Gelen Soru</div>
                  <div className="admin-question-display-text">{q.question}</div>
                </div>

                {q.answer && (
                  <div className="admin-question-display" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
                    <div className="admin-question-display-label" style={{ color: "#065f46" }}>
                      Mevcut Cevap — {q.answeredBy}
                    </div>
                    <div className="admin-question-display-text">{q.answer}</div>
                  </div>
                )}
              </div>

              {/* Answer form */}
              <div className="admin-card">
                <h3 className="admin-card-title">
                  {q.answer ? "Cevabı Düzenle" : "Cevap Yaz"}
                </h3>

                <form action={saveAnswer} className="admin-form">
                  <input type="hidden" name="id" value={q.id} />

                  <div className="admin-form-group">
                    <label className="admin-form-label">Cevap Metni *</label>
                    <textarea
                      name="answer"
                      className="admin-form-textarea"
                      placeholder="Sorunun cevabını buraya yazın..."
                      defaultValue={q.answer ?? ""}
                      required
                      style={{ minHeight: "180px" }}
                    />
                    <span className="admin-form-hint">
                      Dil: {LOCALE_LABELS[q.locale] ?? q.locale} — Cevabı bu dilde yazın.
                    </span>
                  </div>

                  {/* Status */}
                  <div className="admin-form-group">
                    <label className="admin-form-label">Durum</label>
                    <select name="status" className="admin-form-select" defaultValue={q.status}>
                      <option value="pending">⏳ Bekliyor</option>
                      <option value="approved">✓ Onayla</option>
                      <option value="rejected">✗ Reddet</option>
                    </select>
                  </div>

                  {/* Public visibility toggle */}
                  {q.replyMode === "public" ? (
                    <div className="admin-form-group">
                      <div className="admin-toggle-row">
                        <div className="admin-toggle-info">
                          <div className="admin-toggle-title">Herkese Açık</div>
                          <div className="admin-toggle-desc">
                            Açılırsa bu soru ve cevap SSS sayfasında herkese görünür olur.
                            Yalnızca onaylanan sorularda geçerlidir.
                          </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                          <label style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", cursor: "pointer" }}>
                            <input type="radio" name="isPublic" value="true" defaultChecked={q.isPublic} />
                            <span style={{ color: "#10b981" }}>Evet, SSS&apos;de yayımla</span>
                          </label>
                          <label style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", cursor: "pointer" }}>
                            <input type="radio" name="isPublic" value="false" defaultChecked={!q.isPublic} />
                            <span style={{ color: "#6b7280" }}>Hayır, admin içinde kalsın</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="admin-form-group">
                      <div className="admin-toggle-row">
                        <div className="admin-toggle-info">
                          <div className="admin-toggle-title">Özel Cevap Akışı</div>
                          <div className="admin-toggle-desc">
                            Bu kayıt özel yanıt talebiyle geldiği için sitede yayımlanmaz.
                            Onaylandığında cevap kayıtlı e-posta adresine gönderilir.
                          </div>
                        </div>
                        <div style={{ fontSize: "12px", color: q.email ? "#10b981" : "#ef4444", maxWidth: "190px", textAlign: "right" }}>
                          {q.email ? `Gönderim adresi: ${q.email}` : "E-posta adresi bulunamadı"}
                        </div>
                      </div>
                    </div>
                  )}

                  <div style={{ display: "flex", gap: "10px" }}>
                    <button type="submit" name="status" value="approved" className="admin-btn admin-btn-success">
                      ✓ Onayla ve Kaydet
                    </button>
                    <button type="submit" className="admin-btn admin-btn-primary">
                      Kaydet
                    </button>
                    <button type="submit" name="status" value="rejected" className="admin-btn admin-btn-ghost">
                      Reddet
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right: Metadata */}
            <div>
              <div className="admin-card">
                <h3 className="admin-card-title">Soru Bilgileri</h3>
                <div className="admin-meta-row">
                  <div className="admin-meta-item">
                    <span className="admin-meta-key">Gönderen</span>
                    <span className="admin-meta-val">{q.name}</span>
                  </div>
                  {q.email && (
                    <div className="admin-meta-item">
                      <span className="admin-meta-key">E-posta</span>
                      <span className="admin-meta-val" style={{ fontSize: "12px" }}>{q.email}</span>
                    </div>
                  )}
                  <div className="admin-meta-item">
                    <span className="admin-meta-key">Dil</span>
                    <span className="admin-meta-val">
                      {LOCALE_FLAGS[q.locale]} {LOCALE_LABELS[q.locale] ?? q.locale}
                    </span>
                  </div>
                  <div className="admin-meta-item">
                    <span className="admin-meta-key">Gönderildi</span>
                    <span className="admin-meta-val" style={{ fontSize: "11px" }}>
                      {new Date(q.submittedAt).toLocaleDateString("tr-TR", {
                        day: "numeric", month: "long", year: "numeric",
                        hour: "2-digit", minute: "2-digit"
                      })}
                    </span>
                  </div>
                  <div className="admin-meta-item">
                    <span className="admin-meta-key">Durum</span>
                    <span className={`badge ${STATUS_COLORS[q.status]}`}>
                      {STATUS_LABELS[q.status]}
                    </span>
                  </div>
                  <div className="admin-meta-item">
                    <span className="admin-meta-key">Görünürlük</span>
                    <span className="admin-meta-val">
                      {q.replyMode === "private" ? "📧 Özel cevap" : q.isPublic ? "🌍 Herkese açık" : "🔒 Gizli"}
                    </span>
                  </div>
                  <div className="admin-meta-item">
                    <span className="admin-meta-key">Yanıt Türü</span>
                    <span className="admin-meta-val">
                      {q.replyMode === "private" ? "Özel e-posta yanıtı" : "SSS için uygun soru"}
                    </span>
                  </div>
                  {q.answeredBy && (
                    <>
                      <div className="admin-meta-item">
                        <span className="admin-meta-key">Cevaplayan</span>
                        <span className="admin-meta-val">{q.answeredBy}</span>
                      </div>
                      <div className="admin-meta-item">
                        <span className="admin-meta-key">Cevap tarihi</span>
                        <span className="admin-meta-val" style={{ fontSize: "11px" }}>
                          {q.answeredAt
                            ? new Date(q.answeredAt).toLocaleDateString("tr-TR", {
                                day: "numeric", month: "long", year: "numeric"
                              })
                            : "—"}
                        </span>
                      </div>
                    </>
                  )}
                  {q.replyMode === "private" && (
                    <div className="admin-meta-item">
                      <span className="admin-meta-key">Özel cevap teslimi</span>
                      <span className="admin-meta-val" style={{ fontSize: "11px" }}>
                        {q.privateReplySentAt
                          ? `Gönderildi: ${new Date(q.privateReplySentAt).toLocaleDateString("tr-TR", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}`
                          : q.privateReplyError
                            ? "Gönderim başarısız"
                            : "Henüz gönderilmedi"}
                      </span>
                    </div>
                  )}
                  {q.replyMode === "private" && q.privateReplyError && (
                    <div className="admin-meta-item">
                      <span className="admin-meta-key">Mail hatası</span>
                      <span className="admin-meta-val" style={{ fontSize: "11px", color: "#b91c1c" }}>
                        {q.privateReplyError}
                      </span>
                    </div>
                  )}
                </div>

                {/* Delete — super admin only */}
                {session.role === "super" && (
                  <form action={deleteQuestionAction} style={{ marginTop: "20px" }}>
                    <input type="hidden" name="id" value={q.id} />
                    <button
                      type="submit"
                      className="admin-btn admin-btn-danger admin-btn-sm"
                      style={{ width: "100%" }}
                    >
                      🗑 Soruyu Sil
                    </button>
                  </form>
                )}
              </div>

              {/* Language helper */}
              <div className="admin-card" style={{ marginTop: "16px" }}>
                <h3 className="admin-card-title" style={{ marginBottom: "8px" }}>Dil Notu</h3>
                <p style={{ fontSize: "12px", color: "#6b7280", margin: 0, lineHeight: 1.6 }}>
                  Bu soru <strong>{LOCALE_LABELS[q.locale] ?? q.locale}</strong> dilinde gönderildi.
                  Cevabınızı <strong>{LOCALE_LABELS[q.locale] ?? q.locale}</strong> dilinde yazın.
                  {q.locale === "ar" || q.locale === "fa"
                    ? " Bu dil sağdan sola (RTL) yazılır."
                    : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
