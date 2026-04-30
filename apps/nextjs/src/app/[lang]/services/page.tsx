import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import ServicesPage from "../../services/page";
import { INVESTMENTS, getLocalizedField } from "@/lib/investments";
import { buildPageMetadata } from "@/lib/seo";
import { buildServicesSchemas } from "@/lib/structured-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildPageMetadata("services", lang);
}

export default async function LangServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const services = INVESTMENTS.map((inv) => ({
    title: getLocalizedField(inv, "title", lang),
    description: getLocalizedField(inv, "shortDesc", lang),
  }));

  return (
    <>
      <JsonLd data={buildServicesSchemas(lang, services)} />
      <ServicesPage lang={lang} />
    </>
  );
}
