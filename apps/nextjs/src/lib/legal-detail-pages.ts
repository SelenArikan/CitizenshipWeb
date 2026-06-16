import type { Metadata } from "next";

import type { OtherProgram, PageSection } from "@/components/ServicePageLayout";
import { getDictionary } from "@/lib/dictionary";
import { SEO_LOCALES, getSafeLocale, type SeoLocale } from "@/lib/seo";

const SITE_URL = "https://citizenshipweb.com";
const PAGE_PATH_PREFIX = "/legal";
const SUPPORTED_LOCALES = SEO_LOCALES;
const STATIC_LEGAL_SLUGS = ["yesil-pasaport", "ehliyet-tebdil"] as const;

const LEGAL_DOCUMENT_TEXTS = {
  "vergi-muafiyeti": String.raw`3065 SAYILI KDV KANUNU
13/i Maddesi Kapsamında
TAŞINMAZ TESLİMLERİNDE KDV İSTİSNASI

Yabancı Yatırımcılar ve Yurt Dışında Yerleşik Türk Vatandaşları İçin Kapsamlı Hukuki Rehber
Necmettin Barman Hukuk Bürosu
İstanbul Barosu
 
3065 Sayılı KDV Kanunu 13/i Maddesi Kapsamında
Taşınmaz Teslimlerinde KDV İstisnası

Yabancı uyruklu gerçek kişiler ile yurt dışında yerleşik Türk vatandaşlarının Türkiye'de edindikleri konut ve iş yeri niteliğindeki taşınmazlarda, belirli koşulların sağlanması hâlinde 3065 sayılı Katma Değer Vergisi Kanunu'nun 13/i maddesi kapsamında katma değer vergisi istisnası uygulanmaktadır.

Büromuz, bu istisnadan yararlanmak isteyen müvekkillerimizin tüm sürecini vekâleten yürütmekte; başvuru, yazışma ve belge temin işlemlerini eksiksiz tamamlayarak istisna kapsamında kullanılacak resmî yazıyı müvekkillerimize teslim etmektedir.

I. Yasal Dayanak ve Kapsam

1. Kanuni Düzenleme
3065 sayılı KDV Kanunu'nun 13/i maddesi uyarınca, aşağıdaki koşulların tamamının sağlanması hâlinde katma değer vergisi istisnası uygulanmaktadır:

	•	Konut veya iş yeri olarak inşa edilen binaların ilk tesliminde,
	•	Bedelin döviz olarak Türkiye'ye getirilmesi kaydıyla,
	•	Türkiye'de yerleşik sayılmayan yabancı uyruklu gerçek kişilere,
	•	Çalışma veya oturma izni alarak altı aydan fazla yurt dışında yaşayan Türk vatandaşlarına.

Önemli Not: İstisna yalnızca ilk teslimlerde geçerlidir. İkinci el taşınmaz satışlarına uygulanmaz.

II. İstisnadan Yararlanabilecek Kişiler

A. Yabancı Uyruklu Gerçek Kişiler
Aşağıdaki koşulların tamamını taşıyan yabancı uyruklu kişiler bu istisnadan yararlanabilir:

	•	Türkiye'de yerleşik olmamak,
	•	Türkiye'de iş yeri ya da daimi temsilci aracılığıyla kazanç elde etmemek,
	•	Satış bedelini döviz olarak Türkiye'ye getirmek.

B. Yurt Dışında Yerleşik Türk Vatandaşları
Aşağıdaki koşulları sağlayan Türk vatandaşları istisnadan yararlanabilir:

	•	Çalışma veya oturma izni ile en az altı aydır yurt dışında yaşıyor olmak,
	•	Türkiye'de yerleşik sayılmamak,
	•	Satış bedelini döviz olarak Türkiye'ye getirmek.

III. İstisna Uygulamasının Temel Şartları

1. İlk Teslim Şartı
İstisna yalnızca müteahhitten yapılan ilk satışta geçerlidir. İkinci el taşınmaz edinimlerinde bu istisnadan yararlanılması mümkün değildir.

2. Bedelin Döviz Olarak Getirilmesi Şartı
Satış bedeline ilişkin olarak şu hususların eksiksiz sağlanması gerekmektedir:

	•	Satış bedeli yurt dışından döviz olarak transfer edilmelidir.
	•	Transfer işlemi banka dekontu ile ispatlanmalıdır.
	•	Döviz alım belgesi düzenlenmelidir.

3. Üç Yıl Devretmeme Yükümlülüğü
İstisna kapsamında edinilen taşınmazın tapu devrinden itibaren üç yıl içinde üçüncü kişilere devredilmesi hâlinde, zamanında tahsil edilemeyen katma değer vergisi; vergi ziyaı cezası ve gecikme faizi ile birlikte taşınmazı devreden alıcıdan tahsil edilir.

Uyarı: KDV istisnası; gelir vergisi veya tapu harcı gibi diğer vergilerden muafiyet anlamına gelmez. Muafiyet yalnızca ilgili satış sözleşmesinde ve faturada açıkça belirtilmesi ile yasal prosedürlerin eksiksiz yerine getirilmesi hâlinde geçerlilik kazanır. Taşınmazın üç yıl içinde devredilmesi durumunda, daha önce uygulanmayan KDV ve gecikme faizleri ilgiliden geri alınır.

IV. Vergi Dairesi Nezdindeki Başvuru Süreci

KDV istisnası uygulamasında en kritik aşama, kişinin Türkiye'de yerleşik olmadığının vergi dairesince tespiti ve buna ilişkin resmî yazının alınmasıdır. Süreç aşağıdaki adımları kapsamaktadır:

Aşama
Açıklama
1. Başvuru
Vergi dairesine dilekçe ile başvuru yapılır.
2. Araştırma
Kişinin Türkiye'de yerleşik olup olmadığı araştırılır.
3. Kurumlar Arası Sorgu
İl Göç İdaresi, Emniyet ve ilgili kurumlardan kayıtlar incelenir.
4. Tespite Dayalı Yazı
Koşulların sağlandığı tespit edilirse resmî yazı düzenlenir.
5. Kullanım
Bu yazı, satış işlemi sırasında istisna uygulanması için ibraz edilir.

V. Başvuru İçin Gerekli Belgeler

A. Yabancı Uyruklu Kişiler İçin

	•	Pasaport fotokopisi
	•	Giriş-çıkış kayıtları
	•	Türkiye'de yerleşik olmadığını gösteren belgeler
	•	Yurt dışında ikamet ettiğini gösteren resmî belge
	•	Taşınmaza ilişkin satış sözleşmesi veya tapu bilgileri
	•	Vekâletname
	•	Kimlik bilgileri
	•	Döviz transferine ilişkin banka belgeleri

B. Yurt Dışında Yerleşik Türk Vatandaşları İçin

	•	Çalışma veya oturma izni belgesi
	•	Yurt dışı ikamet belgesi
	•	Giriş-çıkış kayıtları
	•	Pasaport
	•	Satış sözleşmesi
	•	Vekâletname
	•	Kimlik belgesi
	•	Döviz transfer belgeleri

VI. Hukuk Büromuzun Hizmet Kapsamı

Büromuz, 3065 sayılı Kanun'un 13/i maddesi kapsamında müvekkillerimize aşağıdaki hizmetleri eksiksiz sunmaktadır:

	•	Uygunluk analizi yapılması
	•	Belgelerin temin edilmesi ve başvuru dosyasının hazırlanması
	•	Vergi dairesine başvurunun gerçekleştirilmesi
	•	Kurumlar arası yazışmaların takip edilmesi
	•	Vergi dairesi resmî yazısının temin edilmesi
	•	Sürecin tapu devrine kadar yönetilmesi
	•	İstisnaya esas resmî belgenin müvekkile teslim edilmesi

Tüm süreç vekâleten ve eksiksiz biçimde yürütülmektedir.

VII. Risk Yönetimi ve Hukuki Güvence

İstisnanın hatalı uygulanması ya da koşulların sonradan ihlal edilmesi hâlinde aşağıdaki yaptırımlar gündeme gelmektedir:

	•	Zamanında tahsil edilemeyen katma değer vergisinin tamamı,
	•	Vergi ziyaı cezası,
	•	Gecikme faizi.

Bu yaptırımlar, taşınmazı edinen alıcıdan bizzat tahsil edilmektedir. Bu nedenle sürecin teknik vergi hukuku bilgisi ve uygulama deneyimi gerektirdiği açıktır. Büromuz, müvekkillerini ileride doğabilecek vergi risklerine karşı koruyacak biçimde dosyayı yapılandırmakta ve gerekli hukuki denetimi sağlamaktadır.

VIII. Sonuç

3065 sayılı KDV Kanunu'nun 13/i maddesi, yabancı yatırımcılar ve yurt dışında yaşayan Türk vatandaşları için önemli bir vergi avantajı sunmaktadır. Bununla birlikte, istisnanın geçerlilik kazanabilmesi için sıkı biçim ve belge koşullarının eksiksiz yerine getirilmesi zorunludur.

Hukuk büromuz; süreci baştan sona yönetmekte, vergi dairesi nezdindeki işlemleri vekâleten yürütmekte ve istisnaya esas resmî yazıyı temin ederek müvekkillerimize teslim etmektedir.

Ayrıntılı bilgi ve hukuki danışmanlık için büromuzla iletişime geçebilirsiniz.`,
  "tapu-islemleri": String.raw`TÜRK VATANDAŞLIĞI KAZANIMI SONRASI TAPULARIN TÜRK KİMLİĞİ’NE GÖRE YENİDEN ÇIKARILMASI İŞLEMİ

Sonradan Türk vatandaşlığı kazanan kişilerin, daha önce yabancı kimlikleriyle edinmiş oldukları taşınmazların kayıtlarının Türk vatandaşlığı bilgilerine göre güncellenmesi, tapu sicilinin doğruluğu ve hukuki güvenliğin sağlanması açısından önemli bir işlemdir. Bir kişi yabancı uyrukluyken taşınmaz satın aldığında, tapu kayıtlarında o kişinin pasaport bilgileri esas alınır ve bu kayıtlar yabancı pasaport bilgilerine göre tutulur. Ancak kişi daha sonra Türk vatandaşlığına geçtiğinde artık hukuki statüsü değişmiş olur; buna rağmen taşınmaz kayıtlarının eski kimlik bilgileriyle kalmaya devam etmesi, kişi ile taşınmaz arasında hukuki bağın güncelliğini yitirdiği anlamına gelir.

Tapu memuru tapu kayıtlarında şahsın iki pasaportunu da gördüğü güncelleme yapılmadan  sistemden hiçbir işlem yapılamayacağı uyarısını alır. Bu güncellemenin yapılması, öncelikle mülkiyet hakkının açık ve tartışmasız şekilde kişiye ait olduğunun belgelenmesini sağlar. Türk vatandaşlığına geçen bir kişinin yeni kimlik numarası (vatandaşlık kimlik numarası) ile taşınmaz kaydı arasında bağlantı kurulması, resmi işlemlerde kolaylık sağlar ve ileride doğabilecek kimlik uyuşmazlıklarının önüne geçer. Özellikle satış, bağış, ipotek tesisi gibi tapu işlemlerinde, kişinin hem eski yabancı kimliği hem de yeni Türk kimliği arasında bağ kurulamadığında işlemler gecikebilir veya ek belge talepleri ortaya çıkabilir.

Güncelleme yapılmadığı takdirde çeşitli hukuki ve idari sorunlar doğabilir. Örneğin kişi taşınmazını satmak istediğinde tapu müdürlüğü kayıtlarındaki kimlik bilgileri ile mevcut kimliği uyuşmadığı için işlem gerçekleştirilemeyebilir veya uzun doğrulama süreçleri gerekebilir. Benzer şekilde bankalar, ipotek işlemleri sırasında kimlik uyumsuzluğu nedeniyle teminat kabulünde tereddüt yaşayabilir. Miras işlemlerinde ise daha ciddi problemler ortaya çıkabilir; çünkü mirasçıların, murisin taşınmazları ile olan bağını ispatlaması zorlaşabilir ve bu durum dava süreçlerine kadar uzanabilir.

Ayrıca devletin veri bütünlüğü ve kayıt sistemlerinin sağlıklı işlemesi açısından da bu güncelleme önemlidir. Farklı kimliklerle aynı kişiye ait görünen kayıtlar hem istatistiki hem de idari açıdan hatalı sonuçlara yol açabilir. Bu durum, vergi takibi, beyan süreçleri ve diğer kamu işlemlerinde de karışıklık yaratabilir.

Sonuç olarak, sonradan Türk vatandaşlığı kazanan kişilerin taşınmaz kayıtlarının yeni vatandaşlık bilgilerine göre güncellenmesi, yalnızca teknik bir işlem değil, mülkiyet hakkının korunması, işlemlerin sorunsuz yürütülmesi ve ileride doğabilecek hukuki uyuşmazlıkların önlenmesi açısından gerekli ve kritik bir adımdır. Vatandaşlık kazanımı öncesinde edinilen taşınmazların tapu bilgilerinin, vatandaşlık kazanımından sonra Türk kimliğine göre güncellenmesi süreci adım adım aşağıda anlatılmıştır: 

TAPU KAYDINI TÜRK PASAPORTUNA GÖRE GÜNCELLEME İŞLEM ŞEKLİ;

Adım 1 – Türk kimliğinin alınması
 Vatandaşlık kararı sonrası kişi Türk kimlik kartını alır ve Türkiye Cumhuriyeti vatandaşlık kimlik numarası oluşur. Tapu kayıtları hâlâ eski pasaport bilgileriyle göründüğü için ve tapu sisteminde kimlik alındığı ve güncelleme yapılması gerektiği uyarısı çıktığı için en kısa sürede işleme başlamak gerekir.

Adım 2 – Vekaletname hazırlanması
 Malik işlemi avukat vekiliyle yürütür. Vekaletname Türkiye’de noterden veya yabancı ülkede Türk Konsolosluğu’ndan düzenlenebilir. Yetkisiz ya da eksik yetki içeren vekaletnameler işlemin kabul görmemesine, vekaletnamenin kullanılamamasına yol açacağından bu husus oldukça önemlidir. Bu nedenle profesyonel kişiler tarafından hazırlanmış, ofisimiz tarafından paylaşılan örnek vekaletnamelerin kullanılması önem arz etmektedir.

Adım 3 – Belgelerin hazırlanması
 Başvuru yapmadan önce gerekli belgelerin toplanması ve dikkatle hazırlanması oldukça önemlidir. Zira eksik veya yanlış belge ile yapılan başvurular Tapu Müdürlüğü tarafından reddedilecektir. Bu aşamada başvuru belgelerini bu alanda uzman bir avukatın hazırlaması hak kaybı yaşamanızı önleyecektir. 

Adım 4 – Tapu randevusu ve başvuru
 Türkiye’de tapu müdürlükleri tarafından yapılacak her türlü işlem için online sistem üzerinden randevu almak gerekmektedir. Bu sistemin adı ‘’Web Tapu’’ olup, gerekli evraklar bu sisteme yüklenir, başvuru yapılır ve randevu talep edilir. Tapu bilgilerinizin Türk vatandaşlığı bilgilerinize göre güncellenmesi için Web Tapu sistemi üzerinden “malik bilgisi güncelleme / kimlik tashihi” başvurusu yapılır ve tapu müdürlüğünden randevu alınır. Avukat vekâlet aldığında başvuruyu ofisinden yapabilecektir.

Adım 5 – Tapu incelemesi
 Tapu müdürlüğü sistemde kendilerine ulaşan kişinin bilgileriyle Tapu kayıtlarını kontrol ederek doğru taşınmaz için işlem yapılmasını sağlar.

Adım 6 – MERNİS eşleştirme

MERNİS, Türkiye’de vatandaşların kimlik ve nüfus bilgilerinin merkezi bir veri tabanında tutulduğu ve kamu kurumlarının bu bilgilere hızlı ve güvenli şekilde erişmesini sağlayan sistemdir. MERNİS eşleştirme, taşınmaz veya diğer resmi kayıtların, kişinin MERNİS’te yer alan Türkiye Cumhuriyeti vatandaşlık kimlik numarası ve nüfus bilgileriyle ilişkilendirilmesi işlemidir. Bu sayede farklı sistemlerde bulunan kimlik bilgileri tek bir doğru kayıt altında toplanır ve işlemlerin güvenli, hızlı ve hatasız şekilde yürütülmesi sağlanır.

Adım 7 – Harç ve işlem ücreti
 Bu işlem için sadece küçük bir harç ücreti ödenir ve tapunun verdiği randevu gün ve saat doğultusunda imzaya gidilir. 2026 yılı itibariyle tapu dairesine ödenecek bu harç tutarı bu işlem için yaklaşık 200 USD tutmaktadır.

Adım 8 – Güncellenmiş tapu kaydı
 Başvuru sonrası tapu müdürlüğünün daveti üzerine imzaya gidildikten sonra işlem tamamlanmış olur. İşlem tamamlandığında malik tapu kaydında artık Türk vatandaşı ve  vatandaşlık kimlik numarasıyla görünür. Tüm süreç avukata vekaletname verilmesinden itibaren ortalama 4-5 iş günüdür. 



TAPU KAYDININ GÜNCELLENMESİ ARDINDAN YAPILMASI GEREKEN İŞLEMLER

Tapu kaydında yapılan güncellemelerin yalnızca tapu sicilinde kalmaması, aynı zamanda ilgili belediyeye de beyan edilmesi gerekmektedir. Bunun temel nedeni, belediyelerin emlak vergisi, beyanname kayıtları ve taşınmazla ilgili diğer yerel idari işlemleri doğru ve güncel bilgiler üzerinden yürütmesidir. Kişinin vatandaşlık ve kimlik bilgilerinde meydana gelen değişikliklerin belediye kayıtlarına yansıtılmaması durumunda, vergi mükellefiyeti yanlış kişi üzerinden görünebilir veya mükellef ile taşınmaz arasında uyumsuzluk oluşabilir. Bu da ileride vergi borcu takibi, tebligatların doğru kişiye ulaşmaması ve idari işlemlerde gecikmeler gibi sorunlara yol açabilir. Bu da belediye tarafından yüklenecek faiz ve bildirim yapılmamasından dolayı para cezasıyla karşılaşmak anlamına gelir. Bu nedenle tapu bilgilerinde yapılan her güncellemenin, ilgili belediyeye zamanında bildirilmesi hem hukuki hem de mali açıdan önem taşır. Belediyeye beyan süreci, aşağıda anlatıldığı gibi yapılmalıdır : 

Yeni Tapunun Belediyeye Beyanı Süreci

T.C. kimlik ile güncellenmiş yeni tapu alındıktan sonra taşınmazın belediye kayıtlarının da güncellenmesi gerekir. Bu işlem emlak vergisi ve belediye kayıtları açısından zorunludur.

Adım 1 – Süre
Yeni tapu alındıktan sonra:
	•	 En geç 30 gün içinde belediyeye bildirim yapılmalıdır.

Adım 2 – Gidilecek Birim
Taşınmazın bağlı olduğu belediyede 
	•	 Emlak Servisi / Emlak Vergi Birimi

Adım 3 – Gerekli Belgeler
	•	Yeni tapu fotokopisi
	•	T.C. kimlik kartı fotokopisi
	•	Yabancı pasaporta kayıtlı tapunun fotokopisi
	•	Vekaletname (avukat gidiyorsa)


Adım 4 – Beyan İşlemi
Belediyede yapılması istenecek işlem:
	•	 “Emlak Beyanı Güncelleme”
Memurun düzenleyeceği işlemler. 
	•	Malik bilgilerini T.C. kimliğe bağlar,
	•	Vergi kaydını günceller,
	•	Yeni mükellefiyet açar.


Adım 5 – Vergi Kontrolü
Belediye;
- geçmiş emlak vergisi borcu var mı, - yeni dönem tahakkuku doğru mu,
Kontrol eder.
Gerekirse ödeme yapılır. bu ödemelerin sebebi o belediye sınırlarında belediyelerin verdikleri temizlik ve diğer bütün hizmetler karşılığında alının yıllık küçük bir vergidir.

Adım 6 – Sonuç
İşlem tamamlanınca:
	•	Belediye kayıtları güncellenir,
	•	T.C. kimlik ile mükellefiyet açılır,
	•	İleride maliklerin yapacağı satış/kira işlemleri sorunsuz olur.


TAPUDA 3 YIL GEÇEN VE VATANDAŞLIK ALMAK İÇİN KONULMUŞ 3 SENE SATILAMAZ ŞERHİNİN KALDIRILMASI

Yatırım yoluyla Türk vatandaşlığı kazanılması kapsamında edinilen taşınmazlar üzerine konulan üç yıllık satılmayacağı vaadine ilişkin kayıt şerhi, vatandaşlığa başvurunun ilk adımıdır. Bu sürenin dolmasının ardından, taşınmaz malikinin talebi üzerine söz konusu şerhin kaldırılması mümkündür. Şerhin kaldırılmasıyla birlikte taşınmaz üzerindeki satış kısıtı ortadan kalkar ve malik, mülkiyet hakkını serbestçe kullanarak taşınmazını devretme, satma veya üzerinde tasarrufta bulunma imkânına kavuşur. Bu işlem, ilgili tapu müdürlüğüne başvuru yapılarak ve gerekli incelemelerin tamamlanmasının ardından gerçekleştirilir.

Şerh Nedir?

Şerh, tapu kaydına düşülen ve taşınmaz üzerinde bir hak, kısıtlama veya özel durum bulunduğunu gösteren resmi açıklamadır; bu sayede üçüncü kişiler taşınmazın hukuki durumu hakkında bilgi sahibi olur.

Vatandaşlık amacıyla konut edinimi neticesinde tapu kaydına şu içerikte bir şerh konulur:
“Türk vatandaşlığının kazanılması amacıyla edinilmiştir. 3 yıl süreyle satılamaz.”

Şerhte belirtilen 3 yıllık satılamama süresi şerhin konulduğu tarihten itibaren başlar. Bu imza itibariyle vatandaşlık başvuru işlemleri başlatılır.

Şerhin Kaldırılma Şartı
	•	Üç yılın tam olarak dolmuş olması gerekir.
	•	Üç yıllık süre dolmadan satış veya terkin edilirse vatandaşlık iptal riski doğar.
 Süre, vatandaşlığın onay tarihine göre değil, tapu resmi kayıtlarına göre şerhin konulduğu tarihine göre hesaplanır.

Adım Adım Şerh Kaldırma Süreci
AŞAMA 1: Süre Kontrolü
Tapuya konulan 3 yıl satılamaz şerhinin süresinin dolup dolmadığı kontrol edilir.
AŞAMA 2: Tapu Müdürlüğüne Başvuru
Taşınmazın bağlı olduğu Tapu Müdürlüğüne başvuru yapılır.
Başvuru:
	•	Malik tarafından şahsen
	•	Veya noter onaylı vekaletname ile vekil tarafından yapılabilir. Vekaletnamenin Türk kimliğiyle verilmiş olması gerekmektedir. 
AŞAMA 3: Gerekli Belgeler
Genellikle istenen belgeler:
	•	Türk vatandaşlık kimliği
	•	Tapu fotokopisi veya varsa bilgileri
	•	Dilekçe (avukatın tapu müdürlüğüne hitaben yazacağı talebi)
	•	Avukatlık vekaletnamesi

 Tapu Kaydının Güncellenmesi

Satılamaz şerhinin kaldırılmasının ardından, tapu kaydının güncellenmesi işlemi gerçekleştirilir ve taşınmaz üzerindeki kısıtlayıcı beyan tapu sicilinden terkin edilir. Bu güncelleme ile birlikte tapu kaydı, taşınmazın mevcut hukuki durumunu doğru şekilde yansıtacak hale gelir. Böylece malik, herhangi bir sınırlama olmaksızın taşınmaz üzerinde satış, devir veya diğer tasarruf işlemlerini serbestçe gerçekleştirebilir.

Tapu müdürlüğü:
	•	3 yıllık sürenin dolduğunu sistem üzerinden teyit eder.
	•	Ardından ilgili kişiye SMS yoluyla randevu gün ve saat bilgisi iletilir ve imza için davet edilir.
	•	Malik veya vekili, belirlenen tarihte gerekli belgeleri imzalayarak işlemi tamamlar ve satılamaz şerhi tapu kaydından kaldırılır.
	•	Bu işlemin ardından şerhsiz yeni tapu kaydı oluşturulur.
	•	Süreç genellikle aynı gün içerisinde veya birkaç iş günü içinde tamamlanır.
	•	Şerh kaldırma işlemi için tapu idaresine ödenecek bir harç yoktur.`,
  "emlak-vergisi-beyannamesi": String.raw`TÜRKİYE'DE EMLAK BEYANI VE EMLAK VERGİSİ: YABANCI MÜLKİYET SAHİPLERİNE YÖNELİK GENEL REHBER

Türkiye'de bir daire, villa, ofis, dükkân, arsa veya arazi satın alan yabancıların en sık karıştırdığı konulardan biri emlak beyanı ile emlak vergisi arasındaki farktır. Bu iki kavram birbiriyle bağlantılı olmakla birlikte, aynı anlama gelmemektedir. Uygulamada pek çok yabancı malik, tapu devri tamamlandıktan sonra sürecin sona erdiğini düşünmektedir. Oysa taşınmaz edinildikten sonra belediye nezdindeki bildirim yükümlülüğü, vergi kaydı ve düzenli ödeme yükümlülükleri ayrıca önem taşımaktadır. Türkiye'de emlak vergisi, taşınmazın bulunduğu ilgili belediyeye ödenmekte olup merkezi vergi dairesine değil.
Somut olayda taşınmazın türü, bulunduğu belediye, büyükşehir belediye sınırları içinde olup olmaması, muafiyet durumu ve mülkiyet değişikliği gibi hususlar sonucu doğrudan etkileyebilmektedir.

I. Emlak Beyanı Nedir?
Uygulamada "emlak beyanı" denildiğinde çoğu zaman taşınmaza ilişkin bilgilerin belediye kayıtlarına bildirilmesi anlaşılmaktadır. Bu bildirim sayesinde belediye, taşınmaz için emlak vergisi mükellefiyetini oluşturmakta veya güncellemektedir. Türkiye'de emlak vergisinde her yıl yeniden verilen klasik bir yıllık beyanname sistemi öngörülmemiştir; ancak mükellefin değişmesi, yeni bina yapılması, ifraz ya da taksim, kullanım durumunun değişmesi gibi vergi değerini etkileyen hâllerde belediyeye bildirim yapılması gerekmektedir.
Gelir İdaresi'nin süreler tablosunda da açıkça belirtildiği üzere, emlak vergisinde beyanname verme yükümlülüğü genel olarak yoktur; ancak vergi değerini değiştiren durumlar ortaya çıktığında ilgili yıl içinde bildirim yapılması zorunludur. Kanunda da bildirim süresi, olayın gerçekleştiği bütçe yılı içinde; son üç ayda gerçekleşmişse üç ay içinde şeklinde düzenlenmiştir.
Özetle söylemek gerekirse emlak beyanı, "Bu taşınmazın sahibi benim" veya "Bu taşınmazla ilgili vergi durumunu etkileyen bir değişiklik meydana geldi" bilgisinin belediyeye iletilmesidir. Bu adım atılmadan birçok belediyede doğru vergi kaydı oluşmamakta ya da eksik oluşabilmektedir.
Örneğin İstanbul'da bir daire satın alan yabancı bir kişi, tapu devrinden sonra ilgili belediyede taşınmazına ilişkin kaydın doğru şekilde açıldığını ve gerektiğinde bildirim işlemlerinin tamamlandığını kontrol etmelidir. Aynı şekilde arsaya bina yapılması, bağımsız bölüm eklenmesi veya taşınmazın niteliğinin değişmesi gibi hâllerde de yeni durumun belediyeye bildirilmesi gerekmektedir.

II. Emlak Vergisi Nedir?
Emlak vergisi, Türkiye sınırları içinde bulunan bina, arsa ve araziler üzerinden alınan yerel bir vergidir. Gelir İdaresi rehberine göre bu vergi, taşınmazın kayıtlı olduğu belediyeye ödenmektedir. Türkiye'de taşınmaz satın alan bir yabancı, her yıl belediyeye karşı emlak vergisi yönünden yükümlü olabilmektedir. Bu vergi yalnızca Türk vatandaşlarına değil, Türkiye'de taşınmaz sahibi olan yabancılara da uygulanmaktadır.
Burada vurgulanması gereken önemli bir nokta şudur: emlak vergisi, kira geliri vergisinden tamamen farklıdır. Taşınmazınızı kiraya vermemiş olsanız bile, mülkiyet sahibi olduğunuz için emlak vergisi yükümlülüğü doğmaktadır. Başka bir ifadeyle, eviniz boş olsa bile emlak vergisi yükümlülüğü devam edebilmektedir.

III. Emlak Vergisini Kim Öder?
Kural olarak taşınmazın maliki, yani tapuda adına kayıtlı kişi emlak vergisinin mükellefidir. Kanunda mülkiyet değişikliği ve intifa hakkı gibi bazı özel durumlar ayrıca düzenlenmiştir; ancak genel ilke, verginin taşınmaz üzerinde hak sahibi olan kişi tarafından ödenmesidir. Mülkiyet değişmesi hâlinde vergi mükellefiyeti de buna göre güncellenmektedir.
Örneğin bir yabancı yatırımcı Bodrum'da villa satın almışsa, bu taşınmaz için emlak vergisi yükümlüsü kural olarak kendisi olmaktadır. Aynı kişi İstanbul'daki bir ofisi şirketine tahsis etmişse, malik sıfatı değişmedikçe emlak vergisi mükellefiyeti de onun üzerinde kalmaya devam etmektedir.

IV. Emlak Vergisi Mükellefiyeti Ne Zaman Başlar?
Emlak vergisinde mükellefiyet çoğu durumda taşınmazın edinildiği yılı izleyen takvim yılından itibaren başlamaktadır. Yeni bina yapılması, arsa üzerine yapı inşa edilmesi veya mülkiyet değişikliği gibi hâllerde başlangıç zamanı, somut olaya göre farklı teknik kurallara bağlanmıştır. Gelir İdaresi'nin emlak vergisi rehberi, mükellefiyetin başlama ve sona erme zamanını özel bir başlık altında ayrıca açıklamaktadır.

V. Emlak Vergisi Nasıl Hesaplanır?
Emlak vergisi, taşınmazın vergi değeri üzerinden hesaplanmaktadır. Bu değer; taşınmazın türü, bulunduğu yer, arsa birim metrekare değeri, bina metrekare normal inşaat maliyet bedelleri ve ilgili mevzuat çerçevesinde belirlenen unsurlara göre tespit edilmektedir. Uygulamada belediyelerde "rayiç bedel" veya "emlak vergi değeri" olarak bilinen kavramlar bu hesaplamada belirleyici rol oynamaktadır. e-Devlet üzerinden birçok belediyede Emlak Vergisi Bildirim Sureti (Rayiç Bedel) Belgesi veya arsa metrekare birim değeri sorgulanabilmektedir.
Bu nedenle benzer özelliklere sahip iki dairenin emlak vergisi aynı olmak zorunda değildir. Aynı büyüklükte iki taşınmaz farklı ilçe veya sokakta yer alıyorsa, farklı vergi değerleri söz konusu olabilmektedir.

VI. Güncel Emlak Vergisi Oranları
Gelir İdaresi'nin yayımladığı emlak vergisi oranlarına göre bina vergisinin oranı meskenlerde binde bir, diğer binalarda binde iki; arazi vergisinin oranı binde bir, arsa vergisinin oranı ise binde üçtür. Ancak taşınmaz büyükşehir belediyesi sınırları ve mücavir alanlar içindeyse bu oranlar yüzde yüz artırımlı olarak uygulanmaktadır. Başka bir ifadeyle büyükşehirde mesken için fiili oran çoğu durumda binde iki, işyeri için ise binde dört olmaktadır.
Örneğin Ankara Çankaya'da büyükşehir sınırları içinde bulunan bir konutun emlak vergisi oranı, büyükşehir dışındaki benzer bir konuta kıyasla daha yüksek uygulanabilmektedir. Aynı şekilde İstanbul'daki bir dükkân ile büyükşehir dışında kalan bir ilçedeki dükkânın vergi oranları birbirinden farklı olabilmektedir.

VII. Emlak Vergisi Ne Zaman Ödenir?
Gelir İdaresi'ne göre emlak vergisi iki taksitte ödenmektedir. Birinci taksit Mart, Nisan ve Mayıs aylarında; ikinci taksit ise Kasım ayında ödenmektedir. Uygulamada belediyeler genellikle çevrimiçi ödeme, vezne veya anlaşmalı ödeme kanalları üzerinden hizmet sunmaktadır.
Türkiye'de bir apartman dairesine sahip yabancı bir malik, her yıl ilk taksiti ilkbahar döneminde, ikinci taksiti ise Kasım ayında ödemekle yükümlüdür. Ödemenin unutulması hâlinde borç sonraki yıllara devredebilmekte ve gecikme zammı eklenmektedir.

VIII. Emlak Beyanı ve Belediye Kaydının Önemi
Pek çok yabancı malik, yalnızca tapu devrini tamamlamanın yeterli olduğunu düşünmektedir. Oysa belediye kayıtlarının güncel tutulmaması ileride çeşitli sorunlara yol açabilmektedir. Taşınmazın vergi değeri hatalı belirlenebilir, mükellefiyet yanlış kişi adına görünebilir, satış sonrası kayıt kapanmamış olabilir ya da yeni malik adına kayıt hiç açılmamış olabilir. Bu durum sonradan toplu borç, faiz ve düzeltme işlemlerine neden olabilmektedir.
Örneğin bir yabancı kişi dairesini sattıktan sonra belediye kayıtları güncellenmezse, sistemde hâlâ malik olarak görünmeye devam edebilmektedir. Tersine, taşınmazı yeni alan yabancı kişi kayıt açtırmaz veya kontrol ettirmezse, vergi birikimi ileride sürpriz biçimde ortaya çıkabilmektedir.

IX. Emlak Vergisi Ödenmezse Ne Olur?
Emlak vergisinin zamanında ödenmemesi hâlinde en temel sonuç gecikme zammıdır. Kamu alacaklarının tahsiline ilişkin mevzuat gereği, vadesinde ödenmeyen kamu borçlarına gecikme zammı uygulanmaktadır. Gelir İdaresi'nin dijital araçları da gecikme zammı ve faizinin ayrıca hesaplanabildiğini ortaya koymaktadır.
Sorun yalnızca faizle sınırlı değildir. Ödenmeyen emlak vergisi nedeniyle zaman içinde aşağıdaki sonuçlarla karşılaşılabilmektedir:
	•	Belediye kayıtlarında borç birikmesi,
	•	Borcun tahsili için icra ve takip işlemleri başlatılması,
	•	Belediyeden alınması gereken bazı belgelerde gecikme veya güçlük yaşanması,
	•	Satış, miras, intikal veya dosya incelemesi süreçlerinde geçmiş dönem borçlarının gün yüzüne çıkması,
	•	Borç nedeniyle kapanmayan dosyalar ve ek düzeltme başvuruları.
Bu sonuçların kapsamı somut olaya göre değişmekle birlikte, kamu alacağı niteliği nedeniyle borcun kendiliğinden ortadan kalktığını düşünmek doğru değildir.

X. Satış Sürecinde Emlak Vergisinin Önemi
Emlak vergisi borcu, taşınmaz işlemleri sırasında sıkça kontrol edilen kalemlerden biridir. Özellikle alım-satım öncesi hukuki incelemelerde, belediye kayıtlarındaki mevcut emlak vergisi borçları ve beyan durumu büyük önem taşımaktadır. Taşınmaz devri mümkün olsa bile, eski dönem borçları taraflar arasında uyuşmazlık yaratabilmekte ve kapanış sürecini güçleştirebilmektedir. Bunun yanı sıra tapu harcı hesaplamalarında emlak vergi değeri pek çok işlemde referans niteliği taşımaktadır.
Örneğin yabancı bir malik İstanbul'daki dairesini satmaya hazırlanırken, belediyede geçmiş yıllara ait ödenmemiş emlak vergisi bulunduğunu fark edebilir. Bu durumda alıcı taraf, kapanış öncesinde borcun tasfiye edilmesini talep edebilmektedir. Aynı şekilde rayiç bedel belgesi, satış hazırlığında sıklıkla talep edilen belgeler arasında yer almaktadır.

XI. Emlak Vergisi ile Kira Geliri Vergisi Arasındaki Fark
Bu iki vergi birbirinden tamamen farklıdır. Emlak vergisi, taşınmaz sahibi olunduğu için belediyeye ödenen yerel bir vergidir. Kira geliri vergisi ise taşınmazın kiraya verilmesi sonucu elde edilen gelir üzerinden doğabilecek gelir vergisidir. Bir taşınmaz boş olsa bile emlak vergisi yükümlülüğü devam edebilmekte; ancak kira geliri elde edilmediğinden gelir vergisi doğmayabilmektedir.
Örneğin Antalya'da evi olan yabancı bir kişinin evi hiç kiraya verilmemiş olabilir. Bu durumda kira geliri vergisi doğmayabilmektedir; ancak emlak vergisi yükümlülüğü yine de devam etmektedir. Buna karşılık ev kiraya verilmişse, emlak vergisine ek olarak kira gelirine ilişkin ayrı vergisel yükümlülükler de gündeme gelmektedir.

XII. Rayiç Bedel ve Önemi
Rayiç bedel ya da emlak vergi değeri, taşınmazla ilgili birçok işlemde referans alınan belediye kayıtlı değerdir. Emlak vergisi hesabında temel önemi olan bu değer, bazı tapu ve harç işlemlerinde de dolaylı biçimde rol oynamaktadır. e-Devlet üzerinden pek çok belediyede Emlak Vergisi Bildirim Sureti (Rayiç Bedel) Belgesi alınabilmesi, bu belgenin uygulamadaki önemini açıkça ortaya koymaktadır.
Özellikle yabancı yatırımcılar için rayiç bedel, satın alma sonrasında belediye kaydının doğru kurulup kurulmadığını kontrol etmek açısından da yararlıdır. Düşük, yüksek veya hatalı kayıt ileride farklı vergisel ve usulî sorunlara yol açabilmektedir.

XIII. Yabancı Mülkiyet Sahipleri İçin Pratik Adımlar
Türkiye'de taşınmaz alan yabancı bir kişi için pratikte şu kontrollerin yapılması önerilmektedir:
	•	Taşınmazın bulunduğu belediyede kaydın açıldığını veya güncellendiğini doğrulamak,
	•	Emlak vergisi tahakkukunun doğru kişi adına görünüp görünmediğini kontrol etmek,
	•	İlgili belediyenin çevrimiçi ödeme sistemine erişim imkânını araştırmak,
	•	Rayiç bedel ve arsa birim değeri gibi kayıtları gerektiğinde e-Devlet veya belediye üzerinden teyit etmek,
	•	Satış, bağış, miras, yeniden inşa, birleştirme veya bölme gibi değişikliklerde belediye boyutunu ayrıca incelemek.

XIV. Sık Sorulan Sorular

Türkiye'deki evim boşsa yine de emlak vergisi öder miyim?
Evet. Emlak vergisi mülkiyete bağlıdır; kira geliri elde edilip edilmemesi tek başına belirleyici değildir.

Emlak vergisini vergi dairesine mi, belediyeye mi öderim?
Taşınmazın bulunduğu ilgili belediyeye ödersiniz.

Her yıl yeniden emlak beyanı vermem gerekir mi?
Genel sistem yıllık beyanname esasına dayanmamaktadır. Ancak mükellefiyet veya vergi değerini etkileyen değişiklikler meydana geldiğinde bildirim yapılması gerekmektedir.

Emlak vergisi oranı her yerde aynı mıdır?
Hayır. Taşınmazın türüne göre oran değişmektedir; ayrıca büyükşehir belediyelerinde oranlar yüzde yüz artırımlı uygulanmaktadır.

Ödemezsem sadece faiz mi işler?
Hayır. Gecikme zammına ek olarak borç birikimi, tahsilat süreci ve işlem aşamasında ortaya çıkabilecek idari sorunlar da yaşanabilmektedir.

Sonuç
Türkiye'de taşınmaz sahibi olan yabancılar için emlak beyanı ve emlak vergisi, satın alma sürecinin doğal bir devamıdır. Tapu devrinin tamamlanması tek başına yeterli değildir; belediye kayıtlarının doğru biçimde kurulması, verginin zamanında ödenmesi ve taşınmazla ilgili değişikliklerin gerektiğinde bildirilmesi gerekmektedir. Emlak vergisi, taşınmaz sahibi olunduğu için doğan yerel bir vergi olup kira geliri vergisinden tamamen farklıdır. Zamanında ödenmemesi hâlinde gecikme zammı, belediye kayıt sorunları ve tahsilat problemleri gündeme gelmektedir.
Özellikle yabancı yatırımcılar, Türkiye'de ikamet etmeyen malikler, birden fazla taşınmazı bulunanlar veya satışa hazırlanan kişiler bakımından belediye kayıtlarının ve emlak vergisi durumunun önceden incelenmesi ciddi avantaj sağlamaktadır. Doğru yapılandırılmış bir dosya, hem vergi riskini hem de işlem sürecinde ortaya çıkabilecek idari sorunları önemli ölçüde azaltmaktadır.`,
  "kira-geliri-vergisi": String.raw`TÜRKİYE'DE KİRA GELİRİ ELDE EDEN YABANCILARA YÖNELİK VERGİ REHBERİ

Türkiye'de bir daire, rezidans, ofis, dükkân, arsa veya benzeri bir taşınmazı kiraya veriyorsanız, elde ettiğiniz gelir Türk vergi mevzuatı bakımından vergilendirilebilir niteliktedir. Türk hukukunda bu gelirler genel olarak gayrimenkul sermaye iradı olarak değerlendirilmektedir. Yalnızca konut ve işyeri değil; bazı durumlarda arsa, arazi ve belirli mal ya da hakların kiraya verilmesinden doğan gelirler de bu kapsamda yer almaktadır. Bu nedenle Türkiye'de taşınmazı bulunan yabancı gerçek kişilerin, kira gelirlerinin beyan edilip edilmeyeceğini ve hangi vergi kurallarının uygulanacağını dikkatle değerlendirmesi gerekmektedir.
Yabancı kişiler bakımından konu yalnızca kira geliri elde edilip edilmediğinden ibaret değildir. Taşınmazın konut mu yoksa işyeri mi olduğu, kira bedelinin nasıl tahsil edildiği, Türkiye'de tam mükellef veya dar mükellef sayılma durumu ve bazı hâllerde çifte vergilendirmeyi önleme anlaşmaları gibi unsurlar sonucu doğrudan etkileyebilmektedir. Bu nedenle kira gelirlerinin hukuki ve vergisel açıdan doğru yapılandırılması büyük önem taşımaktadır.

I. Kira Geliri Nedir?
Gelir Vergisi Kanunu'na göre konut, işyeri, arsa, arazi gibi taşınmazların kiraya verilmesinden elde edilen gelirler kira geliri olarak vergilendirilmektedir. Uygulamada bir yabancının Türkiye'de sahip olduğu konuttan aylık kira alması, bir mağaza veya ofisi şirkete kiralaması ya da belirli mal ve hakları kullanıma bırakması bu kapsamda değerlendirilebilir. Bu gelirler çoğu zaman yıllık gelir vergisi beyannamesi bakımından ayrıca ele alınmaktadır.
Örneğin İstanbul'da bulunan bir dairenin aylık bedelle bir aileye kiraya verilmesi konut kira geliri niteliği taşımaktadır. Buna karşılık aynı kişinin Ankara'daki bir ofisi bir şirkete kiralaması işyeri kira geliri sayılmaktadır. Her iki gelir türü de kira geliri kapsamında olmakla birlikte, vergisel rejimleri birbirinden farklıdır.

II. Konut Kira Geliri ile İşyeri Kira Geliri Arasındaki Temel Fark
Türkiye'de vergi hukuku bakımından en kritik ayrım, taşınmazın mesken olarak mı yoksa işyeri olarak mı kullanıldığıdır. Konut kira gelirlerinde belirli bir istisna uygulanabilmektedir. İşyeri kira gelirlerinde ise çoğu durumda kiracı tarafından vergi kesintisi, yani stopaj, yapılmaktadır. Bu nedenle aynı miktarda kira alan iki kişi, taşınmazın kullanım şekline göre farklı vergisel sonuçlarla karşılaşabilmektedir.
Somut bir örnek vermek gerekirse; yabancı bir malik İzmir'deki dairesini bir aileye kiraya veriyorsa bu gelir konut kira geliri olarak değerlendirilmektedir. Ancak Antalya'daki dükkânını bir şirkete kiralıyorsa, işyeri kira gelirine ilişkin stopaj ve beyan kuralları da devreye girmektedir.

III. Hangi Durumda Beyanname Vermek Gerekmektedir?
Kira gelirinde beyan zorunluluğu, gelirin türüne ve tutarına göre değişmektedir. Gelir İdaresi Başkanlığı'nın güncel açıklamalarına göre 2025 yılında elde edilen gelirler bakımından mesken kira gelirlerinde 47.000 TL istisna uygulanmaktadır. Aynı dönemde tevkifata tabi işyeri kira gelirlerinde yıllık brüt 330.000 TL sınırının aşılması hâlinde yıllık beyanname verilmesi gerekmektedir. Gelir İdaresi ayrıca 2026 yılında elde edilecek gelirler bakımından mesken istisnasının 58.000 TL, tevkifata tabi işyeri gelirleri için beyan sınırının ise 400.000 TL olduğunu duyurmuştur.
Örneğin yabancı bir kişi yıl içinde yalnızca Türkiye'deki konutundan 40.000 TL kira geliri elde etmişse, 2025 gelirleri bakımından bu tutar 47.000 TL istisna sınırının altında kaldığı için yalnızca bu gelir nedeniyle beyanname vermesi gerekmeyebilir. Ancak aynı kişi 120.000 TL konut kira geliri elde etmişse istisna sınırı aşılmış olur ve beyanname verilmesi zorunlu hâle gelir.
İşyeri kirasında da benzer bir değerlendirme söz konusudur: yıllık brüt kira geliri 360.000 TL ise ve gelir stopaja tabiyse, 330.000 TL'lik beyan sınırı aşıldığından yıllık beyanname verilmesi gerekmektedir. Burada esas alınan tutar, kiraya verenin eline geçen net para değil, çoğu durumda brüt kira tutarıdır.

IV. Konut Kira Gelirindeki İstisnanın Uygulanması
Mesken kira gelirlerinde uygulanan istisna, belirli bir tutara kadar olan gelirin vergiden hariç tutulması anlamına gelmektedir. Bu avantaj yalnızca konut kira gelirleri için geçerlidir; işyeri kira gelirlerinde aynı şekilde uygulanmamaktadır. Birden fazla konuttan kira geliri elde edilse bile istisna, toplam gelire bir kez uygulanmaktadır.
Örneğin bir yabancı malik Türkiye'de iki ayrı daireden toplam 200.000 TL kira geliri elde etmişse, istisna her daire için ayrı ayrı değil toplam gelir üzerinden tek sefer uygulanmaktadır. Ayrıca süresinde beyan edilmeyen mesken kira gelirlerinde istisna hakkının kaybedilebileceği de unutulmamalıdır. Bu nedenle beyan yükümlülüğü bulunan kişilerin yasal sürelere dikkat etmesi büyük önem taşımaktadır.

V. İşyeri Kiralarında Stopaj Uygulaması
İşyeri kiralarında çoğu durumda kiracı, kira ödemesi üzerinden vergi kesintisi yapmaktadır. Bu sistem Türk vergi hukukunda tevkifat veya stopaj olarak adlandırılmaktadır. Kiraya verenin banka hesabına net bir tutar geçse bile, vergi hesabında çoğunlukla brüt tutar esas alınmaktadır. Stopaj yoluyla yıl içinde ödenen vergiler, yıllık beyannamede hesaplanan gelir vergisinden mahsup edilebilmektedir. Bazı hâllerde iade hakkı da doğabilmektedir.
Örneğin bir işyeri için aylık brüt kira 50.000 TL ise, kiracı mevzuat gereği stopaj uygulayarak daha düşük net tutar ödeyebilmektedir. Buna rağmen yıllık beyan sınırı değerlendirilirken brüt kira esas alınmaktadır. Bu nedenle "hesabıma daha az para geçtiği için beyanname vermem gerekmiyor" düşüncesi hatalı bir değerlendirme olabilir.

VI. Kira Gelirinin Elde Edilmesinde Temel İlkeler
Türk vergi sisteminde kira gelirinin vergilendirilmesinde temel ilke, gelirin fiilen tahsil edilmiş olmasıdır. Kira bedeli ödendiğinde veya hesaba geçtiğinde gelir doğmuş kabul edilmektedir. Geçmiş yıllara ait kira bedelleri sonradan topluca tahsil edilirse, kural olarak tahsil edildiği yılın geliri sayılmaktadır. Buna karşılık gelecek yıllara ait kiralar peşin tahsil edilmişse, ilgili yıllara dağıtılarak dikkate alınmaktadır. Döviz cinsinden tahsilatlarda ise tahsil tarihindeki Merkez Bankası döviz alış kuru esas alınmaktadır.
Örneğin kiracının 2024 yılına ait ödenmemiş kiraları 2025 yılında topluca ödemesi hâlinde bu gelir, 2025 yılı geliri olarak değerlendirilmektedir. Eğer 2026 ve 2027 yıllarına ait kirayı 2025'te peşin ödüyorsa, bu tutar ilgili yıllara dağıtılarak dikkate alınmaktadır.

VII. Kira Ödemelerinde Banka veya PTT Üzerinden Tahsilat
Kira ödemelerinin banka veya PTT aracılığıyla yapılması hem ispat kolaylığı hem de mevzuata uyum bakımından büyük önem taşımaktadır. Gelir İdaresi, kira tahsilat ve ödemelerinin kayıtlı sistem üzerinden gerçekleştirilmesine özel önem vermektedir. Elden yapılan tahsilatlar, ileride hem vergi incelemesinde hem de özel hukuk uyuşmazlıklarında sorun yaratabilmektedir. Usule aykırılık hâlinde Vergi Usul Kanunu kapsamında özel usulsüzlük cezası gündeme gelebilmektedir.
Örneğin kiracının her ay elden ödeme yapması hâlinde; toplam tahsilatın ne kadar olduğu, ödemenin hangi aya ait bulunduğu veya gerçekten ödeme yapılıp yapılmadığı ileride tartışmalı hâle gelebilmektedir. Banka dekontu ise bu tür riskleri önemli ölçüde azaltmaktadır.

VIII. Beyanname Verme ve Vergi Ödeme Takvimi
Kira gelirine ilişkin yıllık gelir vergisi beyannamesi, gelirin elde edildiği yılı takip eden yılın Mart ayında verilmektedir. Örneğin 2025 yılında elde edilen kira gelirleri için beyan dönemi 1-31 Mart 2026 tarihleri arasındadır. Hesaplanan gelir vergisi kural olarak iki taksitte ödenmektedir; ilk taksit Mart ayı sonunda, ikinci taksit ise Temmuz ayı sonunda tahsil edilmektedir.
Bu yapı her yıl aynı mantıkla devam etmekte; ancak parasal sınırlar ve bazı teknik ayrıntılar değişebilmektedir. Bu nedenle özellikle yabancı malikler açısından her yıl güncel sınırların ayrıca kontrol edilmesi büyük önem taşımaktadır.

IX. Kira Gelirinden Gider İndirimi
Türk vergi sisteminde kira gelirinin safi tutarı hesaplanırken belirli giderler indirilebilmektedir. Bunun için iki temel yöntem öngörülmüştür: gerçek gider yöntemi ve götürü gider yöntemi. Hangi yöntemin daha avantajlı olduğu, kişinin gerçek giderlerinin büyüklüğüne ve belge düzenine göre farklılık göstermektedir.

A. Gerçek Gider Yöntemi
Gerçek gider yönteminde, kanunda izin verilen ve belgeyle ispatlanabilen giderler indirim konusu yapılabilmektedir. Bu giderler arasında bakım ve onarım giderleri, sigorta, emlak vergisi, yönetim giderleri ve bazı durumlarda borç faizleri yer alabilmektedir. Ancak her gider her taşınmaz için aynı şekilde indirilemez; konut ve işyeri bakımından farklı kurallar uygulanmaktadır.
Örneğin bir daireden 320.000 TL kira geliri elde edildiğini ve aynı yıl bu daire için 120.000 TL belgeye dayalı gider bulunduğunu varsayalım. Gerçek gider yöntemi seçildiğinde bu giderlerin vergiye tabi kısma isabet eden bölümü indirilebilmektedir. Giderler yüksekse bu yöntem çoğu zaman daha avantajlı sonuç doğurmaktadır.

B. Götürü Gider Yöntemi
Götürü gider yönteminde ise tek tek belge sunmak yerine, mevzuatta öngörülen oran üzerinden standart bir indirim yapılmaktadır. Bu yöntem, masrafı az olan veya daha sade bir beyan süreci tercih eden kişiler için pratik olabilmektedir. Ancak her zaman en avantajlı yöntem değildir; rakamsal karşılaştırma yapılması gerekmektedir.
Örneğin 320.000 TL kira gelirine karşılık gerçek giderler düşükse götürü gider yöntemi daha basit bir çözüm sunmaktadır. Buna karşılık yüksek onarım, vergi, sigorta veya diğer kabul edilebilir giderler varsa gerçek gider yöntemi daha düşük vergi yüküyle sonuçlanabilmektedir.

C. Konut Kira Gelirlerinde Özel Gider Kuralları
Konut kira gelirlerinde bazı özel avantaj ve sınırlamalar mevcuttur. Gelir İdaresi rehberine göre bir adet konut için belirli şartlarla iktisap bedelinin yüzde beşi, beş yıl süreyle indirilebilmektedir. Bunun yanında güncel açıklamalara göre 1 Ocak 2025 tarihinden itibaren konutlar hariç kiraya verilen mal ve haklar bakımından borç faizlerinin indirilebildiği belirtilmektedir. Bu nedenle konut kredi faizlerinin indirimi konusunda somut tarih ve taşınmaz türü ayrıca kontrol edilmelidir.
Ayrıca konut kira gelirinde istisna kullanılıyorsa, giderlerin tamamı değil; yalnızca vergiye tabi kısma isabet eden bölümü indirilebilmektedir. Başka bir ifadeyle, istisna uygulanan mesken kira gelirlerinde giderler doğrudan tam tutar üzerinden değil, oranlama yapılarak dikkate alınmaktadır.

D. Hangi Gider Yöntemi Daha Avantajlıdır?
Bu sorunun tek ve kesin bir yanıtı bulunmamaktadır. Giderler yüksek ve belgelendirilebilir nitelikteyse gerçek gider yöntemi daha avantajlı olabilmektedir. Giderler düşük veya daha pratik bir beyan süreci tercih ediliyorsa götürü gider yöntemi uygun olabilmektedir. Özellikle hem konut hem işyeri kira geliri bulunanlar, birden fazla taşınmazı olanlar veya yakın tarihte edinilmiş taşınmazları kiraya verenler açısından yöntem seçimi toplam vergi tutarını ciddi biçimde etkileyebilmektedir.
Örneğin 320.000 TL konut kira geliri ve 120.000 TL kabul edilebilir belgeye dayalı gideri olan bir kişi için gerçek gider yöntemi, götürü gidere kıyasla daha düşük vergi yüküne yol açabilmektedir. Buna karşılık aynı gelir düzeyinde ancak çok az gideri olan bir kişi için götürü gider yöntemi daha basit ve uygun bir seçenek olabilmektedir.

X. Kira Geliri Elde Edilmediği Hâllerde Yapılması Gerekenler
Bazı durumlarda yabancı bir kişinin Türkiye'de adına kayıtlı taşınmaz bulunmasına rağmen ilgili yılda fiilen kira tahsilatı olmayabilir. Böyle hâllerde Hazır Beyan Sistemi üzerinden "kira geliri elde etmedim" veya benzeri bir bildirim yapılabilmektedir. Bu adım, sistemsel görünüm nedeniyle oluşabilecek gereksiz sorgu ve inceleme risklerini azaltması bakımından faydalıdır.
Örneğin daireniz yıl boyunca boş kalmışsa ve hiç kira tahsil edilmemişse, sırf üzerinize kayıtlı taşınmaz bulunduğu gerekçesiyle otomatik olarak vergi doğmamaktadır. Ancak vergi idaresi kayıtları ile fiili durumun uyumlu kılınması için gerekli açıklamanın yapılması gerekebilmektedir.

XI. Gelir Vergisi Oranları
Türkiye'de gelir vergisi artan oranlı bir yapıya sahiptir. Gelir arttıkça uygulanacak vergi oranı da yükselmektedir. Gelir İdaresi'nin yayımladığı 2025 tarifesine göre ilk dilim olan 158.000 TL'ye kadar yüzde on beş, sonraki dilimler ise kademeli olarak yüzde yirmi, yüzde yirmi yedi, yüzde otuz beş ve yüzde kırk şeklinde uygulanmaktadır. Bu nedenle aynı brüt kira gelirine sahip iki kişi, seçtiği gider yöntemine ve kabul edilen gider tutarına bağlı olarak farklı miktarda vergi ödeyebilmektedir.

XII. Yabancı Kişiler İçin Neden Ayrıca Hukuki Değerlendirme Gerekmektedir?
Türkiye'de kira geliri elde eden yabancılar bakımından her dosya aynı değerlendirmeyi gerektirmemektedir. Kişi Türkiye'de tam mükellef sayılabilir ya da yalnızca Türkiye kaynaklı gelirleri nedeniyle dar mükellef olabilir. Ayrıca kişinin mukim olduğu ülke ile Türkiye arasında bir çifte vergilendirmeyi önleme anlaşması bulunması hâlinde, aynı gelirin iki ülkede nasıl dikkate alınacağı ayrıca analiz edilmelidir. Bu nedenle genel bilgiler her zaman yeterli olmamaktadır.
Örneğin Almanya'da yerleşik bir kişi İstanbul'daki dairesinden kira geliri elde ediyorsa, Türkiye'deki beyan yükümlülüğü ile Almanya'daki raporlama ve mahsup imkânları birlikte değerlendirilmelidir. Aynı şekilde Körfez bölgesinde yaşayan ve Türkiye'de işyeri kiralayan bir yabancının dosyası da farklı bir analiz gerektirmektedir. Bu tür dosyalarda vergi, göçmenlik ve sözleşme hukuku boyutlarının birlikte ele alınması büyük önem taşımaktadır.

XIII. Sık Sorulan Sorular

Türkiye'de tek bir dairem varsa mutlaka vergi öder miyim?
Hayır. Konut kira geliriniz ilgili yıl için belirlenen istisna sınırının altında kalıyorsa yalnızca bu gelir nedeniyle beyanname vermeniz gerekmeyebilir. Ancak her yıl güncel tutarın kontrol edilmesi gerekmektedir.

İşyeri kiramdan zaten stopaj kesiliyorsa yine de beyanname vermem gerekir mi?
Bazı durumlarda evet. Tevkifata tabi işyeri kira geliriniz ilgili yıl için belirlenen beyan sınırını aşıyorsa yıllık beyanname verilmesi zorunludur.

Kirayı yabancı para ile alıyorsam ne olur?
Kira döviz cinsinden tahsil edilse bile vergi hesabında tahsil tarihindeki TCMB döviz alış kuru esas alınmaktadır.

Kirayı elden almak sorun yaratır mı?
Evet, yaratabilir. Banka veya PTT aracılığıyla tahsilat hem ispat hem de mevzuata uyum açısından çok daha güvenlidir; aksi hâlde ceza riski doğabilmektedir.

Gerçek gider mi, götürü gider mi daha avantajlıdır?
Bu, gider yapınıza bağlıdır. Masraflarınız yüksek ve belgeli ise gerçek gider yöntemi; masraflarınız düşük ve daha sade bir işlem istiyorsanız götürü gider yöntemi daha uygun olabilmektedir.

Sonuç
Türkiye'de kira geliri elde eden yabancı kişiler açısından en önemli husus, gelirin türünü doğru belirlemek ve beyan yükümlülüğünü zamanında yerine getirmektir. Konut ve işyeri kira gelirleri farklı kurallara tabidir. Konutta istisna, işyerinde stopaj, gider yöntemi seçimi, banka üzerinden tahsilat ve yıllık beyan takvimi birlikte değerlendirilmelidir. Güncel açıklamalara göre 2025 gelirleri bakımından yıllık 47.000 TL mesken istisnası ve 330.000 TL işyeri beyan sınırı; 2026 gelirleri bakımından ise yıllık 58.000 TL mesken istisnası ve 400.000 TL işyeri beyan sınırı uygulanmaktadır.
Özellikle birden fazla taşınmazı bulunanlar, hem konut hem işyeri kira geliri elde edenler, dövizle kira alanlar, geçmiş yıllara ait kiraları topluca tahsil edenler veya yurt dışında mukim olup Türkiye'de taşınmaz sahibi olanlar bakımından profesyonel hukuki ve vergisel destek alınması ciddi avantaj sağlamaktadır. Doğru yapılandırılmış bir beyan süreci, gereksiz vergi yükünü ve idari riskleri önemli ölçüde azaltabilmektedir.
Türkiye'de kira geliri elde eden yabancılar açısından her dosya kendi koşulları çerçevesinde değerlendirilmelidir. Mukimlik durumu, kira sözleşmesinin yapısı, ödeme biçimi, taşınmazın kullanım şekli ve uluslararası vergi boyutu birlikte incelenmeden kesin sonuca varılması doğru olmayacaktır. Bu nedenle somut olay bazında profesyonel değerlendirme yaptırılması en güvenli yol olarak önerilmektedir.`,
  "kira-hukuku-davalari": String.raw`KİRA HUKUKUNDAN KAYNAKLANAN DAVALAR VE TAHLİYE SÜREÇLERİ
İcra Takibi, Sulh Hukuk Davaları, İhtiyaç Sebebiyle Tahliye, On Yıllık Uzama Süresi ve Kira Tespit Davası Açısından Ayrıntılı İnceleme
Giriş
Kira ilişkisi, uygulamada en sık uyuşmazlık doğuran borç ilişkilerinden biridir. Konut ve çatılı işyeri kiralarında kiraya veren ile kiracı arasında ortaya çıkan ihtilaflar yalnızca kira parasının ödenmemesiyle sınırlı değildir. Bunun yanında tahliye taahhütnamesi, iki haklı ihtar, ihtiyaç sebebiyle tahliye, on yıllık uzama süresinin dolması, kira bedelinin tespiti, kira uyarlaması, kira alacağının tahsili, yan giderler, depozito ve yeniden kiralama yasağı gibi pek çok mesele de kira hukukunun temel başlıklarını oluşturmaktadır. 6098 sayılı Türk Borçlar Kanunu bu uyuşmazlıkların önemli bir bölümünü ayrıntılı biçimde düzenlemiş; 2004 sayılı İcra ve İflas Kanunu ise özellikle kira borcuna dayalı tahliye taleplerinde özel takip yolları öngörmüştür.
Bugün uygulamada kira uyuşmazlıklarının büyük bölümü, tahliye ve kira bedelinin belirlenmesi etrafında toplanmaktadır. Tahliye bakımından her sebebin kendi şartları, süreleri ve usulü bulunmaktadır. Kiraya verenin en çok hata yaptığı alan da tam olarak burasıdır: doğru tahliye sebebine dayanılmaması, hak düşürücü sürelerin kaçırılması, yanlış merciye başvurulması veya ihtarın usule uygun biçimde çekilmemesi sebebiyle davalar reddedilebilmektedir. Aynı şekilde kira tespit davasında da sözleşmedeki artış hükmü, beş yıllık süre, yeni kira dönemine etkili sonuç doğurma şartları ve emsal kira incelemesi birlikte değerlendirilmeden sağlıklı bir sonuç almak mümkün değildir.
Bunun yanında, 5 Nisan 2023 tarihli ve 7445 sayılı Kanun’la 6325 sayılı Hukuk Uyuşmazlıklarında Arabuluculuk Kanunu’na eklenen 18/B maddesi uyarınca 1 Eylül 2023 tarihinden itibaren kira ilişkisinden kaynaklanan uyuşmazlıkların önemli bir bölümü bakımından dava şartı olarak arabuluculuk yürürlüğe girmiştir. Ancak kiralanan taşınmazların İcra ve İflas Kanunu’na göre ilamsız icra yoluyla tahliyesine ilişkin hükümler bu kapsamın dışında bırakılmıştır. Bu nedenle hangi uyuşmazlıkta önce arabulucuya gidilmesi gerektiği, hangi uyuşmazlıkta doğrudan icra takibi veya dava yoluna gidilebileceği stratejik açıdan da önem taşımaktadır.
Bu çalışmada; kira hukukundan doğan başlıca uyuşmazlık türleri ana hatlarıyla incelenecek; tahliye talepli icra takibi, iki haklı ihtar sebebiyle tahliye, ihtiyaç sebebiyle tahliye, on yıllık uzama süresinin dolması nedeniyle tahliye ve kira tespit davası gibi temel başlıklar güncel mevzuat ve yerleşik Yargıtay uygulaması ışığında ele alınacaktır.
I. Kira Hukukunda Başlıca Dava ve Takip Türleri
Kira hukukundan kaynaklanan uyuşmazlıklar tek bir dava türünden ibaret değildir. Uygulamada en sık görülen başlıklar şunlardır: kira alacağının tahsiline yönelik icra takipleri, temerrüt nedeniyle tahliye, tahliye taahhüdüne dayalı tahliye, iki haklı ihtar sebebiyle tahliye, ihtiyaç nedeniyle tahliye, yeni malikin ihtiyacı sebebiyle tahliye, on yıllık uzama süresinin dolması sebebiyle tahliye, kira bedelinin tespiti, kira uyarlama davaları, depozitonun iadesi, kötü kullanım sebebiyle tazminat ve yan gider/alacak davaları. Bu başlıkların her biri farklı maddi şartlara ve farklı usullere bağlıdır; dolayısıyla “kiracıyı çıkarma” iradesi tek başına yeterli olmayıp, doğru hukuki yolun seçilmesi gerekir.
Bu çalışmada özellikle tahliye talepleri ve kira tespit davası ayrıntılı biçimde incelenecektir. Tahliye sebepleri bakımından en sık karıştırılan husus şudur: her kira borcu temerrüdü aynı usule tabi değildir; her yazılı belge tahliye taahhüdü sayılmaz; her ihtiyaç iddiası tahliyeye yol açmaz; her gecikmiş ödeme iki haklı ihtar oluşturmaz; her uzun süreli sözleşme de kendiliğinden on yıllık uzama sebebiyle sona ermez. Hukuki sonuç, dayanılan sebebin teknik şartlarına göre belirlenir. Bu nedenle hem maddi hukuk hem de usul hukuku bakımından doğru tercih, sürecin başarısını belirleyen ilk ve en önemli adımdır.
II. Tahliye Talepli İcra Takibi: Genel Çerçeve
Tahliye talepli icra takibi, kiracının kira borcunu ödememesi veya geçerli bir tahliye taahhüdüne rağmen taşınmazı boşaltmaması hâlinde başvurulan, hızlı ve etkili yollardan biridir. Bu takip yolu kendi içinde iki ayrı başlıkta değerlendirilmelidir. Birinci ihtimal, kiracının kira borcuna ilişkin temerrüde düşmesi nedeniyle başlatılan tahliye talepli icra takibidir. İkinci ihtimal ise tahliye taahhütnamesine dayanılarak başlatılan icra yoludur. Her iki yolun hem maddi hukuk hem de takip hukuku bakımından şartları farklıdır; aynı başlık altında değerlendirilmeleri ciddi usul hatalarına yol açabilir.
Önemle belirtilmelidir ki, kiralanan taşınmazların 2004 sayılı İcra ve İflas Kanunu’na göre ilamsız icra yoluyla tahliyesine ilişkin işlemler, 6325 sayılı Kanun’un 18/B maddesinde öngörülen dava şartı arabuluculuk kapsamı dışında tutulmuştur. Dolayısıyla kira borcunun ödenmemesine veya geçerli bir tahliye taahhüdüne dayalı olarak doğrudan ilamsız icra takibi başlatılabilir; takibe itiraz edilmesi hâlinde icra mahkemesinde açılacak itirazın kaldırılması ve tahliye talepleri de bu istisna kapsamında kalmaktadır.
A. Kiracının Kira Borcuna İlişkin Temerrüdü Nedeniyle Tahliye
Kiracının kira bedelini veya yan gideri muaccel olduğu hâlde ödememesi, tahliye bakımından en klasik sebeplerden biridir. Türk Borçlar Kanunu m. 315’e göre kiracı, teslimden sonra muaccel hâle gelen kira bedelini veya yan gideri ödemezse, kiraya veren yazılı olarak süre verip bu sürede de ödeme yapılmazsa sözleşmeyi feshedeceğini bildirebilir. Konut ve çatılı işyeri kiralarında bu süre en az otuz gün; diğer kiralarda ise en az on gündür. Süre, yazılı bildirimin kiracıya tebliğ edildiği günü izleyen günden itibaren işlemeye başlar.
Uygulamada bu ihtar, doğrudan noter aracılığıyla çekilebildiği gibi, tahliye talepli icra takibi içinde gönderilen ödeme emri ile de sağlanabilmektedir. Nitekim yerleşik uygulamada, ödeme emrindeki tahliye ihtarı TBK m. 315 anlamında yazılı bildirim yerine geçmektedir. Bu nedenle kiraya veren, hem kira alacağının tahsilini hem de tahliye sonucunu hedefliyorsa ilamsız tahliye takip yolunu tercih edebilmektedir. Ancak burada en kritik nokta, ödeme emrinin kiracıya usulüne uygun biçimde tebliğ edilmesi ve kiracıya verilen otuz günlük sürenin dolmasının beklenmesidir; bu süre dolmadan tahliye kararı istenemez.
Temerrüt nedeniyle tahliye talebinin başarıya ulaşabilmesi için şu maddi unsurların birlikte gerçekleşmesi gerekir: geçerli bir kira sözleşmesinin bulunması, kira alacağının muaccel hâle gelmiş olması, kiracıya usulüne uygun ödeme emri veya ihtar gönderilmiş olması, konut ve çatılı işyeri kiralarında en az otuz günlük sürenin tanınması ve kiracının bu süre içinde borcu tamamen ödememiş olması. Burada “tam ödeme” kavramı özellikle önem taşır. Uygulamada kiracıların bir kısmı ana kira bedelini ödeyip kalan kalemleri tartışmalı hâle getirmektedir. Somut dosyada hangi kalemin gerçekten kira borcu veya yan gider niteliğinde olduğu ayrıca incelenir.
Kiracı, ödeme emrinin tebliğinden sonra otuz gün içinde borcun tamamını öderse temerrüt nedeniyle tahliye yolu kural olarak kapanır. Ödeme mutlaka icra dosyasına yapılmak zorunda değildir; Yargıtay uygulamasında kiraya verene doğrudan yapılan ödemenin de ispat edilmesi mümkündür. Bu yönüyle temerrüt nedeniyle tahliyede asıl mesele, otuz günlük süre içinde borcun tamamen ifa edilip edilmediğidir. Süre içinde ifa gerçekleşirse tahliye değil, sadece varsa masraf ve takip giderleri konuşulur; süre içinde ifa gerçekleşmezse kiraya veren icra mahkemesinden tahliye isteyebilir.
Uygulamada sık yapılan hatalardan biri, kiracının kısmi ödemesini tahliyeyi bertaraf eden tam ödeme gibi değerlendirmektir. Oysa tahliye talepli icra takibinde, temerrüdün ortadan kalkması için sürenin içinde borcun tamamının ödenmesi gerekir. Bir diğer hata da, ödeme emrinde otuz günlük yasal sürenin tanınmaması veya takipte muaccel olmayan kira aylarının da karıştırılmasıdır. Bu tür usulsüzlükler tahliye isteminin reddine yol açabilir. Bu sebeple temerrüt yoluyla tahliyede, ödeme emrinin içeriği en az dava sebebi kadar önemlidir.
Temerrüt nedeniyle tahliye taleplerinde dikkat edilmesi gereken bir diğer husus, kira borcunun niteliği ile yan giderlerin kapsamının her somut olayda ayrı değerlendirilmesi gerektiğidir. Aidat, ortak gider, işletme gideri veya sözleşmeden kaynaklanan başka kalemlerin tahliye bakımından hangi ölçüde dikkate alınacağı; kira sözleşmesinin içeriğine ve talep edilen alacağın hukuki niteliğine göre değişebilmektedir. Bu nedenle takip talebinde hangi kalemlerin açıkça kira alacağı, hangilerinin yan gider olduğu tereddüde yer bırakmayacak şekilde gösterilmelidir.
Bunun yanında, kiraya verenin temerrüt nedeniyle tahliye yoluna başvurmadan önce elindeki kira sözleşmesini, ödeme kayıtlarını, banka dekontlarını ve önceki ihtarları dosya bütünlüğü içinde değerlendirmesi önem taşımaktadır. Zira uygulamada kiracının geçmiş dönem ödemelerine ilişkin savunmaları, açıklama kısmı içeren banka transferleri veya kiraya veren tarafından kabul edilmiş kısmi ödemeler, uyuşmazlığın çözümünde belirleyici olabilmektedir.
Özellikle kira bedelinin elden ödendiğinin ileri sürüldüğü dosyalarda ispat sorunu büyümektedir. Bu tür durumlarda ödeme iddiasının hangi delillerle ispat edileceği, tanık deliline ne ölçüde başvurulabileceği ve yazılı delil başlangıcının bulunup bulunmadığı ayrıca değerlendirilmektedir. Bu nedenle temerrüt nedeniyle tahliye dosyalarında yalnızca borcun varlığı değil, borcun ödenmediğinin de usulüne uygun biçimde ortaya konulması büyük önem taşımaktadır.
Yerleşik Yargıtay Uygulaması (Özet)
İcra takibi içinde tebliğ edilen ve TBK m. 315’e uygun süreyi içeren ödeme emri, ayrıca noter ihtarı çekilmesine gerek bırakmaksızın yazılı bildirim ve temerrüt ihtarı yerine geçer. Otuz günlük yasal süre içinde borcun tamamı ödenmediği takdirde, kiraya veren icra mahkemesinden tahliye isteyebilir; kısmî ödeme temerrüdü ortadan kaldırmaz (yerleşik içtihat; Yargıtay 3. Hukuk Dairesi’nin kira hukukuna ilişkin istikrarlı kararları).
Sonuç olarak, temerrüt nedeniyle tahliye teknik olarak hızlı sonuç alma ihtimali taşısa da; takip talebinin hazırlanmasından tebligat sürecine, borç kalemlerinin belirlenmesinden ödeme savunmalarının değerlendirilmesine kadar her aşama dikkat gerektirir. Uygulamada küçük görünen usul hataları dahi tahliye isteminin reddine neden olabildiğinden, bu yolun başından itibaren dikkatli ve stratejik biçimde yürütülmesi gerekir.
B. Tahliye Taahhütnamesine Dayalı Tahliye
Tahliye taahhüdüne dayalı tahliye, kira hukukunda kiraya veren lehine en güçlü yollardan biri olmakla birlikte, geçerlilik şartları son derece sıkıdır. Türk Borçlar Kanunu m. 352/1 uyarınca kiracı, kiralananın teslim edilmesinden sonra, kiraya verene karşı kiralananı belli bir tarihte boşaltmayı yazılı olarak üstlenmiş ve buna rağmen boşaltmamışsa, kiraya veren bu tarihten başlayarak bir ay içinde icraya başvurmak veya dava açmak suretiyle sözleşmeyi sona erdirebilir. Bu hükümden çıkan en kritik sonuç şudur: teslimden önce veya aynı anda alınan tahliye taahhüdü, kural olarak bu madde anlamında geçerli bir tahliye taahhüdü sayılmaz.
Geçerli bir tahliye taahhüdü için; belgenin yazılı olması, kiracı veya yetkili temsilcisi tarafından usulüne uygun biçimde imzalanmış bulunması, tahliye tarihinin belirli veya belirlenebilir olması ve taahhüdün teslimden sonra düzenlenmiş olması gerekir. Tahliye tarihi açık değilse taahhütname kiracının tahliyesi için kullanılamaz.
İçtihadı Birleştirme Kararları (Özet)
Yargıtay’ın 04.10.1944 tarihli ve 15/20-28 sayılı İçtihadı Birleştirme Kararı uyarınca, kira ilişkisi kurulurken (kira sözleşmesi ile aynı tarihte veya öncesinde) alınan tahliye taahhüdü, kiracının serbest iradesini yansıtmadığından geçersizdir. Buna karşılık 03.10.1980 tarihli ve 2/3 sayılı ile 04.10.1985 tarihli ve 2/7 sayılı İçtihadı Birleştirme Kararları çerçevesinde, kira ilişkisi devam ederken (kiralananda otururken) verilen tahliye taahhütleri geçerlidir. Bu çerçevede, kira sözleşmesinden makul bir süre sonra ve özgür irade ile verilen taahhütler hüküm ifade eder.
Tahliye taahhütnamesinde tahliye tarihinin boş bırakılması, başlı başına geçersizlik sonucu doğurmamakla birlikte, ispat sorunlarını beraberinde getirir. Yerleşik Yargıtay uygulamasında, kiracının tahliye tarihi kısmını bilinçli olarak boş bırakarak bu tarihi belirleme yetkisini fiilen kiraya verene tanıdığı kabul edilebilmektedir. Bununla birlikte boş tahliye taahhütnamesinin sonradan kiracının iradesi hilafına doldurulduğu iddiasını ispat yükünün son dönem Yargıtay kararlarında kiracıya yüklendiği görülmektedir. Buna karşılık taahhütnamenin baskı altında alındığı, kira sözleşmesi ile aynı tarihte düzenlendiği veya teslimden önce alındığı yönündeki itirazlar, somut olayın özelliklerine göre belgeyi geçersiz kılabilir.
Yargıtay Hukuk Genel Kurulu (Özet)
Yargıtay Hukuk Genel Kurulu’nun 2017/975 E., 2021/1108 K. sayılı kararında, tahliye taahhüdünün tanzim tarihinin boş bırakılmış olmasının taahhüdü tek başına geçersiz kılmadığı; taahhüdün kira sözleşmesinden önce veya kira sözleşmesi ile aynı tarihte alındığı yönündeki iddianın ispatının kiracıya ait olduğu vurgulanmıştır. Bu yaklaşım, kiraya veren açısından boş bırakılan tarih meselesine ilişkin ispat yükünü hafifletmektedir.
Kiraya veren, tahliye taahhüdünde belirtilen tarihten itibaren bir ay içinde ya dava açmalı ya da icra takibi başlatmalıdır. Bu süre hak düşürücü nitelikte kabul edildiğinden, kaçırılması hâlinde aynı taahhüde dayanılarak tahliye istenemez. İcra yoluna başvurulması hâlinde kiracıya tahliye emri gönderilir ve süreç icra hukuku kuralları içinde ilerler. Uygulamada kiracının imzaya, tarihe, taahhüdün teslimden sonra alınıp alınmadığına veya belge içeriğine ilişkin itirazları dosyanın seyrini belirler.
Tahliye taahhüdüne dayalı tahliyede en çok karşılaşılan savunmalar; belgenin boş imzalandığı, baskı altında alındığı, gerçek iradeyi yansıtmadığı, teslimden önce düzenlendiği veya tahliye tarihinin sonradan doldurulduğu iddialarıdır. Bu iddialar her dosyada otomatik sonuç doğurmaz; ancak kiraya verenin belgeyi açık, net ve ispat yükünü kolaylaştıracak biçimde düzenlemiş olması gerekir. Tahliye taahhüdü yolu, hızlı sonuç verme potansiyeline sahip olsa da usulen zayıf hazırlanmış belgelerde kiraya verene avantaj değil risk doğurabilir.
Ayrıca tahliye taahhüdünün hangi taşınmaza ilişkin olduğunun da tereddütsüz şekilde belirlenmesi gerekir. Kiralananın açık adresi, bağımsız bölüm bilgileri ve taraf bilgileri eksiksiz gösterilmediğinde belgeye ilişkin tartışmalar yaşanabilmektedir. Mahkeme veya icra merciince yapılacak değerlendirmede, belgenin hangi kira ilişkisine dayandığının net olması aranmaktadır.
Uygulamada kiracı tarafından ileri sürülen savunmalardan biri de, taahhütnamenin baskı altında veya zorla imzalatıldığı iddiasıdır. Bu savunma tek başına otomatik sonuç doğurmasa da, somut olayın özelliklerine göre mahkeme tarafından ayrıca değerlendirilir. Özellikle kira sözleşmesinin imzalanması ile tahliye taahhüdünün düzenlenmesi arasındaki sürenin oldukça kısa olduğu, kiracının kiralanana yeni taşındığı ve dolayısıyla teslim almadığı dosyalarda Yargıtay, taahhüdün gerçek iradeyi yansıtmadığı sonucuna varabilmektedir. Bu sebeple kiraya verenin elindeki tahliye taahhütnamesinin hem şeklen hem de içerik bakımından güçlü olması, tahliye sürecinin sağlıklı yürütülmesi açısından belirleyici öneme sahiptir.
Son olarak, tahliye taahhütnamesine dayalı icra veya dava yolunda bir aylık sürenin hak düşürücü nitelikte olduğu unutulmamalıdır. Bu sürenin kaçırılması, geçerli bir taahhütname bulunsa dahi kiraya verenin bu sebebe dayanarak tahliye istemesini engelleyebilmektedir. Buna karşılık, taahhüt tarihinden önce kiraya veren tarafından süresinde gönderilmiş bir yazılı bildirim varsa, dava açma süresi sonraki kira yılı için uzayabilir; bu husus TBK m. 353’te ayrıca düzenlenmiştir.
III. Sulh Hukuk Mahkemesinde Açılacak İki Haklı İhtar Sebebiyle Tahliye Davası
İki haklı ihtar sebebiyle tahliye, TBK m. 352/2’de düzenlenmiştir. Buna göre kiracı, bir yıldan kısa süreli sözleşmelerde kira süresi içinde; bir yıl ve daha uzun süreli sözleşmelerde ise bir kira yılı veya bir kira yılını aşan süre içinde kira bedelini ödemediği için kendisine yazılı olarak iki haklı ihtarda bulunulmasına sebep olursa, kiraya veren kira süresinin veya ihtarların yapıldığı kira yılının bitiminden başlayarak bir ay içinde dava yoluyla sözleşmeyi sona erdirebilir. Bu yolun en önemli özelliği, kiracının sonradan ödeme yapmasının iki haklı ihtarın doğmuş olmasını ortadan kaldırmamasıdır. Yani temerrüt nedeniyle tahliyeden farklı olarak, kiracı borcu sonradan ödese dahi iki haklı ihtar sebebiyle tahliye davası açılabilir.
Ancak her ihtar “haklı ihtar” sayılmaz. Haklı ihtar olabilmesi için; kira bedelinin muaccel olduğu tarihte ödenmemiş olması, ihtarın yazılı şekilde yapılması ve kiracıya usulüne uygun olarak tebliğ edilmesi gerekir. Kiracı kira borcunu, ihtar tebliğ edilmeden önce ödemişse, sonradan gönderilen ihtar haklı ihtar oluşturmaz. Yine aynı kira ayına ait borcun parçalanıp iki ayrı ihtara konu edilmesi de iki haklı ihtar şartını oluşturmaz. Ayrıca uygulamada kira parasının yıllık peşin ödenmesinin kararlaştırıldığı sözleşmeler bakımından da iki haklı ihtar yolunun işletilmesi her zaman mümkün görülmemektedir.
Burada kiraya verenin dikkat etmesi gereken diğer önemli nokta, iki ihtarın aynı kira yılı içinde ve farklı dönemlere ait muaccel kira borçları nedeniyle gönderilmiş olmasıdır. Aynı ay kirasının veya ilk ihtar tarihinde zaten istenebilir olan kalemlerin bölünerek ikinci bir ihtara konu yapılması, dava açıldığında kiraya vereni haklı çıkarmaz. Uygulamada çok sayıda dava bu teknik ayrıntı yüzünden reddedilmektedir. Bu sebeple iki haklı ihtar davası, şeklen kolay görünmesine rağmen pratikte ciddi dikkat gerektiren bir tahliye sebebidir.
Öte yandan icra takibi içinde gönderilen tahliye ihtarlı ödeme emri de, şartları varsa iki haklı ihtar bakımından yazılı ve haklı ihtar niteliği taşıyabilmektedir. Yargıtay ve Bölge Adliye Mahkemesi kararlarında, usulüne uygun icra takibiyle tebliğ edilen ödeme emrinin haklı ihtar sayılabileceği kabul edilmiştir. Bu nedenle kiraya veren, aynı kira yılı içinde iki ayrı geçerli ödeme emri göndermişse ve her ikisi de haklı ihtar niteliği taşıyorsa, sonradan Sulh Hukuk Mahkemesinde iki haklı ihtar sebebiyle tahliye davası açabilir. Ancak dava açma süresi yine bir aydır ve hak düşürücüdür.
İki haklı ihtar sebebiyle tahliye davalarında en önemli teknik meselelerden biri, ihtarların gerçekten “haklı” olup olmadığının doğru tespit edilmesidir. Kiraya veren tarafından gönderilen her ihtar, sırf yazılı olduğu için haklı ihtar niteliği kazanmaz. İhtarın dayandığı kira borcunun muaccel olması, ödeme yapılmamış bulunması ve ihtarın bu borca dayanarak gönderilmiş olması gerekir.
Ayrıca ihtarların aynı kira yılı içinde gerçekleşmiş olması zorunludur. Farklı kira yıllarına ilişkin ihtarlar bir araya getirilerek iki haklı ihtar koşulu oluşturulamaz. Uygulamada kira yılının başlangıcının yanlış belirlenmesi veya sözleşmenin yenilenme döneminin hatalı hesaplanması sebebiyle çok sayıda dava reddedilmektedir. Bu nedenle ihtarların tarihleri kadar, hangi kira yılına denk geldikleri de dikkatle değerlendirilmelidir.
Bir başka önemli husus da ihtarların farklı muaccel borçlara dayanması gerekliliğidir. Aynı kira dönemine ait borcun parçalara ayrılarak veya aynı ay bedeline ilişkin tekrar tekrar ihtar gönderilerek iki haklı ihtar koşulu sağlanamaz. Yargıtay uygulaması bu konuda son derece hassastır. Dolayısıyla iki haklı ihtar sebebiyle tahliye davası açmadan önce, her bir ihtarın dayandığı borcun ayrı ayrı incelenmesi gerekmektedir.
Yerleşik Yargıtay Uygulaması (Özet)
Yargıtay’ın istikrar kazanmış uygulamasına göre; (i) iki ihtarın aynı kira yılı içinde tebliğ edilmiş olması, (ii) her bir ihtarın farklı muaccel kira dönemlerine ilişkin bulunması ve (iii) ihtarların yazılı şekilde, usulüne uygun biçimde kiracıya ulaştırılmış olması zorunludur. Bu şartların eksikliği hâlinde dava reddedilir. Tahliye ihtarlı icra takibi içinde tebliğ edilen ödeme emri de, koşulları varsa haklı ihtar olarak değerlendirilebilir (yerleşik içtihat).
Sonuç olarak iki haklı ihtar sebebiyle tahliye davası teoride kolay görünmekle birlikte, uygulamada süre, muacceliyet, kira yılı ve tebligat şartları bakımından titizlikle yürütülmesi gereken bir tahliye yoludur. Ayrıca bu dava, 1 Eylül 2023 tarihinden itibaren dava şartı olarak arabuluculuk kapsamına girmiş olup; dava açılmadan önce arabulucuya başvurulmuş olması gerekir.
IV. İhtiyaç Sebebiyle Tahliye Davaları ve Yargıtay Kararları Işığında Değerlendirme
A. Kiraya Verenin ve Yakınlarının İhtiyacı (TBK m. 350)
İhtiyaç sebebiyle tahliye, kiraya verenden kaynaklanan tahliye sebeplerinin en önemlisidir. TBK m. 350’ye göre kiraya veren; kiralananı kendisi, eşi, altsoyu, üstsoyu veya kanun gereği bakmakla yükümlü olduğu diğer kişiler için konut ya da işyeri ihtiyacı sebebiyle kullanma zorunluluğu varsa, belirli süreli sözleşmelerde sürenin sonunda, belirsiz süreli sözleşmelerde ise fesih dönemi ve bildirim sürelerine uyularak belirlenecek tarihten başlayarak bir ay içinde açacağı dava ile sözleşmeyi sona erdirebilir. Kanun metninden açıkça anlaşılacağı üzere, ihtiyaç iddiası yalnızca malik için değil, kanunda sayılan yakın çevre için de ileri sürülebilir.
Ancak ihtiyaç iddiası her zaman tahliye sonucunu doğurmaz. Yargıtay’ın yerleşik yaklaşımına göre ihtiyaç sebebiyle tahliyeye karar verilebilmesi için ihtiyacın gerçek, samimi ve zorunlu olması gerekir. Geçici nitelikteki ihtiyaçlar, henüz doğmamış ya da uzun süre sonra gerçekleşmesi olası ihtiyaçlar tahliye sebebi sayılmaz. Ayrıca dava açıldığı tarihte mevcut olan ihtiyaç, yargılama boyunca da devam etmelidir.
Yargıtay Hukuk Genel Kurulu (Özet)
Yargıtay Hukuk Genel Kurulu’nun 12.09.2012 tarihli, 2012/6-388 E., 2012/560 K. sayılı kararında; ihtiyaç sebebiyle tahliye davalarında ihtiyacın gerçek, samimi ve zorunlu olması zorunluluğu açıkça vurgulanmıştır. Aynı kararda mahkemenin, eksik inceleme yapmaksızın somut ihtiyacın gerçekten bulunup bulunmadığını; iş hacmi, taşınmazın niteliği ve mevcut kullanım alanının yeterliliği üzerinden araştırması gerektiği belirtilmiştir.
Yargıtay ayrıca ihtiyaç iddiasının yargılama sırasında da devam etmesi gerektiğini istikrarlı biçimde kabul etmektedir. Davacının ihtiyaç iddiasına dayanmasına rağmen yargılama sırasında taşınmazın satılması, ihtiyaca dayalı kişinin koşullarının değişmesi veya başka bir taşınmaz edinilmesi gibi olgular, ihtiyacın gerçek ve samimi olduğundan artık söz edilemeyeceği sonucunu doğurabilir. Bu sebeple ihtiyaç sebebiyle tahliye davasında yalnızca başlangıçtaki niyet değil, davanın sonuna kadar korunan gerçek kullanım iradesi de önem taşır.
İhtiyaç sebebiyle tahliyede Yargıtay uygulamasının bir başka önemli noktası davacı sıfatıdır. Uygulamada ihtiyaç sahibi olan kişinin mutlaka kira sözleşmesinin imzacısı olması aranmaz; malik, intifa hakkı sahibi veya yeni malik sıfatı üzerinden ihtiyaca dayalı dava açılabildiğine ilişkin yerleşik kararlar bulunmaktadır. Tüzel kişiler bakımından da işyeri ihtiyacı iddiası tamamen dışlanmış değildir; somut olayın özellikleri çerçevesinde şirketin işyeri ihtiyacı da değerlendirilebilmektedir. Bununla birlikte tüzel kişi ihtiyacında her dosya çok daha sıkı bir ispat denetimine tabidir.
Belirsiz süreli sözleşmelerde ihtiyaç sebebiyle tahliyede süre hesabı ayrıca önemlidir. Belirsiz süreli kira sözleşmelerinde genel hükümlere göre fesih dönemi ve bildirim süreleri dikkate alınır; dava, buna göre belirlenecek tarihten itibaren bir ay içinde açılır. Belirli süreli sözleşmelerde ise genel kural sürenin sonunda bir ay içinde dava açılmasıdır. Kiraya veren bu süreleri kaçırdığı takdirde, TBK m. 353’te düzenlenen “dava açma süresinin uzaması” imkânı ancak süresi içinde yazılı bildirim yapılmışsa devreye girer.
İhtiyaç sebebiyle tahliyenin sonunda dikkat edilmesi gereken bir başka konu da yeniden kiralama yasağıdır. TBK m. 355 uyarınca kiraya veren, ihtiyaç sebebiyle kiralananın boşaltılmasını sağladığında, haklı sebep olmaksızın kiralananı üç yıl geçmedikçe eski kiracısından başkasına kiralayamaz. Bu yasağa aykırılık, kiraya verene tazminat sorumluluğu doğurabilir. Tazminat, son kira yılında ödenen bir yıllık kira bedelinden az olamaz. Dolayısıyla ihtiyaç iddiası sadece davayı kazanmak için ileri sürülebilecek soyut bir tahliye sebebi değildir; sonrasında da hukuki sonuç doğurur.
İhtiyaç sebebiyle tahliye davalarında uygulamada en sık tartışılan konulardan biri, ihtiyaç iddiasının hangi delillerle ispat edileceğidir. Mahkemeler, yalnızca soyut beyanlarla yetinmemekte; ihtiyacın somut vakıalarla desteklenmesini aramaktadır. Bu kapsamda davacının mevcut yaşam veya çalışma koşulları, elinde başka uygun taşınmaz bulunup bulunmadığı, ihtiyaç ileri sürülen kişinin gerçekten o taşınmazı kullanma iradesi ve kullanım zorunluluğu ayrıntılı biçimde incelenmektedir.
Örneğin konut ihtiyacına dayalı davalarda davacının mevcut oturduğu yerin yetersizliği, aile bireylerinin sayısı, sağlık koşulları, taşınmazın ulaşım ve yaşam bakımından uygunluğu gibi unsurlar önem taşıyabilmektedir. İşyeri ihtiyacına dayalı davalarda ise yürütülen işin niteliği, mevcut işyerinin yetersizliği, faaliyet alanının genişletilmesi zorunluluğu ve kiralananın bu ihtiyaç bakımından gerçekten gerekli olup olmadığı dikkate alınmaktadır.
Yargıtay kararlarında, ihtiyacın sadece daha elverişli bir taşınmaza geçme isteğinden ibaret olmaması gerektiği, gerçek kullanım zorunluluğunun aranması gerektiği vurgulanmaktadır. Bu nedenle sırf daha iyi konumda, daha yeni veya daha ekonomik bir taşınmaza sahip olma düşüncesi her zaman tahliye için yeterli kabul edilmemektedir. İhtiyacın gerçekten mevcut ve ciddi olduğunun ortaya konulması gerekir.
Bunun yanında, ihtiyaç ileri sürülen kişinin kiralananı tahliye sonrasında fiilen kullanıp kullanmayacağı da önem taşımaktadır. İhtiyaç sebebiyle tahliye kararı alındıktan sonra taşınmazın kısa süre içinde üçüncü bir kişiye kiraya verilmesi veya ihtiyaç iddiası ile bağdaşmayan biçimde kullanılması, TBK m. 355 kapsamında kiraya veren bakımından tazminat sorumluluğu doğurabilmektedir. Bu durum, ihtiyaç sebebine dayanılarak tahliye istenirken sonrasındaki kullanım planının da hukuka uygun olmasının zorunlu olduğunu göstermektedir.
B. Yeni Malikin İhtiyacı Sebebiyle Tahliye (TBK m. 351)
Kiralananı sonradan edinen yeni malik, kiralananı kendisi, eşi, altsoyu, üstsoyu veya kanun gereği bakmakla yükümlü olduğu diğer kişiler için konut veya işyeri olarak kullanma gereksinimi sebebiyle tahliye isteyebilir. Bu hâlde TBK m. 351 uyarınca yeni malik, edinme tarihinden başlayarak bir ay içinde durumu kiracıya yazılı olarak bildirmek koşuluyla, edinme tarihinden itibaren altı ay sonra açacağı dava ile sözleşmeyi sona erdirebilir. Yeni malikin, dilerse gereksinim sebebiyle sözleşme sonunda dava açma hakkı saklıdır.
Yeni malik ihtiyacında da ihtiyacın gerçek, samimi ve zorunlu olması zorunludur. Ayrıca bildirim süresinin kaçırılması, davanın belirtilen sürelerden önce veya çok geç açılması gibi usule ilişkin hatalar dava sonucunu doğrudan etkileyebilir. Yeniden kiralama yasağı (TBK m. 355) bu hâlde de uygulanır.
Sonuç olarak ihtiyaç sebebiyle tahliye davaları, uygulamada en çok başvurulan ancak aynı zamanda en çok ispat sorunu yaşanan dava türlerinden biridir. Yargıtay kararları ışığında değerlendirildiğinde davanın başarılı olabilmesi için ihtiyacın gerçek, samimi, zorunlu ve yargılama süresince devam eden bir nitelik taşıdığının açık ve güçlü delillerle ortaya konulması gerekmektedir. Bu davalar 1 Eylül 2023 tarihinden itibaren dava şartı olarak arabuluculuk kapsamındadır.
V. On Yıllık Uzama Süresinin Dolması Nedeniyle Tahliye
Türk Borçlar Kanunu m. 347, konut ve çatılı işyeri kiralarında kiraya verene sürenin bitimine dayanarak sözleşmeyi sona erdirme hakkı tanımaz; ancak on yıllık uzama süresi sonunda önemli bir istisna getirir. Maddeye göre, belirli süreli sözleşmeler kiracı tarafından en az on beş gün önce bildirim yapılmadıkça aynı koşullarla bir yıl uzamış sayılır. Kiraya veren, sözleşme süresinin bitimine dayanarak tahliye isteyemez. Fakat on yıllık uzama süresi sonunda, bu süreyi izleyen her uzama yılının bitiminden en az üç ay önce bildirimde bulunmak koşuluyla, herhangi bir sebep göstermeksizin sözleşmeye son verebilir.
Burada dikkat edilmesi gereken husus, on yılın ilk kira süresinden değil, uzama yıllarından sonra devreye girmesidir. Örneğin bir yıllık belirli süreli kira sözleşmesi yapıldıysa ve sözleşme her yıl uzamışsa, kiraya verenin sebepsiz fesih imkânı doğrudan birinci yılın sonunda değil; uzama süresi toplamda on yılı doldurduktan sonra doğar. Uygulamada bu sürenin yanlış hesaplanması çok yaygındır. Ayrıca fesih bildiriminin yazılı yapılması ve ilgili uzama yılının bitiminden en az üç ay önce kiracıya ulaşmış olması gerekir; aksi hâlde fesih bir sonraki uzama yılına sarkar.
On yıllık uzama nedeniyle tahliye davası, ihtiyaç sebebinden farklı olarak gerçek-samimi-zorunlu ihtiyaç ispatına bağlı değildir. Bu yolun avantajı, kiraya verenin herhangi bir gerekçe ispat etmek zorunda olmamasıdır. Dezavantajı ise süre hesabının oldukça teknik olması ve yalnızca konut ve çatılı işyeri kiraları için anlam taşımasıdır. Kısacası bu kurum, uzun yıllar devam eden kira ilişkilerinde kiraya verene sınırsız olmamak kaydıyla sözleşmeden çıkış imkânı tanır.
On yıllık uzama süresine dayalı tahliye bakımından en kritik nokta, sürenin doğru hesaplanmasıdır. Uygulamada kiraya verenler çoğu zaman ilk sözleşme tarihinden itibaren on yıl geçtiğini düşünerek fesih bildirimi göndermekte; oysa kanunda esas alınan süre, belirli süreli sözleşmenin bitiminden sonra başlayan uzama yıllarıdır. Bu nedenle bir yıllık belirli süreli bir sözleşmede kiraya verenin sebepsiz fesih imkânı, sözleşmenin ilk yılından hemen sonra değil, uzama süresi on yılı doldurduktan sonra doğmaktadır.
Bildirimin içeriği de önemlidir. Kiraya verenin sözleşmeyi hangi uzama yılının sonunda sona erdirmek istediğini açıkça belirtmesi ve bildirimin kiracıya en az üç ay önceden ulaşmasını sağlaması gerekir. Bildirimin geç yapılması hâlinde fesih iradesi bir sonraki uzama yılına ilişkin sonuç doğurur.
Bu tahliye yolunun en önemli avantajı, ihtiyaç gibi ayrıca ispat gerektiren bir sebebe dayanılmamasıdır. Ancak bu avantaj, süre hesabı ve bildirim şartları bakımından yüksek dikkat gerektirir. Uygulamada çoğu hata, sürenin yanlış hesaplanması veya bildirimin geç tebliğ edilmesi sebebiyle ortaya çıkmaktadır. Bu nedenle on yıllık uzama süresine dayalı tahliye planlanıyorsa; sözleşmenin başlangıç tarihi, yenilenme dönemi, uzama yılları ve bildirim tarihi birlikte değerlendirilerek hareket edilmelidir.
Yerleşik Yargıtay Uygulaması (Özet)
Yargıtay’ın istikrar kazanmış uygulamasına göre TBK m. 347’deki on yıllık uzama süresi, belirli süreli sözleşmenin sona erdiği tarihten itibaren işlemeye başlayan uzama yıllarının toplamı dikkate alınarak hesaplanır; bu hesaba ilk kira yılı dâhil edilmez. Üç aylık fesih bildirim süresine uyulmadan yapılan fesih bildirimleri, bir sonraki uzama yılı için sonuç doğurur (yerleşik içtihat).
VI. Kira Tespit Davası: Kapsamı, Şartları ve Uygulama Esasları
Kira tespit davası, özellikle yüksek enflasyon dönemlerinde kira hukukunun en önemli dava türlerinden biri hâline gelmiştir. Bu dava, mevcut kira sözleşmesi devam ederken yeni kira döneminde uygulanacak kira bedelinin mahkeme tarafından belirlenmesini amaçlar. Hukuki dayanağı esas olarak TBK m. 344 ve m. 345’tir. TBK m. 344’e göre, tarafların yenilenen kira dönemlerinde uygulanacak kira bedeline ilişkin anlaşmaları, bir önceki kira yılındaki tüketici fiyat endeksi (TÜFE) on iki aylık ortalamalara göre değişim oranını aşmamak koşuluyla geçerlidir. Taraflar arasında artış anlaşması yoksa da hâkim, yine bu üst sınırı aşmamak üzere kiralananın durumu gözetilerek hakkaniyete göre kira bedelini belirler.
Hatırlatmak gerekir ki, 7409 sayılı Kanun ile getirilen ve konut kiraları bakımından geçici olarak uygulanan azami yüzde yirmi beş artış sınırı 11 Haziran 2022 ile 1 Temmuz 2024 tarihleri arasında yürürlükte kalmış; 1 Temmuz 2024 tarihi itibarıyla bu geçici düzenleme sona ermiştir. Bu tarihten sonra hem konut hem de çatılı işyeri kiralarında kira artış oranının yasal üst sınırı, TÜFE on iki aylık ortalamalara göre değişim oranıdır. Sözleşmede bu oranın üzerinde bir artış öngören hükümler, TÜFE oranını aşan kısmı bakımından geçersiz sayılır.
Kanun, beş yıldan uzun süreli veya beş yıldan sonra yenilenen kira sözleşmeleri bakımından ayrı bir sistem kurmuştur. TBK m. 344/3 uyarınca, taraflar arasında artış şartı bulunup bulunmadığına bakılmaksızın, beş yıldan uzun süreli veya beş yıldan sonra yenilenen sözleşmelerde ve bundan sonraki her beş yılın sonunda yeni kira yılında uygulanacak kira bedeli; TÜFE on iki aylık ortalama, kiralananın durumu ve emsal kira bedelleri göz önünde tutularak hâkim tarafından hakkaniyete uygun biçimde belirlenir. Yani beşinci yıldan sonra artık yalnızca endeks değil; emsal ve hakkaniyet de doğrudan devreye girer.
Kira tespit davasının şartları pratikte şu başlıklarda toplanır. Birincisi, ortada devam eden bir kira ilişkisinin bulunması gerekir; sona ermiş bir sözleşme için kira tespit davası açılamaz. İkincisi, dava yeni kira döneminde uygulanacak bedelin belirlenmesine yönelik olmalıdır; geçmiş dönem alacağı tahsil davaları ile karıştırılmamalıdır. Üçüncüsü, ilk beş yıl içinde artış hükmü varsa kural olarak TÜFE üst sınırı geçilemez; artış hükmü yoksa hâkim yine TÜFE sınırı içinde kalır. Dördüncüsü, beş yıldan sonra ve her beş yıllık periyotta emsal kira, taşınmazın niteliği ve hakkaniyet dikkate alınır. Beşincisi, kararın yeni kira döneminin başından itibaren sonuç doğurabilmesi için TBK m. 345’teki süre kuralına uyulmalıdır.
TBK m. 345, kira bedelinin belirlenmesine ilişkin davanın her zaman açılabileceğini öngörür. Ancak mahkemenin belirleyeceği yeni kira bedelinin yeni kira döneminin başından itibaren kiracıyı bağlaması için dava ya yeni dönemin başlangıcından en geç otuz gün önce açılmalı ya da kiraya veren bu süre içinde kira bedelinin artırılacağını kiracıya yazılı olarak bildirmelidir. Bu şart yerine getirilirse, dava yeni dönemin sonuna kadar açılsa bile tespit edilen bedel yeni dönemin başından itibaren uygulanır. Sözleşmede artış hükmü varsa, yeni dönemin sonuna kadar açılan davada belirlenen bedel yeni dönemin başından itibaren geçerli olabilir. Bu madde, kira tespit davalarında süre stratejisini belirleyen temel hükümdür.
Uygulamada kira tespit davasında mahkeme genellikle emsal incelemesi yapar, bilirkişi raporu alır ve taşınmazın bulunduğu yer, niteliği, kullanım şekli, metrekaresi, fiziki durumu ile bölgedeki rayiçleri birlikte değerlendirir. Özellikle beş yıldan sonra açılan davalarda, taşınmazın boş olarak yeniden kiraya verilmesi hâlinde getirebileceği değer de dikkate alınır; ancak bu değer doğrudan aynen hükme bağlanmaz, çoğu zaman hakkaniyet indirimi tartışması da gündeme gelir. Yargıtay uygulaması, kira tespit davalarında özellikle emsal karşılaştırmasının somut ve denetlenebilir olmasına önem vermektedir.
Yerleşik Yargıtay Uygulaması (Özet)
Yargıtay, kira tespit davalarında bilirkişi raporlarının soyut değerlendirmeler yerine; kiralananın bulunduğu cadde/sokak, bağımsız bölümün niteliği, alanı, kullanım şekli, yapım yılı, ısınma sistemi gibi somut özelliklerin emsallerle birlikte karşılaştırmalı şekilde incelenmesine dayanmasını aramaktadır. Bunun yanında, emsal taşınmazların hâli hazırda boş olarak yeni kiraya verilen rayiç bedellerinin esas alınmaması, mevcut kira ilişkilerine ait yenilenen kira bedellerinin emsal alınması yerleşik kabul görmüştür (yerleşik içtihat; Yargıtay 3. Hukuk Dairesi’nin kira tespitine ilişkin istikrarlı kararları).
Kira tespit davası ile kira uyarlama davası da birbirine karıştırılmamalıdır. Kira tespit davası TBK m. 344-345 çerçevesinde, kira bedelinin kanuni sisteme göre belirlenmesini amaçlar. Kira uyarlama davası ise TBK m. 138 kapsamında aşırı ifa güçlüğü gibi olağanüstü koşullarda sözleşme dengesinin bozulmasına dayanır. Her ekonomik değişim uyarlama sebebi olmadığı gibi, her kira artışı ihtiyacı da kira tespit davası ile çözülemez. Doğru dava türünün seçilmesi bu nedenle kritik önemdedir.
Kira tespit davasında uygulamada en çok dikkat edilmesi gereken hususlardan biri, dava açılma zamanının doğru belirlenmesidir. TBK m. 345 uyarınca dava her zaman açılabilse de mahkemece belirlenecek kira bedelinin hangi dönemden itibaren uygulanacağı, davanın açılma tarihi ve varsa önceden yapılmış yazılı bildirim ile doğrudan bağlantılıdır. Bu nedenle kira tespit davası yalnızca maddi hukuk bakımından değil, usul hukuku bakımından da stratejik biçimde planlanmalıdır.
Beş yıllık dönemin dolması üzerine açılacak kira tespit davalarında, güncel kira bedelinden bağımsız olarak emsal kira bedelleri, taşınmazın fiziki özellikleri, bulunduğu bölge, kullanım amacı ve ekonomik koşullar daha güçlü biçimde değerlendirmeye alınmaktadır. Bu nedenle dosyada sunulacak emsal kira örneklerinin gerçekten benzer taşınmazlara ilişkin olması ve mahkeme denetimine elverişli biçimde dosyaya kazandırılması büyük önem taşımaktadır.
Uygulamada bilirkişi raporları, kira tespit davalarında belirleyici rol oynamaktadır. Ancak bilirkişi raporunun denetlenebilir, karşılaştırmalı ve somut veriye dayanması gerekir. Yüzeysel, soyut veya emsal taşınmazlarla gerçek karşılaştırma yapmayan raporlar çoğu zaman itiraz ve bozma sebebi hâline gelebilmektedir.
Sonuç olarak kira tespit davası; yalnızca kira artış oranının yükseltilmesini amaçlayan basit bir dava olmayıp sözleşme süresi, artış hükmü, beş yıllık dönem, emsal araştırması, bilirkişi incelemesi ve dava açma zamanı gibi birçok unsurun birlikte değerlendirilmesini gerektiren teknik bir dava türüdür. Kira tespit davası da 1 Eylül 2023 tarihinden itibaren dava şartı olarak arabuluculuk kapsamına alınmış olup, dava açılmadan önce arabulucuya başvurulmuş olması zorunludur.
VII. Kira Uyuşmazlıklarında Dava Şartı Olarak Arabuluculuk
5 Nisan 2023 tarihli Resmî Gazete’de yayımlanan 7445 sayılı Kanun ile 6325 sayılı Hukuk Uyuşmazlıklarında Arabuluculuk Kanunu’na eklenen 18/B maddesi uyarınca, 1 Eylül 2023 tarihinden itibaren kira ilişkisinden kaynaklanan uyuşmazlıkların önemli bir bölümünde dava açılmadan önce arabulucuya başvurulması dava şartıdır. Bu kapsamda yer alan başlıca uyuşmazlıklar şunlardır: tahliye davaları (ilamsız icra yoluyla tahliye dışında), kira bedelinin tespiti, kira bedelinin uyarlanması, kira alacağı ve tazminata ilişkin davalar.
Buna karşılık kiralanan taşınmazların 2004 sayılı İcra ve İflas Kanunu’na göre ilamsız icra yoluyla tahliyesine ilişkin hükümler bu kapsamın dışındadır. Dolayısıyla; kira borcunun ödenmemesi sebebiyle başlatılan tahliye talepli ilamsız icra takibinde, takibe itiraz edilmesi hâlinde icra mahkemesinde açılacak itirazın kaldırılması ve tahliye davalarında ayrıca arabuluculuk dava şartı aranmaz. Aynı şekilde tahliye taahhüdüne dayalı olarak başlatılan ilamsız icra takibi de bu istisna kapsamındadır.
Ancak tahliye taahhüdüne dayalı icra takibine imzaya itiraz edilmesi hâlinde, davanın Sulh Hukuk Mahkemesinde açılması gerekeceğinden, bu aşamada dava şartı arabuluculuk hükümleri yeniden uygulama alanı bulur. Bu hassas usul ayrımı, kira uyuşmazlıklarında yol haritasının doğru çizilmesi bakımından son derece önemlidir.
Arabuluculuk başvurusu yapılmaksızın doğrudan açılan davalarda mahkeme, dava şartı yokluğu sebebiyle davayı usulden reddedecektir. Bu sebeple kira hukukundan kaynaklanan uyuşmazlıklarda hangi taleplerin doğrudan icra veya dava yoluyla, hangilerinin önce arabuluculuk aşamasından geçirildikten sonra yargıya taşınabileceği titizlikle değerlendirilmelidir.
Sonuç
Kira hukukunda tahliye ve kira tespit süreçleri, uygulamada sanıldığından çok daha teknik ve çok daha süreye bağlı alanlardır. Kiracının kira borcuna ilişkin temerrüdü ile tahliye taahhütnamesine dayalı icra takibi aynı şey değildir. İki haklı ihtar davasında kiracının sonradan ödeme yapması sonucu değiştirmeyebilir; buna karşılık temerrüt nedeniyle tahliyede otuz gün içinde yapılan tam ödeme tahliye yolunu kapatır. İhtiyaç sebebiyle tahliyede ise asıl mesele, ihtiyaç iddiasının gerçek, samimi, zorunlu ve yargılama boyunca devam eden bir nitelik taşıyıp taşımadığıdır. On yıllık uzama süresinin dolması ise ispat yükü bakımından daha rahat, fakat süre hesabı bakımından daha hassas bir tahliye sebebidir. Kira tespit davası da ilk beş yıl, beş yıldan sonrası, TÜFE sınırı, emsal kira ve TBK m. 345’teki etki şartı birlikte değerlendirilmeden doğru kurulamaz.
Bütün bu süreçlerde ayrıca 1 Eylül 2023 tarihinde yürürlüğe giren dava şartı arabuluculuk düzenlemesinin doğru biçimde uygulanması gerekir. İlamsız icra yoluyla tahliye istisnası dışındaki kira uyuşmazlıklarında, arabuluculuk aşamasının atlanması davanın usulden reddi sonucunu doğuracaktır.
Kira hukukundan kaynaklanan uyuşmazlıkların başarılı biçimde yürütülmesi; doğru hukuki yolun seçilmesini, hak düşürücü sürelere riayet edilmesini, ihtar ve tebligat işlemlerinin usulüne uygun yapılmasını ve uyuşmazlığın niteliğine göre dava ya da icra stratejisinin baştan kurgulanmasını gerektirir. Aksi hâlde haklı bir talep dahi, usul hataları sebebiyle reddedilebilir. Bu nedenle hem kiraya verenler hem de kiracılar bakımından kira hukukundan kaynaklanan her uyuşmazlık, somut olayın özellikleri çerçevesinde, güncel mevzuat ve yerleşik Yargıtay uygulaması ışığında ayrı ayrı değerlendirilmelidir.`,
  "veraset-ilami": String.raw`Veraset İlamı
Hukuki Niteliği, Süreç, Belgeler, Yabancılık Unsuru ve Yargıtay İçtihatları Işığında Kapsamlı Değerlendirme
Giriş
Veraset ilamı, ölen kişinin (murisin) yasal ve atanmış mirasçılarının kimliği ile miras paylarını gösteren resmi belgedir. 4721 sayılı Türk Medeni Kanunu uyarınca miras, murisin ölümü ile birlikte bir bütün hâlinde mirasçılara kendiliğinden geçer. Bununla birlikte, miras hakkının üçüncü kişilere ve resmi kurumlara karşı ileri sürülebilmesi için mirasçılık sıfatının belgelenmesi zorunludur. İşte bu belgeleme işlevini gören temel hukuki araç veraset ilamıdır.
Veraset ilamı olmaksızın murise ait taşınmazların tapuda devri, banka hesaplarına erişim, intifa ve rehinli hakların terkini, şirket pay defterinde mirasçıların kaydı, vergi dairesi nezdinde veraset ve intihal vergisi beyanı ile resmi kurumlardaki diğer işlemlerin yürütülmesi mümkün değildir. Bu yönüyle veraset ilamı, miras hukukunun uygulamadaki ilk ve en kritik aracı niteliğindedir.
İşbu çalışmada veraset ilamının hukuki niteliği, başvuru mercileri, izlenecek usul, gerekli belgeler, süreler ve masraflar ile özellikle yabancılık unsuru içeren dosyalarda dikkat edilmesi gereken hususlar; güncel mevzuat ve Yargıtay içtihatları ışığında incelenmiştir.
Veraset İlamının Hukuki Niteliği ve Yasal Dayanağı
Veraset ilamı, mirasçıların kimliğini ve miras paylarını tespit eden açıklayıcı (izhari) nitelikte bir belgedir. Belgenin verilmesi mirasçılık sıfatını kurmaz; mevcut bir hukuki durumu tespit ve ilan eder. Zira miras hakkı, Türk Medeni Kanunu’nun 599. maddesi uyarınca, murisin ölümü ile birlikte mirasçılara doğrudan ve kendiliğinden geçer.
Veraset ilamının yasal dayanağını esas itibarıyla Türk Medeni Kanunu’nun 598. maddesi oluşturmaktadır. Bu hükme göre mirasçılık belgesi, başvuru üzerine sulh hukuk mahkemesi veya noter tarafından düzenlenir. Belge, aksi sabit oluncaya kadar mirasçılık sıfatına karine teşkil eder.
Veraset ilamının açıklayıcı nitelikte olması, bu belgeye dayanılarak yapılan işlemlerin geri alınamayacağı anlamına gelmez. Düzenlenen belgede maddi veya hukuki hata bulunduğunun anlaşılması hâlinde, ilgililer tarafından belgenin iptali talep edilebilir.
İlgili Yargıtay Kararı: Mirasçılık Belgesinin Hukuki Niteliği
Yargıtay’ın yerleşik içtihadına göre mirasçılık belgesi, aksi her zaman ispat edilebilen, mirasçılık sıfatına ilişkin bir karine oluşturur. Belgenin gerçek mirasçılık ilişkisine aykırı düzenlendiğinin sonradan anlaşılması hâlinde, ilgililerce iptali istenebilir; iptal davası süreye tabi değildir.
Görevli ve Yetkili Merci: Sulh Hukuk Mahkemesi ve Noter
Veraset ilamı, kural olarak iki ayrı merci tarafından düzenlenebilir: sulh hukuk mahkemeleri ve noterler. Hangi merciin yetkili olduğu, somut olayın özelliklerine, özellikle dosyada yabancılık unsurunun bulunup bulunmamasına göre belirlenir.
Sulh Hukuk Mahkemesinin Görevi
Türk Medeni Kanunu’nun 598. maddesi ile Hukuk Muhakemeleri Kanunu hükümleri çerçevesinde, mirasçılık belgesi vermek görevi kural olarak sulh hukuk mahkemesine aittir. Yetkili sulh hukuk mahkemesi, başvuran mirasçının yerleşim yeri mahkemesidir; bu kural çekişmesiz yargı işlerine ilişkin genel yetki kuralından kaynaklanır.
Aşağıda sayılan hâllerde başvurunun mutlaka sulh hukuk mahkemesine yapılması gerekir:
	•	Mirasçılar arasında uyuşmazlık bulunan dosyalar.
	•	Yabancılık unsuru taşıyan dosyalar (mirasçılardan veya murisin yabancı uyruklu olması, yurt dışında düzenlenmiş belgelerin değerlendirilmesi gerekliliği vb.).
	•	Nüfus kayıtlarında çelişki, eksiklik veya tashih ihtiyacı bulunan dosyalar.
	•	Vasiyetname, miras sözleşmesi veya atanmış mirasçı bulunan ve değerlendirme gerektiren dosyalar.
	•	Evlatlık ilişkisi, soybağı tespiti veya tanıma gibi ön meselelerin çözülmesi gereken dosyalar.
Noterin Yetkisi ve Sınırları
Noterler, 1512 sayılı Noterlik Kanunu’nun 71/A maddesi ile Türk Medeni Kanunu’nun 598. maddesi çerçevesinde, belirli şartların sağlanması hâlinde mirasçılık belgesi düzenleyebilir. Ancak noterin yetkisi sınırlıdır. Yabancılık unsuru içeren, mirasçılar arasında uyuşmazlık bulunan, nüfus kayıtlarından mirasçıların açıkça belirlenemediği veya atanmış mirasçı ya da vasiyetname bulunan dosyalarda noter mirasçılık belgesi düzenleyemez; bu hâllerde başvurunun sulh hukuk mahkemesine yapılması zorunludur.
İlgili Yargıtay Kararı: Yabancılık Unsurlu Mirasçılık Belgesi Talepleri
Yargıtay, yabancılık unsuru taşıyan mirasçılık belgesi taleplerinde noterin yetkili olmadığını, görevin münhasıran sulh hukuk mahkemesine ait bulunduğunu istikrarla kabul etmektedir. Yabancı uyruklu mirasçı veya yabancı kaynaklı belgelerin değerlendirilmesini gerektiren her dosya bu kapsamda sayılır.
Mirasçılığın Belirlenmesi: Yasal ve Atanmış Mirasçılar
Türk Medeni Kanunu’nda mirasçılar, yasal mirasçılar ve atanmış (iradi) mirasçılar olmak üzere iki ana grupta düzenlenmiştir.
Yasal Mirasçılar ve Zümre Sistemi
Türk miras hukukunda yasal mirasçılık, zümre (parantel) sistemine dayanır. Bu sisteme göre mirasçılar üç zümrede toplanır: birinci zümre altsoy (çocuklar, torunlar), ikinci zümre ana-baba ve onların altsoyu (kardeşler, yeğenler), üçüncü zümre ise büyük ana-baba ve onların altsoyudur. Önceki zümrede mirasçı bulunması, sonraki zümrenin mirastan yararlanmasına engeldir.
Sağ kalan eşin miras payı, birlikte mirasçı olduğu zümreye göre değişir. Eş, birinci zümre ile birlikte mirasçı ise mirasın dörtte birine; ikinci zümre ile birlikte mirasçı ise yarısına; büyük ana-baba zümresi ile birlikte mirasçı ise dörtte üçüne hak kazanır. Bu zümrelerden hiçbiri bulunmadığında miras sağ kalan eşe tek başına kalır.
Evlilik dışı doğmuş ancak soybağı kurulmuş çocuklar, evlilik içi çocuklarla aynı mirasçılık statüsüne sahiptir. Evlatlık ilişkisi de Türk Medeni Kanunu uyarınca soybağına denk hukuki sonuçlar doğurur; evlatlık ve altsoyu, evlat edinene kan hısımı gibi mirasçı olur.
Atanmış Mirasçılar
Atanmış mirasçılar, murisin sağlığında düzenlediği vasiyetname veya miras sözleşmesi ile mirasçılığa kabul ettiği kişilerdir. Atanmış mirasçılık, yasal mirasçılığı tamamen ortadan kaldırmaz; saklı paylı mirasçıların hakları korunmak suretiyle uygulanır.
Vasiyetname veya miras sözleşmesi bulunan dosyalarda, sulh hukuk mahkemesinin önce vasiyetnamenin açılması ve okunması işlemini gerçekleştirmesi, ardından veraset ilamını bu belge çerçevesinde düzenlemesi gerekir.
Saklı Paylı Mirasçılar
Saklı pay, yasal mirasçıların kanunen güvence altına alınmış ve murisin tek taraflı tasarruflarıyla ihlal edemeyeceği asgari miras hissesidir. 10/05/2007 tarihli ve 5650 sayılı Kanun ile yapılan değişiklikten sonra saklı paylı mirasçılar; murisin altsoyu, ana ve babası ile sağ kalan eştir. Kardeşler bu değişiklikle saklı paylı mirasçı olmaktan çıkarılmıştır.
Saklı pay oranları şu şekildedir: altsoy için yasal miras payının yarısı; ana ve babadan her biri için yasal miras payının dörtte biri; sağ kalan eş için, altsoy veya ana-baba zümresi ile birlikte mirasçı olduğunda yasal miras payının tamamı, diğer hâllerde yasal miras payının dörtte üçü.
Saklı payı ihlal edilen mirasçı, tasarrufların tenkisini sağlamak için tenkis davası açma hakkına sahiptir. Tenkis davası, veraset ilamından bağımsız olarak görülen ve ayrı süre ve usule tabi bir dava türüdür.
İlgili Yargıtay Kararı: Tenkis Davası ile Veraset İlamının İlişkisi
Yargıtay’ın istikrar kazanmış görüşüne göre veraset ilamının düzenlenmiş olması, saklı payı ihlal edilen mirasçının tenkis davası açma hakkına engel teşkil etmez. Tenkis davası, mirasçılık sıfatının tespitinden bağımsız, ayrı bir hak ve dava türüdür.
Veraset İlamı Alma Süreci
Veraset ilamı süreci, mirasçılardan herhangi birinin yetkili mercie başvurusuyla başlar. Her bir mirasçı, diğer mirasçıların onayına veya katılımına ihtiyaç duymaksızın tek başına başvuruda bulunabilir. Başvuru bizzat yapılabileceği gibi, usulüne uygun düzenlenmiş bir vekâletname ile avukat aracılığıyla da yürütülebilir.
Aşama 1: Başvurunun Hazırlanması
Bu aşamada murisin ve mirasçıların kimlik bilgileri, ölüm tarihi ve yeri ile başvuruya esas belgeler hazırlanır. Başvuru, veraset ilamı talep dilekçesi ile yapılır. Dilekçede murisin kimliği, ölüm tarihi, başvuranın mirasçılık sıfatı ve talep açıkça belirtilmelidir.
Aşama 2: İnceleme ve Araştırma
Yetkili merci, MERNİS (Merkezi Nüfus İdaresi Sistemi) kayıtları üzerinden murisin ve mirasçıların nüfus bilgilerini inceler. Gerektiğinde Nüfus Müdürlükleri, Tapu Sicil Müdürlükleri, SGK ve diğer kamu kurumlarından bilgi temin edilir. Yabancılık unsuru içeren dosyalarda Adalet Bakanlığı veya Dışişleri Bakanlığı kanalıyla ilave araştırma yapılabilir.
Aşama 3: Belgenin Düzenlenmesi ve Teslimi
İnceleme tamamlandıktan sonra veraset ilamı düzenlenir ve başvuru sahibine teslim edilir. Belgede mirasçıların ad ve soyadları, T.C. kimlik numaraları, yakınlık dereceleri ve miras payları açıkça yer alır. Belge, ilgili tüm resmi kurumlar nezdinde kullanılabilir.
Gerekli Belgeler
Başvuruda sunulması gereken belgeler, somut olaya göre değişmekle birlikte uygulamada genel olarak aşağıdaki belgelerin sunulması istenmektedir:
	•	Murisin ölüm belgesi (Mernis ölüm tutanağı veya nüfus müdürlüğünden alınan ölüm kayıt örneği).
	•	Vukuatlı nüfus kayıt örneği (mirasçıların ve aile bağlarının gösterildiği).
	•	Başvuran mirasçının nüfus cüzdanı / kimlik belgesi.
	•	Varsa vasiyetname veya miras sözleşmesi.
	•	Başvuru avukat aracılığıyla yapılıyorsa usulüne uygun düzenlenmiş vekâletname.
	•	Yabancılık unsuru bulunan dosyalarda; apostil şerhli veya konsolosluk onaylı ölüm, doğum, evlilik ve mirasçılık belgeleri ile bunların yeminli tercüman tarafından yapılmış noter onaylı Türkçe tercümeleri.
Mirasın Kabulü, Reddi ve Borçlardan Sorumluluk
Türk Medeni Kanunu’na göre miras, murisin ölümü ile birlikte mirasçılara bir bütün hâlinde geçer ve mirasçılar tereke borçlarından kişisel mal varlıklarıyla da sorumlu olur. Ancak mirasçılara bu sorumluluktan kaçınma imkânı tanıyan iki ayrı kurum bulunmaktadır: gerçek (iradi) red ve hükmen red.
Mirasın Gerçek (İradi) Reddi
Türk Medeni Kanunu’nun 605/1 ile 606. maddeleri uyarınca yasal ve atanmış mirasçılar, mirası reddedebilir. Ret süresi üç ay olup; bu süre, yasal mirasçılar bakımından mirasçı olduklarını daha sonra öğrendikleri ispat edilmedikçe murisin ölümünü öğrendikleri, vasiyetname ile atanmış mirasçılar bakımından ise atamanın kendilerine resmen bildirildiği tarihten itibaren işler. Ret beyanı, sulh hukuk mahkemesine sözlü veya yazılı olarak yapılır ve mahkeme tarafından bir tutanağa bağlanır.
Süresi içinde mirası reddetmeyen mirasçı, mirası kayıtsız ve şartsız kazanmış sayılır. Bu durumda mirasçı, tereke borçlarından şahsi mal varlığı ile de sınırsız olarak sorumlu olur.
Mirasın Hükmen Reddi
Türk Medeni Kanunu’nun 605/2. maddesine göre, ölümü tarihinde murisin ödemeden aczi açıkça belli veya resmen tespit edilmiş ise, miras reddedilmiş sayılır. Bu hâlde mirasçıların ayrıca ret beyanında bulunmasına gerek yoktur; miras kendiliğinden reddedilmiş kabul edilir. Ancak uygulamada hükmen reddin tespiti için alacaklılara karşı menfi tespit davası açılması yaygındır.
İlgili Yargıtay Kararı: Mirasın Hükmen Reddi Şartları
Yargıtay, mirasın hükmen reddi bakımından murisin ölüm tarihindeki aczinin açıkça belli veya resmen tespit edilmiş olmasının yeterli olduğunu; mirasçıların ayrıca süre içinde sulh hukuk mahkemesine ret beyanında bulunmaları gerekmediğini kararlılıkla kabul etmektedir. Mirasçıların terekeye sahiplenen davranışlarda bulunmamış olmaları, hükmen red karinesinden yararlanmaları için yeterlidir.
Mirasın Resmî Defter Tutularak Kabulü
Mirasçılar, tereke borçlarının kapsamı konusunda tereddüt yaşadıklarında, Türk Medeni Kanunu’nun 619 ve devamı maddeleri uyarınca terekenin resmî defterinin tutulmasını talep edebilirler. Bu yola başvuran mirasçı, mirası ancak defterde gösterilen borçlardan sorumlu olmak üzere kabul etmiş sayılır ve şahsi mal varlığı korunmuş olur.
Veraset İlamının İptali
Veraset ilamı, açıklayıcı nitelikte bir belge olduğundan, gerçek mirasçılık ilişkisine aykırı düzenlendiği anlaşıldığında iptali talep edilebilir. İptal davası, sulh hukuk mahkemesinde görülür ve herhangi bir hak düşürücü süreye veya zamanaşımına tabi değildir. Davayı, mirasçılık sıfatı bulunan veya hukuki menfaati ihlal edilen herkes açabilir.
İptal davasının açılması veya kazanılması, iyi niyetli üçüncü kişilerin iptal edilen veraset ilamına dayanarak elde ettikleri hakları kural olarak etkilemez. Ancak kötü niyetli üçüncü kişilere karşı iadeye ilişkin hükümler uygulanır.
İlgili Yargıtay Kararı: Veraset İlamının İptalinde Görev
Yargıtay, mirasçılık belgesinin iptali davasında görevli mahkemenin sulh hukuk mahkemesi olduğunu, davanın çekişmesiz yargı işi niteliğinde olmayıp çekişmeli yargı kapsamında görülmesi gerektiğini istikrarlı şekilde kabul etmektedir.
Sürecin Tamamlanma Süresi
Veraset ilamı alınması süresi, başvurunun yapıldığı mercie ve dosyanın niteliğine göre değişiklik gösterir. Şartların elverişli olduğu, yabancılık unsuru taşımayan ve nüfus kayıtlarında çelişki bulunmayan dosyalarda noterler, başvuruyu çoğu zaman aynı gün içinde sonuçlandırabilmektedir.
Sulh hukuk mahkemesi nezdinde yürütülen başvurularda süre; mahkemenin iş yoğunluğuna, MERNİS ve diğer kurumlardan bilgi temin etme süresine, gerektiğinde yabancı belgelerin değerlendirilmesine bağlı olarak birkaç haftadan birkaç aya kadar uzayabilir. Yabancılık unsuru içeren dosyalarda sürecin daha uzun olması doğaldır.
Masraflar, Harçlar ve Vekâlet Ücreti
Veraset ilamı alma sürecinde ortaya çıkan masraflar, başvurunun yapıldığı mercie göre değişir. Noter aracılığıyla yapılan başvurularda ücret, ilgili dönem için yayımlanan Noter Ücret Tarifesi’ne göre hesaplanır.
Sulh hukuk mahkemesi nezdinde yapılan başvurularda; başvuru harcı, karar ve ilam harcı, posta ve tebligat giderleri ile gerektiğinde bilirkişi ücreti gibi yargılama giderleri söz konusu olur. Avukat aracılığıyla yürütülen dosyalarda ayrıca, Avukatlık Asgari Ücret Tarifesi veya taraflar arasındaki sözleşmeye göre belirlenen vekâlet ücreti ödenir.
Veraset ve intikal vergisi, veraset ilamından sonra ayrıca beyan edilmesi gereken bir vergidir. 7338 sayılı Veraset ve İntikal Vergisi Kanunu hükümleri uyarınca mirasçılar, ölümün gerçekleştiği tarihten itibaren öngörülen sürelerde ilgili vergi dairesine beyanname vermekle yükümlüdür. Bu yükümlülüğün yerine getirilmesi, veraset ilamı sürecinden bağımsız fakat onunla doğrudan bağlantılıdır.
Yabancılık Unsuru İçeren Mirasçılık Belgesi Talepleri
Yabancı uyruklu kişilerin taraf olduğu ya da yurt dışında düzenlenmiş belgelerin değerlendirilmesini gerektiren miras dosyaları, uygulamada daha karmaşık ve dikkat gerektiren bir yapı arz eder. Bu tür dosyalarda hem usul hukuku hem de uygulanacak maddi hukuk bakımından özel kurallar gündeme gelir.
Uygulanacak Hukukun Tespiti: MÖHUK
Yabancılık unsuru bulunan miras işlemlerinde 5718 sayılı Milletlerarası Özel Hukuk ve Usul Hukuku Hakkında Kanun (MÖHUK) hükümleri uygulanır. MÖHUK’un 20. maddesine göre miras, ölenin milli hukukuna tabidir. Ancak Türkiye’de bulunan taşınmazlar hakkında Türk hukuku uygulanır. Mirasın açılması sebepleri, iktisap ve taksim ise terekenin bulunduğu ülke hukukuna tabidir. Mirasçısız tereke devlete kalır.
MÖHUK’un 43. maddesi uyarınca, miras davaları ölenin Türkiye’deki son yerleşim yeri mahkemesinde; son yerleşim yerinin Türkiye’de bulunmaması hâlinde terekeye dahil malların bulunduğu yer mahkemesinde görülür.
Yurt Dışından Temin Edilen Belgelerin Tasdiki
Yabancı ülkelerde düzenlenmiş resmi belgelerin Türkiye’de kullanılabilmesi için, ilgili belgelerin usulüne uygun şekilde tasdik edilmesi gerekir. Tasdik yöntemi, belgenin düzenlendiği ülkenin 1961 tarihli Lahey Apostil Sözleşmesi’ne taraf olup olmamasına göre belirlenir.
Lahey Apostil Sözleşmesi’ne taraf ülkelerde düzenlenen belgeler için apostil şerhi yeterlidir. Sözleşmeye taraf olmayan ülkelerden gelen belgeler için ise konsolosluk tasdik zinciri (belgeyi düzenleyen makam, ilgili ülkenin dışişleri bakanlığı ve Türk Konsolosluğu) uygulanır. Her iki hâlde de belgelerin yeminli tercüman tarafından yapılmış ve noter tarafından onaylanmış Türkçe tercümelerinin de dosyaya sunulması zorunludur.
Yabancı Mahkeme Kararlarının Tanınması ve Tenfizi
Yabancı bir mahkemece verilmiş mirasçılık belgesi veya mirasla ilgili karar, kural olarak Türkiye’de doğrudan hüküm ifade etmez. Bu kararların Türkiye’de etki doğurabilmesi için MÖHUK’un 50 ve devamı maddeleri uyarınca tanıma veya tenfiz davası yoluyla Türk mahkemesi tarafından kabul edilmesi gerekir. Aksi hâlde yabancı belgeye dayanarak doğrudan tapu veya banka işlemi yapılması mümkün değildir.
Yabancılarda Türkiye’deki Taşınmazlara İlişkin Mütekabiliyet ve Sınırlamalar
2644 sayılı Tapu Kanunu ve ilgili mevzuat uyarınca yabancı uyruklu gerçek kişilerin Türkiye’de taşınmaz edinmeleri belirli şartlara tabidir. Bu çerçevede, miras yoluyla taşınmaz iktisap eden yabancılar bakımından da Bakanlar Kurulu (Cumhurbaşkanlığı) tarafından belirlenen ülke ve sınırlama listeleri ile yüzölçümü sınırlamaları gündeme gelebilir. Edinilemeyecek taşınmazlar bakımından, mirasçıya Türk hukukunda öngörülen tasfiye ve bedele dönüştürme prosedürleri uygulanır.
Yabancı Uyruklu Kişilerden İstenebilecek Belgeler
Uygulamada yabancı uyruklu mirasçı veya muris bakımından genel olarak aşağıdaki belgeler talep edilmektedir:
	•	Kişinin kendi ülkesinden alınmış mirasçılık belgesi (heir certificate / certificate of inheritance).
	•	Murise ait ölüm belgesi (death certificate).
	•	Aile bağlarını gösteren resmi kayıtlar (family record / civil registry).
	•	Pasaport veya kimlik belgesi sureti.
	•	Apostil şerhi veya konsolosluk tasdik zinciri ile onaylanmış belgeler.
	•	Yeminli tercüman tarafından düzenlenmiş ve noter onaylı Türkçe tercümeler.
	•	Gerektiğinde, yabancı ülkede düzenlenmiş vasiyetname veya mirasla ilgili mahkeme kararının tanıma/tenfiz işlemine ilişkin belgeler.
İlgili Yargıtay Kararı: Yabancılık Unsuru ve Türk Mahkemesinin Yetkisi
Yargıtay, MÖHUK çerçevesinde Türkiye’de bulunan taşınmazlar bakımından Türk hukukunun uygulanacağını ve Türk mahkemelerinin yetkili olduğunu kabul etmektedir. Yabancı bir mahkeme tarafından verilmiş mirasçılık belgesinin Türkiye’deki taşınmazlar üzerinde doğrudan etki doğurmayacağı; ilgili kararın tanınması veya tenfizi olmaksızın hüküm ifade etmeyeceği yerleşik içtihattır.
Veraset ve İntikal Vergisi Yükümlülüğü
Veraset ilamının düzenlenmiş olması, mirasçıları veraset ve intikal vergisi yükümlülüğünden muaf kılmaz. 7338 sayılı Veraset ve İntikal Vergisi Kanunu uyarınca mirasçılar, tereke malvarlığını ölümün gerçekleştiği yer vergi dairesine beyan etmek zorundadır. Beyanname, kural olarak ölümün Türkiye’de gerçekleşmesi hâlinde dört ay, yurt dışında gerçekleşmesi hâlinde ise altı ay içinde verilir.
Beyan üzerine tahakkuk eden vergi, kanun gereğince taksitler hâlinde ödenir. Tapu siciline tescil veya banka hesaplarındaki paranın mirasçılara ödenmesi gibi pek çok işlem, vergi dairesinden alınacak ilişiksizlik veya ödendi yazısının ibrazına bağlıdır.
Uygulamada Sık Karşılaşılan Sorunlar
Veraset ilamı süreçlerinde uygulamada sıkça karşılaşılan başlıca sorunlar şu şekilde sıralanabilir:
	•	Murisin nüfus kayıtlarında ad-soyad veya doğum tarihi bakımından tutarsızlık bulunması ve bu nedenle önce nüfus kaydının tashihi davası açılması ihtiyacı.
	•	Soybağı kurulmamış evlilik dışı çocukların mevcudiyetinin sonradan ortaya çıkması ve bu durumun veraset ilamının iptalini gerektirmesi.
	•	Yurt dışındaki mirasçıların adres ve nüfus bilgilerinin tespit edilememesi, tebligatın gecikmesi.
	•	Yabancı dilde düzenlenen belgelerin apostil veya konsolosluk tasdiki, yeminli tercüme ve noter onayı eksiklikleri.
	•	Vasiyetname bulunan dosyalarda vasiyetin açılması ve okunması işleminin tamamlanmasından önce veraset ilamı talebinde bulunulması.
	•	Hükmen reddin şartlarının bulunmasına rağmen mirasçıların terekeye sahiplenen davranışlarda bulunması ve bunun sonucu olarak ret hakkının kaybedilmesi.
Sonuç ve Değerlendirme
Veraset ilamı, Türk miras hukukunda mirasçıların belirlenmesi ve miras haklarının kullanılabilmesi açısından vazgeçilmez bir hukuki araçtır. Sürecin doğru ve eksiksiz yürütülmesi, hem hukuki güvenliğin sağlanması hem de zaman ve maliyet kaybının önlenmesi bakımından büyük önem taşır.
Yabancı uyruklu kişilerin taraf olduğu, vasiyetname içeren, terekede uyuşmazlık veya tereke borçları bulunan dosyalarda; veraset ilamı süreci tek başına yeterli olmayıp, mirasın reddi, tenkis, tapu iptal ve tescil, tanıma-tenfiz ile veraset ve intikal vergisi gibi pek çok hukuki süreçle bütünlük arz eder. Bu nedenle sürecin başından itibaren miras hukuku alanında deneyimli bir avukat tarafından planlanması ve yürütülmesi, mirasçıların haklarının korunması bakımından kritik önem taşır.
İşbu çalışma, veraset ilamı süreci hakkında genel bilgi vermek amacıyla hazırlanmış olup, somut bir dosyaya ilişkin hukuki görüş veya tavsiye niteliğinde değildir. Her dosya kendine özgü maddi ve hukuki özellikler taşıdığından, her bir somut olayın ayrı ayrı değerlendirilmesi ve uzman bir hukukçudan görüş alınması tavsiye olunur.`,
  "nufus-kaydi-duzeltme": String.raw`Nüfus Kaydının Düzeltilmesi Davası, Aile Kaydının Birleştirilmesi ve Babalık Davası
Kapsamlı Hukuki Rehber
Giriş
Nüfus kayıtları, kişinin hukuk düzeni içindeki kimliğini, aile bağlarını, medenî hâlini ve vatandaşlık durumunu gösteren temel resmî kayıtlardır. Bu kayıtlarda yer alan bir yanlışlık, yalnızca idari bir hata olarak kalmaz; miras, vatandaşlık, evlenme, boşanma, soybağı, eğitim, sosyal güvenlik, taşınmaz işlemleri ve hatta ceza soruşturmaları bakımından dahi ciddi sonuçlar doğurabilir.
Özellikle ad, soyad, doğum tarihi, anne-baba bilgileri veya aile bağlarına ilişkin yanlışlıklar; gündelik hayatta önemli hukuki ve idari sorunlara yol açabilmektedir. Bu nedenle nüfus kayıtlarının doğru, eksiksiz ve güncel tutulması büyük önem taşımaktadır.
Türk hukukunda bu tür yanlışlıkların giderilmesi için kimi durumlarda idari başvuru, kimi durumlarda ise mahkeme yoluyla düzeltme öngörülmüştür. Konuya ilişkin temel mevzuat 5490 sayılı Nüfus Hizmetleri Kanunu, 4721 sayılı Türk Medenî Kanunu, 5901 sayılı Türk Vatandaşlığı Kanunu ve Nüfus Hizmetleri Uygulama Yönetmeliği'nden oluşmaktadır.
Bu çalışmada; nüfus kaydının düzeltilmesi davası, aile kaydının birleştirilmesi süreci ve babalık davası bir bütün hâlinde ele alınmış; ilgili yerlerde Yargıtay ve Anayasa Mahkemesi'nin yerleşik içtihatlarına yer verilmiştir.
Birinci Bölüm — Nüfus Kaydının Düzeltilmesi Davası
1. Nüfus Kaydının Düzeltilmesi Davası Nedir?
Nüfus kaydının düzeltilmesi davası; aile kütüğüne tescil edilmiş nüfus kaydının tamamının ya da bir kısmının düzeltilmesi veya değiştirilmesi amacıyla açılan bir hukuk davasıdır. Bu dava, kişiye ait nüfus kaydında bulunan maddi bir yanlışlığın, eksikliğin veya gerçeğe aykırılığın mahkeme kararıyla giderilmesini hedefler.
5490 sayılı Nüfus Hizmetleri Kanunu'nun 36. maddesi uyarınca, nüfus kayıtlarına ilişkin düzeltme davaları, düzeltmeyi isteyen kişi veya gerekli görülen hâllerde Cumhuriyet savcısı tarafından, kişinin yerleşim yeri adresinin bulunduğu yerdeki görevli asliye hukuk mahkemesinde açılır. Yargılama, nüfus müdürü veya görevlendireceği nüfus memuru huzurunda görülür.
Bu davalar uygulamada; isim düzeltme, doğum tarihi düzeltme, anne–baba adı düzeltme, doğum yeri düzeltme, kayıt iptali, mükerrer kayıtların giderilmesi, aile bağının gerçeğe uygun hâle getirilmesi gibi farklı taleplerle karşımıza çıkar. Ancak her yanlışlık aynı nitelikte değildir. Bazı hususlar doğrudan nüfus müdürlüğünce düzeltilebilirken, bazı hususlar yalnızca mahkeme kararıyla değiştirilebilir. Dolayısıyla atılacak ilk adım; sorunun idari düzeltme mi yoksa dava konusu mu olduğunun doğru biçimde tespit edilmesidir.
Her nüfus kaydı hatası için doğrudan dava açılmasına da gerek yoktur. Basit yazım hataları gibi bazı düzeltmeler nüfus müdürlüğüne yapılacak idari başvuru ile çözülebilir. Buna karşılık soybağı, aile bağının tespiti veya kayıtlar arasında çelişki bulunması hâlinde mahkeme kararı zorunluluk arz eder.
2. Aile Kütüğü ve Nüfus Kaydı Kavramları
Nüfus Hizmetleri Uygulama Yönetmeliği'nde aile kütüğü, nüfus olaylarına ilişkin kayıtların tutulduğu kütük olarak; nüfus kaydı ise aile kütüğüne işlenmiş kişisel durum siciline ilişkin bilgilerin tümü olarak tanımlanmıştır.
Mevzuata göre aile kütüklerinde başta şu bilgiler yer alır: kişinin Türkiye Cumhuriyeti kimlik numarası, kayıtlı bulunduğu il, ilçe, mahalle veya köy bilgisi, adı ve soyadı, cinsiyeti, ana ve baba adı ile soyadları, evli kadınların önceki soyadları, doğum yeri ve tarihi, medenî hâli ve dini.
Bu nedenle nüfus kaydında yapılacak bir düzeltme, çoğu zaman yalnızca tek bir haneyi değil; kişinin eşine, çocuklarına veya üst soyuna ilişkin kayıt zincirini de etkileyebilir. Düzeltmenin kapsamı ve doğuracağı sonuçlar, dava açılmadan önce dikkatle değerlendirilmelidir.
3. Hangi Kayıtlar Düzeltilebilir?
Nüfus kaydının düzeltilmesi davasında her türlü kişisel durum kaydı dava konusu yapılmaz; yalnızca gerçeğe aykırı olan ve hukuken düzeltilmesi mümkün bulunan kayıtlar düzeltilebilir. Uygulamada en sık karşılaşılan düzeltme konuları aşağıda ayrı başlıklar hâlinde incelenmiştir.
3.1. Ad ve Soyadı Kayıtları
Kişinin adı veya soyadının yazımında hata bulunması, imla farkı olması, anlam bozulmasına yol açan yazım yanlışlıklarının yer alması veya kişinin fiilen kullandığı isim ile nüfusta kayıtlı ismin farklı olması hâlinde düzeltme gündeme gelebilir.
5490 sayılı Kanun'un Ek 3. maddesi ile Geçici 8. maddesi kapsamında bazı ad–soyad düzeltmeleri doğrudan nüfus müdürlüğüne yazılı başvuru ile yapılabilmektedir. Bu kapsamın dışında kalan değişiklikler ise mahkeme kararını gerektirir. Mahkeme yoluyla yapılan ad veya soyadı değişikliği, kural olarak eş ve ergin olmayan çocuklar bakımından da sonuç doğurur.
Yargıtay Uygulamasından
Yargıtay'ın yerleşik içtihadına göre, ad veya soyadı değişikliği talepleri Türk Medenî Kanunu'nun 27. maddesi anlamında "haklı sebep" bulunması hâlinde kabul edilmelidir. Yüksek Mahkeme; kişinin uzun süredir fiilen başka bir isimle tanınması, nüfusta yazılı ismin alay veya küçük düşürme konusu olması, dinî ya da etnik nedenlerle kullanılan isim ile nüfustaki ismin farklılaşması, mesleki veya sanatsal hayatta farklı bir ismin yerleşmiş olması gibi durumların haklı sebep oluşturabileceğini kabul etmektedir. Ad, kişiliğin ayrılmaz bir parçası kabul edildiğinden; isim değiştirme, kişiye sıkı sıkıya bağlı bir hak olarak yorumlanmakta ve haklı sebep kavramı geniş anlaşılmaktadır.
3.2. Doğum Tarihi ve Doğum Yeri Kayıtları
Özellikle eski tarihli kayıtlarda, göçmen kayıtlarında veya yabancı ülkede doğup sonradan Türk vatandaşlığı kazanan kişilere ait kayıtlarda doğum yeri ve doğum tarihi hataları görülebilir. Göçmen olarak Türk vatandaşlığına alınanlar bakımından belirli şartlarda doğum yeri ve tarihi, usulüne uygun onaylı belgelerle nüfus müdürlüğünce düzeltilebilmektedir. Bunun dışındaki maddi yanlışlıklarda mahkeme kararı aranır.
Mahkeme, doğum tarihine ilişkin kararında yalnızca yılı değiştirebileceği gibi gün ve ay yönünden de farklı bir hüküm kurabilir. Kararın nüfus kütüğüne nasıl tescil edileceği de mevzuatta ayrıca düzenlenmiştir.
Yargıtay Uygulamasından
Yargıtay, doğum tarihi düzeltme taleplerinde kişinin biyolojik görünümü ile talep edilen yaş arasında bariz bir uyumsuzluk bulunmaması gerektiğini vurgulamaktadır. Yerleşik içtihatta; mahkemenin yalnızca tanık beyanı ile yetinmemesi, resmî kurumlardaki (hastane, okul, askerlik şubesi, sosyal güvenlik) kayıtların getirtilmesi ve gerektiğinde adli tıp veya tam teşekküllü bir hastaneden kemik yaşı tespiti yaptırılması gerektiği kabul edilmiştir. Salt tanık beyanına dayalı olarak doğum tarihinin önemli ölçüde değiştirilmesi yönündeki talepler reddedilmektedir.
3.3. Anne ve Baba Adı Kayıtları
Anne veya baba adının yanlış yazılması, isim benzerliği nedeniyle hatalı işlenmesi ya da nüfus kayıtlarında teknik sebeplerle yanlış görünmesi hâlinde düzeltme yapılabilir. Baba veya ana adında yapılan düzeltme, ilgili haneden ayrılmış ergin çocukların kayıtlarına da yansıtılabilir.
Burada dikkat edilmesi gereken kritik nokta şudur: uyuşmazlık yalnızca isim yanlışlığı değil de soybağının kendisine ilişkinse, artık basit kayıt düzeltmesi yeterli olmaz. Bu durumda tanıma, soybağının reddi, babalık hükmü veya soybağının tespiti gibi daha özel davalar gündeme gelir. Dava türünün hatalı seçilmesi, davanın görev veya husumet yokluğundan reddedilmesine yol açabilir.
3.4. Cinsiyet Kaydı
Cinsiyet kaydında yapılacak değişiklik, sıradan bir yazım hatası gibi değerlendirilmez. Türk Medenî Kanunu'nun 40. maddesi cinsiyet değişikliğini özel şartlara bağlamıştır. Kanun hükmüne göre cinsiyetini değiştirmek isteyen kimsenin; on sekiz yaşını doldurmuş ve evli olmaması, transseksüel yapıda olup cinsiyet değişikliğinin ruh sağlığı açısından zorunluluk bulunduğunun resmî sağlık kurulu raporuyla belgelenmesi gerekir. Tüm bu şartlar sağlandığında mahkemece cinsiyet değişikliğine izin verilebilir.
Anayasa Mahkemesi Kararı
Anayasa Mahkemesi, Türk Medenî Kanunu'nun 40. maddesinin birinci fıkrasında yer alan "üreme yeteneğinden sürekli biçimde yoksun bulunma" koşulunu, Anayasa'ya aykırı bularak iptal etmiştir. Bu nedenle cinsiyet değişikliğine izin davalarında söz konusu koşul artık aranmamakta; kalan diğer şartlar (on sekiz yaşını doldurma, evli olmama, ruh sağlığı açısından zorunluluk bulunduğuna dair resmî sağlık kurulu raporu) yürürlüğünü korumaktadır. Bu karar, uygulamadaki tıbbi müdahale prosedürünü ve mahkemenin değerlendirme çerçevesini doğrudan etkilemiştir.
3.5. Aile Bağı, Hane ve Kütük Bağlantıları
Kimi zaman kişinin adı, doğum tarihi veya ana–baba adı doğru görünmekle birlikte, yanlış haneye tescil edilmiş olabilir; kardeşler farklı aile sıra numaralarında yer alabilir ya da anne, baba ve çocuklar Türk vatandaşlığını farklı tarihlerde kazandıkları için birbirinden kopuk biçimde kaydedilmiş olabilir.
Bu hâllerde sorun yalnızca isim düzeltme değil; aile bağının nüfus sicilinde doğru biçimde kurulması sorunudur. Söz konusu durumlar, aile kaydının birleştirilmesi ya da mahkemeden aile bağının tespiti yoluyla çözülür. Bu konu çalışmanın İkinci Bölümünde ayrıntılı olarak incelenmiştir.
4. Nüfus Kaydının Düzeltilmesi Davasının Şartları
Her kayıt türü farklı özellik gösterse de davanın genel şartları şu şekilde özetlenebilir.
Birincisi, ortada gerçekten mevcut ve tescil edilmiş bir kayıt bulunmalıdır. Kayıt hiç yoksa mesele kayıt düzeltmeden çıkar; ilk tescil, saklı nüfus işlemi veya vatandaşlık/soybağı prosedürü gündeme gelir.
İkincisi, talep dayanaklı olmalıdır. Nüfus mevzuatı, aile kütüğüne işlenen her kaydın belgeye dayanmasını esas alır. Bu nedenle düzeltme talebinin de resmî belgelere, eski kütüklere, yabancı resmî evraka, tanık anlatımına ve gerektiğinde bilirkişi ya da DNA incelemesine dayandırılması gerekir.
Üçüncüsü, talep edilen düzeltme hukuken mümkün olmalıdır. Basit maddi hata ile soybağı kuran veya ortadan kaldıran iddialar aynı nitelikte değildir. Soybağına ilişkin bir mesele, salt "baba adı yanlış" denilerek çözülemez; uygun dava türü seçilmelidir.
Dördüncüsü, dava görevli ve yetkili mahkemede açılmalıdır. Bu konu aşağıda ayrıca ele alınmıştır.
Beşincisi, talep samimi, ciddi ve ispatlanabilir olmalıdır. Yaş küçültme veya büyütme yoluyla avantaj sağlamak, askerlik veya emeklilikten kaçınmak gibi gerekçesiz amaçlarla açılan davalarda mahkemeler titiz bir değerlendirme yapar. Özellikle doğum tarihi davalarında okul, askerlik, sağlık ve sosyal güvenlik kayıtları belirleyici öneme sahiptir.
5. Görevli ve Yetkili Mahkeme
5490 sayılı Kanun kapsamındaki klasik nüfus kayıt düzeltme davalarında görevli mahkeme asliye hukuk mahkemesidir. Yetkili mahkeme ise düzeltmeyi isteyen kişinin yerleşim yeri mahkemesidir. Yargılama, nüfus müdürü veya görevlendireceği nüfus memuru huzurunda görülür.
Soybağına ilişkin davalar (babalık, soybağının reddi, tanımanın iptali) aile hukukunun konusudur ve Türk Medenî Kanunu'nun 283. maddesi uyarınca taraflardan birinin dava veya doğum sırasındaki yerleşim yeri mahkemesinde açılır. Bu davalarda görevli mahkeme aile mahkemesidir; aile mahkemesi bulunmayan yerlerde asliye hukuk mahkemesi aile mahkemesi sıfatıyla davaya bakar.
6. Aynı Konuda Birden Fazla Dava Açılabilir mi?
5490 sayılı Kanun'un ilk hâlinde, aynı konuya ilişkin nüfus kaydının düzeltilmesi davasının yalnızca bir kez açılabileceğine dair bir sınırlama yer almaktaydı. Ancak bu hüküm Anayasa Mahkemesi tarafından iptal edilmiştir. Bu nedenle bugün, salt "bir kez dava açılmış olması" gerekçesiyle ikinci davanın peşinen reddedilmesi mümkün değildir.
Anayasa Mahkemesi Kararı
Anayasa Mahkemesi, 5490 sayılı Nüfus Hizmetleri Kanunu'nun 36. maddesinin birinci fıkrasının (b) bendinde yer alan ve "Aynı konuya ilişkin olarak nüfus kaydının düzeltilmesi davası, ancak bir defa açılabilir." şeklindeki düzenlemeyi, hak arama özgürlüğüne aykırı bularak iptal etmiştir. İptal kararının ardından yeni delillere veya farklı kapsamdaki taleplere dayanılarak yeniden dava açılabilmesi mümkün hâle gelmiştir. Bununla birlikte, ilk davada verilen kararın kesin hüküm (hüküm gücü) etkisi devam ettiğinden, aynı sebep ve aynı taleple yapılacak yeni başvurular Hukuk Muhakemeleri Kanunu çerçevesinde kesin hüküm itirazıyla karşılaşabilir.
Uygulamada bu durum şu şekilde değerlendirilmektedir: önceki davanın konusu, sebebi ve tarafları aynı ise kesin hüküm engeli işler. Buna karşılık daha önce ileri sürülmemiş yeni vakıalara, yeni delillere ya da farklı bir hukuki sebebe dayanan dava yeniden açılabilir.
İkinci Bölüm — Aile Kaydının Birleştirilmesi
7. Aile Kaydının Birleştirilmesi Davası
Aile kaydının birleştirilmesi davası, uygulamada aynı aileye mensup oldukları hâlde nüfus sicilinde farklı hanelerde, farklı aile sıra numaralarında veya birbirinden kopuk kayıtlarla görünen kişilerin kayıtlarının birleştirilmesi amacıyla başvurulan bir hukuki yoldur. Bu kavram mevzuatta bağımsız bir dava adı olarak her zaman yer almamakla birlikte, Nüfus Hizmetleri Uygulama Yönetmeliği'nde açıkça düzenlenen bir tescil mekanizmasına dayanır.
Nüfus Hizmetleri Uygulama Yönetmeliği'nin ilgili hükümlerine göre; göçmen olarak veya yetkili makam kararıyla değişik tarihlerde Türk vatandaşlığını kazanarak farklı hanelere tescil edilen ya da aynı aileden olduklarını iddia eden on sekiz yaşından büyük kişilerin, yazılı başvuru yapmaları ve ibraz edecekleri belgelerle aynı aileden olduklarını ispat etmeleri hâlinde kayıtları idari yoldan birleştirilir. Aile bağının belgeyle ispatlanamadığı durumlarda, mahkemeden alınacak tespit kararına göre düzenlenecek Aile Birleştirme Formu ile kayıtlar birleştirilir.
Bu nedenle aile kaydının birleştirilmesi her zaman doğrudan bir dava açılmasını gerektirmez. Öncelikle idareye başvurulup belgelerle aile bağının ispatı denenmelidir. Belgeler yetersiz kalırsa idare aile bağını re'sen kuramaz; bu durumda mahkemeden tespit kararı alınması zorunlu hâle gelir. Uygulamada bu tür davalar bazen "nüfus kaydının düzeltilmesi", bazen "aile bağının tespiti", bazen de "kütük birleştirme" başlığıyla anılmaktadır. Esas mesele, aynı aileye mensup kişilerin sicilde doğru aile yapısı altında gösterilmesidir.
8. Farklı Tarihlerde Vatandaşlık Kazanan Aile Bireylerinin Kütüklerinin Birleştirilmesi
Bu konu, uygulamada özellikle yatırım yoluyla Türk vatandaşlığı kazanan ailelerde, istisnai yoldan vatandaşlığa alınan kişilerde, göçmen statüsündeki ailelerde veya farklı tarihlerde bireysel başvurularla vatandaşlık kazanan aile fertlerinde sıkça karşımıza çıkmaktadır.
Örneğin anne, baba ve ergin çocuklar farklı tarihlerde, ayrı başvuru dosyalarıyla Türk vatandaşlığını kazanmış olabilir. Bu durumda sistemde her biri için ayrı hane açılır. Oysa kişiler fiilen aynı ana–babadan gelen kardeşlerdir ya da aynı çekirdek ailenin üyeleridir.
İşte tam bu noktada Nüfus Hizmetleri Uygulama Yönetmeliği'nin ilgili hükümleri uygulama alanı bulur. Yönetmelik, değişik tarihlerde Türk vatandaşlığını kazanarak farklı hanelere tescil edilen kişilerin; yazılı başvuru yapmaları ve ibraz edecekleri belgelerle aynı aileden olduklarını ispat etmeleri hâlinde kayıtlarının birleştirileceğini açıkça hükme bağlamıştır. Belgeyle ispatın mümkün olmadığı durumlarda mahkemeden tespit kararı alınır; bu karara göre Aile Birleştirme Formu düzenlenerek kayıtlar birleştirilir.
Prosedür iki aşamalıdır: önce idari ispat, mümkün değilse yargısal tespit. Bu süreçte temel amaç, kişilerin bağımsız vatandaşlık kazanmış olmalarını yok saymak değil; vatandaşlık kazanımından sonra ortaya çıkan dağınık kayıt yapısının gerçek aile bağına uygun şekilde tek bir aile ilişkisi içinde görünür hâle getirilmesidir. Böylece kardeşlik, ana–baba bağı, eş ve çocuk bilgileri nüfus kayıt örneklerinde tutarlı biçimde yansıtılır; ileride miras, pasaport, aile cüzdanı ve nüfus kayıt örneği gibi işlemlerde ortaya çıkabilecek uyuşmazlıklar önemli ölçüde önlenmiş olur.
9. Aile Kaydının Birleştirilmesi İçin Gerekli Belgeler
Nüfus Hizmetleri Uygulama Yönetmeliği, "ibraz edilecek belgelere göre" ifadesini kullanmakta; kapalı ve sınırlı bir evrak listesi vermemektedir. Bu nedenle gerekli belgeler somut olayın özelliğine göre değişir. Uygulamada en sık talep edilen belgeler şunlardır:
	•	Yurt içi veya yurt dışından alınmış doğum belgeleri.
	•	Apostil şerhi taşıyan ve noter onaylı Türkçe tercümeleri yaptırılmış yabancı resmî belgeler.
	•	Pasaport, kimlik belgesi ve seyahat belgeleri.
	•	Türk vatandaşlığının kazanılmasına ilişkin Bakanlar Kurulu kararı, Cumhurbaşkanlığı kararı veya idari işlem örnekleri.
	•	Evlenme ve boşanma kayıtları.
	•	Aile bağını gösteren yabancı nüfus kayıt örnekleri ve sicil belgeleri.
	•	Anne ve baba isimlerini gösteren resmî evrak.
	•	Gerekli görüldüğü hâllerde yetkili kurumlardan alınmış DNA raporları.
Yabancı ülkelerden alınan belgelerin Türk hukukunda geçerli olabilmesi için Lahey Apostil Sözleşmesi'ne taraf devletlerde apostil şerhi, taraf olmayan devletlerde ise konsolosluk tasdiki yaptırılması ve belgelerin yeminli tercüman aracılığıyla Türkçeye çevrilerek noter onayından geçirilmesi gerekir. Bu nokta uygulamada belirleyici niteliktedir; eksik tasdikli ve onaysız belgeler resmî işlemlerde kabul görmemektedir.
Belgelerle aile bağı açıkça ispatlanabiliyorsa, nüfus müdürlüğü nezdinde idari işlem yapılabilir. Aynı aileden olunduğu belgeyle net biçimde gösterilemiyorsa — özellikle isim farklılıkları, tarih tutarsızlıkları, ülke değiştirme, göç, farklı alfabe kullanımı, geç tescil veya eksik sicil kayıtları gibi durumlarda — mahkemeden aile bağının tespiti yönünde karar alınması gerekebilir. Mahkeme kararı sonrasında Aile Birleştirme Formu düzenlenerek nüfus kayıtları birleştirilir.
10. Aile Kaydının Birleştirilmesi ile Nüfus Kaydının Düzeltilmesi Arasındaki Fark
Bu iki kurum uygulamada sıkça birbirine karıştırılır. Aralarındaki temel farklılık, amaç ve kapsam yönünden ortaya çıkar.
Nüfus kaydının düzeltilmesi davasında esas amaç, mevcut kaydın içindeki yanlışlığı gidermektir. Örneğin ad yanlış yazılmıştır, doğum tarihi hatalıdır veya anne adı eksiktir. Kaydın içeriğinde bir hata söz konusudur ve bu hata mahkeme kararı ile düzeltilir.
Aile kaydının birleştirilmesinde ise asıl sorun çoğu zaman bilgi yanlışlığından değil; aile bağının sicilde parçalı görünmesinden kaynaklanır. Kayıtların her biri tek başına doğru olabilir; fakat sistemde birbirleriyle doğru bağ kurulamamıştır.
Örnek olarak; aynı anne ve babanın çocukları olan iki kardeş, Türk vatandaşlığını farklı tarihlerde kazanmış ve farklı aile sıra numaraları altında ayrı hanelere tescil edilmiş olabilir. Bu durumda yapılması gereken yalnızca bir ismi düzeltmek değil; kardeşlerin aynı ana ve babaya bağlı olarak aynı aile ilişkisi içinde nüfus sisteminde görünmesini sağlamaktır. Bu nedenle aile kaydının birleştirilmesi, çoğu dosyada sıradan bir kayıt düzeltme talebinden daha geniş kapsamlı bir inceleme gerektirir.
Üçüncü Bölüm — Babalık Davası
11. Babalık Davası Nedir?
Babalık davası, evlilik dışında doğan çocuk ile biyolojik baba arasındaki soybağının mahkeme kararıyla kurulmasını sağlayan, kendine özgü bir aile hukuku davasıdır.
Türk Medenî Kanunu'nun 301. maddesine göre çocuk ile baba arasındaki soybağının mahkemece belirlenmesini ana ve çocuk isteyebilir. Dava, babaya; baba ölmüşse mirasçılarına karşı açılır. Ayrıca babalık davası Cumhuriyet savcısına ve Hazineye; dava ana tarafından açılmışsa kayyıma, kayyım tarafından açılmışsa anaya ihbar edilir. Bu ihbar yükümlülüğü, babalık davasının yalnızca taraflar arasındaki özel bir uyuşmazlık değil; aynı zamanda kamu düzeni ile kişisel durum sicilini doğrudan ilgilendiren bir dava olduğunu göstermektedir.
Babalık davası yalnızca aile hukuku sonucu doğurmaz; nüfus tescili ve çoğu hâlde vatandaşlık sonuçları da doğurur. 5901 sayılı Türk Vatandaşlığı Kanunu'nun ilgili hükümleri uyarınca, evlilik dışında Türk babadan ve yabancı anadan doğan çocuk; mahkemece soybağının belirlenmesi veya tanıma hâlinde, doğumundan itibaren geçerli olmak üzere babasına bağlı olarak Türk vatandaşlığını kazanır ve babasının hanesine baba soyadıyla tescil edilir.
12. Babalık Davasını Kimler Açabilir?
Türk Medenî Kanunu'nun 301. maddesi uyarınca babalık davasını ana ve çocuk açabilir. Anne ile çocuğun dava hakları birbirinden bağımsızdır; annenin dava açmamış olması çocuğun dava hakkını ortadan kaldırmaz.
Babalık davası çocuk doğmadan önce de doğumdan sonra da açılabilir. Çocuk ergin değilse, usulî temsil ve gerektiğinde kayyım atanması meseleleri gündeme gelir. Özellikle anne ile çocuk arasında menfaat çatışması ihtimali bulunan dosyalarda çocuğa temsil kayyımı tayini, davanın sıhhati açısından kritik önemdedir. Bu alan teknik bir nitelik taşıdığından, davanın uzman bir hukuk müşaviri tarafından yürütülmesi büyük önem arz eder.
13. Babalık Davasında Hak Düşürücü Süreler
Türk Medenî Kanunu'nun 303. maddesine göre babalık davası çocuğun doğumundan önce veya sonra açılabilir. Annenin dava hakkı, doğumdan başlayarak bir yıl geçmekle düşer.
Çocuk ile başka bir erkek arasında soybağı ilişkisi varsa, bir yıllık süre bu ilişkinin ortadan kalktığı tarihten itibaren işlemeye başlar. Bir yıllık süre geçtikten sonra dahi gecikmeyi haklı kılan sebepler varsa, sebebin ortadan kalkmasından itibaren bir ay içinde dava açılabilir.
Anayasa Mahkemesi Kararı
Anayasa Mahkemesi, Türk Medenî Kanunu'nun 303. maddesinde çocuk yönünden öngörülmüş olan bir yıllık hak düşürücü süreyi, çocuğun soybağını öğrenme ve aile bağına kavuşma hakkı ile bağdaşmadığı gerekçesiyle iptal etmiştir. Bu kararın doğal sonucu olarak güncel hukuk durumunda çocuğun dava hakkı, kanunda öngörülen dar süre sınırlamasına tâbi değildir. Annenin dava hakkı bakımından doğumdan itibaren bir yıllık süre ise yürürlüğünü korumakta; ancak haklı sebebin varlığı hâlinde gecikme tolerans ile karşılanmaktadır.
14. Babalık Davasında İspat ve Deliller
Babalık davasında ispat, dosyanın merkezinde yer alır. Uygulamada en güçlü delil çoğu zaman DNA incelemesidir; ancak bu tek delil değildir. Mahkeme, taraflar arasındaki ilişkinin niteliği, birlikte yaşama durumu, yazışmalar, fotoğraflar, sosyal medya kayıtları, tanık beyanları, hamilelik dönemine ilişkin olgular, maddi destek kayıtları ve diğer her türlü hukuka uygun delili birlikte değerlendirir.
Türk Medenî Kanunu'nun 284. maddesi, soybağı davalarında re'sen araştırma ilkesini kabul etmiştir. Bu nedenle mahkeme, kendisine sunulan delillerle bağlı kalmaz; gerçeğin ortaya çıkması için gerekli tüm incelemeleri kendiliğinden yapar. Sonuçta verilecek hüküm, çocuğun babasının kim olduğuna ilişkin olarak hukuk düzeninde kesin etki doğurur ve nüfus kaydına tescil edilir.
Yargıtay Uygulamasından
Yargıtay Hukuk Genel Kurulu'nun ve aile hukuku dairelerinin yerleşik içtihatlarına göre; babalık davalarında davalının haklı bir sebep göstermeksizin DNA incelemesine girmekten kaçınması, Türk Medenî Kanunu'nun 284. maddesindeki re'sen araştırma ilkesi ve hukuk yargılamasındaki "delilden kaçınma" kavramı çerçevesinde aleyhe karine olarak değerlendirilir. Mahkemenin, soybağının kesin biçimde tespiti amacıyla DNA testinin gerektiğinde zor kullanılarak yaptırılmasına karar verebileceği kabul edilmektedir. Diğer yandan Yargıtay; salt cinsel ilişkinin ispatı ile yetinilmemesi gerektiğini, gebelik dönemiyle uyumlu yaşam birliği, maddi destek, mektup–mesaj ve tanık beyanları gibi yan delillerin de birlikte değerlendirilmesini ve bilimsel inceleme sonucunun belirleyici olmasını aramaktadır.
15. Babalık Davasının Sonuçları
Babalık davasının kabulü ile çocuk ile baba arasındaki soybağı mahkeme kararıyla kurulmuş olur. Bunun doğal sonucu olarak çocuk baba yönünden nüfus kaydına işlenir; soyadı, mirasçılık, nafaka ve velâyetle ilgili haklar ile diğer aile hukuku sonuçları doğar.
Çocuk Türk vatandaşı babadan ve yabancı anneden evlilik dışında doğmuşsa, soybağının kurulması aynı zamanda vatandaşlık sonucu da doğurur. 5901 sayılı Türk Vatandaşlığı Kanunu'nun 7. maddesi ve nüfus mevzuatı, uygun koşullarda çocuğun, doğumdan itibaren geçerli olmak üzere babaya bağlı olarak Türk vatandaşlığını kazanabileceğini kabul etmektedir.
Türk Medenî Kanunu'nun 304. maddesi ayrıca anneye birtakım malî talep hakları tanımıştır. Buna göre anne, babalık davası ile birlikte veya ayrı olarak baba ya da mirasçılarından şu giderleri isteyebilir: doğum giderleri, doğumdan önceki ve sonraki altışar haftalık geçim giderleri ile gebelik ve doğumun gerektirdiği diğer giderler. Çocuk ölü doğmuş olsa bile hâkim, hakkaniyet ölçüsünde bu giderlere hükmedebilir. Dolayısıyla babalık davası, yalnızca soybağının kurulmasını değil; annenin belirli malî taleplerinin de karara bağlanmasını içerebilecek geniş bir hukuki çerçeveye sahiptir.
16. Babalık Davasında Görevli ve Yetkili Mahkeme
Soybağına ilişkin davalarda yetki, Türk Medenî Kanunu'nun 283. maddesine göre belirlenir. Buna göre soybağına ilişkin davalar, taraflardan birinin dava veya doğum sırasındaki yerleşim yeri mahkemesinde açılır.
Görevli mahkeme aile mahkemesidir; aile mahkemesi bulunmayan yerlerde asliye hukuk mahkemesi aile mahkemesi sıfatıyla davaya bakar. Bu görev ayrımı önemlidir; zira babalık davası ile klasik nüfus kayıt düzeltme davası farklı görev alanlarındadır ve dava türünün hatalı belirlenmesi davanın görev yönünden reddine yol açabilir.
Sonuç ve Değerlendirme
Nüfus kayıtları, kişinin hukuk düzenindeki kimliğinin omurgasını oluşturur. Bu nedenle ad, soyad, doğum tarihi, anne–baba adı, cinsiyet, vatandaşlık ve aile bağı gibi unsurlarda ortaya çıkan her yanlışlık, yalnızca bir sicil problemi olmaktan öteye geçer; çoğu zaman miras, vatandaşlık, sosyal güvenlik, evlenme ve taşınmaz işlemleri gibi pek çok hakkı doğrudan etkileyen temel bir hukuk sorununa dönüşür.
Nüfus kaydının düzeltilmesi davası, mevcut kaydın gerçeğe uygun hâle getirilmesini; aile kaydının birleştirilmesi ise özellikle farklı tarihlerde ve bağımsız başvurularla Türk vatandaşlığını kazanan kişilerin dağınık kayıtlarının gerçek aile bağına uygun şekilde tek bir sistematik yapı içinde gösterilmesini sağlar. Babalık davası ise evlilik dışında doğan çocuk ile baba arasındaki soybağının mahkeme kararıyla kurulmasını temin eden; nüfus siciline, vatandaşlığa ve aile hukukuna etki eden özel bir dava türüdür.
Bu sebeple her somut olayda öncelikle sorunun niteliği doğru tespit edilmelidir. Karşılaşılan mesele basit bir kayıt hatası mı, idari başvuruyla çözülebilecek bir sicil sorunu mu, mahkemeden tespit kararı gerektiren bir aile birleştirme talebi mi, yoksa doğrudan soybağına ilişkin bir babalık davası mı olduğu dikkatle değerlendirilmelidir.
Özellikle yabancı belgelerin kullanıldığı, farklı tarihlerde vatandaşlık kazanıldığı, eski kayıtlarla güncel kayıtların çeliştiği veya çocuk ile baba arasındaki bağın ayrıca ispat edilmesi gereken dosyalarda; doğru dava türünün seçilmesi, dilekçenin titizlikle hazırlanması ve delillerin eksiksiz toplanması, hak kayıplarının önüne geçmek bakımından belirleyici öneme sahiptir. Nüfus kayıtlarına ilişkin hataların giderilmesi ve aile bağlarının doğru biçimde tespiti, teknik bilgi ve hukuki uzmanlık gerektiren süreçler olduğundan, sürecin başından itibaren profesyonel hukuki destek alınması, işlemlerin hızlı ve doğru sonuçlandırılması açısından büyük önem taşımaktadır.
Kaynakça
4721 sayılı Türk Medenî Kanunu, özellikle m. 27, 40, 282, 283, 284, 301, 303 ve 304.
5490 sayılı Nüfus Hizmetleri Kanunu.
5901 sayılı Türk Vatandaşlığı Kanunu.
Nüfus Hizmetleri Uygulama Yönetmeliği.
Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü, "Kayıt Düzeltme" başlıklı resmî açıklamalar.
Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü, "Soybağına İlişkin Esaslar" başlıklı resmî açıklamalar.
Anayasa Mahkemesi'nin nüfus kaydının düzeltilmesinde tek dava kuralına ilişkin iptal kararı.
Anayasa Mahkemesi'nin babalık davasında çocuk yönünden hak düşürücü süreye ilişkin iptal kararı.
Anayasa Mahkemesi'nin Türk Medenî Kanunu'nun 40. maddesinde yer alan üreme yeteneğinden yoksun bulunma koşuluna ilişkin iptal kararı.
Yargıtay Hukuk Genel Kurulu ve ilgili hukuk dairelerinin ad–soyad düzeltme, doğum tarihi düzeltme ve babalık davalarına ilişkin yerleşik içtihatları.`,
  "tanima-tenfiz": String.raw`MAKALE
Tanıma ve Tenfiz Davaları
Yabancı Mahkeme Kararlarının Türkiye’de Hüküm ve Sonuç Doğurması

1. Giriş
Uluslararası evliliklerin, yurt dışında kurulan aile birliklerinin ve farklı ülkelerde açılan aile hukuku uyuşmazlıklarının sayısının artmasıyla birlikte, yabancı mahkeme kararlarının Türkiye’de ne şekilde hüküm ve sonuç doğuracağı sorusu son derece güncel ve önemli bir hukuki mesele hâline gelmiştir. Bir ülkede verilen mahkeme kararı, kural olarak başka bir ülkede kendiliğinden geçerlilik veya icra kabiliyeti kazanmaz. Bu nedenle, yabancı mahkeme kararlarının Türk hukuk düzeninde sonuç doğurabilmesi için 
“tanıma” ve “tenfiz” kurumları gündeme gelir. Türk hukukunda bu alanın temel dayanağı 5718 sayılı Milletlerarası Özel Hukuk ve Usul Hukuku Hakkında Kanun (MÖHUK) m. 50 ilâ 59 hükümleridir. Bunun yanı sıra, yabancı boşanma kararlarının nüfus kütüğüne idari yoldan tescili bakımından 5490 sayılı Nüfus Hizmetleri Kanunu m. 27/A özel bir başvuru rejimi öngörmektedir.
Tanıma ve tenfiz, uygulamada çoğu zaman birlikte anılmakla birlikte aynı kavramı ifade etmez. Bu farkın bilinmemesi, başta boşanma kararları olmak üzere pek çok dosyada ciddi hak kayıplarına yol açabilir. Bazı durumlarda yalnızca yabancı kararın Türkiye’de geçerli sayılması yeterli iken, nafaka, tazminat veya başka bir mali yükümlülüğün Türkiye’de cebri icraya konu edilebilmesi için ayrıca tenfiz kararı alınması gerekir. Özellikle mal rejimi, nafaka ve çocuklara ilişkin hükümler bakımından yabancı ilamın kapsamı ayrı ayrı incelenmeli; her hükmün hangi yola tabi olduğu ayrı değerlendirilmelidir.
2. Tanıma Nedir?
Tanıma, yabancı bir mahkeme kararının Türkiye’de kesin hüküm ve kesin delil etkisi doğurmasının kabul edilmesidir. Başka bir ifadeyle tanıma, yabancı mahkemece verilmiş bir kararın Türk hukuk düzeninde hukuken geçerli sayıldığının tespit edilmesi sonucunu doğurur. Ancak tanıma ile karar doğrudan icra kabiliyeti kazanmaz; yalnızca kararın hukuki varlığı ve bağlayıcılığı kabul edilmiş olur. Bu özelliğiyle tanıma, özellikle kişinin medeni hâline ilişkin kararlar bakımından büyük önem taşır.
Uygulamada en sık rastlanan örnek, yabancı ülkede verilen boşanma kararının Türkiye’de tanınmasıdır. Kişi Almanya, Fransa, İngiltere veya başka bir ülkede boşanmış olsa dahi, bu karar Türkiye’de tanınmadığı sürece nüfus kayıtlarında hâlen evli görünmeye devam eder. Bu durum yeniden evlenme, soyadı kullanımı, miras, mal rejimi ve resmi kayıtların doğruluğu yönünden ciddi sorunlar yaratır. Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü uygulaması da yabancı boşanma kararlarının Türkiye’de hüküm doğurabilmesi için ya idari tescil ya da tanıma/tenfiz yolunun işletilmesi gerektiği yönündedir.
Yargıtay görüşü: Yargıtay’ın yerleşik içtihadına göre, yabancı bir mahkeme kararının Türkiye’de hüküm doğurabilmesi için kural olarak ayrıca tanıma kararı alınması zorunludur. Tanıma kararı olmaksızın yabancı boşanma ilamı yalnızca delil olarak değerlendirilebilir; nüfus kayıtlarında doğrudan bir değişiklik doğurmaz (Yargıtay 2. Hukuk Dairesi’nin yerleşik kararları).
3. Tenfiz Nedir?
Tenfiz, yabancı mahkeme kararının Türkiye’de icra edilebilir hâle getirilmesidir. MÖHUK m. 50 hükmüne göre, yabancı mahkemelerden hukuk davalarına ilişkin olarak verilmiş ve verildiği ülke hukukuna göre kesinleşmiş ilamların Türkiye’de icra olunabilmesi, yetkili Türk mahkemesinin tenfiz kararı vermesine bağlıdır. Buna göre yabancı bir mahkeme kararının içeriğinde nafaka, tazminat, alacak, yargılama gideri ya da yerine getirilmesi gereken başka bir mali veya icrai yükümlülük varsa, salt tanıma yeterli olmayabilir; bu hükümler bakımından ayrıca tenfiz kararı alınması gerekir.
Örneğin yabancı boşanma kararında eşlerden birine belirli bir nafaka ödenmesine hükmedilmişse, bu nafakanın Türkiye’de icra takibine konu edilebilmesi için kural olarak tenfiz şarttır. Aynı şekilde, yabancı mahkemenin tazminat veya ödeme borcu öngördüğü her durumda, bu hükmün Türkiye’de cebren uygulanabilir hâle gelmesi için yalnızca kararın tanınmış olması yeterli değildir. İşte boşanmanın tanınması ile boşanma kararının mali sonuçlarının tenfizi arasındaki temel ayrım da bu noktada netleşir.
4. Tanıma ile Tenfiz Arasındaki Fark
Tanıma ile tenfiz arasındaki temel fark, yabancı kararın Türkiye’de yalnızca hukuki sonuç doğurmasının mı, yoksa cebri icra kabiliyeti kazanmasının mı amaçlandığı noktasında ortaya çıkar. Tanıma, kararın varlığını ve bağlayıcılığını kabul eder. Tenfiz ise buna ek olarak kararın Türkiye’de icra edilmesine imkân tanır. Bu nedenle her tenfiz kararı zorunlu olarak tanıma etkisini de içinde barındırır; ancak her tanıma kararı tenfiz sonucu doğurmaz.
Aile hukuku bakımından bu ayrım özellikle önemlidir. Kişinin yalnızca Türkiye’de boşanmış sayılması hedefleniyorsa tanıma yeterli olabilir. Buna karşılık nafaka, tazminat, çocuk teslimi, kişisel ilişki kurulması veya başka bir mali edimin uygulanması talep ediliyorsa tenfiz boyutu ayrıca değerlendirilmelidir. Uygulamada yapılan en yaygın hatalardan biri, yabancı boşanma kararının yalnızca “boşanma” yönüne odaklanılması ve kararın mali hükümlerinin ayrıca ele alınmamasıdır.
Yargıtay görüşü: Yargıtay Hukuk Genel Kurulu’nun yerleşmiş kabulüne göre, tenfiz kararı esasen tanıma kararını da kapsar; ancak yabancı ilamın icrai nitelik taşıyan kısımları bakımından mutlaka tenfiz kararı verilmesi gerekir. Sadece kişinin medeni hâlinde değişiklik öngören kararlar yönünden ise tanıma yeterli görülmektedir.
5. En Fazla Karşılaşılan Tanıma ve Tenfiz Davaları
Uygulamada en sık karşılaşılan tanıma ve tenfiz davalarının başında yabancı boşanma kararlarının tanınması ve tenfizi gelir. Bunun yanında velayet kararları, çocukla kişisel ilişki kurulmasına ilişkin kararlar, nafaka hükümleri, evlat edinme kararları, soybağı ve babalık kararları ile bazı ticari alacak ve tazminat hükümlerine ilişkin yabancı ilamlar da sıklıkla tanıma veya tenfiz talebine konu olmaktadır. Özellikle yurt dışında yaşayan Türk vatandaşları bakımından aile hukukundan kaynaklanan tanıma-tenfiz dosyaları büyük bir yoğunluk arz etmektedir.
Bu davalar içinde en yoğun uygulama alanı, açık ara yabancı boşanma kararlarına aittir. Çünkü boşanma yalnızca medeni hâli etkilemez; mirasçılık, yeniden evlenme, nüfus kayıtları, çocukların hukuki statüsü ve bazen mal rejimi ile nafaka gibi alanları da doğrudan etkiler. Bu nedenle boşanmanın tanınması ya da tenfizi çoğu zaman tek bir teknik dava değil; birden fazla hukuki sonucun başlangıç noktası niteliğindedir.
6. Özellikle Boşanmanın Tanıma ve Tenfizi
Yabancı bir mahkeme veya bazı hukuk sistemlerinde yetkili idari makam tarafından verilmiş boşanma kararının Türkiye’de hüküm doğurabilmesi için, kararın niteliğine göre tanıma, tenfiz veya idari tescil prosedürlerinden uygun olanının işletilmesi gerekir. Yurt dışında boşanmış olmak, tek başına Türkiye bakımından yeterli değildir. Kararın Türkiye’de tanınmaması veya tescil edilmemesi hâlinde, kişi Türk nüfus kayıtlarında evli görünmeye devam eder.
Amaç yalnızca evlilik birliğinin sona erdiğinin Türkiye’de kabul edilmesi ise tanıma çoğu zaman yeterli olur. Ancak kararın içinde nafaka, tazminat, yargılama gideri ya da başka bir mali yükümlülük yer alıyorsa, bu hükümlerin Türkiye’de uygulanabilmesi için ayrıca tenfiz gereklidir. Dolayısıyla her yabancı boşanma kararı bakımından otomatik ve tek tip bir yol bulunmamaktadır; kararın tam metni ve içeriği incelenerek hangi hükmün tanımaya, hangisinin tenfize konu olduğu somut olay özelinde belirlenmelidir.
7. İdari Yol ile Mahkeme Yolu Ayrımı (5490 sk. m. 27/A)
Türk hukukunda yabancı boşanma kararlarının Türkiye’de sonuç doğurması bakımından artık yalnızca klasik tanıma-tenfiz davası yolu bulunmamaktadır. 5490 sayılı Nüfus Hizmetleri Kanunu m. 27/A çerçevesinde, yabancı ülke adli veya idari makamlarınca verilen boşanma, evliliğin butlanı, iptali veya mevcut olup olmadığının tespitine ilişkin kararların belirli şartlarla nüfus kütüğüne idari başvuru yoluyla tescili mümkün kılınmıştır. Bu düzenleme, özellikle yurt dışında boşanan Türk vatandaşları bakımından önemli bir kolaylık sağlamıştır.
İdari tescil yolunun işletilebilmesi için, kural olarak boşanan eşlerin birlikte başvuruda bulunması; kararın kesinleşmiş olması; verildiği ülke hukukuna göre yetkili bir makamca verilmiş bulunması; Türk kamu düzenine açıkça aykırı olmaması ve usulüne uygun apostil ile onaylı Türkçe tercümesinin sunulması gerekir. Başvuru, yurt içinde ilgili il/ilçe nüfus müdürlüklerine; yurt dışında ise dış temsilciliklere yapılabilir.
Ancak idari yol her dosyada kullanılabilir değildir. İdari tescil esas olarak yabancı boşanma kararının nüfus kayıtlarına işlenmesine yöneliktir. Tarafların birlikte başvuru şartını sağlayamaması, belgelerin eksik olması, kararın içeriğinde çekişmeli ya da icrai nitelikte hükümler bulunması veya başvurunun yönetmelik şartlarını karşılamaması durumlarında mahkeme yoluna başvurulması zorunlu hâle gelir. Özellikle yabancı kararın yalnızca medeni hâl bakımından değil, nafaka ya da başka mali sonuçlar bakımından da Türkiye’de uygulanması isteniyorsa, mahkeme önünde tanıma/tenfiz davası açılması kaçınılmazdır.
8. Görevli ve Yetkili Mahkeme
Tanıma ve tenfiz davalarında görevli mahkeme, uyuşmazlığın niteliğine göre belirlenir. Aile hukukundan kaynaklanan yabancı kararların (boşanma, velayet, nafaka, soybağı, evlat edinme vb.) tanınması ve tenfizi davalarında görevli mahkeme, 4787 sayılı Aile Mahkemelerinin Kuruluş, Görev ve Yargılama Usullerine Dair Kanun uyarınca aile mahkemesidir. Aile mahkemesi bulunmayan yerlerde bu davalara aile mahkemesi sıfatıyla asliye hukuk mahkemesi bakar. Ticari nitelikteki davalardan kaynaklanan yabancı ilamların tenfizinde ise asliye ticaret mahkemesi, diğer hukuk davalarında ise asliye hukuk mahkemesi görevlidir.
Yetki bakımından ise MÖHUK m. 51 hükmü uygulanır. Buna göre tenfiz kararı hakkında, kendisine karşı tenfiz istenen kişinin Türkiye’deki yerleşim yeri mahkemesi; Türkiye’de yerleşim yeri yoksa sakin olduğu yer mahkemesi; bu da bulunmuyorsa Ankara, İstanbul veya İzmir mahkemelerinden biri yetkilidir. Tanıma davaları bakımından da uygulamada aynı yetki rejimi esas alınmaktadır.
Bu konu uygulama bakımından son derece önemlidir. Zira yanlış yerde dava açılması, ciddi zaman ve masraf kaybına yol açar. Özellikle eski eşin Türkiye’de yerleşim yerinin bulunmaması, yurt dışında yaşıyor olması veya Türkiye ile bağının zayıf olması hâllerinde Ankara, İstanbul veya İzmir mahkemelerinde dava açılması gündeme gelir. Bu kural, özellikle yurt dışında yaşayan Türk vatandaşlarının boşanma kararlarının tanınması ve tenfizinde sıklıkla uygulanmaktadır.
Yargıtay görüşü: Yargıtay 2. Hukuk Dairesi’nin yerleşik içtihatlarına göre, yabancı mahkemece verilmiş boşanma kararlarının tanınması ve tenfizi davalarında görevli mahkeme aile mahkemesidir. Davanın asliye hukuk mahkemesinde görülmüş olması, görev kuralına aykırılık nedeniyle bozma sebebidir.
9. Tanıma ve Tenfizde Aranan Temel Şartlar
MÖHUK’a göre yabancı mahkeme kararının tenfiz edilebilmesi için öncelikle kararın bir hukuk davasına ilişkin ilam olması ve verildiği ülke hukukuna göre kesinleşmiş bulunması gerekir. Bunun yanında MÖHUK m. 54 uyarınca; (i) Türkiye ile karşılıklılık esası bulunması, (ii) ilamın Türk mahkemelerinin münhasır yetkisine giren bir konuda verilmemiş veya davalı itiraz ederse aşkın yetki teşkil etmemesi, (iii) hükmün kamu düzenine açıkça aykırı olmaması, (iv) davalının savunma hakkının ihlal edilmemiş olması koşulları aranır.
Yabancı kararın tanınması bakımından ise MÖHUK m. 58 hükmü uygulanır. Tanıma için, tenfize ilişkin m. 54 koşullarından karşılıklılık şartı dışındakiler aranır. Bu özellik, özellikle Türkiye’nin karşılıklılık ilişkisi bulunmayan ülkelerde verilen boşanma kararlarının Türkiye’de tanınabilmesi bakımından kritik bir öneme sahiptir.
Uygulamada en fazla tartışılan başlıklar; kesinleşme belgesinin sunulamaması, tebligat ve savunma hakkına ilişkin iddialar, kararın kapsamının yeterince anlaşılamaması ve kamu düzeni itirazlarıdır. Özellikle yabancı dosyada davalının usulüne uygun şekilde çağrılmadığı, karardan haberdar edilmediği veya kendisini savunma imkânı bulamadığı ileri sürülüyorsa, Türk mahkemesi bu hususu titizlikle değerlendirir.
Yargıtay görüşü: Yargıtay’ın istikrar kazanmış içtihatlarına göre, tenfiz hâkimi yabancı ilamın esasını yeniden inceleyemez (révision au fond yasağı). Hâkimin görevi, yalnızca MÖHUK m. 54’te sayılan şartların gerçekleşip gerçekleşmediğini denetlemekle sınırlıdır.
10. Gerekli Belgeler
Yabancı boşanma kararının ister idari yoldan tescili, ister mahkeme yoluyla tanınması ve tenfizi söz konusu olsun, en temel belge yabancı makam tarafından verilmiş kararın aslı veya usulüne uygun onaylı örneğidir. Bunun yanında aşağıdaki belgeler de dosyaya eklenmelidir:
	•	Kararın kesinleştiğini gösteren kesinleşme şerhi ya da ayrıca alınmış kesinleşme belgesi,
	•	Kararın verildiği ülkenin hukukuna göre geçerli onay yöntemi çerçevesinde apostil ya da konsolosluk tasdiki,
	•	Yeminli tercüman tarafından yapılmış ve noter ya da konsoloslukça onaylanmış Türkçe tercüme,
	•	Tarafların kimlik veya pasaport belgeleri ile nüfus kayıt örnekleri,
	•	Vekil aracılığıyla işlem yapılacaksa tanıma-tenfiz davalarına özgü yetkileri içeren özel vekâletname.
Pratikte belge eksikliği, en çok sorun çıkaran alandır. Özellikle yabancı boşanma kararının yalnızca ilk sayfasının ibrazı, kesinleşme şerhinin bulunmaması, tercümenin eksik olması ya da apostil işleminin yapılmamış olması başvurunun reddine veya sürecin uzamasına yol açabilir. Bu nedenle dosya hazırlanırken kararın tam metni, varsa ek protokoller, kesinleşme belgesi ve tercüme/onay süreçleri büyük bir dikkatle tamamlanmalıdır.
11. Boşanmanın Tanıma ve Tenfizinde Karşılaşılan Başlıca Sorunlar
11.1. Kararın Kesinleşmemiş Olması veya Kesinleşmenin İspatlanamaması
En sık karşılaşılan sorunlardan biri, yabancı boşanma kararının kesinleştiğini gösteren yeterli belgenin sunulamamasıdır. Bazı ülkelerde karar metninin içinde kesinleşme şerhi bulunurken, bazı ülkelerde ayrıca bir kesinleşme belgesi alınması gerekir. Kararın henüz temyiz süresi dolmamışsa ya da kesinleşme açık biçimde ortaya konulamıyorsa, tanıma veya tenfiz talebi reddedilebilir; en azından eksiklik giderilinceye kadar sonuçlandırılamaz.
Yargıtay görüşü: Yargıtay 2. HD’nin yerleşik içtihatlarına göre, yabancı ilamın verildiği ülke hukukuna göre kesinleşmiş olduğu hususu ayrıca ve açıkça ispatlanmalıdır. Kesinleşme şerhi veya buna eşdeğer bir belge bulunmaksızın tanıma veya tenfiz kararı verilemez.
11.2. Tarafların Başvuruya Birlikte Katılamaması
İdari yol teoride hızlı olsa da uygulamada tarafların birlikte hareket etmesini gerektiren başvuru düzeni nedeniyle zaman zaman tıkanabilmektedir. Eski eşin başvuru yapmaması, kendisiyle iletişime geçilememesi, yabancı ülkede bulunması veya vekâlet vermemesi hâlinde idari tescil çoğu zaman mümkün olmaz ve mahkeme yoluna dönülür. Tek taraflı başvuru, karşı tarafın sonradan başvurmaması veya belgelerin iki taraf bakımından da tamamlanamaması, uygulamada en sık rastlanan problemler arasındadır.
11.3. Tebligat ve Savunma Hakkı Sorunları
Yabancı yargılamada davalının davadan haberdar edilmediği, usulüne uygun çağrılmadığı veya savunma hakkını kullanamadığı yönündeki iddialar, tanıma-tenfiz dosyalarında başlıca itiraz sebepleri arasında yer alır. Türk mahkemesi, yabancı kararı yeniden esas yönünden incelemez; ancak usul güvencelerinin sağlanıp sağlanmadığını denetler. Bu nedenle özellikle gıyapta verilmiş kararlar, hızlandırılmış boşanma prosedürleri veya davalının katılmadığı yargılamalar daha titiz biçimde incelenir.
Yargıtay görüşü: Yargıtay’a göre davalının yabancı yargılamadan haberdar edilmediği, usulüne uygun şekilde davet edilmediği ve kendisini temsil ettirme imkânı bulamadığı hâllerde MÖHUK m. 54/1-(ç) hükmü gereğince tenfiz talebi reddedilir. Ancak davalının yabancı yargılamaya katılarak savunma yapmış olması veya tebligata rağmen gelmemiş olması hâlinde bu itiraz dinlenmez.
11.4. Kamu Düzeni İtirazı
Kamu düzeni istisnası, tanıma ve tenfizde dar yorumlanmakla birlikte tamamen önemsiz değildir. Yabancı kararın Türkiye’de doğuracağı sonucun Türk hukukunun temel ilkeleriyle açık biçimde çatışması hâlinde tanıma ya da tenfiz engeli gündeme gelebilir. Aile hukuku alanında savunma hakkının ağır biçimde ihlali, çocuğun üstün yararının açıkça zedelenmesi veya temel usul ilkelerine aykırılık içeren durumlar kamu düzeni tartışmasına konu olabilir.
Yargıtay görüşü: Yargıtay’ın yerleşik içtihatlarına göre kamu düzeni istisnası dar yorumlanmalıdır. Yabancı hukukun Türk hukukundan farklı düzenlemeler içermesi, tek başına kamu düzenine aykırılık oluşturmaz. Aykırılığın, Türk hukukunun temel değerlerine ve Anayasa’nın temel hak ve özgürlüklerine doğrudan ve açık biçimde aykırı sonuç doğurması gerekir.
11.5. Kararın Kısmi Tanınması veya Kısmi Tenfizi
Bir yabancı boşanma kararının bütün hükümleri her zaman aynı nitelikte olmayabilir. Kararın boşanma kısmı tanınabilir; buna karşılık nafaka veya mali hükümler bakımından ayrıca tenfiz gerekebilir. Bazen kararın bir bölümü Türkiye’de kabul görürken, başka bir bölümü eksik belge, kamu düzeni veya icra niteliği bulunmaması nedeniyle sonuç doğurmaz. Bu nedenle yabancı boşanma kararının her hükmü tek tek değerlendirilmelidir.
12. Bazı Ülkelerde Boşanma Kararlarında Mal Paylaşımına İlişkin Hüküm Kurulmaması Sorunu
Uygulamada en çok yanlış anlaşılan meselelerden biri, bazı ülkelerde boşanma kararının yalnızca evlilik birliğinin sona erdiğini gösteren bir hüküm içermesi; buna karşılık mal paylaşımı, tasfiye, katkı alacağı veya eşler arasındaki diğer mali uyuşmazlıklara ilişkin hiçbir karar barındırmamasıdır. Birçok hukuk sisteminde boşanma davası ile mal rejiminin tasfiyesi aynı dosyada görülmez; bu hususlar ayrı bir dava veya ayrı bir usule bırakılır. Bu sebeple yabancı boşanma ilamında yalnızca “boşanma” sonucu yer alabilir, mal paylaşımına ilişkin herhangi bir hüküm bulunmayabilir.
Burada kritik nokta şudur: Yabancı boşanma kararının Türkiye’de tanınması, mal paylaşımının da çözüldüğü anlamına gelmez. Eğer yabancı ilamda mal paylaşımına ilişkin bir hüküm yoksa, Türkiye’de tenfiz edilebilecek bir mali hüküm de yoktur. Çünkü tenfiz, var olan yabancı hükmün icra edilebilir hâle getirilmesine yarar; hiç kurulmamış bir hüküm tenfiz yoluyla yeniden yaratılamaz. Dolayısıyla yalnızca boşanma ilamının tanınmış olması, eşler arasındaki mal rejimi uyuşmazlığını otomatik olarak sona erdirmez.
Yargıtay görüşü (Önemli içtihat): Yargıtay Hukuk Genel Kurulu’nun 28.05.2019 tarihli, 2017/2-1607 E. ve 2019/385 K. sayılı kararında açıkça vurgulandığı üzere, yabancı mahkemece verilmiş boşanma kararının Türkiye’de tanınması, eşler arasındaki mal rejiminin tasfiyesi sonucunu doğurmaz. Mal rejiminin tasfiyesi, ayrı ve bağımsız bir dava konusudur. Bu içtihat, uygulamada en sık karşılaşılan yanılgılardan birini gidermesi bakımından son derece önemlidir.
13. Mal Paylaşımı Hükmü Yoksa Ne Gibi Sorunlar Ortaya Çıkar?
İlk sorun, tarafların yanlış biçimde “boşanma tanındıysa artık mal paylaşımı da bitmiştir” düşüncesine kapılmasıdır. Oysa yabancı karar yalnızca medeni hâli değiştirmiş olabilir. Mal paylaşımı hakkında hiçbir hüküm yoksa, bu konuda ayrıca dava açılarak hak aranması gerekir. İkinci sorun, hangi ülke hukukunun uygulanacağı ve hangi mahkemenin yetkili olacağı meselesidir. Üçüncü sorun ise süre ve ispat zorluğudur: kişiler yıllarca yalnızca boşanmanın tanınmasına odaklanıp mali haklarını takip etmediklerinde, sonradan ciddi usul, zamanaşımı ve delil problemleriyle karşılaşabilirler.
Özellikle eşlerin mallarının farklı ülkelerde bulunması; taşınmazların Türkiye’de, banka hesaplarının başka bir ülkede, emeklilik veya sosyal güvenlik haklarının ise üçüncü bir ülkede olması hâlinde uyuşmazlık çok daha karmaşık bir hâl alır. Bu durumda yabancı boşanma kararının tek başına tüm mali sonuçları çözdüğünü varsaymak mümkün değildir. Her bir hakkın niteliği, nerede doğduğu ve hangi hukuk düzenine bağlı olduğu ayrıca incelenmelidir.
14. Boşanma Kararında Mal Paylaşımı Yoksa Türkiye’de Ne Yapılabilir?
Yabancı boşanma kararında mal paylaşımına ilişkin hüküm bulunmuyorsa, Türkiye’de tanınabilecek olan esas olarak boşanmanın kendisidir. Mal rejimi tasfiyesi, katkı payı, katılma alacağı veya diğer mali talepler bakımından ise hangi hukuki yolun izleneceği somut olayın özelliklerine göre değerlendirilmelidir. Bazı hâllerde yabancı ülkede ayrıca dava açılması gerekirken, bazı hâllerde Türk mahkemelerinde bağımsız bir dava ikamesi de gündeme gelebilir. Bu mesele basit bir usul sorunu değil; doğrudan milletlerarası özel hukukun uygulanacak hukuk ve yetki kurallarına ilişkin temel bir meseledir.
Özellikle Türkiye’de bulunan taşınmazlar bakımından Türk hukukunun belirleyiciliği ve Türk mahkemelerinin rolü ayrıca önem kazanır. Buna karşılık salt parasal talepler, edinilmiş mallara katılma veya katkı niteliğindeki alacaklar bakımından farklı bir değerlendirme yapılması gerekebilir. Bu nedenle yabancı boşanma kararında mal paylaşımı hükmü bulunmayan dosyalarda tek bir genel formül uygulanması mümkün değildir; her dosyanın ayrı ayrı ve bütüncül biçimde incelenmesi şarttır.
15. Uygulamada En Sık Yapılan Hatalar
Uygulamada en sık karşılaşılan hata, tanıma ile tenfizi aynı kavram sanmaktır. İkinci yaygın hata, yabancı boşanma kararının yalnızca ilk sayfasına bakılarak bütün hukuki sonuçların anlaşılabileceğini düşünmektir. Oysa kararın tam metni, kesinleşme şerhi, varsa ek protokoller, mali hükümler ve tebligat bilgileri birlikte değerlendirilmelidir. Üçüncü sıradaki hata, yalnızca nüfusa tescili yeterli görmektir. Dördüncü ve belki de en kritik hata ise nafaka, tazminat ve mal paylaşımı gibi mali boyutları ayrıca ele almamaktır.
Bunlara ek olarak apostil, tercüme ve vekâletname gibi teknik belgelerin önemsiz görülmesi de süreci geciktiren önemli bir etkendir. Hem nüfus müdürlüklerinin hem de dış temsilciliklerin yayımladığı bilgilere göre başvuruda usulüne uygun onaylı karar, kimlik belgeleri ve vekil aracılığıyla işlem yapılacaksa özel vekâletname gibi belgeler aranmaktadır. Belge hazırlığındaki küçük görünen eksiklikler, dosyanın reddine veya ciddi gecikmesine yol açabilir.
16. Sonuç
Tanıma ve tenfiz davaları, yabancı mahkeme kararlarının Türkiye’de hangi ölçüde hüküm ve sonuç doğuracağını belirleyen son derece önemli bir hukuk alanıdır. Özellikle boşanma kararları bakımından bu mesele yalnızca medeni hâlin düzeltilmesini değil; aynı zamanda nafaka, velayet, tazminat, mal rejimi, miras ve resmi kayıtlar gibi pek çok alanı doğrudan etkiler. Türk hukukunda bu alanın temel dayanağı MÖHUK’tur; bunun yanında 5490 sayılı Nüfus Hizmetleri Kanunu m. 27/A, yabancı boşanma kararlarının belirli şartlarla nüfus kütüğüne idari yoldan tesciline imkân tanımaktadır.
Ancak özellikle vurgulanması gereken husus şudur: Yabancı boşanma kararının Türkiye’de tanınmış olması, o kararın tüm mali sonuçlarının da otomatik olarak Türkiye’de geçerli sayılması anlamına gelmez. Bilhassa bazı ülkelerde boşanma kararlarında mal paylaşımına ilişkin hüküm kurulmamaktadır. Böyle bir durumda Türkiye’de tanınabilecek olan esasen boşanma statüsüdür; mal paylaşımı bakımından ise hangi ülke hukukunun uygulanacağı, hangi mahkemenin yetkili olduğu ve ortada tenfiz edilebilir bir yabancı hüküm bulunup bulunmadığı somut olay özelinde ayrıca değerlendirilmelidir. Bu nedenle tanıma-tenfiz dosyalarında en kritik husus, yabancı kararın yalnızca varlığını değil, tam olarak hangi konularda hüküm kurduğunu doğru tespit etmek; her hüküm bakımından uygun hukuki yolu (tanıma, tenfiz, idari tescil veya ayrı dava) ayrı ayrı belirlemektir.`,
  "banka-islemleri": String.raw`Yeni vatandaş olduktan sonra banka ve finans işlemleri 

Vatandaşlık aldıktan sonra bazı bankalar sizi hâlâ yabancı müşteri olarak görmeye devam edebilir. Çünkü sistemlerinde eski yabancı kimlik numaranız (YKN) kayıtlıdır. Bu güncellenmezse ileride para transferi, hesap erişimi, kredi işlemleri gibi konularda sorun yaşamanız mümkündür.

Bu nedenle bankada yapılması gereken işlem sadece “kimlik göstermek” değil — sistemsel müşteri güncellemesidir. 

 1. Bankaya bizzat gidip müşteri kaydı güncelleme

Bankaya giderken:
✔ Yeni T.C. kimlik kartı ✔ Eski yabancı kimlik numarası ✔ Pasaport (bazı bankalar ister) ✔ Adres belgesi (bazı bankalar ister)

Bankadan özellikle şunu talep edin:
👉 “Müşteri tipimin yabancıdan Türkiye Cumhuriyeti vatandaşı olarak güncellenmesini istiyorum.”
Bu önemli bir cümle. Çünkü bazı şubeler sadece kimlik fotokopisi alır ama sistemi değiştirmez. Bu işlem de istenirse avukatla beraber yapılabilir.
Bankada teknik olarak yapılan işlem:
Eski müşteri numarası + YKN → T.C. kimlik ile eşleştirilir


 3. IBAN ve hesaplar değişir mi?
Hayır :
✔ IBAN aynı kalır ✔ hesap numarası değişmez ✔ herhangi bir ödeme ve başka kayıp oluşmaz
Ama arka planda sistemsel olarak kimlik güncellenir.
Bazı bankalar yeni müşteri profili açabilir, bu nedenle eski hesapların kapatılmamasını özellikle söyleyin.`,
  "yesil-pasaport": String.raw`Yeşil Pasaport Nedir?
Yeşil pasaport (resmî adıyla hususi damgalı pasaport), normal bordo pasaportun avantajlarına ek olarak birçok ülkeye vizesiz veya kolaylaştırılmış vize ile giriş imkânı sağlayan özel bir pasaport türüdür. Yeşil pasaportla vizesiz seyahat edilebilecek ülkeler arasında Schengen Bölgesi ülkeleri de yer almaktadır.

İhracatçı Şirketlere Tanınan Yeşil Pasaport Hakkı Nedir?
Belirli bir ihracat hacmine ulaşan firmalara, sınırlı sayıda şirket sahibi, ortağı veya çalışanı için yeşil pasaport hakkı tanınmaktadır. Bu uygulamada ölçüt olarak son üç yılda gerçekleştirilen ortalama ihracatın en az 500.000 ABD Doları olması aranmaktadır.
Söz konusu uygulama, ihracatı teşvik amacıyla Ticaret Bakanlığı ve Türkiye İhracatçılar Meclisi koordinasyonunda yürütülmektedir.

İhracatçı Şirketlerin Yeşil Pasaport Almaya Hak Kazanma Şartları
Devlet, ihracatı teşvik etmek amacıyla belirli bir ihracat hacmine ulaşan firmalara sınırlı sayıda yeşil pasaport (hususi damgalı pasaport) hakkı tanımaktadır.
Kimler Başvurabilir?
	•	Şirket sahibi
	•	Şirket ortağı
	•	Şirkette çalışan ve yetkilendirilen kişiler (genellikle yönetici düzeyinde)

Başvuru Koşulları Nelerdir?
	•	Son üç takvim yılında ortalama en az 500.000 ABD Doları ihracat yapılmış olması
	•	Şirketin aktif ve düzenli ihracat faaliyetinde bulunması
	•	Başvurunun Ticaret Bakanlığı onayıyla gerçekleştirilmesi (süreç genellikle Türkiye İhracatçılar Meclisi üzerinden yürütülür)
	•	Verilecek pasaport sayısının ihracat tutarına göre belirlenmesi

İhracat Tutarına Göre Pasaport Hakkı
Aşağıdaki tabloda, son üç yılın ortalama ihracat değerine göre hak kazanılabilecek yeşil pasaport sayıları gösterilmektedir.

Ortalama Yıllık İhracat (Son 3 Yıl)
Verilebilecek Yeşil Pasaport Sayısı
500.000 – 10.000.000 USD
1 kişi
10.000.001 – 25.000.000 USD
2 kişi
25.000.001 – 50.000.000 USD
3 kişi
50.000.001 – 100.000.000 USD
4 kişi
100.000.001 USD ve üzeri
5 kişi

Cari yılda gerçekleşen ihracatın tutarı, Ticaret Bakanlığı tarafından takip eden yılın Ocak ayında VEDOP ve TÜİK aracılığıyla ihracatçı birlikleriyle paylaşılmaktadır. Şartları taşıyan firma sahipleri, ihracatın gerçekleştiği yılı izleyen yılın Şubat ayından itibaren yeşil pasaport başvurusunda bulunabilmektedir.

Hesaplamada Dikkate Alınmayan İhracat Türleri
Aşağıda belirtilen ihracat türleri, yeşil pasaport hakkına esas alınan ihracat hesaplamasında dikkate alınmamaktadır:
	•	ETGB (Elektronik Ticaret Gümrük Beyannamesi) kapsamındaki ihracatlar
	•	Özel fatura ile gerçekleştirilen ihracatlar
	•	Transit ihracatlar
	•	Serbest bölgelere yapılan ihracatlar

Yeşil Pasaport Almaya Hak Kazanan Firma Yetkilileri
Yeşil pasaport hakkı kazanan şirketin E-SGK listesinde kayıtlı çalışanları ile hissedarları adına başvuruda bulunulabilmektedir. Çalışanlar için başvuru tarihinden geriye dönük üç aya ait SGK bildirgelerinin sunulması zorunludur. Hamiline hisse senedi sahipleri bu hak kapsamına dahil değildir.
Firmanın sahibi veya ortaklarının tüzel kişi olması durumunda, söz konusu tüzel kişiliğin sahiplerine, ortaklarına veya çalışanlarına da hususi damgalı pasaport verilebilmektedir.

Yeşil Pasaport Hakkından Yararlanamayacak Kişiler
Şirkete dışarıdan atanan müdürler ya da yönetim kurulu üyeleri; hak kazanan şirketin E-SGK listesinde yer almıyorsa ve şirkette hissedarlığı bulunmuyorsa pasaport başvurusunda bulunamaz. Yalnızca huzur hakkı almak bu konuda yeterli sayılmamaktadır. Hamiline hisseler de geçerli kabul edilmemektedir.
Bunun yanı sıra aşağıdaki durumlardaki firmalar, ihracatçılara tanınan yeşil pasaport hakkından yararlanamaz:
	•	İflas halindeki firmalar
	•	Tasfiye sürecindeki firmalar
	•	Geçici veya kesin konkordato mühleti içindeki firmalar
	•	Tam bölünme gerçekleştirmiş firmalar

İhracatçılara verilen yeşil pasaport, devlet memurlarında olduğu gibi başvuru sahibinin eş ve çocuklarına sağlanan imkânı kapsamaz. Eş ve çocuklar; kontenjan bulunması ve şirkette çalışıyor ya da ortak olmaları koşuluyla ayrıca başvuruda bulunabilir.

Başvuru İçin Gerekli Belgeler
Yeşil pasaport başvurusu sırasında aşağıdaki belgeler talep edilmektedir:
	•	Başvuru dilekçesi
	•	Talep formu
	•	Türkiye Ticaret Sicili Gazetesi'nden şirketin ortaklık durumunu gösteren yazı
	•	Şirketi temsil ve ilzama yetkili kişinin imza sirküleri
	•	Türkiye Cumhuriyeti Kimlik Kartı fotokopisi`,
  "ehliyet-tebdil": String.raw`YABANCILARIN TÜRKİYE’DE ARAÇ KULLANABİLMESİ VE EHLİYET TEBDİL İŞLEMLERİ
Hukuki Çerçeve, Güncel Mevzuat ve Uygulama Rehberi
Genel Çerçeve: Yabancı Ehliyet Tebdili Nedir?
Yabancı sürücü belgesinin tebdili; yurt dışından alınmış geçerli bir sürücü belgesinin, Türkiye Cumhuriyeti makamlarınca düzenlenen Türk sürücü belgesi ile değiştirilmesi işlemidir. Söz konusu işlem, 01/01/2016 tarihinde Emniyet Genel Müdürlüğünden devralındığı tarihten itibaren Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü (NVİGM) tarafından yürütülmekte olup başvurular il ve ilçe nüfus müdürlüklerine yapılmaktadır.
Ancak her yabancı sürücü belgesi tebdile uygun değildir. Tebdil işleminin yapılabilmesi, sürücü belgesinin düzenlendiği ülkenin Türkiye’nin taraf olduğu 1968 tarihli Karayolu Trafiği Konvansiyonu (Viyana) kapsamında bulunmasına ya da Türkiye ile sürücü belgelerinin karşılıklı tanınması ve değişimine ilişkin ikili anlaşma akdetmiş olmasına bağlıdır. Konvansiyona taraf olmayan ve Türkiye ile ikili anlaşması bulunmayan ülkelerden alınan sürücü belgeleri kural olarak Türk sürücü belgesi ile değiştirilemez; bu kişilerin Türkiye’de araç kullanabilmesi için Türk mevzuatına göre yeniden sürücü belgesi alma sürecini tamamlamaları gerekir.
Hukuki Dayanak
Yabancı sürücü belgelerinin Türk sürücü belgesi ile değiştirilmesine ilişkin temel düzenlemeler şu mevzuatta yer almaktadır:
	•	2918 sayılı Karayolları Trafik Kanunu (özellikle 38 ve 42. maddeler).
	•	Karayolları Trafik Yönetmeliği’nin 88. maddesi; yabancı sürücü belgelerinin kullanım süresi ile tebdil edilen yabancı belgelerin ilgili ülkeye iadesi hususunda düzenleyici hüküm içerir.
	•	1968 tarihli Viyana Karayolu Trafiği Konvansiyonu ve bu konvansiyonu tamamlayıcı Avrupa Anlaşması hükümleri.
	•	Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü’nün “Sürücü Belgesi İşlemlerine Dair Uygulama Talimatı”; idari süreci ayrıntılı biçimde düzenler.
	•	5490 sayılı Nüfus Hizmetleri Kanunu; başvuru sırasında alınan biyometrik verilerin işlenmesine ilişkin esasları belirler.
Türkiye’de Yabancı Ehliyetin Kullanım Süresi
Karayolları Trafik Yönetmeliği’nin 88. maddesi uyarınca, Türk vatandaşı olmayan yabancı uyruklu kişiler, dış ülkelerden almış oldukları sürücü belgesini Türkiye’ye son giriş tarihinden itibaren en fazla altı (6) ay süreyle kullanabilirler. Bu süre, pasaporttaki son giriş damgası tarihinden itibaren işlemeye başlar.
Altı aylık sürenin sonunda Türkiye’de araç kullanmaya devam edebilmek için yabancı sürücü belgesinin Türk sürücü belgesi ile değiştirilmesi (tebdil) yasal bir zorunluluktur. Bu süre dolduktan sonra tebdil işlemi yapılmaksızın araç kullanılması, hukuken “sürücü belgesiz araç kullanma” fiili kapsamında değerlendirilmekte ve 2918 sayılı Kanunun 36. maddesi uyarınca idari para cezası ile aracın trafikten men edilmesi gibi ağır yaptırımlara yol açmaktadır.
Bu nedenle Türkiye’de yerleşik hayat kuran, ikamet izni bulunan veya uzun süre kalmayı planlayan yabancılar bakımından ehliyet tebdil işlemi büyük önem taşımaktadır.
Tebdil İşleminden Kimler Yararlanabilir?
Ehliyet tebdili; geçerli bir yabancı sürücü belgesine sahip olan ve belgesi Türkiye bakımından tanınan bir ülkeden düzenlenmiş kişiler için söz konusu olmaktadır. Uygulamada başvuru öncesinde yapılması gereken ilk değerlendirme, sürücü belgesinin düzenlendiği ülkenin Türkiye’nin taraf olduğu uluslararası sözleşmeler veya ikili anlaşmalar kapsamında bulunup bulunmadığının kontrol edilmesidir.
Tebdil işlemi bakımından üç temel kategori bulunmaktadır:
	•	Viyana Konvansiyonuna taraf ülkelerden alınmış belgeler: Doğrudan tebdil edilebilir; teorik veya uygulamalı sınav şartı aranmaz.
	•	Türkiye ile ikili anlaşma akdetmiş ülkelerden alınmış belgeler: İlgili anlaşma hükümleri çerçevesinde tebdil edilebilir.
	•	Konvansiyona taraf olmayan ve ikili anlaşması bulunmayan ülkelerden alınmış belgeler: Tebdil edilemez; ilgili kişinin Türk mevzuatına göre baştan sürücü belgesi alması gerekir.
Bu kategorize edilebilme durumu, başvurunun en başında titizlikle incelenmelidir. Aksi takdirde başvuru sahibinin, ehliyetini Türkiye’de doğrudan değiştirebileceği beklentisiyle hareket etmesi, sonuçsuz bir başvuru ve önemli bir zaman kaybı doğurabilir.
Tebdil Başvurusu Kabul Edilen Ülkeler
Aşağıda; vatandaşları bakımından yabancı sürücü belgesinin Türk sürücü belgesi ile değiştirilmesi (tebdil) mümkün olan ülkelerin listesi sunulmaktadır. Liste üç ana kategoride düzenlenmiştir: 1968 tarihli Karayolu Trafiği Konvansiyonuna taraf ülkeler, Türkiye Cumhuriyeti ile sürücü belgelerinin karşılıklı tanınmasına ilişkin yürürlükte ikili anlaşma akdetmiş ülkeler ve bunlara ek olarak uygulamada tebdil başvurusu kabul edilen diğer ülkeler. Listeler bilgilendirme amaçlı olup, taraflık, anlaşma ve uygulama statüleri zaman içinde güncellenebilmektedir; başvuru öncesinde Nüfus ve Vatandaşlık İşleri Genel Müdürlüğünün resmi internet sayfasından (www.nvi.gov.tr) güncel duruma teyit edilmesi tavsiye olunur.
1968 Karayolu Trafiği Konvansiyonuna Taraf Ülkeler
Aşağıdaki ülkelerden alınmış geçerli sürücü belgeleri, kural olarak teorik veya uygulamalı sınav şartı aranmaksızın Türk sürücü belgesi ile değiştirilebilmektedir:
Almanya
Arnavutluk
Avusturya
Azerbaycan
Bahamalar
Bahreyn
Belçika
Beyaz Rusya (Belarus)
Birleşik Arap Emirlikleri
Bosna-Hersek
Brezilya
Bulgaristan
Çek Cumhuriyeti
Danimarka
Demokratik Kongo Cumhuriyeti
Ekvator
Endonezya
Ermenistan
Estonya
Fas
Fildişi Sahili
Filipinler
Finlandiya
Fransa
Gana
Guyana
Güney Afrika Cumhuriyeti
Güney Kore
Gürcistan
Hırvatistan
Hollanda
İngiltere (Birleşik Krallık)
İran İslam Cumhuriyeti
İspanya
İsrail
İsveç
İsviçre
İtalya
Karadağ
Katar
Kazakistan
Kenya
Kırgızistan
Kostarika
Kuveyt
Küba
Kuzey Makedonya
Letonya
Liberya
Litvanya
Lüksemburg
Macaristan
Meksika
Moğolistan
Moldova
Monako
Nijer
Norveç
Orta Afrika Cumhuriyeti
Özbekistan
Pakistan
Peru
Polonya
Portekiz
Romanya
Rusya Federasyonu
San Marino
Senegal
Seyşeller
Sırbistan
Slovakya
Slovenya
Şili
Tacikistan
Tayland
Tunus
Türkmenistan
Ukrayna
Uruguay
Vatikan
Venezuela
Vietnam
Yunanistan
Zimbabve

Not: Yukarıdaki liste, NVİGM ve Dışişleri Bakanlığı tarafından açıklanan güncel verilere göre derlenmiştir. Türkiye, Birleşmiş Milletler depoziterliğinde yürütülen bu konvansiyona taraf bulunan ülkelerin sürücü belgelerini tanımaktadır. Yeni katılımlar veya çekilmeler nedeniyle liste değişebilir.
Sürücü Belgelerinin Karşılıklı Tanınmasına İlişkin İkili Anlaşma Akdedilmiş Ülkeler
Türkiye Cumhuriyetinin yürürlükteki ikili anlaşmaları kapsamında; aşağıdaki ülkelerden alınan ulusal sürücü belgeleri, ilgili anlaşma hükümleri çerçevesinde Türk sürücü belgesi ile değiştirilebilmektedir:
İspanya Krallığı
Kuzey Kıbrıs Türk Cumhuriyeti
Tunus Cumhuriyeti

Söz konusu ikili anlaşmaların tam metinlerine Nüfus ve Vatandaşlık İşleri Genel Müdürlüğünün “Sürücü Belgelerinin Karşılıklı Olarak Tanınması” başlıklı resmi sayfasından erişilebilmektedir. İspanya, aynı zamanda 1968 Viyana Konvansiyonuna da taraftır; bu nedenle İspanya vatandaşları bakımından her iki dayanak da geçerlidir.
Tebdil Başvurusu Kabul Edilen Diğer Ülkeler
Yukarıda yer alan iki ana kategoriye ek olarak; uluslararası sözleşmelere sonradan katılım, idari uygulamalar veya karşılıklılık esasının fiilen tanınması nedeniyle aşağıdaki ülkelerden alınmış sürücü belgeleri bakımından da tebdil başvurusu kabul edilmektedir:
Andorra
Benin
Cabo Verde
El Salvador
Filistin
Honduras
Irak
Lihtenştayn
Maldivler
Mısır
Myanmar
Nijerya
Suudi Arabistan
Uganda


Önemli uyarı: Bu kategorideki ülkeler bakımından uygulamada zaman zaman ilgili nüfus müdürlüğünün takdiri, belge doğrulama süreçleri ve güncel iç yazışmalar belirleyici olabilmektedir. Bu nedenle başvuru öncesinde dosyanın hukuki açıdan ön incelemeden geçirilmesi ve NVİGM’den güncel statünün teyit edilmesi büyük önem taşımaktadır.
Tebdil Edilemeyen Sürücü Belgeleri
Yukarıda yer alan üç kategorinin dışındaki ülkelerden alınan sürücü belgeleri, kural olarak Türk sürücü belgesi ile değiştirilemez. Bu ülkelerin vatandaşları, Türkiye’de araç kullanabilmek için Türk mevzuatına göre yeniden sürücü belgesi alma sürecine tabidirler; yani sürücü kursuna kayıt olarak Milli Eğitim Bakanlığı tarafından düzenlenen teorik ve uygulamalı sınavlara girmeleri gerekmektedir.
Geçici nitelikte düzenlenmiş yabancı sürücü belgeleri ile diplomatik muafiyet kapsamındaki belgeler bakımından da özel hükümler uygulanmakta olup; bu durumlarda dosyanın hukuki değerlendirmesi ayrıca yapılmalıdır.
Başvuru İçin Gerekli Belgeler
Nüfus ve Vatandaşlık İşleri Genel Müdürlüğünün yürürlükteki Uygulama Talimatı uyarınca, dış ülkelerden alınan sürücü belgelerinin Türk sürücü belgesi ile değiştirilmesi başvurusunda aşağıdaki belgelerin ibrazı veya elektronik ortamdan teyidi gerekmektedir:
	•	Yabancı sürücü belgesinin aslı ve renkli fotokopisi.
	•	Yabancı sürücü belgesinin noter veya konsolosluk onaylı Türkçe tercümesi.
	•	Kimlik belgesi (geçerli pasaport ve/veya Türkiye Cumhuriyeti tarafından verilmiş ikamet izni kartı).
	•	Sürücü sağlık raporu (kişinin sürücü belgesi almaya elverişli olduğunu gösterir; özel ya da kamu hastanelerinden randevusuz olarak temin edilebilir).
	•	Öğrenim belgesi (yurt dışından alınmış ise noter tasdikli Türkçe tercümesi ile birlikte).
	•	Adli sicil kaydı belgesi.
	•	Sürücü belgesi değerli kâğıt bedeli, harç bedeli ve vakıf payının ödendiğine ilişkin bilgi (ödeme bilgileri sistem üzerinden görüntülenebildiğinden başvuruda ayrıca dekont talep edilmemektedir).
	•	Bir adet biyometrik fotoğraf (son altı ay içinde çekilmiş, ICAO standartlarına uygun).
	•	Kan grubunu belirtir belge ya da sözlü/yazılı beyan.

Önemli not: Yabancı ülkede düzenlenen sürücü belgesinin Türkçe tercümesinin noter veya konsolosluk onaylı olması zorunludur. Belgenin içeriği okunaklı değilse, sınıf bilgileri açık biçimde anlaşılmıyorsa veya belge üzerinde tereddüt doğuran hususlar bulunuyorsa nüfus müdürlüğü ilgili ülkeden teyit talep edebilmekte ve bu durum başvurunun aylarca uzamasına neden olabilmektedir. Bu nedenle dosyanın başvuru öncesinde uzman bir avukat tarafından incelenmesi büyük pratik fayda sağlamaktadır.
Başvuru Süreci ve Randevu Sistemi
Yabancı sürücü belgesinin tebdiline ilişkin başvurular, yalnızca randevu alınarak ve şahsen yapılmaktadır. Randevu işlemi aşağıdaki kanallardan gerçekleştirilebilir:
	•	İnternet üzerinden: https://randevu.nvi.gov.tr adresinden “Sürücü Belgesi – Yabancı Sürücü Belgesi Değiştirme (Tebdil)” kategorisi seçilerek.
	•	Telefon ile: Alo 199 çağrı merkezi aracılığıyla.
	•	Mobil uygulama: NVİGM tarafından sunulan “NVİ Mobil” uygulaması üzerinden.

Başvuru sahiplerinin randevu saatlerinden en az otuz dakika önce nüfus müdürlüğünde hazır bulunmaları beklenmekte; randevu saatini otuz dakikadan fazla geçirenlerin başvuruları yalnızca sıra yoğunluğu uygun olduğu takdirde alınmaktadır.
Başvuru kabul edildikten sonra; kimlik ve adres bilgileri kontrol edilmekte, sistemden başvuru formu oluşturulmakta, kişiden imza, biyometrik fotoğraf ve parmak izi alınmakta ve başvuru formunun çıktısı onaylatılarak veri tabanına kaydedilmektedir. Sürücü belgesi, basım sürecinin ardından PTT aracılığıyla başvuru sırasında bildirilen adrese ücretsiz olarak teslim edilmektedir.
Şahsen Başvuru Zorunluluğu
Sürücü belgesi başvuruları, vekâletname ile yapılamaz. Nüfus ve Vatandaşlık İşleri Genel Müdürlüğünün resmi açıklamalarında ve Uygulama Talimatında açıkça düzenlendiği üzere, sürücü belgesi müracaatları bizzat şahsın kendisi tarafından yapılır. Bunun temel nedeni, başvuru sırasında parmak izi, imza ve biyometrik fotoğraf alınması; ayrıca kişinin kendisinin doğrulanması zorunluluğudur.
Dolayısıyla, yabancının bir avukat veya başka bir temsilci aracılığıyla sürücü belgesi başvurusunu yaptırabilmesi mümkün değildir. Ancak avukatın rolü; başvuru öncesi dosya hazırlığı, tercüme süreçlerinin yönetimi, belge teyit yazışmaları, randevu organizasyonu ve gerektiğinde belgenin teslim alınması (vekâletnamede açıkça yetki verilmiş olmak şartıyla) gibi hazırlık ve sonrası aşamalarda büyük önem taşımaktadır.
Yabancılara Düzenlenen Türk Sürücü Belgesinin Özellikleri
NVİGM Uygulama Talimatı uyarınca, yabancılara verilen Türk sürücü belgeleri üzerine kod tablosundan “Ticari Araç Kullanamaz” kodu işlenmektedir. Bu kod; söz konusu sürücü belgesi ile ticari nitelikte araç kullanılamayacağı, yalnızca özel araç kullanımının mümkün olduğu anlamına gelmektedir.
Söz konusu kısıtlama, Türk vatandaşları ile 5203 sayılı Kanun kapsamında “Mavi Kart” sahibi olan kişiler bakımından uygulanmamaktadır. Türkiye’de ticari amaçla araç kullanmak isteyen yabancıların, Türk vatandaşlığını kazanmaları veya çalışma izni, ikamet statüsü ve sürücü belgesi sınıfı bakımından özel mevzuat değerlendirmesi yaptırmaları gerekmektedir.
Tebdil Edilen Yabancı Sürücü Belgesinin Akıbeti
Karayolları Trafik Yönetmeliğinde Değişiklik Yapılmasına Dair Yönetmeliğin 88. maddesi; “ülkemiz sürücü belgeleri ile değiştirilen dış ülkelerden alınmış sürücü belgeleri ilgili ülkeye gönderilir” hükmünü amirdir.
Bu kapsamda tebdil işlemi sonrasında, başvuru sahibinin teslim ettiği yabancı sürücü belgesi kendisine iade edilmemekte; ilgili ülkenin yetkili makamlarına dosyasına konulmak üzere gönderilmektedir. Bu husus, başvurudan önce dikkate alınması gereken kritik bir noktadır; çünkü tebdil işleminin tamamlanmasıyla birlikte kişi, artık menşe ülkenin sürücü belgesini taşımayacak; yalnızca Türk sürücü belgesine sahip olacaktır.
Başvuru Ücretleri
Sürücü belgesi başvuru ücretleri, her takvim yılı başında Hazine ve Maliye Bakanlığı tarafından yeniden değerleme oranı dikkate alınarak güncellenmektedir. Tebdil işlemi bakımından ödenmesi gereken kalemler şunlardır:
	•	Harç bedeli (sürücü belgesi sınıfına göre değişiklik gösterir).
	•	Değerli kâğıt bedeli.
	•	Vakıf hizmet bedeli (Türk Polis Teşkilatını Güçlendirme Vakfı payı).

Ödemeler; vergi dairesi müdürlüklerine, PTT şubelerine, anlaşmalı bankalara veya Gelir İdaresi Başkanlığının https://ivd.gib.gov.tr internet adresi üzerinden yapılabilmektedir. Sürücü belgesi sınıfına göre güncel toplam tutarın başvuru öncesinde NVİGM’nin resmi internet sayfasından kontrol edilmesi gerekmektedir.
Tebdil Sürecinde Sık Karşılaşılan Sorunlar
Uygulamada en sık karşılaşılan ve başvurunun reddi ya da uzun süre sürüncemede kalması ile sonuçlanan sorunların başlıcaları şunlardır:
	•	Tebdile uygun olmayan ülkeden alınmış belgeler: Konvansiyon veya ikili anlaşma kapsamı dışındaki ülkelerden alınan belgelerle başvuru yapılması.
	•	Tercüme eksiklikleri: Tercümenin yeminli tercüman, noter veya konsolosluk onayı bulunmaması; sınıf, geçerlilik tarihi gibi bilgilerin tercümede eksik veya yanlış aktarılması.
	•	Belge sınıflarının okunmaması: Eski tip veya yıpranmış belgelerde sınıf bilgilerinin net okunamaması nedeniyle ilgili ülkeden teyit istenmesi ve sürecin uzaması.
	•	Belgenin gerçekliği konusunda tereddüt: Düzenleyen ülkenin yetkili makamlarından doğrulama yazısı talep edilmesi; bu durum başvurunun aylarca uzamasına yol açabilmektedir.
	•	Dosya eksikliği: Sağlık raporu, adli sicil kaydı, öğrenim belgesi tercümesi gibi belgelerin eksik veya hatalı sunulması.
	•	Altı aylık sürenin aşılması: Süre aşıldıktan sonra araç kullanılması durumunda idari para cezası ve aracın trafikten men edilmesi gibi yaptırımlarla karşılaşılması.

Özellikle ehliyetin düzenlendiği ülkenin uluslararası sözleşme veya ikili anlaşma kapsamında olup olmadığı, dosyanın en başında analiz edilmelidir. Aksi hâlde başvuru sahibi, ehliyetini Türkiye’de doğrudan değiştirebileceği beklentisiyle hareket ederken, yeniden sürücü belgesi alma süreciyle karşı karşıya kalabilir. Bu hukuki ve idari ayrım, başvuru öncesinde doğru biçimde değerlendirilmelidir.
Hukuki Değerlendirme ve Danışmanlık Hizmetinin Önemi
Ehliyet tebdil işlemi ilk bakışta basit bir idari başvuru gibi görünse de, özellikle yabancılar bakımından ikamet statüsü, yabancı belgenin niteliği, tercüme ve onay prosedürü, belge doğrulaması ve tebdile uygunluk analizi gibi birden çok husus birlikte değerlendirilmelidir. Yanlış ülke değerlendirmesi, eksik belge sunulması veya usule aykırı tercüme işlemleri başvurunun uzamasına ya da sonuçsuz kalmasına yol açabilmektedir.
Hukuk büromuz, Türkiye’de yerleşik hayat kuran ya da uzun süreli kalış planlayan yabancı uyruklu müvekkillere; başvuru dosyasının ön incelemesi, tebdile uygunluk değerlendirmesi, tercüme ve noter onay süreçlerinin yönetimi, NVİGM ile yürütülecek yazışmalar, sağlık raporu ve adli sicil temini gibi süreçlerde uçtan uca hukuki danışmanlık hizmeti sunmaktadır. Başvuru öncesinde dosyanın hukuki ve pratik açıdan incelenmesi, sürecin daha hızlı, güvenli ve öngörülebilir biçimde ilerlemesini sağlamaktadır.
Konuya ilişkin somut durumunuza özgü hukuki değerlendirme için büromuzdan randevu talep edebilirsiniz.`,
} as const;

