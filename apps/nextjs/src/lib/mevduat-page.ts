import { getDictionary } from "@/lib/dictionary";
import { getSafeLocale } from "@/lib/seo";

export type MevduatFaqItem = {
  q: string;
  a: string;
};

export type MevduatStepItem = {
  num: string;
  title: string;
  desc: string;
  icon: string;
  subItems?: string[];
};

export type MevduatRiskItem = {
  title: string;
  desc: string;
};

export type MevduatPageCopy = {
  hero: {
    breadcrumbLabel: string;
    tag: string;
    titleLines: string[];
    highlightLineIndex: number;
    summary: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
  };
  stats: Array<{ value: string; label: string; sub: string }>;
  intro: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    imageAlt: string;
    cardValue: string;
    cardLabel: string;
    badgeValue: string;
    badgeLabel: string;
  };
  overview: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    bullets: string[];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    items: MevduatStepItem[];
  };
  risks: {
    eyebrow: string;
    title: string;
    description: string;
    items: MevduatRiskItem[];
  };
  bes: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    restrictions: string[];
    officeRole: string[];
  };
  postApproval: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    bullets: string[];
  };
  whoCanApply: {
    eyebrow: string;
    title: string;
    conditions: string[];
    familyTitle: string;
    family: string[];
    cannotTitle: string;
    cannot: string[];
    specialTitle: string;
    special: string[];
  };
  serviceScope: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: MevduatFaqItem[];
  };
  cta: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

export type MevduatPageData = {
  lang: string;
  dir: "ltr" | "rtl";
  backLabel: string;
  copy: MevduatPageCopy;
};

