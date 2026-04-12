import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import QuestionsPage from "../../questions/page";
import { getQuestionsPageData } from "@/lib/questions-page";
import { buildPageMetadata } from "@/lib/seo";
import { buildQuestionsSchemas } from "@/lib/structured-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildPageMetadata("questions", lang);
}

export default async function LangQuestionsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const { allFaqs } = await getQuestionsPageData(lang);

  return (
    <>
      <JsonLd data={buildQuestionsSchemas(lang, allFaqs)} />
      <QuestionsPage lang={lang} />
    </>
  );
}
