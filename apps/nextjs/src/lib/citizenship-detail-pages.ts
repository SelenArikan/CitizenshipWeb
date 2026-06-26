import type { Metadata } from "next";

import type { OtherProgram, PageSection } from "@/components/ServicePageLayout";
import { getDictionary } from "@/lib/dictionary";
import { PASSPORT_ADVANTAGES_PAGE } from "@/lib/passport-advantages-page";
import { SEO_LOCALES, getSafeLocale, type SeoLocale } from "@/lib/seo";

const SITE_URL = "https://citizenshipweb.com";
const PAGE_PATH_PREFIX = "/citizenship";
const SUPPORTED_LOCALES = SEO_LOCALES;

type LocaleKey = SeoLocale;

export type CitizenshipDetailPageCopy = {
  metadata: {
    breadcrumbLabel: string;
    title: string;
    description: string;
  };
  hero: {
    summary: string;
    imageAlt: string;
  };
  sections: PageSection[];
};

export type CitizenshipDetailPageData = {
  slug: CitizenshipDetailSlug;
  lang: string;
  dir: "ltr" | "rtl";
  homeLabel: string;
  backLabel: string;
  relatedTitle: string;
  relatedLinks: OtherProgram[];
  consultationLabel: string;
  cta: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  copy: CitizenshipDetailPageCopy;
};

type CitizenshipDetailDictionaryLike = {
  lang?: string;
  dir?: string;
  nav?: {
    home?: string;
    mega_tc?: string;
    benefits?: string;
    item_cit_gen?: string;
    item_cit_process?: string;
    investment_real_estate?: string;
    item_more_green?: string;
    contact?: string;
    faq?: string;
  };
};

const UI: Record<
  LocaleKey,
  {
    relatedTitle: string;
    consultationLabel: string;
    ctaTitle: string;
    ctaDescription: string;
  }
> = {
  tr: {
    relatedTitle: "Diğer Başlıklar",
    consultationLabel: "Danışmanlık",
    ctaTitle: "Dosyanızı birlikte planlayalım",
    ctaDescription:
      "Uygunluk, belge akışı ve başvuru sırasını birlikte değerlendirelim.",
  },
  en: {
    relatedTitle: "Other Topics",
    consultationLabel: "Consultation",
    ctaTitle: "Let us plan your file together",
    ctaDescription:
      "We can review eligibility, document flow, and filing order together.",
  },
  ru: {
    relatedTitle: "Другие темы",
    consultationLabel: "Консультация",
    ctaTitle: "Давайте спланируем ваше досье вместе",
    ctaDescription:
      "Вместе оценим соответствие условиям, комплект документов и порядок подачи.",
  },
  ar: {
    relatedTitle: "مواضيع أخرى",
    consultationLabel: "استشارة",
    ctaTitle: "لنخطط ملفك معاً",
    ctaDescription:
      "يمكننا مراجعة الأهلية وتسلسل المستندات وترتيب التقديم معاً.",
  },
  fa: {
    relatedTitle: "سایر موضوعات",
    consultationLabel: "مشاوره",
    ctaTitle: "بیایید پرونده شما را با هم برنامه ریزی کنیم",
    ctaDescription:
      "می توانیم شرایط احراز، جریان مدارک و ترتیب ثبت پرونده را با هم بررسی کنیم.",
  },
};

const CITIZENSHIP_APPLICATION_PROCESS_TEXT = String.raw`Yatırım Yoluyla Türk Vatandaşlığı Başvurusu Süreci
Yatırım yoluyla Türk vatandaşlığı, Türk Vatandaşlığı Kanunu’nun istisnai vatandaşlık hükümleri kapsamında, kanunun öngördüğü belirli yatırım araçlarının kullanılması suretiyle gerçekleştirilen bir başvuru türüdür. Bu süreçte ilk ve en önemli adım, hangi yatırım aracı kullanılarak vatandaşlık başvurusu yapılacağının doğru şekilde belirlenmesidir. Çünkü yatırımın türüne göre hem yatırımın “vatandaşlığa uygun” hale getirilme yöntemi hem de yatırımın tamamlandığını ve vatandaşlık kriterlerini sağladığını teyit eden resmi belgeyi düzenleyen kurum değişmektedir.
Yatırımın vatandaşlık kriterlerine uygun olarak gerçekleştirildiğini gösteren resmi belgeye uygulamada “Uygunluk Belgesi” denilmektedir. Uygunluk belgesini düzenleyen hükümet kurumları, yatırım yöntemine göre farklıdır. Örneğin:
	•	Taşınmaz (gayrimenkul) satın alımı yöntemiyle yapılan yatırımlarda uygunluk belgesi Tapu Müdürlüğü süreçleri üzerinden alınır.
	•	Banka mevduat hesabında para tutma yöntemiyle yapılan yatırımlarda uygunluk belgesinin düzenlenmesi ve yatırımın uygunluğunun tespiti bakımından ilgili kurum BDDK’dır.
	•	BES (Bireysel Emeklilik Sistemi) üzerinden yapılan yatırımlarda ise uygunluk süreci ve uygunluk belgesi SEDDK tarafından yürütülür.
Büromuz, seçilecek yatırım yöntemine göre yatırımın baştan sona mevzuata uygun biçimde yapılandırılması, yatırımın vatandaşlık kriterlerine uygun hale getirilmesi, gerekli resmi kayıtların ve işlem akışının doğru kurulması ve nihayetinde ilgili kurumdan uygunluk belgesinin alınması süreçlerinin tamamını bütüncül biçimde yönetmektedir.
Uygulamada en sık karşılaşılan yöntemler; 400.000 USD değerinde taşınmaz satın alımı, 500.000 USD’nin bankada 3 yıl tutulması, ya da 500.000 USD’nin BES sistemine yatırılarak 3 yıl sistemde tutulması yöntemleridir. Her yöntemin kendine özgü teknik ve idari gereklilikleri olsa da, vatandaşlık başvurusunun iskeleti genel olarak aynı mantığa dayanır:
	•	Yatırımı vatandaşlık mevzuatına göre doğru yapmak,
	•	Uygunluk belgesini almak,
	•	Yatırımcı ve aile bireyleri için ikamet izni sürecini tamamlamak,
	•	Nüfus/vatandaşlık başvurusunu yapmak,
	•	Sürecin sonuçlanmasını takip etmek,
	•	Vatandaşlık onayı sonrası kimlik/pasaport işlemlerini tamamlamak.
Aşağıda, yatırım yoluyla vatandaşlık sürecinin en sık kullanılan yöntemleri olan taşınmaz satın alımı, banka mevduat hesabına yatırım ve BES sistemi üzerinden yapılacak yatırım süreçleri adım adım anlatılmaktadır.
1. Yatırım Aracının Seçilmesi ve Sürecin Planlanması
Süreç, başvurucu adına hangi yatırım yönteminin kullanılacağının belirlenmesiyle başlar. Bu aşamada yatırımcının ülke durumu, aile yapısı, Türkiye’ye giriş-çıkış planı, belgelerin temin edilebilirliği, vekâletname ile işlem yapılabilme ihtimali ve yatırımın finansal/operasyonel detayları birlikte değerlendirilir. Yatırım yöntemi seçildikten sonra, seçilen yöntem bakımından “vatandaşlık başvurusunun kurucu unsuru” sayılan işlemler (ödeme akışı, resmi kayıtlar, şerhler, uygunluk belgesi başvurusu) en baştan doğru kurgulanır.
1.1. Taşınmaz Satın Alımı Yönteminde Adım Adım Süreç
a) Taşınmazın İlk İncelemesi (Tapu ve Takyidat Kontrolü)
Öncelikle satın alınması planlanan taşınmazın tapu kaydı ve tapu takyidatı (kısıt/şerh/rehin/haciz/dava vb.) kaydı incelenir. Bu inceleme, taşınmazın ilk aşamada vatandaşlık kriterlerine uygun olup olmadığının anlaşılması açısından kritik önemdedir. Taşınmaz üzerinde devri engelleyen veya ileride başvuruyu riske sokabilecek kayıtlar varsa süreç daha baştan doğru şekilde yönlendirilir.
b) Ekspertiz Raporu Temini
Taşınmazın vatandaşlık açısından uygunluğunu netleştiren en önemli belgelerden biri ekspertiz raporudur. Bu rapor, taşınmazın değerinin ve niteliklerinin objektif şekilde ortaya konması bakımından temel dayanak niteliğindedir. Ekspertiz raporu alınmadan ve rapor değerlendirilmeden vatandaşlık sürecinin başlatılması uygulamada ciddi risk doğurabilir. Bu nedenle rapor temini, raporun kontrolü ve varsa rapora ilişkin risklerin yönetimi büromuzca yürütülür.
c) Ödeme Akışının Vatandaşlığa Uygun Şekilde Kurulması (Kurucu Unsur)
Taşınmaz satın alımı yoluyla vatandaşlık başvurularında en hassas aşama satış bedelinin ödenmesi ve bu ödemenin vatandaşlık mevzuatına uygun şekilde belgelenmesi aşamasıdır. Satış bedelinin satıcı hesabına gönderilmesi, bununla bağlantılı döviz alım belgesi ve banka kayıtlarının doğru kurulması, paranın usulüne uygun gönderilmesi gibi unsurlar, vatandaşlık başvurusunun “kurucu unsuru” sayılır ve hataya yer yoktur. Bu aşamanın doğru yürütülmemesi, yatırım yapılmış olsa dahi yatırımın vatandaşlık başvurusunda kullanılamaması, başvurunun reddi veya sürecin uzaması gibi sonuçlara yol açabilir. Büromuz, ödeme akışını baştan sona kontrol ederek işlemlerin doğru yapılmasını sağlar.
d) Tapu İşlemleri, Şerh ve Uygunluk Belgesi Başvurusu
Ödeme ve belgelerin tamamlanmasının ardından Tapu Müdürlüğü nezdinde satış işlemleri yapılır. Vatandaşlık yöntemi bakımından ayrıca taşınmaza 3 yıl boyunca satılmayacağına ilişkin şerh konulması talep edilir ve devamında uygunluk belgesi başvurusu gerçekleştirilir. Uygunluk belgesinin hazırlanma süresi, Tapu Müdürlüklerinin dönemsel yoğunluğuna göre değişebilmekle birlikte uygulamada ortalama yaklaşık 2-3 hafta içinde sonuçlanabilmektedir.
1.2. Banka Mevduat Hesabına 500.000 USD Yatırım Yoluyla Vatandaşlık Başvurusu Süreci (3 Yıl Tutma Şartı)
Bu yöntemde yatırımcı, Türkiye’de faaliyet gösteren bir bankada kendi adına en az 500.000 USD veya karşılığı döviz tutarında mevduat hesabı açar ve bu tutarı 3 yıl boyunca çekmeyeceğini taahhüt eder. Uygulamada bankaca ilgili tutar üzerine 3 yıl süreli blokaj/taahhüt tesis edilir ve yatırımın vatandaşlık kriterlerine uygun biçimde kurgulanmasını takiben, mevduat yöntemine ilişkin yatırımın uygunluğunu tevsik eden Uygunluk Belgesi alınır (bu yöntem bakımından uygunluk tespit süreci BDDK çerçevesinde yürütülür). Uygunluk belgesinin temini sonrasında ise sırasıyla J bendi ikamet izni ve ardından istisnai vatandaşlık başvurusu (VAT-4) aşamasına geçilir. Bu yöntemde en kritik risk, paranın yatırılmış olmasına rağmen blokaj/taahhüt mekanizmasının hatalı kurulması veya para hareketinin doğru belgelendirilememesidir; 3 yıl dolmadan paranın çekilmesi veya blokajın kaldırılması yatırım şartını bozarak süreci doğrudan riske sokar.
Bu yöntemde avukatın rolü, “bankaya para yatırıldı” noktasında bitmez; tam tersine, başvurunun kurucu unsuru sayılan işlem akışının vatandaşlık mevzuatına uygun şekilde kurulması ve ispatlanabilir hale getirilmesi gerekir. Büromuz; banka seçimi ve hesap açılışının koordinasyonu, para transferi/döviz işlemlerinin doğru yöntemle yapılması, 3 yıllık blokaj-taahhüt metinlerinin ve banka yazışmalarının mevzuata uygun şekilde hazırlanması, uygunluk belgesi sürecinin eksiksiz yürütülmesi ve sonrasındaki ikamet izni ile vatandaşlık başvurusu dosyasının tek merkezden yönetilmesi suretiyle yatırımın “vatandaşlığa dönüşmesini” güvenli hale getirir.
1.3. BES Sistemiyle 500.000 USD Yatırımı (3 Yıl Sistemde Tutma Şartı)
Bu yöntemde yatırımcı, bir emeklilik şirketi üzerinden “vatandaşlık” ibareli BES planına dahil olur ve en az 500.000 USD veya karşılığı döviz tutarını katkı payı olarak yatırır. Para akışı, mevzuata uygun biçimde genellikle dövizin bankaya yatırılması, bunun TCMB’ye satış yoluyla TL’ye çevrilmesi ve 3 yıllık süre, katkı payının emeklilik şirketine intikaliyle sözleşmenin yürürlüğe girdiği tarihten itibaren başlar. Yatırımın vatandaşlık kriterlerine uygun yapıldığını teyit eden Uygunluk Belgesi/uygunluk yazısı bu yöntemde SEDDK tarafından düzenlenir; uygunluk yazısı temin edildikten sonra yine J bendi ikamet izni ve devamında VAT-4 vatandaşlık başvurusu yapılır. Vatandaşlık amaçlı BES planlarında ilk 3 yıl boyunca mevzuat kaynaklı bazı sınırlamalar bulunur; özellikle başka şirkete aktarım (transfer) yapılamaması, plan değişikliği yapılamaması ve belirli fon türlerine (unvanında “yabancı” veya “dış borçlanma araçları” ibaresi bulunan fonlar gibi) ilişkin kısıtlar sürecin doğru planlanmasını zorunlu kılar. 3 yıl dolmadan sistemden çıkış veya taahhüdün bozulması vatandaşlık sürecini ciddi şekilde riske sokabilir.
BES yönteminde avukatın rolü; yatırımın yalnızca finansal olarak yapılmasını değil, SEDDK uygunluk yazısına giden yolun sorunsuz kurulmasını sağlamaktır. Büromuz; emeklilik şirketi seçimi ve sözleşme kurgusunun vatandaşlık planına uygun yapılması, banka-TCMB döviz satış sürecinin doğru belgelenmesi, katkı payının “nakden intikal” şartını sağlayacak şekilde organize edilmesi, ilk 3 yıl kısıtlarının yatırımcıya açık ve yazılı şekilde yönetilmesi, SEDDK uygunluk yazısı başvurusunun eksiksiz dosyalanması ve uygunluk yazısı sonrasında ikamet izni ile vatandaşlık başvurularının bütünleşik şekilde takip edilmesi hizmetlerini tek elden sunar. Bu sayede süreç, farklı kurumlar arasında parçalanmadan; zaman, belge ve mevzuat riskleri en aza indirilerek ilerletilir.
2. Uygunluk Belgesi Sonrası: Vatandaşlık Dosyasının Hazırlanması
Uygunluk belgesi alındıktan sonra vatandaşlık başvurusu için gerekli belgeler hazırlanır. Evrak listesi genel olarak matbu bir çerçeveye sahip olsa da, başvurucunun ülkesi, aile üyesi sayısı, belgelerdeki özel durumlar ve ilgili ülke temsilciliğinin uygulaması nedeniyle her dosya kendi içinde farklılaşabilir. Bazı ülkelerin Türkiye’deki temsilcilikleri, vekâletname ile belge düzenleyebilirken; bazı temsilcilikler vekâletname kabul etmemekte veya belirli belgeleri düzenlememektedir. Bu nedenle dosya hazırlığı her başvuru için “standart listeyi sunmak”tan ziyade “dosyaya özgü riskleri tespit edip yönetmek” olarak ele alınmalıdır.
3. İkamet İzni Aşaması (J Bendi)
Yatırım yoluyla vatandaşlık sürecinde uygulamada kritik aşamalardan biri, başvurucu ve varsa eşinin Türkiye’de geçerli bir “J bendi ikamet izni” alması gereğidir. Yapılan yatırım, yatırımcı ve ailesinin J bendi ikamet izni almasına imkân sağlar.
Bu başvurunun önemli bir özelliği şudur: J bendi ikamet izni başvurusu için yatırımcı ve varsa eşinin Türkiye’ye gelmesi gerekir. Çünkü ikamet izni sürecinde Göç İdaresi sistemine parmak izi verilerinin işlenmesi zorunludur. Bu nedenle önce parmak izi süreci tamamlanır, ardından gerekli evraklarla birlikte ilgili Göç İdaresi Müdürlüğü’ne ikamet izni başvurusu yapılır. İkamet izni başvurusuna da kişiler bizzat katılmalıdır.
İkamet izni başvurusu yapıldıktan sonra, kişinin Türkiye’de vize/ikamet ihlali yoksa çoğu durumda onay sürecinin tamamlanmasını beklemek için Türkiye’de sürekli kalmasına gerek olmayabilir. İkamet izni onaylandığında bir sonraki aşamaya geçilir.
Vatandaşlık başvurusunun ön koşulu olan ikamet izninde bilinmesi gereken önemli bir ayrıntı ise yatırımcı ve eşinin ikamet izni alması bir ön koşul olarak belirlenmişken çocuklar için böyle bir şart bulunmamasıdır.
4. Vatandaşlık Başvurusu (Nüfus Müdürlüğü / İstisnai Vatandaşlık)
İkamet izni alındıktan ve vatandaşlık başvurusu için gerekli evraklar tamamlandıktan sonra, vatandaşlık başvurusu aşamasına geçilir. Bu aşamada başvurucular (çocuklar hariç) başvuru sırasında Nüfus Müdürlüğü’nde bizzat bulunmalı ve gerekli evrakları imzalamalıdır. Uygulamada bu aşamada başvurucuların fotoğraf çekimi yapılır ve parmak izi verisi ikinci kez alınır. Evrakların teslim edilmesiyle birlikte vatandaşlık başvurusu tamamlanmış olur.
Bu noktada özellikle vurgulanması gereken husus şudur: Başvurucu ve varsa eşi, ikamet izni ve vatandaşlık başvurusu aşamalarında iki kez fiziken Türkiye’de bulunarak başvuruya katılmak ve biyometrik işlemleri (parmak izi/fotoğraf) tamamlamak durumundadır. Bu zorunluluk, seyahat planlaması açısından sürecin başında doğru şekilde organize edilmelidir.
4.1. Vatandaşlık Başvurusuna Kimler Eklenebilir? Tek Bir Yatırımla Kimler Vatandaşlık Alabilir?
Kimler Başvurabilir?
Yabancı uyruklu gerçek kişiler aşağıdaki şartları taşımaları halinde tek bir uygun yatırım yaparak vatandaşlık başvurusu yapabilirler:
	•	Reşit (18 yaşını doldurmuş) olmak,
	•	Ayırt etme gücüne sahip olmak,
	•	Kamu güvenliği açısından sakıncası bulunmamak.
Yatırımı Yapan Kişi Dışında Kimler Vatandaşlık Alabilir?
Tek yatırım yapan kişi ile birlikte aşağıdaki aile bireyleri de aynı başvuru dosyasında Türk vatandaşlığı alabilir:
	•	Eşi,
	•	18 yaş altı çocukları (Mısır uyruklu kişiler için 21 yaş, Cezayir uyruklu kişiler için 19 yaş).
18 yaş üstü çocuklar için ayrı başvuru ve ayrı şartlar gerekir.
Kimler Bu Yoldan Vatandaşlık Alamaz?
	•	18 yaş altı, tek başına başvuran kişiler,
	•	Açık adli kayıtları nedeniyle kamu güvenliği açısından sakıncalı görülen kişiler,
	•	Yatırım yapmış olsa da bu şartı mevzuatın gösterdiği rutin şartlara göre yerine getirmeyenler,
	•	3 yıl elde tutma şartını ihlal edenler vatandaşlık almış olsalar dahi vatandaşlıkları düşer.
İstisnai Durumlar
Bazı ülkelerde birden fazla evlilik yasal kabul edilmektedir. Türk Medeni Kanunu’na göre birden fazla evlilik yasal kabul edilmemekte ve bu durum kamu düzeninden sayılmaktadır. Hal böyleyken yatırımcının birden fazla evliliği bulunuyorsa da yalnızca ilk eşi vatandaşlığa hak kazanabilecektir; buna karar vermek için evlilik belgesindeki tarihlere bakılır. Ancak birden fazla eşi bulunan kişilerin diğer eşleri değil fakat ikinci, üçüncü veya dördüncü eşlerinden olan çocukları yatırımcıyla birlikte Türk vatandaşlığı almaya hak kazanır.
Bir diğer karşılaşılan durum ise evlilik dışı çocukların durumudur. Türk vatandaşlığı başvurusunda çocukların evlilik birliği içinde veya dışında dünyaya gelmiş olması başvuru sonucu açısından bir önem taşımamaktadır. Evlilik dışında dünyaya gelen çocuklar da yatırımcıyla birlikte Türk vatandaşlığına hak kazanır. Ancak yukarıda sayılan bu istisnai durumlarda ek evraklar talep edilir. Bu evrak çeşitlerini “Sık Sorulan Sorular” bölümünde bulabilirsiniz.
5. Başvurunun Sonuçlanması ve Vatandaşlık Sonrası Kimlik / Pasaport İşlemleri
Vatandaşlık başvurusunun sonuçlanma süresi; nüfus birimlerinin iş yoğunluğu, başvurucunun ülke durumu, güvenlik incelemeleri ve evrakların açıklığı gibi faktörlere bağlı olarak dönemsel değişiklik gösterebilir. Uygulamada ortalama sonuçlanma süresi çoğunlukla 5–6 ay bandında ifade edilebilmektedir.
Vatandaşlık başvurusu onaylandıktan sonra, onay tarihinden itibaren Türk vatandaşlığını kazanan başvurucular ve aile bireyleri için Türk kimlik kartı ve pasaport başvurusu yapılır. Bu başvurular Türkiye’de nüfus müdürlüklerinden yapılabildiği gibi, gerekli durumlarda dış temsilcilikler aracılığıyla da gerçekleştirilebilir; bu işlemler için randevular avukatlar tarafından alınmaktadır. Pasaport ve kimlik başvurularında kişilerin bu işlemlerini Türkiye’deki Nüfus ve Vatandaşlık İşleri Müdürlüklerinden yapmaları tavsiye edilir; zira kimlik ve pasaportun hazırlanması ve vatandaşlara teslim süreçleri dış temsilciliklerde uzun sürebilmekteyken Türkiye’deki Nüfus ve Vatandaşlık İşleri Genel Müdürlüklerinde çok daha hızlı tamamlanabilmektedir.
Bu aşamada bilinmesi gereken önemli husus ise; pasaport başvurusunda başvurucuların tümünün (çocuklar dâhil) başvuruda hazır bulunması gerekliliğidir.
Hizmet Kapsamımız
Büromuz; yatırım yönteminin seçimi, yatırımın vatandaşlığa uygun şekilde yapılandırılması, tapu/ekspertiz/ödeme akışı kontrolleri, BES yatırımlarında yatırımların vatandaşlığa uygunluğu, ödemelerin usulüne uygun şekilde yapılması, sözleşmelerin usulüne uygun şekilde düzenlenmesi ve kontrolü, Banka Mevduat Hesabı yatırımlarında sözleşmelerin incelenmesi, imzalanması, bankaya gönderilecek paranın usulüne uygun şekilde gönderimi, gerekli evrakların düzenlenmesi, uygunluk belgesi sürecinin yönetimi, ikamet izni başvurusu hazırlığı ve takibi, vatandaşlık dosyasının hazırlanması ve nüfus başvurusunun organize edilmesi, kimlik ve pasaport başvurusu dâhil olmak üzere süreci uçtan uca yönetir.
Sık Sorulan Sorular
1) Yatırım yöntemini seçerken en kritik nokta nedir?
En kritik nokta, yatırımın “vatandaşlığa uygun hale getirilmesi”dir. Yatırım yapılması tek başına yeterli değildir; yatırımın ödeme akışı, resmi kayıtları, şerhleri ve uygunluk belgesi süreci hatasız kurulmalıdır. Örneğin, gayrimenkul satın alınıyorsa bu gayrimenkulün temiz, yani hukuki bir sorununun bulunmaması en önemli konulardan biridir.
2) Uygunluk belgesi neden bu kadar önemlidir?
Uygunluk belgesi, yaptığınız yatırımın vatandaşlık kriterlerini sağladığını resmi olarak teyit eden belgedir. Vatandaşlık dosyasında yatırım kriterini ispatlayan ana dayanak belge niteliğindedir.
3) Uygunluk belgesini hangi kurum verir?
Yatırım türüne göre değişir. Taşınmazda Tapu süreçleri, banka mevduatında BDDK, BES’te SEDDK uygunluk sürecini yürütür.
4) Taşınmaz satın alımında en riskli aşama hangisidir?
Satış bedelinin ödenmesi ve bu ödemenin doğru şekilde belgelenmesi en kritik aşamadır. Bu aşama başvurunun “kurucu unsuru” olduğundan hataya yer yoktur.
5) J bendi ikamet izni için Türkiye’ye gelmek zorunlu mudur?
Evet. Parmak izi verisi Göç İdaresi sistemine işlendiği için yatırımcı ve varsa eşinin fiziken Türkiye’ye gelmesi gerekir.
6) Vatandaşlık başvurusu sırasında da Türkiye’de bulunmak gerekir mi?
Evet. Başvurucular (çocuklar hariç) nüfus müdürlüğünde bizzat bulunur, imza atar; fotoğraf ve parmak izi işlemleri yapılır.
7) Süreç ne kadar sürer?
Sonuçlanma süreleri dönemsel değişmekle birlikte uygulamada çoğu dosyada ortalama 5–6 ay bandı konuşulmaktadır. Süre; ülke durumu, incelemeler ve evrakların açıklığına göre uzayabilir veya kısalabilir.
8) Vekâletname ile tüm işlemler yapılabilir mi?
Evet, bütün işlemler vekâletname ile yürütülebilse de ikamet izni ve vatandaşlık başvurularında biyometrik işlemler nedeniyle başvurucu ve eşin en az iki kez fiziken süreçlere katılması gerekir. Bu katılımlar birkaç dakika ile sınırlı olmakla birlikte iki randevu ortalama bir hafta içerisinde gerçekleşmektedir.
9) Vatandaşlık onayı sonrası kimlik ve pasaport nereden alınır?
Türkiye’de nüfus müdürlüklerinden veya şartlara göre Türkiye’nin dış temsilcilikleri aracılığıyla başvurusu yapılabilir.`;

