import { getDictionary } from "@/lib/dictionary";
import { getSafeLocale } from "@/lib/seo";

export type IstihdamStepItem = {
  num: string;
  title: string;
  desc: string;
  icon: string;
};

export type IstihdamLegalItem = {
  title: string;
  text: string;
};

export type IstihdamPageCopy = {
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
    items: IstihdamStepItem[];
  };
  legal: {
    eyebrow: string;
    title: string;
    items: IstihdamLegalItem[];
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

export type IstihdamPageData = {
  lang: string;
  dir: "ltr" | "rtl";
  backLabel: string;
  copy: IstihdamPageCopy;
};

type IstihdamDictionaryLike = {
  lang?: string;
  dir?: string;
  nav?: {
    services?: string;
  };
  services_page?: {
    detail_back?: string;
  };
  istihdam_page?: IstihdamPageCopy;
};

export async function getIstihdamPageData(
  locale: string
): Promise<IstihdamPageData> {
  const dict = (await getDictionary(locale)) as IstihdamDictionaryLike;
  const fallbackDict =
    locale === "tr" ? dict : ((await getDictionary("tr")) as IstihdamDictionaryLike);
  const copy = dict.istihdam_page ?? fallbackDict.istihdam_page;

  if (!copy) {
    throw new Error("Missing istihdam_page translations in dictionary.");
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
