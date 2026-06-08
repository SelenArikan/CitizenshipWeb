import { getDictionary } from "@/lib/dictionary";
import { getSafeLocale } from "@/lib/seo";

/* ─── Shared types ────────────────────────────────────────────── */
export type FonStatItem = { value: string; label: string; sub: string };
export type FonStepItem = { num: string; title: string; desc: string; icon: string };
export type FonSherhItem = { title: string; desc: string };
export type FonCheckItem = { label: string; desc?: string };
export type FonFaqItem = { q: string; a: string };

export type GayrimenkulFonPageCopy = {
  hero: {
    breadcrumbLabel: string;
    tag: string;
    titleLines: string[];
    highlightLineIndex: number;
    summary: string;
    primaryCta: string;
    secondaryCta: string;
  };
  stats: FonStatItem[];

  /* BÖLÜM 1 */
  bolum1: {
    eyebrow: string;
    title: string;
    intro: string[];
    tapu: {
      eyebrow: string;
      title: string;
      items: Array<{ num: string; title: string; paragraphs: string[]; bullets?: string[] }>;
    };
    sherhler: {
      eyebrow: string;
      title: string;
      items: FonSherhItem[];
    };
    tapuTuru: {
      eyebrow: string;
      title: string;
      paragraphs: string[];
      arsaTitle: string;
      arsaBullets: string[];
    };
    noter: {
      eyebrow: string;
      title: string;
      paragraphs: string[];
    };
    ekspertiz: {
      eyebrow: string;
      title: string;
      paragraphs: string[];
      formula: { title: string; desc: string };
    };
  };

  /* BÖLÜM 2 */
  bolum2: {
    eyebrow: string;
    title: string;
    items: Array<{
      num: string;
      title: string;
      paragraphs: string[];
      bullets?: string[];
      steps?: string[];
      subItems?: Array<{ title: string; bullets: string[] }>;
    }>;
  };

  /* BÖLÜM 3 */
  bolum3: {
    eyebrow: string;
    title: string;
    items: Array<{
      num: string;
      title: string;
      paragraphs: string[];
      bullets?: string[];
      steps?: string[];
    }>;
  };

  /* BÖLÜM 4 */
  bolum4: {
    eyebrow: string;
    title: string;
    intro: string;
    denetim: { eyebrow: string; title: string; bullets: string[] };
    process: { eyebrow: string; title: string; steps: Array<{ num: string; title: string; desc: string }> };
    sure: { title: string; desc: string };
    sonrasi: { title: string; desc: string };
  };

  cta: { title: string; description: string; primaryCta: string; secondaryCta: string };
};

export type GayrimenkulFonPageData = {
  lang: string;
  dir: "ltr" | "rtl";
  backLabel: string;
  copy: GayrimenkulFonPageCopy;
};

