import type { Metadata } from "next";
import Link from "next/link";

import { getDictionary } from "@/lib/dictionary";
import { SEO_LOCALES, getSafeLocale } from "@/lib/seo";

type PrivacyCard = {
  title?: string;
  desc?: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const safeLocale = getSafeLocale(lang);
  const dict = await getDictionary(safeLocale);
  const copy = dict.privacy_page ?? {};
  const canonical = `/${safeLocale}/privacy`;

  return {
    title: copy.meta_title || copy.title || "Privacy Policy",
    description: copy.meta_description || copy.intro || "Privacy and personal data notice.",
    alternates: {
      canonical,
      languages: {
        ...Object.fromEntries(SEO_LOCALES.map((locale) => [locale, `/${locale}/privacy`])),
        "x-default": "/en/privacy",
      },
    },
    openGraph: {
      title: copy.meta_title || copy.title || "Privacy Policy",
      description: copy.meta_description || copy.intro || "Privacy and personal data notice.",
      url: canonical,
      type: "website",
      siteName: "CitizenshipWeb",
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const copy = dict.privacy_page ?? {};
  const cards = Array.isArray(copy.cards) ? (copy.cards as PrivacyCard[]) : [];

  return (
    <main className="min-h-screen bg-[#f4f6f8] text-navy">
      <section className="relative overflow-hidden bg-navy px-6 py-24 text-white sm:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(163,34,34,0.28),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]" />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6">
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60">
            {copy.eyebrow}
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            {copy.title}
          </h1>
          <p className="max-w-3xl text-base leading-7 text-gray-200 sm:text-lg">
            {copy.intro}
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {cards.map((card, index) => (
            <article
              key={`${card.title}-${index}`}
              className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-[0_20px_60px_rgba(10,25,47,0.08)]"
            >
              <h2 className="text-2xl font-bold text-navy">{card.title}</h2>
              <p className="mt-4 text-[15px] leading-7 text-gray-600">{card.desc}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-5xl justify-start">
          <Link
            href={`/${dict.lang}/contact`}
            className="inline-flex items-center justify-center rounded-full bg-burgundy px-6 py-3 text-sm font-bold text-white transition hover:bg-burgundy-light"
          >
            {copy.contact_cta}
          </Link>
        </div>
      </section>
    </main>
  );
}
