import { getArticles, type Article } from "@/lib/knowledge";
import { getBulletins, type Bulletin } from "@/lib/news";
import { SEO_LOCALES, getSafeLocale, type SeoLocale } from "@/lib/seo";

type LocaleMap = Record<SeoLocale, string>;

type PublicEntrySeed = {
  slug: string;
  title: LocaleMap;
  summary: LocaleMap;
  content: LocaleMap;
  category: LocaleMap;
  coverImage: string;
  tags: string[];
  authorName: LocaleMap;
  publishedAt: string;
  isFeatured?: boolean;
};

export type PublicEntry = {
  locale: SeoLocale;
  slug: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  coverImage: string;
  tags: string[];
  authorName: string;
  isFeatured: boolean;
  publishedAt: string | null;
  updatedAt: string;
};

export type ContactPageCopy = {
  title: string;
  summary: string;
  officeTitle: string;
  officeIntro: string;
  addressLabel: string;
  emailLabel: string;
  phoneLabel: string;
  hoursLabel: string;
  weekdays: string;
  weekend: string;
  formTitle: string;
  placeholders: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
  };
  submitLabel: string;
};

export type CitizenshipPageCopy = {
  title: string;
  summary: string;
  benefits: Array<{ title: string; desc: string }>;
  ctaTitle: string;
  ctaDesc: string;
  servicesLabel: string;
  contactLabel: string;
};

export type NewsPageCopy = {
  title: string;
  summary: string;
  categoriesTitle: string;
  categories: string[];
  allLabel: string;
  readMoreLabel: string;
  featuredLabel: string;
};

export type KnowledgePageCopy = {
  title: string;
  summary: string;
  categories: string[];
  featuredLabel: string;
  readMoreLabel: string;
};

const DEFAULT_UPDATED_AT = "2026-04-23T00:00:00.000Z";

const CONTACT_COPY: Record<SeoLocale, ContactPageCopy> = {
  tr: {
    title: "Bizimle İletişime Geçin",
    summary: "Türkiye yatırım yoluyla vatandaşlık dosyanızı, bütçenizi ve aile yapınızı birlikte değerlendirelim.",
    officeTitle: "İstanbul Ofisi",
    officeIntro:
      "İlk görüşmede dosyanızın hangi yatırım modeliyle daha sağlıklı ilerleyeceğini, gerekli belgeleri ve süre beklentisini adım adım konuşabiliriz.",
    addressLabel: "Açık Adres",
    emailLabel: "E-Posta",
    phoneLabel: "Telefon",
    hoursLabel: "Çalışma Saatleri",
    weekdays: "Pazartesi - Cuma: 08:30 - 18:00",
    weekend: "Cumartesi - Pazar: Kapalı",
    formTitle: "İletişim Formu",
    placeholders: {
      firstName: "Adınız",
      lastName: "Soyadınız",
      email: "E-posta Adresiniz",
      phone: "Telefon Numaranız",
      message: "Hangi yatırım modelini düşündüğünüzü, aile dosyanızı veya merak ettiğiniz soruyu kısaca yazın...",
    },
    submitLabel: "Mesajı Gönder",
  },
  en: {
    title: "Contact Us",
    summary: "Let us review your Turkey citizenship by investment file, budget, and family structure together.",
    officeTitle: "Istanbul Office",
    officeIntro:
      "During the first call, we can walk through the right investment route for your case, the required documents, and the expected timeline.",
    addressLabel: "Office Address",
    emailLabel: "Email",
    phoneLabel: "Phone",
    hoursLabel: "Working Hours",
    weekdays: "Monday - Friday: 08:30 - 18:00",
    weekend: "Saturday - Sunday: Closed",
    formTitle: "Contact Form",
    placeholders: {
      firstName: "First name",
      lastName: "Last name",
      email: "Email address",
      phone: "Phone number",
      message: "Briefly describe the investment route you are considering, your family file, or the question you want us to review...",
    },
    submitLabel: "Send Message",
  },
  ru: {
    title: "Свяжитесь с нами",
    summary: "Давайте вместе оценим ваш бюджет, семейную структуру и стратегию подачи на гражданство Турции через инвестиции.",
    officeTitle: "Офис в Стамбуле",
    officeIntro:
      "На первой встрече мы обсудим, какая инвестиционная модель подходит вашему делу, какие документы потребуются и как будет выглядеть примерный срок процесса.",
    addressLabel: "Адрес офиса",
    emailLabel: "Эл. почта",
    phoneLabel: "Телефон",
    hoursLabel: "Часы работы",
    weekdays: "Понедельник - Пятница: 08:30 - 18:00",
    weekend: "Суббота - Воскресенье: выходной",
    formTitle: "Контактная форма",
    placeholders: {
      firstName: "Имя",
      lastName: "Фамилия",
      email: "Адрес электронной почты",
      phone: "Номер телефона",
      message: "Кратко опишите интересующую вас инвестиционную модель, семейное досье или вопрос, который вы хотите обсудить...",
    },
    submitLabel: "Отправить сообщение",
  },
  ar: {
    title: "تواصل معنا",
    summary: "دعنا نراجع معاً ملفك وميزانيتك وبنية عائلتك ضمن برنامج الجنسية التركية عبر الاستثمار.",
    officeTitle: "مكتب إسطنبول",
    officeIntro:
      "في الاجتماع الأول نوضح معك نموذج الاستثمار الأنسب، والوثائق المطلوبة، والمدة المتوقعة لكل مرحلة من الملف.",
    addressLabel: "عنوان المكتب",
    emailLabel: "البريد الإلكتروني",
    phoneLabel: "الهاتف",
    hoursLabel: "ساعات العمل",
    weekdays: "الاثنين - الجمعة: 08:30 - 18:00",
    weekend: "السبت - الأحد: مغلق",
    formTitle: "نموذج التواصل",
    placeholders: {
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      message: "اكتب باختصار نموذج الاستثمار الذي تفكر فيه أو تفاصيل ملف العائلة أو السؤال الذي ترغب في مراجعته...",
    },
    submitLabel: "إرسال الرسالة",
  },
  fa: {
    title: "با ما تماس بگیرید",
    summary: "بیایید بودجه، ساختار خانوادگی و مسیر مناسب پرونده شهروندی ترکیه از طریق سرمایه گذاری شما را با هم بررسی کنیم.",
    officeTitle: "دفتر استانبول",
    officeIntro:
      "در گفت و گوی اولیه بررسی می کنیم کدام مدل سرمایه گذاری برای پرونده شما مناسب تر است، چه مدارکی لازم دارید و جدول زمانی تقریبی چگونه خواهد بود.",
    addressLabel: "نشانی دفتر",
    emailLabel: "ایمیل",
    phoneLabel: "تلفن",
    hoursLabel: "ساعات کاری",
    weekdays: "دوشنبه تا جمعه: 08:30 - 18:00",
    weekend: "شنبه و یکشنبه: تعطیل",
    formTitle: "فرم تماس",
    placeholders: {
      firstName: "نام",
      lastName: "نام خانوادگی",
      email: "آدرس ایمیل",
      phone: "شماره تلفن",
      message: "به طور خلاصه مدل سرمایه گذاری مورد نظر، وضعیت پرونده خانوادگی یا سوالی را که می خواهید بررسی کنیم بنویسید...",
    },
    submitLabel: "ارسال پیام",
  },
};

