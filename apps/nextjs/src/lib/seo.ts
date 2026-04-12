import type { Metadata } from "next";

export const SEO_LOCALES = ["tr", "en", "ru", "ar", "fa"] as const;
export const RTL_LOCALES = ["ar", "fa"] as const;

export type SeoLocale = (typeof SEO_LOCALES)[number];
export type PageKey = "home" | "services" | "citizenship" | "knowledge" | "news" | "questions" | "contact";

type LocaleMap = Record<SeoLocale, string>;

type PageSeoEntry = {
  path: string;
  titles: LocaleMap;
  descriptions: LocaleMap;
};

const OG_LOCALES: Record<SeoLocale, string> = {
  tr: "tr_TR",
  en: "en_US",
  ru: "ru_RU",
  ar: "ar_AR",
  fa: "fa_IR",
};

const PAGE_SEO: Record<PageKey, PageSeoEntry> = {
  home: {
    path: "",
    titles: {
      tr: "Uluslararası Vatandaşlık ve Göçmenlik Danışmanlığı",
      en: "International Citizenship and Immigration Consultancy",
      ru: "Международный консалтинг по гражданству и иммиграции",
      ar: "استشارات دولية في المواطنة والهجرة",
      fa: "مشاوره بین المللی شهروندی و مهاجرت",
    },
    descriptions: {
      tr: "Vatandaşlık, oturum izni ve göçmenlik süreçlerinizde uzman kadromuzla yanınızdayız. Dünya çapında güvenilir danışmanlık hizmetleri için ücretsiz ön görüşme ayarlayın.",
      en: "Our expert team supports your citizenship, residence permit, and immigration journey. Book a free initial consultation for reliable global guidance.",
      ru: "Наша команда сопровождает процессы гражданства, ВНЖ и иммиграции. Запишитесь на бесплатную первичную консультацию для надежного международного сопровождения.",
      ar: "فريقنا المتخصص يرافقك في مسارات الجنسية والإقامة والهجرة. احجز استشارة أولية مجانية للحصول على دعم دولي موثوق.",
      fa: "تیم متخصص ما در مسیرهای شهروندی، اقامت و مهاجرت کنار شماست. برای دریافت مشاوره بین المللی مطمئن، یک جلسه اولیه رایگان رزرو کنید.",
    },
  },
  services: {
    path: "/services",
    titles: {
      tr: "Profesyonel Vatandaşlık ve Oturum İzni Hizmetlerimiz",
      en: "Professional Citizenship and Residence Permit Services",
      ru: "Профессиональные услуги по гражданству и ВНЖ",
      ar: "خدماتنا الاحترافية في الجنسية وتصاريح الإقامة",
      fa: "خدمات حرفه ای شهروندی و اجازه اقامت ما",
    },
    descriptions: {
      tr: "Yatırım yoluyla vatandaşlık, global çalışma izinleri ve aile birleşimi dahil tüm göçmenlik hizmetlerimizi inceleyin. Profesyonel rehberlikle hedefinize ulaşın.",
      en: "Explore our immigration services including citizenship by investment, global work permits, and family reunification. Reach your goal with professional guidance.",
      ru: "Изучите наши иммиграционные услуги: гражданство за инвестиции, международные разрешения на работу и воссоединение семьи. Двигайтесь к цели с профессиональной поддержкой.",
      ar: "تعرّف على خدماتنا في الهجرة، بما في ذلك الجنسية عبر الاستثمار، وتصاريح العمل الدولية، ولمّ شمل الأسرة. حقق هدفك بإرشاد احترافي.",
      fa: "خدمات مهاجرتی ما از جمله شهروندی از طریق سرمایه گذاری، مجوزهای کار بین المللی و الحاق خانواده را بررسی کنید. با راهنمایی حرفه ای به هدف خود برسید.",
    },
  },
  citizenship: {
    path: "/citizenship",
    titles: {
      tr: "Adım Adım Vatandaşlık Başvuru Süreci",
      en: "Step-by-Step Citizenship Application Process",
      ru: "Пошаговый процесс подачи на гражданство",
      ar: "خطوات التقديم على الجنسية خطوة بخطوة",
      fa: "فرآیند گام به گام درخواست شهروندی",
    },
    descriptions: {
      tr: "Vatandaşlık başvuru sürecinin tüm adımlarını, gerekli hukuki belgeleri ve uzman tavsiyelerini öğrenin. Sürecinizi hızlandıracak ve güçlendirecek ipuçlarını keşfedin.",
      en: "Learn every stage of the citizenship application process, the required legal documents, and expert guidance. Discover tips that will accelerate and strengthen your case.",
      ru: "Узнайте все этапы подачи на гражданство, необходимые юридические документы и рекомендации экспертов. Откройте советы, которые ускорят и усилят ваше досье.",
      ar: "تعرّف على جميع مراحل طلب الجنسية، والوثائق القانونية المطلوبة، وإرشادات الخبراء. اكتشف نصائح تساعد على تسريع وتقوية ملفك.",
      fa: "همه مراحل درخواست شهروندی، مدارک حقوقی لازم و توصیه های تخصصی را بشناسید. نکاتی را ببینید که پرونده شما را سریع تر و قوی تر می کند.",
    },
  },
  knowledge: {
    path: "/knowledge",
    titles: {
      tr: "Kapsamlı Vatandaşlık ve Göçmenlik Bilgi Bankası",
      en: "Comprehensive Citizenship and Immigration Knowledge Library",
      ru: "Полная база знаний по гражданству и иммиграции",
      ar: "مكتبة معرفية شاملة للجنسية والهجرة",
      fa: "کتابخانه جامع دانش شهروندی و مهاجرت",
    },
    descriptions: {
      tr: "Oturum izni şartları, gayrimenkul yatırımı ve sosyal haklar hakkında detaylı rehberler, güncel prosedür bilgileri ve uzman makaleleri bilgi bankamızda.",
      en: "Access detailed guides, up-to-date procedures, and expert articles on residence permits, real estate investment, and social rights in our knowledge library.",
      ru: "В нашей базе знаний вы найдете подробные гайды, актуальные процедуры и экспертные статьи о ВНЖ, инвестициях в недвижимость и социальных правах.",
      ar: "اكتشف أدلة تفصيلية وإجراءات محدثة ومقالات خبراء حول الإقامة، والاستثمار العقاري، والحقوق الاجتماعية داخل مكتبتنا المعرفية.",
      fa: "در کتابخانه دانش ما به راهنماهای دقیق، رویه های به روز و مقالات تخصصی درباره اقامت، سرمایه گذاری ملکی و حقوق اجتماعی دسترسی دارید.",
    },
  },
  news: {
    path: "/news",
    titles: {
      tr: "Güncel Vatandaşlık ve Göçmenlik Haberleri",
      en: "Latest Citizenship and Immigration News",
      ru: "Актуальные новости о гражданстве и иммиграции",
      ar: "أحدث أخبار الجنسية والهجرة",
      fa: "جدیدترین اخبار شهروندی و مهاجرت",
    },
    descriptions: {
      tr: "Uluslararası göçmenlik yasalarındaki değişiklikler, yeni vatandaşlık programları ve yatırımcı vizesi güncellemeleri hakkında en son haberleri takip edin.",
      en: "Follow the latest updates on international immigration law changes, new citizenship programs, and investor visa developments.",
      ru: "Следите за последними новостями об изменениях в иммиграционном законодательстве, новых программах гражданства и обновлениях по инвесторским визам.",
      ar: "تابع أحدث التحديثات حول تغييرات قوانين الهجرة الدولية، وبرامج الجنسية الجديدة، وتطورات تأشيرات المستثمرين.",
      fa: "آخرین به روزرسانی های مربوط به تغییرات قوانین مهاجرت بین المللی، برنامه های جدید شهروندی و ویزاهای سرمایه گذاری را دنبال کنید.",
    },
  },
  questions: {
    path: "/questions",
    titles: {
      tr: "Vatandaşlık Süreçleri Hakkında Sıkça Sorulan Sorular",
      en: "Frequently Asked Questions About Citizenship Processes",
      ru: "Часто задаваемые вопросы о процессах получения гражданства",
      ar: "الأسئلة الشائعة حول إجراءات الجنسية",
      fa: "پرسش های متداول درباره فرآیندهای شهروندی",
    },
    descriptions: {
      tr: "Göçmenlik ve oturum izni süreçleri hakkında aklınıza takılan soruların referans yanıtlarını bulun veya uzman danışmanlarımıza doğrudan sorunuzu iletin.",
      en: "Find reference answers to your immigration and residence permit questions, or send your question directly to our expert advisors.",
      ru: "Найдите ответы на вопросы об иммиграции и ВНЖ или направьте свой вопрос напрямую нашим экспертам.",
      ar: "اعثر على إجابات مرجعية لأسئلتك حول الهجرة والإقامة، أو أرسل سؤالك مباشرة إلى خبرائنا.",
      fa: "پاسخ های مرجع برای پرسش های مهاجرت و اقامت خود را پیدا کنید یا سوالتان را مستقیما برای مشاوران متخصص ما بفرستید.",
    },
  },
  contact: {
    path: "/contact",
    titles: {
      tr: "Küresel Göçmenlik Hedefleriniz İçin Bize Ulaşın",
      en: "Contact Us for Your Global Immigration Goals",
      ru: "Свяжитесь с нами для ваших международных иммиграционных целей",
      ar: "تواصل معنا لتحقيق أهدافك في الهجرة العالمية",
      fa: "برای اهداف مهاجرتی بین المللی خود با ما تماس بگیرید",
    },
    descriptions: {
      tr: "Vatandaşlık planlarınız için uzman ve lisanslı danışmanlarımızla iletişime geçin. Size ve ailenize özel global çözümler sunmak için her zaman buradayız.",
      en: "Contact our expert licensed advisors for your citizenship plans. We are here to deliver global solutions tailored to you and your family.",
      ru: "Свяжитесь с нашими лицензированными экспертами по вопросам гражданства. Мы предлагаем международные решения, адаптированные под вас и вашу семью.",
      ar: "تواصل مع مستشارينا المرخصين والخبراء من أجل خطط الجنسية الخاصة بك. نحن هنا لنقدم حلولاً عالمية مناسبة لك ولعائلتك.",
      fa: "برای برنامه های شهروندی خود با مشاوران متخصص و دارای مجوز ما تماس بگیرید. ما برای ارائه راهکارهای بین المللی متناسب با شما و خانواده تان در کنار شما هستیم.",
    },
  },
};

