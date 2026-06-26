import { getDictionary } from "@/lib/dictionary";
import { getSafeLocale } from "@/lib/seo";

export type BondsStepItem = {
  num: string;
  title: string;
  desc: string;
  icon: string;
};

export type BondsLegalItem = {
  title: string;
  text: string;
};

export type BondsPageCopy = {
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
  stats: Array<{ value: string; label: string; sub: string }>;
  intro: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    bullets?: string[] | null;
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
    items: BondsStepItem[];
  };
  processStages?: {
    eyebrow: string;
    title: string;
    description?: string;
    items: string[];
  } | null;
  legal: {
    eyebrow: string;
    title: string;
    items: BondsLegalItem[];
  };
  postApproval?: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    bullets?: string[] | null;
  } | null;
  cta: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

export type BondsPageData = {
  lang: string;
  dir: "ltr" | "rtl";
  backLabel: string;
  copy: BondsPageCopy;
};

type BondsDictionaryLike = {
  lang?: string;
  dir?: string;
  nav?: {
    services?: string;
  };
  services_page?: {
    detail_back?: string;
  };
  bonds_page?: BondsPageCopy;
};

export async function getBondsPageData(
  locale: string
): Promise<BondsPageData> {
  const dict = (await getDictionary(locale)) as BondsDictionaryLike;
  const fallbackDict =
    locale === "tr" ? dict : ((await getDictionary("tr")) as BondsDictionaryLike);
  const copy = dict.bonds_page ?? fallbackDict.bonds_page;

  if (!copy) {
    throw new Error("Missing bonds_page translations in dictionary.");
  }

  return {
    lang: dict.lang ?? getSafeLocale(locale),
    dir: dict.dir === "rtl" ? "rtl" : "ltr",
    backLabel:
      dict.services_page?.detail_back ??
      dict.nav?.services ??
      fallbackDict.services_page?.detail_back ??
      fallbackDict.nav?.services ??
      "Yatırım Türleri",
    copy,
  };
}
