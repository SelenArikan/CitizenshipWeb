import type { Metadata } from "next";

import EhliyetPage from "@/components/EhliyetPage";
import { JsonLd } from "@/components/JsonLd";
import {
  buildEhliyetMetadata,
  buildEhliyetSchemas,
  getEhliyetPageData,
} from "@/lib/ehliyet-tebdil";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildEhliyetMetadata(lang);
}

export default async function EhliyetTebdilPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const pageData = await getEhliyetPageData(lang);
  const schemas = await buildEhliyetSchemas(lang);

  return (
    <>
      <JsonLd data={schemas} />
      <EhliyetPage
        lang={pageData.lang}
        dir={pageData.dir}
        homeLabel={pageData.homeLabel}
        copy={pageData.copy}
      />
    </>
  );
}
