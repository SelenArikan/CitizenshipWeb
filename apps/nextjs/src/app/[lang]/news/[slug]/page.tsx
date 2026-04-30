import type { Metadata } from "next";

import NewsDetailPage from "../../../news/[slug]/page";
import { JsonLd } from "@/components/JsonLd";
import { getPublicNewsEntry } from "@/lib/public-pages";
import { getSafeLocale } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const safeLocale = getSafeLocale(lang);
  const entry = getPublicNewsEntry(safeLocale, slug);

  if (!entry) {
    return {
      title: "News",
      description: "Citizenship and immigration news.",
      alternates: { canonical: `/${safeLocale}/news/${slug}` },
    };
  }

  return {
    title: entry.title,
    description: entry.summary,
    alternates: {
      canonical: `/${safeLocale}/news/${slug}`,
    },
    openGraph: {
      title: entry.title,
      description: entry.summary,
      url: `/${safeLocale}/news/${slug}`,
      type: "article",
      siteName: "CitizenshipWeb",
      images: entry.coverImage ? [{ url: entry.coverImage, alt: entry.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.summary,
      images: entry.coverImage ? [entry.coverImage] : undefined,
    },
  };
}

export default async function LangNewsDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const entry = getPublicNewsEntry(lang, slug);

  const schema = entry
    ? {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: entry.title,
        description: entry.summary,
        articleSection: entry.category,
        inLanguage: entry.locale,
        datePublished: entry.publishedAt,
        dateModified: entry.updatedAt,
        author: {
          "@type": "Organization",
          name: entry.authorName || "CitizenshipWeb",
        },
        publisher: {
          "@type": "Organization",
          name: "CitizenshipWeb",
        },
        image: entry.coverImage ? [`https://citizenshipweb.com${entry.coverImage}`] : undefined,
        mainEntityOfPage: `https://citizenshipweb.com/${entry.locale}/news/${entry.slug}`,
        keywords: entry.tags.join(", "),
      }
    : null;

  return (
    <>
      {schema && <JsonLd data={schema} />}
      <NewsDetailPage lang={lang} slug={slug} />
    </>
  );
}
