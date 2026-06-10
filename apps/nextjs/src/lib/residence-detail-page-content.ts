import type { PageSection } from "@/components/ServicePageLayout";
import {
  RESIDENCE_PERMIT_SLUGS,
  type ResidencePageCopy,
  type ResidencePermitDetail,
  type ResidencePermitSlug,
} from "@/lib/residence-permits";

export type ResidenceServicePageCopy = {
  metadata: {
    breadcrumbLabel: string;
    title: string;
    description: string;
  };
  hero: {
    summary: string;
    imageAlt: string;
    backgroundImage?: string;
  };
  sections: PageSection[];
};

const LONG_TERM_RESIDENCE_TEXT = String.raw`1. UZUN DÖNEM İKAMET İZNİ
Uzun dönem ikamet izni, 6458 sayılı Kanun’un 42 ila 45. maddelerinde düzenlenen ve yabancının Türkiye’de kalışını süre sınırı olmaksızın devam ettirmesine imkân tanıyan ikamet iznidir. Diğer pek çok ikamet türünden farklı olarak süresiz düzenlenir; yani belirli aralıklarla süre uzatma mantığına dayanan kısa dönem izinlerden ayrılır.
Uzun dönem ikamet izni, Türkiye’de uzun süre yasal ve kesintisiz şekilde yaşamış yabancılara verilen süresiz bir ikamet izni türüdür. 6458 sayılı Kanun’a göre bu izin, Bakanlığın onayıyla valilikler tarafından düzenlenir. Ancak uygulamada önemli bir ayrım vardır: uzun dönem ikamet izni bir ikamet statüsüdür; başlı başına çalışma izni belgesi yerine geçmez. e-İkamet başvuru belgelerinde açıkça, “ikamet izni Türkiye’de çalışma hakkı sağlamaz; çalışacak yabancıların 6735 sayılı Kanun kapsamında çalışma izni veya çalışma izni muafiyeti başvurusu yapması gerekir” ifadesi yer almaktadır. Bu nedenle Türkiye’de çalışmayı planlayan kişilerin, durumlarını ayrıca çalışma mevzuatı yönünden de değerlendirmesi gerekir.
1.1. Kimler Başvurabilir?
Uzun dönem ikamet iznine, kural olarak Türkiye’de kesintisiz en az sekiz yıl ikamet izniyle kalmış yabancılar başvurabilir. Ayrıca kanunda, Bakanlığın veya Göç Politikaları Kurulu’nun belirlediği özel şartlara uyan kişiler için de bu izin öngörülmüştür. Buna karşılık mülteci, şartlı mülteci, ikincil koruma statüsü sahipleri, insani ikamet izni sahipleri ve geçici koruma altındaki kişiler, uzun dönem ikamet iznine geçiş hakkından yararlanamaz.
Buradaki “sekiz yıl” hesabında önemli bir ayrıntı bulunmaktadır: Göç İdaresi açıklamasına göre öğrenci ikamet izniyle geçirilen sürenin yarısı, diğer ikamet izinleriyle geçirilen sürenin ise tamamı dikkate alınır. Bu nedenle sekiz yıllık sürenin dolup dolmadığı, somut ikamet geçmişine göre ayrıca hesaplanır.
1.2. Şartlar Nelerdir?
Uzun dönem ikamet iznine geçişte, Kanun’un 43. maddesinde sayılan temel şartlar aranır. Bu şartlar şunlardır:
Türkiye’de kesintisiz en az sekiz yıl ikamet izniyle kalmış olmak,
Son üç yıl içinde sosyal yardım almamış olmak,
Kendisinin veya varsa ailesinin geçimini sağlayacak yeterli ve düzenli gelir sahibi olmak,
Geçerli sağlık sigortasına sahip olmak,
Kamu düzeni veya kamu güvenliği açısından tehdit oluşturmamak.
Bazı özel durumlarda, Göç Politikaları Kurulu’nun belirlediği şartlara göre başvuran kişiler için bu şartların bir kısmı aranmayabilir; ancak genel kural yukarıda sayılan beş şarttır.
1.3. Gerekli Evrak Listesi
Resmî e-İkamet belge listesine göre uzun dönem ikamet izni başvurularında istenen temel belgeler şunlardır:
İkamet izni başvuru formu
Pasaport veya pasaport yerine geçen belgenin fotokopisi
Son altı ay içinde çekilmiş iki adet biyometrik fotoğraf
İkamet izni belge bedelinin ödendiğine dair makbuz
Güncel adres belgesi / yerleşim yeri belgesi
Geçerli sağlık sigortası
Adli sicil kaydı
Yeterli ve düzenli maddi imkânı gösteren belge
Son üç yıl içinde sosyal yardım alınmadığını gösteren belge
UETS (Ulusal Elektronik Tebligat Sistemi) belgesi
Belge detaylarında dikkat edilmesi gereken önemli noktalar şunlardır:
İkamet izni başvurularında adres için e-Devlet’ten alınmış güncel yerleşim yeri belgesi ve buna ek olarak elektrik, su, doğalgaz veya sabit telefon faturası ya da yeni abonelik sözleşmesi istenebilir.
Sağlık sigortası bakımından SGK kapsamını gösteren belge, genel sağlık sigortası başvuru belgesi veya özel sağlık sigortası poliçesi kabul edilebilir. Ancak özellikle sağlık sigortasının kapsamı konusunda hukuki destek almak; hem ikamet izni başvurusunun kabul edilebilirliği hem de sigortanın hastanelerde fiilen kullanılabilirliği açısından büyük önem arz etmektedir.
Adli sicil kaydı hem başvuranın kendi ülkesinden hem de Türk makamlarından istenebilecek şekilde düzenlenmiştir; yurt dışından alınan belgelerde kural olarak apostil şerhi ve noter onaylı Türkçe tercüme aranır.
Gelir belgesi bakımından e-İkamet listesinde, başvuran dâhil her aile ferdi için en az asgari ücretin üçte biri, toplamda ise en az asgari ücret düzeyinde gelir aranacağı belirtilmektedir (2026 yılı için asgari ücret 28.075 TL’dir). Üçüncü kişilerin gelir taahhütleri tek başına yeterli kabul edilmez.
Son üç yılda sosyal yardım alınmadığına ilişkin belgenin, Sosyal Yardımlaşma ve Dayanışma Vakıflarından alınması öngörülmüştür.
Çocuk adına başvuru yapılıyorsa doğum belgesi, velayet belgesi, muvafakatname, ölüm belgesi veya gaiplik belgesi gibi ek evraklar da istenebilir. Yurt dışından alınmış olmaları hâlinde bu belgeler için de apostil ve noter onaylı tercüme şartı uygulanır.
1.4. Başvuru Süreci Nasıl İşler?
Başvuru süreci, kural olarak e-İkamet sistemi üzerinden yürür. Başvuru sahibi önce sistemde ön başvurusunu oluşturur, sistemin verdiği başvuru formunu ve istenen belge listesini alır; ardından randevu ya da dosya teslim sürecine uygun şekilde evraklarını hazırlar.
Başvuru dosyası il göç idaresine sunulduktan sonra idare; başvuranın sekiz yıllık kesintisiz ikamet süresini, gelir ve sigorta durumunu, sosyal yardım alıp almadığını ve kamu düzeni ile kamu güvenliği yönünden durumunu inceler. Gerek görülmesi hâlinde ek bilgi ve belge talep edilebilir. Başvurunun olumlu sonuçlanması durumunda uzun dönem ikamet izni süresiz olarak düzenlenir.
Uzun dönem ikamet izni süresiz olmakla birlikte tamamen dokunulmaz bir statü değildir. Kanun’a göre kişi; kamu düzeni veya kamu güvenliği açısından ciddi tehdit oluşturursa ya da sağlık, eğitim veya ülkesindeki zorunlu kamu hizmeti dışındaki bir nedenle kesintisiz bir yıldan fazla Türkiye dışında kalırsa izin iptal edilebilir.`;

