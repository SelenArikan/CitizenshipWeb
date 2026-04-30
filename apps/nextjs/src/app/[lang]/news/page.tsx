import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import NewsPage from "../../news/page";
import { getPublicNewsEntries } from "@/lib/public-pages";
import { buildPageMetadata } from "@/lib/seo";
import { buildCollectionSchemas } from "@/lib/structured-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildPageMetadata("news", lang);
}

export default async function LangNewsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const entries = getPublicNewsEntries(lang);
  const newsItems = entries.map((item) => ({
    category: item.category,
    title: item.title,
    summary: item.summary,
  }));

  return (
    <>
      <JsonLd data={buildCollectionSchemas("news", lang, newsItems)} />
      <NewsPage lang={lang} items={entries} />
    </>
  );
}
