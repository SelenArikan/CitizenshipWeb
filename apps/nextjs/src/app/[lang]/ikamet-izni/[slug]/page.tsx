import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ResidencePermitDetailPage from "@/components/ResidencePermitDetailPage";
import { JsonLd } from "@/components/JsonLd";
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

  if (!entry) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={buildResidencePermitSchemas(
          data.lang,
          data.copy,
          slug as ResidencePermitSlug,
          data.homeLabel
        )}
      />
      <ResidencePermitDetailPage
        lang={data.lang}
        dir={data.dir}
        homeLabel={data.homeLabel}
        copy={data.copy}
        slug={slug as ResidencePermitSlug}
      />
    </>
  );
}