const REAL_ESTATE_RESIDENCE_TEXT = String.raw`2.1. Gayrimenkul İkamet İzni (6458 Sayılı Kanun m. 31/1-b)
Gayrimenkul (b bendi) ikamet izni, yabancı uyruklu kişilerin Türkiye’de konut niteliğinde bir taşınmaz edinmeleri hâlinde başvurabildikleri kısa dönem ikamet izni türüdür. 6458 sayılı Yabancılar ve Uluslararası Koruma Kanunu kapsamında düzenlenen bu izin; Türkiye’de gayrimenkul sahibi olan yabancılara, belirli sürelerle (genellikle bir ila iki yıl) ikamet etme hakkı tanır.
6458 sayılı Kanun’un 31. maddesinin 1. fıkrasının (b) bendiyle öngörülen taşınmaz ikamet izni; büyükşehirlerde 200.000 USD ve üzeri, diğer şehirlerde ise en az 75.000 USD ve üzeri bedelle gayrimenkul satın alınmasına dayalı bir ikamet izni türüdür. Bu ikamet izni vatandaşlık için bir yatırım programı değildir ve Türk vatandaşlığına doğrudan hak sağlamaz.
2.1.1. Temel Şartlar
İkamet iznine başvuruda kullanılacak taşınmaz; oturuma hazır, tapulu ve iskânlı olmalıdır. Gayrimenkul satış vaadi sözleşmesi ile gayrimenkul ikamet iznine başvurmak mümkün değildir; dolayısıyla tapunun başvurucu adına devredilmiş olması gerekir.
Gayrimenkul bedeli: büyükşehirlerde en az 200.000 USD, diğer şehirlerde en az 75.000 USD olmalıdır.
Gayrimenkul, ikamet izni için yalnızca açık bir bölgede bulunmalıdır. İkamet izni başvurusu için uygun görülmeyen bölgeler mevcuttur; bu bölgelere “kapalı bölge” adı verilir. Yatırımın tüm şartları uygun olsa dahi bu bölgelerde taşınmaz ikamet izni almak mümkün değildir.
Tapu, yatırımcı adına düzenlenmelidir.
Mülk sahibi için statü gayrimenkul ikamet iznidir. Ancak mülk sahibinin ailesi için durum ilk başvuruda farklıdır.
İlk ikamet izni süresi: İlk başvuruda bir yıllık ikamet izni verilmesi esastır. Bununla birlikte Göç İdaresi’nin bu yönde takdir yetkisi bulunmakta olup bir yıldan uzun süreli ikamet izni alınması da mümkündür. Gayrimenkul ikamet izni; her yıl yenilenebilen ve yenileme dönemlerinde iki ila üç yıllık ikamet izni talebinde bulunulabilen bir ikamet izni türüdür. Uzatma başvuruları, şartların sağlanması koşuluyla sayı sınırlamasına bağlı değildir. İkamet izni süresi dolduğunda her zaman yenileme başvurusunda bulunulabilir.
Kapalı bir bölgede gayrimenkul satın alınması, bedel 200.000 USD’nin üzerinde olsa dahi ikamet izni reddi sebebidir.
Türkiye’de taşınmaz edinimine bağlı kısa dönem ikamet izni (b bendi) başvurularında en önemli konulardan biri, taşınmazın bulunduğu yerin “açık bölge” mi yoksa “kapalı bölge” mi olduğudur. Bu uygulama, 6458 sayılı Yabancılar ve Uluslararası Koruma Kanunu ve ilgili idari düzenlemeler çerçevesinde Göç İdaresi Başkanlığı tarafından yürütülmektedir.
2.1.2. Açık ve Kapalı Bölge Uygulaması
Kapalı Bölge Nedir?
Kapalı bölge; yabancıların taşınmaz edinimine bağlı olarak ikamet izni alamayacağı mahalle veya semtleri ifade eder. Kapalı bölge uygulamasının temel amaçları şunlardır:
Belirli mahallelerde yabancı nüfus yoğunluğunun aşırı artmasını önlemek,
Demografik dengenin korunmasını sağlamak,
Kamu düzeni ve sosyal uyumun sağlanmasına katkıda bulunmak.
Göç İdaresi; yabancı nüfus oranı belirli bir eşiği (uygulamada %20 sınırı esas alınmaktadır) aşan mahalleleri kapalı bölge olarak ilan etmektedir. Bu mahallelerde:
Yeni taşınmaz ikamet izni başvuruları kabul edilmez,
Mevcut izinler uzatılabilir (istisnai durumlara göre değerlendirilir),
Vatandaşlık başvurusu ayrıca değerlendirilir; otomatik hak doğmaz.
Açık Bölge Nedir?
Açık bölge; yabancıların taşınmaz edinerek kısa dönem ikamet izni başvurusu yapabileceği mahalleleri ifade eder. Bu bölgelerde aşağıdaki koşulların sağlanması hâlinde ikamet izni başvurusu yapılabilir:
Taşınmaz değer şartının sağlanmış olması,
Tapunun başvuru sahibinin adına kayıtlı olması,
Diğer genel şartların mevcut olması.
Bölgeler Nasıl Belirlenir?
Kapalı ve açık bölgeler; il bazında değil, ilçe hatta mahalle bazında belirlenir. Göç İdaresi Başkanlığı:
Yabancı nüfus oranlarını,
Göç yoğunluğunu,
Sosyal ve idari risk analizlerini
değerlendirerek mahalle bazlı karar alır. Bu listeler zaman zaman güncellenebilmektedir; bir mahalle bugün açık iken ileride kapalı hâle gelebilir.
Mevcut durumda İstanbul’da on ilçe yeni ikamet izni başvurusuna kapalı durumdadır. Yürürlükteki düzenlemelerle ikamete kapalı ilan edilen ilçeler şunlardır: Fatih, Esenyurt, Avcılar, Bahçelievler, Başakşehir, Bağcılar, Esenler, Küçükçekmece, Sultangazi ve Zeytinburnu.
Ankara’da Altındağ, Mamak ve Keçiören; İzmir’de ise Buca, Bornova ve Konak ilçeleri kapalı bölge kapsamındadır. Ayrıca toplam 63 ilde 1.169 mahalle yeni yabancı kaydına kapatılmış olup, İstanbul ilinde kapalı mahalle sayısı 54’tür.
Bu liste, Göç İdaresi Başkanlığı tarafından güncellenebilmektedir. Dolayısıyla yatırım yapmadan önce büyükşehir ve diğer şehirler ayrımının doğru tespit edilmesi, kapalı–açık bölge ayrımının netleştirilmesi ve yatırımın hangi usulle yapılacağı konusunda hukuki destek alınması hayati öneme sahiptir.
2.1.3. Aile Statüsü
Gayrimenkul ikamet iznine yalnızca satın alınan konutun tapu kaydında ismi bulunan kişiler başvurabilir. Bir başka deyişle tapu sahibinin ailesi, kendisi gibi gayrimenkul ikamet iznine hak kazanamaz. Ancak gayrimenkul ikamet iznine sahip kişinin ailesi de kendisi gibi ikamet izni sahibi olabilmektedir. Aile üyeleri için ilk başvuruda turistik ikamet, uzatma başvurularında ise aile ikamet iznine başvurmak mümkündür.
İlk başvuruda:
Yatırımcı: Gayrimenkul ikamet izni
Eş ve çocuklar: Turistik ikamet izni
Yenileme aşamasında:
Aile üyeleri turistik ikamet iznini standart şekilde yenileyebilir veya
Aile ikamet iznine geçiş yapabilir.
Uzatma başvurusunda sayı sınırı bulunmamaktadır.
2.1.4. Gayrimenkulün Kullanımı
İkamet izni alındıktan sonra kiraya verilmesi yasaktır.
Yatırımcı, satın alınan konutta bizzat ikamet etmek zorundadır.
Gayrimenkulün ticari amaçla kullanılması şu sonuçlara yol açabilir:
İkamet izninin yenilenmemesi,
Verilmiş ikamet izninin iptali.
2.1.5. Gerekli Belgeler
Pasaportun ilk sayfasının fotoğrafı
Apostilli ve tasdikli doğum belgesi
Apostilli ve tasdikli adli sicil kaydı
Numarataj belgesi (tapu ve pasaport ile ilgili belediyeden alınır)
DASK (zorunlu deprem sigortası)
Gayrimenkul değerleme raporu (ekspertiz)
Döviz bozdurma belgeleri (DAB)
Türk bankasından hesap dökümü
Tapu fotoğrafı
Giriş damgası fotoğrafı ve vize
Biyometrik fotoğraflar
UETS – Ulusal Elektronik Tebligat Sistemi belgesi (ikamet izni yenilemelerinde)
Belgeler listesi, aile durumuna ve başvurucunun uyruk ülkesine göre değişebilmektedir. Güncel uygulama açısından belirtmek gerekir ki 01.01.2025 tarihinden sonra edinilen taşınmazlarda ekspertiz raporu, döviz alım belgesi ve ödeme dekontu gibi evraklar talep edilmemekte; yalnızca taşınmazın 200.000 USD’nin üzerinde bir değere sahip olmasına bakılmaktadır.
Burada bilhassa dikkat edilmesi gereken iki husus vardır: tapu devir tarihi itibarıyla 200.000 USD şartının sağlanıyor olması ve tapu devrinde harca esas gösterilen değerin gerçek değer; yani en az 200.000 USD olması gerekliliğidir. Taşınmaz için ödenmiş olan bedel 200.000 USD’nin üzerinde olmasına rağmen tapuda daha düşük bir bedel gösterilmesi durumunda taşınmaz, ikamete elverişli sayılmayacaktır. Aynı şekilde, satıcıyla anlaşılan tarihte 200.000 USD karşılığı ödeme yapılmış olsa dahi tapu devir tarihinde Türk lirasına çevrilen rakamın 200.000 USD’nin altına düşmesi hâlinde de taşınmazın (b) bendi taşınmaz ikameti kapsamında kullanılması mümkün olmayacaktır.
2.1.6. Vatandaşlık Perspektifi
Bu yöntemle vatandaşlık yalnızca genel başvuru yoluyla mümkündür. Aranan koşullar şunlardır:
Türkiye’de fiilen ve sürekli ikamet,
Başvurucunun son beş yıl içinde toplam yurt dışı kalış süresinin 365 günü, son bir yıl içinde ise altı ayı geçmemesi,
Kesintisiz ve yasal gayrimenkul ikamet izni statüsünün korunması.
Önemli not: Sık ve uzun süreli yurt dışı çıkışlar, ikamet süresinin sıfırlanmasına neden olabilir.`;