type LegalDocumentSource = {
  navLabel: string;
  title: string;
  summary: string;
  text: string;
};

const LEGAL_DETAIL_PAGES = {
  "vergi-muafiyeti": {
    navLabel: "Vergi Muafiyeti",
    title: "Taşınmaz Teslimlerinde KDV İstisnası",
    summary: "3065 sayılı KDV Kanunu 13/i maddesi kapsamında taşınmaz teslimlerinde KDV istisnası hakkında kapsamlı hukuki rehber.",
    text: LEGAL_DOCUMENT_TEXTS["vergi-muafiyeti"],
  },
  "tapu-islemleri": {
    navLabel: "Tapu İşlemleri",
    title: "Tapu Kaydının Türk Kimliğine Göre Güncellenmesi",
    summary: "Türk vatandaşlığı kazanımı sonrası tapu kayıtlarının Türk kimliği bilgilerine göre güncellenmesi işlemi.",
    text: LEGAL_DOCUMENT_TEXTS["tapu-islemleri"],
  },
  "emlak-vergisi-beyannamesi": {
    navLabel: "Emlak Vergisi Beyannamesi",
    title: "Emlak Beyanı ve Emlak Vergisi",
    summary: "Türkiye’de taşınmaz sahibi yabancılar için emlak beyanı ve emlak vergisi yükümlülükleri.",
    text: LEGAL_DOCUMENT_TEXTS["emlak-vergisi-beyannamesi"],
  },
  "kira-geliri-vergisi": {
    navLabel: "Kira Geliri Vergisi",
    title: "Kira Geliri Vergisi",
    summary: "Türkiye’de kira geliri elde eden yabancılara yönelik vergi rehberi.",
    text: LEGAL_DOCUMENT_TEXTS["kira-geliri-vergisi"],
  },
  "kira-hukuku-davalari": {
    navLabel: "Kira Hukuku Davaları",
    title: "Kira Hukukundan Kaynaklanan Davalar ve Tahliye Süreçleri",
    summary: "Kira hukukundan kaynaklanan davalar ve tahliye süreçleri hakkında kapsamlı rehber.",
    text: LEGAL_DOCUMENT_TEXTS["kira-hukuku-davalari"],
  },
  "veraset-ilami": {
    navLabel: "Miras Davaları",
    title: "Veraset İlamı",
    summary: "Veraset ilamının hukuki niteliği, süreç, belgeler ve yabancılık unsuru bakımından kapsamlı değerlendirme.",
    text: LEGAL_DOCUMENT_TEXTS["veraset-ilami"],
  },
  "nufus-kaydi-duzeltme": {
    navLabel: "Nüfus Kaydı Düzeltme",
    title: "Nüfus Kaydının Düzeltilmesi Davası",
    summary: "Nüfus kayıtlarının düzeltilmesi, aile kaydı birleştirme ve babalık davalarına ilişkin hukuki rehber.",
    text: LEGAL_DOCUMENT_TEXTS["nufus-kaydi-duzeltme"],
  },
  "tanima-tenfiz": {
    navLabel: "Tenfiz Davaları",
    title: "Tanıma ve Tenfiz Davaları",
    summary: "Yabancı mahkeme kararlarının Türkiye’de hüküm ve sonuç doğurması için tanıma ve tenfiz süreçleri.",
    text: LEGAL_DOCUMENT_TEXTS["tanima-tenfiz"],
  },
  "banka-islemleri": {
    navLabel: "Banka İşlemleri",
    title: "Yeni Vatandaş Olduktan Sonra Banka ve Finans İşlemleri",
    summary: "Vatandaşlık sonrası banka müşteri kaydının Türk kimliğiyle güncellenmesi ve finans işlemleri.",
    text: LEGAL_DOCUMENT_TEXTS["banka-islemleri"],
  },
  "yesil-pasaport": {
    navLabel: "Yeşil Pasaport",
    title: "Yeşil Pasaport",
    summary: "İhracatçı şirketlere tanınan yeşil pasaport hakkı, başvuru şartları ve süreç bilgileri.",
    text: LEGAL_DOCUMENT_TEXTS["yesil-pasaport"],
  },
  "ehliyet-tebdil": {
    navLabel: "Ehliyet Tebdil İşlemleri",
    title: "Ehliyet Tebdil İşlemleri",
    summary: "Yabancıların Türkiye’de araç kullanabilmesi ve yabancı ehliyetin Türk sürücü belgesine çevrilmesi süreci.",
    text: LEGAL_DOCUMENT_TEXTS["ehliyet-tebdil"],
  },
} satisfies Record<string, LegalDocumentSource>;

