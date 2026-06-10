import { notFound } from "next/navigation";

import { JsonLd } from "@/components/JsonLd";
import ServicePageLayout from "@/components/ServicePageLayout";
import {
  buildCitizenshipDetailSchemas,
  buildCitizenshipDetailStaticParams,
  getCitizenshipDetailPageData,
} from "@/lib/citizenship-detail-pages";

export function generateStaticParams() {
  return buildCitizenshipDetailStaticParams();
}

export default async function CitizenshipDetailRoute({
  params,
  lang = "tr",
}: {
  params: Promise<{ slug: string }>;
  lang?: string;
}) {
  const { slug } = await params;
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