const FAMILY_RESIDENCE_TEXT = String.raw`2.2. Aile İkamet İzni (6458 Sayılı Kanun m. 34–37)
Aile ikamet izni, 6458 sayılı Kanun’un 34 ila 37. maddelerinde düzenlenmiştir. Bu izin; Türk vatandaşı, Mavi Kart sahibi, geçerli ikamet izni sahibi yabancı, mülteci veya ikincil koruma statüsü sahibi bir kişinin belirli aile fertlerine, aile birliğinin Türkiye’de korunması amacıyla verilen ikamet iznidir. Resmî tanıma göre aile ikamet izni şu kişiler için düzenlenebilir:
Yabancı eş,
Kişinin veya eşinin ergin olmayan yabancı çocuğu,
Kişinin veya eşinin engelli/kısıtlı yabancı çocuğu.
Bazı ülkelerde çok eşlilik yasal olsa da Türkiye Cumhuriyeti kanunlarına göre kişiler ancak bir kişiyle evli olabilirler. Bu durum kamu düzeninden kaynaklanmaktadır. Bu sebeple kişiler, uyruk ülkelerinde yasal olarak çok eşli olabilseler dahi, çok eşlilik hâlinde yalnızca ilk eşe aile ikamet izni verilebilir; ancak tüm çocuklar için bu ikamet iznine başvurmak mümkündür.
Çocuk başvurularında, yurt dışında ortak velayet sahibi diğer ebeveynin bulunması hâlinde onun muvafakati de gerekmektedir. Aile ikamet izni, her defasında en fazla üç yıl süreyle verilebilir. Ancak izin süresi, destekleyicinin ikamet veya kalış süresini hiçbir şekilde aşamaz.
2.2.1. Aile İkamet İzninde Şartlar
Aile ikamet izninde iki katmanlı bir şart yapısı vardır: destekleyiciye ilişkin şartlar ve başvuran aile ferdine ilişkin şartlar.
Destekleyici Kimdir?
Aile ikamet izni; Türkiye’de yasal oturum izni olan yabancı ya da bir Türk vatandaşına bağlı olarak edinilebilen bir ikamet izni türüdür. Bu ikamet izninde, Türkiye’de ikamet izni sahibi kişi veya Türk vatandaşı temel unsurlardan birini oluşturur; bu kişinin evrakları da başvuru dosyasında çok önemli bir rol oynamaktadır. Aile ikamet iznine başvurmak için gerekçe olarak sunulan kişiye “destekleyici” denir.
Destekleyici Açısından Şartlar
Tüm aile fertlerini kapsayan geçerli sağlık sigortasına sahip olmak,
Fert başına asgari ücretin üçte birinden az olmamak üzere ve toplamda yeterli aylık gelire sahip olmak (2026 yılı için asgari ücret 28.075 TL’dir),
Son beş yıl içinde aile düzenine karşı suç işlemediğini adli sicil ile belgeleyebilmek,
Kural olarak en az bir yıl Türkiye’de ikamet etmiş olmak; bu kural aile ikamet izninde en önemli şartlardan biridir. Destekleyici yabancı ise, Türkiye’de geriye dönük bir yıllık yasal ikamet izni sahibi olması en önemli şartlardan birini oluşturur.
Adres kayıt sistemine kayıtlı olmak.
Başvuran (İkamet İzni Talep Eden) Açısından Şartlar
Kalış amacıyla ilgili bilgi ve belgeleri sunmak,
Destekleyici ile birlikte yaşadığını veya yaşama niyetini ortaya koymak,
Eşler bakımından her iki tarafın da 18 yaşını doldurmuş olması,
Kanun’un 7. maddesi kapsamında Türkiye’ye girişi yasaklı kişilerden olmamak,
Evliliğin sırf aile ikamet izni almak amacıyla yapılmamış olması.
2.2.2. Gerekli Evrak Listesi
Başvuran İçin Gerekli Belgeler
Başvuru formu
Pasaport veya pasaport yerine geçen belgenin fotokopisi
Doğum belgesi
İki adet biyometrik fotoğraf
Harç ve belge bedeli makbuzu
Gerekiyorsa tek giriş vize harcı makbuzu
Evlilik belgesi; Türk vatandaşı ile evlilikte vukuatlı nüfus kayıt örneği ya da evliliği kanıtlayan onaylı belge
UETS belgesi
Çocuk adına yapılan başvurularda ayrıca aşağıdaki belgeler aranabilir:
Doğum belgesi,
Boşanma hâlinde velayet belgesi,
Anne veya babadan biri ikamet izni başvurusunda bulunmuyorsa, başvuruda bulunmayan ebeveynin noter huzurunda düzenlediği muvafakati,
Aile kaydı belgesi (çocuk ile ebeveynin aile birliğini gösteren belge),
Destekleyici tarafından, başvurucunun ikamet izni süresi içinde masraflarının karşılanacağını gösteren noter onaylı taahhütname,
Ebeveynin ölümü hâlinde ölüm belgesi.
Aile ikamet izni kural olarak kişilerin ergin olmayan çocuklarını kapsamaktaysa da bu konuda önemli bir istisna bulunmaktadır. Ergin çocuklar, Türkiye’de eğitim görüyor olmaları hâlinde 25 yaşına kadar aile ikamet izni alma hakkına sahiptirler. Bu şekilde yapılacak başvurularda ergin çocuğun öğrenci belgesinin de ikamet izni başvuru dosyasına eklenmesi gerekir.
Destekleyici İçin Gerekli Belgeler
Destekleyici Türk vatandaşı ise kimlik kartının aslı ve fotokopisi; yabancı ise pasaport fotokopisi ile ikamet/çalışma izni veya ilgili statü belgesi,
Yeterli ve düzenli geliri gösteren belge,
Tüm aile bireylerini kapsayan geçerli sağlık sigortası,
Adli sicil kaydı,
Adres kayıt belgesi.
Yurt dışından getirilecek tüm belgelerin apostilli ve noter onaylı Türkçe tercümeli olması gerekmektedir.
2.2.3. Vatandaşlık Perspektifi
Bu yöntemle vatandaşlık yalnızca genel başvuru yoluyla mümkündür. Aranan koşullar şunlardır:
Türkiye’de fiilen ve sürekli ikamet,
Başvurucunun son beş yıl içinde toplam yurt dışı kalış süresinin 365 günü, son bir yıl içinde ise altı ayı geçmemesi,
Kesintisiz ve yasal aile ikamet izni statüsünün korunması.
Önemli not: Sık ve uzun süreli yurt dışı çıkışlar, ikamet süresinin sıfırlanmasına neden olabilir.`;