export type LegalDetailSlug = keyof typeof LEGAL_DETAIL_PAGES;

export type LegalDetailPageData = {
  slug: LegalDetailSlug;
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
  copy: {
    metadata: {
      breadcrumbLabel: string;
      title: string;
      description: string;
    };
    hero: {
      summary: string;
      imageAlt: string;
      backgroundImage: string;
    };
    sections: PageSection[];
  };
};

export type LegalOverviewPageData = {
  lang: string;
  dir: "ltr" | "rtl";
  homeLabel: string;
  backLabel: string;
  relatedTitle: string;
  consultationLabel: string;
  cta: LegalDetailPageData["cta"];
  copy: {
    metadata: {
      breadcrumbLabel: string;
      title: string;
      description: string;
    };
    hero: {
      summary: string;
      backgroundImage: string;
    };
    sections: PageSection[];
  };
};

type LegalDictionaryLike = {
  lang?: string;
  dir?: string;
  nav?: {
    home?: string;
    mega_leg?: string;
    contact?: string;
    faq?: string;
  };
};

const UI: Record<
  SeoLocale,
  {
    relatedTitle: string;
    consultationLabel: string;
    ctaTitle: string;
    ctaDescription: string;
  }
> = {
  tr: {
    relatedTitle: "Diğer Hukuki Başlıklar",
    consultationLabel: "Danışmanlık",
    ctaTitle: "Dosyanızı birlikte planlayalım",
    ctaDescription:
      "Uygunluk, belge akışı ve başvuru sırasını birlikte değerlendirelim.",
  },
  en: {
    relatedTitle: "Other Legal Topics",
    consultationLabel: "Consultation",
    ctaTitle: "Let us plan your file together",
    ctaDescription:
      "We can review eligibility, document flow, and filing order together.",
  },
  ru: {
    relatedTitle: "Другие правовые темы",
    consultationLabel: "Консультация",
    ctaTitle: "Давайте спланируем ваше досье вместе",
    ctaDescription:
      "Вместе оценим соответствие условиям, комплект документов и порядок подачи.",
  },
  ar: {
    relatedTitle: "مواضيع قانونية أخرى",
    consultationLabel: "استشارة",
    ctaTitle: "لنخطط ملفك معاً",
    ctaDescription:
      "يمكننا مراجعة الأهلية وتسلسل المستندات وترتيب التقديم معاً.",
  },
  fa: {
    relatedTitle: "سایر موضوعات حقوقی",
    consultationLabel: "مشاوره",
    ctaTitle: "بیایید پرونده شما را با هم برنامه ریزی کنیم",
    ctaDescription:
      "می توانیم شرایط احراز، جریان مدارک و ترتیب ثبت پرونده را با هم بررسی کنیم.",
  },
};

