import type { Metadata } from "next";

import ResidencePermitOverviewPage from "@/components/ResidencePermitOverviewPage";
import { JsonLd } from "@/components/JsonLd";
import {
  buildResidenceOverviewMetadata,
  buildResidenceOverviewSchemas,
  getResidencePageData,
} from "@/lib/residence-permits";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const data = await getResidencePageData(lang);
  return buildResidenceOverviewMetadata(data.lang, data.copy);
}

export default async function ResidenceOverviewRoute({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const data = await getResidencePageData(lang);

  return (
    <>
      <JsonLd
        data={buildResidenceOverviewSchemas(data.lang, data.copy, data.homeLabel)}
      />
      <ResidencePermitOverviewPage
        lang={data.lang}
        dir={data.dir}
        homeLabel={data.homeLabel}
        copy={data.copy}
      />
    </>
  );
}