const INVESTOR_RESIDENCE_TEXT = String.raw`2.3. Yatırımcı İkamet İzni (6458 Sayılı Kanun m. 31/1-j)
6458 sayılı Kanun’un 31. maddesinin 1. fıkrasının (j) bendinde düzenlenen yatırımcı ikamet izni, bir kısa dönem ikamet izni türüdür. Türkiye’de çalışmayan ancak Cumhurbaşkanınca belirlenen kapsam ve tutarda yatırım yapacak yabancılar ile bunların yabancı eşi; kendisinin ve eşinin ergin olmayan veya bağımlı yabancı çocukları, bu ikamet iznine başvurma hakkına sahiptir.
Bu noktada ayrıştırılması gereken konu şudur: aynı kanun maddesinin (b) bendinde düzenlenen gayrimenkul ikameti, bu ikamet türünden farklıdır. Bu başlık altında ele aldığımız (j) bendi yatırımcı ikamet izni; nitelikli yatırımcı statüsündeki kişilerin ve beraberlerindeki eş ve çocuklarının başvurabildiği ikamet izni türüdür. Tüm aile üyelerini kapsayan bu ikamet izni türü; en güvenli ve avantajlı ikamet izni türlerinden biri olarak değerlendirilmektedir. 2026 yılı itibarıyla yatırım değeri, (b) bendi gayrimenkul ikametinden farklı olarak 400.000 USD’dir. Ayrıca bu ikamet iznine sahip kişilerin, yatırımcı sıfatıyla Türk vatandaşlığına başvurma hakları da bulunmaktadır.
2.3.1. Kimler Başvurabilir?
Cumhurbaşkanınca belirlenen kapsam ve tutarda yatırım yapan yabancılarla birlikte aşağıdaki kişiler de yatırımcı ikamet iznine başvurma hakkına sahiptir (yatırım miktarı en az 400.000 USD veya en az 500.000 USD olmak üzere iki ayrı tutar üzerinden değerlendirilmektedir):
Yabancı eş,
Kendisinin ergin olmayan çocuğu,
Eşinin ergin olmayan çocuğu,
On sekiz yaşından büyük olmasına rağmen engelli veya kısıtlı durumda bulunan çocuğu.
Bununla birlikte anne, baba, kardeş ve yetişkin bağımsız çocuk; bu kapsamda yatırımcıyla birlikte ikamet iznine başvurma hakkına sahip değildir.
2.3.2. Gerekli Evrak Listesi
Başvuru formu
Pasaport fotokopisi
Biyometrik fotoğraf
Harç ve belge bedeli makbuzları
Gerekiyorsa tek giriş vize harcı makbuzu
Sağlık sigortası
Uygunluk belgesi
Adli sicil kaydı
Yatırımcının aile fertleri de başvuruyorsa aile bağını gösteren belge (evlilik belgesi, çocukları da gösteren aile kaydı belgesi vb.)
Belge temininde dikkat edilmesi gereken ve başvurunun sonucunu doğrudan etkileyebilecek pek çok husus bulunmaktadır. Her ülkenin düzenlediği evrak türü ve şekli farklılık gösterdiğinden, bu süreçte uzman bir avukatla çalışmak büyük önem arz etmektedir.
2.3.3. Önem Arz Eden Hususlar
Yurt dışından getirilecek tüm evrakların apostilli ve noter onaylı Türkçe tercümeli olması gerekmektedir.
Adli sicil kaydı, bu tür ikamet izninde çok önemli bir rol oynamaktadır; adli sicil kaydında bulunabilecek bir suç, ikamet izni alınmasına engel teşkil edebilmektedir.
Adli sicil evrakının geçerlilik süresi genel olarak altı aydır. Bu süre; evrakın apostil onayının yapıldığı tarihten değil, belgenin düzenlendiği tarihten itibaren işlemeye başlar. Bununla birlikte, bazı ülke makamları düzenledikleri adli sicil belgelerine geçerlilik süresi yazabilmektedir. Eğer temin edilen adli sicil evrakında altı aydan daha kısa bir süre için geçerli olduğu yönünde bir beyan bulunuyorsa, o evrak özelinde geçerlilik süresi evrakta belirtilen süre kadardır.
Bilhassa (j) bendi ikamet izni; güçlü bir kısa dönem ikamet izni olması sebebiyle sıkı şekil şartlarına bağlıdır. Birden fazla uyruğa sahip kişilerin farklı uyruk pasaportlarıyla yapacakları başvurularda; isim ayniyet belgesi gibi ek evraklar talep edilebilmektedir.
Uygunluk belgesi; gerek (j) bendi ikamet izni başvurusu gerekse akabinde gerçekleştirilecek vatandaşlık başvurusu bakımından kurucu nitelikte bir belgedir. Bu belge, yatırımın türüne göre usul farklılıkları içermektedir.
Tüm bu hususlar; dikkatli ve profesyonel bir ekip tarafından incelenmeli, ardından başvuru süreci başlatılmalıdır. Aksi takdirde ikamet izni başvurunuzun reddedilme tehlikesiyle karşı karşıya kalmanız oldukça muhtemeldir.
2.3.4. Vatandaşlık Perspektifi
6458 sayılı Yabancılar ve Uluslararası Koruma Kanunu’nun 31/1-j bendi kapsamında düzenlenen kısa dönem ikamet izni; Türkiye’de çalışmayan ancak Cumhurbaşkanınca belirlenen kapsam ve tutarda yatırım yapan yabancılar ile bunların eş ve bağımlı çocuklarına tanınan özel bir ikamet izni türüdür. Bu izin türü, özellikle yatırım yoluyla Türk vatandaşlığı süreci bakımından ayrı bir önem taşımaktadır.
Öncelikle belirtmek gerekir ki (j) bendi kapsamında alınan ikamet izni, tek başına Türk vatandaşlığı sağlamaz. Bir başka ifadeyle bu ikamet iznine sahip olmak, otomatik olarak vatandaşlığın kazanıldığı anlamına gelmez. Ancak söz konusu izin; yatırım yoluyla istisnai vatandaşlık başvurusu yapılabilmesi açısından son derece önemli bir hukuki zemin oluşturur. Uygulamada (j) bendi ikamet izni, yatırımcı yabancının Türkiye’de yasal ikamet statüsünü tesis ederek vatandaşlık başvuru sürecinin temel aşamalarından birini meydana getirmektedir.
Yatırım yoluyla Türk vatandaşlığı başvurularında süreç genel olarak şu şekilde ilerlemektedir: öncelikle yabancı yatırımcının, mevzuatta öngörülen yatırım şartlarını yerine getirmesi gerekir. İlgili kamu kurumu tarafından yatırımın uygun bulunduğuna ilişkin uygunluk belgesi düzenlendikten sonra; yatırımcı adına 31/1-j bendi kapsamında kısa dönem ikamet izni başvurusu yapılır. Bu aşamadan sonra ise istisnai yoldan Türk vatandaşlığı başvurusuna geçilir. Dolayısıyla (j) bendi ikamet izni; vatandaşlığın kendisi değil, vatandaşlık sürecine geçişi mümkün kılan özel statülü bir ikamet türüdür.
Bu yönüyle (j) bendi ikamet izni; turistik ikamet veya yalnızca taşınmaz edinimine dayalı kısa dönem ikamet izni gibi diğer izin türlerinden ayrılmaktadır. Çünkü bu izin türü, doğrudan yatırımcı statüsüyle ilişkilidir ve çoğu durumda vatandaşlık başvurusunun ön hazırlık aşaması olarak değerlendirilmektedir. Ayrıca kanun koyucu; bu bent kapsamındaki iznin, diğer kısa dönem ikamet izinlerinden farklı olarak beş yıla kadar düzenlenebilmesine imkân tanımıştır. Bu durum da (j) bendi ikamet izninin yatırımcıya sağladığı hukuki güvencenin daha güçlü olduğunu göstermektedir.
(j) bendi ikamet izninin vatandaşlık bakımından bir diğer önemli özelliği; yalnızca ana yatırımcıyı değil, belirli aile fertlerini de kapsayabilmesidir. Kanun uyarınca yatırımcının yabancı eşi ile kendisinin ve eşinin ergin olmayan veya bağımlı yabancı çocukları da bu kapsamda ikamet izni alabilmektedir. Bu nedenle yatırım yoluyla vatandaşlık başvurularında süreç çoğu zaman yalnızca yatırımcı açısından değil, aile bütünlüğü çerçevesinde de planlanmaktadır.
Sonuç olarak (j) bendi ikamet izni; vatandaşlık veren bir belge değil, yatırım yoluyla Türk vatandaşlığı başvurusunun ikamet temelini oluşturan özel bir hukuki statüdür. Bu izin; yatırımcının Türkiye’de yasal ikametini sağlarken, aynı zamanda istisnai vatandaşlık başvurusunun yapılabilmesi için gerekli hukuki altyapıyı da hazırlar. Ancak vatandaşlığın kazanılabilmesi için yalnızca bu ikamet izninin alınması yeterli olmayıp; yatırım şartlarının eksiksiz şekilde yerine getirilmesi, uygunluk belgesinin alınması ve vatandaşlık başvurusunun ilgili makamlarca olumlu değerlendirilmesi de gerekmektedir.`;

