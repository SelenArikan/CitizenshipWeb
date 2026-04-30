import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import ServiceDetailPage from "../../../services/[type]/page";
import { getInvestmentBySlug, getLocalizedField } from "@/lib/investments";
import { INVESTMENTS } from "@/lib/investments";

export async function generateStaticParams() {
  const langs = ["tr", "en", "ru", "ar", "fa"];
  return langs.flatMap((lang) =>
    INVESTMENTS.map((inv) => ({ lang, type: inv.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; type: string }>;
}): Promise<Metadata> {
  const { lang, type } = await params;
  const inv = getInvestmentBySlug(type);
  if (!inv) return buildPageMetadata("services", lang);

  const title = getLocalizedField(inv, "title", lang);
  const desc = getLocalizedField(inv, "shortDesc", lang);
  const threshold = getLocalizedField(inv, "threshold", lang);

  return {
    title: `${title} — ${threshold} | CitizenshipWeb`,
    description: desc,
    alternates: {
      canonical: `/${lang}/services/${type}`,
      languages: {
        tr: `/tr/services/${type}`,
        en: `/en/services/${type}`,
        ru: `/ru/services/${type}`,
        ar: `/ar/services/${type}`,
        fa: `/fa/services/${type}`,
        "x-default": `/en/services/${type}`,
      },
    },
    openGraph: {
      title: `${title} | CitizenshipWeb`,
      description: desc,
      url: `/${lang}/services/${type}`,
      type: "website",
      siteName: "CitizenshipWeb",
      images: [
        {
          url: "/hero/gayrimenkul-vatandaslik.webp",
          width: 1920,
          height: 1080,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | CitizenshipWeb`,
      description: desc,
      images: ["/hero/gayrimenkul-vatandaslik.webp"],
    },
  };
}

export default async function LangServiceTypePage({
  params,
}: {
  params: Promise<{ lang: string; type: string }>;
}) {
  const { lang, type } = await params;
  const inv = getInvestmentBySlug(type);

  const schemas = inv
    ? [
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: getLocalizedField(inv, "title", lang),
          description: getLocalizedField(inv, "desc", lang),
          provider: {
            "@type": "LegalService",
            name: "CitizenshipWeb",
            url: "https://citizenshipweb.com",
          },
          areaServed: "TR",
          inLanguage: lang,
          url: `https://citizenshipweb.com/${lang}/services/${type}`,
        },
      ]
    : [];

  return (
    <>
      <JsonLd data={schemas} />
      <ServiceDetailPage slug={type} lang={lang} />
    </>
  );
}
