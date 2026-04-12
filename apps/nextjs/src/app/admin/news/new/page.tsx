import { redirect } from "next/navigation";
import Link from "next/link";

import { getSession }                       from "../../../../lib/admin-auth";
import { createBulletin, isBulletinSlugUnique } from "../../../../lib/news";
import type { BulletinStatus }              from "../../../../lib/news";
import Sidebar      from "../../_components/Sidebar";
import BulletinForm from "../_components/BulletinForm";

export default async function NewBulletinPage() {
  const session = await getSession();
  if (!session) redirect("/admin/login?error=unauthorized");

  async function createAction(formData: FormData) {
    "use server";

    const locale     = (formData.get("locale") as string) || session!.locale || "tr";
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

    if (!locale || !slug || !title || !summary || !content || !category) return;
    if (!isBulletinSlugUnique(locale, slug)) return;
    if (session!.role === "lang" && session!.locale !== locale) return;

    const tags = tagsRaw.split(",").map((t) => t.trim()).filter(Boolean);
    const now  = new Date().toISOString();

    const b = createBulletin({
      locale, slug, title, summary, content, category,
      coverImage, tags, authorName, isFeatured,
      status: statusVal,
      publishedAt: statusVal === "published" ? now : null
    });

    redirect(`/admin/news/${b.id}?saved=1`);
  }

  return (
    <div className="admin-root">
      <Sidebar session={session} activePath="news" />

      <div className="admin-main">
        <div className="admin-topbar">
          <div className="admin-breadcrumb" style={{ margin: 0 }}>
            <Link href="/admin/news">Haber Bültenleri</Link>
            <span>›</span>
            <span style={{ color: "#374151" }}>Yeni Bülten</span>
          </div>
        </div>

        <div className="admin-content">
          <div className="admin-card">
            <h2 className="admin-card-title">Yeni Bülten Ekle</h2>
            <BulletinForm session={session} action={createAction} isNew />
          </div>
        </div>
      </div>
    </div>
  );
}