export const LEGAL_DETAIL_SLUGS = Object.keys(
  LEGAL_DETAIL_PAGES
) as LegalDetailSlug[];

export const LEGAL_DETAIL_DYNAMIC_SLUGS = LEGAL_DETAIL_SLUGS.filter(
  (slug) => !STATIC_LEGAL_SLUGS.includes(slug as (typeof STATIC_LEGAL_SLUGS)[number])
);

function hasRenderableText(value?: string) {
  return Boolean(value && value.trim().length > 0);
}

function isBulletLine(line: string) {
  return /^(?:[•✔👉-]|[a-zçğıöşü]\)|[0-9]+\))\s*/i.test(line);
}

function isAllCapsHeading(line: string) {
  const letters = line.replace(/[^A-Za-zÇĞİÖŞÜçğıöşü]/g, "");
  if (letters.length < 8) return false;
  return letters === letters.toLocaleUpperCase("tr-TR");
}

function isHeading(line: string, index: number) {
  if (index === 0) return true;
  if (/^\d+(?:\.\d+)*[.)]?\s+/.test(line)) return true;
  if (/^[IVXLCDM]+\.\s+/.test(line)) return true;
  if (/^(BÖLÜM|AŞAMA|Adım)\s+/i.test(line)) return true;
  if (/^(Giriş|Sonuç|Hukuki Dayanak|Kimler Başvurabilir?|Başvuru Koşulları Nelerdir?|Gerekli Belgeler|Sık Sorulan Sorular)$/i.test(line)) return true;
  return isAllCapsHeading(line);
}