const CITIZENSHIP_COPY: Record<SeoLocale, CitizenshipPageCopy> = {
  tr: {
    title: "Türk Vatandaşı Olmanın Avantajları",
    summary:
      "Seyahat, sağlık, eğitim, ticaret ve aile planlaması açısından Türk vatandaşlığının sunduğu temel avantajları bir arada inceleyin.",
    benefits: [
      {
        title: "Vizesiz veya kolay vizeli seyahat esnekliği",
        desc: "Türk pasaportu pek çok destinasyonda vizesiz, kapıda vize veya e-vize ile erişim planlamasında yatırımcı ailelerine güçlü bir hareket alanı sağlar.",
      },
      {
        title: "Sağlık sistemi ve eğitim altyapısına erişim",
        desc: "Vatandaşlık sonrasında kamu hizmetleri, sağlık altyapısı ve eğitim kurumları uzun vadeli yaşam planlaması için güçlü bir zemin sunar.",
      },
      {
        title: "Çifte vatandaşlık ve stratejik mobilite",
        desc: "Türkiye çoklu vatandaşlığa izin verir; bu da mevcut vatandaşlıkları korurken yeni seyahat ve iş planlarını daha esnek kurgulamanıza yardımcı olabilir.",
      },
      {
        title: "Türkiye'de yaşama zorunluluğu olmadan süreç yönetimi",
        desc: "Yatırım ve başvuru dosyası, uygun vekalet ve resmi akış planlamasıyla uzaktan da ilerletilebilir.",
      },
    ],
    ctaTitle: "Avantajları doğru yatırım modeliyle birleştirin",
    ctaDesc:
      "Vatandaşlık kararından önce hangi yatırım seçeneğinin sizin için daha uygun olduğunu, aile dosyanız ve bütçe yapınızla birlikte değerlendirelim.",
    servicesLabel: "Yatırım Türlerini İncele",
    contactLabel: "Bizimle İletişime Geç",
  },
  en: {
    title: "Benefits of Turkish Citizenship",
    summary:
      "Review the core advantages Turkish citizenship can provide for travel, healthcare, education, business planning, and family mobility.",
    benefits: [
      {
        title: "Flexible visa-free and visa-on-arrival travel",
        desc: "A Turkish passport can support broader travel planning through visa-free, visa-on-arrival, and e-visa access across many destinations.",
      },
      {
        title: "Access to healthcare and education infrastructure",
        desc: "After naturalization, public services, healthcare infrastructure, and educational institutions can provide a stronger long-term relocation base.",
      },
      {
        title: "Dual citizenship and strategic mobility planning",
        desc: "Turkey permits multiple citizenships, which can support broader travel, family, and business planning while preserving your existing nationality structure.",
      },
      {
        title: "Process management without a permanent stay requirement",
        desc: "With the right power of attorney and document flow, major stages of the investment and application process can be coordinated remotely.",
      },
    ],
    ctaTitle: "Match the benefits with the right investment route",
    ctaDesc:
      "Before you commit, let us compare the most suitable investment option against your family structure, liquidity plan, and timeline expectations.",
    servicesLabel: "Review Investment Types",
    contactLabel: "Contact Us",
  },
  ru: {
    title: "Преимущества турецкого гражданства",
    summary:
      "Изучите ключевые преимущества турецкого гражданства для поездок, образования, медицины, бизнеса и долгосрочного семейного планирования.",
    benefits: [
      {
        title: "Гибкие поездки с безвизовым и упрощённым режимом",
        desc: "Турецкий паспорт может расширить международную мобильность за счёт безвизового въезда, визы по прибытии и электронных виз.",
      },
      {
        title: "Доступ к здравоохранению и образованию",
        desc: "После получения гражданства у семьи появляется более устойчивая база для долгосрочного проживания благодаря системе здравоохранения и образовательной инфраструктуре.",
      },
      {
        title: "Двойное гражданство и стратегическая мобильность",
        desc: "Турция допускает множественное гражданство, что помогает гибко выстраивать семейные, инвестиционные и международные планы.",
      },
      {
        title: "Управление процессом без обязательного проживания",
        desc: "При корректной доверенности и документальном сопровождении значительная часть инвестиционного и иммиграционного процесса может вестись дистанционно.",
      },
    ],
    ctaTitle: "Соедините преимущества с правильной инвестиционной моделью",
    ctaDesc:
      "До принятия решения мы поможем сравнить инвестиционные опции с учётом структуры семьи, бюджета и желаемых сроков.",
    servicesLabel: "Изучить виды инвестиций",
    contactLabel: "Связаться с нами",
  },
  ar: {
    title: "مزايا الحصول على الجنسية التركية",
    summary:
      "تعرّف على أبرز مزايا الجنسية التركية من حيث السفر والرعاية الصحية والتعليم والتخطيط التجاري والعائلي طويل المدى.",
    benefits: [
      {
        title: "مرونة السفر بدون تأشيرة أو بتأشيرة ميسّرة",
        desc: "يمكن لجواز السفر التركي أن يوسّع خيارات التنقل الدولي عبر الدخول بدون تأشيرة أو بتأشيرة عند الوصول أو تأشيرة إلكترونية إلى العديد من الوجهات.",
      },
      {
        title: "الوصول إلى البنية الصحية والتعليمية",
        desc: "بعد الحصول على الجنسية، تستفيد الأسرة من قاعدة أقوى للمعيشة طويلة الأجل بفضل الخدمات العامة والبنية الصحية والمؤسسات التعليمية.",
      },
      {
        title: "الجنسية المزدوجة والتنقل الاستراتيجي",
        desc: "تسمح تركيا بتعدد الجنسيات، ما يمنح مرونة أكبر في التخطيط العائلي والاستثماري وحركة السفر الدولية.",
      },
      {
        title: "إدارة الملف دون شرط إقامة دائمة",
        desc: "مع وكالة مناسبة وتدفق وثائقي منظم، يمكن تنفيذ جزء كبير من مراحل الاستثمار والطلب عن بُعد.",
      },
    ],
    ctaTitle: "اربط المزايا بنموذج الاستثمار المناسب",
    ctaDesc:
      "قبل اتخاذ القرار، دعنا نقارن خيارات الاستثمار الأنسب وفق هيكل عائلتك وميزانيتك وتوقعاتك الزمنية.",
    servicesLabel: "استعرض أنواع الاستثمار",
    contactLabel: "تواصل معنا",
  },
  fa: {
    title: "مزایای شهروندی ترکیه",
    summary:
      "مزیت های اصلی شهروندی ترکیه را از نظر سفر، آموزش، خدمات درمانی، برنامه ریزی تجاری و ساختار خانواده بررسی کنید.",
    benefits: [
      {
        title: "انعطاف بیشتر در سفرهای بدون ویزا یا با ویزای آسان",
        desc: "پاسپورت ترکیه می تواند در بسیاری از مقاصد با دسترسی بدون ویزا، ویزای فرودگاهی یا ویزای الکترونیکی دامنه حرکت بین المللی شما را گسترش دهد.",
      },
      {
        title: "دسترسی به زیرساخت درمان و آموزش",
        desc: "پس از دریافت شهروندی، خدمات عمومی، زیرساخت درمانی و نهادهای آموزشی می توانند پایه مطمئن تری برای زندگی بلندمدت خانواده فراهم کنند.",
      },
      {
        title: "تابعیت مضاعف و برنامه ریزی راهبردی جابه جایی",
        desc: "ترکیه تابعیت چندگانه را می پذیرد و این موضوع برای برنامه ریزی خانوادگی، سرمایه گذاری و جابه جایی بین المللی انعطاف بیشتری ایجاد می کند.",
      },
      {
        title: "مدیریت پرونده بدون الزام به اقامت دائم",
        desc: "با وکالت مناسب و برنامه ریزی درست مدارک، بخش مهمی از مسیر سرمایه گذاری و درخواست شهروندی را می توان از راه دور پیش برد.",
      },
    ],
    ctaTitle: "مزایا را با مدل سرمایه گذاری مناسب ترکیب کنید",
    ctaDesc:
      "پیش از تصمیم نهایی، بهترین گزینه سرمایه گذاری را با توجه به ساختار خانواده، نقدینگی و زمان بندی مورد انتظار شما مقایسه می کنیم.",
    servicesLabel: "انواع سرمایه گذاری را ببینید",
    contactLabel: "تماس با ما",
  },
};