const LIST_RULES = new Map<
  string,
  { count: number; titleMode: "description" | "title" }
>([
  [
    "Uzun dönem ikamet iznine geçişte, Kanun’un 43. maddesinde sayılan temel şartlar aranır. Bu şartlar şunlardır:",
    { count: 5, titleMode: "description" },
  ],
  [
    "Resmî e-İkamet belge listesine göre uzun dönem ikamet izni başvurularında istenen temel belgeler şunlardır:",
    { count: 10, titleMode: "description" },
  ],
  [
    "Belge detaylarında dikkat edilmesi gereken önemli noktalar şunlardır:",
    { count: 6, titleMode: "description" },
  ],
  [
    "İkamet iznine başvuruda kullanılacak taşınmaz; oturuma hazır, tapulu ve iskânlı olmalıdır. Gayrimenkul satış vaadi sözleşmesi ile gayrimenkul ikamet iznine başvurmak mümkün değildir; dolayısıyla tapunun başvurucu adına devredilmiş olması gerekir.",
    { count: 6, titleMode: "description" },
  ],
  [
    "Kapalı bölge; yabancıların taşınmaz edinimine bağlı olarak ikamet izni alamayacağı mahalle veya semtleri ifade eder. Kapalı bölge uygulamasının temel amaçları şunlardır:",
    { count: 3, titleMode: "description" },
  ],
  [
    "Göç İdaresi; yabancı nüfus oranı belirli bir eşiği (uygulamada %20 sınırı esas alınmaktadır) aşan mahalleleri kapalı bölge olarak ilan etmektedir. Bu mahallelerde:",
    { count: 3, titleMode: "description" },
  ],
  [
    "Açık bölge; yabancıların taşınmaz edinerek kısa dönem ikamet izni başvurusu yapabileceği mahalleleri ifade eder. Bu bölgelerde aşağıdaki koşulların sağlanması hâlinde ikamet izni başvurusu yapılabilir:",
    { count: 3, titleMode: "description" },
  ],
  [
    "Kapalı ve açık bölgeler; il bazında değil, ilçe hatta mahalle bazında belirlenir. Göç İdaresi Başkanlığı:",
    { count: 3, titleMode: "description" },
  ],
  ["İlk başvuruda:", { count: 2, titleMode: "title" }],
  ["Yenileme aşamasında:", { count: 2, titleMode: "title" }],
  ["2.1.4. Gayrimenkulün Kullanımı", { count: 2, titleMode: "title" }],
  [
    "Gayrimenkulün ticari amaçla kullanılması şu sonuçlara yol açabilir:",
    { count: 2, titleMode: "description" },
  ],
  ["2.1.5. Gerekli Belgeler", { count: 12, titleMode: "title" }],
  [
    "Bu yöntemle vatandaşlık yalnızca genel başvuru yoluyla mümkündür. Aranan koşullar şunlardır:",
    { count: 3, titleMode: "description" },
  ],
  [
    "Aile ikamet izni, 6458 sayılı Kanun’un 34 ila 37. maddelerinde düzenlenmiştir. Bu izin; Türk vatandaşı, Mavi Kart sahibi, geçerli ikamet izni sahibi yabancı, mülteci veya ikincil koruma statüsü sahibi bir kişinin belirli aile fertlerine, aile birliğinin Türkiye’de korunması amacıyla verilen ikamet iznidir. Resmî tanıma göre aile ikamet izni şu kişiler için düzenlenebilir:",
    { count: 3, titleMode: "description" },
  ],
  ["Destekleyici Açısından Şartlar", { count: 5, titleMode: "title" }],
  [
    "Başvuran (İkamet İzni Talep Eden) Açısından Şartlar",
    { count: 5, titleMode: "title" },
  ],
  ["Başvuran İçin Gerekli Belgeler", { count: 8, titleMode: "title" }],
  [
    "Çocuk adına yapılan başvurularda ayrıca aşağıdaki belgeler aranabilir:",
    { count: 6, titleMode: "title" },
  ],
  ["Destekleyici İçin Gerekli Belgeler", { count: 5, titleMode: "title" }],
  [
    "Cumhurbaşkanınca belirlenen kapsam ve tutarda yatırım yapan yabancılarla birlikte aşağıdaki kişiler de yatırımcı ikamet iznine başvurma hakkına sahiptir (yatırım miktarı en az 400.000 USD veya en az 500.000 USD olmak üzere iki ayrı tutar üzerinden değerlendirilmektedir):",
    { count: 4, titleMode: "description" },
  ],
  ["2.3.2. Gerekli Evrak Listesi", { count: 9, titleMode: "title" }],
  ["2.3.3. Önem Arz Eden Hususlar", { count: 6, titleMode: "title" }],
]);