// ─── Static Turkish copy (hardcoded, embedded) ───────────────────
const TR_COPY: MevduatPageCopy = {
  hero: {
    breadcrumbLabel: "Mevduat Hesabı ile Vatandaşlık",
    tag: "Yatırım Yoluyla Vatandaşlık",
    titleLines: ["Banka Mevduat Hesabı", "ile Türk Vatandaşlığı"],
    highlightLineIndex: 1,
    summary:
      "500.000 USD'yi 3 yıl boyunca Türkiye'deki bir bankada tutarak Türk vatandaşlığı edinme sürecinin hukuki ve idari boyutlarını uçtan uca yönetiyoruz.",
    primaryCta: "Ücretsiz Danışın",
    secondaryCta: "Sık Sorulan Sorular",
    imageAlt: "Banka Mevduatı ile Türk Vatandaşlığı",
  },
  stats: [
    { value: "500.000 USD", label: "Minimum Mevduat", sub: "veya karşılığı döviz" },
    { value: "3 Yıl", label: "Tutma Zorunluluğu", sub: "blokaj / taahhüt" },
    { value: "BDDK", label: "Yetkili Kurum", sub: "uygunluk belgesi" },
    { value: "5–6 Ay", label: "Ortalama Süreç", sub: "başvuru sonuçlanması" },
  ],
  intro: {
    eyebrow: "Süreç Hakkında",
    title: "Yatırım Yoluyla Türk Vatandaşlığı Başvurusu",
    paragraphs: [
      "Yatırım yoluyla Türk vatandaşlığı, Türk Vatandaşlığı Kanunu'nun istisnai vatandaşlık hükümleri kapsamında, kanunun öngördüğü belirli yatırım araçlarının kullanılması suretiyle gerçekleştirilen bir başvuru türüdür.",
      "Bu süreçte ilk ve en önemli adım, hangi yatırım aracı kullanılarak vatandaşlık başvurusu yapılacağının doğru şekilde belirlenmesidir. Yatırımın türüne göre hem yatırımın 'vatandaşlığa uygun' hale getirilme yöntemi hem de uygunluk belgesini düzenleyen kurum değişmektedir.",
    ],
    imageAlt: "Mevduat yatırımı ile Türk vatandaşlığı",
    cardValue: "BDDK Onaylı",
    cardLabel: "Uygunluk Belgesi Süreci",
    badgeValue: "500K$",
    badgeLabel: "Minimum Eşik",
  },
  overview: {
    eyebrow: "Genel Bakış",
    title: "Vatandaşlık Sürecinin İskeleti",
    paragraphs: [
      "Yatırımın vatandaşlık kriterlerine uygun olarak gerçekleştirildiğini gösteren resmi belgeye uygulamada 'Uygunluk Belgesi' denilmektedir. Banka mevduat hesabında para tutma yöntemiyle yapılan yatırımlarda uygunluk belgesinin düzenlenmesi ve yatırımın uygunluğunun tespiti bakımından ilgili kurum BDDK'dır.",
      "Büromuz; seçilecek yatırım yöntemine göre yatırımın baştan sona mevzuata uygun biçimde yapılandırılması, vatandaşlık kriterlerine uygun hale getirilmesi, gerekli resmi kayıtların ve işlem akışının doğru kurulması ve nihayetinde ilgili kurumdan uygunluk belgesinin alınması süreçlerinin tamamını bütüncül biçimde yönetmektedir.",
    ],
    bullets: [
      "Yatırımı vatandaşlık mevzuatına göre doğru yapmak",
      "Uygunluk belgesini almak",
      "Yatırımcı ve aile için ikamet izni",
      "Nüfus/vatandaşlık başvurusunu yapmak",
      "Sürecin sonuçlanmasını takip etmek",
      "Kimlik ve pasaport işlemlerini tamamlamak",
    ],
  },
  process: {
    eyebrow: "Adım Adım Süreç",
    title: "Mevduat Hesabı Yöntemiyle Vatandaşlık",
    description:
      "Bu yöntemde avukatın rolü 'bankaya para yatırıldı' noktasında bitmez; başvurunun kurucu unsuru sayılan işlem akışının mevzuata uygun şekilde kurulması ve ispatlanabilir hale getirilmesi gerekir.",
    items: [
      {
        num: "01",
        icon: "🏦",
        title: "Yatırım Aracının Seçimi ve Süreç Planlaması",
        desc: "Yatırımcının ülke durumu, aile yapısı, Türkiye'ye giriş-çıkış planı, belgelerin temin edilebilirliği, vekâletname ile işlem yapılabilme ihtimali ve yatırımın finansal/operasyonel detayları birlikte değerlendirilir.",
      },
      {
        num: "02",
        icon: "💱",
        title: "Banka Seçimi ve Hesap Açılışı",
        desc: "Türkiye'de faaliyet gösteren bir bankada kendi adına en az 500.000 USD veya karşılığı döviz tutarında mevduat hesabı açılır. Para transferi ve döviz işlemlerinin doğru yöntemle yapılması kritik önemdedir.",
      },
      {
        num: "03",
        icon: "🔒",
        title: "3 Yıllık Blokaj / Taahhüt Tesisi",
        desc: "İlgili tutar üzerine 3 yıl süreli blokaj/taahhüt tesis edilir. Blokaj-taahhüt metinlerinin ve banka yazışmalarının mevzuata uygun şekilde hazırlanması gerekir.",
      },
      {
        num: "04",
        icon: "📜",
        title: "BDDK Uygunluk Belgesi",
        desc: "Mevduat yöntemine ilişkin yatırımın uygunluğunu tevsik eden Uygunluk Belgesi alınır. Bu yöntem bakımından uygunluk tespit süreci BDDK çerçevesinde yürütülür.",
      },
      {
        num: "05",
        icon: "🏛️",
        title: "J Bendi İkamet İzni",
        desc: "Uygunluk belgesi sonrasında yatırımcı ve eşi için J bendi ikamet izni başvurusu yapılır. Parmak izi verisi alınması için fiziken Türkiye'ye gelme zorunluluğu mevcuttur.",
      },
      {
        num: "06",
        icon: "🇹🇷",
        title: "Vatandaşlık Başvurusu (VAT-4)",
        desc: "İkamet izninin alınmasının ardından istisnai vatandaşlık başvurusu (VAT-4) yapılır. Başvurucular nüfus müdürlüğünde bizzat bulunur, fotoğraf ve parmak izi işlemleri tamamlanır.",
      },
    ],
  },
  risks: {
    eyebrow: "Kritik Riskler",
    title: "Bu Yöntemde En Kritik Riskler",
    description:
      "Paranın yatırılmış olmasına rağmen blokaj/taahhüt mekanizmasının hatalı kurulması veya para hareketinin doğru belgelendirilememesi, süreci doğrudan riske sokar.",
    items: [
      {
        title: "Blokaj Mekanizmasının Hatalı Kurulması",
        desc: "3 yıl dolmadan paranın çekilmesi veya blokajın kaldırılması yatırım şartını bozar. Mekanizmanın baştan doğru kurulması şarttır.",
      },
      {
        title: "Para Hareketinin Yanlış Belgelenmesi",
        desc: "Döviz transferlerinin ve alım-satım belgelerinin usulüne uygun düzenlenmemesi uygunluk belgesi başvurusunu sekteye uğratabilir.",
      },
      {
        title: "Banka Sözleşmelerinin Yetersiz Hazırlanması",
        desc: "Taahhüt metinlerinin vatandaşlık mevzuatı gerekliliklerini karşılamaması başvurunun reddedilmesine yol açabilir.",
      },
      {
        title: "Erken Çekim veya Transfer",
        desc: "3 yıllık süre içinde yapılan herhangi bir çekim işlemi ya da başka bankaya transfer taahhüdü bozar ve vatandaşlık hakkını kaybettirir.",
      },
    ],
  },
  bes: {
    eyebrow: "Alternatif Yöntem",
    title: "BES Sistemiyle 500.000 USD Yatırımı",
    paragraphs: [
      "BES yönteminde yatırımcı, bir emeklilik şirketi üzerinden 'vatandaşlık' ibareli BES planına dahil olur ve en az 500.000 USD veya karşılığı döviz tutarını katkı payı olarak yatırır.",
      "Para akışı, mevzuata uygun biçimde genellikle dövizin bankaya yatırılması, bunun TCMB'ye satış yoluyla TL'ye çevrilmesi ve 3 yıllık süre, katkı payının emeklilik şirketine intikaliyle sözleşmenin yürürlüğe girdiği tarihten itibaren başlar.",
      "Yatırımın vatandaşlık kriterlerine uygun yapıldığını teyit eden Uygunluk Belgesi/uygunluk yazısı bu yöntemde SEDDK tarafından düzenlenir.",
    ],
    restrictions: [
      "İlk 3 yıl başka şirkete aktarım (transfer) yapılamaz",
      "Plan değişikliği yapılamaz",
      "Belirli fon türlerine ilişkin kısıtlar mevcuttur ('yabancı' veya 'dış borçlanma araçları' ibareli fonlar)",
      "3 yıl dolmadan sistemden çıkış vatandaşlık sürecini riske sokar",
    ],
    officeRole: [
      "Emeklilik şirketi seçimi ve sözleşme kurgusunun vatandaşlık planına uygun yapılması",
      "Banka-TCMB döviz satış sürecinin doğru belgelenmesi",
      "Katkı payının 'nakden intikal' şartını sağlayacak şekilde organize edilmesi",
      "İlk 3 yıl kısıtlarının yatırımcıya açık ve yazılı şekilde yönetilmesi",
      "SEDDK uygunluk yazısı başvurusunun eksiksiz dosyalanması",
      "İkamet izni ile vatandaşlık başvurularının bütünleşik takibi",
    ],
  },
  postApproval: {
    eyebrow: "Başvuru Sonrası",
    title: "Uygunluk Belgesi Sonrası Süreç",
    paragraphs: [
      "Uygunluk belgesi alındıktan sonra vatandaşlık başvurusu için gerekli belgeler hazırlanır. Evrak listesi genel olarak matbu bir çerçeveye sahip olsa da, başvurucunun ülkesi, aile üyesi sayısı ve ilgili ülke temsilciliğinin uygulaması nedeniyle her dosya kendi içinde farklılaşabilir.",
      "Vatandaşlık başvurusu onaylandıktan sonra, onay tarihinden itibaren Türk vatandaşlığını kazanan başvurucular ve aile bireyleri için Türk kimlik kartı ve pasaport başvurusu yapılır. Kimlik ve pasaportun Türkiye'deki nüfus müdürlüklerinden yapılması süreç açısından çok daha hızlı sonuçlanmaktadır.",
    ],
    bullets: [
      "Vatandaşlık dosyasının hazırlanması",
      "Nüfus başvurusunun organize edilmesi",
      "Pasaport ve kimlik randevularının alınması",
      "Tüm aile bireylerinin sürece dahil edilmesi",
    ],
  },
  whoCanApply: {
    eyebrow: "Başvuru Koşulları",
    title: "Kimler Vatandaşlık Alabilir?",
    conditions: [
      "Reşit (18 yaşını doldurmuş) olmak",
      "Ayırt etme gücüne sahip olmak",
      "Kamu güvenliği açısından sakıncası bulunmamak",
    ],
    familyTitle: "Yatırımcıyla Birlikte Kimler Vatandaşlık Alabilir?",
    family: [
      "Eşi",
      "18 yaş altı çocukları (Mısır uyruklu için 21 yaş, Cezayir uyruklu için 19 yaş)",
    ],
    cannotTitle: "Kimler Bu Yoldan Vatandaşlık Alamaz?",
    cannot: [
      "18 yaş altı, tek başına başvuran kişiler",
      "Açık adli kayıtları nedeniyle kamu güvenliği açısından sakıncalı görülen kişiler",
      "Yatırımı mevzuatın öngördüğü şekilde yapmamış olanlar",
      "3 yıl elde tutma şartını ihlal edenler (vatandaşlık sonradan düşer)",
    ],
    specialTitle: "İstisnai Durumlar",
    special: [
      "Birden fazla evliliği olan kişilerde yalnızca ilk eş vatandaşlığa hak kazanır",
      "İkinci/üçüncü/dördüncü eşten olan çocuklar yatırımcıyla birlikte vatandaşlık alabilir",
      "Evlilik dışı dünyaya gelen çocuklar da yatırımcıyla birlikte başvurabilir",
      "İstisnai durumlarda ek evraklar talep edilir",
    ],
  },
  serviceScope: {
    eyebrow: "Hizmet Kapsamımız",
    title: "Uçtan Uca Yönetim",
    items: [
      "Yatırım yönteminin seçimi ve süreç planlaması",
      "Banka seçimi ve hesap açılışının koordinasyonu",
      "Para transferi/döviz işlemlerinin doğru yöntemle yapılması",
      "3 yıllık blokaj-taahhüt metinlerinin mevzuata uygun hazırlanması",
      "Banka yazışmalarının kontrolü ve yönlendirilmesi",
      "BDDK uygunluk belgesi sürecinin eksiksiz yürütülmesi",
      "BES yatırımlarında sözleşmelerin vatandaşlığa uygun kurgulanması",
      "SEDDK uygunluk yazısı başvurusunun dosyalanması",
      "İkamet izni başvurusu hazırlığı ve takibi",
      "Vatandaşlık dosyasının hazırlanması ve nüfus başvurusunun organizasyonu",
      "Kimlik ve pasaport başvurusu dahil sürecin uçtan uca yönetimi",
    ],
  },
  faq: {
    eyebrow: "Sık Sorulan Sorular",
    title: "Merak Edilenler",
    items: [
      {
        q: "Yatırım yöntemini seçerken en kritik nokta nedir?",
        a: "En kritik nokta, yatırımın 'vatandaşlığa uygun hale getirilmesi'dir. Yatırım yapılması tek başına yeterli değildir; yatırımın ödeme akışı, resmi kayıtları ve uygunluk belgesi süreci hatasız kurulmalıdır.",
      },
      {
        q: "Uygunluk belgesi neden bu kadar önemlidir?",
        a: "Uygunluk belgesi, yaptığınız yatırımın vatandaşlık kriterlerini sağladığını resmi olarak teyit eden belgedir. Vatandaşlık dosyasında yatırım kriterini ispatlayan ana dayanak belge niteliğindedir.",
      },
      {
        q: "Uygunluk belgesini hangi kurum verir?",
        a: "Yatırım türüne göre değişir. Banka mevduatında BDDK, BES yönteminde SEDDK, taşınmazda Tapu süreçleri uygunluk sürecini yürütür.",
      },
      {
        q: "J bendi ikamet izni için Türkiye'ye gelmek zorunlu mudur?",
        a: "Evet. Parmak izi verisi Göç İdaresi sistemine işlendiği için yatırımcı ve varsa eşinin fiziken Türkiye'ye gelmesi gerekir.",
      },
      {
        q: "Vatandaşlık başvurusu sırasında da Türkiye'de bulunmak gerekir mi?",
        a: "Evet. Başvurucular (çocuklar hariç) nüfus müdürlüğünde bizzat bulunur, imza atar; fotoğraf ve parmak izi işlemleri yapılır.",
      },
      {
        q: "Süreç ne kadar sürer?",
        a: "Sonuçlanma süreleri dönemsel değişmekle birlikte uygulamada çoğu dosyada ortalama 5–6 ay bandı konuşulmaktadır. Süre; ülke durumu, incelemeler ve evrakların açıklığına göre uzayabilir veya kısalabilir.",
      },
      {
        q: "Vekâletname ile tüm işlemler yapılabilir mi?",
        a: "Evet, bütün işlemler vekâletname ile yürütülebilse de ikamet izni ve vatandaşlık başvurularında biyometrik işlemler nedeniyle başvurucu ve eşin en az iki kez fiziken süreçlere katılması gerekir. İki randevu ortalama bir hafta içerisinde gerçekleşmektedir.",
      },
      {
        q: "3 yıl dolmadan parayı çekebilir miyim?",
        a: "Hayır. 3 yıl dolmadan blokajın kaldırılması veya paranın çekilmesi yatırım şartını bozar; bu durum vatandaşlık alınmış olsa dahi vatandaşlığın düşürülmesiyle sonuçlanır.",
      },
      {
        q: "Vatandaşlık onayı sonrası kimlik ve pasaport nereden alınır?",
        a: "Türkiye'de nüfus müdürlüklerinden veya şartlara göre Türkiye'nin dış temsilcilikleri aracılığıyla başvurusu yapılabilir. Türkiye'deki müdürlüklerden işlem çok daha hızlı tamamlanmaktadır.",
      },
    ],
  },
  cta: {
    title: "Dosyanızı Başlatmaya Hazır mısınız?",
    description:
      "Büromuz, mevduat yatırımınızın başından kimlik/pasaport teslimina kadar her adımı sizin adınıza yönetir.",
    primaryCta: "Ücretsiz Danışın",
    secondaryCta: "SSS'yi İncele",
  },
};

type MevduatDictionaryLike = {
  lang?: string;
  dir?: string;
  nav?: { services?: string };
  services_page?: { detail_back?: string };
};

export async function getMevduatPageData(locale: string): Promise<MevduatPageData> {
  const dict = (await getDictionary(locale)) as MevduatDictionaryLike;
  // For now, always use the Turkish copy (extend with translations later)
  return {
    lang: dict.lang ?? getSafeLocale(locale),
    dir: dict.dir === "rtl" ? "rtl" : "ltr",
    backLabel:
      dict.services_page?.detail_back ??
      dict.nav?.services ??
      "Yatırım Türleri",
    copy: TR_COPY,
  };
}