const NEWS_COPY: Record<SeoLocale, NewsPageCopy> = {
  tr: {
    title: "Haberler ve Bültenler",
    summary: "Sektörel gelişmelerden, mevzuat değişikliklerinden ve yeni yatırım fırsatlarından ilk siz haberdar olun.",
    categoriesTitle: "Kategoriler",
    categories: ["Güncel Yatırım Fırsatları", "Hukuki Değişiklikler", "Başarı Hikayeleri", "Vize & Oturum"],
    allLabel: "Tüm Haberler",
    readMoreLabel: "Haberin Devamı",
    featuredLabel: "Öne Çıkan Bülten",
  },
  en: {
    title: "News and Bulletins",
    summary: "Stay informed about regulatory changes, market movements, and new investment opportunities affecting citizenship and residence planning.",
    categoriesTitle: "Categories",
    categories: ["Investment Opportunities", "Legal Updates", "Case Highlights", "Visa & Residence"],
    allLabel: "All News",
    readMoreLabel: "Read the Story",
    featuredLabel: "Featured Bulletin",
  },
  ru: {
    title: "Новости и бюллетени",
    summary: "Следите за изменениями законодательства, рыночными сигналами и новыми инвестиционными возможностями, влияющими на иммиграционное планирование.",
    categoriesTitle: "Категории",
    categories: ["Инвестиционные возможности", "Юридические обновления", "Кейсы", "Визы и ВНЖ"],
    allLabel: "Все новости",
    readMoreLabel: "Читать далее",
    featuredLabel: "Рекомендуемый бюллетень",
  },
  ar: {
    title: "الأخبار والنشرات",
    summary: "تابع تحديثات القوانين والفرص الاستثمارية الجديدة والتطورات التي تؤثر على خطط الجنسية والإقامة.",
    categoriesTitle: "التصنيفات",
    categories: ["فرص استثمارية", "تحديثات قانونية", "حالات عملية", "التأشيرات والإقامة"],
    allLabel: "جميع الأخبار",
    readMoreLabel: "متابعة الخبر",
    featuredLabel: "نشرة مميزة",
  },
  fa: {
    title: "اخبار و بولتن ها",
    summary: "از تغییرات مقررات، فرصت های تازه سرمایه گذاری و تحولات موثر بر برنامه های اقامت و شهروندی باخبر بمانید.",
    categoriesTitle: "دسته بندی ها",
    categories: ["فرصت های سرمایه گذاری", "به روزرسانی حقوقی", "نمونه پرونده ها", "ویزا و اقامت"],
    allLabel: "همه اخبار",
    readMoreLabel: "ادامه خبر",
    featuredLabel: "بولتن ویژه",
  },
};

const KNOWLEDGE_COPY: Record<SeoLocale, KnowledgePageCopy> = {
  tr: {
    title: "Bilgi Bankası",
    summary: "Vatandaşlık, oturum ve yatırım hakları hakkında hazırlanmış referans rehberleri tek kütüphanede inceleyin.",
    categories: ["Tümü", "Vatandaşlık", "Oturum", "Mülkiyet", "Yatırım", "Aile", "Seyahat"],
    featuredLabel: "Öne Çıkan Rehber",
    readMoreLabel: "Makaleyi Oku",
  },
  en: {
    title: "Knowledge Base",
    summary: "Explore reference guides on citizenship, residence, property, and investor mobility in one organized library.",
    categories: ["All", "Citizenship", "Residence", "Property", "Investment", "Family", "Travel"],
    featuredLabel: "Featured Guide",
    readMoreLabel: "Read Article",
  },
  ru: {
    title: "База знаний",
    summary: "Изучите справочные материалы по гражданству, ВНЖ, недвижимости и инвестиционной мобильности в одной библиотеке.",
    categories: ["Все", "Гражданство", "ВНЖ", "Собственность", "Инвестиции", "Семья", "Путешествия"],
    featuredLabel: "Рекомендуемый гид",
    readMoreLabel: "Читать статью",
  },
  ar: {
    title: "مكتبة المعرفة",
    summary: "استكشف أدلة مرجعية حول الجنسية والإقامة والملكية وحركة المستثمرين ضمن مكتبة معرفية واحدة.",
    categories: ["الكل", "الجنسية", "الإقامة", "الملكية", "الاستثمار", "الأسرة", "السفر"],
    featuredLabel: "الدليل المميز",
    readMoreLabel: "قراءة المقال",
  },
  fa: {
    title: "کتابخانه دانش",
    summary: "راهنماهای مرجع درباره شهروندی، اقامت، مالکیت و جابه جایی سرمایه گذار را در یک کتابخانه منظم بررسی کنید.",
    categories: ["همه", "شهروندی", "اقامت", "مالکیت", "سرمایه گذاری", "خانواده", "سفر"],
    featuredLabel: "راهنمای ویژه",
    readMoreLabel: "مطالعه مقاله",
  },
};