const BES_CITIZENSHIP_TEXT = String.raw`Bireysel Emeklilik Sistemi (BES) ve Türk Vatandaşlığı

Türk vatandaşlığının yatırım yoluyla, istisnai yoldan kazanılması kapsamında başvurulabilecek yöntemlerden biri de kanunda öngörülen şekil ve şartlara uygun olarak Bireysel Emeklilik Sistemi’ne yatırım yapılmasıdır. Bu başvuru yolunda yabancı yatırımcı, belirli tutardaki katkı payını vatandaşlık başvurusuna uygun özel bir BES planı kapsamında sisteme aktararak, mevzuatta öngörülen süre boyunca sistemde kalmayı taahhüt eder. Bu nedenle BES yatırımı yoluyla vatandaşlık başvurusu, yalnızca bir emeklilik sözleşmesi kurulmasından ibaret olmayıp; yatırım tutarının aktarımı, fon planının seçimi, üç yıllık taahhüt süreci ve yetkili kurumlar nezdinde uygunluk belgesinin alınması gibi aşamaların hukuki ve teknik olarak doğru yürütülmesini gerektirir.

Bireysel Emeklilik Sistemi (BES) Nedir?
Bireysel Emeklilik Sistemi (BES), Türkiye’de gönüllü olarak katılınan ve emeklilik döneminde birikim oluşturmayı amaçlayan, katkı paylarınızın “emeklilik yatırım fonları”nda değerlendirildiği uzun vadeli bir tasarruf sistemidir. Sisteme bir emeklilik şirketi üzerinden bir sözleşme ile girilir; siz düzenli ya da tek seferlik katkı payı ödersiniz, bu tutarlar seçtiğiniz fonlarda yatırıma yönlendirilir ve fonların performansına göre birikiminiz artabilir veya azalabilir.

BES, banka mevduatı gibi “anapara veya kur garantisi” veren bir ürün değildir; birikiminizin değeri fonların piyasa performansına bağlıdır. Bununla birlikte sistemin önemli bir teşviki “Devlet katkısı” uygulamasıdır.

BES Emeklilik Sistemine Yapılacak Yatırımla Türk Vatandaşlığına Başvurmak Mümkün müdür?
Türkiye’de, belirli büyüklükte bir BES yatırımı yaparak “istisnai Türk vatandaşlığına başvuru hakkı” doğuran özel bir uygulama bulunmaktadır. Bu yol; en az 500.000 ABD Doları veya karşılığı diğer yabancı para döviz tutarındaki katkı payının, “vatandaşlık” ibaresi taşıyan özel bir BES planı kapsamında ve en az 3 yıl sistemde tutulması esasına dayanır.
Türkiye Cumhuriyet Merkez Bankası (TCMB) ile yapılan satış süreci tamamlandıktan sonra elde edilen TL tutarın emeklilik şirketi hesaplarına nakden intikal etmesiyle BES sözleşmesi yürürlüğe girer ve 3 yıllık asgari sistemde kalma süresi bu tarihte başlar.
Vatandaşlık planınızın içinde tanımlı fon havuzu kapsamında kalmak kaydıyla, Türkiye’deki diğer fon kategorilerine (altın, gümüş, platin, katılım esaslı fonlar vb.) geçişler; planın sunduğu seçenekler ve mevzuattaki genel fon değişikliği kuralları çerçevesinde mümkün olabilir. Ancak unvanında “yabancı” veya “dış borçlanma araçları” ibaresi bulunan fonlar, bu vatandaşlık planlarında baştan dışarıda bırakıldığından söz konusu iki tür etikete sahip fonlara geçiş yapılamaz.
Buradaki pratik sınır şudur: Emeklilik şirketinizin vatandaşlık planı için tanımladığı fonlar belirlidir ve fon dağılımınızı yalnızca bu menü içinde yaparsınız. Yani uygulama, “Türkiye’deki her fona serbestçe geçiş” değil; “planın izin verdiği fonlar içinde fon dağılımının yönetilmesi” şeklinde işler.
BES Sistemi Kur Koruması Sağlar mı?
Kur koruması konusuna, özellikle yabancı yatırımcılar açısından açık ve net yaklaşmak gerekir. Vatandaşlık BES süreci; dövizin TCMB aracılığıyla TL’ye çevrilip BES fonlarına yönlendirilmesi mantığıyla kurgulandığı için, bankalardaki “kur korumalı mevduat” benzeri otomatik bir kur garantisi mekanizması olarak sunulmamalıdır.
Yatırımcı fiilen TL bazlı fonlarda yatırım yapacağı için birikimin TL getirisi seçilen fonların performansına bağlıdır; USD bazında bakıldığında ise TL’nin döviz karşısındaki hareketi ayrıca etki eder. Buna karşılık mevzuat, kur hareketleri nedeniyle sonradan bakiyenin 500.000 USD karşılığının altına inmesinin vatandaşlık başvurusunu veya kazanımını otomatik olarak bozmayacağını da açıkça düzenlemektedir.
Örneğin, 500.000 USD ilk işlem gününde satılarak TL’ye çevrilip elde edilen tutarın tamamıyla altın alınması durumunda; 3 yılın sonunda altın yine aynı bankaya satılıp para, TL veya USD olarak çekilebilir.
BES Sistemiyle Vatandaşlık Başvurusunda 3 Yıllık Taahhüt Süresinin Sonunda Sözleşmenin Akıbeti Ne Olur?
“3 yıl sonunda yatırılan paranın akıbeti ne olur?” sorusuna ilişkin olarak; bu modelde 3 yıllık süre, vatandaşlığa ilişkin taahhüt ve koruma süresidir. 3 yıl dolduğunda BES sözleşmesi otomatik olarak sona ermez. Birikim sistemde kalmaya devam edebilir ve fonlarda değerlendirilmeyi sürdürebilir; ayrıca istenmesi hâlinde toplu çekim, kısmi çekim ya da programlı geri ödeme gibi seçeneklerle birikimin geri alınması planlanabilir.
Mevzuat metnindeki örnek bilgilendirme bölümünde de, birikiminizin henüz ödenmemiş kısmının BES’te kalıp getiri elde etmeye devam edebileceği; hesabınızda kalan tutar için fon dağılımı değişikliği yapabileceğiniz ve başka bir şirkete aktarım hakkınızı kullanabileceğiniz ifade edilmektedir. Fon dağılımı değişikliği sayısı çalışılan şirkete göre farklılık göstermekle birlikte, genelde 6 ile 12 kez fon dağılımı değişikliği yapılabilir. Bu şirketler, çoğunlukla bankaların kurduğu fon şirketleridir.
Bu durum, vatandaşlık planlarında ilk 3 yıl boyunca uygulanan “aktarım yasağı” kuralıyla birlikte değerlendirildiğinde şu anlama gelir: 3 yıl tamamlanmadan şirket değişimi veya aktarım yapılamaz; 3 yılın sonunda ise genel BES aktarım ve plan değişikliği haklarınız (o tarihteki mevzuat ve sözleşme koşullarına tabi olmak üzere) normal çerçevesine döner.
“Kesinti olur mu?” sorusunda ise iki ayrı kesinti türünün ayrı ayrı değerlendirilmesi gerekir. Birincisi, vatandaşlık planlarına özgü açık bir avantajdır: giriş aidatı ve yönetim gider kesintisi alınmaması. Bu durum, özellikle yüksek tutarlı girişlerde önemli bir maliyet avantajı yaratır. İkincisi ise sistemden ayrılırken veya ödeme alınırken getiriler üzerinden uygulanabilen vergi kesintileri ile devlet katkısında hak ediş nedeniyle oluşan kayıplardır. Genelgenin bilgilendirme kısmında, toplu para çekimi veya programlı geri ödemede elde edilmiş ek getiri üzerinden net %5 oranında vergi kesintisi yapılacağı belirtilmiştir.
BES Sistemiyle Vatandaşlık Başvurusunda Bulunduğum Takdirde Yatırım Yaptığım Fonu Değiştirebilir miyim?
BES sistemi ile yapılacak vatandaşlık başvurusunda fon değiştirme konusunda en net özet şudur: Vatandaşlık BES planlarında, “yabancı” veya “dış borçlanma araçları” ibareli fonlara yer verilmez ve bu fonlar tercih edilemez. Bunun dışındaki fonlar için ise geçiş; planın sunduğu fon seti içinde ve BES’in genel fon dağılımı değişikliği kuralları çerçevesinde yapılabilir.
Örneğin altın fonu alınmışken, altın tutarının bir kısmıyla ya da tamamıyla gümüş fonuna geçilebilir. Ancak ilk 3 yıl boyunca plan değişikliği ve başka bir şirkete aktarım yapılması yasaktır. 3 yılın sonunda ise birikiminizi BES içinde tutmaya devam edebilir, fon dağılımınızı değiştirebilir; isterseniz banka ile yapılan sözleşme kapsamında olmak üzere birikiminizi toplu veya programlı şekilde çekebilirsiniz.
BES Sistemiyle Vatandaşlık Başvurusunda Uygunluk Belgesine Başvuru İçin İstenecek Bilgi ve Belgeler Nelerdir? Uygunluk Belgesi Başvurusuna Kadar İzlenecek Süreç Nasıl İlerler?
Uygulamada emeklilik şirketleri; SEDDK başvurusu ve iç kontrol süreçleri için yatırımın akışını ispatlayan belgeleri talep etmektedir. Tipik olarak aşağıdaki belgeler bu dosyada yer almakta olup söz konusu belgeler, banka ile çalışan kendi bünyelerindeki fon şirketi tarafından hazırlanmaktadır:
	•	Yatırımcının pasaport örneği ve kimlik tespiti dokümanları
	•	3 yıl sistemde kalma taahhüdü (vatandaşlık planı kapsamında)
	•	Döviz veya efektifin bankaya yatırıldığını ya da transfer edildiğini gösteren banka dekontu, SWIFT veya muhasebe fişi benzeri kayıtlar
	•	Dövizin banka aracılığıyla TCMB’ye satıldığını gösteren belge veya işlem kaydı
	•	Döviz satışından elde edilen TL’nin katkı payı olarak emeklilik şirketi hesabına intikal ettiğini gösteren dekont veya kayıt
BES ile yatırım yoluyla Türk vatandaşlığı sürecinde başvuru, iki paralel hat üzerinden ilerler:
	•	(i) BES yatırımının usule uygun yapıldığının SEDDK tarafından tespiti ve bunun sonucunda verilen uygunluk yazısı.
	•	(ii) Bu uygunluk yazısı ve standart vatandaşlık başvuru dosyasıyla Nüfus ve Vatandaşlık tarafında yapılan istisnai vatandaşlık (VAT-4) başvurusu.
Başvuru Süreci
Yabancı yatırımcı önce Türkiye’de faaliyet gösteren bir emeklilik şirketi üzerinden “vatandaşlık” kapsamındaki BES planına dâhil olur. Teklif ve sözleşme aşamasında emeklilik şirketi, yatırımcıdan özellikle şu bilgileri talep eder:
	•	İkamet izni başvurusunda bulunulacak valilik bilgisi,
	•	Pasaport örneği,
	•	Üç yıl sistemde kalma taahhüdü.
Bunlara ek olarak, ilk üç yıl boyunca uygulanacak plan değişikliği ve aktarım kısıtları konusunda yatırımcıya bilgilendirme yapılır. Yatırımcı, emeklilik şirketinin yönlendirdiği bankaya katkı payı tutarındaki dövizi yatırır; döviz, TCMB’ye satılarak TL’ye çevrilir ve TL tutarın emeklilik şirketi hesaplarına nakden intikal ettiği anda BES sözleşmesi yürürlüğe girer. Böylece vatandaşlık kriteri açısından kritik olan 3 yıllık asgari sistemde kalma süresi de bu tarihten itibaren işlemeye başlar.
Bu yatırım işlemi tamamlandıktan sonra emeklilik şirketi, sözleşmenin yürürlük tarihinden itibaren 5 iş günü içinde (genelgede sayılan belgelerle) SEDDK’ya “uygunluk belgesi/uygunluk yazısı” başvurusunda bulunur. SEDDK incelemesi olumlu sonuçlanırsa uygunluk yazısı, yatırımcıya iletilmek üzere emeklilik şirketine gönderilir; aynı zamanda Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü, Göç İdaresi Başkanlığı ve ilgili Valilik (İl Göç İdaresi Müdürlüğü) ile de paylaşılır. Uygunluk yazısı, vatandaşlık dosyasında “BES yatırımıyla yatırım kriterinin sağlandığını” gösteren temel resmî referanstır.
BES’e Özgü (SEDDK Uygunluk Sürecinde) Verilen Belgeler ve Bilgiler
Vatandaşlık amaçlı BES başlatılırken emeklilik şirketine verilmesi beklenen temel set; pasaport örneği, 3 yıl sistemde kalma taahhüdü ve (ikamet veya uzun dönem ikamet süreçleri de planlanıyorsa) başvurulacak valilik bilgisi şeklinde özetlenebilir. Uygunluk yazısının düzenlenmesi de bu verilerin ve yatırım akışının (bankaya yatırma → TCMB’ye satış → TL’nin şirkete intikali → sözleşmenin yürürlüğe girmesi) mevzuata uygunluğunun teyidiyle tamamlanır.
BES Sistemiyle Vatandaşlık Başvurusu Süreç Akışı
BES yoluyla Türk vatandaşlığı, “yatırım yoluyla istisnai vatandaşlık” kapsamında tanınan bir başvuru hakkıdır. Bu yöntemde yabancı yatırımcı; Türkiye’de faaliyet gösteren bir emeklilik şirketi üzerinden “vatandaşlık” ibareli BES planına dâhil olur, en az 500.000 USD veya karşılığı döviz tutarında katkı payı yatırır ve bu tutarı en az 3 yıl boyunca sistemde tutmayı taahhüt eder.
Sürecin temel mantığı; yatırımın mevzuata uygun şekilde yapıldığının ve 3 yıl boyunca korunacağının Sigortacılık ve Özel Emeklilik Düzenleme ve Denetleme Kurumu (SEDDK) tarafından tespit edilmesi ve bu tespitin bir uygunluk yazısı/uygunluk belgesi ile resmîleştirilmesidir.
Süreç Akışı (Yatırımdan Vatandaşlık Başvurusuna)
	•	Emeklilik şirketi üzerinden vatandaşlık planının kurulması: Yatırımcı adına “vatandaşlık” ibareli emeklilik planı ile yeni bir BES sözleşmesi kurulur. Vatandaşlık planları, yalnızca bu amaçla düzenlenen planlardır ve mevzuatta özel şekilde tanımlanır. Bu şirketin tespiti için aslında önce çalışılacak bankanın tespiti gerekir; bankanın kurduğu fon kuruluşuyla çalışılması daha pratik olacaktır.
	•	Döviz transferi ve TL’ye dönüşüm: Yatırım tutarı, emeklilik şirketinin yönlendirdiği bankaya döviz olarak yatırılır veya transfer edilir; vatandaşlık uygulaması kapsamında döviz, banka aracılığıyla TCMB’ye satılarak TL’ye çevrilir.
	•	Katkı payının BES’e intikali ve sürenin başlaması: Döviz satışından elde edilen TL tutar, emeklilik şirketi hesaplarına nakden intikal ettiği anda katkı payı olarak BES’e yatırılmış sayılır. Üç yıllık “sistemden çıkmama” süresi de bu yürürlük ve ödeme esasına göre başlar.
	•	SEDDK uygunluk belgesi (uygunluk yazısı): Emeklilik şirketi, yatırımın şartlara uygun yapıldığını tevsik eden bilgi ve belgelerle SEDDK’ya başvurur; inceleme olumlu ise SEDDK tarafından uygunluk yazısı düzenlenir. Bu yazı, vatandaşlık başvurusunda yatırım kriterinin BES ile sağlandığını gösteren en kritik resmî belgedir ve ilgili kamu kurumlarıyla da paylaşılır.
	•	Vatandaşlık başvurusu öncesinde gereken ikamet izni başvurusu: Vatandaşlık başvurusuna temel evrak teşkil eden uygunluk belgesi temin edildikten sonra vatandaşlık başvuru sürecine geçilebilir. İstisnai yoldan vatandaşlık başvurusunun ön koşulu olan ikamet izni başvurusu, Göç İdaresi Müdürlüğü’ne yapılır. Bu ikamet izni türü; 6458 sayılı Yabancılar ve Uluslararası Koruma Kanunu’nun 31. maddesinin (j) bendinde belirtilen yatırımcı ikamet iznidir. Yatırım neticesinde düzenlenen uygunluk belgesi, aynı zamanda bu ikamet iznine başvurma hakkı tanıyan bir belgedir. Gerekli diğer evraklarla birlikte Göç İdaresi Müdürlüğü’ne ikamet izni başvurusunda bulunulur; bu aşamada yatırımcı ve varsa eşinin Göç İdaresi Müdürlüğü’nde hazır bulunması ve parmak izi vermesi gerekir. Gerekli evraklar teslim edilip yatırımcıların parmak izi verisi de alındıktan sonra ikamet izni başvurusu kayda alınmış olur. İkamet izni onaylandıktan sonra (dönemsel yoğunluğa bağlı olarak yaklaşık 10-15 gün) vatandaşlık başvurusu için son aşamaya geçilir.
	•	İstisnai vatandaşlık başvurusu (VAT-4): Uygunluk yazısı alındıktan sonra istisnai vatandaşlık başvuru dosyası hazırlanır ve Türkiye içinde Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü üzerinden başvuru yapılır. Başvurunun temel formu VAT-4’tür. Posta ile başvuru kabul edilmez. Yatırımcı ve varsa eşi, bu başvuru sırasında Nüfus ve Vatandaşlık İşleri Müdürlüğü’nde hazır bulunmalıdır.
Not: Yatırım yoluyla vatandaşlık başvurularında, mevzuat gereği millî güvenlik ve kamu düzeni değerlendirmeleri ile idari incelemeler sürecin bir parçasıdır. Dosya yönetiminde en önemli husus, yatırımın akışının (banka → TCMB satışı → BES’e intikal) eksiksiz ve ispatlanabilir şekilde kurulmasıdır.
Vatandaşlık Planlarında Kritik Sınırlamalar (3 Yıl Boyunca)
Vatandaşlık amaçlı BES planları, normal BES sözleşmelerinden bazı yönleriyle ayrılır. Mevzuat; bu planlarda giriş aidatı ve yönetim gider kesintisi alınmayacağını, ayrıca fon evreni ve bazı işlemler üzerinde sınırlama bulunduğunu açıkça düzenlemektedir. Özellikle:
	•	Unvanında “yabancı” veya “dış borçlanma araçları” ibaresi bulunan fonlara (BEFAS fonları dâhil) vatandaşlık planlarında yer verilemez.
	•	İlk 3 yıl boyunca plan değişikliği, emeklilik nedeniyle hesap birleştirme ve başka bir emeklilik şirketine aktarım (transfer) yapılamaz. Ancak çalışılan şirkete göre fon dağılımında 6 ile 12 kez değişiklik yapılabilir.
Fon tarafında uygulamada şu ayrım önemlidir: “plan/şirket değişikliği ve aktarım” üç yıl boyunca kapalıyken; fon dağılımı yönetimi, emeklilik şirketinin vatandaşlık planı içinde sunduğu fon seti ve BES’in genel kuralları çerçevesinde değerlendirilir. Bu nedenle süreç, “Türkiye’deki her fona serbestçe geçiş” değil; vatandaşlık planının izin verdiği fonlar arasında fon dağılımının yönetilmesi şeklinde yürür.

Büromuz Ne Yapar? (Hizmet Kapsamı Örneği)
Büromuz; yatırım yoluyla vatandaşlık sürecinde BES yatırımının hukuki kurgusunun yapılması, banka–emeklilik şirketi–SEDDK uygunluk sürecinin koordinasyonu, uygunluk yazısı sonrası VAT-4 dosyasının hazırlanması ve başvurunun ilgili merciler nezdinde takibi dâhil olmak üzere süreci uçtan uca yönetir.`;

