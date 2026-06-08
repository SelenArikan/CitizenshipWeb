import { getDictionary } from "@/lib/dictionary";
import { getSafeLocale } from "@/lib/seo";

export type FonSherhItem = { title: string; desc: string };
export type FonFaqItem = { q: string; a: string };

export type GayrimenkulFonPageCopy = {
  hero: { breadcrumbLabel: string; tag: string; summary: string; primaryCta: string; secondaryCta: string };
  bolum1: {
    eyebrow: string; title: string; intro: string[];
    tapu: { eyebrow: string; title: string; items: Array<{ num: string; title: string; paragraphs: string[]; bullets?: string[] }> };
    sherhler: { eyebrow: string; title: string; items: FonSherhItem[] };
    tapuTuru: { eyebrow: string; title: string; paragraphs: string[]; arsaTitle: string; arsaBullets: string[] };
    noter: { eyebrow: string; title: string; paragraphs: string[] };
    ekspertiz: { eyebrow: string; title: string; paragraphs: string[]; formula: { title: string; desc: string } };
  };
  bolum2: { eyebrow: string; title: string; items: Array<{ num: string; title: string; paragraphs: string[]; bullets?: string[]; steps?: string[]; subItems?: Array<{ title: string; bullets: string[] }> }> };
  bolum3: { eyebrow: string; title: string; items: Array<{ num: string; title: string; paragraphs: string[]; bullets?: string[]; steps?: string[] }> };
  bolum4: {
    eyebrow: string; title: string; intro: string;
    denetim: { eyebrow: string; title: string; bullets: string[] };
    process: { eyebrow: string; title: string; steps: Array<{ num: string; title: string; desc: string }> };
    sure: { title: string; desc: string };
    sonrasi: { title: string; desc: string };
  };
  cta: { title: string; description: string; primaryCta: string; secondaryCta: string };
};

export type GayrimenkulFonPageData = { lang: string; dir: "ltr" | "rtl"; backLabel: string; copy: GayrimenkulFonPageCopy };

type FonDictLike = { lang?: string; dir?: string; nav?: { services?: string }; services_page?: { detail_back?: string }; gayrimenkul_fon_page?: GayrimenkulFonPageCopy };

export async function getGayrimenkulFonPageData(locale: string): Promise<GayrimenkulFonPageData> {
  const dict = (await getDictionary(locale)) as FonDictLike;
  const copy = dict.gayrimenkul_fon_page ?? ({} as GayrimenkulFonPageCopy);
  return {
    lang: dict.lang ?? getSafeLocale(locale),
    dir: dict.dir === "rtl" ? "rtl" : "ltr",
    backLabel: dict.services_page?.detail_back ?? dict.nav?.services ?? "Yatırım Türleri",
    copy,
  };
}