const NEWS_FALLBACK: PublicEntrySeed[] = [
  {
    slug: "real-estate-valuation-updates-2026",
    category: {
      tr: "Hukuki Değişiklikler",
      en: "Legal Updates",
      ru: "Юридические обновления",
      ar: "تحديثات قانونية",
      fa: "به روزرسانی حقوقی",
    },
    title: {
      tr: "2026 Gayrimenkul Değerleme Güncellemeleri",
      en: "2026 Real Estate Valuation Updates",
      ru: "Обновления оценки недвижимости 2026",
      ar: "تحديثات تقييم العقارات لعام 2026",
      fa: "به روزرسانی ارزیابی املاک 2026",
    },
    summary: {
      tr: "Yeni değerleme pratiği yatırım dosyalarında zamanlama, ekspertiz seçimi ve resmi başvuru sırasını doğrudan etkiliyor.",
      en: "The latest valuation practice directly affects file timing, appraisal strategy, and the order of official application steps.",
      ru: "Новая практика оценки напрямую влияет на сроки досье, выбор экспертизы и последовательность официальных этапов.",
      ar: "تؤثر آلية التقييم الجديدة مباشرة على توقيت الملف واختيار التقييم وتسلسل خطوات التقديم الرسمية.",
      fa: "رویه جدید ارزیابی مستقیماً بر زمان بندی پرونده، انتخاب کارشناس و ترتیب مراحل رسمی اثر می گذارد.",
    },
    content: {
      tr: "Gayrimenkul yatırımı yoluyla vatandaşlık dosyalarında değerleme raporunun güncelliği, yatırımın resmi kabul hızını belirleyen başlıca unsurlardan biridir.\n\n2026 itibarıyla uygulamada öne çıkan değişiklik, ekspertiz zamanlamasının tapu ve döviz alım süreciyle daha sıkı eşleştirilmesidir. Bu nedenle yatırımcıların satın alma takvimini rapor geçerlilik süresiyle birlikte planlaması gerekir.\n\nDosyanın gecikmemesi için değerleme, ödeme akışı ve satılamaz şerhi adımlarının tek bir koordinasyon planında ele alınması önerilir.",
      en: "In real estate citizenship files, the freshness of the valuation report remains one of the key factors affecting how quickly the investment can be accepted officially.\n\nAs of 2026, the main operational shift is the tighter alignment between appraisal timing, title deed execution, and foreign exchange conversion records. Investors should therefore plan the purchase calendar together with the appraisal validity window.\n\nTo avoid friction, valuation, payment flow, and the no-sale annotation should be coordinated as part of a single execution plan.",
      ru: "В делах о гражданстве через недвижимость актуальность отчёта об оценке остаётся одним из главных факторов, влияющих на официальное принятие инвестиции.\n\nВ 2026 году особенно важным стало более тесное совпадение сроков экспертизы, оформления ТАПУ и валютных операций. Поэтому календарь покупки следует планировать с учётом срока действия отчёта.\n\nЧтобы избежать задержек, оценка, платёжный поток и отметка о запрете продажи должны координироваться в рамках единого плана.",
      ar: "في ملفات الجنسية عبر الاستثمار العقاري تبقى حداثة تقرير التقييم من أهم العوامل التي تؤثر على سرعة قبول الاستثمار رسمياً.\n\nاعتباراً من 2026 أصبح من الضروري تنسيق توقيت التقييم بشكل أوثق مع إجراءات الطابو وتحويل العملة. لذلك يجب التخطيط لجدول الشراء مع مراعاة مدة صلاحية تقرير التقييم.\n\nولتفادي التأخير، من الأفضل إدارة التقييم وخطوات السداد وقيد عدم البيع ضمن خطة تنفيذ واحدة.",
      fa: "در پرونده های شهروندی از طریق سرمایه گذاری ملکی، به روز بودن گزارش ارزیابی هنوز یکی از عوامل اصلی سرعت پذیرش رسمی سرمایه گذاری است.\n\nاز سال 2026 هماهنگی دقیق تر زمان ارزیابی با انتقال سند و ثبت تبدیل ارز اهمیت بیشتری پیدا کرده است. بنابراین باید برنامه خرید همراه با بازه اعتبار گزارش ارزیابی تنظیم شود.\n\nبرای جلوگیری از اصطکاک اجرایی، ارزیابی، جریان پرداخت و ثبت محدودیت فروش بهتر است در قالب یک برنامه واحد هماهنگ شوند.",
    },
    coverImage: "/news2.png",
    tags: ["valuation", "real-estate", "tapu"],
    authorName: {
      tr: "Editör Ekibi",
      en: "Editorial Team",
      ru: "Редакция",
      ar: "فريق التحرير",
      fa: "تیم تحریریه",
    },
    publishedAt: "2026-04-10T00:00:00.000Z",
    isFeatured: true,
  },
  {
    slug: "family-file-sequencing",
    category: {
      tr: "Başarı Hikayeleri",
      en: "Case Highlights",
      ru: "Кейсы",
      ar: "حالات عملية",
      fa: "نمونه پرونده ها",
    },
    title: {
      tr: "Aile Dosyalarında Eşzamanlı Başvuru Planı",
      en: "Concurrent Filing Strategy for Family Cases",
      ru: "Параллельная стратегия подачи для семейных дел",
      ar: "استراتيجية التقديم المتزامن لملفات العائلة",
      fa: "راهبرد ثبت همزمان برای پرونده های خانوادگی",
    },
    summary: {
      tr: "Eş ve çocukların dosyaya doğru sırayla eklenmesi, resmi işlem zincirini hızlandırır ve ek belge ihtiyacını azaltır.",
      en: "Adding spouses and children in the correct sequence can reduce documentary friction and accelerate the official review chain.",
      ru: "Правильная последовательность включения супругов и детей может сократить бюрократические трения и ускорить рассмотрение.",
      ar: "إدراج الزوج والأطفال بالتسلسل الصحيح يمكن أن يقلل الاحتكاك المستندي ويُسرّع سلسلة المراجعة الرسمية.",
      fa: "افزودن همسر و فرزندان با ترتیب درست می تواند اصطکاک مدرکی را کم و زنجیره بررسی رسمی را سریع تر کند.",
    },
    content: {
      tr: "Aile üyelerinin aynı ana dosya içinde yer alması, ilk bakışta basit görünse de velayet, yaş ve medeni durum gibi değişkenler nedeniyle detaylı planlama gerektirir.\n\nÖzellikle önceki evlilikten olan çocuklar söz konusu olduğunda, izin belgeleri ve resmi tercüme akışı başvuru takviminin kritik parçası olur.\n\nBaşarılı dosyalarda temel yaklaşım, yatırım aşaması tamamlanmadan önce aile evrak takvimini netleştirmek ve başvuru gününde eksiksiz bir belge seti sunmaktır.",
      en: "Although including family members in the same principal file appears straightforward, it requires careful planning around custody, age thresholds, and marital status.\n\nWhere children from previous marriages are involved, consent documentation and certified translation flow become critical parts of the filing calendar.\n\nThe strongest cases finalize the family document strategy before the investment stage is complete, ensuring a complete filing package on the submission date.",
      ru: "Включение членов семьи в одно основное досье кажется простым, однако требует детального планирования с учётом опеки, возраста и семейного статуса.\n\nЕсли речь идёт о детях от предыдущих браков, согласия и заверенные переводы становятся ключевой частью календаря подачи.\n\nНаиболее устойчивые дела формируют семейный пакет документов ещё до завершения инвестиционного этапа, чтобы к дате подачи всё было готово.",
      ar: "رغم أن إدراج أفراد العائلة في ملف رئيسي واحد يبدو بسيطاً، إلا أنه يحتاج إلى تخطيط دقيق يرتبط بالحضانة والعمر والحالة المدنية.\n\nوعندما يكون هناك أطفال من زواج سابق، تصبح موافقات الطرف الآخر وترتيبات الترجمة الرسمية جزءاً حاسماً من تقويم التقديم.\n\nالملفات الأقوى تُنهي استراتيجية وثائق العائلة قبل اكتمال مرحلة الاستثمار حتى يُقدَّم الملف كاملاً يوم الطلب.",
      fa: "هرچند قرار دادن اعضای خانواده در یک پرونده اصلی در ظاهر ساده است، اما به دلیل موضوعاتی مانند حضانت، سن و وضعیت تاهل نیازمند برنامه ریزی دقیق است.\n\nدر پرونده هایی که فرزندان حاصل از ازدواج قبلی حضور دارند، رضایت نامه ها و روند ترجمه رسمی بخش مهمی از تقویم ثبت می شود.\n\nپرونده های موفق معمولاً پیش از اتمام مرحله سرمایه گذاری، راهبرد مدارک خانوادگی را نهایی می کنند تا در روز ثبت، مجموعه مدارک کامل باشد.",
    },
    coverImage: "/news3.png",
    tags: ["family", "children", "documents"],
    authorName: {
      tr: "CitizenshipWeb Danışmanları",
      en: "CitizenshipWeb Advisors",
      ru: "Консультанты CitizenshipWeb",
      ar: "مستشارو CitizenshipWeb",
      fa: "مشاوران CitizenshipWeb",
    },
    publishedAt: "2026-04-08T00:00:00.000Z",
  },
  {
    slug: "fund-route-residence-overview",
    category: {
      tr: "Güncel Yatırım Fırsatları",
      en: "Investment Opportunities",
      ru: "Инвестиционные возможности",
      ar: "فرص استثمارية",
      fa: "فرصت های سرمایه گذاری",
    },
    title: {
      tr: "Fon Yatırımı Rotasında Yeni Denge",
      en: "A New Balance in the Fund Investment Route",
      ru: "Новый баланс в маршруте фондовых инвестиций",
      ar: "توازن جديد في مسار الاستثمار عبر الصناديق",
      fa: "تعادل جدید در مسیر سرمایه گذاری صندوقی",
    },
    summary: {
      tr: "Fon seçimi ile başvuru takvimi arasındaki doğru denge, likidite ihtiyacı olan yatırımcılar için kritik hale geliyor.",
      en: "The right balance between fund selection and filing timing is becoming more important for investors who prioritize liquidity planning.",
      ru: "Правильный баланс между выбором фонда и сроками подачи становится особенно важным для инвесторов, ориентированных на ликвидность.",
      ar: "أصبح التوازن الصحيح بين اختيار الصندوق وتوقيت التقديم أكثر أهمية للمستثمرين الذين يركزون على السيولة.",
      fa: "ایجاد تعادل درست بین انتخاب صندوق و زمان بندی ثبت برای سرمایه گذارانی که به نقدشوندگی اهمیت می دهند مهم تر شده است.",
    },
    content: {
      tr: "Fon yatırımı seçeneği, gayrimenkule alternatif arayan yatırımcılar için operasyonel açıdan daha yalın bir model sunabilir.\n\nAncak fonun yapısı, saklama koşulları ve resmi uygunluk teyidi birlikte değerlendirilmediğinde süreç beklentinin üzerinde uzayabilir.\n\nBu nedenle yatırım kararı alınmadan önce ürün seçimi ile başvuru takvimi aynı masada planlanmalıdır.",
      en: "The fund route can offer a cleaner operational model for investors who prefer an alternative to direct real estate ownership.\n\nHowever, when the structure of the fund, custody conditions, and formal eligibility confirmation are not reviewed together, the process can take longer than expected.\n\nFor that reason, fund selection and application timing should be designed together before the investment decision is finalized.",
      ru: "Фондовый маршрут может быть более удобной операционной моделью для инвесторов, ищущих альтернативу прямому владению недвижимостью.\n\nНо если структура фонда, условия хранения и формальное подтверждение соответствия не анализируются совместно, процесс может затянуться дольше ожидаемого.\n\nПоэтому выбор инструмента и график подачи стоит планировать одновременно ещё до окончательного инвестиционного решения.",
      ar: "قد يوفّر خيار الاستثمار عبر الصناديق نموذجاً أكثر سلاسة للمستثمرين الذين يبحثون عن بديل للملكية العقارية المباشرة.\n\nلكن إذا لم تُقيَّم بنية الصندوق وشروط الحفظ وآلية إثبات الأهلية الرسمية بشكل متكامل، فقد يطول المسار أكثر من المتوقع.\n\nلذلك ينبغي التخطيط لاختيار الأداة وتوقيت التقديم معاً قبل تثبيت قرار الاستثمار.",
      fa: "مسیر سرمایه گذاری صندوقی می تواند برای سرمایه گذارانی که به دنبال جایگزینی برای مالکیت مستقیم ملک هستند، مدل عملیاتی ساده تری فراهم کند.\n\nاما اگر ساختار صندوق، شرایط نگهداری و تایید رسمی صلاحیت به صورت یکجا بررسی نشود، فرآیند ممکن است طولانی تر از انتظار شود.\n\nبه همین دلیل پیش از نهایی شدن تصمیم سرمایه گذاری، انتخاب ابزار و زمان بندی درخواست باید همزمان طراحی شود.",
    },
    coverImage: "/news1.png",
    tags: ["fund", "investment", "liquidity"],
    authorName: {
      tr: "Araştırma Masası",
      en: "Research Desk",
      ru: "Аналитическая группа",
      ar: "فريق الأبحاث",
      fa: "میز پژوهش",
    },
    publishedAt: "2026-04-01T00:00:00.000Z",
  },
  {
    slug: "dual-citizenship-positioning",
    category: {
      tr: "Vize & Oturum",
      en: "Visa & Residence",
      ru: "Визы и ВНЖ",
      ar: "التأشيرات والإقامة",
      fa: "ویزا و اقامت",
    },
    title: {
      tr: "Çifte Vatandaşlıkta Uyumlu Konumlama",
      en: "Positioning a Dual Citizenship Strategy",
      ru: "Стратегия позиционирования двойного гражданства",
      ar: "صياغة استراتيجية متوازنة للجنسية المزدوجة",
      fa: "چیدمان راهبردی تابعیت مضاعف",
    },
    summary: {
      tr: "Yeni pasaportun mevcut oturum ve seyahat planlarıyla nasıl uyumlanacağı, başvuru sonrası aşamanın en kritik kararlarından biridir.",
      en: "One of the most important post-approval decisions is how the new passport will align with your existing residence and travel structure.",
      ru: "Одно из важнейших решений после одобрения — как новый паспорт будет интегрирован в существующую систему проживания и поездок.",
      ar: "من أهم القرارات بعد الموافقة تحديد كيفية انسجام الجواز الجديد مع هيكل الإقامة والسفر القائم لديك.",
      fa: "یکی از مهم ترین تصمیم های پس از تایید، نحوه هماهنگ کردن پاسپورت جدید با ساختار فعلی اقامت و سفر شماست.",
    },
    content: {
      tr: "Vatandaşlık dosyası onaylandıktan sonra en kritik aşamalardan biri, yeni pasaportun mevcut hayat ve yatırım kurgusuna nasıl entegre edileceğidir.\n\nVergi yerleşikliği, banka uyumu, oturum kartları ve aile bireylerinin sonraki başvuruları birlikte ele alınmalıdır.\n\nDoğru konumlama, yalnızca pasaportu almakla kalmayıp onu sürdürülebilir bir mobilite aracına dönüştürmek anlamına gelir.",
      en: "After a citizenship file is approved, one of the key strategic steps is deciding how the new passport fits into your wider life and investment structure.\n\nTax residence, banking compliance, residence cards, and the next-stage applications of family members should be reviewed together.\n\nStrong positioning means not only obtaining the passport, but turning it into a sustainable mobility tool.",
      ru: "После одобрения гражданства одним из ключевых стратегических этапов становится интеграция нового паспорта в существующую жизненную и инвестиционную структуру.\n\nНалоговое резидентство, банковский комплаенс, карты ВНЖ и последующие действия членов семьи должны анализироваться совместно.\n\nПравильное позиционирование означает не просто получить паспорт, а превратить его в устойчивый инструмент мобильности.",
      ar: "بعد الموافقة على ملف الجنسية، تصبح من الخطوات الاستراتيجية الأساسية كيفية دمج الجواز الجديد ضمن الحياة الحالية والهيكل الاستثماري القائم.\n\nيجب النظر معاً في الإقامة الضريبية والامتثال البنكي وبطاقات الإقامة والخطوات اللاحقة لأفراد الأسرة.\n\nالتموضع الصحيح لا يعني فقط الحصول على الجواز، بل تحويله إلى أداة تنقل مستدامة.",
      fa: "پس از تایید پرونده شهروندی، یکی از مراحل راهبردی اصلی این است که پاسپورت جدید چگونه در ساختار فعلی زندگی و سرمایه گذاری شما جای بگیرد.\n\nاقامت مالیاتی، انطباق بانکی، کارت های اقامت و اقدامات بعدی اعضای خانواده باید به صورت یکجا بررسی شوند.\n\nچیدمان درست یعنی پاسپورت فقط دریافت نشود، بلکه به یک ابزار پایدار برای جابه جایی تبدیل شود.",
    },
    coverImage: "/hero.png",
    tags: ["passport", "mobility", "compliance"],
    authorName: {
      tr: "Uzman İçerik Ekibi",
      en: "Expert Content Team",
      ru: "Экспертная редакция",
      ar: "فريق المحتوى المتخصص",
      fa: "تیم محتوای تخصصی",
    },
    publishedAt: "2026-03-25T00:00:00.000Z",
  },
];

