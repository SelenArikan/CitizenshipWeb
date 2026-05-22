import type { Metadata } from "next";

import { getDictionary } from "@/lib/dictionary";
import { getSafeLocale } from "@/lib/seo";

const SITE_URL = "https://citizenshipweb.com";
const BASE_PATH = "/ikamet-izni";
const SUPPORTED_LOCALES = ["tr", "en", "ru", "ar", "fa"] as const;

export const RESIDENCE_PERMIT_SLUGS = [
  "yatirimci-ikamet-izni",
  "gayrimenkul-ikamet-izni",
  "aile-ikamet-izni",
  "uzun-donem-ikamet-izni",
] as const;

export type ResidencePermitSlug = (typeof RESIDENCE_PERMIT_SLUGS)[number];

export type QuickFact = {
  value: string;
  label: string;
  note: string;
};

export type DetailItem = {
  title: string;
  description: string;
};

export type DetailSection = {
  title: string;
  intro?: string;
  items: DetailItem[];
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type ResidencePermitDetail = {
  navLabel: string;
  cardDescription: string;
  heroTag: string;
  title: string;
  description: string;
  summary: string;
  heroImage: string;
  warning?: string;
  quickFacts: QuickFact[];
  sections: DetailSection[];
  processTitle: string;
  process: ProcessStep[];
  faqs: FaqItem[];
};

export type ResidencePageCopy = {
  labels: {
    contact_cta: string;
    faq_cta: string;
    overview: {
      groups_eyebrow: string;
      groups_title: string;
      short_terms_eyebrow: string;
      short_terms_title: string;
      permits_eyebrow: string;
      permits_title: string;
      permit_detail_cta: string;
      notes_eyebrow: string;
      notes_title: string;
      cta_primary: string;
      cta_secondary: string;
    };
    detail: {
      all_types_cta: string;
      section_label: string;
      process_eyebrow: string;
      faq_eyebrow: string;
      faq_title: string;
      related_eyebrow: string;
      related_title: string;
      related_cta: string;
      expert_cta: string;
    };
  };
  overview: {
    heroTag: string;
    title: string;
    summary: string;
    notice: string;
    quickFacts: QuickFact[];
    mainGroups: DetailItem[];
    shortTermTypes: string[];
    notes: string[];
    ctaTitle: string;
    ctaDescription: string;
  };
  permits: Record<ResidencePermitSlug, ResidencePermitDetail>;
};

export type ResidencePageData = {
  lang: string;
  dir: "ltr" | "rtl";
  homeLabel: string;
  copy: ResidencePageCopy;
};

type ResidenceDictionaryLike = {
  lang?: string;
  dir?: string;
  nav?: {
    home?: string;
  };
  residence_page?: ResidencePageCopy;
};

export async function getResidencePageData(locale: string): Promise<ResidencePageData> {
  const dict = (await getDictionary(locale)) as ResidenceDictionaryLike;
  const fallbackDict = (
    locale === "tr" ? dict : ((await getDictionary("tr")) as ResidenceDictionaryLike)
  );
  const copy = dict.residence_page ?? fallbackDict.residence_page;

  if (!copy) {
    throw new Error("Missing residence_page translations in dictionary.");
  }

  return {
    lang: dict.lang ?? getSafeLocale(locale),
    dir: dict.dir === "rtl" ? "rtl" : "ltr",
    homeLabel: dict.nav?.home ?? fallbackDict.nav?.home ?? "Home",
    copy,
  };
}

export function getResidencePermitEntry(
  copy: ResidencePageCopy,
  slug: string
): ResidencePermitDetail | undefined {
  return copy.permits[slug as ResidencePermitSlug];
}

export function getResidencePermitCanonicalPath(locale: string, slug?: ResidencePermitSlug) {
  return slug ? `/${locale}${BASE_PATH}/${slug}` : `/${locale}${BASE_PATH}`;
}

function getResidencePermitPageUrl(locale: string, slug?: ResidencePermitSlug) {
  return `${SITE_URL}${getResidencePermitCanonicalPath(locale, slug)}`;
}

export function buildResidenceOverviewMetadata(
  locale: string,
  copy: ResidencePageCopy
): Metadata {
  const safeLocale = getSafeLocale(locale);
  const alternates = Object.fromEntries(
    SUPPORTED_LOCALES.map((targetLocale) => [
      targetLocale,
      getResidencePermitCanonicalPath(targetLocale),
    ])
  );

  return {
    title: `${copy.overview.title} | CitizenshipWeb`,
    description: copy.overview.summary,
    alternates: {
      canonical: getResidencePermitCanonicalPath(safeLocale),
      languages: {
        ...alternates,
        "x-default": getResidencePermitCanonicalPath("en"),
      },
    },
    openGraph: {
      title: copy.overview.title,
      description: copy.overview.summary,
      url: getResidencePermitCanonicalPath(safeLocale),
      type: "article",
      siteName: "CitizenshipWeb",
      images: [
        {
          url: "/hero/yatirimci-ikamet-izni.webp",
          width: 1600,
          height: 900,
          alt: copy.overview.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.overview.title,
      description: copy.overview.summary,
      images: ["/hero/yatirimci-ikamet-izni.webp"],
    },
  };
}

export function buildResidencePermitMetadata(
  locale: string,
  copy: ResidencePageCopy,
  slug: ResidencePermitSlug
): Metadata {
  const safeLocale = getSafeLocale(locale);
  const entry = copy.permits[slug];
  const alternates = Object.fromEntries(
    SUPPORTED_LOCALES.map((targetLocale) => [
      targetLocale,
      getResidencePermitCanonicalPath(targetLocale, slug),
    ])
  );

  return {
    title: `${entry.title} | CitizenshipWeb`,
    description: entry.description,
    alternates: {
      canonical: getResidencePermitCanonicalPath(safeLocale, slug),
      languages: {
        ...alternates,
        "x-default": getResidencePermitCanonicalPath("en", slug),
      },
    },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: getResidencePermitCanonicalPath(safeLocale, slug),
      type: "article",
      siteName: "CitizenshipWeb",
      images: [
        {
          url: entry.heroImage,
          width: 1600,
          height: 900,
          alt: entry.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description,
      images: [entry.heroImage],
    },
  };
}

export function buildResidenceOverviewSchemas(
  locale: string,
  copy: ResidencePageCopy,
  homeLabel: string
) {
  const safeLocale = getSafeLocale(locale);
  const pageUrl = getResidencePermitPageUrl(safeLocale);

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: copy.overview.title,
      description: copy.overview.summary,
      url: pageUrl,
      inLanguage: safeLocale,
      primaryImageOfPage: `${SITE_URL}/hero/yatirimci-ikamet-izni.webp`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: homeLabel,
          item: `${SITE_URL}/${safeLocale}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: copy.overview.title,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: copy.overview.title,
      itemListElement: RESIDENCE_PERMIT_SLUGS.map((slug, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: copy.permits[slug].title,
          description: copy.permits[slug].cardDescription,
          url: getResidencePermitPageUrl(safeLocale, slug),
        },
      })),
    },
  ];
}

export function buildResidencePermitSchemas(
  locale: string,
  copy: ResidencePageCopy,
  slug: ResidencePermitSlug,
  homeLabel: string
) {
  const safeLocale = getSafeLocale(locale);
  const entry = copy.permits[slug];
  const pageUrl = getResidencePermitPageUrl(safeLocale, slug);
  const overviewUrl = getResidencePermitPageUrl(safeLocale);
  const contactUrl = `${SITE_URL}/${safeLocale}/contact`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: entry.title,
      description: entry.description,
      url: pageUrl,
      inLanguage: safeLocale,
      primaryImageOfPage: `${SITE_URL}${entry.heroImage}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: homeLabel,
          item: `${SITE_URL}/${safeLocale}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: copy.overview.title,
          item: overviewUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: entry.title,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: entry.processTitle,
      description: entry.description,
      inLanguage: safeLocale,
      step: entry.process.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.title,
        text: step.description,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: entry.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "CitizenshipWeb Legal & Immigration Advisory",
      url: contactUrl,
      description:
        "CitizenshipWeb provides advisory support for residence permits, document preparation, and administrative immigration applications.",
      areaServed: "TR",
      telephone: "+90 532 449 47 28",
      email: "info@turkeyinvestmentcitizenship.com",
    },
  ];
}

export function buildResidencePermitStaticParams() {
  return SUPPORTED_LOCALES.flatMap((lang) =>
    RESIDENCE_PERMIT_SLUGS.map((slug) => ({ lang, slug }))
  );
}
