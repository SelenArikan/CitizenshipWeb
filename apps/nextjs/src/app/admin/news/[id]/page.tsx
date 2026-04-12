import Link from "next/link";
import { redirect, notFound } from "next/navigation";

import { getSession }                                      from "../../../../lib/admin-auth";
import { getBulletin, updateBulletin, deleteBulletin, isBulletinSlugUnique } from "../../../../lib/news";
import type { BulletinStatus }                             from "../../../../lib/news";
import Sidebar      from "../../_components/Sidebar";
import BulletinForm from "../_components/BulletinForm";

export default async function EditBulletinPage({
  params,
  searchParams
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string>>;
}) {
  const session = await getSession();
  if (!session) redirect("/admin/login?error=unauthorized");

  const { id }  = await params;
  const qp      = await searchParams;
  const saved   = qp.saved === "1";
  const bulletin = getBulletin(id);
  if (!bulletin) notFound();

  if (session.role === "lang" && bulletin.locale !== session.locale) {
    redirect("/admin/news?error=noaccess");
  }

  /* ── Save ── */
  async function saveAction(formData: FormData) {
    "use server";

    const locale     = (formData.get("locale") as string) || bulletin!.locale;
    const slug       = (formData.get("slug") as string)?.trim().toLowerCase();
    const title      = (formData.get("title") as string)?.trim();
    const summary    = (formData.get("summary") as string)?.trim();
    const content    = (formData.get("content") as string)?.trim();
    const category   = (formData.get("category") as string)?.trim();
    const coverImage = (formData.get("coverImage") as string)?.trim() ?? "";
    const tagsRaw    = (formData.get("tags") as string) ?? "";
    const authorName = (formData.get("authorName") as string)?.trim() || session!.name;
    const isFeatured = formData.get("isFeatured") === "true";
    const statusVal  = (formData.get("status") as BulletinStatus) || "draft";

    if (!locale || !slug || !title || !summary || !content) return;

    if (slug !== bulletin!.slug && !isBulletinSlugUnique(locale, slug, bulletin!.id)) return;
    if (session!.role === "lang" && locale !== session!.locale) return;

    const tags = tagsRaw.split(",").map((t) => t.trim()).filter(Boolean);
    const now  = new Date().toISOString();

    updateBulletin(bulletin!.id, {
      locale, slug, title, summary, content, category,
      coverImage, tags, authorName, isFeatured,
      status: statusVal,
      publishedAt:
        bulletin!.status !== "published" && statusVal === "published"
          ? now
          : bulletin!.publishedAt
    });

    redirect(`/admin/news/${bulletin!.id}?saved=1`);
  }

  /* ── Delete ── */
  async function deleteAction() {
    "use server";
    if (session!.role !== "super") return;
    deleteBulletin(bulletin!.id);
    redirect("/admin/news");
  }

  return (
    <div className="admin-root">
      <Sidebar session={session} activePath="news" />

      <div className="admin-main">
        <div className="admin-topbar">
          <div className="admin-breadcrumb" style={{ margin: 0 }}>
            <Link href="/admin/news">Haber Bültenleri</Link>
            <span>›</span>
            <span style={{ color: "#374151" }}>{bulletin.title.slice(0, 50)}{bulletin.title.length > 50 ? "…" : ""}</span>
          </div>
          {session.role === "super" && (
            <form action={deleteAction}>
              <button type="submit" className="admin-btn admin-btn-danger admin-btn-sm">
                Sil
              </button>
            </form>
          )}
        </div>

        <div className="admin-content">
          {saved && (
            <div className="admin-alert-success">✓ Değişiklikler kaydedildi.</div>
          )}

          <div className="admin-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
              <h2 className="admin-card-title" style={{ margin: 0 }}>Bülten Düzenle</h2>
              <div style={{ fontSize: "11px", color: "#9ca3af", textAlign: "right" }}>
                <div>Oluşturulma: {new Date(bulletin.createdAt).toLocaleDateString("tr-TR")}</div>
                {bulletin.publishedAt && (
                  <div>Yayın: {new Date(bulletin.publishedAt).toLocaleDateString("tr-TR")}</div>
                )}
              </div>
            </div>
            <BulletinForm bulletin={bulletin} session={session} action={saveAction} />
          </div>
        </div>
      </div>
    </div>
  );
}
