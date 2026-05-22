import type { Metadata } from "next";

import GreenPassportPage from "@/components/GreenPassportPage";
import { JsonLd } from "@/components/JsonLd";
import {
  buildGreenPassportMetadata,
  buildGreenPassportSchemas,
  getGreenPassportPageData,
} from "@/lib/green-passport";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildGreenPassportMetadata(lang);
}

export default async function YesilPasaportRoute({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const pageData = await getGreenPassportPageData(lang);
  const schemas = await buildGreenPassportSchemas(lang);

  return (
    <>
      <JsonLd data={schemas} />
      <GreenPassportPage
        lang={pageData.lang}
        dir={pageData.dir}
        homeLabel={pageData.homeLabel}
        copy={pageData.copy}
      />
    </>
  );
}