const STANDALONE_HEADINGS = new Set([
  "Kapalı Bölge Nedir?",
  "Açık Bölge Nedir?",
  "Bölgeler Nasıl Belirlenir?",
  "Destekleyici Kimdir?",
]);

function isNumberedHeading(line: string) {
  return /^\d+(?:\.\d+)*\. .+/.test(line);
}

function isStandaloneHeading(line: string) {
  return STANDALONE_HEADINGS.has(line);
}

function createIntro(title?: string): Extract<PageSection, { type: "intro" }> {
  return {
    type: "intro",
    title,
    paragraphs: [],
  };
}

function buildSectionsFromExactText(text: string): PageSection[] {
  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const sections: PageSection[] = [];
  let intro: Extract<PageSection, { type: "intro" }> | null = null;

  function flushIntro() {
    if (!intro) return;
    if (intro.title || intro.paragraphs.length > 0) {
      sections.push(intro);
    }
    intro = null;
  }

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const rule = LIST_RULES.get(line);

    if (rule) {
      if (rule.titleMode === "description") {
        intro ??= createIntro();
        intro.paragraphs.push(line);
        flushIntro();
      } else {
        flushIntro();
      }

      sections.push({
        type: "numbered",
        title: rule.titleMode === "title" ? line : undefined,
        items: lines
          .slice(index + 1, index + 1 + rule.count)
          .map((item) => ({ title: item })),
      });
      index += rule.count;
      continue;
    }

    if (isNumberedHeading(line) || isStandaloneHeading(line)) {
      flushIntro();
      intro = createIntro(line);
      continue;
    }

    intro ??= createIntro();
    intro.paragraphs.push(line);
  }

  flushIntro();
  return sections;
}

