import Link from "next/link";
import { redirect, notFound } from "next/navigation";

import { getSession }  from "../../../../lib/admin-auth";
import { getArticle, updateArticle, deleteArticle } from "../../../../lib/knowledge";
import type { ArticleStatus } from "../../../../lib/knowledge";
import { LOCALE_FLAGS, LOCALE_LABELS } from "../../../../lib/admin-types";
import Sidebar      from "../../_components/Sidebar";
import ArticleForm  from "../_components/ArticleForm";

async function saveAction(formData: FormData) {
  "use server";

  const session = await getSession();
  if (!session) redirect("/admin/login");

  const id         = formData.get("id") as string;
  const locale     = (formData.get("locale") as string) || session.locale || "tr";
  const slug       = (formData.get("slug") as string)?.trim().toLowerCase();
  const title      = (formData.get("title") as string)?.trim();
  const summary    = (formData.get("summary") as string)?.trim();
  const content    = (formData.get("content") as string)?.trim();
  const category   = (formData.get("category") as string)?.trim();
  const coverImage = (formData.get("coverImage") as string)?.trim() ?? "";
  const tagsRaw    = (formData.get("tags") as string) ?? "";
  const authorName = (formData.get("authorName") as string)?.trim() || session.name;
  const isFeatured = formData.get("isFeatured") === "true";
  const statusInput = (formData.get("status") as ArticleStatus) || "draft";

  if (!id || !slug || !title || !summary || !content || !category) return;

  const existing = getArticle(id);
  if (!existing) return;
  if (session.role === "lang" && existing.locale !== session.locale) return;

  const tags = tagsRaw.split(",").map((t) => t.trim()).filter(Boolean);

  updateArticle(id, {
    locale,
    slug,
    title,
    summary,
    content,
    category,
    coverImage,
    tags,
    authorName,
    isFeatured,
    status: statusInput
  });

  redirect(`/admin/knowledge/${id}?saved=1`);
}

async function deleteAction(formData: FormData) {
  "use server";

  const session = await getSession();
  if (!session || session.role !== "super") redirect("/admin/knowledge");

  const id = formData.get("id") as string;
  deleteArticle(id);
  redirect("/admin/knowledge");
}

export default async function EditArticlePage({
  params,
  searchParams
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string>>;
}) {
  const session = await getSession();
  if (!session) redirect("/admin/login?error=unauthorized");

  const { id } = await params;
  const sp     = await searchParams;
  const saved  = sp.saved === "1";

  const article = getArticle(id);
  if (!article) notFound();

  if (session.role === "lang" && article.locale !== session.locale) {
    redirect("/admin/knowledge");
  }

  return (
    <div className="admin-root">
      <Sidebar session={session} activePath="knowledge" />

      <div className="admin-main">
        <div className="admin-topbar">
          <div className="admin-breadcrumb" style={{ margin: 0 }}>
            <Link href="/admin/knowledge">Bilgi Kütüphanesi</Link>
            <span>›</span>
            <span style={{ color: "#374151", maxWidth: "260px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", display: "inline-block" }}>
              {article.title}
            </span>
          </div>
          <div className="admin-topbar-actions">
            <Link href="/admin/knowledge" className="admin-btn admin-btn-ghost admin-btn-sm">← Geri</Link>
          </div>
        </div>

        <div className="admin-content">
          {saved && (
            <div className="admin-success" style={{ marginBottom: "20px" }}>
              ✓ Makale başarıyla kaydedildi.
            </div>
          )}

          <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "20px", alignItems: "start" }}>

            {/* Form */}
            <div className="admin-card">
              <h2 className="admin-card-title">Makaleyi Düzenle</h2>
              <ArticleForm article={article} session={session} action={saveAction} />
            </div>

            {/* Meta sidebar */}
            <div>
              <div className="admin-card">
                <h3 className="admin-card-title">Makale Bilgileri</h3>
                <div className="admin-meta-row">
                  <div className="admin-meta-item">
                    <span className="admin-meta-key">Dil</span>
                    <span className="admin-meta-val">
                      {LOCALE_FLAGS[article.locale]} {LOCALE_LABELS[article.locale] ?? article.locale}
                    </span>
                  </div>
                  <div className="admin-meta-item">
                    <span className="admin-meta-key">Durum</span>
                    <span className={`badge ${article.status === "published" ? "badge-approved" : article.status === "draft" ? "badge-pending" : "badge-rejected"}`}>
                      {article.status === "published" ? "Yayında" : article.status === "draft" ? "Taslak" : "Arşiv"}
                    </span>
                  </div>
                  <div className="admin-meta-item">
                    <span className="admin-meta-key">Öne Çıkan</span>
                    <span className="admin-meta-val">{article.isFeatured ? "⭐ Evet" : "Hayır"}</span>
                  </div>
                  <div className="admin-meta-item">
                    <span className="admin-meta-key">Oluşturuldu</span>
                    <span className="admin-meta-val" style={{ fontSize: "11px" }}>
                      {new Date(article.createdAt).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
                    </span>
                  </div>
                  <div className="admin-meta-item">
                    <span className="admin-meta-key">Güncellendi</span>
                    <span className="admin-meta-val" style={{ fontSize: "11px" }}>
                      {new Date(article.updatedAt).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
                    </span>
                  </div>
                  {article.publishedAt && (
                    <div className="admin-meta-item">
                      <span className="admin-meta-key">Yayınlandı</span>
                      <span className="admin-meta-val" style={{ fontSize: "11px" }}>
                        {new Date(article.publishedAt).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
                      </span>
                    </div>
                  )}
                  <div className="admin-meta-item">
                    <span className="admin-meta-key">URL Slug</span>
                    <span className="admin-meta-val" style={{ fontSize: "11px", wordBreak: "break-all" }}>{article.slug}</span>
                  </div>
                </div>

                {/* Tags */}
                {article.tags.length > 0 && (
                  <div style={{ marginTop: "14px" }}>
                    <div style={{ fontSize: "11px", color: "#9ca3af", fontWeight: 600, marginBottom: "6px" }}>ETİKETLER</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                      {article.tags.map((tag) => (
                        <span key={tag} style={{
                          padding: "2px 8px",
                          background: "#f3f4f6",
                          borderRadius: "999px",
                          fontSize: "11px",
                          color: "#6b7280"
                        }}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Delete */}
                {session.role === "super" && (
                  <form action={deleteAction} style={{ marginTop: "20px" }}>
                    <input type="hidden" name="id" value={article.id} />
                    <button type="submit" className="admin-btn admin-btn-danger admin-btn-sm" style={{ width: "100%" }}>
                      🗑 Makaleyi Sil
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
