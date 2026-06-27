<?php
require_once 'includes/schema.php';
$seoKey = 'basvuru-sureci';
include 'includes/header.php';

$backLabel = __t('nav.mega_tc') ?? 'Türk Vatandaşlığı';
if (empty($backLabel)) {
    $backLabel = 'Türk Vatandaşlığı';
}

$consultationLabels = [
    'tr' => 'Danışmanlık',
    'en' => 'Consultation',
    'ru' => 'Консультация',
    'ar' => 'استشارة',
    'fa' => 'مشاوره',
];
$consultationLabel = $consultationLabels[$lang] ?? 'Danışmanlık';

$ctaTitles = [
    'tr' => 'Dosyanızı birlikte planlayalım',
    'en' => 'Let us plan your file together',
    'ru' => 'Давайте спланируем ваше досье вместе',
    'ar' => 'لنخطط ملفك معاً',
    'fa' => 'بیایید پرونده شما را با هم برنامه ریزی کنیم',
];
$ctaTitle = $ctaTitles[$lang] ?? 'Dosyanızı birlikte planlayalım';

$ctaDescriptions = [
    'tr' => 'Uygunluk, belge akışı ve başvuru sırasını birlikte değerlendirelim.',
    'en' => 'We can review eligibility, document flow, and filing order together.',
    'ru' => 'Вместе оценим соответствие условиям, комплект документов и порядок подачи.',
    'ar' => 'يمكننا مراجعة الأهلية وتسلسل المستندات وترتيب التقديم معاً.',
    'fa' => 'می توانیم شرایط احراز, جریان مدارک و ترتیب ثبت پرونده را با هم بررسی کنیم.',
];
$ctaDescription = $ctaDescriptions[$lang] ?? 'Uygunluk, belge akışı ve başvuru sırasını birlikte değerlendirelim.';

$CITIZENSHIP_APPLICATION_PROCESS_TEXT = <<<EOT
Yatırım Yoluyla Türk Vatandaşlığı Başvurusu Süreci

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
Türkiye’de nüfus müdürlüklerinden veya şartlara göre Türkiye’nin dış temsilcilikleri aracılığıyla başvurusu yapılabilir.
EOT;

// Parser functions matching next.js document sections builder
function is_document_bullet_line($line) {
    return preg_match('/^(?:[•✔👉-]|[a-zçğıöşü]\)|[0-9]+\))\s*/ui', $line);
}

function is_document_heading($line, $index) {
    if ($index === 0) return true;
    if (preg_match('/^\d+(?:\.\d+)*[.)]?\s+/u', $line)) return true;
    if (preg_match('/^[IVXLCDM]+\.\s+/u', $line)) return true;
    if (preg_match('/^(BÖLÜM|AŞAMA|Adım)\s+/ui', $line)) return true;
    if (preg_match('/\?\s*$/u', $line)) return true;
    
    $headings = [
        'Başvuru Süreci', 'Hizmet Kapsamımız', 'Sık Sorulan Sorular', 
        'Kimler Başvurabilir', 'Yatırımı Yapan Kişi Dışında Kimler Vatandaşlık Alabilir', 
        'Kimler Bu Yoldan Vatandaşlık Alamaz', 'İstisnai Durumlar', 
        'BES’e Özgü (SEDDK Uygunluk Sürecinde) Verilen Belgeler ve Bilgiler', 
        'BES Sistemiyle Vatandaşlık Başvurusu Süreç Akışı', 
        'Süreç Akışı (Yatırımdan Vatandaşlık Başvurusuna)', 
        'Vatandaşlık Planlarında Kritik Sınırlamalar (3 Yıl Boyunca)', 
        'Büromuz Ne Yapar? (Hizmet Kapsamı Örneği)'
    ];
    foreach ($headings as $h) {
        if (strcasecmp($line, $h) === 0) return true;
    }
    
    $letters = preg_replace('/[^A-Za-zÇĞİÖŞÜçğıöşü]/u', '', $line);
    if (mb_strlen($letters) >= 8) {
        if ($letters === mb_strtoupper($letters, 'UTF-8')) {
            return true;
        }
    }
    return false;
}