const TR_EXACT_RESIDENCE_PAGES = {
  "uzun-donem-ikamet-izni": {
    metadata: {
      breadcrumbLabel: "Uzun Dönem İkamet İzni",
      title: "Uzun Dönem İkamet İzni",
      description:
        "Uzun dönem ikamet izni, 6458 sayılı Kanun’un 42 ila 45. maddelerinde düzenlenen ve yabancının Türkiye’de kalışını süre sınırı olmaksızın devam ettirmesine imkân tanıyan ikamet iznidir.",
    },
    hero: {
      summary:
        "Uzun dönem ikamet izni, Türkiye’de uzun süre yasal ve kesintisiz şekilde yaşamış yabancılara verilen süresiz bir ikamet izni türüdür.",
      imageAlt: "Uzun dönem ikamet izni sayfası görseli",
    },
    sections: buildSectionsFromExactText(LONG_TERM_RESIDENCE_TEXT),
  },
  "gayrimenkul-ikamet-izni": {
    metadata: {
      breadcrumbLabel: "Gayrimenkul İkamet İzni",
      title: "Gayrimenkul İkamet İzni",
      description:
        "Gayrimenkul (b bendi) ikamet izni, yabancı uyruklu kişilerin Türkiye’de konut niteliğinde bir taşınmaz edinmeleri hâlinde başvurabildikleri kısa dönem ikamet izni türüdür.",
    },
    hero: {
      summary:
        "Gayrimenkul (b bendi) ikamet izni, yabancı uyruklu kişilerin Türkiye’de konut niteliğinde bir taşınmaz edinmeleri hâlinde başvurabildikleri kısa dönem ikamet izni türüdür.",
      imageAlt: "Gayrimenkul ikamet izni sayfası görseli",
    },
    sections: buildSectionsFromExactText(REAL_ESTATE_RESIDENCE_TEXT),
  },
  "aile-ikamet-izni": {
    metadata: {
      breadcrumbLabel: "Aile İkamet İzni",
      title: "Aile İkamet İzni",
      description:
        "Aile ikamet izni, 6458 sayılı Kanun’un 34 ila 37. maddelerinde düzenlenmiştir.",
    },
    hero: {
      summary:
        "Aile ikamet izni, aile birliğinin Türkiye’de korunması amacıyla verilen ikamet iznidir.",
      imageAlt: "Aile ikamet izni sayfası görseli",
    },
    sections: buildSectionsFromExactText(FAMILY_RESIDENCE_TEXT),
  },
  "yatirimci-ikamet-izni": {
    metadata: {
      breadcrumbLabel: "Yatırımcı İkamet İzni",
      title: "Yatırımcı İkamet İzni",
      description:
        "6458 sayılı Kanun’un 31. maddesinin 1. fıkrasının (j) bendinde düzenlenen yatırımcı ikamet izni, bir kısa dönem ikamet izni türüdür.",
    },
    hero: {
      summary:
        "6458 sayılı Kanun’un 31. maddesinin 1. fıkrasının (j) bendinde düzenlenen yatırımcı ikamet izni, bir kısa dönem ikamet izni türüdür.",
      imageAlt: "Yatırımcı ikamet izni sayfası görseli",
    },
    sections: buildSectionsFromExactText(INVESTOR_RESIDENCE_TEXT),
  },
} satisfies Record<ResidencePermitSlug, ResidenceServicePageCopy>;

