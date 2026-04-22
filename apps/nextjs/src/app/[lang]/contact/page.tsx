import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import ContactPage from "../../contact/page";
import { buildPageMetadata } from "@/lib/seo";
import { buildContactSchemas } from "@/lib/structured-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildPageMetadata("contact", lang);
}

export default async function LangContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <>
      <JsonLd data={buildContactSchemas(lang)} />
      <ContactPage lang={lang} />
    </>
  );
}