function build_document_sections($text) {
    $text = str_replace("\r", "", $text);
    $lines = explode("\n", $text);
    $cleanLines = [];
    foreach ($lines as $line) {
        $trimmed = trim($line);
        if ($trimmed !== '') {
            $cleanLines[] = $trimmed;
        }
    }
    
    $sections = [];
    $intro = null;
    $bulletItems = [];
    
    $flushBullets = function() use (&$sections, &$bulletItems) {
        if (count($bulletItems) > 0) {
            $sections[] = [
                'type' => 'plain-bullet',
                'items' => $bulletItems
            ];
            $bulletItems = [];
        }
    };
    
    $flushIntro = function() use (&$sections, &$intro) {
        if ($intro !== null) {
            $hasTitle = !empty($intro['title']);
            $hasParagraphs = false;
            foreach ($intro['paragraphs'] as $p) {
                if (trim($p) !== '') {
                    $hasParagraphs = true;
                    break;
                }
            }
            if ($hasTitle || $hasParagraphs) {
                $sections[] = $intro;
            }
            $intro = null;
        }
    };
    
    foreach ($cleanLines as $index => $line) {
        if (is_document_bullet_line($line)) {
            $flushIntro();
            $bulletItems[] = $line;
            continue;
        }
        
        $flushBullets();
        
        if (is_document_heading($line, $index)) {
            $flushIntro();
            $intro = [
                'type' => 'intro',
                'title' => $line,
                'paragraphs' => []
            ];
            continue;
        }
        
        if ($intro === null) {
            $intro = [
                'type' => 'intro',
                'title' => '',
                'paragraphs' => []
            ];
        }
        $intro['paragraphs'][] = $line;
    }
    
    $flushBullets();
    $flushIntro();
    
    return $sections;
}

