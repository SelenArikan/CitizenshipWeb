import { getLocalizedPageUrl, getPageDescription, getPageTitle, type PageKey } from "@/lib/seo";

const SITE_NAME = "CitizenshipWeb";
const SITE_URL = "https://citizenshipweb.com";
const HERO_IMAGE = `${SITE_URL}/hero.png`;

const CONTACT_PHONE = "+90 212 555 00 00";
const CONTACT_EMAIL = "info@citizenshipweb.com";
const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Levent Mah. Cömert Sok. No:1 Kat:15",
  addressLocality: "Beşiktaş",
  addressRegion: "İstanbul",
  postalCode: "34330",
  addressCountry: "TR",
};

type FaqItem = { q: string; a: string };
type ServiceItem = { title: string; description: string };
type HowToStepItem = { title: string; desc: string };
type CollectionItem = { title: string; summary?: string; category?: string };

function buildBreadcrumbSchema(page: Exclude<PageKey, "home">, locale: string) {
  const homeUrl = getLocalizedPageUrl("home", locale);
  const pageUrl = getLocalizedPageUrl(page, locale);

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
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
    image: HERO_IMAGE,
    address: ADDRESS,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: CONTACT_PHONE,
        email: CONTACT_EMAIL,
        availableLanguage: ["tr", "en", "ru", "ar", "fa"],
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
  };
}

export function buildHomeSchemas(locale: string, faqs: FaqItem[]) {
  return [
    buildOrganizationSchema(),
    buildWebsiteSchema(locale),
    buildFaqPageSchema(faqs),
  ];
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

export function buildCitizenshipSchemas(locale: string, steps: HowToStepItem[]) {
  return [
    buildBreadcrumbSchema("citizenship", locale),
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: getPageTitle("citizenship", locale),
      description: getPageDescription("citizenship", locale),
      image: HERO_IMAGE,
      step: steps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.title,
        text: step.desc,
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
      openingHours: "Mo-Fr 09:00-18:00",
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
