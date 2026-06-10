import type { PageSection } from "@/components/ServicePageLayout";
import type { SeoLocale } from "@/lib/seo";

type CitizenshipDetailPageCopy = {
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

const PASSPORT_ADVANTAGES_TEXT = String.raw`TÜRK PASAPORTUNUN AVANTAJLARI
Yatırımdan Vatandaşlığa, Vatandaşlıktan Küresel Geleceğe
Türkiye’de yapacağınız doğru yatırım, sadece bir mülk ya da bir hesap değildir; bir vatandaşlık, bir pasaport ve nesillere uzanan bir gelecektir.

BÖLÜM 1. TÜRK PASAPORTUNA GENEL BAKIŞ
Türk pasaportu, Türkiye Cumhuriyeti’nin köklü diplomatik ağı, geniş seyahat erişimi ve sağlam hukuki güvenceleri ile dünyanın en stratejik orta segment pasaportları arasında yer almaktadır. Türkiye, dünya genelindeki büyükelçilik ve başkonsolosluk sayısı bakımından ilk sıralardaki ülkeler arasında bulunmakta; bu geniş temsil ağı, Türk vatandaşlarının yurt dışındaki konsolosluk hizmetlerine kolay ve hızlı erişimini güvence altına almaktadır.
Henley Passport Index’in 2026 yılı verilerine göre Türkiye, 113 ülkeye vizesiz veya kapıda vize kolaylığı sağlayan Türk pasaportu ile dünya sıralamasında 46. konumda yer almaktadır. Bu konum, Türk pasaportunu küresel ölçekte orta-üst segment, bölgesel ölçekte ise güçlü ve saygın bir pasaport olarak nitelendirmektedir. Avrupa, Asya, Orta Doğu, Afrika ve Latin Amerika’yı kapsayan bu erişim ağı; iş insanları, yatırımcılar, sık seyahat edenler ve aileler için zaman ve maliyet avantajı oluşturmaktadır.
Türkiye’nin Avrupa Birliği ile sürdürdüğü vize serbestisi müzakereleri olumlu sonuçlandığı takdirde Türk pasaportunun vizesiz erişim sağlayacağı ülke sayısı önemli ölçüde artacak; Schengen bölgesi başta olmak üzere çok daha geniş bir hareket alanı Türk vatandaşlarının kullanımına sunulacaktır. Bu beklenti, Türk pasaportunu yalnızca bugünkü değeri ile değil; gelecekteki potansiyeli ile de değerlendirilmesi gereken stratejik bir varlık hâline getirmektedir.
Türk vatandaşlığı, yalnızca seyahat özgürlüğü değil; aynı zamanda mülkiyet güvencesi, eğitim ve sağlık hakları, sosyal güvence, ticari faaliyet kolaylıkları ve çifte vatandaşlık olanağı gibi pek çok temel hakkı kapsayan çok boyutlu bir statüdür. Bu yönüyle Türk pasaportu, sahibine yalnızca bir belge değil; uluslararası bir kimlik, hukuki bir koruma kalkanı ve ailesel bir geleceğin garantisi olarak hizmet etmektedir.
BÖLÜM 2. TÜRK PASAPORTUYLA VİZESİZ VE KOLAY GİRİŞ YAPILAN ÜLKELER
Aşağıdaki liste, T.C. Dışişleri Bakanlığı ile havayolu şirketlerinin güncel açıklamaları esas alınarak hazırlanmıştır ve umuma mahsus (bordo) Türk pasaportu sahipleri için geçerlidir. Hususi damgalı (yeşil) ve hizmet damgalı (gri) pasaport sahipleri için muafiyetler genellikle daha geniş kapsamlıdır. Vize politikaları diplomatik gelişmelere bağlı olarak değişebileceğinden, her seyahat öncesinde T.C. Dışişleri Bakanlığı’nın resmî internet sitesinin (mfa.gov.tr) ve ilgili ülkenin konsolosluğunun teyit edilmesi tavsiye olunur.
2.1. Vizesiz Giriş Yapılabilen Ülkeler
Avrupa ve Balkanlar
Kuzey Makedonya (90 gün / 180 gün içinde), Arnavutluk (90 gün), Sırbistan (90 gün / 180 gün içinde), Bosna-Hersek (90 gün / 180 gün içinde), Karadağ (90 gün / 180 gün içinde), Kosova (90 gün / 180 gün içinde), Moldova (90 gün), Ukrayna (90 gün / 180 gün içinde — kimlik ile giriş mümkündür), Belarus (30 gün — şartlı), Kuzey Kıbrıs Türk Cumhuriyeti (90 gün — kimlik ile giriş mümkündür).
Asya
Ürdün (90 gün / 180 gün içinde), Azerbaycan (90 gün — kimlik ile giriş mümkündür), Gürcistan (1 yıl — kimlik ile giriş mümkündür), Kazakistan (30 gün), Kırgızistan (90 gün / 180 gün içinde), Katar (90 gün / 180 gün içinde), İran (90 gün), Lübnan (90 gün / 180 gün içinde), Özbekistan (30 gün), Moğolistan (30 gün), Japonya (90 gün), Güney Kore (90 gün — K-ETA zorunludur), Hong Kong / Çin ÖİB (90 gün), Makao / Çin ÖİB (30 gün), Singapur (30 gün), Malezya (90 gün), Filipinler (30 gün) ve Tayland (30 gün).
Afrika
Fas (90 gün), Tunus (90 gün), Seyşeller (90 gün — Seyahat Yetkilendirmesi zorunludur), Mauritius (30 gün), Botsvana (90 gün), Esvatini (30 gün), Gambiya (90 gün), Zambiya (30 gün, 90 güne kadar uzatılabilir), Angola (30 gün) ve São Tomé ve Príncipe (15 gün).
Güney ve Orta Amerika ile Karayipler
Arjantin (90 gün), Antigua ve Barbuda (90 gün), Brezilya (90 gün), Kolombiya (90 gün), Panama (90 gün), Guatemala (90 gün), Şili (90 gün), Peru (90 gün / 180 gün içinde), Uruguay (90 gün), Ekvador (90 gün), Bolivya (90 gün), Paraguay (90 gün / 180 gün içinde), Venezuela (90 gün), Kosta Rika (30 gün, 90 güne kadar uzatılabilir), El Salvador (90 gün), Honduras (90 gün), Nikaragua (90 gün), Bahamalar, Barbados (6 ay), Belize (90 gün), Dominika (21 gün), Jamaika (90 gün), Trinidad ve Tobago (90 gün / 180 gün içinde), Saint Kitts ve Nevis (90 gün / 180 gün içinde) ile Saint Lucia (6 hafta).
Okyanusya
Fiji (90 gün), Vanuatu (30 gün), Samoa (90 gün), Tonga (30 gün) ve Tuvalu (30 gün).
2.2. Kapıda Vize ile Giriş Yapılabilen Ülkeler
Maldivler (30 gün, ücretsiz), Palau (30 gün) ve Güney Afrika Cumhuriyeti (30 gün — sınırda ücretsiz giriş kaşesi) Türk vatandaşlarına doğrudan kapıda vize uygulayan başlıca ülkelerdir. Bunların yanı sıra Mısır, Nepal, Bahreyn, Komor Adaları, Yeşil Burun (Cabo Verde), Burundi, Madagaskar, Tanzanya, Uganda, Zimbabve ve Lübnan gibi ülkelerde de yaygın olarak kapıda vize uygulaması bulunmaktadır. Bazı ülkelerde kapıda vize ile e-vize seçenekleri birlikte yürütülmekte olup yolcuların güncel uygulamayı kontrol etmesi gerekmektedir.
2.3. E-Vize / Online Vize ile Giriş Yapılabilen Ülkeler
Avustralya (eTA), Bahreyn, Benin, Butan, Endonezya, Fildişi Sahili, Gabon, Gine, Irak, Kenya, Kongo Demokratik Cumhuriyeti, Küba, Lesoto, Malavi, Meksika, Myanmar, Nijerya, Pakistan, Papua Yeni Gine, Rusya, Güney Sudan, Tacikistan, Togo, Uganda, Birleşik Arap Emirlikleri ve Vietnam Türk vatandaşlarına elektronik vize uygulayan ülkeler arasındadır. Bunlara ek olarak Hindistan, Sri Lanka, Kamboçya, Tayvan, Umman, Suudi Arabistan (turistik e-vize), Etiyopya, Ruanda ve Zambiya gibi ülkeler de e-vize seçeneğini sunmaktadır.
2.4. Seyahat Öncesinde Dikkat Edilmesi Gereken Önemli Hususlar
Pasaport süresi, giriş yapılacak ülkenin kuralına göre genellikle dönüş tarihinden itibaren en az 6 ay geçerli olmalıdır. Sınır görevlileri gidiş-dönüş bileti, otel rezervasyonu ve seyahat sağlık sigortası gibi belgeleri talep edebilir. Aşağıda öne çıkan bazı özel uygulamalar yer almaktadır:
Güney Kore: Vizeden muafiyet bulunmasına rağmen seyahatten önce K-ETA (Korea Electronic Travel Authorization) onayının alınması zorunludur; onay alınmadan uçağa biniş yapılamamaktadır.
Seyşeller: Vize muafiyeti bulunmakla birlikte giriş öncesinde elektronik Seyahat Yetkilendirmesi (TA) alınması gerekmektedir.
Gürcistan: 1 Ocak 2026 itibarıyla ülkeye giriş yapan tüm yabancı ziyaretçiler için seyahat sağlık sigortası zorunlu hâle getirilmiştir.
Belarus: Vizesiz giriş hakkı yalnızca Minsk Uluslararası Havalimanı üzerinden ve belirli şartlarla geçerlidir.
Hong Kong: Sınır görevlilerince talep edildiğinde kalış süresine yetecek miktarda nakdin veya kredi kartı limitinin ibraz edilmesi gerekebilir.
Özbekistan: Geliş tarihinden itibaren 3 gün içinde otelde ya da yabancılar polisinde geçici ikamet kaydı yaptırılması zorunludur.
Endonezya: 3 Temmuz 2025’ten itibaren 30 günlük vizesiz giriş hakkı tanınmış; 1 Ekim 2025’ten itibaren ise varıştan 72 saat önce online bildirim yapılması ve QR kod alınması zorunlu kılınmıştır.
Avrupa, Amerika, Orta Doğu, Asya ve Afrika kıtalarını kapsayan bu geniş erişim ağı sayesinde Türk pasaportu; iş insanları, yatırımcılar ve sık seyahat edenler için ciddi bir zaman ve maliyet avantajı yaratmaktadır. Uluslararası ticaret, fuarlar, iş görüşmeleri ve yatırım süreçlerinde hızlı hareket etme imkânı sunarken bankacılık işlemleri, şirket kuruluşları ve finansal sistemlere erişimde de önemli kolaylıklar sağlamaktadır.
BÖLÜM 3. EĞİTİM AÇISINDAN SAĞLADIĞI AVANTAJLAR
Türk pasaportu, yalnızca seyahat özgürlüğü açısından değil, eğitim alanında sunduğu fırsatlar bakımından da önemli avantajlar sağlamaktadır. Türkiye Cumhuriyeti vatandaşları ve onların çocukları, Türkiye’deki devlet ve vakıf üniversitelerinde yerli öğrenci statüsünde eğitim alma hakkına sahiptir. Bu durum, yabancı uyruklu öğrencilere uygulanan yüksek öğrenim ücretlerine kıyasla çok daha düşük maliyetlerle eğitim alma imkânı sunmaktadır.
3.1. Üniversite ve Yükseköğretim Olanakları
Türkiye’de bugün 200’ün üzerinde üniversite bulunmakta ve bu üniversitelerin önemli bir bölümü uluslararası akreditasyona sahip programlar sunmaktadır. Bu sayede öğrenciler, uluslararası geçerliliği olan diplomalar elde edebilmektedir. Türk vatandaşları için bir diğer önemli avantaj, üniversite giriş sisteminin sunduğu olanaklardır.
Türkiye’deki öğrenciler, Yükseköğretim Kurumları Sınavı (YKS) ile devlet üniversitelerine yerleşebilmekte; bu sayede devlet üniversitelerinde neredeyse ücretsiz eğitim alabilmekte, vakıf üniversitelerinde ise çeşitli oranlarda burs ve indirim imkânlarından yararlanabilmektedir. Bunun yanında başarılı öğrenciler; TÜBİTAK, KYK burs ve kredileri, yurt dışı yüksek lisans ve doktora destek programları ile çeşitli kamu burslarından da faydalanabilmektedir.
3.2. Uluslararası Eğitim ve Değişim Programları
Türk pasaportunun sağladığı eğitim avantajları yalnızca Türkiye ile sınırlı değildir. Türkiye’nin pek çok ülke ile imzaladığı eğitim ve akademik iş birliği anlaşmaları sayesinde Türk öğrenciler, yurt dışındaki üniversitelerde değişim programlarına katılabilmektedir. Özellikle Avrupa’daki üniversitelerle yürütülen Erasmus+ değişim programı, Türk üniversite öğrencilerinin bir veya iki dönem boyunca Avrupa’da eğitim görmesine olanak tanımakta; öğrencilere bu süreçte burs ve mali destek sağlanmaktadır.
Türkiye’de alınan üniversite diplomaları pek çok ülkede uluslararası denklik ve akademik tanınırlığa sahiptir. Bu durum, Türk vatandaşlarının mezuniyet sonrasında yurt dışında yüksek lisans ve doktora programlarına başvurmasını kolaylaştırmaktadır. Avrupa, Amerika ve Asya’daki pek çok üniversite Türkiye’den mezun olan öğrencileri kabul etmektedir.
3.3. Öğrenci Vizesi Süreçlerinde Sağlanan Kolaylıklar
Türk pasaportunun bir diğer önemli avantajı da öğrenci vizesi süreçlerinde sağladığı kolaylıklardır. Türk vatandaşları pek çok ülke için öğrenci vizesi başvurularında daha hızlı ve daha esnek süreçlerle karşılaşmaktadır. Türkiye’nin uluslararası akademik ve diplomatik ilişkileri, öğrencilerin eğitim amacıyla yurt dışına gitmesini destekleyen önemli bir unsurdur.
3.4. Türkiye’nin Bölgesel Bir Eğitim Merkezi Hâline Gelmesi
Türkiye, son yıllarda uluslararası bir eğitim merkezi hâline gelmiştir. Modern kampüsler, gelişmiş araştırma merkezleri, uluslararası akademik kadrolar ve çok kültürlü öğrenci ortamı sayesinde Türkiye’de eğitim almak hem akademik hem de sosyal açıdan zengin bir deneyim sunmaktadır. Türk vatandaşları, bu eğitim ekosisteminin sunduğu tüm imkânlardan doğrudan yararlanabilmektedir.
BÖLÜM 4. SAĞLIK AÇISINDAN SAĞLADIĞI AVANTAJLAR
Türk pasaportuna sahip olmak, Türkiye’de gelişmiş ve çok katmanlı bir sağlık sistemine erişim imkânı sağlamaktadır. Türkiye, son yıllarda sağlık altyapısına yaptığı büyük yatırımlar sayesinde modern şehir hastaneleri, yüksek teknolojili tıbbi cihazlar ve uluslararası deneyime sahip sağlık personeli ile güçlü bir sağlık sistemi inşa etmiştir. Türk vatandaşları bu sistemden kapsamlı biçimde yararlanabilmektedir.
4.1. Genel Sağlık Sigortası (GSS) ve SGK Sistemi
Türkiye’nin kapsamlı sağlık sistemi, Sosyal Güvenlik Kurumu (SGK) ve Genel Sağlık Sigortası (GSS) çatısı altında vatandaşlara güçlü bir güvence sunmaktadır. Bu sistem sayesinde vatandaşlar; günlük sağlık ihtiyaçlarından ileri düzey tedavilere kadar geniş bir hizmet yelpazesinden faydalanabilmektedir.
SGK kapsamında, toplumda sık görülen pek çok hastalığın teşhis ve tedavisi karşılanmaktadır. Bunların başlıcaları şunlardır:
Grip, soğuk algınlığı ve viral enfeksiyonlar
Bakteriyel enfeksiyonlar ve antibiyotik tedavileri
Mide ve bağırsak hastalıkları (gastrit, ülser, reflü)
Solunum yolu hastalıkları (bronşit, zatürre)
Kulak, burun ve boğaz hastalıkları (sinüzit, bademcik iltihabı vb.)
Cilt hastalıkları (egzama, akne, mantar enfeksiyonları)
Alerjik hastalıklar ve bağışıklık sistemine bağlı reaksiyonlar
Bu kapsamda Türk vatandaşları aşağıdaki hizmetlerden yararlanabilmektedir:
Devlet hastanelerinde muayene, teşhis ve tedavi hizmetleri
Kan tahlilleri, idrar testleri ve laboratuvar analizleri
Röntgen, MR ve tomografi gibi ileri görüntüleme tetkikleri
Ameliyat ve hastane yatış hizmetleri
Aile hekimliği sistemi üzerinden düzenli sağlık takibi
Türkiye’de ayrıca aile hekimliği sistemi bulunmaktadır. Her vatandaşın kayıtlı olduğu bir aile hekimi vardır ve birinci basamak sağlık hizmetleri vatandaşa ücretsiz olarak sağlanmaktadır. Bu sistem, koruyucu sağlık hizmetleri açısından son derece önemli bir işlev görmektedir.
4.2. Kronik Hastalıkların Tedavisi ve İlaç Desteği
Türkiye’de kronik hastalıkların tedavisi ve bu hastalıklarda kullanılan ilaçlar devlet tarafından önemli ölçüde desteklenmektedir. SGK kapsamında karşılanan başlıca kronik hastalıklar şunlardır:
Diyabet (şeker hastalığı)
Kolesterol yüksekliği, obezite ve metabolik sendrom
Hipertansiyon ile kalp ve damar hastalıkları
Koroner arter yetmezliği, kalp yetmezliği ve aritmi
Astım ve kronik obstrüktif akciğer hastalığı (KOAH)
Tiroid hastalıkları (hipotiroidi, hipertiroidi, Hashimoto)
Epilepsi, Parkinson, Alzheimer ve multipl skleroz (MS)
Romatoid artrit, ankilozan spondilit ve lupus
Cushing sendromu, kronik böbrek yetmezliği ve diyaliz gerektiren hastalıklar
Hepatit B, hepatit C ve siroz
Otoimmün ve nadir görülen hastalıklar
Kanser türleri, organ nakli sonrası süreçler ve uzun süreli rehabilitasyon gerektiren hastalıklar
Bu hastalıkların tedavisinde kullanılan ilaçların büyük bölümü SGK tarafından karşılanmaktadır. Belirli durumlarda kronik hasta statüsündeki kişiler için ilaç katkı payı tamamen kaldırılabilmektedir.
4.3. Hastane, Ameliyat ve Acil Sağlık Hizmetleri
SGK kapsamında Türk vatandaşları, Türkiye genelindeki devlet hastaneleri ve anlaşmalı sağlık kuruluşlarında kapsamlı hastane hizmetlerinden yararlanma hakkına sahiptir. Bu hizmetler, basit tedavilerden ileri düzey cerrahi operasyonlara kadar geniş bir alanı kapsar.
Hastane Hizmetleri
Ayakta ve yatarak tedavi imkânı
Gerekli durumlarda hastaneye yatış ve gözlem süreçleri
Uzman doktorlar tarafından düzenli takip ve tedavi planlaması
Birden fazla branşın birlikte çalıştığı multidisipliner tedavi süreçleri
Enfeksiyon, iç hastalıkları, kardiyoloji, ortopedi başta olmak üzere tüm branşlarda hizmet
Ameliyat ve Cerrahi Müdahaleler
SGK, tıbbi olarak gerekli görülen pek çok cerrahi işlemi kapsamına almaktadır:
Genel cerrahi (apandisit, safra kesesi, fıtık vb.)
Kalp ve damar cerrahisi
Ortopedik ameliyatlar (kırık, protez, bağ onarımları)
Beyin ve sinir cerrahisi
Kadın doğum ameliyatları (sezaryen dâhil)
Göz ameliyatları (katarakt vb.)
Ameliyat öncesi tetkikler, ameliyat süreci ve ameliyat sonrası bakım hizmetlerinin tamamı SGK kapsamında değerlendirilmektedir.
Acil Sağlık Hizmetleri
Acil durumlarda SGK, hızlı ve hayati müdahaleleri güvence altına almaktadır:
112 acil sağlık hizmetleri ve ambulans desteği
Trafik kazaları, kalp krizi, felç gibi hayati risk taşıyan durumlara müdahale
Acil servis muayene ve tedavi süreçleri
Yoğun bakım ünitelerinde ileri yaşam desteği
Hayati tehlike durumlarında öncelikli tedavi hakkı
Acil durumlarda hastanın sigorta durumu ikinci planda olup öncelik daima hayat kurtarmaktır.
Yoğun Bakım ve İleri Tedavi
Yoğun bakım ünitesinde takip ve tedavi
Solunum cihazı ve ileri yaşam destek sistemleri
Ağır hastalık ve ameliyat sonrası kritik bakım hizmetleri
Uzun süreli hastane yatışları
Doğum ve Kadın Sağlığı Hizmetleri
Gebelik takibi ve rutin kontroller
Normal doğum ve sezaryen
Doğum sonrası anne ve bebek bakımı
Kadın hastalıklarına yönelik cerrahi işlemler
4.4. İlaç Ödemeleri ve SGK Desteği
Türkiye’de reçeteli ilaçların büyük bölümü SGK tarafından karşılanmaktadır. Doktor tarafından yazılan ilaçların önemli bir kısmı için vatandaşlar yalnızca düşük oranlı katkı payı ödemektedir. SGK kapsamında sağlanan başlıca avantajlar şunlardır:
Reçeteli ilaçların büyük bölümünün karşılanması
Enfeksiyon ve akut hastalık tedavileri için ilaç desteği
Ağrı kesici ve destekleyici tedaviler
Doktor kontrolünde uygulanan tedavi planları
Gerekli durumlarda uzun süreli ilaç kullanımı
Binlerce ilacın geri ödeme listesinde yer alması
Pek çok ilacın tamamen ücretsiz veya düşük katkı payı ile temin edilebilmesi
Eczanelerin SGK ile doğrudan entegre sistemde çalışması
Yüksek Maliyetli İlaçlara Erişim
Bazı hastalıkların tedavisinde kullanılan ilaçlar son derece pahalı olabilmektedir. Özellikle kanser tedavileri, bağışıklık sistemi hastalıkları, nadir hastalıklar, genetik hastalıklar ve biyoteknolojik ilaçlar yüksek maliyet gerektirmektedir. Türkiye’de SGK sistemi kapsamında bu tür yüksek maliyetli ilaçların önemli bir bölümü geri ödeme kapsamına alınmıştır. Böylece vatandaşlar, çok yüksek tedavi maliyetlerini tek başlarına karşılamak zorunda kalmamaktadır.
Yurt Dışından İlaç Temini
Türkiye’de bulunmayan veya henüz piyasaya sunulmamış bazı özel ilaçlar için yurt dışından ilaç temini sistemi bulunmaktadır. Bu süreç genel olarak şu şekilde işlemektedir: ilgili ilaç doktor raporuyla belirlenir; ilaç Türkiye’de bulunmuyorsa yurt dışı temin süreci başlatılır ve Türk Eczacıları Birliği ya da Sağlık Bakanlığı aracılığıyla ilaç yurt dışından getirilir. Bu sistem, özellikle nadir hastalıklar ve özel tedaviler için büyük önem taşımaktadır.
4.5. Tamamlayıcı Sağlık Sigortası
Türkiye’de SGK’ya ek olarak tamamlayıcı sağlık sigortası yaptırmak mümkündür. Bu sigorta sayesinde özel hastanelerde fark ücreti ödemeden tedavi olunabilmekte; SGK ile anlaşmalı özel hastanelerden daha kolay hizmet alınabilmekte ve ameliyat, muayene ile tetkik ücretlerinin büyük bölümü sigorta tarafından karşılanmaktadır. Tamamlayıcı sağlık sigortası, özellikle özel hastane tercih eden kişiler için son derece avantajlıdır.
4.6. Özel Sağlık Sigortası
Özel sağlık sigortası, poliçe kapsamında belirlenen teminatlar doğrultusunda özel hastanelerde muayene, tedavi ve ameliyat giderlerini karşılayan bir sistemdir. Kişiye özel olarak planlanabilen bu sigortalar, ihtiyaçlara göre genişletilebilmektedir.
Kapsam ve Sağlanan Hizmetler
Özel Hastane Hizmetleri:
Türkiye genelindeki anlaşmalı özel hastanelerde tedavi imkânı
Hızlı randevu ve minimum bekleme süresi
Uzman doktor ve ileri teknolojiye erişim
Konforlu hasta odaları ve özel bakım hizmetleri
Muayene ve Teşhis:
Sınırsız veya yüksek limitli doktor muayeneleri
Kan tahlilleri ve laboratuvar hizmetleri
MR, tomografi ve ultrason gibi ileri görüntüleme tetkikleri
Düzenli check-up (genel sağlık taramaları)
Ameliyat ve Yatarak Tedavi:
Tüm cerrahi operasyonların büyük bir bölümü
Ameliyat öncesi ve sonrası süreçlerin tamamı
Yoğun bakım hizmetleri
Refakatçi ve özel oda imkânları
İlaç ve Tedavi Süreçleri:
Hastanede uygulanan tedaviler
Kemoterapi, radyoterapi gibi ileri tedaviler (poliçe kapsamına göre)
Fizik tedavi ve rehabilitasyon hizmetleri
Poliçeye Bağlı Ek Teminatlar:
Diş tedavileri
Gözlük ve göz sağlığı hizmetleri
Doğum teminatı
Yurt dışı sağlık teminatı
Psikolojik danışmanlık ve terapi hizmetleri
SGK ile Karşılaştırma ve Avantajlar
Özel sağlık sigortası, SGK’ya kıyasla daha geniş kapsam ve daha hızlı hizmet sunmaktadır. Bekleme süresi olmadan hızlı erişim, özel hastanelerde yüksek konfor, kişiye özel kapsam ve limit seçenekleri ile daha geniş doktor ve hastane ağı bu sistemin temel avantajları arasındadır. Türk vatandaşlığına sahip bireyler, Türkiye’de daha avantajlı ve geniş kapsamlı özel sağlık sigortası seçeneklerine erişebilmektedir. Bu durum özellikle yatırımcılar ve aileleri için yüksek standartlı sağlık hizmeti, uzun vadeli sağlık güvencesi ve uluslararası yaşam planlarına uygun esnek çözümler sunmaktadır.
4.7. Emeklilik ve Sağlık Güvencesi
Türkiye’de çalışan ve SGK sistemine dâhil olan vatandaşlar, mevzuatla belirlenen prim gününü tamamladıklarında emeklilik hakkı kazanırlar. Emekli olan vatandaşlar; emekli maaşı almakta, ömür boyu sağlık güvencesine sahip olmakta ve SGK kapsamındaki sağlık hizmetlerinden yararlanmaya devam etmektedir. Bu durum, uzun vadede güçlü bir sosyal güvenlik sistemi sağlamaktadır.
4.8. Türkiye’nin Güçlü Sağlık Altyapısı
Türkiye, son yıllarda sağlık alanında büyük yatırımlar yapmıştır. Yeni nesil şehir hastaneleri, köklü üniversite hastaneleri, modern özel hastaneler, gelişmiş tıbbi teknoloji ve uluslararası eğitim almış doktorlar Türkiye’yi bölgesel bir sağlık merkezi hâline getirmiştir.
4.9. Sağlık Turizmi Avantajı
Türkiye bugün sağlık turizmi alanında dünyanın önde gelen ülkelerinden biridir. Özellikle estetik cerrahi, saç ekimi, diş tedavileri, göz lazer operasyonları, organ nakli ve onkoloji tedavileri alanında Türkiye yoğun biçimde tercih edilmektedir. Her yıl yüz binlerce yabancı hasta sağlık hizmeti almak amacıyla Türkiye’ye gelmektedir. Türk vatandaşları ise bu güçlü sağlık altyapısından çok daha avantajlı maliyetlerle ve öncelikli biçimde yararlanabilmektedir.
BÖLÜM 5. SOSYAL YARDIM VE SOSYAL GÜVENCE AÇISINDAN SAĞLADIĞI AVANTAJLAR
Türk vatandaşlığı ve Türk pasaportuna sahip olmak; yalnızca seyahat veya yatırım alanında değil, aynı zamanda sosyal güvence ve sosyal yardım sistemlerine erişim açısından da önemli avantajlar sağlamaktadır. Türkiye’de devlet, ihtiyaç sahibi vatandaşlara yönelik geniş kapsamlı sosyal destek programları yürütmektedir.
5.1. Sosyal Yardım ve Destek Programları
Türkiye’de sosyal yardımlar, başta Aile ve Sosyal Hizmetler Bakanlığı olmak üzere çeşitli kamu kurumları tarafından sağlanmaktadır. Türk vatandaşları, mevzuatta belirlenen şartları yerine getirdikleri takdirde bu desteklerden yararlanabilmektedir. Başlıca sosyal yardımlar şunlardır:
Nakit sosyal yardım programları
Aile destek programları
Gıda ve temel ihtiyaç yardımları
Yakacak (kömür / doğal gaz) yardımı
Barınma ve kira destekleri
5.2. Aile Destek Programı
Türkiye’de uygulanan Aile Destek Programı, düşük gelirli ailelere düzenli nakit destek sağlayan önemli bir sosyal yardım programıdır. Bu program kapsamında ailelere belirli aralıklarla maddi destek verilmekte, destek miktarı ailenin gelir durumuna göre belirlenmekte ve sosyal güvence sistemine dâhil olmayan veya geliri düşük olan aileler bu programdan yararlanabilmektedir.
5.3. Çocuk ve Eğitim Destekleri
Türk vatandaşları çocukları için çeşitli sosyal desteklerden yararlanabilmektedir. Bunlar arasında okula devam eden çocuklara yönelik şartlı eğitim yardımı, okul destek programları, kırtasiye ve eğitim malzemesi yardımları ile üniversite öğrencileri için burs ve kredi imkânları yer almaktadır. Söz konusu destekler, çocukların eğitim hayatının kesintisiz biçimde sürdürülmesini teşvik etmeyi amaçlamaktadır.
5.4. Engelli ve Bakım Yardımları
Türkiye’de engelli bireyler ve bakıma muhtaç kişiler için çeşitli sosyal destek programları bulunmaktadır. Engelli maaşı, evde bakım maaşı, rehabilitasyon destekleri ile engelli bireylere yönelik sağlık ve eğitim destekleri bu kapsamda sayılabilir. Özellikle evde bakım desteği sayesinde, ağır engelli bireylere bakan aile üyelerine devlet tarafından aylık bakım ödemesi yapılabilmektedir.
5.5. Yaşlılara Yönelik Sosyal Destekler
Belirli bir gelirin altında olan yaşlı vatandaşlar için yaşlılık aylığı bağlanabilmektedir. Bunun yanı sıra sosyal bakım hizmetleri, evde destek hizmetleri ve yaşlı bakım merkezleri devlet tarafından sunulmakta; yaşlı nüfusun yaşam kalitesini artırmaya yönelik politikalar her geçen yıl güçlendirilmektedir.
5.6. Afet ve Acil Durum Yardımları
Türkiye’de doğal afet, yangın, deprem veya diğer acil durumların ardından devlet tarafından çeşitli acil sosyal yardım programları uygulanmaktadır. Geçici barınma desteği, maddi yardım programları ve yeniden yerleşim destekleri bu kapsamda sağlanmaktadır.
5.7. Belediye Sosyal Yardımları
Türkiye’de belediyeler de vatandaşlara çeşitli sosyal destekler sunmaktadır. Gıda yardımları, sosyal kart uygulamaları, öğrencilere burs destekleri, ulaşım yardımları ve ihtiyaç sahibi ailelere yönelik kira yardımları bu kapsamda öne çıkmaktadır.
5.8. Kadın ve Aile Destek Programları
Kadınların ekonomik ve sosyal hayata katılımını desteklemek amacıyla çeşitli programlar yürütülmektedir. Bu kapsamda kadın girişimcilere destek programları, aile danışmanlık hizmetleri ve sosyal koruma programları sunulmaktadır.
5.9. Sosyal Konut ve Barınma Destekleri
Türkiye’de devlet tarafından yürütülen sosyal konut projeleri, önemli bir sosyal destek mekanizması olarak öne çıkmaktadır. Düşük gelirli vatandaşlar için uygun fiyatlı konut projeleri, uzun vadeli ödeme planları ve devlet destekli konut kampanyaları bu kapsamda sayılabilir.
BÖLÜM 6. MÜLKİYET HAKKI VE GAYRİMENKUL GÜVENCESİ AÇISINDAN SAĞLADIĞI AVANTAJLAR
Türk vatandaşlığı ve Türk pasaportuna sahip olmak; özellikle mülkiyet hakkı ve gayrimenkul güvenliği açısından güçlü bir hukuki altyapı sunmaktadır. Türkiye’de mülkiyet hakkı hem Anayasa hem de köklü hukuk geleneği ile güvence altına alınmıştır. Bu güvence yalnızca modern hukuk sistemiyle değil; Osmanlı İmparatorluğu’ndan günümüze uzanan tapu ve kadastro geleneğiyle de desteklenmektedir.
6.1. Osmanlı’dan Günümüze Tapu Sistemi
Türkiye’de gayrimenkul mülkiyet sistemi, dünyanın en eski ve en düzenli tapu sistemlerinden birine dayanmaktadır. Osmanlı döneminde kurulan tapu tahrir ve kayıt sistemi, devlet eliyle toprakların ve mülklerin kayıt altına alınmasını sağlamıştır. Türkiye, tapu kayıtlarına en yüksek güvenin duyulduğu ülkelerin başında gelmektedir.
Osmanlı döneminde arazi ve mülk kayıtları resmi defterlerde tutulur, mülkiyet işlemleri devletin denetiminde gerçekleştirilir ve gayrimenkul hakları yazılı kayıtlarla korunurdu. Bu sistem zaman içinde gelişerek Cumhuriyet döneminde modern Tapu ve Kadastro sistemine evrilmiştir.
6.2. Tapu ve Kadastro Güvencesi
Türkiye’de tüm gayrimenkuller, Tapu ve Kadastro Genel Müdürlüğü tarafından kayıt altına alınmaktadır. Tapu kayıtları devlet güvencesi altında olup mülkiyet hakları resmi biçimde korunmaktadır. Bu sistem sayesinde her taşınmazın resmi tapu kaydı bulunmakta, mülkiyet devri devlet kontrolünde yapılmakta, tapu işlemleri hukuki güvence altında gerçekleşmekte ve sahiplik bilgileri resmi kayıtlarda saklanmaktadır.
6.3. Anayasal Mülkiyet Hakkı
Türkiye Cumhuriyeti Anayasası’nın 35. maddesi, mülkiyet hakkını açık biçimde güvence altına almıştır. Anayasa’ya göre herkes mülkiyet ve miras hakkına sahiptir; devlet bu hakkı korumakla yükümlüdür ve mülkiyet hakkı ancak kamu yararı amacıyla ve kanunla sınırlandırılabilir. Bu durum mülk sahiplerine güçlü bir hukuki güvence sağlamaktadır.
6.4. Tapu Siciline Güven İlkesi ve Hukuki Koruma
Türk hukukunda tapu kayıtlarına güvenerek iyi niyetli biçimde taşınmaz edinen üçüncü kişilerin kazanımı korunmaktadır. Bu ilke, 4721 sayılı Türk Medeni Kanunu’nun 1023. maddesinde açıkça düzenlenmiştir: “Tapu kütüğündeki sicile iyiniyetle dayanarak mülkiyet veya bir başka aynî hak kazanan üçüncü kişinin bu kazanımı korunur.” Aynı Kanun’un 1024. maddesi ise aynî hakkın yolsuz olarak tescil edilmiş olması hâlinde, bunu bilen veya bilmesi gereken üçüncü kişinin bu tescile dayanamayacağını öngörmektedir.
Yargıtay İçtihadı Birleştirme Büyük Genel Kurulu, E. 2024/1, K. 2025/2 (18.07.2025):  Tapu sicilinde malik olarak görünen kişi ile işlem yapan iyiniyetli üçüncü kişi, edindiği mülkiyet hakkı bakımından korunur. Önceki malikin tasarrufun iptalini sağlayabilmesi için üçüncü kişinin kötü niyetli olduğunu ispat etmesi gerekir. Karar, arsa payı karşılığı inşaat sözleşmesi gibi uygulamada sıkça karşılaşılan ilişkilerde tapuya güven ilkesini güçlendirmiş; gayrimenkul edinen alıcıların kazanımını ‘aslen iktisap’ olarak nitelendirmiştir.
Bu çerçevede Türkiye’de tapuda kayıtlı mülkiyet hakkı, sadece sicile yapılan basit bir kayıt olmaktan öte; hem devlet hem de yargı tarafından titizlikle korunan bir hukuki değerdir. Mülk sahipleri, haksız müdahalelere karşı dava açabilmekte ve haklarını her aşamada hukuki yollarla koruyabilmektedir.
6.5. Miras Hakkı ve Aile Güvencesi
Türk hukuk sisteminde gayrimenkuller miras yoluyla nesilden nesle devredilebilmektedir. Bu sistem sayesinde gayrimenkuller aile içinde korunabilmekte, çocuklara ve mirasçılara güvenli biçimde aktarılabilmekte ve tapu kayıtları sayesinde mülkiyetin devamlılığı sağlanmaktadır. Bu durum, gayrimenkul yatırımlarını uzun vadeli bir aile varlığına dönüştürmektedir.
6.6. Yatırım Güvencesi
Türk vatandaşları gayrimenkul satın alırken pek çok avantaj elde etmektedir. Türkiye’nin her bölgesinde mülk edinme hakkı, tarım arazileri ve arsa yatırımlarına erişim, uzun vadeli gayrimenkul yatırım fırsatları ve tapu güvencesi ile korunan mülkiyet hakları bu avantajların başında gelmektedir. Bu yapı, gayrimenkulü Türkiye’de güvenli bir yatırım aracı hâline getirmektedir.
Yargıtay Hukuk Genel Kurulu, Olağanüstü Zamanaşımı (TMK m. 713) Uygulaması:  Tapu kütüğünde kayıtlı olmayan ya da maliki gözükmeyen bir taşınmazı, malik sıfatıyla ve davasız, aralıksız 20 yıl boyunca elinde bulunduran kişi, mülkiyetin kendi adına tesciline karar verilmesini isteyebilir. Karar, fiilî kullanıma dayalı mülkiyet iddiaları bakımından açık bir hukuki çerçeve ortaya koymaktadır.
6.7. Uluslararası Hukuk Çerçevesinde Yatırım Güvencesi
Türkiye, pek çok ülke ile karşılıklı yatırımların teşviki ve korunması anlaşmasına (İkili Yatırım Anlaşmaları) taraf bir devlettir. Ayrıca Türkiye, ICSID Sözleşmesi gibi uluslararası tahkim mekanizmalarına da taraftır. Bu durum hem yerli hem de yabancı yatırımcıların mülkiyet haklarına ek bir uluslararası güvence sağlamaktadır.
6.8. Gayrimenkulün Ekonomik Gücü
Türkiye’de gayrimenkul, yalnızca barınma amaçlı bir varlık değil; aynı zamanda güçlü bir ekonomik yatırım aracı olarak değerlendirilmektedir. Gayrimenkuller kira geliri sağlayabilmekte, değer artışı yoluyla yatırım kazancı yaratabilmekte ve aile varlığı olarak nesiller boyunca korunabilmektedir. Bu nedenle mülkiyet hakkı Türkiye’de ekonomik güvenliğin temel taşlarından birini oluşturmaktadır.
BÖLÜM 7. ŞİRKET KURMA KOLAYLIKLARI AÇISINDAN SAĞLADIĞI AVANTAJLAR
Türk vatandaşlığı ve Türk pasaportuna sahip olmak, Türkiye’de ticari faaliyet yürütmek ve şirket kurmak açısından önemli kolaylıklar sağlamaktadır. Türkiye; güçlü ekonomisi, stratejik coğrafi konumu ve gelişmiş ticaret altyapısı sayesinde girişimciler ve yatırımcılar için önemli fırsatlar sunmaktadır.
7.1. Hızlı ve Pratik Şirket Kurma Süreci
Türkiye’de şirket kurma işlemleri oldukça hızlı ve pratik biçimde gerçekleştirilebilmektedir. Gerekli belgelerin hazırlanması ve Ticaret Sicili Müdürlüğü’ne başvuru yapılmasının ardından pek çok şirket türü birkaç gün içerisinde tescil edilebilmektedir. Genel olarak süreç; şirket ana sözleşmesinin hazırlanması, Ticaret Sicili Müdürlüğü’ne başvuru, vergi numarasının alınması, banka hesabının açılması ve gerekli faaliyet izinlerinin tamamlanması aşamalarından oluşmaktadır.
7.2. Farklı Şirket Türleri Kurabilme İmkânı
Türkiye’de girişimciler, ticari ihtiyaçlarına göre çeşitli şirket türleri kurabilmektedir. En yaygın şirket türleri şunlardır:
Limited Şirket (Ltd. Şti.)
Anonim Şirket (A.Ş.)
Şahıs İşletmesi
Kolektif Şirket
Komandit Şirket
Kooperatif
Bu çeşitlilik, yatırımcıların faaliyet alanlarına en uygun şirket modelini seçmesine olanak tanımaktadır.
7.3. Düşük Sermaye ile Şirket Kurma
Türkiye’de, özellikle Limited Şirket kurmak için aranan asgari sermaye tutarı, birçok ülkeye kıyasla oldukça düşük tutulmuştur. Türk Ticaret Kanunu uyarınca asgari sermaye tutarları zaman zaman güncellenmekte olup uygulamada yatırımcılar, görece düşük maliyetle ticari faaliyet başlatma imkânına sahiptir. Bu durum özellikle yeni başlayan girişimciler ve yabancı sermayeli şirketler için önemli bir avantajdır.
7.4. Banka Hesabı Açma ve Finansal İşlemler
Türk vatandaşları şirket kurduklarında banka hesabı açma ve finansal işlemleri yürütme konusunda önemli kolaylıklar elde etmektedir. Şirket adına banka hesabı açılabilmekte; ulusal ve uluslararası para transferleri gerçekleştirilebilmekte ve ticari faaliyetler için gerekli finansal işlemler hızlı biçimde tamamlanabilmektedir.
7.5. Uluslararası Ticaret İmkânları
Türkiye; Avrupa, Orta Doğu, Asya ve Afrika pazarlarının kesişim noktasında yer almaktadır. Bu nedenle Türkiye’de kurulan şirketler Avrupa, Orta Doğu, Türk Cumhuriyetleri ve Afrika pazarlarına kolay erişim imkânı bulabilmektedir. Söz konusu konum, Türk şirketlerine uluslararası ticaret açısından önemli rekabet avantajları sunmaktadır.
7.6. Serbest Ticaret Anlaşmaları ve Gümrük Avantajları
Türkiye, pek çok ülke ile Serbest Ticaret Anlaşmaları imzalamıştır. Ayrıca Avrupa Birliği ile akdedilen Gümrük Birliği anlaşması sayesinde Türkiye’de faaliyet gösteren şirketler, AB üyesi ülkelere yapılan sanayi ürünü ihracatında önemli gümrük avantajlarından yararlanabilmektedir.
Yargıtay 11. Hukuk Dairesi, Limited Şirket Müdürlerinin Sorumluluğu:  Limited şirket müdürleri, şirketin kamu borçları bakımından 6183 sayılı Amme Alacaklarının Tahsil Usulü Hakkında Kanun’un mükerrer 35. maddesi uyarınca şahsî malvarlıkları ile sorumludur. Yargıtay’ın yerleşik içtihadına göre, müdürlüğün hukuken sona erdiği tarihten sonra doğan kamu borçlarından önceki müdürün sorumluluğu bulunmamakta; sorumluluğun kapsamı görev süresiyle sınırlı tutulmaktadır.
7.7. Devlet Teşvikleri ve Yatırım Destekleri
Türkiye’de yatırımcıları desteklemek amacıyla geniş kapsamlı devlet teşvikleri uygulanmaktadır. Bu teşvikler arasında şunlar yer almaktadır:
Yatırım teşvik belgesi kapsamında vergi indirimleri
Sigorta primi işveren hissesi desteği
Bölgesel ve sektörel yatırım teşvik programları
KOSGEB destekleri
İhracat teşvikleri
Teknoloji ve AR-GE destekleri
Serbest bölge ve teknopark avantajları
7.8. E-Devlet ve Dijital İşlem Kolaylığı
Türkiye’de pek çok ticari işlem dijital sistemler üzerinden gerçekleştirilebilmektedir. Vergi işlemleri, SGK işlemleri, Ticaret Sicili işlemleri ve resmi başvurular E-Devlet, MERSİS ve İnteraktif Vergi Dairesi gibi platformlar üzerinden çevrim içi olarak hızla tamamlanabilmektedir. Bu durum, iş süreçlerinin etkinliğini önemli ölçüde artırmaktadır.
7.9. Genç ve Dinamik İş Gücü
Türkiye, genç ve dinamik bir nüfusa sahiptir. Bu durum şirketler için nitelikli ve geniş bir iş gücü havuzu anlamına gelmektedir. Özellikle mühendislik, yazılım, üretim, finans ve hizmet sektörlerinde güçlü insan kaynağı bulunmakta; üniversite-sanayi iş birlikleri girişimcilere önemli destekler sunmaktadır.
7.10. Bölgesel Ticaret Merkezi Avantajı
Türkiye, jeopolitik konumu sayesinde Avrupa, Asya ve Orta Doğu’nun kesişim noktasında yer alan stratejik bir ticaret merkezi konumundadır. Bu nedenle Türkiye’de kurulan şirketler; uluslararası lojistik ağlarından yararlanabilmekte, geniş pazarlara ulaşabilmekte ve bölgesel ticaret fırsatlarını avantaja dönüştürebilmektedir.
BÖLÜM 8. ÇİFTE VATANDAŞLIK AÇISINDAN SAĞLADIĞI AVANTAJLAR
Türkiye Cumhuriyeti, birçok ülkenin aksine çifte vatandaşlığa izin veren ülkelerden biridir. Bu durum, Türk vatandaşlığı edinen kişilerin mevcut vatandaşlıklarını kaybetmeden Türkiye Cumhuriyeti vatandaşı olabilmelerine olanak tanımaktadır. Söz konusu olanak; özellikle uluslararası yatırımcılar, iş insanları ve aileleri için son derece önemli avantajlar sunmaktadır.
8.1. Mevcut Vatandaşlığı Koruyabilme
Türk vatandaşlığı alındığında, kişinin başvuru sahibi olduğu ülkenin mevzuatı izin verdiği takdirde mevcut vatandaşlığını bırakması gerekmemektedir. Böylece bireyler, hem kendi ülkelerinin vatandaşlık haklarını koruyabilmekte hem de Türk vatandaşlığının sunduğu avantajlardan tam olarak yararlanabilmektedir.
8.2. İki Ülkenin Haklarından Eş Zamanlı Yararlanma
Çifte vatandaşlığa sahip kişiler, her iki ülkenin sunduğu hak ve imkânlardan eş zamanlı olarak yararlanabilmektedir. Bu kapsamda öne çıkan başlıca haklar şunlardır:
İki ülkede yaşama ve çalışma hakkı
İki ülkede eğitim alma imkânı
İki ülkenin sağlık sistemlerinden yararlanma
Gayrimenkul edinme ve yatırım yapma hakkı
Her iki ülkede miras hakkından yararlanma
8.3. Uluslararası Hareket Özgürlüğü
Çifte vatandaşlık, kişilere daha geniş seyahat ve hareket özgürlüğü sağlamaktadır. İki farklı pasaporta sahip olmak, pek çok ülkeye seyahat sürecinde vize işlemlerinde önemli avantajlar sunmakta ve uluslararası hareket kabiliyetini belirgin biçimde artırmaktadır.
8.4. Aile ve Nesiller İçin Güvence
Türk vatandaşlığı yalnızca başvuru sahibine değil; aynı zamanda eşine ve 18 yaş altındaki çocuklarına da aktarılabilen önemli bir statüdür. Çifte vatandaşlık sayesinde çocuklar iki farklı vatandaşlık hakkına sahip olabilmekte, aile bireyleri farklı ülkelerde yaşama ve çalışma fırsatlarına erişebilmekte ve nesiller boyu uluslararası fırsatlar genişlemektedir.
8.5. Ekonomik ve Yatırım Avantajları
Çifte vatandaşlığa sahip kişiler, iki farklı ülkenin ekonomik ve ticari fırsatlarından eş zamanlı olarak yararlanabilmektedir. Bu durum; yatırım imkânlarının çeşitlenmesini, ticari faaliyetlerin genişlemesini ve uluslararası iş bağlantılarının güçlenmesini sağlamaktadır.
8.6. Uzun Vadeli Güvenlik ve Alternatif Yaşam Seçenekleri
Çifte vatandaşlık aynı zamanda bireylere uzun vadeli güvenlik ve alternatif yaşam seçenekleri sunmaktadır. Farklı ülkelerde yaşama imkânı, çocuklar için farklı eğitim seçenekleri ile ekonomik veya politik değişimlere karşı alternatif bir ülke seçeneği bu kapsamda öne çıkmaktadır. Bu yönüyle çifte vatandaşlık, modern dünyada bir “varlık çeşitlendirme” aracı olarak da değerlendirilmektedir.
BÖLÜM 9. YATIRIM YOLUYLA TÜRK VATANDAŞLIĞI
Yatırım yoluyla Türk vatandaşlığı, 5901 sayılı Türk Vatandaşlığı Kanunu ile bu Kanun’un uygulanmasına ilişkin Yönetmelik kapsamında belirlenen yatırım şartlarını yerine getiren yabancı yatırımcılara, istisnaî olarak Türk vatandaşlığı ve Türk pasaportu kazanma imkânı sunan, tamamen yasal, resmî ve güvenli bir süreçtir. Bu sistem; yatırımcıların sermayelerini güvenli bir hukuki çerçevede değerlendirmelerini sağlarken, kendileri ve aileleri için kalıcı, güçlü ve uluslararası bir gelecek inşa etmelerine olanak tanımaktadır.
9.1. Hukuki Dayanak
Yatırım yoluyla Türk vatandaşlığı; 5901 sayılı Türk Vatandaşlığı Kanunu’nun 12. maddesi ile Türk Vatandaşlığı Kanununun Uygulanmasına İlişkin Yönetmelik’in 20. maddesinde düzenlenmiştir. Yatırım tutarları ve şartları, Cumhurbaşkanı kararıyla belirlenmekte ve dönem dönem güncellenmektedir.
9.2. Uygun Yatırım Türleri
Türk vatandaşlığı başvurusu, ilgili mevzuata uygun olarak gerçekleştirilen aşağıdaki yatırım türleri üzerinden yapılabilmektedir. Aşağıda belirtilen tutarlar 2026 yılı itibarıyla yürürlükte olan miktarları yansıtmaktadır.
Gayrimenkul Yatırımı
Türkiye’de en az 400.000 ABD Doları veya karşılığı döviz/Türk Lirası tutarında bir veya birden fazla taşınmazın satın alınması ve tapuda üç yıl süreyle satılmayacağı yönünde şerh konulması gerekmektedir. Taşınmaz değeri, Sermaye Piyasası Kurulu’nun lisansladığı yetkili gayrimenkul değerleme kuruluşları tarafından düzenlenen değerleme raporu ile tespit edilmektedir.
Banka Mevduatı
Türkiye’de faaliyet gösteren bankalarda en az 500.000 ABD Doları veya karşılığı döviz/Türk Lirası tutarında mevduatın bulundurulması ve bu mevduatın üç yıl süreyle çekilmeyeceği yönünde yazılı taahhüt verilmesi gerekmektedir.
Sabit Sermaye Yatırımı
En az 500.000 ABD Doları veya karşılığı döviz/Türk Lirası tutarında sabit sermaye yatırımının gerçekleştirildiğinin Sanayi ve Teknoloji Bakanlığı tarafından tespiti gerekmektedir. Bu yatırım; yeni bir şirket kurulması yoluyla yapılabileceği gibi mevcut bir şirkete sermaye aktarımı yoluyla da gerçekleştirilebilmektedir.
Devlet Borçlanma Araçları
En az 500.000 ABD Doları veya karşılığı döviz/Türk Lirası tutarında devlet borçlanma aracının satın alınması ve üç yıl süreyle elde tutulacağına dair Hazine ve Maliye Bakanlığı’na taahhüt verilmesi gerekmektedir.
Gayrimenkul Yatırım Fonu / Girişim Sermayesi Yatırım Fonu Katılma Payı
En az 500.000 ABD Doları veya karşılığı döviz/Türk Lirası tutarında gayrimenkul yatırım fonu katılma payı veya girişim sermayesi yatırım fonu katılma payının satın alınması ve bu payların üç yıl süreyle elde tutulacağına dair Sermaye Piyasası Kurulu’na taahhüt verilmesi gerekmektedir.
İstihdam Oluşturma
Çalışma ve Sosyal Güvenlik Bakanlığı tarafından en az 50 kişiye istihdam sağlandığının tespit edilmesi gerekmektedir. Bu seçenekte istihdam edilen kişilerin Türk vatandaşı olması ve istihdamın belirlenen süre boyunca sürdürülmesi şartı aranmaktadır.
9.3. Aileye Tanınan Haklar
Yatırım yoluyla Türk vatandaşlığı, yalnızca yatırımcıyı değil ailesini de kapsayan kapsamlı bir hak sunmaktadır. Bu kapsamda başvuru sahibi, eşi ve 18 yaşından küçük çocukları tek dosya üzerinden eş zamanlı olarak Türk vatandaşlığı ve Türk pasaportu alma hakkına sahiptir. Böylece aile bireyleri birlikte Türkiye’de yaşama, eğitim alma ve çalışma haklarını elde etmektedir.
9.4. Başvuru ve Süreç Yönetimi
Yatırım yoluyla Türk vatandaşlığı süreci; yalnızca bir yatırımın yapılmasından ibaret olmayıp, yatırımın mevzuata uygunluğunun tespiti, belgelerin eksiksiz ve doğru biçimde hazırlanması, başvurunun ilgili kurumlara usulüne uygun olarak sunulması ve sürecin resmi makamlar nezdinde titizlikle takip edilmesini gerektiren teknik ve hassas bir hukuki süreçtir.
Sürecin temel aşamaları aşağıdaki gibidir:
Yatırımın türüne uygun olarak gerçekleştirilmesi ve gerekli taahhütlerin verilmesi
İlgili Bakanlık veya kurumdan uygunluk belgesinin alınması (Çevre, Şehircilik ve İklim Değişikliği Bakanlığı; Sanayi ve Teknoloji Bakanlığı; Hazine ve Maliye Bakanlığı; SPK; Çalışma ve Sosyal Güvenlik Bakanlığı – yatırımın türüne göre)
6458 sayılı Yabancılar ve Uluslararası Koruma Kanunu’nun 31/1-(j) maddesi kapsamında kısa dönem ikamet izninin alınması
İl Nüfus ve Vatandaşlık Müdürlüğü’ne istisnaî vatandaşlık başvurusunda bulunulması
Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü ve İçişleri Bakanlığı’nca dosyanın incelenmesi ve güvenlik soruşturmasının tamamlanması
Cumhurbaşkanı kararıyla vatandaşlığın kazanılması ve Resmî Gazete’de ilanı
Başvuru tarihi olarak, kişinin başvuru formunun yetkili makamın evrak kaydına alındığı tarih esas alınmaktadır. Posta yoluyla yapılan başvurular kabul edilmemektedir. Başvuru sürecinin sağlıklı ve hızlı yürütülebilmesi için sürecin başından itibaren konunun uzmanı bir hukuk bürosu nezaretinde planlanması büyük önem taşımaktadır.
Danıştay 10. Daire, İstisnaî Vatandaşlık Başvurularına İlişkin Yerleşik İçtihat:  İstisnaî yoldan Türk vatandaşlığı kazanılması idarenin takdir yetkisi kapsamındadır; ancak bu yetki, hukukun genel ilkelerine ve eşitlik ilkesine uygun biçimde kullanılmalıdır. Başvuru şartlarını taşıyan kişiler bakımından idarenin gerekçesiz ret kararları, idari yargı denetimine tabidir. Bu çerçevede başvurunun titiz bir hukuki dosya ile yürütülmesi, hak kayıplarını önleyici nitelikte bir güvence sağlamaktadır.
9.5. Yatırım Yoluyla Vatandaşlığın Sağladığı Bütüncül Avantaj
Yatırım yoluyla Türk vatandaşlığı; bir taraftan yatırımcının sermayesini Türkiye’de güvenilir bir hukuki çerçevede değerlendirmesini sağlarken, diğer taraftan kendisine ve ailesine yukarıdaki bölümlerde detaylı biçimde açıklanan tüm hakları (seyahat özgürlüğü, eğitim, sağlık, sosyal güvence, mülkiyet hakkı, ticari fırsatlar ve çifte vatandaşlık) kazandırmaktadır. Bu yönüyle program; salt bir vatandaşlık edinme yöntemi değil, aynı zamanda kapsamlı bir yaşam stratejisidir.
SONUÇ: TÜRKİYE’DE YENİ BİR HAYATA AÇILAN KAPI
Türk pasaportu; köklü bir devlet geleneğinin, geniş bir diplomatik ağın ve sağlam bir hukuki sistemin sahibine sunduğu çok yönlü bir ayrıcalıktır. Vizesiz seyahat olanaklarından eğitim ve sağlık güvencesine, mülkiyet hakkından şirket kuruluş kolaylıklarına, sosyal yardımlardan çifte vatandaşlık avantajlarına kadar uzanan bu geniş yelpaze; Türk vatandaşlığını sadece bir hukuki statü değil, aynı zamanda küresel bir kimlik hâline getirmektedir.
Türkiye’de yapılacak doğru bir yatırım; başvuru sahibinin ve ailesinin Türk vatandaşlığını, Türk pasaportunu ve buna bağlı tüm hakları güvenli, hızlı ve hukuka uygun bir biçimde elde etmesinin yegâne yoludur. Bu kapsamlı sürecin her aşamasında profesyonel hukuki danışmanlığın varlığı; hem yatırımın güvenliğini hem de başvurunun başarısını doğrudan etkileyen belirleyici unsurdur.
Türkiye’de güçlü bir gelecek, tek doğru adımla başlar: Türkiye’ye yatırımla.`;

const HEADING_PATTERN = /^(BÖLÜM \d+\.|SONUÇ:|\d+\.\d+\.)/;

function isHeading(line: string) {
  return HEADING_PATTERN.test(line);
}

function shouldStartNumberedList(line: string, nextLine?: string) {
  return (
    line.endsWith(":") &&
    Boolean(nextLine) &&
    !isHeading(nextLine ?? "") &&
    (nextLine?.length ?? 0) < 120
  );
}

function pushIntro(
  sections: PageSection[],
  current: { title?: string; paragraphs: string[] } | null
) {
  if (!current) return;
  if (!current.title && current.paragraphs.length === 0) return;
  sections.push({
    type: "intro",
    ...(current.title ? { title: current.title } : {}),
    paragraphs: current.paragraphs,
  });
}

function buildPassportSections(text: string): PageSection[] {
  const lines = text.split(/\r?\n/).map((line) => line.trim());
  const sections: PageSection[] = [];
  let current: { title?: string; paragraphs: string[] } | null = null;
  let isFirstSection = true;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const nextLine = lines[index + 1];

    if (!line) continue;

    if (!current) {
      if (isFirstSection) {
        current = { title: line, paragraphs: [] };
        isFirstSection = false;
        continue;
      }

      current = { paragraphs: [] };
    }

    if (isHeading(line)) {
      pushIntro(sections, current);
      current = { title: line, paragraphs: [] };
      continue;
    }

    if (shouldStartNumberedList(line, nextLine)) {
      current.paragraphs.push(line);
      pushIntro(sections, current);
      current = null;

      const items: Array<{ title: string }> = [];
      let cursor = index + 1;

      while (cursor < lines.length) {
        const itemLine = lines[cursor];
        if (!itemLine) {
          cursor += 1;
          continue;
        }

        if (isHeading(itemLine) || shouldStartNumberedList(itemLine, lines[cursor + 1])) {
          break;
        }

        if (itemLine.length > 140 && items.length > 0) {
          break;
        }

        items.push({ title: itemLine });
        cursor += 1;
      }

      if (items.length > 0) {
        sections.push({ type: "numbered", items });
        index = cursor - 1;
      }
      continue;
    }

    current.paragraphs.push(line);
  }

  pushIntro(sections, current);

  return sections;
}

