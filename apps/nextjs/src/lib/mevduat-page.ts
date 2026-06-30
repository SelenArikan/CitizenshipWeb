import { getDictionary } from "@/lib/dictionary";
import { getSafeLocale } from "@/lib/seo";

export type MevduatFaqItem = { q: string; a: string };
export type MevduatStepItem = { num: string; title: string; desc: string; icon: string };
export type MevduatRiskItem = { title: string; desc: string };

export type MevduatPageCopy = {
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
  overview: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    bullets: string[];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    items: MevduatStepItem[];
  };
  risks: {
    eyebrow: string;
    title: string;
    description: string;
    items: MevduatRiskItem[];
  };
  bes?: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    restrictionsTitle: string;
    restrictions: string[];
    officeRoleTitle: string;
    officeRole: string[];
  } | null;
  postApproval?: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    bullets: string[];
  } | null;
  whoCanApply?: {
    eyebrow: string;
    title: string;
    conditionsTitle: string;
    conditions: string[];
    familyTitle: string;
    family: string[];
    cannotTitle: string;
    cannot: string[];
    specialTitle: string;
    special: string[];
  } | null;
  serviceScope?: {
    eyebrow: string;
    title: string;
    items: string[];
  } | null;
  faq: {
    eyebrow: string;
    title: string;
    items: MevduatFaqItem[];
  };
  cta: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

export type MevduatPageData = {
  lang: string;
  dir: "ltr" | "rtl";
  backLabel: string;
  copy: MevduatPageCopy;
};

type MevduatDictionaryLike = {
  lang?: string;
  dir?: string;
  nav?: { services?: string };
  services_page?: { detail_back?: string };
  mevduat_page?: MevduatPageCopy;
};

export async function getMevduatPageData(locale: string): Promise<MevduatPageData> {
  const dict = (await getDictionary(locale)) as MevduatDictionaryLike;
  const copy = dict.mevduat_page ?? ({} as MevduatPageCopy);
  return {
    lang: dict.lang ?? getSafeLocale(locale),
    dir: dict.dir === "rtl" ? "rtl" : "ltr",
    backLabel:
      dict.services_page?.detail_back ??
      dict.nav?.services ??
      "Yatırım Türleri",
    copy,
  };
}
