import type { Metadata } from "next";

import { getDictionary } from "@/lib/dictionary";
import { getSafeLocale } from "@/lib/seo";

const SITE_URL = "https://citizenshipweb.com";
const PAGE_PATH = "/legal/ehliyet-tebdil";
const HERO_IMAGE = "/hero/hukuki-hizmetler.webp";
const SUPPORTED_LOCALES = ["tr", "en", "ru", "ar", "fa"] as const;

const EHLIYET_COUNTRY_GROUP_CODES = [
  [
    "DE",
    "AL",
    "AT",
    "AZ",
    "BS",
    "BH",
    "BE",
    "BY",
    "AE",
    "BA",
    "BR",
    "BG",
    "CZ",
    "DK",
    "CD",
    "EC",
    "ID",
    "AM",
    "EE",
    "MA",
    "CI",
    "PH",
    "FI",
    "FR",
    "GH",
    "GY",
    "ZA",
    "KR",
    "GE",
    "HR",
    "NL",
    "GB",
    "IR",
    "ES",
    "IL",
    "SE",
    "CH",
    "IT",
    "ME",
    "QA",
    "KZ",
    "KE",
    "KG",
    "CR",
    "KW",
    "CU",
    "MK",
    "LV",
    "LR",
    "LT",
    "LU",
    "HU",
    "MX",
    "MN",
    "MD",
    "MC",
    "NE",
    "NO",
    "CF",
    "UZ",
    "PK",
    "PE",
    "PL",
    "PT",
    "RO",
    "RU",
    "SM",
    "SN",
    "SC",
    "RS",
    "SK",
    "SI",
    "CL",
    "TJ",
    "TH",
    "TN",
    "TM",
    "UA",
    "UY",
    "VA",
    "VE",
    "VN",
    "GR",
    "ZW",
  ],
  ["ES", "TRNC", "TN"],
  ["AD", "BJ", "CV", "SV", "PS", "HN", "IQ", "LI", "MV", "EG", "MM", "NG", "SA", "UG"],
] as const;

const SPECIAL_COUNTRY_NAMES: Record<string, Record<string, string>> = {
  TRNC: {
    tr: "Kuzey Kıbrıs Türk Cumhuriyeti",
    en: "Turkish Republic of Northern Cyprus",
    ru: "Турецкая Республика Северного Кипра",
    ar: "جمهورية شمال قبرص التركية",
    fa: "جمهوری ترک قبرس شمالی",
  },
};

export type QuickFact = {
  value: string;
  label: string;
  note: string;
};

export type SpotlightCard = {
  title: string;
  description: string;
};

export type EligibilityCategory = {
  title: string;
  description: string;
  outcome: string;
};

export type CountryGroup = {
  title: string;
  description: string;
  note?: string;
  countries: string[];
};

