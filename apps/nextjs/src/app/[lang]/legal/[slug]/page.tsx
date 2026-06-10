import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/JsonLd";
import ServicePageLayout from "@/components/ServicePageLayout";
import {
  buildLegalDetailMetadata,
  buildLegalDetailSchemas,
  buildLegalDetailStaticParams,
  getLegalDetailPageData,
} from "@/lib/legal-detail-pages";

export function generateStaticParams() {
  return buildLegalDetailStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  return buildLegalDetailMetadata(lang, slug);
}

export default async function LegalDetailRoute({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const pageData = await getLegalDetailPageData(lang, slug);

  if (!pageData) {
    notFound();
  }

  const schemas = await buildLegalDetailSchemas(lang, slug);

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