const EMPTY_LOCALIZED_COPY = {
  metadata: {
    breadcrumbLabel: "Passport Advantages",
    title: "Passport Advantages",
    description: "Passport Advantages",
  },
  hero: {
    summary: "",
    imageAlt: "Passport advantages page visual",
  },
  sections: [],
} satisfies CitizenshipDetailPageCopy;

export const PASSPORT_ADVANTAGES_PAGE = {
  tr: {
    metadata: {
      breadcrumbLabel: "Pasaport Avantajları",
      title: "Pasaport Avantajları",
      description:
        "Türk pasaportunun seyahat, eğitim, sağlık, sosyal güvence, mülkiyet, şirket kurma, çifte vatandaşlık ve yatırım yoluyla vatandaşlık avantajları.",
    },
    hero: {
      summary: "Yatırımdan Vatandaşlığa, Vatandaşlıktan Küresel Geleceğe",
      imageAlt: "Türk pasaportunun avantajları sayfası görseli",
    },
    sections: buildPassportSections(PASSPORT_ADVANTAGES_TEXT),
  },
  en: EMPTY_LOCALIZED_COPY,
  ru: EMPTY_LOCALIZED_COPY,
  ar: EMPTY_LOCALIZED_COPY,
  fa: EMPTY_LOCALIZED_COPY,
} satisfies Record<SeoLocale, CitizenshipDetailPageCopy>;
