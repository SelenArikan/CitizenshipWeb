<?php
require_once 'includes/schema.php';
$seoKey = 'bes-yatirimi';
include 'includes/header.php';

// Resolver for backLabel dynamically matching Next.js
$backLabel = __t('services_page.detail_back');
if (strpos($backLabel, '{') === 0) {
    $backLabel = __t('nav.services');
    if (strpos($backLabel, '{') === 0) {
        $backLabel = 'Hizmetler';
    }
}

$consultationLabels = [
    'tr' => 'Danışmanlık',
    'en' => 'Consultation',
    'ru' => 'Консультация',
    'ar' => 'استشارة',
    'fa' => 'مشاوره',
];
$consultationLabel = $consultationLabels[$lang] ?? 'Danışmanlık';

// Raw BES Page content
$BES_CITIZENSHIP_TEXT = <<<'EOT'
Bireysel Emeklilik Sistemi (BES) ve Türk Vatandaşlığı

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
Büromuz; yatırım yoluyla vatandaşlık sürecinde BES yatırımının hukuki kurgusunun yapılması, banka–emeklilik şirketi–SEDDK uygunluk sürecinin koordinasyonu, uygunluk yazısı sonrası VAT-4 dosyasının hazırlanması ve başvurunun ilgili merciler nezdinde takibi dâhil olmak üzere süreci uçtan uca yönetir.
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

$sections = build_document_sections($BES_CITIZENSHIP_TEXT);
?>

    <main dir="<?= $dict['dir'] ?? 'ltr' ?>" class="bg-white">

      <!-- ── BREADCRUMB + HERO ── -->
      <section class="relative overflow-hidden border-b border-gray-100 bg-white pt-8 pb-12">
        <div class="relative mx-auto max-w-6xl px-6">
          <!-- Breadcrumb -->
          <nav class="mb-8 flex items-center gap-1.5 text-xs text-gray-400" aria-label="Breadcrumb">
            <a href="index.php?lang=<?= $lang ?>" class="transition hover:text-gray-700"><?= htmlspecialchars(__t('nav.home') ?? 'Anasayfa') ?></a>
            <span>/</span>
            <a href="services.php?lang=<?= $lang ?>" class="transition hover:text-gray-700"><?= htmlspecialchars($backLabel) ?></a>
            <span>/</span>
            <span class="text-gray-700 font-medium"><?= htmlspecialchars(__t('bes_page.hero.breadcrumbLabel') ?? 'BES Yatırımı') ?></span>
          </nav>

          <!-- Başlık -->
          <h1 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-950 md:text-4xl">
            <?= htmlspecialchars(__t('bes_page.hero.breadcrumbLabel') ?? 'BES Yatırımı') ?>
          </h1>
          <?php if ($summary = __t('bes_page.hero.summary')): ?>
            <p class="mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
              <?= htmlspecialchars($summary) ?>
            </p>
          <?php endif; ?>
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
                  } elseif ($s['type'] === 'bullet') {
                      echo render_bullet_section($s, $lang);
                  } elseif ($s['type'] === 'legal') {
                      echo render_legal_section($s, $lang);
                  }
              }
              ?>

              <!-- İletişim Notu -->
              <div class="border-t border-gray-100 pt-10 text-sm leading-relaxed text-gray-500">
                <p>
                  <?= htmlspecialchars(__t('bes_page.cta.description') ?? '') ?>
                  <a
                    href="contact.php?lang=<?= $lang ?>"
                    class="border-b border-gray-400 pb-px font-bold text-gray-800 transition hover:border-red-700 hover:text-red-700"
                  >
                    <?= htmlspecialchars(__t('bes_page.cta.primaryCta') ?? 'Ücretsiz Danışın') ?>
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
                    <?= htmlspecialchars(__t('bes_page.cta.title') ?? '') ?>
                  </p>
                  <a
                    href="contact.php?lang=<?= $lang ?>"
                    class="block border border-gray-900 bg-gray-900 px-5 py-2.5 text-center text-xs font-bold uppercase tracking-widest text-white transition hover:bg-gray-800"
                  >
                    <?= htmlspecialchars(__t('bes_page.cta.primaryCta') ?? 'Ücretsiz Danışın') ?>
                  </a>
                  <?php if ($secCta = __t('bes_page.cta.secondaryCta')): ?>
                    <a
                      href="questions.php?lang=<?= $lang ?>"
                      class="mt-2 block border border-gray-200 px-5 py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-gray-600 transition hover:border-gray-400"
                    >
                      <?= htmlspecialchars($secCta) ?>
                    </a>
                  <?php endif; ?>
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