export type RequirementItem = {
  title: string;
  description: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type ChannelItem = {
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

export type KeyNote = {
  title: string;
  description: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

type CountryGroupContent = Omit<CountryGroup, "countries">;

export type EhliyetPageCopy = {
  metadata: {
    breadcrumbLabel: string;
    title: string;
    description: string;
    howtoTitle: string;
    howtoDescription: string;
    serviceDescription: string;
  };
  hero: {
    tag: string;
    title: string;
    summary: string;
    warning: string;
    imageAlt: string;
    primaryCta: string;
    secondaryCta: string;
  };
  quickFacts: QuickFact[];
  overview: {
    eyebrow: string;
    title: string;
    bullets: string[];
    spotlights: SpotlightCard[];
  };
  legal: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  eligibility: {
    eyebrow: string;
    title: string;
    description: string;
    items: EligibilityCategory[];
  };
  countries: {
    eyebrow: string;
    title: string;
    description: string;
    countLabel: string;
    disclaimer: string;
    groups: CountryGroup[];
  };
  requirements: {
    eyebrow: string;
    title: string;
    items: RequirementItem[];
  };
  process: {
    eyebrow: string;
    channelsEyebrow: string;
    appointmentTitle: string;
    appointmentNote: string;
    steps: ProcessStep[];
    channels: ChannelItem[];
  };
  postApplication: {
    eyebrow: string;
    title: string;
    feesTitle: string;
    items: KeyNote[];
    feeItems: string[];
  };
  issues: {
    eyebrow: string;
    title: string;
    riskBadge: string;
    items: KeyNote[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: FaqItem[];
  };
  cta: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

type EhliyetPageDictionaryCopy = Omit<EhliyetPageCopy, "countries"> & {
  countries: Omit<EhliyetPageCopy["countries"], "groups"> & {
    groups: CountryGroupContent[];
  };
};

export type EhliyetPageData = {
  lang: string;
  dir: "ltr" | "rtl";
  homeLabel: string;
  copy: EhliyetPageCopy;
};

type EhliyetDictionaryLike = {
  lang?: string;
  dir?: string;
  nav?: {
    home?: string;
  };
  ehliyet_page?: EhliyetPageDictionaryCopy;
};

function getCanonicalPath(locale: string) {
  return `/${locale}${PAGE_PATH}`;
}

function getPageUrl(locale: string) {
  return `${SITE_URL}${getCanonicalPath(locale)}`;
}

function localizeCountryName(code: string, locale: string) {
  const specialName = SPECIAL_COUNTRY_NAMES[code]?.[locale];
  if (specialName) {
    return specialName;
  }

  try {
    const displayNames = new Intl.DisplayNames([locale, "en"], {
      type: "region",
    });

    return displayNames.of(code) ?? code;
  } catch {
    return code;
  }
}

function buildCountryGroups(copy: EhliyetPageDictionaryCopy, locale: string): CountryGroup[] {
  return copy.countries.groups.map((group, index) => ({
    ...group,
    countries: [...(EHLIYET_COUNTRY_GROUP_CODES[index] ?? [])].map((code) =>
      localizeCountryName(code, locale)
    ),
  }));
}

export async function getEhliyetPageData(locale: string): Promise<EhliyetPageData> {
  const dict = (await getDictionary(locale)) as EhliyetDictionaryLike;
  const fallbackDict =
    locale === "tr" ? dict : ((await getDictionary("tr")) as EhliyetDictionaryLike);
  const rawCopy = dict.ehliyet_page ?? fallbackDict.ehliyet_page;

  if (!rawCopy) {
    throw new Error("Missing ehliyet_page translations in dictionary.");
  }

  const safeLocale = dict.lang ?? getSafeLocale(locale);
  const copy: EhliyetPageCopy = {
    ...rawCopy,
    countries: {
      ...rawCopy.countries,
      groups: buildCountryGroups(rawCopy, safeLocale),
    },
  };

  return {
    lang: safeLocale,
    dir: dict.dir === "rtl" ? "rtl" : "ltr",
    homeLabel: dict.nav?.home ?? fallbackDict.nav?.home ?? "Home",
    copy,
  };
}

export async function buildEhliyetMetadata(locale: string): Promise<Metadata> {
  const { lang, copy } = await getEhliyetPageData(locale);
  const safeLocale = getSafeLocale(lang);
  const alternates = Object.fromEntries(
    SUPPORTED_LOCALES.map((targetLocale) => [targetLocale, getCanonicalPath(targetLocale)])
  );

  return {
    title: `${copy.metadata.title} | CitizenshipWeb`,
    description: copy.metadata.description,
    alternates: {
      canonical: getCanonicalPath(safeLocale),
      languages: {
        ...alternates,
        "x-default": getCanonicalPath("en"),
      },
    },
    openGraph: {
      title: copy.metadata.title,
      description: copy.metadata.description,
      url: getCanonicalPath(safeLocale),
      type: "article",
      siteName: "CitizenshipWeb",
      images: [
        {
          url: HERO_IMAGE,
          width: 1600,
          height: 900,
          alt: copy.metadata.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metadata.title,
      description: copy.metadata.description,
      images: [HERO_IMAGE],
    },
  };
}

export async function buildEhliyetSchemas(locale: string) {
  const { lang, homeLabel, copy } = await getEhliyetPageData(locale);
  const safeLocale = getSafeLocale(lang);
  const pageUrl = getPageUrl(safeLocale);
  const contactUrl = `${SITE_URL}/${safeLocale}/contact`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: copy.metadata.title,
      description: copy.metadata.description,
      url: pageUrl,
      inLanguage: safeLocale,
      primaryImageOfPage: `${SITE_URL}${HERO_IMAGE}`,
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
          name: copy.metadata.breadcrumbLabel,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: copy.metadata.howtoTitle,
      description: copy.metadata.howtoDescription,
      inLanguage: safeLocale,
      step: copy.process.steps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.title,
        text: step.description,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: copy.faq.items.map((faq) => ({
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
      description: copy.metadata.serviceDescription,
      areaServed: "TR",
      telephone: "+90 532 449 47 28",
      email: "info@turkeyinvestmentcitizenship.com",
    },
  ];
}
