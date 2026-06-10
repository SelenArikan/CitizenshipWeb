import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/JsonLd";
import ServicePageLayout from "@/components/ServicePageLayout";
import {
  getResidenceServicePageCopy,
  getResidenceServiceRelatedLinks,
} from "@/lib/residence-detail-page-content";
import {
  buildResidencePermitMetadata,
  buildResidencePermitSchemas,
  buildResidencePermitStaticParams,
  getResidencePageData,
  getResidencePermitEntry,
  type ResidencePermitSlug,
} from "@/lib/residence-permits";

export function generateStaticParams() {
  return buildResidencePermitStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const data = await getResidencePageData(lang);
  const entry = getResidencePermitEntry(data.copy, slug);

  if (!entry) {
    return {};
  }

  return buildResidencePermitMetadata(
    data.lang,
    data.copy,
    slug as ResidencePermitSlug
  );
}

export default async function ResidencePermitDetailRoute({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const data = await getResidencePageData(lang);
  const entry = getResidencePermitEntry(data.copy, slug);
  const typedSlug = slug as ResidencePermitSlug;

  if (!entry) {
    notFound();
  }

  const pageCopy = getResidenceServicePageCopy({
    copy: data.copy,
    slug: typedSlug,
    useExactTurkishContent: data.lang === "tr",
  });

  if (!pageCopy) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={buildResidencePermitSchemas(
          data.lang,
          data.copy,
          typedSlug,
          data.homeLabel
        )}
      />
      <ServicePageLayout
        lang={data.lang}
        dir={data.dir}
        homeLabel={data.homeLabel}
        backLabel={data.copy.overview.title}
        backHref={`/${data.lang}/ikamet-izni`}
        consultationLabel={data.copy.labels.detail.expert_cta}
        hero={{
          breadcrumbLabel: pageCopy.metadata.breadcrumbLabel,
          summary: pageCopy.hero.summary,
          backgroundImage: pageCopy.hero.backgroundImage,
        }}
        sections={pageCopy.sections}
        cta={{
          title: data.copy.overview.ctaTitle,
          description: data.copy.overview.ctaDescription,
          primaryCta: data.copy.labels.contact_cta,
          secondaryCta: data.copy.labels.faq_cta,
        }}
        otherPrograms={getResidenceServiceRelatedLinks({
          copy: data.copy,
          lang: data.lang,
          currentSlug: typedSlug,
        })}
        otherProgramsTitle={data.copy.labels.detail.related_title}
      />
    </>
  );
}
