import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/JsonLd";
import ServicePageLayout from "@/components/ServicePageLayout";
import {
  buildLegalDetailMetadata,
  buildLegalDetailSchemas,
  getLegalDetailPageData,
} from "@/lib/legal-detail-pages";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildLegalDetailMetadata(lang, "yesil-pasaport");
}

export default async function YesilPasaportRoute({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const pageData = await getLegalDetailPageData(lang, "yesil-pasaport");
  const schemas = await buildLegalDetailSchemas(lang, "yesil-pasaport");

  if (!pageData) {
    notFound();
  }

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
        otherPrograms={pageData.relatedLinks}
        otherProgramsTitle={pageData.relatedTitle}
      />
    </>
  );
}