const KNOWLEDGE_FALLBACK: PublicEntrySeed[] = [
  {
    slug: "property-acquisition-compliance-guide",
    category: {
      tr: "Mülkiyet",
      en: "Property",
      ru: "Собственность",
      ar: "الملكية",
      fa: "مالکیت",
    },
    title: {
      tr: "Yabancılar İçin Mülk Ediniminde Uyum Rehberi",
      en: "Compliance Guide to Property Acquisition for Foreign Investors",
      ru: "Руководство по покупке недвижимости для иностранных инвесторов",
      ar: "دليل الامتثال لتملك العقارات للمستثمرين الأجانب",
      fa: "راهنمای انطباق خرید ملک برای سرمایه گذاران خارجی",
    },
    summary: {
      tr: "Tapu, ekspertiz ve ödeme akışını aynı çerçevede ele alan bir plan, mülk alımını vatandaşlık dosyasıyla daha güvenli biçimde eşleştirir.",
      en: "A plan that aligns title deed, valuation, and payment flow makes property acquisition safer to integrate with a citizenship file.",
      ru: "План, совмещающий ТАПУ, оценку и платёжный поток, позволяет безопаснее интегрировать покупку недвижимости в дело о гражданстве.",
      ar: "إن مواءمة الطابو والتقييم وخطوات السداد ضمن خطة واحدة يجعل دمج شراء العقار في ملف الجنسية أكثر أماناً.",
      fa: "برنامه ای که سند، ارزیابی و جریان پرداخت را همزمان تنظیم کند، ادغام خرید ملک با پرونده شهروندی را امن تر می کند.",
    },
    content: {
      tr: "Mülk edinimi, yatırım yoluyla vatandaşlık dosyalarında en sık kullanılan başvuru modellerinden biridir. Ancak işlemin başarısı yalnızca taşınmaz seçimine değil, resmi uyum sırasına da bağlıdır.\n\nTapu incelemesi, ekspertiz takvimi, döviz alım belgesi ve satılamaz şerhi aynı plan içinde ele alınmalıdır. Aksi halde uygunluk belgesi aşamasında gecikmeler görülebilir.\n\nBu nedenle satın alma kararı öncesinde hem hukuki hem operasyonel kontrol listesi oluşturmak en güvenli yaklaşımdır.",
      en: "Property acquisition remains one of the most frequently used routes in citizenship by investment files, but success depends not only on asset selection, but also on the order of compliance steps.\n\nTitle deed review, appraisal timing, foreign exchange conversion evidence, and the no-sale annotation should be handled as one coordinated workstream. Otherwise, delays can appear at the eligibility certificate stage.\n\nFor that reason, the strongest approach is to build a legal and operational checklist before the acquisition is finalized.",
      ru: "Покупка недвижимости остаётся одним из самых популярных маршрутов в делах о гражданстве через инвестиции, однако успех зависит не только от выбора актива, но и от последовательности комплаенс-шагов.\n\nПроверка ТАПУ, сроки оценки, подтверждение обмена валюты и отметка о запрете продажи должны рассматриваться как единый процесс. Иначе на этапе сертификата соответствия возможны задержки.\n\nПоэтому наиболее надёжный подход — подготовить юридический и операционный чек-лист до окончательного закрытия сделки.",
      ar: "يبقى شراء العقار من أكثر المسارات استخداماً في ملفات الجنسية عبر الاستثمار، لكن نجاحه لا يعتمد على اختيار الأصل فقط بل أيضاً على ترتيب خطوات الامتثال.\n\nيجب إدارة فحص الطابو وتوقيت التقييم وإثبات تحويل العملة وقيد عدم البيع كمسار واحد متكامل، وإلا قد تظهر تأخيرات عند مرحلة شهادة الأهلية.\n\nلذلك فإن إعداد قائمة تحقق قانونية وتشغيلية قبل إتمام الشراء هو النهج الأكثر أماناً.",
      fa: "خرید ملک همچنان یکی از رایج ترین مسیرها در پرونده های شهروندی از طریق سرمایه گذاری است، اما موفقیت آن فقط به انتخاب دارایی وابسته نیست و به ترتیب مراحل انطباق نیز بستگی دارد.\n\nبررسی سند، زمان بندی ارزیابی، مدارک تبدیل ارز و محدودیت عدم فروش باید در قالب یک مسیر هماهنگ مدیریت شوند؛ در غیر این صورت ممکن است در مرحله گواهی صلاحیت تاخیر ایجاد شود.\n\nبه همین دلیل، مطمئن ترین رویکرد این است که پیش از نهایی شدن خرید، یک چک لیست حقوقی و عملیاتی تهیه شود.",
    },
    coverImage: "/news1.png",
    tags: ["property", "valuation", "compliance"],
    authorName: {
      tr: "Bilgi Ekibi",
      en: "Knowledge Team",
      ru: "Команда библиотеки знаний",
      ar: "فريق المعرفة",
      fa: "تیم دانش",
    },
    publishedAt: "2026-04-12T00:00:00.000Z",
    isFeatured: true,
  },
  {
    slug: "family-application-document-map",
    category: {
      tr: "Aile",
      en: "Family",
      ru: "Семья",
      ar: "الأسرة",
      fa: "خانواده",
    },
    title: {
      tr: "Aile Başvurularında Belge Haritası",
      en: "Document Mapping for Family Applications",
      ru: "Карта документов для семейных заявок",
      ar: "خريطة الوثائق في طلبات العائلة",
      fa: "نقشه مدارک برای پرونده های خانوادگی",
    },
    summary: {
      tr: "Aile üyeleri için hangi belgenin hangi aşamada hazır olması gerektiğini önceden planlamak, dosya akışını belirgin şekilde hızlandırır.",
      en: "Planning which document should be ready for each family member before filing can significantly accelerate execution.",
      ru: "Предварительное планирование того, какие документы и для кого должны быть готовы, заметно ускоряет процесс.",
      ar: "التخطيط المسبق للوثائق المطلوبة لكل فرد من أفراد العائلة يسرّع سير الملف بشكل ملموس.",
      fa: "برنامه ریزی پیشینی برای این که هر عضو خانواده در هر مرحله چه مدرکی لازم دارد، روند پرونده را به شکل محسوسی سریع تر می کند.",
    },
    content: {
      tr: "Aile başvurularında tek bir eksik belge, ana yatırım dosyasının ilerleyişini de etkileyebilir. Bu yüzden eş ve çocuklara ilişkin resmi evrakların ayrı bir çalışma seti olarak ele alınması gerekir.\n\nDoğum kayıtları, evlilik durumu, velayet belgeleri ve noter onayları için farklı ülke prosedürleri devreye girebilir.\n\nBelge haritası yaklaşımı, hangi evrakın ne zaman temin edileceğini netleştirerek son dakika darboğazlarını azaltır.",
      en: "In family applications, even a single missing document can affect the pace of the principal investment file. For that reason, spouse and child documentation should be treated as a dedicated workstream.\n\nBirth registrations, marital status proof, custody papers, and notarial approvals may each trigger different cross-border procedures.\n\nA document map helps reduce last-minute bottlenecks by making clear which record is required at each stage.",
      ru: "В семейных заявках даже один отсутствующий документ может повлиять на темп основного инвестиционного досье. Поэтому документы супругов и детей нужно вести как отдельный поток работ.\n\nСвидетельства о рождении, подтверждение брака, документы об опеке и нотариальные заверения могут требовать разных международных процедур.\n\nКарта документов снижает риск узких мест в последний момент, так как заранее определяет, что именно нужно на каждом этапе.",
      ar: "في طلبات العائلة قد يؤثر غياب وثيقة واحدة فقط على سرعة الملف الاستثماري الرئيسي، لذلك يجب التعامل مع وثائق الزوج والأطفال كمسار مستقل.\n\nشهادات الميلاد وإثبات الحالة الزوجية ووثائق الحضانة والتصديقات الرسمية قد تخضع لإجراءات مختلفة من دولة إلى أخرى.\n\nتساعد خريطة الوثائق على تقليل الاختناقات المتأخرة من خلال تحديد الوثيقة المطلوبة في كل مرحلة.",
      fa: "در پرونده های خانوادگی حتی نبود یک مدرک می تواند سرعت پرونده اصلی سرمایه گذاری را تحت تاثیر قرار دهد؛ به همین دلیل مدارک همسر و فرزندان باید به عنوان یک مسیر مستقل مدیریت شود.\n\nثبت تولد، اثبات وضعیت تاهل، مدارک حضانت و تاییدات رسمی ممکن است هر کدام نیازمند روندهای متفاوت بین المللی باشند.\n\nنقشه مدارک با مشخص کردن نیاز هر مرحله، گلوگاه های دقیقه آخر را کاهش می دهد.",
    },
    coverImage: "/news3.png",
    tags: ["family", "documents", "custody"],
    authorName: {
      tr: "Dosya Planlama Ekibi",
      en: "File Planning Team",
      ru: "Команда планирования досье",
      ar: "فريق تخطيط الملفات",
      fa: "تیم برنامه ریزی پرونده",
    },
    publishedAt: "2026-04-09T00:00:00.000Z",
  },
  {
    slug: "fund-investment-route-guide",
    category: {
      tr: "Yatırım",
      en: "Investment",
      ru: "Инвестиции",
      ar: "الاستثمار",
      fa: "سرمایه گذاری",
    },
    title: {
      tr: "Fon Yatırımı Yolunda Karar Rehberi",
      en: "Decision Guide for the Fund Investment Route",
      ru: "Руководство по выбору фондового маршрута",
      ar: "دليل اتخاذ القرار في مسار الاستثمار عبر الصناديق",
      fa: "راهنمای تصمیم گیری برای مسیر سرمایه گذاری صندوقی",
    },
    summary: {
      tr: "Likidite beklentisi, fon türü ve resmi uygunluk akışı birlikte değerlendirilmeden verilen kararlar süreci yavaşlatabilir.",
      en: "Decisions made without aligning liquidity expectations, fund type, and eligibility workflow can slow execution materially.",
      ru: "Решения без увязки ожиданий по ликвидности, типа фонда и процедуры подтверждения могут существенно замедлить процесс.",
      ar: "قد تؤدي القرارات التي لا تربط بين توقعات السيولة ونوع الصندوق وآلية الأهلية الرسمية إلى إبطاء المسار بشكل واضح.",
      fa: "تصمیم هایی که بدون همراستاسازی انتظار نقدشوندگی، نوع صندوق و روند رسمی صلاحیت گرفته می شوند، می توانند اجرای پرونده را کند کنند.",
    },
    content: {
      tr: "Fon yatırımı seçeneği, işlem pratiğinde daha kurumsal bir yapı sunabilir; ancak her fon aynı hızda ve aynı resmi uyum kolaylığıyla ilerlemez.\n\nBu nedenle ürün seçimi yapılırken sadece getiri beklentisi değil, uygunluk belgesi akışı ve saklama yapısı da dikkate alınmalıdır.\n\nDoğru karar, yatırım aracını vatandaşlık zamanlamasıyla birlikte değerlendiren karar olur.",
      en: "The fund route can offer a more institutional operating model, yet not every product moves with the same speed or compliance clarity.\n\nThat is why investors should review not only return expectations, but also the eligibility certificate flow and custody structure before selecting a product.\n\nThe strongest decision is the one that evaluates the investment instrument together with the citizenship timeline.",
      ru: "Фондовый вариант может давать более институциональную модель работы, однако не каждый продукт движется с одинаковой скоростью и прозрачностью комплаенса.\n\nПоэтому при выборе важно смотреть не только на доходность, но и на поток получения сертификата соответствия и структуру хранения.\n\nНаиболее сильное решение учитывает инструмент инвестирования вместе со сроками получения гражданства.",
      ar: "قد يوفّر مسار الصناديق نموذج تشغيل أكثر مؤسسية، لكن ليست كل المنتجات تتحرك بنفس السرعة أو بنفس وضوح الامتثال.\n\nلذلك يجب ألا يقتصر التقييم على العائد المتوقع فقط، بل يشمل أيضاً مسار شهادة الأهلية وهيكل الحفظ.\n\nالقرار الأقوى هو الذي يقيّم أداة الاستثمار بالتوازي مع الجدول الزمني للجنسية.",
      fa: "مسیر صندوقی می تواند مدل اجرایی نهادی تری ارائه کند، اما همه محصولات با سرعت و شفافیت انطباق یکسان پیش نمی روند.\n\nبه همین دلیل هنگام انتخاب نباید فقط بازده مورد انتظار را سنجید؛ باید روند گواهی صلاحیت و ساختار نگهداری نیز بررسی شود.\n\nبهترین تصمیم، تصمیمی است که ابزار سرمایه گذاری را همراه با زمان بندی شهروندی ارزیابی کند.",
    },
    coverImage: "/news2.png",
    tags: ["fund", "decision", "eligibility"],
    authorName: {
      tr: "Yatırım Analiz Ekibi",
      en: "Investment Analysis Team",
      ru: "Команда инвестиционного анализа",
      ar: "فريق التحليل الاستثماري",
      fa: "تیم تحلیل سرمایه گذاری",
    },
    publishedAt: "2026-04-04T00:00:00.000Z",
  },
  {
    slug: "passport-mobility-planning",
    category: {
      tr: "Seyahat",
      en: "Travel",
      ru: "Путешествия",
      ar: "السفر",
      fa: "سفر",
    },
    title: {
      tr: "Pasaport Sonrası Mobilite Planı",
      en: "Mobility Planning After Passport Approval",
      ru: "План мобильности после получения паспорта",
      ar: "خطة التنقل بعد إصدار الجواز",
      fa: "برنامه جابه جایی پس از صدور پاسپورت",
    },
    summary: {
      tr: "Pasaport alındıktan sonra vergi, banka, aile ve oturum başlıklarını birlikte kurgulamak uzun vadeli faydayı artırır.",
      en: "Coordinating tax, banking, family, and residence topics after passport issuance can increase the long-term value of the file.",
      ru: "Согласование налоговых, банковских, семейных и иммиграционных вопросов после выдачи паспорта повышает долгосрочную ценность проекта.",
      ar: "إن تنسيق الجوانب الضريبية والمصرفية والعائلية والإقامية بعد إصدار الجواز يرفع القيمة طويلة الأجل للملف.",
      fa: "هماهنگ کردن موضوعات مالیاتی، بانکی، خانوادگی و اقامتی پس از صدور پاسپورت، ارزش بلندمدت پرونده را بیشتر می کند.",
    },
    content: {
      tr: "Bir pasaportun değeri çoğu zaman onay gününde değil, sonraki planlamada ortaya çıkar. Yeni vatandaşlığın vergi, banka ve seyahat yapısına etkisi birlikte düşünülmelidir.\n\nÖzellikle aile bireylerinin takip eden vize ve oturum stratejileri, ana yatırım dosyasıyla kopuk ele alınmamalıdır.\n\nBu yüzden pasaport sonrası plan, dosyanın doğal uzantısı olarak görülmelidir.",
      en: "The real value of a passport often appears not on the approval date, but in the planning that follows. Its impact on tax positioning, banking setup, and travel strategy should be assessed together.\n\nIn particular, the next-stage visa and residence strategies of family members should not be separated from the principal investment file.\n\nFor that reason, post-passport planning should be treated as a natural continuation of the file.",
      ru: "Реальная ценность паспорта часто раскрывается не в день одобрения, а в последующем планировании. Его влияние на налоговую модель, банковскую структуру и стратегию поездок нужно оценивать совместно.\n\nОсобенно важно не отрывать последующие визовые и иммиграционные стратегии членов семьи от основного инвестиционного досье.\n\nПоэтому постпаспортное планирование следует рассматривать как естественное продолжение дела.",
      ar: "القيمة الحقيقية للجواز لا تظهر غالباً يوم الموافقة بل في التخطيط الذي يليها. ويجب تقييم أثره على الهيكل الضريبي والترتيبات البنكية واستراتيجية السفر بصورة متكاملة.\n\nكما يجب ألا تُفصل الخطط اللاحقة للتأشيرات أو الإقامة الخاصة بأفراد العائلة عن الملف الاستثماري الرئيسي.\n\nلذلك ينبغي النظر إلى التخطيط بعد الجواز باعتباره امتداداً طبيعياً للملف.",
      fa: "ارزش واقعی پاسپورت معمولاً در روز تایید آشکار نمی شود، بلکه در برنامه ریزی پس از آن شکل می گیرد. تاثیر آن بر جایگاه مالیاتی، ساختار بانکی و راهبرد سفر باید به صورت یکجا سنجیده شود.\n\nبه ویژه راهبردهای بعدی ویزا و اقامت اعضای خانواده نباید از پرونده اصلی سرمایه گذاری جدا دیده شود.\n\nبه همین دلیل، برنامه پس از پاسپورت باید ادامه طبیعی همان پرونده تلقی شود.",
    },
    coverImage: "/hero.png",
    tags: ["passport", "travel", "banking"],
    authorName: {
      tr: "Mobilite Editörleri",
      en: "Mobility Editors",
      ru: "Редакторы по мобильности",
      ar: "محررو التنقل",
      fa: "ویراستاران جابه جایی",
    },
    publishedAt: "2026-03-28T00:00:00.000Z",
  },
];