function createIntro(title?: string): Extract<PageSection, { type: "intro" }> {
  return {
    type: "intro",
    title,
    paragraphs: [],
  };
}

function buildSectionsFromDocumentText(text: string): PageSection[] {
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
    if (hasRenderableText(intro.title) || intro.paragraphs.some(hasRenderableText)) {
      sections.push(intro);
    }
    intro = null;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (
      line === "Aşama" &&
      i + 1 < lines.length &&
      lines[i + 1] === "Açıklama" &&
      i + 2 < lines.length &&
      /^\d+\.\s+/.test(lines[i + 2])
    ) {
      flushBullets();
      flushIntro();

      const headers = ["Aşama", "Açıklama"];
      const rows: string[][] = [];
      let tempIndex = i + 2;

      while (
        tempIndex < lines.length &&
        /^\d+\.\s+/.test(lines[tempIndex]) &&
        tempIndex + 1 < lines.length
      ) {
        rows.push([lines[tempIndex], lines[tempIndex + 1]]);
        tempIndex += 2;
      }

      sections.push({
        type: "table",
        headers,
        rows,
      });

      i = tempIndex - 1;
      continue;
    }

    if (isBulletLine(line)) {
      if (intro) {
        intro.paragraphs.push(line);
      } else {
        bulletItems.push(line);
      }
      continue;
    }

    flushBullets();

    if (isHeading(line, i)) {
      flushIntro();
      intro = createIntro(line);
      continue;
    }

    intro ??= createIntro();
    intro.paragraphs.push(line);
  }

  flushBullets();
  flushIntro();

  return sections;
}

