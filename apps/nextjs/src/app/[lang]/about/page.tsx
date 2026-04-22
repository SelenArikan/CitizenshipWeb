import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import AboutPageContent from "../../about/page";

const aboutSchemas = (lang: string) => [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    inLanguage: lang,
    name: "CitizenshipWeb — About Us",
    url: `https://citizenshipweb.com/${lang}/about`,
    description:
      "CitizenshipWeb — a leading citizenship by investment consultancy firm founded in 2013, specializing in Turkish citizenship applications.",
    publisher: {
      "@type": "Organization",
      name: "CitizenshipWeb",
      url: "https://citizenshipweb.com",
    },
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  // Reuse "about" entry from seo.ts titles/descriptions as a fallback;
  // you can add a dedicated "about" PageKey later.
  const base = buildPageMetadata("contact", lang);
  return {
    ...base,
    title:
      lang === "tr"
        ? "Hakkımızda | CitizenshipWeb"
        : lang === "en"
        ? "About Us | CitizenshipWeb"
        : lang === "ru"
        ? "О нас | CitizenshipWeb"
        : lang === "ar"
        ? "من نحن | CitizenshipWeb"
        : "درباره ما | CitizenshipWeb",
    description:
      lang === "tr"
        ? "CitizenshipWeb, 2013 yılından bu yana Türkiye yatırım yoluyla vatandaşlık başvurularında uzman danışmanlık firmasıdır."
        : lang === "en"
        ? "CitizenshipWeb is a leading citizenship by investment consultancy founded in 2013, offering expert guidance for Turkish citizenship applications."
        : base.description,
    alternates: {
      canonical: `/${lang}/about`,
      languages: {
        tr: "/tr/about", en: "/en/about", ru: "/ru/about", ar: "/ar/about", fa: "/fa/about",
        "x-default": "/en/about",
      },
    },
  };
}

export default async function LangAboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <>
      <JsonLd data={aboutSchemas(lang)} />
      <AboutPageContent lang={lang} />
    </>
  );
}
