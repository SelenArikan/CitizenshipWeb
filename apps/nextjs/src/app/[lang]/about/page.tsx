import type { Metadata } from "next";
import { buildPageMetadata, getSafeLocale } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import AboutPageContent from "../../about/page";

const aboutSchemas = (lang: string) => [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    inLanguage: lang,
    name:
      lang === "tr"
        ? "CitizenshipWeb — Hakkımızda"
        : lang === "en"
        ? "CitizenshipWeb — About Us"
        : lang === "ru"
        ? "CitizenshipWeb — О нас"
        : lang === "ar"
        ? "CitizenshipWeb — من نحن"
        : "CitizenshipWeb — درباره ما",
    url: `https://citizenshipweb.com/${lang}/about`,
    description:
      lang === "tr"
        ? "CitizenshipWeb, Türkiye vatandaşlık ve yatırım dosyalarında uzmanlaşmış danışmanlık ekibini tanıtır."
        : lang === "en"
        ? "CitizenshipWeb presents its advisory team specializing in Turkish citizenship and investment files."
        : lang === "ru"
        ? "Страница представляет команду CitizenshipWeb, работающую со стратегией гражданства и инвестиций в Турции."
        : lang === "ar"
        ? "تعرّف هذه الصفحة بفريق CitizenshipWeb المتخصص في ملفات الجنسية والاستثمار في تركيا."
        : "این صفحه تیم CitizenshipWeb را که در پرونده های شهروندی و سرمایه گذاری ترکیه تخصص دارد معرفی می کند.",
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
  const safeLocale = getSafeLocale(lang);
  const base = buildPageMetadata("about", safeLocale);
  return {
    ...base,
    title:
      safeLocale === "tr"
        ? "Hakkımızda"
        : safeLocale === "en"
        ? "About Us"
        : safeLocale === "ru"
        ? "О нас"
        : safeLocale === "ar"
        ? "من نحن"
        : "درباره ما",
    description:
      safeLocale === "tr"
        ? "CitizenshipWeb, 2013 yılından bu yana Türkiye yatırım yoluyla vatandaşlık başvurularında uzman danışmanlık firmasıdır."
        : safeLocale === "en"
        ? "CitizenshipWeb is a leading citizenship by investment consultancy founded in 2013, offering expert guidance for Turkish citizenship applications."
        : safeLocale === "ru"
        ? "CitizenshipWeb — консультационная команда, сопровождающая дела о гражданстве через инвестиции в Турции с 2013 года."
        : safeLocale === "ar"
        ? "CitizenshipWeb فريق استشاري متخصص في ملفات الجنسية التركية عبر الاستثمار منذ عام 2013."
        : "CitizenshipWeb از سال 2013 در پرونده های شهروندی ترکیه از طریق سرمایه گذاری مشاوره تخصصی ارائه می دهد.",
    alternates: {
      canonical: `/${safeLocale}/about`,
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