export function getSafeLocale(locale: string): SeoLocale {
  return SEO_LOCALES.includes(locale as SeoLocale) ? (locale as SeoLocale) : "tr";
}

export function getLocaleDirection(locale: string): "ltr" | "rtl" {
  return RTL_LOCALES.includes(locale as (typeof RTL_LOCALES)[number]) ? "rtl" : "ltr";
}

export function getLocalizedPagePath(page: PageKey, locale: SeoLocale): string {
  const suffix = PAGE_SEO[page].path;
  return suffix ? `/${locale}${suffix}` : `/${locale}`;
}

export function getLocalizedPageUrl(page: PageKey, locale: string): string {
  return `https://citizenshipweb.com${getLocalizedPagePath(page, getSafeLocale(locale))}`;
}

export function getPageTitle(page: PageKey, locale: string): string {
  const safeLocale = getSafeLocale(locale);
  return PAGE_SEO[page].titles[safeLocale];
}

export function getPageDescription(page: PageKey, locale: string): string {
  const safeLocale = getSafeLocale(locale);
  return PAGE_SEO[page].descriptions[safeLocale];
}

export function buildPageMetadata(page: PageKey, locale: string): Metadata {
  const safeLocale = getSafeLocale(locale);
  const entry = PAGE_SEO[page];
  const title = entry.titles[safeLocale];
  const description = entry.descriptions[safeLocale];
  const canonical = getLocalizedPagePath(page, safeLocale);

  const languages = Object.fromEntries(
    SEO_LOCALES.map((targetLocale) => [targetLocale, getLocalizedPagePath(page, targetLocale)])
  ) as Record<SeoLocale, string>;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": getLocalizedPagePath(page, "en"),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      siteName: "CitizenshipWeb",
      locale: OG_LOCALES[safeLocale],
      images: [
        {
          url: "/hero.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/hero.png"],
    },
  };
}