$sections = build_document_sections($CITIZENSHIP_APPLICATION_PROCESS_TEXT);
?>

    <main dir="<?= $dict['dir'] ?? 'ltr' ?>" class="bg-white">

      <!-- ── BREADCRUMB + HERO ── -->
      <section class="relative overflow-hidden border-b border-gray-100 bg-white pt-8 pb-12">
        <div class="relative mx-auto max-w-6xl px-6">
          <!-- Breadcrumb -->
          <nav class="mb-8 flex items-center gap-1.5 text-xs text-gray-400" aria-label="Breadcrumb">
            <a href="index.php?lang=<?= $lang ?>" class="transition hover:text-gray-700"><?= htmlspecialchars(__t('nav.home') ?? 'Anasayfa') ?></a>
            <span>/</span>
            <span class="transition hover:text-gray-700"><?= htmlspecialchars($backLabel) ?></span>
            <span>/</span>
            <span class="text-gray-700 font-medium"><?= htmlspecialchars(__t('nav.item_cit_process') ?? 'Vatandaşlık Başvuru Süreci') ?></span>
          </nav>

          <!-- Başlık -->
          <h1 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-950 md:text-4xl">
            <?= htmlspecialchars(__t('nav.item_cit_process') ?? 'Vatandaşlık Başvuru Süreci') ?>
          </h1>
          <p class="mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
            Yatırım yoluyla Türk vatandaşlığı başvurusu, uygunluk belgesi, ikamet izni ve nüfus başvurusu süreçleri.
          </p>
        </div>
      </section>

      <!-- ── ANA İÇERİK + SIDEBAR ── -->
      <section class="bg-white py-16">
        <div class="mx-auto max-w-6xl px-6">
          <div class="flex flex-col gap-16 lg:flex-row lg:gap-20">

            <!-- SOL: İçerik Bölümleri -->
            <div class="min-w-0 flex-1">
              <?php
              foreach ($sections as $s) {
                  if ($s['type'] === 'intro') {
                      echo render_intro_section($s, $lang);
                  } elseif ($s['type'] === 'plain-bullet') {
                      echo render_plain_bullet_section($s, $lang);
                  } elseif ($s['type'] === 'numbered') {
                      echo render_numbered_section($s, $lang);
                  }
              }
              ?>

              <!-- İletişim Notu -->
              <div class="border-t border-gray-100 pt-10 text-sm leading-relaxed text-gray-500">
                <p>
                  <?= htmlspecialchars($ctaDescription) ?>
                  <a
                    href="contact.php?lang=<?= $lang ?>"
                    class="border-b border-gray-400 pb-px font-bold text-gray-800 transition hover:border-red-700 hover:text-red-700"
                  >
                    <?= htmlspecialchars(__t('nav.contact') ?? 'Bizimle İletişime Geç') ?>
                  </a>
                </p>
              </div>
            </div>

            <!-- SAĞ: Sticky Sidebar -->
            <aside class="w-full lg:w-64 lg:shrink-0">
              <div class="lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto pr-2 scrollbar-thin space-y-5">

                <!-- Danışmanlık Kutusu -->
                <div class="border border-gray-100 p-5">
                  <p class="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
                    <?= htmlspecialchars($consultationLabel) ?>
                  </p>
                  <p class="mb-5 text-sm leading-relaxed text-gray-600">
                    <?= htmlspecialchars($ctaTitle) ?>
                  </p>
                  <a
                    href="contact.php?lang=<?= $lang ?>"
                    class="block border border-gray-900 bg-gray-900 px-5 py-2.5 text-center text-xs font-bold uppercase tracking-widest text-white transition hover:bg-gray-800"
                  >
                    <?= htmlspecialchars(__t('nav.contact') ?? 'Bizimle İletişime Geç') ?>
                  </a>
                </div>

                <!-- Diğer Seçenekler -->
                <div class="border border-gray-100">
                  <div class="border-b border-gray-100 bg-gray-50 px-5 py-3">
                    <p class="text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
                      <?= htmlspecialchars(__t('services_page.detail_others') ?? 'Diğer Seçenekler') ?>
                    </p>
                  </div>
                  <ul class="divide-y divide-gray-100">
                    <?php
                    $allPrograms = [
                        ['label' => __t('nav.investment_real_estate') ?? 'Gayrimenkul Yatırımı', 'href' => 'gayrimenkul-yatirimi.php?lang=' . $lang, 'slug' => 'gayrimenkul-yatirimi'],
                        ['label' => __t('nav.investment_deposit') ?? 'Mevduat Hesabı', 'href' => 'mevduat-hesabi.php?lang=' . $lang, 'slug' => 'mevduat-hesabi'],
                        ['label' => __t('nav.investment_bes') ?? 'BES Yatırımı', 'href' => 'bes-yatirimi.php?lang=' . $lang, 'slug' => 'bes-yatirimi'],
                        ['label' => __t('nav.investment_employment') ?? 'İstihdam Oluşturmak', 'href' => 'istihdam-olusturmak.php?lang=' . $lang, 'slug' => 'istihdam-olusturmak'],
                        ['label' => __t('nav.investment_fund') ?? 'Gayrimenkul Yatırım Fonu', 'href' => 'gayrimenkul-yatirim-fonu.php?lang=' . $lang, 'slug' => 'gayrimenkul-yatirim-fonu'],
                        ['label' => __t('nav.investment_bonds') ?? 'Devlet Borçlanma Araçları', 'href' => 'devlet-borclanma-araclari.php?lang=' . $lang, 'slug' => 'devlet-borclanma-araclari'],
                        ['label' => __t('nav.item_cit_gen') ?? 'Genel Yolla Vatandaşlık', 'href' => 'genel-yolla-vatandaslik.php?lang=' . $lang, 'slug' => 'genel-yolla-vatandaslik'],
                        ['label' => __t('nav.item_cit_marriage') ?? 'Evlilik Yoluyla Vatandaşlık', 'href' => 'evlilik-yoluyla-vatandaslik.php?lang=' . $lang, 'slug' => 'evlilik-yoluyla-vatandaslik'],
                        ['label' => __t('nav.item_cit_process') ?? 'Vatandaşlık Başvuru Süreci', 'href' => 'basvuru-sureci.php?lang=' . $lang, 'slug' => 'basvuru-sureci'],
                        ['label' => __t('nav.item_cit_passport') ?? 'Türk Pasaportunun Avantajları', 'href' => 'pasaport.php?lang=' . $lang, 'slug' => 'pasaport'],
                    ];
                    foreach ($allPrograms as $prog):
                        if ($prog['slug'] === $seoKey) continue;
                    ?>
                      <li>
                        <a
                          href="<?= htmlspecialchars($prog['href']) ?>"
                          class="flex items-center justify-between px-5 py-3.5 text-sm text-gray-700 transition hover:bg-gray-50 hover:text-red-700"
                        >
                          <?= htmlspecialchars($prog['label']) ?>
                          <svg class="h-3.5 w-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7-7" />
                          </svg>
                        </a>
                      </li>
                    <?php endforeach; ?>
                  </ul>
                </div>

              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>

<?php include 'includes/footer.php'; ?>