const EMPTY_LOCALIZED_DETAIL_COPY = (title: string): CitizenshipDetailPageCopy => ({
  metadata: {
    breadcrumbLabel: title,
    title,
    description: title,
  },
  hero: {
    summary: "",
    imageAlt: `${title} page visual`,
  },
  sections: [],
});

function hasDocumentText(value?: string) {
  return Boolean(value && value.trim().length > 0);
}

function isDocumentBulletLine(line: string) {
  return /^(?:[•✔👉-]|[a-zçğıöşü]\)|[0-9]+\))\s*/i.test(line);
}

function isDocumentAllCapsHeading(line: string) {
  const letters = line.replace(/[^A-Za-zÇĞİÖŞÜçğıöşü]/g, "");
  if (letters.length < 8) return false;
  return letters === letters.toLocaleUpperCase("tr-TR");
}

function isDocumentHeading(line: string, index: number) {
  if (index === 0) return true;
  if (/^\d+(?:\.\d+)*[.)]?\s+/.test(line)) return true;
  if (/^[IVXLCDM]+\.\s+/.test(line)) return true;
  if (/^(BÖLÜM|AŞAMA|Adım)\s+/i.test(line)) return true;
  if (/\?\s*$/.test(line)) return true;
  if (/^(Başvuru Süreci|Hizmet Kapsamımız|Sık Sorulan Sorular|Kimler Başvurabilir|Yatırımı Yapan Kişi Dışında Kimler Vatandaşlık Alabilir|Kimler Bu Yoldan Vatandaşlık Alamaz|İstisnai Durumlar|BES’e Özgü \(SEDDK Uygunluk Sürecinde\) Verilen Belgeler ve Bilgiler|BES Sistemiyle Vatandaşlık Başvurusu Süreç Akışı|Süreç Akışı \(Yatırımdan Vatandaşlık Başvurusuna\)|Vatandaşlık Planlarında Kritik Sınırlamalar \(3 Yıl Boyunca\)|Büromuz Ne Yapar\? \(Hizmet Kapsamı Örneği\))$/i.test(line)) return true;
  return isDocumentAllCapsHeading(line);
}

