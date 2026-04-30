import type { Metadata } from "next";

export const SEO_LOCALES = ["tr", "en", "ru", "ar", "fa"] as const;
export const RTL_LOCALES = ["ar", "fa"] as const;

export type SeoLocale = (typeof SEO_LOCALES)[number];
export type PageKey = "home" | "about" | "services" | "citizenship" | "knowledge" | "news" | "questions" | "contact";

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
  ar: "ar_SA",
  fa: "fa_IR",
};

const PAGE_SEO: Record<PageKey, PageSeoEntry> = {
  home: {
    path: "",
    titles: {
      tr: "Türkiye Yatırım Yoluyla Vatandaşlık Danışmanlığı",
      en: "International Citizenship and Immigration Consultancy",
      ru: "Международный консалтинг по гражданству и иммиграции",
      ar: "استشارات دولية في المواطنة والهجرة",
      fa: "مشاوره بین المللی شهروندی و مهاجرت",
    },
    descriptions: {
      tr: "Türkiye'de yatırım yoluyla vatandaşlık programı için gayrimenkul, mevduat, istihdam, fon ve başvuru süreçlerini uzman rehberlikle planlayın.",
      en: "Our expert team supports your citizenship, residence permit, and immigration journey. Book a free initial consultation for reliable global guidance.",
      ru: "Наша команда сопровождает процессы гражданства, ВНЖ и иммиграции. Запишитесь на бесплатную первичную консультацию для надежного международного сопровождения.",
      ar: "فريقنا المتخصص يرافقك في مسارات الجنسية والإقامة والهجرة. احجز استشارة أولية مجانية للحصول على دعم دولي موثوق.",
      fa: "تیم متخصص ما در مسیرهای شهروندی، اقامت و مهاجرت کنار شماست. برای دریافت مشاوره بین المللی مطمئن، یک جلسه اولیه رایگان رزرو کنید.",
    },
  },
  about: {
    path: "/about",
    titles: {
      tr: "Türkiye Vatandaşlık & Yatırım Danışmanlığı — Ekibimiz",
      en: "Turkish Citizenship Law Firm — Our Expert Team",
      ru: "Юридическая фирма по гражданству Турции — Наша команда",
      ar: "شركة قانونية للجنسية التركية — فريقنا المتخصص",
      fa: "موسسه حقوقی شهروندی ترکیه — تیم متخصص ما",
    },
    descriptions: {
      tr: "CitizenshipWeb ekibinin çalışma yaklaşımını, uzmanlık alanlarını ve 2013'ten bu yana geliştirdiği danışmanlık deneyimini inceleyin.",
      en: "Learn about CitizenshipWeb's advisory approach, specialist team structure, and experience in Turkish citizenship and investment files since 2013.",
      ru: "Узнайте о подходе CitizenshipWeb, структуре экспертной команды и опыте сопровождения инвестиционных и гражданских дел с 2013 года.",
      ar: "تعرّف على منهجية CitizenshipWeb وفريقها المتخصص وخبرتها في ملفات الجنسية والاستثمار التركية منذ عام 2013.",
      fa: "با رویکرد کاری CitizenshipWeb، ساختار تیم متخصص و تجربه این مجموعه در پرونده های شهروندی و سرمایه گذاری ترکیه از سال 2013 آشنا شوید.",
    },
  },
  services: {
    path: "/services",
    titles: {
      tr: "Türkiye Vatandaşlığı İçin Yatırım Türleri",
      en: "Professional Citizenship and Residence Permit Services",
      ru: "Профессиональные услуги по гражданству и ВНЖ",
      ar: "خدماتنا الاحترافية في الجنسية وتصاريح الإقامة",
      fa: "خدمات حرفه ای شهروندی و اجازه اقامت ما",
    },
    descriptions: {
      tr: "Gayrimenkul yatırımı, banka mevduatı, istihdam, devlet borçlanma araçları ve gayrimenkul yatırım fonu seçeneklerini tek sayfada karşılaştırın.",
      en: "Explore our immigration services including citizenship by investment, global work permits, and family reunification. Reach your goal with professional guidance.",
      ru: "Изучите наши иммиграционные услуги: гражданство за инвестиции, международные разрешения на работу и воссоединение семьи. Двигайтесь к цели с профессиональной поддержкой.",
      ar: "تعرّف على خدماتنا في الهجرة، بما في ذلك الجنسية عبر الاستثمار، وتصاريح العمل الدولية، ولمّ شمل الأسرة. حقق هدفك بإرشاد احترافي.",
      fa: "خدمات مهاجرتی ما از جمله شهروندی از طریق سرمایه گذاری، مجوزهای کار بین المللی و الحاق خانواده را بررسی کنید. با راهنمایی حرفه ای به هدف خود برسید.",
    },
  },
  citizenship: {
    path: "/citizenship",
    titles: {
      tr: "Türk Vatandaşı Olmanın Avantajları",
      en: "Benefits of Turkish Citizenship — Travel, Health & Investment",
      ru: "Преимущества турецкого гражданства — Путешествия, здоровье и инвестиции",
      ar: "مزايا الجنسية التركية — السفر والصحة والاستثمار",
      fa: "مزایای شهروندی ترکیه — سفر، بهداشت و سرمایه‌گذاری",
    },
    descriptions: {
      tr: "Türk vatandaşlığının seyahat, sağlık, eğitim, çoklu vatandaşlık ve yatırımcı perspektifinden sunduğu temel avantajları inceleyin.",
      en: "Explore the key benefits of Turkish citizenship: visa-free travel to 110+ countries, dual citizenship, healthcare, education rights and investor advantages.",
      ru: "Узнайте о ключевых преимуществах турецкого гражданства: безвизовый въезд в 110+ стран, двойное гражданство, медицина, образование и инвесторские привилегии.",
      ar: "اكتشف المزايا الرئيسية للجنسية التركية: السفر بدون تأشيرة إلى أكثر من 110 دولة، والجنسية المزدوجة، والرعاية الصحية، والتعليم، ومزايا المستثمرين.",
      fa: "مزایای کلیدی شهروندی ترکیه را بشناسید: سفر بدون ویزا به بیش از ۱۱۰ کشور، تابعیت مضاعف، بهداشت، تحصیل و مزایای سرمایه‌گذاران.",
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
      tr: "Türkiye Vatandaşlığı Sıkça Sorulan Sorular",
      en: "Frequently Asked Questions About Citizenship Processes",
      ru: "Часто задаваемые вопросы о процессах получения гражданства",
      ar: "الأسئلة الشائعة حول إجراءات الجنسية",
      fa: "پرسش های متداول درباره فرآیندهای شهروندی",
    },
    descriptions: {
      tr: "Türkiye yatırım yoluyla vatandaşlık programı hakkında kimlerin başvurabileceği, yatırım eşikleri ve süreç detaylarıyla ilgili sık sorulan soruları inceleyin.",
      en: "Find reference answers to your immigration and residence permit questions, or send your question directly to our expert advisors.",
      ru: "Найдите ответы на вопросы об иммиграции и ВНЖ или направьте свой вопрос напрямую нашим экспертам.",
      ar: "اعثر على إجابات مرجعية لأسئلتك حول الهجرة والإقامة، أو أرسل سؤالك مباشرة إلى خبرائنا.",
      fa: "پاسخ های مرجع برای پرسش های مهاجرت و اقامت خود را پیدا کنید یا سوالتان را مستقیما برای مشاوران متخصص ما بفرستید.",
    },
  },
  contact: {
    path: "/contact",
    titles: {
      tr: "Türkiye Vatandaşlık Programı İçin Bize Ulaşın",
      en: "Contact Us for Your Global Immigration Goals",
      ru: "Свяжитесь с нами для ваших международных иммиграционных целей",
      ar: "تواصل معنا لتحقيق أهدافك في الهجرة العالمية",
      fa: "برای اهداف مهاجرتی بین المللی خود با ما تماس بگیرید",
    },
    descriptions: {
      tr: "Türkiye yatırım yoluyla vatandaşlık dosyanız için adres, telefon, çalışma saatleri ve ön değerlendirme formu üzerinden bizimle iletişime geçin.",
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
          url: "/hero/gayrimenkul-vatandaslik.webp",
          width: 1920,
          height: 1080,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/hero/gayrimenkul-vatandaslik.webp"],
    },
  };
}