function sortByFeatured<T extends { isFeatured: boolean; publishedAt: string | null; updatedAt: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    if (a.isFeatured !== b.isFeatured) return a.isFeatured ? -1 : 1;

    const aDate = a.publishedAt ?? a.updatedAt;
    const bDate = b.publishedAt ?? b.updatedAt;
    return new Date(bDate).getTime() - new Date(aDate).getTime();
  });
}

function mapSeed(seed: PublicEntrySeed, locale: SeoLocale): PublicEntry {
  return {
    locale,
    slug: seed.slug,
    title: seed.title[locale],
    summary: seed.summary[locale],
    content: seed.content[locale],
    category: seed.category[locale],
    coverImage: seed.coverImage,
    tags: seed.tags,
    authorName: seed.authorName[locale],
    isFeatured: seed.isFeatured ?? false,
    publishedAt: seed.publishedAt,
    updatedAt: seed.publishedAt,
  };
}

function mapArticle(article: Article): PublicEntry {
  const locale = getSafeLocale(article.locale);
  return {
    locale,
    slug: article.slug,
    title: article.title,
    summary: article.summary,
    content: article.content,
    category: article.category,
    coverImage: article.coverImage || "/news1.png",
    tags: article.tags,
    authorName: article.authorName || "CitizenshipWeb",
    isFeatured: article.isFeatured,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
  };
}