function getEntry(slug: string) {
  return LEGAL_DETAIL_PAGES[slug as LegalDetailSlug] ?? null;
}

function getCanonicalPath(locale: string, slug: string) {
  return "/" + locale + PAGE_PATH_PREFIX + "/" + slug;
}

function getPageUrl(locale: string, slug: string) {
  return SITE_URL + getCanonicalPath(locale, slug);
}

export function buildLegalDetailStaticParams() {
  return SUPPORTED_LOCALES.flatMap((lang) =>
    LEGAL_DETAIL_DYNAMIC_SLUGS.map((slug) => ({ lang, slug }))
  );
}

export async function getLegalOverviewPageData(
  locale: string
): Promise<LegalOverviewPageData> {
  const dict = (await getDictionary(locale)) as LegalDictionaryLike;
  const safeLocale = getSafeLocale(locale);
  const ui = UI[safeLocale] ?? UI.tr;
  const fallbackDict =
    locale === "tr"
      ? dict
      : ((await getDictionary("tr")) as LegalDictionaryLike);
  const lang = dict.lang ?? safeLocale;
  const backLabel =
    dict.nav?.mega_leg ?? fallbackDict.nav?.mega_leg ?? "Hukuki Hizmetler";

  return {
    lang,
    dir: dict.dir === "rtl" ? "rtl" : "ltr",
    homeLabel: dict.nav?.home ?? fallbackDict.nav?.home ?? "Home",
    backLabel,
    relatedTitle: ui.relatedTitle,
    consultationLabel: ui.consultationLabel,
    cta: {
      title: ui.ctaTitle,
      description: ui.ctaDescription,
      primaryCta:
        dict.nav?.contact ?? fallbackDict.nav?.contact ?? "Bizimle İletişime Geç",
      secondaryCta: dict.nav?.faq ?? fallbackDict.nav?.faq ?? "SSS",
    },
    copy: {
      metadata: {
        breadcrumbLabel: backLabel,
        title: backLabel,
        description:
          "Hukuki hizmetler, vergi, tapu, banka, kira, miras, nüfus kaydı, tenfiz, yeşil pasaport ve ehliyet tebdil başlıkları.",
      },
      hero: {
        summary:
          "Hukuki hizmetler, vergi, tapu, banka, kira, miras, nüfus kaydı, tenfiz, yeşil pasaport ve ehliyet tebdil başlıkları.",
        backgroundImage: "/hero/hukuki-hizmetler.jpg",
      },
      sections: [
        {
          type: "numbered",
          title: backLabel,
          items: LEGAL_DETAIL_SLUGS.map((slug) => ({
            title: LEGAL_DETAIL_PAGES[slug].navLabel,
            desc: LEGAL_DETAIL_PAGES[slug].summary,
          })),
        },
      ],
    },
  };
}

