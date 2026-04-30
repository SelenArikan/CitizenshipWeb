import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import KnowledgePage from "../../knowledge/page";
import { getPublicKnowledgeEntries } from "@/lib/public-pages";
import { buildPageMetadata } from "@/lib/seo";
import { buildCollectionSchemas } from "@/lib/structured-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildPageMetadata("knowledge", lang);
}

export default async function LangKnowledgePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const entries = getPublicKnowledgeEntries(lang);
  const knowledgeItems = entries.map((item) => ({
    category: item.category,
    title: item.title,
    summary: item.summary,
  }));

  return (
    <>
      <JsonLd data={buildCollectionSchemas("knowledge", lang, knowledgeItems)} />
      <KnowledgePage lang={lang} items={entries} />
    </>
  );
}