function mapBulletin(bulletin: Bulletin): PublicEntry {
  const locale = getSafeLocale(bulletin.locale);
  return {
    locale,
    slug: bulletin.slug,
    title: bulletin.title,
    summary: bulletin.summary,
    content: bulletin.content,
    category: bulletin.category,
    coverImage: bulletin.coverImage || "/news2.png",
    tags: bulletin.tags,
    authorName: bulletin.authorName || "CitizenshipWeb",
    isFeatured: bulletin.isFeatured,
    publishedAt: bulletin.publishedAt,
    updatedAt: bulletin.updatedAt,
  };
}

function getFallbackEntries(seeds: PublicEntrySeed[], locale: SeoLocale): PublicEntry[] {
  return seeds.map((seed) => mapSeed(seed, locale));
}

export function getContactPageCopy(locale: string): ContactPageCopy {
  return CONTACT_COPY[getSafeLocale(locale)];
}

export function getCitizenshipPageCopy(locale: string): CitizenshipPageCopy {
  return CITIZENSHIP_COPY[getSafeLocale(locale)];
}

export function getNewsPageCopy(locale: string): NewsPageCopy {
  return NEWS_COPY[getSafeLocale(locale)];
}

export function getKnowledgePageCopy(locale: string): KnowledgePageCopy {
  return KNOWLEDGE_COPY[getSafeLocale(locale)];
}

