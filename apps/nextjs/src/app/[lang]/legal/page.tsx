import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import ServicePageLayout from "@/components/ServicePageLayout";
import {
  buildLegalOverviewMetadata,
  buildLegalOverviewSchemas,
  getLegalOverviewPageData,
} from "@/lib/legal-detail-pages";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildLegalOverviewMetadata(lang);
}

export default async function LegalOverviewRoute({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const pageData = await getLegalOverviewPageData(lang);
  const schemas = await buildLegalOverviewSchemas(lang);

  return (
    <>
      <JsonLd data={schemas} />
      <ServicePageLayout
        lang={pageData.lang}
        dir={pageData.dir}
        homeLabel={pageData.homeLabel}
        backLabel={pageData.backLabel}
        backHref={`/${pageData.lang}/legal`}
        consultationLabel={pageData.consultationLabel}
        hero={{
          breadcrumbLabel: pageData.copy.metadata.breadcrumbLabel,
          summary: pageData.copy.hero.summary,
          backgroundImage: pageData.copy.hero.backgroundImage,
        }}
        sections={pageData.copy.sections}
        cta={pageData.cta}
        otherPrograms={[]}
        otherProgramsTitle={pageData.relatedTitle}
      />
    </>
  );
}
