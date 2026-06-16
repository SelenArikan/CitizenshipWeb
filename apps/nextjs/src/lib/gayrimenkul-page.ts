import { getDictionary } from "@/lib/dictionary";
import { getSafeLocale } from "@/lib/seo";

export type StatItem = {
  value: string;
  label: string;
  sub: string;
};

export type StepItem = {
  num: string;
  title: string;
  desc: string;
  icon: string;
  richDesc?: Array<{ term: string; explanation: string }>;
  richDescFooter?: string;
  image?: { src: string; caption?: string };
};

export type ContentItem = {
  title: string;
  desc: string;
  image?: { src: string; caption?: string };
};

export type NumberedItem = {
  num: string;
  title: string;
  desc: string;
  image?: { src: string; caption?: string };
};

export type IconItem = {
  icon: string;
  title: string;
  desc: string;
  image?: { src: string; caption?: string };
};

export type FaqItem = {
  q: string;
  a: string;
};

export type GayrimenkulPageCopy = {
  hero: {
    breadcrumbLabel: string;
    tag: string;
    titleLines: string[];
    highlightLineIndex: number;
    summary: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
  };
  stats: StatItem[];
  intro: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    bullets: string[];
    imageAlt: string;
    cardValue: string;
    cardLabel: string;
    badgeValue: string;
    badgeLabel: string;
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    items: StepItem[];
  };
  requirements: {
    eyebrow: string;
    title: string;
    items: ContentItem[];
  };
  propertyTypes: {
    eyebrow: string;
    title: string;
    description: string;
    items: IconItem[];
  };
  documents: {
    eyebrow: string;
    title: string;
    description: string;
    noticeTitle: string;
    noticeText: string;
    items: NumberedItem[];
  };
  benefits: {
    eyebrow: string;
    title: string;
    description: string;
    items: IconItem[];
  };
  legal: {
    eyebrow: string;
    title: string;
    items: Array<{
      title: string;
      text: string;
    }>;
  };
  strip: {
    eyebrow: string;
    title: string;
    cta: string;
    imageAlt: string;
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

export type GayrimenkulPageData = {
  lang: string;
  dir: "ltr" | "rtl";
  backLabel: string;
  copy: GayrimenkulPageCopy;
};

type GayrimenkulDictionaryLike = {
  lang?: string;
  dir?: string;
  nav?: {
    services?: string;
  };
  services_page?: {
    detail_back?: string;
  };
  gayrimenkul_page?: GayrimenkulPageCopy;
};

export async function getGayrimenkulPageData(
  locale: string
): Promise<GayrimenkulPageData> {
  const dict = (await getDictionary(locale)) as GayrimenkulDictionaryLike;
  const fallbackDict =
    locale === "tr" ? dict : ((await getDictionary("tr")) as GayrimenkulDictionaryLike);
  const copy = dict.gayrimenkul_page ?? fallbackDict.gayrimenkul_page;

  if (!copy) {
    throw new Error("Missing gayrimenkul_page translations in dictionary.");
  }

  return {
    lang: dict.lang ?? getSafeLocale(locale),
    dir: dict.dir === "rtl" ? "rtl" : "ltr",
    backLabel:
      dict.services_page?.detail_back ??
      dict.nav?.services ??
      fallbackDict.services_page?.detail_back ??
      fallbackDict.nav?.services ??
      "Services",
    copy,
  };
}