export function getPublicNewsEntries(locale: string): PublicEntry[] {
  const safeLocale = getSafeLocale(locale);
  const published = getBulletins({ locale: safeLocale, status: "published" }).map(mapBulletin);
  if (published.length > 0) {
    return sortByFeatured(published);
  }
  return sortByFeatured(getFallbackEntries(NEWS_FALLBACK, safeLocale));
}

export function getPublicNewsEntry(locale: string, slug: string): PublicEntry | null {
  return getPublicNewsEntries(locale).find((entry) => entry.slug === slug) ?? null;
}

export function getPublicKnowledgeEntries(locale: string): PublicEntry[] {
  const safeLocale = getSafeLocale(locale);
  const published = getArticles({ locale: safeLocale, status: "published" }).map(mapArticle);
  if (published.length > 0) {
    return sortByFeatured(published);
  }
  return sortByFeatured(getFallbackEntries(KNOWLEDGE_FALLBACK, safeLocale));
}

export function getPublicKnowledgeEntry(locale: string, slug: string): PublicEntry | null {
  return getPublicKnowledgeEntries(locale).find((entry) => entry.slug === slug) ?? null;
}

export function getPublicNewsSitemapEntries() {
  return SEO_LOCALES.flatMap((locale) =>
    getPublicNewsEntries(locale).map((entry) => ({
      locale,
      slug: entry.slug,
      updatedAt: entry.updatedAt || DEFAULT_UPDATED_AT,
    }))
  );
}

export function getPublicKnowledgeSitemapEntries() {
  return SEO_LOCALES.flatMap((locale) =>
    getPublicKnowledgeEntries(locale).map((entry) => ({
      locale,
      slug: entry.slug,
      updatedAt: entry.updatedAt || DEFAULT_UPDATED_AT,
    }))
  );
}
