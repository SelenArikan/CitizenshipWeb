import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import CitizenshipPage from "../../citizenship/page";
import { buildPageMetadata } from "@/lib/seo";
import { getCitizenshipPageCopy } from "@/lib/public-pages";
import { buildCitizenshipSchemas } from "@/lib/structured-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildPageMetadata("citizenship", lang);
}

export default async function LangCitizenshipPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const benefits = getCitizenshipPageCopy(lang).benefits;

  return (
    <>
      <JsonLd data={buildCitizenshipSchemas(lang, benefits)} />
      <CitizenshipPage lang={lang} />
    </>
  );
}
