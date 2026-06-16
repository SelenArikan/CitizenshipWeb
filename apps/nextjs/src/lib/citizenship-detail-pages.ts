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
Kapsamlı Rehber

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

const CITIZENSHIP_DETAIL_PAGES = {
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
        title: "Evlilik Yoluyla Vatandaşlık",
        description: "Evlilik Yoluyla Vatandaşlık",
      },
      hero: {
        summary: "",
        imageAlt: "Evlilik yoluyla vatandaşlık sayfası görseli",
      },
      sections: [
        {
          type: "intro",
          title: "2.2. Aile İkamet İzni (6458 Sayılı Kanun m. 34–37)",
          paragraphs: [
            "Aile ikamet izni, 6458 sayılı Kanun’un 34 ila 37. maddelerinde düzenlenmiştir. Bu izin; Türk vatandaşı, Mavi Kart sahibi, geçerli ikamet izni sahibi yabancı, mülteci veya ikincil koruma statüsü sahibi bir kişinin belirli aile fertlerine, aile birliğinin Türkiye’de korunması amacıyla verilen ikamet iznidir. Resmî tanıma göre aile ikamet izni şu kişiler için düzenlenebilir:",
          ],
        },
        {
          type: "numbered",
          items: [
            { title: "Yabancı eş," },
            { title: "Kişinin veya eşinin ergin olmayan yabancı çocuğu," },
            { title: "Kişinin veya eşinin engelli/kısıtlı yabancı çocuğu." },
          ],
        },
        {
          type: "intro",
          paragraphs: [
            "Bazı ülkelerde çok eşlilik yasal olsa da Türkiye Cumhuriyeti kanunlarına göre kişiler ancak bir kişiyle evli olabilirler. Bu durum kamu düzeninden kaynaklanmaktadır. Bu sebeple kişiler, uyruk ülkelerinde yasal olarak çok eşli olabilseler dahi, çok eşlilik hâlinde yalnızca ilk eşe aile ikamet izni verilebilir; ancak tüm çocuklar için bu ikamet iznine başvurmak mümkündür.",
            "Çocuk başvurularında, yurt dışında ortak velayet sahibi diğer ebeveynin bulunması hâlinde onun muvafakati de gerekmektedir. Aile ikamet izni, her defasında en fazla üç yıl süreyle verilebilir. Ancak izin süresi, destekleyicinin ikamet veya kalış süresini hiçbir şekilde aşamaz.",
          ],
        },
        {
          type: "intro",
          title: "2.2.1. Aile İkamet İzninde Şartlar",
          paragraphs: [
            "Aile ikamet izninde iki katmanlı bir şart yapısı vardır: destekleyiciye ilişkin şartlar ve başvuran aile ferdine ilişkin şartlar.",
          ],
        },
        {
          type: "intro",
          title: "Destekleyici Kimdir?",
          paragraphs: [
            "Aile ikamet izni; Türkiye’de yasal oturum izni olan yabancı ya da bir Türk vatandaşına bağlı olarak edinilebilen bir ikamet izni türüdür. Bu ikamet izninde, Türkiye’de ikamet izni sahibi kişi veya Türk vatandaşı temel unsurlardan birini oluşturur; bu kişinin evrakları da başvuru dosyasında çok önemli bir rol oynamaktadır. Aile ikamet iznine başvurmak için gerekçe olarak sunulan kişiye “destekleyici” denir.",
          ],
        },
        {
          type: "numbered",
          title: "Destekleyici Açısından Şartlar",
          items: [
            { title: "Tüm aile fertlerini kapsayan geçerli sağlık sigortasına sahip olmak," },
            { title: "Fert başına asgari ücretin üçte birinden az olmamak üzere ve toplamda yeterli aylık gelire sahip olmak (2026 yılı için asgari ücret 28.075 TL’dir)," },
            { title: "Son beş yıl içinde aile düzenine karşı suç işlemediğini adli sicil ile belgeleyebilmek," },
            { title: "Kural olarak en az bir yıl Türkiye’de ikamet etmiş olmak; bu kural aile ikamet izninde en önemli şartlardan biridir. Destekleyici yabancı ise, Türkiye’de geriye dönük bir yıllık yasal ikamet izni sahibi olması en önemli şartlardan birini oluşturur." },
            { title: "Adres kayıt sistemine kayıtlı olmak." },
          ],
        },
        {
          type: "numbered",
          title: "Başvuran (İkamet İzni Talep Eden) Açısından Şartlar",
          items: [
            { title: "Kalış amacıyla ilgili bilgi ve belgeleri sunmak," },
            { title: "Destekleyici ile birlikte yaşadığını veya yaşama niyetini ortaya koymak," },
            { title: "Eşler bakımından her iki tarafın da 18 yaşını doldurmuş olması," },
            { title: "Kanun’un 7. maddesi kapsamında Türkiye’ye girişi yasaklı kişilerden olmamak," },
            { title: "Evliliğin sırf aile ikamet izni almak amacıyla yapılmamış olması." },
          ],
        },
        {
          type: "intro",
          title: "2.2.2. Gerekli Evrak Listesi",
          paragraphs: [],
        },
        {
          type: "numbered",
          title: "Başvuran İçin Gerekli Belgeler",
          items: [
            { title: "Başvuru formu" },
            { title: "Pasaport veya pasaport yerine geçen belgenin fotokopisi" },
            { title: "Doğum belgesi" },
            { title: "İki adet biyometrik fotoğraf" },
            { title: "Harç ve belge bedeli makbuzu" },
            { title: "Gerekiyorsa tek giriş vize harcı makbuzu" },
            { title: "Evlilik belgesi; Türk vatandaşı ile evlilikte vukuatlı nüfus kayıt örneği ya da evliliği kanıtlayan onaylı belge" },
            { title: "UETS belgesi" },
          ],
        },
        {
          type: "numbered",
          title: "Çocuk adına yapılan başvurularda ayrıca aşağıdaki belgeler aranabilir:",
          items: [
            { title: "Doğum belgesi," },
            { title: "Boşanma hâlinde velayet belgesi," },
            { title: "Anne veya babadan biri ikamet izni başvurusunda bulunmuyorsa, başvuruda bulunmayan ebeveynin noter huzurunda düzenlediği muvafakati," },
            { title: "Aile kaydı belgesi (çocuk ile ebeveynin aile birliğini gösteren belge)," },
            { title: "Destekleyici tarafından, başvurucunun ikamet izni süresi içinde masraflarının karşılanacağını gösteren noter onaylı taahhütname," },
            { title: "Ebeveynin ölümü hâlinde ölüm belgesi." },
          ],
        },
        {
          type: "intro",
          paragraphs: [
            "Aile ikamet izni kural olarak kişilerin ergin olmayan çocuklarını kapsamaktaysa da bu konuda önemli bir istisna bulunmaktadır. Ergin çocuklar, Türkiye’de eğitim görüyor olmaları hâlinde 25 yaşına kadar aile ikamet izni alma hakkına sahiptirler. Bu şekilde yapılacak başvurularda ergin çocuğun öğrenci belgesinin de ikamet izni başvuru dosyasına eklenmesi gerekir.",
          ],
        },
        {
          type: "numbered",
          title: "Destekleyici İçin Gerekli Belgeler",
          items: [
            { title: "Destekleyici Türk vatandaşı ise kimlik kartının aslı ve fotokopisi; yabancı ise pasaport fotokopisi ile ikamet/çalışma izni veya ilgili statü belgesi," },
            { title: "Yeterli ve düzenli geliri gösteren belge," },
            { title: "Tüm aile bireylerini kapsayan geçerli sağlık sigortası," },
            { title: "Adli sicil kaydı," },
            { title: "Adres kayıt belgesi." },
          ],
        },
        {
          type: "intro",
          paragraphs: [
            "Yurt dışından getirilecek tüm belgelerin apostilli ve noter onaylı Türkçe tercümeli olması gerekmektedir.",
          ],
        },
        {
          type: "intro",
          title: "2.2.3. Vatandaşlık Perspektifi",
          paragraphs: [
            "Bu yöntemle vatandaşlık yalnızca genel başvuru yoluyla mümkündür. Aranan koşullar şunlardır:",
          ],
        },
        {
          type: "numbered",
          items: [
            { title: "Türkiye’de fiilen ve sürekli ikamet," },
            { title: "Başvurucunun son beş yıl içinde toplam yurt dışı kalış süresinin 365 günü, son bir yıl içinde ise altı ayı geçmemesi," },
            { title: "Kesintisiz ve yasal aile ikamet izni statüsünün korunması." },
          ],
        },
        {
          type: "info-box",
          title: "Önemli not:",
          desc: "Sık ve uzun süreli yurt dışı çıkışlar, ikamet süresinin sıfırlanmasına neden olabilir.",
        },
      ],
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
          label:
            CITIZENSHIP_DETAIL_PAGES[itemSlug][safeLocale]?.metadata
              .breadcrumbLabel ??
            CITIZENSHIP_DETAIL_PAGES[itemSlug].tr.metadata.breadcrumbLabel,
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
          url: "/gayrimenkul-hero.jpg",
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
      images: ["/gayrimenkul-hero.jpg"],
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
      primaryImageOfPage: `${SITE_URL}/gayrimenkul-hero.jpg`,
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
