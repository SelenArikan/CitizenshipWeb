import type { Metadata } from "next";

import { getDictionary } from "@/lib/dictionary";
import { getSafeLocale } from "@/lib/seo";

const SITE_URL = "https://citizenshipweb.com";
const PAGE_PATH = "/legal/yesil-pasaport";
const SUPPORTED_LOCALES = ["tr", "en", "ru", "ar", "fa"] as const;

type LocaleKey = (typeof SUPPORTED_LOCALES)[number];

export type QuickFact = {
  value: string;
  label: string;
  note: string;
};

export type QuotaRow = {
  range: string;
  count: string;
};

export type GreenPassportPageCopy = {
  metadata: {
    breadcrumbLabel: string;
    title: string;
    description: string;
  };
  hero: {
    tag: string;
    title: string;
    summary: string;
    primaryCta: string;
    secondaryCta: string;
  };
  quickFacts: QuickFact[];
  intro: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  program: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  eligibility: {
    eyebrow: string;
    title: string;
    applicantsTitle: string;
    applicants: string[];
    conditionsTitle: string;
    conditions: string[];
  };
  quota: {
    eyebrow: string;
    title: string;
    intro: string;
    rangeHeader: string;
    countHeader: string;
    rows: QuotaRow[];
    noteTitle: string;
    noteText: string;
    excludedTitle: string;
    excluded: string[];
  };
  authorities: {
    eyebrow: string;
    title: string;
    eligibleTitle: string;
    eligible: string[];
    ineligibleTitle: string;
    ineligible: string[];
    firmsTitle: string;
    firms: string[];
    familyTitle: string;
    familyNote: string;
  };
  documents: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  cta: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

export type GreenPassportPageData = {
  lang: string;
  dir: "ltr" | "rtl";
  homeLabel: string;
  copy: GreenPassportPageCopy;
};

type GreenPassportDictionaryLike = {
  lang?: string;
  dir?: string;
  nav?: {
    home?: string;
  };
};

const GREEN_PASSPORT_COPY: Record<LocaleKey, GreenPassportPageCopy> = {
  tr: {
    metadata: {
      breadcrumbLabel: "Yeşil Pasaport",
      title: "İhracatçı Şirketler İçin Yeşil Pasaport Hakkı",
      description:
        "Yeşil pasaportun ne olduğu, ihracatçı şirketlere tanınan hak, başvuru koşulları, kota sistemi, kapsam dışı ihracatlar ve gerekli belgeler hakkında kapsamlı rehber.",
    },
    hero: {
      tag: "Hususi Damgalı Pasaport Rehberi",
      title: "İhracatçı Şirketler İçin Yeşil Pasaport Hakkı",
      summary:
        "Belirli bir ihracat hacmine ulaşan şirket sahipleri, ortakları ve yetkilendirilmiş çalışanları için tanınan yeşil pasaport hakkının kapsamını, koşullarını ve başvuru mantığını tek sayfada topladık.",
      primaryCta: "Başvuru Şartlarını İnceleyin",
      secondaryCta: "Bizimle İletişime Geçin",
    },
    quickFacts: [
      {
        value: "500.000 USD",
        label: "Asgari ortalama ihracat",
        note: "Son üç takvim yılının ortalaması",
      },
      {
        value: "1-5 Kişi",
        label: "Pasaport kontenjanı",
        note: "İhracat hacmine göre değişir",
      },
      {
        value: "Şubat",
        label: "Başvuru başlangıcı",
        note: "İhracatı izleyen yıl itibarıyla",
      },
      {
        value: "Schengen",
        label: "Önemli seyahat avantajı",
        note: "Vizesiz veya kolaylaştırılmış giriş imkanı",
      },
    ],
    intro: {
      eyebrow: "Yeşil Pasaport Nedir?",
      title: "Hususi damgalı pasaport ne sağlar?",
      paragraphs: [
        "Yeşil pasaport, resmî adıyla hususi damgalı pasaport, bordo pasaportun sunduğu imkanlara ek olarak birçok ülkeye vizesiz veya kolaylaştırılmış vize ile giriş olanağı sağlayan özel bir pasaport türüdür.",
        "Schengen Bölgesi ülkeleri de dahil olmak üzere pek çok destinasyonda daha rahat seyahat planlaması yapılabilmesi, bu pasaportun en dikkat çekici avantajlarından biridir.",
      ],
    },
    program: {
      eyebrow: "İhracatçılara Tanınan Hak",
      title: "İhracatçı şirketler bu haktan nasıl yararlanır?",
      paragraphs: [
        "Belirli bir ihracat hacmine ulaşan firmalara, sınırlı sayıda şirket sahibi, ortağı veya çalışanı için yeşil pasaport hakkı tanınmaktadır.",
        "Bu uygulamada temel ölçüt, son üç takvim yılında gerçekleştirilen ortalama ihracatın en az 500.000 ABD Doları olmasıdır.",
        "Uygulama, ihracatı teşvik amacıyla Ticaret Bakanlığı ve Türkiye İhracatçılar Meclisi koordinasyonunda yürütülmektedir.",
      ],
    },
    eligibility: {
      eyebrow: "Kimler Başvurabilir?",
      title: "Başvuru kitlesi ve temel koşullar",
      applicantsTitle: "Başvuru kapsamına girebilecek kişiler",
      applicants: [
        "Şirket sahibi",
        "Şirket ortağı",
        "Şirkette çalışan ve bu amaçla yetkilendirilen kişiler",
      ],
      conditionsTitle: "Başvuru koşulları",
      conditions: [
        "Son üç takvim yılında ortalama en az 500.000 ABD Doları ihracat yapılmış olması",
        "Şirketin aktif ve düzenli ihracat faaliyetinde bulunması",
        "Başvurunun Ticaret Bakanlığı onayıyla yürütülmesi ve sürecin genellikle Türkiye İhracatçılar Meclisi üzerinden işlemesi",
        "Verilecek pasaport sayısının ihracat tutarına göre belirlenmesi",
      ],
    },
    quota: {
      eyebrow: "Kontenjan Sistemi",
      title: "İhracat tutarına göre kaç kişiye yeşil pasaport verilir?",
      intro:
        "Kontenjan, son üç yılın ortalama yıllık ihracat tutarına göre belirlenir. Hak kazanılabilecek kişi sayısı aşağıdaki bantlara göre değişir.",
      rangeHeader: "Ortalama yıllık ihracat",
      countHeader: "Verilebilecek pasaport sayısı",
      rows: [
        { range: "500.000 - 10.000.000 USD", count: "1 kişi" },
        { range: "10.000.001 - 25.000.000 USD", count: "2 kişi" },
        { range: "25.000.001 - 50.000.000 USD", count: "3 kişi" },
        { range: "50.000.001 - 100.000.000 USD", count: "4 kişi" },
        { range: "100.000.001 USD ve üzeri", count: "5 kişi" },
      ],
      noteTitle: "Başvuru takvimi",
      noteText:
        "Cari yılda gerçekleşen ihracat verileri, Ticaret Bakanlığı tarafından takip eden yılın Ocak ayında VEDOP ve TÜİK aracılığıyla ihracatçı birlikleriyle paylaşılır. Şartları sağlayan firmalar, ihracatın gerçekleştiği yılı izleyen yılın Şubat ayından itibaren başvuru yapabilir.",
      excludedTitle: "Hesaplamada dikkate alınmayan ihracatlar",
      excluded: [
        "ETGB kapsamındaki ihracatlar",
        "Özel fatura ile gerçekleştirilen ihracatlar",
        "Transit ihracatlar",
        "Serbest bölgelere yapılan ihracatlar",
      ],
    },
    authorities: {
      eyebrow: "Hak Kazananlar ve İstisnalar",
      title: "Kimler yararlanabilir, kimler yararlanamaz?",
      eligibleTitle: "Hak kazanan firma yetkilileri",
      eligible: [
        "E-SGK listesinde kayıtlı çalışanlar ve hissedarlar adına başvuru yapılabilir.",
        "Çalışanlar için başvuru tarihinden geriye dönük son üç aya ait SGK bildirgelerinin sunulması zorunludur.",
        "Hamiline hisse senedi sahipleri bu kapsamda değerlendirilmez.",
        "Şirket sahibi veya ortaklarının tüzel kişi olması halinde, ilgili tüzel kişiliğin sahipleri, ortakları veya çalışanları için de hususi damgalı pasaport imkanı doğabilir.",
      ],
      ineligibleTitle: "Başvuru yapamayacak kişiler",
      ineligible: [
        "Şirkete dışarıdan atanan müdürler veya yönetim kurulu üyeleri, E-SGK listesinde yer almıyor ve şirkette hissedar görünmüyorsa başvuru yapamaz.",
        "Yalnızca huzur hakkı almak tek başına yeterli kabul edilmez.",
        "Hamiline hisse yapıları geçerli başvuru zemini oluşturmaz.",
      ],
      firmsTitle: "Bu haktan yararlanamayacak firmalar",
      firms: [
        "İflas halindeki firmalar",
        "Tasfiye sürecindeki firmalar",
        "Geçici veya kesin konkordato mühleti içindeki firmalar",
        "Tam bölünme gerçekleştirmiş firmalar",
      ],
      familyTitle: "Eş ve çocuklar bakımından önemli not",
      familyNote:
        "İhracatçılara verilen yeşil pasaport hakkı, devlet memurlarındaki gibi otomatik biçimde eş ve çocuklara yayılmaz. Eş ve çocuklar ancak kontenjan bulunması ve şirkette çalışıyor ya da ortak görünüyor olmaları halinde ayrıca değerlendirilebilir.",
    },
    documents: {
      eyebrow: "Gerekli Belgeler",
      title: "Başvuruda istenebilecek temel evraklar",
      items: [
        "Başvuru dilekçesi",
        "Talep formu",
        "Türkiye Ticaret Sicili Gazetesi'nden şirketin ortaklık durumunu gösteren yazı",
        "Şirketi temsil ve ilzama yetkili kişinin imza sirküleri",
        "Türkiye Cumhuriyeti Kimlik Kartı fotokopisi",
      ],
    },
    cta: {
      title: "Şirketinizin yeşil pasaport hakkını birlikte değerlendirelim",
      description:
        "İhracat ortalamasının hesaplanması, uygun kişi seçimi, SGK ve ortaklık yapısı kontrolü ile başvuru dosyasının hazırlanması birlikte planlandığında süreç çok daha öngörülebilir hale gelir.",
      primaryCta: "Dosyanızı Değerlendirelim",
      secondaryCta: "Diğer Hukuki Hizmetler",
    },
  },
  en: {
    metadata: {
      breadcrumbLabel: "Green Passport",
      title: "Green Passport Eligibility for Exporter Companies",
      description:
        "A practical guide to what the green passport is, how exporter companies qualify, the quota system, excluded export types, and the required application documents.",
    },
    hero: {
      tag: "Special-Stamped Passport Guide",
      title: "Green Passport Eligibility for Exporter Companies",
      summary:
        "We have gathered the scope, eligibility rules, quota logic, and document framework of the green passport right granted to certain company owners, partners, and authorized employees with sufficient export volume.",
      primaryCta: "Review the Conditions",
      secondaryCta: "Contact Us",
    },
    quickFacts: [
      {
        value: "USD 500,000",
        label: "Minimum average export volume",
        note: "Average of the last three calendar years",
      },
      {
        value: "1-5 People",
        label: "Passport quota",
        note: "Depends on export volume",
      },
      {
        value: "February",
        label: "Application start period",
        note: "In the year following the exports",
      },
      {
        value: "Schengen",
        label: "Key travel advantage",
        note: "Visa-free or facilitated access",
      },
    ],
    intro: {
      eyebrow: "What Is a Green Passport?",
      title: "What does a special-stamped passport provide?",
      paragraphs: [
        "The green passport, officially called a special-stamped passport, is a privileged passport type that offers visa-free or simplified entry to many countries in addition to the advantages of an ordinary passport.",
        "Its most notable benefit is easier travel planning across many destinations, including Schengen-area countries.",
      ],
    },
    program: {
      eyebrow: "Right Granted to Exporters",
      title: "How do exporter companies benefit from this right?",
      paragraphs: [
        "Companies that reach a certain export volume may obtain a limited number of green passport entitlements for company owners, partners, or authorized employees.",
        "The core benchmark is an average export volume of at least USD 500,000 over the last three calendar years.",
        "The practice is coordinated by the Ministry of Trade and the Turkish Exporters Assembly as part of export incentive policy.",
      ],
    },
    eligibility: {
      eyebrow: "Who May Apply?",
      title: "Applicant profile and baseline conditions",
      applicantsTitle: "Persons who may fall within the application scope",
      applicants: [
        "Company owner",
        "Company partner",
        "Authorized company employees, usually at managerial level",
      ],
      conditionsTitle: "Application conditions",
      conditions: [
        "Average exports of at least USD 500,000 over the last three calendar years",
        "An active and continuing export activity by the company",
        "Completion of the process with approval of the Ministry of Trade, usually through the Turkish Exporters Assembly",
        "The number of passports being determined according to the export volume",
      ],
    },
    quota: {
      eyebrow: "Quota System",
      title: "How many green passports can be issued based on export volume?",
      intro:
        "The quota is determined according to the average annual export value of the last three years. The number of eligible persons changes by band.",
      rangeHeader: "Average annual export value",
      countHeader: "Number of green passports",
      rows: [
        { range: "USD 500,000 - 10,000,000", count: "1 person" },
        { range: "USD 10,000,001 - 25,000,000", count: "2 people" },
        { range: "USD 25,000,001 - 50,000,000", count: "3 people" },
        { range: "USD 50,000,001 - 100,000,000", count: "4 people" },
        { range: "USD 100,000,001 and above", count: "5 people" },
      ],
      noteTitle: "Application calendar",
      noteText:
        "Current-year export data is shared with exporters' associations by the Ministry of Trade in January of the following year through VEDOP and TURKSTAT. Eligible companies may apply from February of the following year onward.",
      excludedTitle: "Exports not counted in the calculation",
      excluded: [
        "Exports under the Electronic Commerce Customs Declaration system",
        "Exports made through special invoices",
        "Transit exports",
        "Exports to free zones",
      ],
    },
    authorities: {
      eyebrow: "Eligible Persons and Exceptions",
      title: "Who may benefit and who may not?",
      eligibleTitle: "Authorized company representatives who may qualify",
      eligible: [
        "Applications may be filed for employees listed in the e-SGK system and for shareholders.",
        "For employees, SGK declarations covering the three months prior to the application date must be submitted.",
        "Bearer-share holders are not included within this scope.",
        "If the company's owners or partners are legal entities, a similar right may extend to the owners, partners, or employees of those legal entities.",
      ],
      ineligibleTitle: "Persons who cannot apply",
      ineligible: [
        "Externally appointed managers or board members cannot apply if they are not listed in the e-SGK records and do not hold shares in the qualifying company.",
        "Receiving only board attendance fees is not enough on its own.",
        "Bearer-share structures do not create a valid basis for this entitlement.",
      ],
      firmsTitle: "Companies that cannot use this right",
      firms: [
        "Companies in bankruptcy",
        "Companies under liquidation",
        "Companies subject to temporary or final concordat protection",
        "Companies that have undergone full demerger",
      ],
      familyTitle: "Important note regarding spouse and children",
      familyNote:
        "Unlike the regime for certain public officials, exporter-based green passport rights do not automatically extend to spouse and children. They may only be considered separately if a quota is available and they also qualify as employees or shareholders.",
    },
    documents: {
      eyebrow: "Required Documents",
      title: "Core documents commonly requested in the application",
      items: [
        "Application petition",
        "Request form",
        "Trade Registry Gazette record showing the company's shareholder structure",
        "Signature circular of the person authorized to represent and bind the company",
        "Copy of the Turkish identity card",
      ],
    },
    cta: {
      title: "Let us assess your company's green passport eligibility together",
      description:
        "When export averages, candidate selection, SGK records, shareholding structure, and file preparation are reviewed together, the process becomes much more predictable.",
      primaryCta: "Let Us Review the File",
      secondaryCta: "Other Legal Services",
    },
  },
  ru: {
    metadata: {
      breadcrumbLabel: "Зелёный паспорт",
      title: "Право на зелёный паспорт для экспортирующих компаний",
      description:
        "Практическое руководство о том, что такое зелёный паспорт, как экспортирующие компании получают это право, как работает квота и какие документы нужны.",
    },
    hero: {
      tag: "Руководство по специальному паспорту",
      title: "Право на зелёный паспорт для экспортирующих компаний",
      summary:
        "Мы собрали на одной странице правила, квоты, круг заявителей и документальную основу права на зелёный паспорт для владельцев, партнёров и уполномоченных сотрудников экспортирующих компаний.",
      primaryCta: "Изучить условия",
      secondaryCta: "Связаться с нами",
    },
    quickFacts: [
      {
        value: "500 000 USD",
        label: "Минимальный средний экспорт",
        note: "Средний показатель за последние 3 календарных года",
      },
      {
        value: "1-5 человек",
        label: "Квота паспортов",
        note: "Зависит от экспортного объёма",
      },
      {
        value: "Февраль",
        label: "Старт подачи",
        note: "В году, следующем за экспортом",
      },
      {
        value: "Schengen",
        label: "Ключевое преимущество",
        note: "Безвизовый или упрощённый въезд",
      },
    ],
    intro: {
      eyebrow: "Что такое зелёный паспорт?",
      title: "Что даёт специальный штампованный паспорт?",
      paragraphs: [
        "Зелёный паспорт, официально называемый специальным штампованным паспортом, предоставляет дополнительные преимущества по сравнению с обычным паспортом и позволяет въезжать во многие страны без визы либо по упрощённой визовой процедуре.",
        "Одним из важнейших плюсов является более удобное планирование поездок по множеству направлений, включая страны Шенгенской зоны.",
      ],
    },
    program: {
      eyebrow: "Право для экспортёров",
      title: "Как экспортирующие компании пользуются этим правом?",
      paragraphs: [
        "Компаниям, достигшим определённого объёма экспорта, предоставляется ограниченное количество прав на зелёный паспорт для владельцев, партнёров или уполномоченных сотрудников.",
        "Базовый критерий — средний экспорт не менее 500 000 долларов США за последние три календарных года.",
        "Механизм действует в координации Министерства торговли и Ассамблеи экспортёров Турции в рамках политики стимулирования экспорта.",
      ],
    },
    eligibility: {
      eyebrow: "Кто может подать?",
      title: "Круг заявителей и базовые условия",
      applicantsTitle: "Лица, которые могут войти в заявку",
      applicants: [
        "Владелец компании",
        "Партнёр компании",
        "Уполномоченные сотрудники компании, как правило управленческого уровня",
      ],
      conditionsTitle: "Условия подачи",
      conditions: [
        "Средний экспорт не менее 500 000 долларов США за последние три календарных года",
        "Активная и регулярная экспортная деятельность компании",
        "Прохождение процедуры с одобрением Министерства торговли, обычно через Ассамблею экспортёров Турции",
        "Определение количества паспортов по объёму экспорта",
      ],
    },
    quota: {
      eyebrow: "Система квот",
      title: "Сколько зелёных паспортов можно получить в зависимости от экспорта?",
      intro:
        "Квота определяется по среднегодовому объёму экспорта за последние три года. Количество возможных заявителей меняется по диапазонам.",
      rangeHeader: "Среднегодовой экспорт",
      countHeader: "Количество паспортов",
      rows: [
        { range: "500 000 - 10 000 000 USD", count: "1 человек" },
        { range: "10 000 001 - 25 000 000 USD", count: "2 человека" },
        { range: "25 000 001 - 50 000 000 USD", count: "3 человека" },
        { range: "50 000 001 - 100 000 000 USD", count: "4 человека" },
        { range: "100 000 001 USD и выше", count: "5 человек" },
      ],
      noteTitle: "Календарь подачи",
      noteText:
        "Данные по экспорту текущего года передаются объединениям экспортёров Министерством торговли в январе следующего года через VEDOP и TURKSTAT. Компании, отвечающие требованиям, могут подавать с февраля следующего года.",
      excludedTitle: "Экспорт, который не учитывается в расчёте",
      excluded: [
        "Экспорт по электронной таможенной декларации электронной торговли",
        "Экспорт по специальным счетам-фактурам",
        "Транзитный экспорт",
        "Экспорт в свободные зоны",
      ],
    },
    authorities: {
      eyebrow: "Кто подпадает и кто исключён",
      title: "Кто может воспользоваться правом, а кто нет?",
      eligibleTitle: "Уполномоченные лица компании, которые могут подпадать под право",
      eligible: [
        "Заявления могут подаваться на сотрудников, зарегистрированных в системе e-SGK, а также на акционеров.",
        "Для сотрудников обязательно представление SGK-деклараций за три месяца, предшествующие дате подачи.",
        "Держатели акций на предъявителя в этот круг не входят.",
        "Если владельцы или партнёры компании являются юридическими лицами, аналогичное право может возникнуть и для владельцев, партнёров либо сотрудников этих юридических лиц.",
      ],
      ineligibleTitle: "Лица, которые не могут подать",
      ineligible: [
        "Назначенные извне менеджеры или члены совета директоров не могут подавать, если они не отражены в e-SGK и не являются акционерами соответствующей компании.",
        "Одного лишь получения вознаграждения за участие в совете недостаточно.",
        "Структуры с акциями на предъявителя не образуют действительной базы для этого права.",
      ],
      firmsTitle: "Компании, которые не могут воспользоваться этим правом",
      firms: [
        "Компании в состоянии банкротства",
        "Компании в стадии ликвидации",
        "Компании под временной или окончательной защитой по процедуре конкордата",
        "Компании, прошедшие полное разделение",
      ],
      familyTitle: "Важное примечание по супругу и детям",
      familyNote:
        "В отличие от ряда режимов для госслужащих, зелёный паспорт для экспортёров не распространяется автоматически на супругов и детей. Они могут оцениваться отдельно только при наличии квоты и если сами выступают сотрудниками или акционерами.",
    },
    documents: {
      eyebrow: "Необходимые документы",
      title: "Основные документы, которые обычно запрашиваются",
      items: [
        "Ходатайство",
        "Форма запроса",
        "Выписка из Торгового реестра, подтверждающая структуру акционеров компании",
        "Образец подписи лица, уполномоченного представлять компанию и принимать обязательства от её имени",
        "Копия удостоверения личности гражданина Турции",
      ],
    },
    cta: {
      title: "Давайте вместе оценим право вашей компании на зелёный паспорт",
      description:
        "Когда средние экспортные показатели, выбор кандидатов, данные SGK, структура участия и подготовка досье анализируются совместно, процесс становится гораздо более предсказуемым.",
      primaryCta: "Проверить файл",
      secondaryCta: "Другие юридические услуги",
    },
  },
  ar: {
    metadata: {
      breadcrumbLabel: "الجواز الأخضر",
      title: "حق الجواز الأخضر للشركات المصدّرة",
      description:
        "دليل عملي يشرح ما هو الجواز الأخضر، وكيف تستفيد منه الشركات المصدّرة، وكيف يعمل نظام الحصص، وما هي المستندات المطلوبة.",
    },
    hero: {
      tag: "دليل الجواز ذي الختم الخاص",
      title: "حق الجواز الأخضر للشركات المصدّرة",
      summary:
        "جمعنا في صفحة واحدة نطاق هذا الحق وشروطه ونظام الحصص والوثائق الأساسية الخاصة بالجواز الأخضر الممنوح لبعض أصحاب الشركات المصدّرة وشركائها وموظفيها المخولين.",
      primaryCta: "راجع الشروط",
      secondaryCta: "تواصل معنا",
    },
    quickFacts: [
      {
        value: "500,000 دولار",
        label: "الحد الأدنى لمتوسط التصدير",
        note: "متوسط آخر ثلاث سنوات تقويمية",
      },
      {
        value: "1-5 أشخاص",
        label: "حصة الجوازات",
        note: "تختلف بحسب حجم التصدير",
      },
      {
        value: "فبراير",
        label: "بداية التقديم",
        note: "في السنة التالية لسنة التصدير",
      },
      {
        value: "شنغن",
        label: "ميزة سفر مهمة",
        note: "دخول بلا تأشيرة أو بإجراءات مبسطة",
      },
    ],
    intro: {
      eyebrow: "ما هو الجواز الأخضر؟",
      title: "ماذا يوفّر الجواز ذو الختم الخاص؟",
      paragraphs: [
        "الجواز الأخضر، أو ما يُعرف رسمياً بالجواز ذي الختم الخاص، هو نوع من الجوازات يمنح إلى جانب مزايا الجواز العادي إمكانية دخول كثير من الدول دون تأشيرة أو بتسهيلات أكبر.",
        "ومن أبرز مزاياه تسهيل التخطيط للسفر إلى عدد كبير من الوجهات، بما في ذلك دول منطقة شنغن.",
      ],
    },
    program: {
      eyebrow: "الحق الممنوح للمصدّرين",
      title: "كيف تستفيد الشركات المصدّرة من هذا الحق؟",
      paragraphs: [
        "تُمنح الشركات التي تبلغ حجماً معيناً من التصدير عدداً محدوداً من حقوق الجواز الأخضر لصالح مالكيها أو شركائها أو بعض موظفيها المخولين.",
        "المعيار الأساسي هو أن يبلغ متوسط الصادرات خلال آخر ثلاث سنوات تقويمية ما لا يقل عن 500 ألف دولار أمريكي.",
        "يُدار هذا التطبيق بالتنسيق بين وزارة التجارة ومجلس المصدرين الأتراك ضمن سياسة تشجيع التصدير.",
      ],
    },
    eligibility: {
      eyebrow: "من يمكنه التقديم؟",
      title: "الفئات المشمولة والشروط الأساسية",
      applicantsTitle: "الأشخاص الذين قد يدخلون ضمن نطاق الطلب",
      applicants: [
        "صاحب الشركة",
        "شريك الشركة",
        "الموظفون المخوّلون داخل الشركة، وغالباً من المستوى الإداري",
      ],
      conditionsTitle: "شروط التقديم",
      conditions: [
        "أن يبلغ متوسط الصادرات خلال آخر ثلاث سنوات تقويمية 500 ألف دولار أمريكي على الأقل",
        "أن تكون للشركة نشاطات تصدير فعلية ومنتظمة",
        "أن يتم استكمال المسار بموافقة وزارة التجارة وغالباً عبر مجلس المصدرين الأتراك",
        "أن يحدد عدد الجوازات وفقاً لحجم التصدير",
      ],
    },
    quota: {
      eyebrow: "نظام الحصص",
      title: "كم جوازاً أخضر يمكن منحه بحسب حجم التصدير؟",
      intro:
        "تُحدد الحصة بناءً على متوسط قيمة التصدير السنوية لآخر ثلاث سنوات، ويتغير عدد الأشخاص الممكن إدراجهم بحسب الشرائح التالية.",
      rangeHeader: "متوسط التصدير السنوي",
      countHeader: "عدد الجوازات الممكنة",
      rows: [
        { range: "500,000 - 10,000,000 دولار", count: "شخص واحد" },
        { range: "10,000,001 - 25,000,000 دولار", count: "شخصان" },
        { range: "25,000,001 - 50,000,000 دولار", count: "3 أشخاص" },
        { range: "50,000,001 - 100,000,000 دولار", count: "4 أشخاص" },
        { range: "100,000,001 دولار فأكثر", count: "5 أشخاص" },
      ],
      noteTitle: "التقويم الزمني للتقديم",
      noteText:
        "تُشارك وزارة التجارة بيانات التصدير للسنة الجارية مع اتحادات المصدرين في شهر يناير من السنة التالية عبر VEDOP وTUIK. ويمكن للشركات المستوفية للشروط أن تبدأ التقديم اعتباراً من فبراير من السنة التالية.",
      excludedTitle: "أنواع التصدير غير المحتسبة",
      excluded: [
        "الصادرات ضمن نظام البيان الجمركي الإلكتروني للتجارة الإلكترونية",
        "الصادرات المنفذة عبر الفاتورة الخاصة",
        "صادرات الترانزيت",
        "الصادرات إلى المناطق الحرة",
      ],
    },
    authorities: {
      eyebrow: "المستفيدون والاستثناءات",
      title: "من يمكنه الاستفادة ومن لا يمكنه ذلك؟",
      eligibleTitle: "ممثلو الشركة الذين قد يكتسبون هذا الحق",
      eligible: [
        "يمكن تقديم الطلبات باسم الموظفين المسجلين في قائمة E-SGK وباسم المساهمين.",
        "بالنسبة إلى الموظفين، يجب تقديم بيانات SGK الخاصة بالأشهر الثلاثة السابقة لتاريخ الطلب.",
        "حملة الأسهم لحاملها لا يدخلون ضمن هذا النطاق.",
        "إذا كان مالكو الشركة أو شركاؤها من الأشخاص الاعتباريين، فقد يمتد هذا الحق أيضاً إلى مالكي أو شركاء أو موظفي تلك الشخصيات الاعتبارية.",
      ],
      ineligibleTitle: "الأشخاص غير القادرين على التقديم",
      ineligible: [
        "المديرون أو أعضاء مجلس الإدارة المعيّنون من خارج الشركة لا يمكنهم التقديم إذا لم يكونوا مسجلين في E-SGK ولم تكن لهم حصة في الشركة المؤهلة.",
        "مجرد الحصول على بدل حضور لا يكفي وحده.",
        "الأسهم لحاملها لا تؤسس وحدها أساساً صالحاً لهذا الحق.",
      ],
      firmsTitle: "الشركات التي لا يمكنها الاستفادة من هذا الحق",
      firms: [
        "الشركات المفلسة",
        "الشركات الداخلة في التصفية",
        "الشركات الخاضعة لمهلة صلح واقٍ مؤقتة أو نهائية",
        "الشركات التي نفذت انقساماً كاملاً",
      ],
      familyTitle: "ملاحظة مهمة بخصوص الزوجة والأولاد",
      familyNote:
        "على خلاف بعض الأنظمة المطبقة على الموظفين العموميين، لا يمتد حق الجواز الأخضر الخاص بالمصدرين تلقائياً إلى الزوجة والأولاد. ويمكن النظر في طلباتهم فقط إذا وُجدت حصة وكانوا هم أيضاً موظفين أو شركاء.",
    },
    documents: {
      eyebrow: "الوثائق المطلوبة",
      title: "أهم المستندات التي تُطلب عادة في الملف",
      items: [
        "عريضة الطلب",
        "نموذج الطلب",
        "بيان من الجريدة الرسمية للسجل التجاري يوضح هيكل الشركاء في الشركة",
        "تعميم التوقيع الخاص بالشخص المخوّل بتمثيل الشركة وإلزامها",
        "نسخة من بطاقة الهوية التركية",
      ],
    },
    cta: {
      title: "دعنا نقيّم معاً أحقية شركتكم في الجواز الأخضر",
      description:
        "عند مراجعة متوسطات التصدير واختيار الأشخاص المناسبين وبيانات SGK وهيكل الشراكة وإعداد الملف بشكل متكامل، يصبح المسار أكثر وضوحاً وقابلية للتوقع.",
      primaryCta: "لنراجع الملف",
      secondaryCta: "خدمات قانونية أخرى",
    },
  },
  fa: {
    metadata: {
      breadcrumbLabel: "پاسپورت سبز",
      title: "حق پاسپورت سبز برای شرکت‌های صادرکننده",
      description:
        "راهنمایی کاربردی درباره اینکه پاسپورت سبز چیست، شرکت‌های صادرکننده چگونه از آن بهره‌مند می‌شوند، نظام سهمیه چگونه عمل می‌کند و چه مدارکی لازم است.",
    },
    hero: {
      tag: "راهنمای پاسپورت ویژه",
      title: "حق پاسپورت سبز برای شرکت‌های صادرکننده",
      summary:
        "در این صفحه دامنه حق، شرایط، سهمیه‌بندی و چارچوب مدارک مربوط به پاسپورت سبزی را که برای برخی مالکان، شرکا و کارکنان مجاز شرکت‌های صادرکننده در نظر گرفته می‌شود جمع‌آوری کرده‌ایم.",
      primaryCta: "بررسی شرایط",
      secondaryCta: "تماس با ما",
    },
    quickFacts: [
      {
        value: "500,000 دلار",
        label: "حداقل میانگین صادرات",
        note: "میانگین سه سال تقویمی اخیر",
      },
      {
        value: "1 تا 5 نفر",
        label: "سهمیه پاسپورت",
        note: "بسته به حجم صادرات",
      },
      {
        value: "فوریه",
        label: "شروع درخواست",
        note: "در سال پس از تحقق صادرات",
      },
      {
        value: "شنگن",
        label: "مزیت مهم سفر",
        note: "ورود بدون ویزا یا با تسهیل بیشتر",
      },
    ],
    intro: {
      eyebrow: "پاسپورت سبز چیست؟",
      title: "پاسپورت دارای مهر ویژه چه مزیتی دارد؟",
      paragraphs: [
        "پاسپورت سبز که نام رسمی آن پاسپورت دارای مهر ویژه است، نوعی پاسپورت امتیازی است که علاوه بر مزایای پاسپورت عادی، امکان ورود بدون ویزا یا با تسهیلات بیشتر را به کشورهای زیادی فراهم می‌کند.",
        "یکی از مهم‌ترین مزایای آن، برنامه‌ریزی آسان‌تر برای سفر به مقصدهای متعدد از جمله کشورهای حوزه شنگن است.",
      ],
    },
    program: {
      eyebrow: "امتیاز اعطاشده به صادرکنندگان",
      title: "شرکت‌های صادرکننده چگونه از این حق استفاده می‌کنند؟",
      paragraphs: [
        "به شرکت‌هایی که به حجم مشخصی از صادرات برسند، تعداد محدودی سهمیه پاسپورت سبز برای مالکان، شرکا یا کارکنان مجاز اختصاص داده می‌شود.",
        "معیار اصلی این است که میانگین صادرات سه سال تقویمی اخیر دست‌کم 500 هزار دلار آمریکا باشد.",
        "این سازوکار با هماهنگی وزارت تجارت و مجمع صادرکنندگان ترکیه در راستای تشویق صادرات اجرا می‌شود.",
      ],
    },
    eligibility: {
      eyebrow: "چه کسانی می‌توانند درخواست دهند؟",
      title: "گروه‌های مشمول و شرایط پایه",
      applicantsTitle: "افرادی که می‌توانند در دامنه درخواست قرار گیرند",
      applicants: [
        "صاحب شرکت",
        "شریک شرکت",
        "کارکنان مجاز شرکت که معمولاً در سطح مدیریتی هستند",
      ],
      conditionsTitle: "شرایط درخواست",
      conditions: [
        "میانگین صادرات حداقل 500 هزار دلار آمریکا در سه سال تقویمی اخیر",
        "فعال و مستمر بودن فعالیت صادراتی شرکت",
        "طی شدن فرآیند با تأیید وزارت تجارت و معمولاً از مسیر مجمع صادرکنندگان ترکیه",
        "تعیین تعداد پاسپورت‌ها بر اساس حجم صادرات",
      ],
    },
    quota: {
      eyebrow: "نظام سهمیه",
      title: "بر اساس حجم صادرات چند پاسپورت سبز قابل دریافت است؟",
      intro:
        "سهمیه بر اساس میانگین ارزش صادرات سالانه در سه سال اخیر تعیین می‌شود و تعداد افراد واجد شرایط در هر بازه متفاوت است.",
      rangeHeader: "میانگین صادرات سالانه",
      countHeader: "تعداد پاسپورت قابل اعطا",
      rows: [
        { range: "500,000 تا 10,000,000 دلار", count: "1 نفر" },
        { range: "10,000,001 تا 25,000,000 دلار", count: "2 نفر" },
        { range: "25,000,001 تا 50,000,000 دلار", count: "3 نفر" },
        { range: "50,000,001 تا 100,000,000 دلار", count: "4 نفر" },
        { range: "100,000,001 دلار و بیشتر", count: "5 نفر" },
      ],
      noteTitle: "تقویم درخواست",
      noteText:
        "داده‌های صادرات سال جاری از سوی وزارت تجارت در ژانویه سال بعد از طریق VEDOP و TURKSTAT در اختیار اتحادیه‌های صادرکنندگان قرار می‌گیرد. شرکت‌های واجد شرایط می‌توانند از فوریه سال بعد اقدام کنند.",
      excludedTitle: "صادراتی که در محاسبه منظور نمی‌شود",
      excluded: [
        "صادرات تحت اظهارنامه گمرکی تجارت الکترونیک",
        "صادرات انجام‌شده با فاکتور ویژه",
        "صادرات ترانزیتی",
        "صادرات به مناطق آزاد",
      ],
    },
    authorities: {
      eyebrow: "افراد مشمول و استثناها",
      title: "چه کسانی می‌توانند استفاده کنند و چه کسانی نمی‌توانند؟",
      eligibleTitle: "نمایندگان شرکت که ممکن است واجد این حق باشند",
      eligible: [
        "برای کارکنان ثبت‌شده در فهرست E-SGK و همچنین سهام‌داران می‌توان درخواست داد.",
        "برای کارکنان، ارائه اظهارنامه‌های SGK مربوط به سه ماه پیش از تاریخ درخواست الزامی است.",
        "دارندگان سهام بی‌نام در این دامنه قرار نمی‌گیرند.",
        "اگر مالکان یا شرکای شرکت اشخاص حقوقی باشند، این امکان می‌تواند برای مالکان، شرکا یا کارکنان آن اشخاص حقوقی نیز ایجاد شود.",
      ],
      ineligibleTitle: "افرادی که نمی‌توانند درخواست دهند",
      ineligible: [
        "مدیران یا اعضای هیئت‌مدیره‌ای که از خارج شرکت منصوب شده‌اند، اگر در E-SGK ثبت نشده و سهام‌دار شرکت واجد شرایط نباشند، نمی‌توانند درخواست دهند.",
        "صرف دریافت حق حضور به تنهایی کافی نیست.",
        "ساختارهای مبتنی بر سهام بی‌نام مبنای معتبر برای این حق ایجاد نمی‌کنند.",
      ],
      firmsTitle: "شرکت‌هایی که نمی‌توانند از این حق بهره‌مند شوند",
      firms: [
        "شرکت‌های در وضعیت ورشکستگی",
        "شرکت‌های در حال تصفیه",
        "شرکت‌های مشمول مهلت موقت یا قطعی کنکورداتو",
        "شرکت‌هایی که تجزیه کامل انجام داده‌اند",
      ],
      familyTitle: "نکته مهم درباره همسر و فرزندان",
      familyNote:
        "برخلاف برخی رژیم‌های مربوط به کارمندان دولت، حق پاسپورت سبز مبتنی بر صادرات به‌طور خودکار به همسر و فرزندان تسری پیدا نمی‌کند. آن‌ها تنها در صورت وجود سهمیه و احراز شرایط به‌عنوان کارمند یا سهام‌دار ممکن است جداگانه بررسی شوند.",
    },
    documents: {
      eyebrow: "مدارک لازم",
      title: "مدارک اصلی که معمولاً درخواست می‌شود",
      items: [
        "درخواست کتبی",
        "فرم تقاضا",
        "گواهی از روزنامه رسمی ثبت تجارت که ساختار شرکای شرکت را نشان دهد",
        "نمونه امضای شخص مجاز به نمایندگی و تعهد شرکت",
        "کپی کارت شناسایی جمهوری ترکیه",
      ],
    },
    cta: {
      title: "حق پاسپورت سبز شرکتتان را با هم ارزیابی کنیم",
      description:
        "وقتی میانگین صادرات، انتخاب اشخاص مناسب، سوابق SGK، ساختار سهام‌داری و آماده‌سازی پرونده به‌صورت یکجا بررسی شوند، مسیر بسیار قابل پیش‌بینی‌تر خواهد بود.",
      primaryCta: "بررسی پرونده",
      secondaryCta: "سایر خدمات حقوقی",
    },
  },
};

function getCanonicalPath(locale: string) {
  return `/${locale}${PAGE_PATH}`;
}

function getPageUrl(locale: string) {
  return `${SITE_URL}${getCanonicalPath(locale)}`;
}

export async function getGreenPassportPageData(locale: string): Promise<GreenPassportPageData> {
  const dict = (await getDictionary(locale)) as GreenPassportDictionaryLike;
  const safeLocale = getSafeLocale(locale) as LocaleKey;
  const copy = GREEN_PASSPORT_COPY[safeLocale] ?? GREEN_PASSPORT_COPY.tr;
  const fallbackDict =
    locale === "tr" ? dict : ((await getDictionary("tr")) as GreenPassportDictionaryLike);

  return {
    lang: dict.lang ?? safeLocale,
    dir: dict.dir === "rtl" ? "rtl" : "ltr",
    homeLabel: dict.nav?.home ?? fallbackDict.nav?.home ?? "Home",
    copy,
  };
}

export async function buildGreenPassportMetadata(locale: string): Promise<Metadata> {
  const { lang, copy } = await getGreenPassportPageData(locale);
  const safeLocale = getSafeLocale(lang);
  const alternates = Object.fromEntries(
    SUPPORTED_LOCALES.map((targetLocale) => [targetLocale, getCanonicalPath(targetLocale)])
  );

  return {
    title: `${copy.metadata.title} | CitizenshipWeb`,
    description: copy.metadata.description,
    alternates: {
      canonical: getCanonicalPath(safeLocale),
      languages: {
        ...alternates,
        "x-default": getCanonicalPath("en"),
      },
    },
    openGraph: {
      title: copy.metadata.title,
      description: copy.metadata.description,
      url: getCanonicalPath(safeLocale),
      type: "article",
      siteName: "CitizenshipWeb",
      images: [
        {
          url: "/hero/hukuki-hizmetler.jpg",
          width: 1600,
          height: 900,
          alt: copy.metadata.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metadata.title,
      description: copy.metadata.description,
      images: ["/hero/hukuki-hizmetler.jpg"],
    },
  };
}

export async function buildGreenPassportSchemas(locale: string) {
  const { lang, homeLabel, copy } = await getGreenPassportPageData(locale);
  const safeLocale = getSafeLocale(lang);
  const pageUrl = getPageUrl(safeLocale);

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: copy.metadata.title,
      description: copy.metadata.description,
      url: pageUrl,
      inLanguage: safeLocale,
      primaryImageOfPage: `${SITE_URL}/hero/hukuki-hizmetler.jpg`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: homeLabel,
          item: `${SITE_URL}/${safeLocale}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: copy.metadata.breadcrumbLabel,
          item: pageUrl,
        },
      ],
    },
  ];
}