function buildLegacyResidenceSections(
  copy: ResidencePageCopy,
  entry: ResidencePermitDetail
): PageSection[] {
  const sections: PageSection[] = [];

  if (entry.warning) {
    sections.push({
      type: "info-box",
      eyebrow: entry.heroTag,
      title: entry.title,
      desc: entry.warning,
    });
  }

  entry.sections.forEach((section) => {
    sections.push({
      type: "intro",
      eyebrow: copy.labels.detail.section_label,
      title: section.title,
      paragraphs: section.intro ? [section.intro] : [],
    });

    if (section.items.length > 0) {
      sections.push({
        type: "numbered",
        items: section.items.map((item) => ({
          title: item.title,
          desc: item.description,
        })),
      });
    }
  });

  if (entry.process.length > 0) {
    sections.push({
      type: "numbered",
      eyebrow: copy.labels.detail.process_eyebrow,
      title: entry.processTitle,
      items: entry.process.map((step) => ({
        title: step.title,
        desc: step.description,
      })),
    });
  }

  if (entry.faqs.length > 0) {
    sections.push({
      type: "faq",
      eyebrow: copy.labels.detail.faq_eyebrow,
      title: copy.labels.detail.faq_title,
      items: entry.faqs.map((faq) => ({
        q: faq.q,
        a: faq.a,
      })),
    });
  }

  return sections;
}

export function getResidenceServicePageCopy({
  copy,
  slug,
  useExactTurkishContent,
}: {
  copy: ResidencePageCopy;
  slug: ResidencePermitSlug;
  useExactTurkishContent: boolean;
}): ResidenceServicePageCopy | null {
  const entry = copy.permits[slug];
  if (!entry) return null;

  if (useExactTurkishContent) {
    const exactCopy = TR_EXACT_RESIDENCE_PAGES[slug];
    return {
      ...exactCopy,
      hero: {
        ...exactCopy.hero,
        backgroundImage: entry.heroImage,
      },
    };
  }

  return {
    metadata: {
      breadcrumbLabel: entry.title,
      title: entry.title,
      description: entry.description,
    },
    hero: {
      summary: entry.summary,
      imageAlt: entry.title,
      backgroundImage: entry.heroImage,
    },
    sections: buildLegacyResidenceSections(copy, entry),
  };
}

export function getResidenceServiceRelatedLinks({
  copy,
  lang,
  currentSlug,
}: {
  copy: ResidencePageCopy;
  lang: string;
  currentSlug: ResidencePermitSlug;
}) {
  return RESIDENCE_PERMIT_SLUGS.filter((slug) => slug !== currentSlug).map(
    (slug) => ({
      label: copy.permits[slug].navLabel,
      slug,
      href: `/${lang}/ikamet-izni/${slug}`,
    })
  );
}