export async function getLegalDetailPageData(
  locale: string,
  slug: string
): Promise<LegalDetailPageData | null> {
  const entry = getEntry(slug);
  if (!entry) return null;

  const dict = (await getDictionary(locale)) as LegalDictionaryLike;
  const safeLocale = getSafeLocale(locale);
  const ui = UI[safeLocale] ?? UI.tr;
  const fallbackDict =
    locale === "tr"
      ? dict
      : ((await getDictionary("tr")) as LegalDictionaryLike);
  const lang = dict.lang ?? safeLocale;

  return {
    slug: slug as LegalDetailSlug,
    lang,
    dir: dict.dir === "rtl" ? "rtl" : "ltr",
    homeLabel: dict.nav?.home ?? fallbackDict.nav?.home ?? "Home",
    backLabel:
      dict.nav?.mega_leg ?? fallbackDict.nav?.mega_leg ?? "Hukuki Hizmetler",
    relatedTitle: ui.relatedTitle,
    relatedLinks: LEGAL_DETAIL_SLUGS.filter((itemSlug) => itemSlug !== slug).map(
      (itemSlug) => ({
        label: LEGAL_DETAIL_PAGES[itemSlug].navLabel,
        slug: itemSlug,
        href: "/" + lang + PAGE_PATH_PREFIX + "/" + itemSlug,
      })
    ),
    consultationLabel: ui.consultationLabel,
    cta: {
      title: ui.ctaTitle,
      description: ui.ctaDescription,
      primaryCta:
        dict.nav?.contact ?? fallbackDict.nav?.contact ?? "Bizimle İletişime Geç",
      secondaryCta: dict.nav?.faq ?? fallbackDict.nav?.faq ?? "SSS",
    },
    copy: {
      metadata: {
        breadcrumbLabel: entry.title,
        title: entry.title,
        description: entry.summary,
      },
      hero: {
        summary: entry.summary,
        imageAlt: entry.title + " sayfası görseli",
        backgroundImage: "/hero/hukuki-hizmetler.jpg",
      },
      sections: buildSectionsFromDocumentText(entry.text),
    },
  };
}

