import { getLocalizedPageUrl, getPageDescription, getPageTitle, type PageKey } from "@/lib/seo";

const SITE_NAME = "CitizenshipWeb";
const SITE_URL = "https://citizenshipweb.com";
const HERO_IMAGE = `${SITE_URL}/hero/gayrimenkul-vatandaslik.webp`;
const LOGO_IMAGE = `${SITE_URL}/logo/necmettin-barman-logo.png`;

const CONTACT_PHONE = "+90 532 449 47 28";
const CONTACT_EMAIL = "info@turkeyinvestmentcitizenship.com";
const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Seyitnizam Mah. Mevlana Cad. No:81/83 Kat:2 GINZA PLAZA",
  addressLocality: "Zeytinburnu",
  addressRegion: "İstanbul",
  postalCode: "34015",
  addressCountry: "TR",
};

type FaqItem = { q: string; a: string };
type ServiceItem = { title: string; description: string };
type SummaryItem = { title: string; desc: string };
type CollectionItem = { title: string; summary?: string; category?: string };

const HOME_LABELS: Record<string, string> = {
  tr: "Anasayfa",
  en: "Home",
  ru: "Главная",
  ar: "الرئيسية",
  fa: "صفحه اصلی",
};

function buildBreadcrumbSchema(page: Exclude<PageKey, "home">, locale: string) {
  const homeUrl = getLocalizedPageUrl("home", locale);
  const pageUrl = getLocalizedPageUrl(page, locale);
  const homeLabel = HOME_LABELS[locale] ?? HOME_LABELS.en;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: homeLabel,
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: getPageTitle(page, locale),
        item: pageUrl,
      },
    ],
  };
}

function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_IMAGE,
    image: HERO_IMAGE,
    sameAs: [
      "https://www.linkedin.com/company/citizenshipweb",
    ],
    address: ADDRESS,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: CONTACT_PHONE,
        email: CONTACT_EMAIL,
        availableLanguage: ["Turkish", "English", "Russian", "Arabic", "Persian"],
      },
    ],
  };
}

function buildFaqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

function buildWebsiteSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: getLocalizedPageUrl("home", locale),
    inLanguage: locale,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/${locale}/questions?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildHomeSchemas(locale: string, faqs: FaqItem[]) {
  return [
    buildOrganizationSchema(),
    buildWebsiteSchema(locale),
    buildFaqPageSchema(faqs),
  ];
}

export function buildHowToSchema(locale: string, steps: string[]) {
  const titles: Record<string, { name: string; description: string }> = {
    tr: { name: "Türkiye Vatandaşlığı İçin Başvuru Süreci", description: "Yatırım modelinin belirlenmesinden vatandaşlık kararına kadar 6 adımlı başvuru süreci." },
    en: { name: "Turkish Citizenship Application Process", description: "A 6-step guide from selecting your investment model to receiving your citizenship decision." },
    ru: { name: "Процесс подачи на гражданство Турции", description: "Пошаговое руководство из 6 этапов — от выбора модели инвестиций до получения гражданства." },
    ar: { name: "عملية التقديم على الجنسية التركية", description: "دليل من 6 خطوات من اختيار نموذج الاستثمار حتى الحصول على قرار الجنسية." },
    fa: { name: "فرآیند درخواست شهروندی ترکیه", description: "راهنمای ۶ مرحله‌ای از انتخاب مدل سرمایه‌گذاری تا دریافت تصمیم شهروندی." },
  };
  const t = titles[locale] ?? titles.tr;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: t.name,
    description: t.description,
    inLanguage: locale,
    step: steps.map((stepText, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: stepText,
      text: stepText,
    })),
  };
}

export function buildServicesSchemas(locale: string, services: ServiceItem[]) {
  return [
    buildBreadcrumbSchema("services", locale),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: getPageTitle("services", locale),
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
          },
        },
      })),
    },
  ];
}

export function buildCitizenshipSchemas(locale: string, items: SummaryItem[]) {
  return [
    buildBreadcrumbSchema("citizenship", locale),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: getPageTitle("citizenship", locale),
      description: getPageDescription("citizenship", locale),
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          name: item.title,
          description: item.desc,
        },
      })),
    },
  ];
}

export function buildCollectionSchemas(
  page: "knowledge" | "news",
  locale: string,
  items: CollectionItem[]
) {
  return [
    buildBreadcrumbSchema(page, locale),
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: getPageTitle(page, locale),
      description: getPageDescription(page, locale),
      url: getLocalizedPageUrl(page, locale),
      hasPart: items.map((item) => ({
        "@type": "CreativeWork",
        headline: item.title,
        description: item.summary,
        about: item.category,
      })),
    },
  ];
}

export function buildQuestionsSchemas(locale: string, faqs: FaqItem[]) {
  return [
    buildBreadcrumbSchema("questions", locale),
    {
      "@context": "https://schema.org",
      "@type": "QAPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ];
}

export function buildContactSchemas(locale: string) {
  return [
    buildBreadcrumbSchema("contact", locale),
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: SITE_NAME,
      url: getLocalizedPageUrl("contact", locale),
      image: HERO_IMAGE,
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE,
      address: ADDRESS,
      openingHours: "Mo-Fr 08:30-18:00",
    },
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: `${SITE_NAME} Legal & Immigration Advisory`,
      url: getLocalizedPageUrl("contact", locale),
      description: getPageDescription("contact", locale),
      image: HERO_IMAGE,
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE,
      address: ADDRESS,
      areaServed: "Worldwide",
    },
  ];
}