function createDocumentIntro(title?: string): Extract<PageSection, { type: "intro" }> {
  return {
    type: "intro",
    title,
    paragraphs: [],
  };
}

function buildDocumentSections(text: string): PageSection[] {
  const lines = text
    .replace(/\f/g, "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const sections: PageSection[] = [];
  let intro: Extract<PageSection, { type: "intro" }> | null = null;
  let bulletItems: string[] = [];

  function flushBullets() {
    if (bulletItems.length === 0) return;
    sections.push({ type: "plain-bullet", items: bulletItems });
    bulletItems = [];
  }

  function flushIntro() {
    if (!intro) return;
    if (hasDocumentText(intro.title) || intro.paragraphs.some(hasDocumentText)) {
      sections.push(intro);
    }
    intro = null;
  }

  lines.forEach((line, index) => {
    if (isDocumentBulletLine(line)) {
      flushIntro();
      bulletItems.push(line);
      return;
    }

    flushBullets();

    if (isDocumentHeading(line, index)) {
      flushIntro();
      intro = createDocumentIntro(line);
      return;
    }

    if (!intro) {
      intro = createDocumentIntro();
    }

    intro.paragraphs.push(line);
  });

  flushBullets();
  flushIntro();

  return sections;
}

const EVLILIK_CITIZENSHIP_TEXT = String.raw`Evlilik Yoluyla Türk Vatandaşlığı Başvurusu
Türk Vatandaşı ile Evli Olan Yabancıların Vatandaşlık Başvuru Süreci
Türk vatandaşlığının sonradan kazanılması yollarından biri de evlenme yoluyla Türk vatandaşlığının kazanılmasıdır. Ancak bir Türk vatandaşı ile evlenmek, yabancı eşe doğrudan Türk vatandaşlığı kazandırmaz. Yabancı eşin Türk vatandaşlığına başvurabilmesi için evliliğin belirli bir süre devam etmiş olması, aile birliğinin fiilen sürdürülmesi ve kanunda aranan diğer şartların sağlanması gerekir.
5901 sayılı Türk Vatandaşlığı Kanunu madde 16 uyarınca, bir Türk vatandaşı ile en az üç yıldan beri evli olan ve evliliği devam eden yabancılar Türk vatandaşlığını kazanmak üzere başvuruda bulunabilir. Başvuru sahibinde aile birliği içinde yaşama, evlilik birliği ile bağdaşmayacak faaliyette bulunmama ve milli güvenlik ile kamu düzeni bakımından engel teşkil edecek bir hâlin bulunmaması şartları aranır.
Evlilik yoluyla vatandaşlık başvurusu, yalnızca evlilik cüzdanı veya evlenme belgesi sunulmasından ibaret değildir. Evliliğin gerçekliği, eşlerin birlikte yaşayıp yaşamadığı, aile birliğinin fiilen devam edip etmediği, evliliğin yalnızca vatandaşlık elde etme amacıyla yapılıp yapılmadığı, başvuru sahibinin adli ve idari durumu ve kamu düzeni bakımından değerlendirmesi birlikte incelenir.
Bu rehber, Türk vatandaşı ile evli olan yabancıların evlilik yoluyla Türk vatandaşlığı başvurusunda aranan şartları, üç yıllık evlilik süresinin nasıl hesaplandığını, aile birliği içinde yaşama şartını, mülakat ve tahkikat sürecini, başvuru belgelerini ve dikkat edilmesi gereken temel hususları açıklamak amacıyla hazırlanmıştır.
Rehber yalnızca bilgilendirme amacıyla hazırlanmıştır. Hukuki danışmanlık için lütfen uzman bir avukattan destek alınız.

BİRİNCİ BÖLÜM - EVLİLİK YOLUYLA TÜRK VATANDAŞLIĞI BAŞVURUSUNUN HUKUKİ DAYANAĞI
Evlilik yoluyla Türk vatandaşlığı başvurusu, 5901 sayılı Türk Vatandaşlığı Kanunu’nun 16. maddesi ve Türk Vatandaşlığı Kanununun Uygulanmasına İlişkin Yönetmelik hükümleri kapsamında düzenlenmektedir.
Kanuna göre bir Türk vatandaşı ile evlenmek, yabancı kişiye otomatik olarak Türk vatandaşlığı kazandırmaz. Yabancı eşin vatandaşlık başvurusu yapabilmesi için en az üç yıldan beri bir Türk vatandaşı ile evli olması ve evliliğin başvuru tarihinde devam ediyor olması gerekir.
Bu başvuru türünde esas olan, evliliğin gerçek bir aile birliği oluşturmasıdır. Bu nedenle idare, yalnızca resmi evlilik kaydının varlığıyla yetinmez; eşlerin birlikte yaşayıp yaşamadığını, evlilik birliğinin fiilen devam edip etmediğini ve evlenmenin vatandaşlık elde etmek amacıyla formalite olarak yapılıp yapılmadığını araştırır.

İKİNCİ BÖLÜM - EVLİLİK YOLUYLA VATANDAŞLIK ŞARTLARI
Evlilik yoluyla Türk vatandaşlığı başvurusunda aranan temel şartlar şunlardır:
• Başvuru sahibinin bir Türk vatandaşı ile evli olması,
• Evliliğin en az üç yıldan beri devam ediyor olması,
• Başvuru tarihinde evliliğin devam etmesi,
• Eşlerin aile birliği içinde yaşaması,
• Başvuru sahibinin evlilik birliği ile bağdaşmayacak bir faaliyette bulunmaması,
• Başvuru sahibinin milli güvenlik ve kamu düzeni bakımından engel teşkil edecek bir hâlinin bulunmaması.
Bu şartların tamamı birlikte değerlendirilir. Üç yıllık evlilik süresinin dolması, tek başına Türk vatandaşlığının kazanılacağı anlamına gelmez. Başvuru sahibi, evlenmenin gerçek olduğunu, aile birliğinin sürdüğünü ve vatandaşlık başvurusu bakımından kamu düzeni veya milli güvenlik yönünden engel bulunmadığını gösterebilmelidir.

ÜÇÜNCÜ BÖLÜM - ÜÇ YILLIK EVLİLİK SÜRESİ NASIL HESAPLANIR?
Evlilik yoluyla vatandaşlık başvurusu yapılabilmesi için yabancı eşin, başvuru tarihinde en az üç yıldan beri bir Türk vatandaşı ile evli olması gerekir. Üç yıllık süre, kural olarak evliliğin resmi olarak kurulduğu tarihten itibaren hesaplanır.
Evlilik Türkiye’de yapılmışsa, süre evlenme işleminin resmi makamlarca yapıldığı tarihten itibaren başlar. Evlilik yurtdışında yapılmışsa, evlenmenin Türk nüfus kayıtlarına tescil edilmesi önem taşır. Yurtdışında yapılan evliliklerin Türkiye’de tanınması ve nüfus kayıtlarına işlenmesi başvuru süreci bakımından gereklidir.
Üç yıllık sürenin hesabında dikkat edilmesi gereken en önemli husus, evlilik tarihinin resmi belgelerde gün, ay ve yıl olarak açıkça yer almasıdır. Medeni hal belgesi, evlenme belgesi, nüfus kayıt örneği ve yabancı makamlarca düzenlenen belgelerde evlilik tarihi bakımından uyumsuzluk bulunması başvuru sürecinde sorun yaratabilir.
Evlilik süresi üç yılı doldurmadan yapılan başvurular işleme alınmayabilir. Bu nedenle başvuru hazırlığına erken başlanabilse de, resmi başvurunun üç yıllık süre dolduktan sonra yapılması gerekir.

DÖRDÜNCÜ BÖLÜM - EŞİN TÜRK VATANDAŞLIĞI NE ZAMAN BAŞLAMIŞ OLMALIDIR?
Evlilik yoluyla vatandaşlık başvurusunda, başvuru sahibinin en az üç yıldan beri bir Türk vatandaşı ile evli olması aranır. Bu nedenle yalnızca üç yıllık evlilik süresinin dolması değil, evlilik ilişkisi içinde Türk vatandaşı eşin vatandaşlık statüsü de önemlidir.
Eğer eş doğumla Türk vatandaşı ise, evlilik tarihinden itibaren üç yıllık sürenin dolması başvuru bakımından temel ölçüt olacaktır. Ancak eş sonradan Türk vatandaşlığını kazanmışsa, başvuru sahibinin “Türk vatandaşı ile evli olma” şartının hangi tarihten itibaren gerçekleştiği ayrıca değerlendirilmelidir.
Bu nedenle eşin vatandaşlık statüsü, evlilik tarihi ve Türk nüfus kayıtlarındaki bilgiler başvuru öncesinde birlikte incelenmelidir. Evlilik tarihi, eşin Türk vatandaşlığını kazanma tarihi ve nüfus kayıtları arasında uyumsuzluk varsa, başvuru sürecinde ek belge veya açıklama gerekebilir.

BEŞİNCİ BÖLÜM - EVLİLİĞİN DEVAM ETMESİ ŞARTI
Evlilik yoluyla vatandaşlık başvurusu yapılabilmesi için evliliğin başvuru tarihinde devam ediyor olması gerekir. Boşanmış kişiler, eski Türk vatandaşı eşleri üzerinden evlilik yoluyla vatandaşlık başvurusu yapamaz.
Başvurudan önce boşanma davası açılmış olması, fiili ayrılık bulunması veya eşler arasında aile birliğinin sona erdiğini gösteren durumların bulunması dosya bakımından risk yaratabilir. Çünkü evlilik yoluyla vatandaşlık başvurusunda yalnızca resmi evlilik kaydının devam etmesi değil, aile birliğinin fiilen sürmesi de aranır.
Başvuru tarihinden sonra Türk vatandaşı eşin ölümü nedeniyle evliliğin sona ermesi hâlinde ise aile birliği içinde yaşama şartı aranmayabilir. Ancak bu durum başvurunun otomatik olarak kabul edileceği anlamına gelmez; dosyanın diğer şartlar bakımından incelenmesine devam edilir.

ALTINCI BÖLÜM - AİLE BİRLİĞİ İÇİNDE YAŞAMA ŞARTI
Evlilik yoluyla vatandaşlık başvurularında en önemli şartlardan biri, eşlerin aile birliği içinde yaşamasıdır. Aile birliği içinde yaşama, eşlerin gerçek bir evlilik ilişkisi içinde ortak hayatı sürdürmesini ifade eder.
Bu şart kapsamında idare şu hususları değerlendirebilir:
• Eşlerin aynı adreste yaşayıp yaşamadığı,
• Ortak konutun bulunup bulunmadığı,
• Eşlerin birbirlerinin aile, iş ve sosyal çevresini tanıyıp tanımadığı,
• Evlenmenin fiilen devam edip etmediği,
• Eşlerin ekonomik ve sosyal yaşamlarını birlikte sürdürüp sürdürmediği,
• Evlenmenin yalnızca vatandaşlık başvurusu amacıyla yapılıp yapılmadığı,
• Eşlerin beyanlarının birbiriyle uyumlu olup olmadığı.
Eşlerin iş, eğitim, sağlık, askerlik, ailevi zorunluluk veya benzeri haklı nedenlerle geçici olarak ayrı şehirlerde ya da ülkelerde bulunması, her durumda aile birliğinin bulunmadığı anlamına gelmez. Ancak bu durumda ayrılığın geçici, haklı ve açıklanabilir olması gerekir.
Eşlerin uzun süredir ayrı yaşaması, ortak adres kaydının bulunmaması, birbirleri hakkında temel bilgileri bilmemesi, ortak yaşamı destekleyen belgelerin olmaması veya evlenmenin şekli olduğu izlenimi veren durumlar başvurunun reddedilmesine neden olabilir.

YEDİNCİ BÖLÜM - EVLİLİK BİRLİĞİ İLE BAĞDAŞMAYACAK FAALİYETTE BULUNMAMA
Kanun, evlilik yoluyla Türk vatandaşlığı başvurusunda bulunan yabancının evlilik birliği ile bağdaşmayacak bir faaliyette bulunmamasını şart koşar. Bu şart, evliliğin gerçekliğini ve başvuru sahibinin aile yaşamına uygun davranış içinde olup olmadığını değerlendirmeye yöneliktir.
Uygulamada bu kapsamda özellikle şu hususlar incelenebilir:
• Evlenmenin formalite olup olmadığı,
• Başvuru sahibinin başka biriyle fiili birliktelik yaşayıp yaşamadığı,
• Evlilik birliğiyle bağdaşmayacak faaliyetler içinde bulunup bulunmadığı,
• Evlenmenin kamu düzenini veya aile kurumunu kötüye kullanma amacı taşıyıp taşımadıgı,
• Başvuru sahibinin geçmiş adli veya idari kayıtları,
• Kolluk araştırması ve komisyon değerlendirmesi.
Bu şart, yalnızca ceza hukuku bakımından suç teşkil eden davranışlarla sınırlı değildir. Evlenmenin amacına, aile birliğine ve kamu düzenine aykırı faaliyetler de başvuru bakımından olumsuz değerlendirilebilir.

SEKİZİNCİ BÖLÜM - MİLLİ GÜVENLİK VE KAMU DÜZENİ DEĞERLENDİRMESİ
Evlilik yoluyla vatandaşlık başvurusunda başvuru sahibinin milli güvenlik ve kamu düzeni bakımından engel teşkil edecek bir hâlinin bulunmaması gerekir. Bu şart, tüm vatandaşlık başvurularında olduğu gibi evlilik yoluyla başvurularda da temel değerlendirme kriterlerinden biridir.
Bu kapsamda başvuru sahibinin adli sicil kayıtları, hakkında devam eden soruşturma veya kovuşturma bulunup bulunmadığı, idari kayıtları, kamu düzeni bakımından risk oluşturabilecek faaliyetleri ve güvenlik araştırması sonuçları değerlendirilebilir.
Türk vatandaşı ile üç yıldan fazla süredir evli olmak, milli güvenlik veya kamu düzeni bakımından olumsuz değerlendirme yapılması hâlinde vatandaşlık başvurusunun kabul edileceği anlamına gelmez. Bu nedenle başvuru öncesinde adli sicil, dava, idari tahdit ve benzeri risklerin kontrol edilmesi önemlidir.

DOKUZUNUCU BÖLÜM - MÜLAKAT VE KOMİSYON SÜRECİ
Evlilik yoluyla Türk vatandaşlığı başvurularında mülakat ve inceleme süreci başvurunun en kritik aşamalarından biridir. Başvuru sahibi yabancı eş ve Türk vatandaşı eş, yetkili makamlar tarafından birlikte veya ayrı ayrı görüşmeye alınabilir.
Mülakat sürecinde genellikle şu konular değerlendirilebilir:
• Eşlerin ne zaman ve nasıl tanıştığı,
• Evlilik tarihleri,
• Düğün veya evlilik süreci,
• Ortak adres ve birlikte yaşam düzeni,
• Eşlerin aileleri, işleri ve sosyal çevreleri,
• Günlük yaşam alışkanlıkları,
• Ev içi düzen ve ortak yaşam bilgileri,
• Eşlerin birbirleri hakkındaki temel bilgileri,
• Evlenmenin gerçek ve sürdürülen bir aile birliği olup olmadığı.
Komisyon, eşlerin beyanlarının tutarlı olup olmadığını ve dosyadaki belgelerle uyum gösterip göstermediğini değerlendirir. Eşlerin birbirinden tamamen farklı bilgiler vermesi, temel aile bilgilerini bilmemesi veya ortak yaşamı destekleyen hiçbir belgenin bulunmaması başvuru açısından risk oluşturabilir.
Mülakatın amacı, evlenmenin gerçekliğini ve aile birliğinin devam edip etmediğini değerlendirmektir. Bu nedenle başvuru öncesinde dosya belgeleri ile eşlerin beyanlarının tutarlı olması sağlanmalıdır.

ONUNCU BÖLÜM - KOLLUK ARAŞTIRMASI VE ADRES İNCELEMESİ
Evlilik yoluyla vatandaşlık başvurularında mülakat dışında kolluk araştırması ve adres incelemesi de yapılabilir. Bu araştırma kapsamında eşlerin aynı adreste yaşayıp yaşamadığı, komşu veya çevre beyanları, ortak yaşam düzeni ve aile birliğinin gerçekliği incelenebilir.
Adres kayıt sistemindeki adres ile fiili yaşam adresinin uyumlu olması önemlidir. Eşlerin farklı adreslerde kayıtlı olması, fiilen ayrı yaşamaları veya adres kayıtlarının güncel olmaması başvuru sürecinde ek açıklama gerektirebilir.
Kolluk araştırmasında olumsuz kanaat oluşması, komisyon değerlendirmesini ve nihai karar sürecini etkileyebilir. Bu nedenle başvuru yapılmadan önce adres kayıtları, kira sözleşmesi, tapu, fatura, ortak yaşam belgeleri ve aile birliğini destekleyen diğer belgeler kontrol edilmelidir.

ON BİRİNCİ BÖLÜM - YURT İÇİNDEN VE YURT DIŞINDAN BAŞVURU
Evlilik yoluyla Türk vatandaşlığı başvuruları, başvuru sahibinin yerleşim yerine göre yurt içinde veya yurt dışında yapılabilir. Türkiye’de yaşayan yabancılar bakımından başvuru, yerleşim yerinin bulunduğu valilik, yani İl Nüfus ve Vatandaşlık Müdürlüğü üzerinden yapılır.
Yurt dışında yaşayan yabancılar ise dış temsilcilikler aracılığıyla başvuru yapabilir. Yurt dışı başvurularında evliliğin Türk nüfus kayıtlarına işlenmiş olması, belgelerin usulüne uygun şekilde hazırlanması ve başvuru sahibinin bulunduğu ülkedeki resmi belgelerin apostil veya konsolosluk onayı ile Türkçe tercümelerinin tamamlanması gerekir.
Türkiye’de ikamet eden başvuru sahipleri bakımından en son tarihli ikamet izni belgesi başvuru dosyasında yer alabilir. Ancak evlilik yoluyla vatandaşlık başvurusu, genel yolla vatandaşlık başvurusundan farklı olarak beş yıllık ikamet şartına dayanmaz. Bununla birlikte başvuru sahibinin Türkiye’de bulunma statüsü, adres kaydı ve aile birliği içinde yaşama durumunun ispatı bakımından önem taşıyabilir.

ON İKİNCİ BÖLÜM - BAŞVURUNUN KİMLERİ KAPSADIĞI
Evlilik yoluyla Türk vatandaşlığı başvurusu esas olarak Türk vatandaşı ile evli olan yabancı eş tarafından yapılır. Türk vatandaşı eş zaten Türk vatandaşı olduğundan başvuru sahibi konumunda değildir; ancak başvuru sürecinde aile birliğinin ispatı, mülakat ve inceleme bakımından sürecin doğal tarafıdır.
Başvuru sahibinin önceki evliliğinden veya mevcut evlilikten ergin olmayan yabancı çocukları varsa, bu çocukların Türk vatandaşlığı kazanıp kazanamayacağı ayrı değerlendirilir. Yetkili makam kararıyla Türk vatandaşlığının kazanılması eşin vatandaşlığına etki etmez; ancak ana veya babanın velayeti kendisinde bulunan ergin olmayan çocukları, diğer ebeveynin muvafakatiyle Türk vatandaşlığını kazanabilir.
Ergin çocuklar, anne veya babanın evlilik yoluyla Türk vatandaşlığı kazanması nedeniyle otomatik olarak Türk vatandaşlığı kazanmaz. Bu kişiler şartları varsa kendi adlarına ayrıca vatandaşlık başvurusu yapmalıdır.
Bu nedenle evlilik yoluyla vatandaşlık başvurusu yapılırken başvuru sahibinin çocuklarının yaşı, velayet durumu, diğer ebeveynin muvafakati, çocukların kimlik ve doğum belgeleri ile aile bağını gösteren belgeler ayrıca değerlendirilmelidir.

ON ÜÇÜNCÜ BÖLÜM - BAŞVURU İÇİN GEREKLİ BELGELER
Evlilik yoluyla Türk vatandaşlığı başvurusunda genel olarak aşağıdaki belgeler hazırlanır:
• Başvuru formu,
• Biyometrik fotoğraf,
• Başvuru sahibinin pasaportu veya pasaport yerine geçen belgesi,
• Vatansızlık durumu varsa buna ilişkin belge,
• Başvuru sahibinin kimlik bilgilerini gösteren doğum belgesi veya nüfus kayıt örneği,
• Evlilik belgesi,
• Türk vatandaşı eşe ait nüfus kayıt örneği,
• Başvuru sahibinin medeni halini gösteren belge,
• Yerleşim yeri Türkiye’de ise en son tarihli ikamet izni belgesi,
• Kesinleşmiş mahkeme kararı varsa onaylı örneği,
• Başvuru sahibinin doğum tarihinin ay ve günü bulunmuyorsa buna ilişkin belge veya beyan,
• Hizmet bedeli makbuzu,
• Gerekli görülmesi hâlinde aile birliğini ispatlayan ek belgeler.
Aile birliğini desteklemek amacıyla ayrıca şu belgeler de dosya bakımından faydalı olabilir:
• Ortak adres kaydı,
• Kira sözleşmesi veya tapu kaydı,
• Ortak faturalar,
• Ortak banka veya ödeme kayıtları,
• Çocuklara ilişkin doğum belgeleri,
• Fotoğraflar,
• Seyahat kayıtları,
• Evliliğin fiilen sürdüğünü gösteren diğer belgeler.
Yabancı ülkelerden alınan belgelerin usulüne uygun şekilde onaylanması, apostil veya konsolosluk tasdiklerinin yapılması ve noter onaylı Türkçe tercümelerinin hazırlanması gerekir.

ON DÖRDÜNCÜ BÖLÜM - BAŞVURU MAKAMI VE USUL
Evlilik yoluyla Türk vatandaşlığı başvurusu, yurt içinde yerleşim yerinin bulunduğu valiliğe, yurt dışında ise dış temsilciliklere yapılır. Başvuru bizzat veya bu hakkın kullanılmasına ilişkin özel vekâletname ile yapılabilir. Posta yoluyla yapılan başvurular kabul edilmez.
Başvuru süreci genel olarak şu aşamalardan oluşur:
1) Evlilik süresinin ve Türk vatandaşı eşin vatandaşlık durumunun incelenmesi,
2) Evliliğin Türk nüfus kayıtlarına işlenip işlenmediğinin kontrol edilmesi,
3) Başvuru belgelerinin hazırlanması,
4) İl Nüfus ve Vatandaşlık Müdürlüğü veya dış temsilcilik üzerinden başvuru yapılması,
5) Ön inceleme yapılması,
6) Eşlerin mülakata alınması,
7) Kolluk ve adres araştırması yapılması,
8) Aile birliği içinde yaşama şartının değerlendirilmesi,
9) Milli güvenlik ve kamu düzeni araştırmasının tamamlanması,
10) Dosyanın İçişleri Bakanlığına gönderilmesi,
11) Başvurunun idari makamlarca değerlendirilmesi,
12) Uygun görülmesi hâlinde Türk vatandaşlığının kazanılması.
Başvurunun işleme alınması, vatandaşlığın kesin olarak kazanılacağı anlamına gelmez. Nihai değerlendirme yetkili makamlar tarafından yapılır.

ON BEŞİNCİ BÖLÜM - BAŞVURU RİSKLERİ VE RED SEBEPLERİ
Evlilik yoluyla vatandaşlık başvurularında en sık karşılaşılan riskler şunlardır:
• Evlilik süresinin üç yılı doldurmamış olması,
• Evliliğin Türk nüfus kayıtlarına işlenmemiş olması,
• Evlilik belgelerinde tarih veya kimlik uyumsuzluğu bulunması,
• Eşlerin fiilen ayrı yaşaması,
• Aile birliği içinde yaşama şartının ispatlanamaması,
• Eşlerin mülakatta çelişkili beyanlarda bulunması,
• Evlenmenin formalite olduğu yönünde kanaat oluşması,
• Başvuru sahibinin evlilik birliğiyle bağdaşmayacak faaliyetlerde bulunduğunun değerlendirilmesi,
• Adli sicil veya devam eden ceza yargılaması bulunması,
• Milli güvenlik veya kamu düzeni bakımından olumsuz değerlendirme yapılması,
• Adres kayıtları ile fiili yaşam adresinin uyumsuz olması,
• Belgelerin eksik, hatalı veya usulüne uygun onaylanmamış olması.
Bu nedenle evlilik yoluyla vatandaşlık başvurusu yapılmadan önce evlilik süresi, aile birliği, ikamet ve adres kayıtları, yabancı belgeler ve mülakat süreci dikkatle hazırlanmalıdır.

ON ALTINCI BÖLÜM - BOŞANMA, ÖLÜM VE EVLİLİĞİN BUTLANI HÂLLERİ
Evlilik yoluyla vatandaşlık başvurusu yapılabilmesi için başvuru tarihinde evliliğin devam etmesi gerekir. Başvurudan önce boşanma gerçekleşmişse, yabancı eş eski evliliğe dayanarak vatandaşlık başvurusunda bulunamaz.
Başvuru yapıldıktan sonra Türk vatandaşı eşin ölümü nedeniyle evliliğin sona ermesi hâlinde, aile birliği içinde yaşama şartı aranmayabilir. Ancak başvurunun diğer şartlar bakımından incelenmesine devam edilir.
Evlilik yoluyla Türk vatandaşlığını kazanan yabancının evliliğinin sonradan butlanına karar verilirse, kişi evlenmede iyi niyetli ise Türk vatandaşlığını muhafaza edebilir. Bu durum her somut olayın şartlarına göre değerlendirilir.
Boşanma, ölüm veya butlan gibi durumlar başvuru sürecinde ya da vatandaşlık kazanıldıktan sonra önemli hukuki sonuçlar doğurabileceğinden, bu tür hâllerde mutlaka hukuki destek alınmalıdır.

ON YEDİNCİ BÖLÜM - AVUKAT DESTEĞİNİN ÖNEMİ
Evlilik yoluyla Türk vatandaşlığı başvurusu, yalnızca evlilik belgesi ibrazından ibaret olmayan, aile birliği ve evliliğin gerçekliği yönünden ayrıntılı inceleme gerektiren bir süreçtir.
Avukat desteği özellikle şu aşamalarda önemlidir:
• Üç yıllık evlilik süresinin doğru hesaplanması,
• Yurtdışında yapılan evliliklerin Türkiye’de tescilinin kontrol edilmesi,
• Türk vatandaşı eşin vatandaşlık statüsünün değerlendirilmesi,
• Aile birliği içinde yaşama şartının ispatı için belgelerin hazırlanması,
• Başvuru sahibinin ikamet ve adres kayıtlarının kontrol edilmesi,
• Yabancı belgelerin apostil, tercüme ve noter işlemlerinin yürütülmesi,
• Mülakat öncesi dosya tutarlılığının sağlanması,
• Çocukların başvuru kapsamına alınıp alınamayacağının değerlendirilmesi,
• Eksik belge veya ek bilgi taleplerinin karşılanması,
• Red kararı hâlinde idari başvuru ve dava yollarının değerlendirilmesi.
Eksik veya hatalı hazırlanan başvurular, sürecin uzamasına veya başvurunun reddedilmesine neden olabilir. Bu nedenle evlilik yoluyla Türk vatandaşlığı başvurularında sürecin başından itibaren hukuki destek alınması tavsiye edilir.

SÜRECİN GENEL AŞAMALARI
Evlilik yoluyla Türk vatandaşlığı başvurusu genel olarak aşağıdaki aşamalardan oluşur:
1) Evlilik süresinin üç yılı doldurup doldurmadığının incelenmesi,
2) Evliliğin Türk nüfus kayıtlarına işlenip işlenmediğinin kontrol edilmesi,
3) Türk vatandaşı eşin vatandaşlık durumunun değerlendirilmesi,
4) Başvuru sahibinin kimlik, medeni hal ve aile belgelerinin hazırlanması,
5) Gerekli ise ikamet izni ve adres kayıtlarının kontrol edilmesi,
6) Aile birliğini destekleyen belgelerin hazırlanması,
7) İl Nüfus ve Vatandaşlık Müdürlüğü veya dış temsilcilik üzerinden başvuru yapılması,
8) Emniyet Müdürlüğü nezdinde parmak izi verilmesi,
9) Eşlerin mülakata alınması,
10) Kolluk ve adres araştırmasının yapılması,
11) Aile birliği içinde yaşama şartının değerlendirilmesi,
12) Milli güvenlik ve kamu düzeni araştırmasının tamamlanması,
13) Dosyanın yetkili makamlarca değerlendirilmesi,
14) Uygun görülmesi hâlinde Türk vatandaşlığının kazanılması.

HUKUKİ ÇERÇEVE
Yasal Dayanak
• 5901 Sayılı Türk Vatandaşlığı Kanunu
Türk vatandaşlığının kazanılması, kaybı ve vatandaşlığa ilişkin temel usul ve esasları düzenler.
• 5901 Sayılı Türk Vatandaşlığı Kanunu Madde 16
Evlenme yoluyla Türk vatandaşlığının kazanılması şartlarını düzenler.
• Türk Vatandaşlığı Kanununun Uygulanmasına İlişkin Yönetmelik
Evlenme yoluyla vatandaşlık başvurusunun usul ve esaslarını düzenler.
• 5490 Sayılı Nüfus Hizmetleri Kanunu
Nüfus kayıtları, evlilik tescili, doğum tarihi ve aile bağlarının belgelenmesi bakımından önem taşır.`

const GENEL_CITIZENSHIP_TEXT = String.raw`Genel Yolla Türk Vatandaşlığı Başvurusu
Türkiye’de 5 Yıl İkamet Sonrasında Türk Vatandaşlığının Kazanılması
Türk vatandaşlığının sonradan kazanılması yollarından biri, Türkiye’de kesintisiz şekilde belirli süre ikamet eden yabancıların genel hükümler kapsamında Türk vatandaşlığı başvurusunda bulunmasıdır. Genel yolla Türk vatandaşlığı başvurusu, yatırım yoluyla vatandaşlık başvurularından farklı olarak belirli bir yatırım tutarına değil; başvuru sahibinin Türkiye’de yasal, kesintisiz ve yerleşme niyetini gösteren bir ikamet geçmişine sahip olmasına dayanır.
5901 sayılı Türk Vatandaşlığı Kanunu madde 11 kapsamında, Türk vatandaşlığını genel yolla kazanmak isteyen yabancının başvuru tarihinden geriye doğru Türkiye’de kesintisiz beş yıl ikamet etmiş olması gerekir. Ancak beş yıllık ikamet süresinin tamamlanması tek başına vatandaşlık hakkı doğurmaz. Başvuru sahibinin ayrıca ergin ve ayırt etme gücüne sahip olması, Türkiye’de yerleşmeye karar verdiğini davranışlarıyla göstermesi, genel sağlık bakımından tehlike teşkil eden bir hastalığının bulunmaması, iyi ahlak sahibi olması, yeterli düzeyde Türkçe konuşabilmesi, kendisinin ve bakmakla yükümlü olduğu kişilerin geçimini sağlayacak gelire veya mesleğe sahip olması ve milli güvenlik ile kamu düzeni bakımından engel teşkil edecek bir hâlinin bulunmaması gerekir.
Bu başvuru yolu, özellikle Türkiye’de çalışma izniyle çalışan, aile ikamet izniyle yaşayan, uzun dönem ikamet iznine sahip olan, Türkiye’de taşınmazı veya ticari faaliyeti bulunan, Türkiye’de aile düzeni kurmuş ya da Türkiye’de kalıcı biçimde yerleşme iradesi gösteren yabancılar bakımından önem taşır.
Bu rehber, Türkiye’de beş yıl ikamet izni sonrasında genel yolla Türk vatandaşlığına başvurmak isteyen yabancılara yönelik olarak ikamet süresi, geçerli ikamet türleri, gün sayımı, başvuru belgeleri, başvurunun kimleri kapsadığı ve vatandaşlık sürecinde dikkat edilmesi gereken temel hususları açıklamak amacıyla hazırlanmıştır.
Rehber yalnızca bilgilendirme amacıyla hazırlanmıştır. Hukuki danışmanlık için lütfen uzman bir avukattan destek alınız.

BİRİNCİ BÖLÜM - GENEL YOLLA TÜRK VATANDAŞLIĞI BAŞVURUSUNUN HUKUKİ DAYANAĞI
Genel yolla Türk vatandaşlığı başvurusu, 5901 sayılı Türk Vatandaşlığı Kanunu’nun 11. maddesi ve Türk Vatandaşlığı Kanununun Uygulanmasına İlişkin Yönetmelik hükümleri kapsamında düzenlenmektedir. Bu başvuru türünde vatandaşlık, doğrudan veya otomatik olarak kazanılmaz. Başvuru sahibi, kanunda öngörülen şartları taşıdığını belgelemeli ve idari makamlar tarafından yapılacak inceleme sonucunda vatandaşlığa alınmasının uygun görülmesi gerekir.
Genel yolla vatandaşlık başvurusunda temel şart, başvuru tarihinden geriye doğru Türkiye’de kesintisiz beş yıl ikamet etmiş olmaktır. Ancak bu beş yıllık sürenin yalnızca takvimsel olarak dolması yeterli değildir. İkametin yasal olması, Türkiye’de yerleşme niyetini göstermesi, kabul edilen ikamet türlerine dayanması ve yurtdışı kalış süreleri nedeniyle kesintiye uğramamış olması gerekir.
Bu nedenle genel yolla vatandaşlık başvurusu yapılmadan önce başvuru sahibinin son beş yıllık ikamet geçmişi, ikamet izin türleri, Türkiye’ye giriş ve çıkış kayıtları, çalışma izni veya ikamet izni süreleri, adres kayıtları ve aile durumu birlikte değerlendirilmelidir.

İKİNCİ BÖLÜM - GENEL YOLLA TÜRK VATANDAŞLIĞI ŞARTLARI
Genel yolla Türk vatandaşlığı başvurusunda aranan temel şartlar şunlardır:
• Başvuru sahibinin kendi milli kanununa, vatansız ise Türk Medeni Kanunu’na göre ergin ve ayırt etme gücüne sahip olması,
• Başvuru tarihinden geriye doğru Türkiye’de kesintisiz beş yıl ikamet etmiş olması,
• Türkiye’de yerleşmeye karar verdiğini davranışlarıyla teyit etmesi,
• Genel sağlık bakımından tehlike teşkil eden bir hastalığının bulunmaması,
• İyi ahlak sahibi olması,
• Toplumsal yaşama uyum sağlayabilecek düzeyde Türkçe konuşabilmesi,
• Türkiye’de kendisinin ve bakmakla yükümlü olduğu kişilerin geçimini sağlayacak gelire veya mesleğe sahip olması,
• Milli güvenlik ve kamu düzeni bakımından engel teşkil edecek bir hâlinin bulunmaması.
Bu şartların tamamı birlikte değerlendirilir. Beş yıllık ikamet süresini tamamlayan her yabancının vatandaşlık başvurusu kendiliğinden kabul edilmez. İdare, başvuru sahibinin Türkiye ile kurduğu fiili bağı, sosyal uyumunu, gelir durumunu, adli sicilini, kamu düzeni bakımından durumunu ve Türkiye’de kalıcı olarak yerleşme iradesini inceler.

ÜÇÜNCÜ BÖLÜM - BEŞ YILLIK İKAMET ŞARTI
Genel yolla Türk vatandaşlığı başvurusu yapabilmek için başvuru sahibinin başvuru tarihinden geriye doğru Türkiye’de kesintisiz beş yıl ikamet etmiş olması gerekir. Bu süre, ileriye dönük değil, başvuru tarihinden geriye doğru hesaplanır.
Örneğin başvuru tarihi 1 Temmuz 2026 ise, başvuru sahibinin 1 Temmuz 2021 tarihinden itibaren Türkiye’de kesintisiz ve yasal ikamet geçmişine sahip olması beklenir. Bu süre içinde ikamet izinleri arasında uzun boşluklar bulunmamalı, başvuru sahibi vize ihlali veya izinsiz kalış durumuna düşmemeli ve yurtdışı kalış süreleri ikameti kesintiye uğratacak seviyeye ulaşmamalıdır.
Beş yıllık sürenin hesabında yalnızca Türkiye’de fiilen bulunulan günler değil, aynı zamanda bu kalışın hangi hukuki statüye dayandığı da önemlidir. Yasal ikamet izni bulunmaksızın Türkiye’de geçirilen süreler genel yolla vatandaşlık başvurusu bakımından geçerli ikamet olarak kabul edilmez.

DÖRDÜNCÜ BÖLÜM - GÜN SAYIMI VE YURTDIŞINDA KALIŞ SÜRELERİ
Genel yolla vatandaşlık başvurularında en önemli konulardan biri, başvuru sahibinin Türkiye dışında geçirdiği sürelerin ikamet şartını kesip kesmediğidir. Başvuru tarihinden geriye doğru beş yıllık dönem içinde yabancının Türkiye’ye giriş ve çıkış kayıtları incelenir.
Uygulamada gün sayımı yapılırken özellikle şu hususlara dikkat edilmelidir:
• Son beş yıl içinde Türkiye dışında geçirilen toplam süre,
• Son bir yıl içinde Türkiye dışında geçirilen toplam süre,
• Yurtdışı kalışların zorunlu kamu hizmeti, eğitim veya sağlık gibi haklı nedenlere dayanıp dayanmadığı,
• Yabancının Türkiye’de geçerli ikamet izni veya çalışma izni bulunup bulunmadığı,
• İkamet izinleri arasında boşluk olup olmadığı,
• Yabancının Türkiye’de yerleşme niyetini gösteren fiili bağlarının devam edip etmediği.
Genel ikamet hukuku bakımından, zorunlu kamu hizmeti, eğitim ve sağlık nedenleri hariç olmak üzere, bir yılda toplam altı ayı geçen veya son beş yıl içinde toplam bir yılı aşan Türkiye dışında kalışlar ikamette kesinti olarak değerlendirilebilir. Bu nedenle genel yolla vatandaşlık başvurusu planlayan kişilerin son beş yıllık dönemde toplam bir yıldan fazla; özellikle son bir yıllık dönemde ise toplam altı aydan fazla yurtdışında kalmamaya dikkat etmesi gerekir.
Bununla birlikte vatandaşlık başvurularında idari uygulama daha ihtiyatlı değerlendirilebilmektedir. Nüfus ve Vatandaşlık İşleri uygulamasında, aranan ikamet süresi içinde Türkiye dışında geçirilen toplam sürenin altı ayı aşması hâlinde ikamet süresinin kesildiği yönünde değerlendirme yapılabildiğinden, başvuru öncesinde giriş-çıkış kayıtları ayrıntılı şekilde incelenmelidir.
Bu nedenle genel yolla vatandaşlık başvurusu yapılmadan önce başvuru sahibinin Emniyet veya ilgili makamlar nezdindeki yurda giriş-çıkış kayıtları alınmalı, son beş yıllık dönem gün gün hesaplanmalı ve başvurunun risk taşıyıp taşımadı değerlendirilmelidir.

BEŞİNCİ BÖLÜM - HANGİ İKAMET İZİNLERİ GEÇERLİ KABUL EDİLİR?
Genel yolla Türk vatandaşlığı başvurusunda her ikamet izni türü otomatik olarak geçerli ikamet kabul edilmez. Yasal ikamet izni bulunması gerekir; ancak bu ikamet izninin Türkiye’de yerleşme niyetini gösteren nitelikte olması da önemlidir.
Genel olarak Türkiye’de yerleşme iradesini gösterebilecek ikamet veya izin türleri şunlardır:
• Çalışma izni,
• Aile ikamet izni,
• Uzun dönem ikamet izni,
• Türkiye’de taşınmaz sahibi olmaya dayalı kısa dönem ikamet izni,
• Ticari bağlantı, iş kurma, yatırım veya benzeri yerleşme niyetini gösteren kısa dönem ikamet izinleri,
• Türkiye’de aile düzeni kurulduğunu gösteren ikamet izinleri,
• Türkiye’de uzun süreli ve kesintisiz yaşamaya dayanak oluşturan diğer yasal ikamet izinleri.
Çalışma izni, kanun gereği ikamet izni yerine de geçtiğinden, çalışma izniyle Türkiye’de bulunan yabancıların bu süreleri genel yolla vatandaşlık başvurusu bakımından önem taşıyabilir. Ancak çalışma izni sürelerinde de Türkiye’de fiilen bulunma, yurtdışı kalış süresi ve izinler arasında kesinti bulunup bulunmadığı ayrıca incelenmelidir.
Buna karşılık, Türkiye’de yerleşme niyetini göstermeyen bazı ikamet türleri vatandaşlık başvurusu bakımından geçerli ikamet olarak kabul edilmeyebilir. Özellikle turistik amaçlı ikamet izni, öğrenim ikamet izni, öğrenim gören çocuğa refakat amacıyla alınan ikamet izni, tedavi amacıyla alınan ikamet izni, sığınma veya iltica başvurusuna dayalı kalışlar ve diplomatik veya konsüler ayrıcalık sağlayan yabancı misyon personeli kimlik kartları genel yolla vatandaşlık başvurusunda geçerli ikamet olarak değerlendirilmeyebilir.
Bu nedenle başvuru sahibinin yalnızca beş yıldır Türkiye’de bulunması yeterli değildir. Türkiye’de hangi ikamet izniyle bulunduğu, bu ikametin Türkiye’de kalıcı yerleşme niyetini gösterip göstermediği ve önceki ikamet türlerinin başvuru bakımından sayılıp sayılmayacağı ayrıca değerlendirilmelidir.

ALTINCI BÖLÜM - TURİSTİK İKAMET İZNİ VE ÖĞRENCİ İKAMET İZNİ BAKIMINDAN DİKKAT EDİLMESİ GEREKENLER
Turistik ikamet izni, genel yolla vatandaşlık başvurularında en sık sorun yaratan ikamet türlerinden biridir. Çünkü turistik amaçla alınan ikamet izni, kural olarak Türkiye’de yerleşme niyetini gösteren bir ikamet türü olarak değerlendirilmez. Bu nedenle yalnızca turistik ikamet izniyle Türkiye’de beş yıl kalmış olmak, genel yolla Türk vatandaşlığı başvurusu için yeterli kabul edilmez. Turistik ikamet izni vatandaşlık başvurusu açısından oldukça sıkıntılı bir ikamet izni türüdür. Turistik ikamet izniyle geçirilen süreler gün sayımına dahil edilmediği gibi, vatandaşlık başvurusuna esas kabul edilebilecek olan ikamet izni türlerinden(aile, taşınmaz vb.) birine sahip olarak Türkiye’de geçirilen sürelerin ardından kısa bir dönem için dahi olsa bir süreliğine turistik ikamet izni almış olmak önceki ikamet izni türlerinde geçirilen süreleri sıfırlar ve kişinin vatandaşlık başvurusuna esas teşkil edebilecek Türkiye’de kalış süresi yokmuş gibi düşünülür.
Öğrenci ikamet izni bakımından da benzer şekilde dikkatli olunmalıdır. Türkiye’de eğitim amacıyla bulunan yabancıların öğrenim ikamet izinleri, genel yolla vatandaşlık başvurusunda doğrudan yerleşme niyeti gösteren ikamet türü olarak kabul edilmeyebilir. Ancak başvuru sahibinin Türkiye’de eğitimini tamamlaması, sonrasında çalışma izni, aile ikameti, taşınmaz, iş kurma veya uzun dönem ikamet gibi geçerli kabul edilebilecek bir statüye geçmesi durumunda dosya özelinde değerlendirme yapılabilir. Öğrenci ikamet izni ile Türkiye’de kalınan süreler vatandaşlık başvurusu için gerekli 5 yıllık sürenin hesabında dikkate alınır ve geçerli ikamet izni olarak değerlendirilecekse de; 5 yıllık sürenin sonunda vatandaşlık başvurusu yapılmak istendiği sırada aktif öğrenci ikamet izninin bulunuyor olması vatandaşlık başvurusuna engeldir. Bu aşamada kişi mevzuatta belirtilen geçerli ikamet izinlerinden birine ya da çalışma iznine geçiş yapmış olmak zorundadır.
Bu nedenle turistik veya öğrenci ikametiyle Türkiye’de uzun süre kalmış kişilerin genel yolla vatandaşlık başvurusu yapmadan önce ikamet geçmişleri ayrıntılı biçimde incelenmelidir. Özellikle turistik ikamet sürelerinin sonradan geçerli bir ikamet türüne geçilse dahi hesaba katılıp katılmayacağı bakımından dikkatli olunmalıdır.

YEDİNCİ BÖLÜM - BAŞVURU SIRASINDA GEÇERLİ İKAMET İZNİ VEYA ÇALIŞMA İZNİ BULUNMASI
Genel yolla Türk vatandaşlığı başvurusu yapılırken başvuru sahibinin Türkiye’de geçerli bir ikamet izni veya çalışma izni bulunmalıdır. Başvuru tarihinden geriye doğru beş yıllık ikamet şartı sağlanmış olsa dahi, başvuru anında geçerli bir ikamet izninin bulunmaması dosyanın işleme alınmasını engelleyebilir.
Başvuru belgeleri arasında, başvuru tarihinden ileriye doğru vatandaşlık işlemlerinin sonuçlandırılmasına yetecek süreli ikamet tezkeresi aranır. Bu nedenle ikamet izninin süresinin dolmasına çok kısa süre kalmış başvurularda, sürecin sağlıklı yürütülebilmesi için ikamet izni uzatma işlemleri vatandaşlık başvurusundan önce planlanmalıdır.
Çalışma izni olan yabancılar bakımından ayrıca ikamet izni alınması gerekmeyebilir; çünkü çalışma izni belirli koşullarda ikamet izni yerine geçer. Ancak çalışma izninin geçerli olması, başvuru sırasında süresinin devam etmesi ve önceki çalışma izni sürelerinde boşluk bulunmaması önemlidir.
Başvuru sahibinin yasal statüsünün başvuru sırasında sona ermiş olması, uzatma başvurusunun yapılmamış olması veya ikamet izni ihlali bulunması vatandaşlık başvurusu bakımından ciddi risk oluşturur. Nitekim ikamet izni süresinin bitmesine 1 aydan az kalan başvurucuların başvuruları Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü tarafından genellikle kabul edilmemektedir.
Bu aşamada en önemli husus vatandaşlık başvurusu ya da başvuruya esas gün sayımı yapılmak istendiği sırada mevzuatta belirtilen ikamet izni türlerinden birine sahip olma zorunluluğudur. Aksi takdirde, diğer ikamet izni türleriyle gün sayımı yaptırmak ve vatandaşlık başvurusu yapmak mümkün değildir. Gün sayımı başvurusu sırasında başvurucular taşınmaz ikamet izni(b), aile ikamet izni(a), uzun dönem ikamet izni ya da çalışma izninden birine sahip olmak zorundadır. Bu türler dışındaki ikamet izinlerine sahip kişilerin vatandaşlık başvurusu ya da gün sayımı talepleri kabul edilmeyecektir.

SEKİZİNCİ BÖLÜM - TÜRKİYE’DE YERLEŞME NİYETİNİN GÖSTERİLMESİ
Genel yolla vatandaşlık başvurusunda yalnızca beş yıl ikamet etmek yeterli değildir. Başvuru sahibinin Türkiye’de yerleşmeye karar verdiğini davranışlarıyla göstermesi gerekir.
Türkiye’de yerleşme niyetini gösterebilecek bazı durumlar şunlardır:
• Türkiye’de taşınmaz edinmek,
• Türkiye’de iş kurmak,
• Türkiye’de yatırım yapmak,
• Ticaret veya iş merkezini Türkiye’ye taşımak,
• Çalışma iznine tabi olarak bir iş yerinde çalışmak,
• Ailece Türkiye’de ikamet etmek,
• Türk vatandaşı ile evli olmak,
• Daha önce Türk vatandaşlığını kazanmış ana, baba, kardeş veya çocuk sahibi olmak,
• Eğitimini Türkiye’de tamamlamış olmak,
• Uzun süreli ikamet iznine bağlı olarak Türkiye’de yaşamak,
• Türkiye’de sosyal, ekonomik ve ailevi bağlar kurmak.
Bu unsurların tamamının aynı anda bulunması gerekmez. Ancak başvuru sahibinin Türkiye’de geçici, turistik veya kısa süreli kalış amacıyla değil, kalıcı biçimde yerleşme amacıyla bulunduğunu gösterebilmesi gerekir.

DOKUZUNCU BÖLÜM - GELİR, MESLEK VE GEÇİM ŞARTI
Genel yolla Türk vatandaşlığı başvurusunda başvuru sahibinin Türkiye’de kendisinin ve bakmakla yükümlü olduğu kişilerin geçimini sağlayabilecek gelire veya mesleğe sahip olması gerekir.
Bu şart, başvuru sahibinin Türkiye’de sosyal yardım ihtiyacı olmaksızın yaşamını sürdürebilecek ekonomik imkâna sahip olup olmadığının değerlendirilmesi bakımından önemlidir. Gelir veya meslek durumunun ispatında şu belgeler kullanılabilir:
• Çalışma izni,
• Maaş bordrosu,
• İş sözleşmesi,
• Vergi levhası,
• Şirket ortaklık belgeleri,
• Banka hesap dökümleri,
• Taşınmaz kira gelirleri,
• Emeklilik gelirleri,
• Düzenli gelir veya mesleki faaliyeti gösteren diğer belgeler.
Gelirin düzenli, sürdürülebilir ve başvuru sahibinin aile yükümlülükleriyle uyumlu olması gerekir. Yalnızca kısa süreli veya belirsiz kaynaklı para hareketleri, geçim şartının ispatı bakımından her zaman yeterli görülmeyebilir.

ONUNCU BÖLÜM - TÜRKÇE BİLME VE MÜLAKAT SÜRECİ
Genel yolla vatandaşlık başvurusunda başvuru sahibinin toplumsal yaşama uyum sağlayabilecek düzeyde Türkçe konuşabilmesi gerekir. Bu şart, başvuru sahibinin ileri akademik düzeyde Türkçe bilmesini zorunlu kılmaz; ancak günlük yaşamda kendisini ifade edebilmesi, basit sorulara cevap verebilmesi ve Türkiye’de sosyal hayata uyum sağlayabilecek iletişim becerisine sahip olması beklenir.
Başvuru sürecinde başvuru sahibi vatandaşlık inceleme komisyonu tarafından mülakata alınabilir. Mülakatta genellikle başvuru sahibinin Türkçe konuşma becerisi, Türkiye’deki yaşamı, aile durumu, mesleği, gelir durumu, Türkiye’de yerleşme amacı, sosyal çevresi ve vatandaşlık başvurusuna ilişkin beyanları değerlendirilir.
Mülakat aşamasında verilen cevapların dosyadaki belgelerle uyumlu olması önemlidir. Türkiye’de fiilen yaşamayan, adres kaydı ile gerçek yaşam yeri arasında uyumsuzluk bulunan veya Türkiye’de yerleşme niyetini yeterince gösteremeyen başvurular risk taşıyabilir.

ON BİRİNCİ BÖLÜM - BAŞVURUNUN KİMLERİ KAPSADIĞI
Genel yolla Türk vatandaşlığı başvurusu esas olarak başvuru sahibi yabancı gerçek kişi hakkında sonuç doğurur. Yetkili makam kararıyla Türk vatandaşlığının kazanılması, kural olarak başvuru sahibinin eşinin vatandaşlığına doğrudan etki etmez. Bu nedenle eş, yalnızca başvuru sahibinin vatandaşlık kazanmasıyla otomatik olarak Türk vatandaşı olmaz.
Başvuru sahibinin ergin olmayan çocukları bakımından ise ayrı değerlendirme yapılır. Ana veya babadan birinin Türk vatandaşlığını kazanması hâlinde, velayet kendisinde bulunan ergin olmayan çocuklar, diğer eşin muvafakatiyle birlikte Türk vatandaşlığını kazanabilir. Ana ve baba birlikte Türk vatandaşlığını kazanıyorsa, ergin olmayan çocuklar da belirli şartlar altında birlikte işlem görebilir.
Ergin çocuklar ise anne veya babaya bağlı olarak otomatik şekilde vatandaşlık kazanmaz. Başvuru süreci devam ederken ergin hale gelen çocuklar bakımından da kişisel statü değişeceğinden, bu kişilerin ayrı başvuru yapması gerekebilir.
Bu nedenle genel yolla vatandaşlık başvurusu yapılırken aile bireylerinin kimlerden oluştuğu, çocukların yaşları, velayet durumu, diğer ebeveynin muvafakati ve aile belgeleri başvuru öncesinde ayrıntılı şekilde değerlendirilmelidir.

ON İKİNCİ BÖLÜM - BAŞVURU İÇİN GEREKLİ BELGELER
Genel yolla Türk vatandaşlığı başvurusunda genel olarak aşağıdaki belgeler hazırlanır:
• Başvuru formu,
• Biyometrik fotoğraf,
• Pasaport veya pasaport yerine geçen belge,
• Vatansızlık durumu varsa buna ilişkin belge,
• Doğum belgesi veya kimlik bilgilerini gösteren resmi belge,
• Medeni hal belgesi,
• Evli ise evlenme belgesi,
• Boşanmış ise boşanmayı gösteren belge,
• Dul ise eşe ait ölüm belgesi,
• Eş ve çocuklarla aile bağını gösteren nüfus kayıt örneği veya benzeri belge,
• Genel sağlık bakımından tehlike teşkil eden hastalığı bulunmadığını gösteren sağlık raporu,
• Gelir veya meslek durumunu gösteren belgeler,
• Çalışma izni, banka kaydı veya benzeri belgeler,
• Başvuru tarihinden geriye doğru Türkiye’de kesintisiz beş yıl ikamet edildiğini gösteren yurda giriş-çıkış kayıtları,
• Başvuru tarihinden ileriye doğru yeterli süreli ikamet izni veya çalışma izni,
• Kesinleşmiş mahkeme kararı varsa onaylı örneği,
• Hizmet bedeli makbuzu,
• Gerekli görülmesi hâlinde ek bilgi ve belgeler.
Yabancı ülkelerden alınan belgelerin usulüne uygun şekilde apostil veya konsolosluk onayı yapılmalı, Türkçe tercümeleri noter onaylı olarak hazırlanmalıdır. Belgelerde ad, soyad, doğum tarihi, doğum yeri, medeni hal ve aile bağı bilgilerinin tutarlı olması gerekir.

ON ÜÇÜNCÜ BÖLÜM - BAŞVURU MAKAMI VE SÜRECİN İŞLEYİŞİ
Genel yolla Türk vatandaşlığı başvuruları yurt içinde yerleşim yerinin bulunduğu valiliğe, yani İl Nüfus ve Vatandaşlık Müdürlüğüne yapılır. Başvuru, bizzat veya bu hakkın kullanılmasına ilişkin özel vekâletname ile yapılabilir. Posta yoluyla yapılan başvurular kabul edilmez.
Başvuru süreci genel olarak şu aşamalardan oluşur:
1) Başvuru sahibinin ikamet geçmişinin ve şartlara uygunluğunun değerlendirilmesi,
2) Giriş-çıkış kayıtlarının ve ikamet izinlerinin incelenmesi,
3) Geçerli ikamet izni veya çalışma izni durumunun kontrol edilmesi,
4) Gerekli belgelerin hazırlanması,
5) Başvurunun İl Nüfus ve Vatandaşlık Müdürlüğüne yapılması,
6) Kişinin Emniyet Müdürlüğü nezdinde parmak izinin alınması,
7) Dosyanın ön incelemeye alınması,
8) Eksik belge varsa tamamlanması,
9) Komisyon veya mülakat sürecinin yürütülmesi,
10) Güvenlik ve arşiv araştırmasının yapılması,
11) Dosyanın İçişleri Bakanlığına gönderilmesi,
12) Başvurunun idari makamlarca değerlendirilmesi,
13) Uygun görülmesi hâlinde Türk vatandaşlığının kazanılması.
Başvurunun işleme alınması, vatandaşlığın mutlaka kazanılacağı anlamına gelmez. Yetkili makamlar başvuru sahibinin tüm şartları taşıyıp taşımadığını ayrıca değerlendirir.

ON DÖRDÜNCÜ BÖLÜM - BAŞVURU RİSKLERİ VE RED SEBEPLERİ
Genel yolla vatandaşlık başvurularında en sık karşılaşılan riskler şunlardır:
• Beş yıllık ikamet süresinin kesintisiz olmaması,
• Başvuru sahibinin son beş yıl içinde uzun süre yurtdışında kalmış olması,
• Son bir yıl içinde altı aydan fazla yurtdışında kalınması,
• İkamet izinleri arasında boşluk bulunması,
• Turistik ikametle geçirilen sürelerin vatandaşlık için yeterli sanılması,
• Başvuru sırasında geçerli ikamet izni veya çalışma izni bulunmaması,
• Türkiye’de yerleşme niyetinin yeterince gösterilememesi,
• Gelir veya meslek durumunun yeterli şekilde ispatlanamaması,
• Türkçe yeterliliğinin mülakatta yeterli görülmesi,
• Adli sicil veya devam eden ceza yargılaması bulunması,
• Milli güvenlik veya kamu düzeni bakımından olumsuz değerlendirme yapılması,
• Belgelerde kimlik, tarih veya medeni hal uyumsuzlukları bulunması,
• İdarenin takdir yetkisi.
Bu riskler nedeniyle genel yolla vatandaşlık başvurusu yapılmadan önce dosya ayrıntılı olarak incelenmeli ve başvurunun zamanlaması doğru belirlenmelidir.

ON BEŞİNCİ BÖLÜM - AVUKAT DESTEĞİNİN ÖNEMİ
Genel yolla Türk vatandaşlığı başvurusu, yalnızca form doldurma ve evrak tesliminden ibaret değildir. Başvuru öncesinde ikamet süresi, giriş-çıkış kayıtları, ikamet izni türleri, çalışma izni, aile durumu, gelir belgeleri ve kamu düzeni bakımından olası riskler birlikte değerlendirilmelidir.
Avukat desteği özellikle şu aşamalarda önemlidir:
• Beş yıllık ikamet süresinin hesaplanması,
• Yurtdışı kalış sürelerinin değerlendirilmesi,
• Geçerli ve geçersiz ikamet türlerinin ayrıştırılması,
• Başvuru sırasında gerekli ikamet izni veya çalışma izninin kontrol edilmesi,
• Aile bireylerinin başvuru kapsamına alınıp alınamayacağının değerlendirilmesi,
• Gerekli belgelerin hazırlanması,
• Yabancı belgelerin apostil, tercüme ve noter süreçlerinin yürütülmesi,
• Mülakat öncesi dosya tutarlılığının sağlanması,
• Eksik belge veya ek bilgi taleplerinin karşılanması,
• Red kararı hâlinde idari başvuru veya dava yollarının değerlendirilmesi.
Eksik veya hatalı hazırlanan başvurular, yalnızca sürecin uzamasına değil, başvurunun reddedilmesine de neden olabilir. Bu nedenle genel yolla Türk vatandaşlığı başvurularında sürecin başından itibaren hukuki destek alınması tavsiye edilir.

SÜRECİN GENEL AŞAMALARI
Genel yolla Türk vatandaşlığı başvurusu genel olarak aşağıdaki aşamalardan oluşur:
1) Başvuru sahibinin ikamet geçmişinin incelenmesi,
2) Son beş yıllık giriş-çıkış kayıtlarının değerlendirilmesi,
3) Yurtdışı kalış sürelerinin hesaplanması,
4) İkamet izni türlerinin vatandaşlık başvurusu bakımından uygunluğunun kontrol edilmesini,
5) Başvuru sırasında geçerli ikamet izni veya çalışma izni bulunup bulunmadığının tespiti,
6) Türkiye’de yerleşme niyetini gösteren belgelerin hazırlanması,
7) Gelir, meslek, sağlık, medeni hal ve aile belgelerinin tamamlanması,
8) İl Nüfus ve Vatandaşlık Müdürlüğüne başvuru yapılması,
9) Emniyet Genel Müdürlüğü nezdinde parmak izi verme işleminin tamamlanması,
10) Ön inceleme, mülakat ve komisyon süreçlerinin yürütülmesi,
11) Güvenlik ve arşiv araştırmasının tamamlanması,
12) Dosyanın yetkili makamlarca değerlendirilmesi,
13) Uygun görülmesi hâlinde Türk vatandaşlığının kazanılması.

HUKUKİ ÇERÇEVE
Yasal Dayanak
• 5901 Sayılı Türk Vatandaşlığı Kanunu
Türk vatandaşlığının kazanılması, kaybı ve vatandaşlığa ilişkin temel usul ve esasları düzenler.
• 5901 Sayılı Türk Vatandaşlığı Kanunu Madde 11
Genel yolla Türk vatandaşlığının kazanılması için aranan şartları düzenler.
• Türk Vatandaşlığı Kanununun Uygulanmasına İlişkin Yönetmelik
Genel yolla vatandaşlık başvurusunun usul ve esaslarını düzenler.
• 6458 Sayılı Yabancılar ve Uluslararası Koruma Kanunu
İkamet izni, çalışma izninin ikamet izni yerine geçmesi ve ikamette kesinti hükümleri bakımından önem taşır.`

const CITIZENSHIP_DETAIL_PAGES = {
  "genel-yolla-vatandaslik": {
    tr: {
      metadata: {
        breadcrumbLabel: "Genel Yolla Vatandaşlık",
        title: "Genel Yolla Türk Vatandaşlığı Başvurusu",
        description:
          "Türkiye’de 5 yıl ikamet sonrasında genel yolla Türk vatandaşlığı kazanılması, ikamet süresi, gün sayımı ve başvuru süreci.",
      },
      hero: {
        summary: "Türkiye’de 5 Yıl İkamet Sonrasında Türk Vatandaşlığının Kazanılması",
        imageAlt: "Genel yolla vatandaşlık sayfası görseli",
      },
      sections: buildDocumentSections(GENEL_CITIZENSHIP_TEXT),
    },
    en: EMPTY_LOCALIZED_DETAIL_COPY("Citizenship by General Way"),
    ru: EMPTY_LOCALIZED_DETAIL_COPY("Гражданство в общем порядке"),
    ar: EMPTY_LOCALIZED_DETAIL_COPY("الجنسية بالطريق العام"),
    fa: EMPTY_LOCALIZED_DETAIL_COPY("شهروندی از طریق عمومی"),
  },
  "basvuru-sureci": {
    tr: {
      metadata: {
        breadcrumbLabel: "Vatandaşlık Başvuru Süreci",
        title: "Yatırım Yoluyla Türk Vatandaşlığı Başvurusu Süreci",
        description:
          "Yatırım yoluyla Türk vatandaşlığı başvurusu, uygunluk belgesi, ikamet izni ve nüfus başvurusu süreçleri.",
      },
      hero: {
        summary: "",
        imageAlt: "Yatırım yoluyla Türk vatandaşlığı başvurusu süreci sayfası görseli",
      },
      sections: buildDocumentSections(CITIZENSHIP_APPLICATION_PROCESS_TEXT),
    },
    en: EMPTY_LOCALIZED_DETAIL_COPY("Citizenship Application Process"),
    ru: EMPTY_LOCALIZED_DETAIL_COPY("Процесс подачи на гражданство"),
    ar: EMPTY_LOCALIZED_DETAIL_COPY("مسار طلب الجنسية"),
    fa: EMPTY_LOCALIZED_DETAIL_COPY("فرآیند درخواست شهروندی"),
  },
  "bes-yatirimi": {
    tr: {
      metadata: {
        breadcrumbLabel: "BES Yatırımı",
        title: "Bireysel Emeklilik Sistemi (BES) ve Türk Vatandaşlığı",
        description:
          "BES yatırımı yoluyla Türk vatandaşlığı başvurusu, SEDDK uygunluk yazısı ve 3 yıllık taahhüt süreci.",
      },
      hero: {
        summary: "Kapsamlı Rehber",
        imageAlt: "BES yatırımı yoluyla Türk vatandaşlığı sayfası görseli",
      },
      sections: buildDocumentSections(BES_CITIZENSHIP_TEXT),
    },
    en: EMPTY_LOCALIZED_DETAIL_COPY("BES Investment"),
    ru: EMPTY_LOCALIZED_DETAIL_COPY("Инвестиция BES"),
    ar: EMPTY_LOCALIZED_DETAIL_COPY("استثمار BES"),
    fa: EMPTY_LOCALIZED_DETAIL_COPY("سرمایه‌گذاری BES"),
  },
  evlilik: {
    tr: {
      metadata: {
        breadcrumbLabel: "Evlilik Yoluyla Vatandaşlık",
        title: "Evlilik Yoluyla Türk Vatandaşlığı Başvurusu",
        description: "Türk vatandaşı ile evli olan yabancıların evlilik yoluyla Türk vatandaşlığı başvurusunda aranan şartlar ve süreç rehberi.",
      },
      hero: {
        summary: "Türk Vatandaşı ile Evli Olan Yabancıların Vatandaşlık Başvuru Süreci",
        imageAlt: "Evlilik yoluyla vatandaşlık sayfası görseli",
      },
      sections: buildDocumentSections(EVLILIK_CITIZENSHIP_TEXT),
    },
    en: {
      metadata: {
        breadcrumbLabel: "Citizenship by Marriage",
        title: "Citizenship by Marriage",
        description: "Citizenship by Marriage",
      },
      hero: {
        summary: "",
        imageAlt: "Citizenship by marriage page visual",
      },
      sections: [],
    },
    ru: {
      metadata: {
        breadcrumbLabel: "Гражданство через брак",
        title: "Гражданство через брак",
        description: "Гражданство через брак",
      },
      hero: {
        summary: "",
        imageAlt: "Визуал страницы о гражданстве через брак",
      },
      sections: [],
    },
    ar: {
      metadata: {
        breadcrumbLabel: "الجنسية عن طريق الزواج",
        title: "الجنسية عن طريق الزواج",
        description: "الجنسية عن طريق الزواج",
      },
      hero: {
        summary: "",
        imageAlt: "صورة صفحة الجنسية عن طريق الزواج",
      },
      sections: [],
    },
    fa: {
      metadata: {
        breadcrumbLabel: "شهروندی از طریق ازدواج",
        title: "شهروندی از طریق ازدواج",
        description: "شهروندی از طریق ازدواج",
      },
      hero: {
        summary: "",
        imageAlt: "تصویر صفحه شهروندی از طریق ازدواج",
      },
      sections: [],
    },
  },
  pasaport: PASSPORT_ADVANTAGES_PAGE,
} satisfies Record<string, Record<LocaleKey, CitizenshipDetailPageCopy>>;

export type CitizenshipDetailSlug = keyof typeof CITIZENSHIP_DETAIL_PAGES;

export const CITIZENSHIP_DETAIL_SLUGS = Object.keys(
  CITIZENSHIP_DETAIL_PAGES
) as CitizenshipDetailSlug[];

function hasRenderableText(value?: string) {
  return Boolean(value && value.trim().length > 0);
}

function sectionHasContent(section: PageSection) {
  if (section.type === "intro") {
    return (
      hasRenderableText(section.eyebrow) ||
      hasRenderableText(section.title) ||
      section.paragraphs.some(hasRenderableText)
    );
  }

  if (section.type === "plain-bullet") {
    return (
      hasRenderableText(section.eyebrow) ||
      hasRenderableText(section.title) ||
      hasRenderableText(section.description) ||
      section.items.some(hasRenderableText)
    );
  }

  if (section.type === "info-box") {
    return hasRenderableText(section.title) || hasRenderableText(section.desc);
  }

  if (section.type === "faq") {
    return (
      hasRenderableText(section.eyebrow) ||
      hasRenderableText(section.title) ||
      section.items.some(
        (item) => hasRenderableText(item.q) || hasRenderableText(item.a)
      )
    );
  }

  if (section.type === "legal") {
    return (
      hasRenderableText(section.eyebrow) ||
      hasRenderableText(section.title) ||
      section.items.some(
        (item) => hasRenderableText(item.title) || hasRenderableText(item.text)
      )
    );
  }

  if (section.type === "numbered") {
    return (
      hasRenderableText(section.eyebrow) ||
      hasRenderableText(section.title) ||
      hasRenderableText(section.description) ||
      section.items.some(
        (item) => hasRenderableText(item.title) || hasRenderableText(item.desc)
      ) ||
      Boolean(
        section.notice &&
          (hasRenderableText(section.notice.title) ||
            hasRenderableText(section.notice.text))
      )
    );
  }

  if (section.type === "bullet") {
    return (
      hasRenderableText(section.eyebrow) ||
      hasRenderableText(section.title) ||
      hasRenderableText(section.description) ||
      section.items.some(
        (item) => hasRenderableText(item.title) || hasRenderableText(item.desc)
      )
    );
  }

  if (section.type === "table") {
    return (
      hasRenderableText(section.eyebrow) ||
      hasRenderableText(section.title) ||
      hasRenderableText(section.description) ||
      section.headers.some(hasRenderableText) ||
      section.rows.some((row) => row.some(hasRenderableText))
    );
  }

  return false;
}

function hasCitizenshipDetailContent(copy: CitizenshipDetailPageCopy) {
  if (hasRenderableText(copy.hero.summary)) {
    return true;
  }

  return copy.sections.some(sectionHasContent);
}

export const CITIZENSHIP_DETAIL_INDEXABLE_SLUGS = CITIZENSHIP_DETAIL_SLUGS.filter(
  (slug) =>
    SUPPORTED_LOCALES.some((locale) =>
      hasCitizenshipDetailContent(CITIZENSHIP_DETAIL_PAGES[slug][locale])
    )
);

function getEntry(slug: string) {
  return CITIZENSHIP_DETAIL_PAGES[slug as CitizenshipDetailSlug] ?? null;
}

function getCitizenshipRelatedLabel(
  itemSlug: CitizenshipDetailSlug,
  dict: CitizenshipDetailDictionaryLike,
  fallbackDict: CitizenshipDetailDictionaryLike,
  locale: LocaleKey
) {
  if (itemSlug === "basvuru-sureci") {
    return (
      dict.nav?.item_cit_process ??
      fallbackDict.nav?.item_cit_process ??
      CITIZENSHIP_DETAIL_PAGES[itemSlug].tr.metadata.breadcrumbLabel
    );
  }

  return (
    CITIZENSHIP_DETAIL_PAGES[itemSlug][locale]?.metadata.breadcrumbLabel ??
    CITIZENSHIP_DETAIL_PAGES[itemSlug].tr.metadata.breadcrumbLabel
  );
}

function getCanonicalPath(locale: string, slug: string) {
  return `/${locale}${PAGE_PATH_PREFIX}/${slug}`;
}

function getPageUrl(locale: string, slug: string) {
  return `${SITE_URL}${getCanonicalPath(locale, slug)}`;
}

export function buildCitizenshipDetailStaticParams() {
  return CITIZENSHIP_DETAIL_SLUGS.map((slug) => ({ slug }));
}

export function buildLocalizedCitizenshipDetailStaticParams() {
  return SUPPORTED_LOCALES.flatMap((lang) =>
    CITIZENSHIP_DETAIL_SLUGS.map((slug) => ({ lang, slug }))
  );
}

export async function getCitizenshipDetailPageData(
  locale: string,
  slug: string
): Promise<CitizenshipDetailPageData | null> {
  const entry = getEntry(slug);
  if (!entry) return null;

  const dict = (await getDictionary(locale)) as CitizenshipDetailDictionaryLike;
  const safeLocale = getSafeLocale(locale);
  const copy = entry[safeLocale] ?? entry.tr;
  const ui = UI[safeLocale] ?? UI.tr;
  const fallbackDict =
    locale === "tr"
      ? dict
      : ((await getDictionary("tr")) as CitizenshipDetailDictionaryLike);
  const lang = dict.lang ?? safeLocale;

  return {
    slug: slug as CitizenshipDetailSlug,
    lang,
    dir: dict.dir === "rtl" ? "rtl" : "ltr",
    homeLabel: dict.nav?.home ?? fallbackDict.nav?.home ?? "Home",
    backLabel:
      dict.nav?.mega_tc ?? fallbackDict.nav?.mega_tc ?? "Türk Vatandaşlığı",
    relatedTitle: ui.relatedTitle,
    relatedLinks: [
      ...CITIZENSHIP_DETAIL_SLUGS.filter((itemSlug) => itemSlug !== slug).map(
        (itemSlug) => ({
          label: getCitizenshipRelatedLabel(
            itemSlug,
            dict,
            fallbackDict,
            safeLocale
          ),
          slug: itemSlug,
          href: `/${lang}${PAGE_PATH_PREFIX}/${itemSlug}`,
        })
      ),
      {
        label:
          dict.nav?.benefits ??
          fallbackDict.nav?.benefits ??
          "Türk Vatandaşı Olmanın Avantajları",
        slug: "turk-vatandasligi",
        href: `/${lang}/citizenship`,
      },
      {
        label:
          dict.nav?.investment_real_estate ??
          fallbackDict.nav?.investment_real_estate ??
          "Gayrimenkul Yatırımı",
        slug: "gayrimenkul-yatirimi",
        href: `/${lang}/services/gayrimenkul-yatirimi`,
      },
      {
        label:
          dict.nav?.item_more_green ??
          fallbackDict.nav?.item_more_green ??
          "Yeşil Pasaport",
        slug: "yesil-pasaport",
        href: `/${lang}/legal/yesil-pasaport`,
      },
    ],
    consultationLabel: ui.consultationLabel,
    cta: {
      title: ui.ctaTitle,
      description: ui.ctaDescription,
      primaryCta:
        dict.nav?.contact ?? fallbackDict.nav?.contact ?? "Bizimle İletişime Geç",
      secondaryCta: dict.nav?.faq ?? fallbackDict.nav?.faq ?? "SSS",
    },
    copy,
  };
}

export async function buildCitizenshipDetailMetadata(
  locale: string,
  slug: string
): Promise<Metadata> {
  const data = await getCitizenshipDetailPageData(locale, slug);
  if (!data) return {};

  const safeLocale = getSafeLocale(data.lang);
  const alternates = Object.fromEntries(
    SUPPORTED_LOCALES.map((targetLocale) => [
      targetLocale,
      getCanonicalPath(targetLocale, data.slug),
    ])
  );
  const hasContent = hasCitizenshipDetailContent(data.copy);

  return {
    title: `${data.copy.metadata.title} | CitizenshipWeb`,
    description: data.copy.metadata.description,
    alternates: {
      canonical: getCanonicalPath(safeLocale, data.slug),
      languages: {
        ...alternates,
        "x-default": getCanonicalPath("en", data.slug),
      },
    },
    robots: hasContent
      ? undefined
      : {
          index: false,
          follow: false,
        },
    openGraph: {
      title: data.copy.metadata.title,
      description: data.copy.metadata.description,
      url: getCanonicalPath(safeLocale, data.slug),
      type: "article",
      siteName: "CitizenshipWeb",
      images: [
        {
          url: "/gayrimenkul-hero.webp",
          width: 1600,
          height: 900,
          alt: data.copy.metadata.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.copy.metadata.title,
      description: data.copy.metadata.description,
      images: ["/gayrimenkul-hero.webp"],
    },
  };
}

export async function buildCitizenshipDetailSchemas(locale: string, slug: string) {
  const data = await getCitizenshipDetailPageData(locale, slug);
  if (!data) return [];

  const safeLocale = getSafeLocale(data.lang);
  const pageUrl = getPageUrl(safeLocale, data.slug);

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: data.copy.metadata.title,
      description: data.copy.metadata.description,
      url: pageUrl,
      inLanguage: safeLocale,
      primaryImageOfPage: `${SITE_URL}/gayrimenkul-hero.webp`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: data.homeLabel,
          item: `${SITE_URL}/${safeLocale}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: data.backLabel,
          item: `${SITE_URL}/${safeLocale}/citizenship`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: data.copy.metadata.breadcrumbLabel,
          item: pageUrl,
        },
      ],
    },
  ];
}