export async function buildLegalDetailMetadata(
  locale: string,
  slug: string
): Promise<Metadata> {
  const data = await getLegalDetailPageData(locale, slug);
  if (!data) return {};

  const safeLocale = getSafeLocale(data.lang);
  const alternates = Object.fromEntries(
    SUPPORTED_LOCALES.map((targetLocale) => [
      targetLocale,
      getCanonicalPath(targetLocale, data.slug),
    ])
  );

  return {
    title: data.copy.metadata.title + " | CitizenshipWeb",
    description: data.copy.metadata.description,
    alternates: {
      canonical: getCanonicalPath(safeLocale, data.slug),
      languages: {
        ...alternates,
        "x-default": getCanonicalPath("en", data.slug),
      },
    },
    openGraph: {
      title: data.copy.metadata.title,
      description: data.copy.metadata.description,
      url: getCanonicalPath(safeLocale, data.slug),
      type: "article",
      siteName: "CitizenshipWeb",
      images: [
        {
          url: "/hero/hukuki-hizmetler.jpg",
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
      images: ["/hero/hukuki-hizmetler.jpg"],
    },
  };
}

export async function buildLegalOverviewMetadata(
  locale: string
): Promise<Metadata> {
  const data = await getLegalOverviewPageData(locale);
  const safeLocale = getSafeLocale(data.lang);
  const alternates = Object.fromEntries(
    SUPPORTED_LOCALES.map((targetLocale) => [
      targetLocale,
      getCanonicalPath(targetLocale, "").slice(0, -1),
    ])
  );

  return {
    title: data.copy.metadata.title + " | CitizenshipWeb",
    description: data.copy.metadata.description,
    alternates: {
      canonical: "/" + safeLocale + PAGE_PATH_PREFIX,
      languages: {
        ...alternates,
        "x-default": "/en" + PAGE_PATH_PREFIX,
      },
    },
    openGraph: {
      title: data.copy.metadata.title,
      description: data.copy.metadata.description,
      url: "/" + safeLocale + PAGE_PATH_PREFIX,
      type: "website",
      siteName: "CitizenshipWeb",
      images: [
        {
          url: "/hero/hukuki-hizmetler.jpg",
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
      images: ["/hero/hukuki-hizmetler.jpg"],
    },
  };
}

export async function buildLegalDetailSchemas(locale: string, slug: string) {
  const data = await getLegalDetailPageData(locale, slug);
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
      primaryImageOfPage: SITE_URL + "/hero/hukuki-hizmetler.jpg",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: data.homeLabel,
          item: SITE_URL + "/" + safeLocale,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: data.backLabel,
          item: SITE_URL + "/" + safeLocale + PAGE_PATH_PREFIX,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: data.copy.metadata.breadcrumbLabel,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "CitizenshipWeb Legal & Immigration Advisory",
      url: SITE_URL + "/" + safeLocale + "/contact",
      description: data.copy.metadata.description,
      areaServed: "TR",
      telephone: "+90 532 449 47 28",
      email: "info@turkeyinvestmentcitizenship.com",
    },
  ];
}

export async function buildLegalOverviewSchemas(locale: string) {
  const data = await getLegalOverviewPageData(locale);
  const safeLocale = getSafeLocale(data.lang);
  const pageUrl = SITE_URL + "/" + safeLocale + PAGE_PATH_PREFIX;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: data.copy.metadata.title,
      description: data.copy.metadata.description,
      url: pageUrl,
      inLanguage: safeLocale,
      primaryImageOfPage: SITE_URL + "/hero/hukuki-hizmetler.jpg",
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: data.copy.metadata.title,
      itemListElement: LEGAL_DETAIL_SLUGS.map((slug, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "LegalService",
          name: LEGAL_DETAIL_PAGES[slug].title,
          description: LEGAL_DETAIL_PAGES[slug].summary,
          url: SITE_URL + "/" + safeLocale + PAGE_PATH_PREFIX + "/" + slug,
        },
      })),
    },
  ];
}
