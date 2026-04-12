import { redirect } from "next/navigation";
import Link from "next/link";

import { getSession }  from "../../../../lib/admin-auth";
import { createArticle, isSlugUnique } from "../../../../lib/knowledge";
import type { ArticleStatus }  from "../../../../lib/knowledge";
import Sidebar       from "../../_components/Sidebar";
import ArticleForm   from "../_components/ArticleForm";

export default async function NewArticlePage() {
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
    const statusInput = (formData.get("status") as ArticleStatus) || "draft";

    if (!locale || !slug || !title || !summary || !content || !category) return;
    if (!isSlugUnique(locale, slug)) return;

    if (session!.role === "lang" && session!.locale !== locale) return;

    const tags = tagsRaw.split(",").map((t) => t.trim()).filter(Boolean);
    const now  = new Date().toISOString();

    const article = createArticle({
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
      status:      statusInput,
      publishedAt: statusInput === "published" ? now : null
    });

    redirect(`/admin/knowledge/${article.id}?saved=1`);
  }

  return (
    <div className="admin-root">
      <Sidebar session={session} activePath="knowledge" />

      <div className="admin-main">
        <div className="admin-topbar">
          <div className="admin-breadcrumb" style={{ margin: 0 }}>
            <Link href="/admin/knowledge">Bilgi Kütüphanesi</Link>
            <span>›</span>
            <span style={{ color: "#374151" }}>Yeni Makale</span>
          </div>
        </div>

        <div className="admin-content">
          <div className="admin-card">
            <h2 className="admin-card-title">Yeni Makale Ekle</h2>
            <ArticleForm session={session} action={createAction} isNew />
          </div>
        </div>
      </div>
    </div>
  );
}
