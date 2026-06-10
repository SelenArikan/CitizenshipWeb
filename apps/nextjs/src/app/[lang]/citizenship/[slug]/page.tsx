import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/JsonLd";
import ServicePageLayout from "@/components/ServicePageLayout";
import {
  buildCitizenshipDetailMetadata,
  buildCitizenshipDetailSchemas,
  buildLocalizedCitizenshipDetailStaticParams,
  getCitizenshipDetailPageData,
} from "@/lib/citizenship-detail-pages";

export function generateStaticParams() {
  return buildLocalizedCitizenshipDetailStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  return buildCitizenshipDetailMetadata(lang, slug);
}

export default async function LangCitizenshipDetailRoute({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const pageData = await getCitizenshipDetailPageData(lang, slug);

  if (!pageData) {
    notFound();
  }

  const schemas = await buildCitizenshipDetailSchemas(lang, slug);

  return (
    <>
      <JsonLd data={schemas} />
      <ServicePageLayout
        lang={pageData.lang}
        dir={pageData.dir}
        homeLabel={pageData.homeLabel}
        backLabel={pageData.backLabel}
        backHref={`/${pageData.lang}/citizenship`}
        consultationLabel={pageData.consultationLabel}
        hero={{
          breadcrumbLabel: pageData.copy.metadata.breadcrumbLabel,
          summary: pageData.copy.hero.summary,
          backgroundImage: "/gayrimenkul-hero.jpg",
        }}
        sections={pageData.copy.sections}
        cta={pageData.cta}
        otherPrograms={pageData.relatedLinks}
        otherProgramsTitle={pageData.relatedTitle}
      />
    </>
  );
}