/* ─── Static Turkish content ──────────────────────────────────── */
const TR_COPY: GayrimenkulFonPageCopy = {
  hero: {
    breadcrumbLabel: "Taşınmaz Satın Alımı ile Vatandaşlık",
    tag: "Yatırım Yoluyla Vatandaşlık",
    titleLines: ["Taşınmaz Satın Alım", "Yoluyla Türk Vatandaşlığı"],
    highlightLineIndex: 1,
    summary:
      "400.000 USD değerinde gayrimenkul alımından uygunluk belgesine kadar tapu incelemesi, DAB süreci ve resmi başvuru aşamalarının tamamını hukuki güvenceyle yönetiyoruz.",
    primaryCta: "Ücretsiz Danışın",
    secondaryCta: "Sık Sorulan Sorular",
  },
  stats: [
    { value: "400.000 USD", label: "Minimum Yatırım", sub: "tek veya birden fazla taşınmaz" },
    { value: "3 Yıl", label: "Satış Yasağı Şerhi", sub: "zorunlu blokaj süresi" },
    { value: "TKGM", label: "Yetkili Kurum", sub: "uygunluk belgesi" },
    { value: "1–2 Hafta", label: "Uygunluk Belgesi", sub: "ortalama süreç" },
  ],

  /* ── BÖLÜM 1 ─────────────────────────────────────────────── */
  bolum1: {
    eyebrow: "Birinci Bölüm",
    title: "Taşınmazın Vatandaşlığa Uygunluğunun Araştırılması ve Tespiti",
    intro: [
      "Vatandaşlık sürecinde en kritik aşama, satın alınacak gayrimenkule ilişkin satın alma öncesinde yapılan hukuki ve teknik incelemedir.",
      "Bir taşınmazın fiyatı 400.000 USD olsa bile, vatandaşlık mevzuatında yer alan yatırım yoluyla vatandaşlık başvuru kılavuzuna uygun değilse vatandaşlık başvurusu reddedilir. Bu nedenle yatırım öncesinde, taşınmazın vatandaşlığa uygunluğunun mutlaka araştırılması ve resmi olarak doğrulanması gerekmektedir.",
      "Bu incelemeyi tam anlamıyla ancak avukat yapabilir. Avukat, Web Tapu üzerinden satın alınacak tapunun incelenmesi için randevu talep ederek tapu idaresinde ve belediye nezdinde bizzat incelemelerini gerçekleştirebilir.",
    ],
    tapu: {
      eyebrow: "1.1 – Tapu Hukuki Durum İncelemesi",
      title: "Tapu Kaydı Detaylı İnceleme",
      items: [
        {
          num: "1.1.1",
          title: "İpotek Kaydı",
          paragraphs: [
            "Tapu üzerine şerh edilmiş bir ipotek var mı?",
            "Satıcının şirket olduğu durumlarda, projeler genellikle banka kredisi ile finanse edildiğinden taşınmaz üzerinde banka ipoteği bulunabilmektedir. Vatandaşlık başvurusu açısından, satış işlemi gerçekleştirilmeden önce söz konusu banka ipoteğinin mutlaka terkin (fek) edilmesi gerekmektedir.",
          ],
        },
        {
          num: "1.1.2",
          title: "Haciz Kaydı",
          paragraphs: [
            "Tapu üzerinde bir haciz var mı?",
            "Haciz; taşınmaz sahibinin borçları nedeniyle icra müdürlüğü tarafından konulan kısıtlamadır.",
          ],
          bullets: [
            "Vergi ve emlak borcu kaynaklı hacizler",
            "Şirket veya şahsa olan borca ilişkin icra takibi ya da fatura borçlarından kaynaklanan hacizler",
          ],
        },
        {
          num: "1.1.3",
          title: "Diğer Şerhler",
          paragraphs: [
            "Şerh; tapuya işlenen ve üçüncü kişilere karşı ileri sürülebilen hak veya kısıtlamalardır. Bu tür kayıtlar devir işlemini tamamen engelleyebilir ya da özel izin gerektireceğinden, tapu alımından önce mutlaka uzman bir avukat tarafından incelenmelidir.",
          ],
        },
        {
          num: "1.1.4",
          title: "Daha Önce Vatandaşlık İçin Kullanılmış mı?",
          paragraphs: [
            "Türk vatandaşlığı kapsamında satın alınan taşınmazlara genellikle 3 yıl süreyle satış yasağı şerhi konulmaktadır. Aynı taşınmaz ikinci kez vatandaşlık başvurusunda kullanılamaz.",
          ],
          bullets: [
            "Taşınmazın daha önce vatandaşlık dosyasına konu olup olmadığı",
            "3 yıllık satış yasağı şerhinin bulunup bulunmadığı",
          ],
        },
      ],
    },
    sherhler: {
      eyebrow: "Şerh Türleri",
      title: "Dikkat Edilmesi Gereken Şerh Çeşitleri",
      items: [
        {
          title: "Satış Vaadi Şerhi",
          desc: "Taşınmazın önceden başka bir kişiye noterden satıldığını ve tapunun ileriki bir tarihte devredileceğini gösteren şerhtir.",
        },
        {
          title: "İhtiyati Tedbir Şerhi",
          desc: "Taşınmaz malikinin devam eden bir davası nedeniyle satışın engellenmiş olabileceğini gösterir.",
        },
        {
          title: "Kat Karşılığı İnşaat Sözleşmesi Şerhi",
          desc: "Taşınmaz inşaatının hâlâ devam ettiğini ve inşaatın belirli bir aşamaya geldiğinde tapuların devredilebileceğini gösteren sözleşmeye işaret eder. Henüz satışa hazır olmayan bir taşınmaz için ödeme yapılmamalıdır.",
        },
        {
          title: "Mahkeme Tedbir Kararı",
          desc: "Mahkeme tarafından verilen ve taşınmazın satışını veya devrini geçici olarak durduran karardır. Tedbir kaldırılmadan tapuda işlem yapılamaz.",
        },
        {
          title: "İflas Şerhi",
          desc: "Taşınmaz sahibinin iflas etmiş olması nedeniyle tapuya konulan kayıttır. Bu durumda taşınmaz üzerindeki tasarruf yetkisi genellikle iflas idaresine geçer ve satış için özel prosedür gerekir.",
        },
        {
          title: "Kamulaştırma Şerhi",
          desc: "Devletin kamu yararı nedeniyle taşınmazı kamulaştırma sürecinde olduğunu gösteren kayıttır. Bu durumda satış işlemi kısıtlanabilir veya kamulaştırma tamamlanıncaya kadar mümkün olmayabilir.",
        },
        {
          title: "Kültür Varlığı / Sit Alanı Kaydı",
          desc: "Taşınmazın kültürel veya tarihî değeri bulunduğunu ve koruma altında olduğunu gösterir. Bu tür taşınmazlarda kullanım ve yapılaşma ciddi biçimde sınırlıdır; bazı işlemler için özel izin gerekebilir.",
        },
        {
          title: "Askerî Yasak Bölge Kaydı",
          desc: "Taşınmazın askerî güvenlik açısından sınırlı bölgede bulunduğunu gösterir. Özellikle yabancıların taşınmaz edinimi veya bazı tasarruf işlemleri için özel izin gerekebilir.",
        },
      ],
    },
    tapuTuru: {
      eyebrow: "1.2 – Tapu Türünün Vatandaşlığa Uygunluğu",
      title: "Kat Mülkiyeti / Kat İrtifakı Zorunluluğu",
      paragraphs: [
        "Tapunun niteliği, vatandaşlık başvurusu açısından mutlaka kontrol edilmelidir. Taşınmazın kat mülkiyetli veya kat irtifaklı olması esastır; bu iki tapu türü, bağımsız bölümün hukuken tanımlandığını ve projeye bağlı bir yapı yatırımının bulunduğunu gösterir.",
        "Boş arsa satın almak, tek başına vatandaşlık için uygun kabul edilmez. Arsa tapulu bir taşınmaz, ancak aşağıdaki şartların tamamının bir arada bulunması hâlinde vatandaşlık açısından değerlendirmeye alınabilir.",
      ],
      arsaTitle: "Arsa ile Başvuru İçin Zorunlu Koşullar",
      arsaBullets: [
        "Arsa üzerinde ruhsatlı bir projenin bulunması",
        "İnşaat için belediye onaylarının alınmış olması",
        "Kat irtifakının kurulmuş olması",
        "Bağımsız bölümlerin projede açıkça belirlenmiş olması",
        "Ödemenin banka üzerinden yapılıp DAB ile ispatlanması",
        "Değerleme raporunun vatandaşlık için gerekli asgari tutarı karşılaması",
      ],
    },
    noter: {
      eyebrow: "1.3 – Noter Sözleşmesiyle Vatandaşlık",
      title: "Taksitli Satışlarda Tercih Edilen Yöntem",
      paragraphs: [
        "Taşınmazın mutlaka bir proje kapsamında olması gerekmektedir. İnşaatın ruhsatlı olması ve kat irtifakının kurulmuş bulunması zorunludur. Boş arsa üzerinden yapılan satışlar ve yalnızca sözleşmeye dayalı işlemler vatandaşlık açısından kabul edilmez.",
        "Değerleme raporunun en az 400.000 USD tutarını karşılaması zorunludur. Ayrıca noter satış vaadi sözleşmesi imzalanmadan önce, alıcı konumundaki yabancı yatırımcı tarafından asgari 400.000 USD'nin ödenmiş olması ve bu ödemeye ilişkin Döviz Alım Belgesinin (DAB) en geç noter sözleşmesinin imzalandığı tarihte düzenlenmiş olması gerekmektedir.",
        "Noter sözleşmesi yöntemi, uygulamada genellikle taksitli satışlarda tercih edilmektedir. Vatandaşlık başvurusu yapılabilmesi için ilk etapta en az 400.000 USD'nin ödenmiş olması şarttır; kalan tutar taksitlendirilerek ödenebilir.",
        "Özellikle inşaatı devam eden projelerde, bazı şirketler tapu devrini teslim aşamasına kadar gerçekleştirmediğinden, bu tür durumlarda işlemler noter sözleşmesi yöntemi üzerinden yürütülmektedir. Yüklenici şirketin arsa sahibi olmadığı durumlarda, şirket ile arsa sahibi arasında kat karşılığı sözleşme bulunması gerekmektedir; zira noter sözleşmesi daha sonra tapuya vatandaşlık blokesiyle birlikte şerh olarak işlenmektedir.",
        "Kat irtifakı tapuları şirket adına tescil edildikten sonra, satıcı ile tapuda noter satış sözleşmesi imzalanabilir. Diğer şartların da sağlanması hâlinde, noter sözleşmesi yöntemiyle vatandaşlık işlemleri yürütülebilmektedir.",
      ],
    },
    ekspertiz: {
      eyebrow: "1.4 – Ekspertiz Ön Değerlendirmesi",
      title: "Değerleme Raporu ve Geçerli Tutar Hesaplama",
      paragraphs: [
        "Tek bir taşınmazla vatandaşlık başvurusu yapılıyorsa; İskân Bakanlığı'na bağlı GEDAŞ tarafından, satıcının e-Devlet girişi üzerinden Web Tapu aracılığıyla çevrimiçi değerleme raporu talep edilir.",
        "Taşınmazın değeri, vatandaşlık için gerekli asgari yatırım tutarını karşılıyorsa, raporun son sayfasında şu ibare yer alır: 'Türk Vatandaşlığı Kanununun Uygulanmasına İlişkin Yönetmelik kapsamında aranan minimum yatırım tutarını karşılamaktadır.'",
        "Birden fazla taşınmazla vatandaşlık başvurusu yapılması hâlinde ise her taşınmaz için ayrı değerleme raporu düzenlenir. Raporların son sayfasındaki 'Vatandaşlık kazanımına esas tutar değerlendirmesi' bölümünde toplam yatırım tutarı belirtilir.",
        "Yatırım amacıyla satın alınan taşınmazlarda değerleme raporu zorunlu değildir; değerleme raporu yalnızca vatandaşlık amacıyla satın alınan taşınmazlar için zorunlu bir unsurdur.",
      ],
      formula: {
        title: "Geçerli Yatırım Tutarı Hesaplama Formülü",
        desc: "DAB tutarı değerleme raporundan düşükse DAB tutarı esas alınır. Değerleme raporu daha düşükse rapor tutarı esas alınır. Geçerli tutar: ikisinden hangisi daha düşükse odur. Eksik kalan kısım varsa yatırımın vatandaşlık eşiğine ulaşması için fark tamamlanmalıdır.",
      },
    },
  },

  /* ── BÖLÜM 2 ─────────────────────────────────────────────── */
  bolum2: {
    eyebrow: "İkinci Bölüm",
    title: "Yabancıya Tapu Satışı ve Ödeme Süreçleri (DAB ve Banka İşlemleri)",
    items: [
      {
        num: "2.1",
        title: "Yabancı Alıcının Banka Hesabı",
        paragraphs: [
          "Türkiye'de yabancı alıcının banka hesabı açması hukuken zorunlu değildir. Ancak özellikle ikinci el satışlarda ve vatandaşlık yatırımı kapsamında hesap açılması şiddetle tavsiye edilir.",
          "Sebep: Döviz Alım Belgesi (DAB), yatırımın banka sistemi üzerinden gerçekleştiğini gösteren temel belgedir.",
        ],
      },
      {
        num: "2.2",
        title: "Döviz Alım Belgesi (DAB) Süreci – Alıcı Tarafından Yapılması Hâlinde",
        paragraphs: [],
        steps: [
          "Yabancı alıcı, Türkiye'de hesabının bulunduğu bankaya gider.",
          "Satın alma bedelini (USD, EUR vb.) kendi hesabından veya yurt dışından transfer ederek bankaya yatırır. Elden nakit yatırımı da mümkündür.",
          "Banka, dövizi o günkü Merkez Bankası kuru üzerinden Türk Lirasına çevirir.",
          "Banka, Döviz Alım Belgesi (DAB) düzenler.",
        ],
        bullets: [
          "Alıcının adı ve pasaport numarası",
          "Satın alınacak taşınmaza ilişkin bilgiler",
          "Döviz tutarı ve Türk Lirası karşılığı",
        ],
      },
      {
        num: "2.3",
        title: "DAB Sonrası Ödeme Yönetimi",
        paragraphs: [
          "DAB belgesinde yer alan Türk Lirası karşılığı için alıcı, satış günü bankasına talimat verebilir.",
        ],
        subItems: [
          {
            title: "Seçenek 1 – Havale / Transfer",
            bullets: ["Banka, ilgili tutarı doğrudan satıcının hesabına transfer eder."],
          },
          {
            title: "Seçenek 2 – Bloke Çek",
            bullets: [
              "Banka, satış bedeli kadar Türk Lirası üzerinden bloke çek düzenler.",
              "Çek, satış günü satıcıya ibraz edilir.",
              "Satıcı çeki bankadan tahsil ederek bedeli kendi hesabına alır.",
              "Bloke çek yöntemi, özellikle ikinci el satışlarda güvenilir bir ödeme modeli olarak kabul görmektedir.",
            ],
          },
        ],
      },
      {
        num: "2.4",
        title: "Satıcının Şirket (Tüzel Kişi) Olması Durumu",
        paragraphs: [
          "DAB işlemi hem alıcı hem de satıcı şirket tarafından yapılabilir; mevzuat her iki yönteme de izin vermektedir.",
        ],
        subItems: [
          {
            title: "Senaryo A – Alıcı DAB Yaparsa",
            bullets: ["Alıcı bankada DAB işlemini tamamlar ve satıcıya Türk Lirası transferi gerçekleştirir."],
          },
          {
            title: "Senaryo B – Şirket DAB Yaparsa",
            bullets: [
              "Şirket, yabancı alıcının döviz hesabına aktarılan bedel üzerinden alıcı adına DAB düzenler.",
              "Not: Ödeme ve belgeler her zaman banka kayıtlarında ve resmî tapu dosyasında izlenebilir olmalıdır.",
            ],
          },
        ],
      },
      {
        num: "2.5",
        title: "Pasaport Tercümesi ve Noter Onayı",
        paragraphs: [],
        bullets: [
          "Pasaport, yeminli tercüman tarafından çevrilir.",
          "Çeviri noter tasdikinden geçirilir.",
          "Tapu müdürlüğü, tercümesiz pasaport kabul etmemektedir.",
        ],
      },
    ],
  },

  /* ── BÖLÜM 3 ─────────────────────────────────────────────── */
  bolum3: {
    eyebrow: "Üçüncü Bölüm",
    title: "Tapu Randevu ve Satış Süreci",
    items: [
      {
        num: "3.1",
        title: "Tapu Satışı Öncesinde Zorunlu Belgeler",
        paragraphs: [
          "Zorunlu Deprem Sigortası (DASK): Satışa konu taşınmaz için geçerli bir DASK poliçesinin bulunması zorunludur. Kat mülkiyetli taşınmazlarda bu poliçe tapuda işlem yapılabilmesi için ön koşuldur.",
          "Değerleme Raporu: Yabancıya yapılan taşınmaz satışlarında ekspertiz raporu zorunludur. Vatandaşlık amacı taşıyan işlemlerde bu rapor ayrıca talep olarak da istenmektedir. Tapu randevusu, eksper raporu sisteme yüklenmeden alınamamaktadır.",
        ],
      },
      {
        num: "3.2",
        title: "Tapu Randevusunun Alınması",
        paragraphs: [
          "Randevu, Web Tapu Sistemi üzerinden alınır. Başvuru satıcı tarafından yapılır.",
        ],
        bullets: [
          "Alıcı ve satıcıya ait kimlik bilgileri",
          "Taşınmaza ilişkin bilgiler",
          "Alıcı adına kimlik beyan formu",
          "Satış bedeli",
          "Varsa vatandaşlık şerhi talebi",
        ],
      },
      {
        num: "3.3",
        title: "Tapu Müdürlüğünün İncelemesi",
        paragraphs: [
          "Başvurunun ardından tapu müdürlüğü aşağıdaki kontrolleri gerçekleştirir. İnceleme sonucunda uygun görülen başvurularda randevu onaylanır; eksik bulunması hâlinde işlem bekletilir.",
        ],
        bullets: [
          "Tapu kaydını inceler",
          "Yabancı edinim sınırlarını kontrol eder",
          "Askerî yasak bölge kontrolü yapar",
          "Ekspertiz raporunu değerlendirir",
          "Ödeme beyanını inceler",
        ],
      },
      {
        num: "3.4",
        title: "Randevu Günü Tapuda Yapılacak İşlemler",
        paragraphs: [
          "Randevu günü taraflar tapu müdürlüğünde hazır bulunur. Satış işlemi tapunun akit odasında gerçekleştirilir. İmza aşamasının tamamlanmasıyla birlikte taşınmazın mülkiyeti alıcıya geçmiş olur.",
        ],
        bullets: [
          "Yabancı alıcı bizzat geliyorsa yeminli tercüman; gelmiyorsa alıcı avukat",
          "Pasaport ve noter onaylı pasaport tercümesi",
          "Banka ödeme belgeleri",
          "Vatandaşlık başvurularında DAB belgesi",
        ],
        steps: [
          "Varsa noter sözleşmesini tercüman aracılığıyla okur",
          "Satış bedelini sorgular",
          "Ödeme beyanını teyit eder",
          "Vatandaşlık şerhini sisteme işler",
          "Taraflardan imzaları alır",
        ],
      },
      {
        num: "3.5",
        title: "Harçlar ve Masraflar",
        paragraphs: ["Tapuya girmeden önce ödenmesi gereken masraflar şunlardır:"],
        bullets: [
          "Tapu harcı (oranı genellikle %4 olup taraflarca paylaşılabilir)",
          "Döner sermaye ücreti",
          "Akit odasında herhangi bir ödeme alınmamaktadır",
        ],
      },
      {
        num: "3.6",
        title: "Vatandaşlık Dosyası Olan Satışlarda Ek Kontroller",
        paragraphs: ["Satışın vatandaşlık amacı taşıması hâlinde aşağıdaki ek kontroller uygulanır:"],
        bullets: [
          "DAB belgesi, satış bedeliyle uyumu açısından kontrol edilir",
          "Tapu kütüğüne 3 yıl süreyle satış yasağı şerhi konulur",
        ],
      },
    ],
  },

  /* ── BÖLÜM 4 ─────────────────────────────────────────────── */
  bolum4: {
    eyebrow: "Dördüncü Bölüm",
    title: "Uygunluk Belgesi (Taşınmaz Yatırım Tespit Belgesi)",
    intro:
      "Taşınmaz Yatırım Tespit Belgesi; yabancı yatırımcının gerçekleştirdiği taşınmaz alımının, Türk vatandaşlığı için gerekli yatırım şartlarını karşıladığını devletin resmî olarak onayladığı belgedir. Uygulamada bu belge; Uygunluk Belgesi, Citizenship Conformity Certificate veya Taşınmaz Uygunluk Yazısı gibi adlarla da anılmaktadır. Bu belge olmaksızın vatandaşlık başvurusu başlatılamaz.",
    denetim: {
      eyebrow: "4.2 – Belgenin Amacı ve Denetim Kapsamı",
      title: "Devletin İnceleme Kapsamı",
      bullets: [
        "Yatırımın fiilen gerçekleşip gerçekleşmediği",
        "Ödemenin banka sistemi üzerinden yapılıp yapılmadığı",
        "Döviz Alım Belgesinin (DAB) usulüne uygun düzenlenip düzenlenmediği",
        "Ekspertiz raporunun gerçeği yansıtıp yansıtmadığı",
        "Taşınmazın daha önce vatandaşlık başvurusunda kullanılıp kullanılmadığı",
        "Muvazaalı bir işlem bulunup bulunmadığı",
        "Satış bedelinin yapay biçimde şişirilip şişirilmediği",
        "Akraba veya ilişkili taraflar arasında bir satışın söz konusu olup olmadığı",
        "Projenin hukuki risk taşıyıp taşımadığı",
      ],
    },
    process: {
      eyebrow: "4.3 – Belgenin Alınma Süreci",
      title: "Üç Aşamalı Resmi Süreç",
      steps: [
        {
          num: "Adım 1",
          title: "Tapu Satışının Gerçekleştirilmesi",
          desc: "Satış işlemi sırasında ekspertiz raporu sisteme yüklenir, DAB dosyaya eklenir ve satış bedeli banka üzerinden ödenir. Ayrıca tapu kütüğüne taşınmazın 3 yıl süreyle satılamayacağına dair şerh işlenir. Bu şerh, vatandaşlık başvurusu açısından zorunlu bir unsurdur.",
        },
        {
          num: "Adım 2",
          title: "Dosyanın Merkeze Gönderilmesi",
          desc: "Tapu müdürlüğü, satış dosyasını Tapu ve Kadastro Genel Müdürlüğü Yabancı İşlemler Birimi'ne iletir. Bu başvuru alıcı tarafından ayrıca yapılmaz; işlem, tapu sistemi üzerinden otomatik olarak gerçekleştirilir.",
        },
        {
          num: "Adım 3",
          title: "Uygunluk Kararı",
          desc: "Merkez incelemesi sonucunda şartların sağlandığı tespit edilirse Taşınmaz Yatırım Tespit Belgesi düzenlenir ve karar Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü'ne bildirilir.",
        },
      ],
    },
    sure: {
      title: "İnceleme Süresi",
      desc: "İnceleme süresi ortalama 1–2 hafta arasındadır. Yoğunluk veya eksik evrak bulunması hâlinde bu süre uzayabilir.",
    },
    sonrasi: {
      title: "Belge Çıktıktan Sonraki Aşama",
      desc: "Taşınmaz Yatırım Tespit Belgesinin düzenlenmesiyle birlikte yatırım resmî olarak kabul edilmiş sayılır. Ardından yatırımcı ve varsa eşi Türkiye'ye geldikten sonra adlarına ikamet izni başvurusu yapılır ve vatandaşlık sürecine ilişkin işlemlere devam edilir.",
    },
  },

  cta: {
    title: "Taşınmaz Yatırımınızı Vatandaşlığa Dönüştürün",
    description:
      "Tapu incelemesinden uygunluk belgesine, DAB sürecinden vatandaşlık başvurusuna kadar her adımı hukuki güvenceyle yönetiyoruz.",
    primaryCta: "Ücretsiz Danışın",
    secondaryCta: "Sık Sorulan Sorular",
  },
};

/* ─── Data fetcher ────────────────────────────────────────────── */
type FonDictLike = {
  lang?: string;
  dir?: string;
  nav?: { services?: string };
  services_page?: { detail_back?: string };
};

export async function getGayrimenkulFonPageData(locale: string): Promise<GayrimenkulFonPageData> {
  const dict = (await getDictionary(locale)) as FonDictLike;
  return {
    lang: dict.lang ?? getSafeLocale(locale),
    dir: dict.dir === "rtl" ? "rtl" : "ltr",
    backLabel: dict.services_page?.detail_back ?? dict.nav?.services ?? "Yatırım Türleri",
    copy: TR_COPY,
  };
}
