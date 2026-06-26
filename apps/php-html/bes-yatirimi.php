<?php
require_once 'includes/schema.php';
$seoKey = 'bes-yatirimi';
include 'includes/header.php';

// Helper functions for parsing inline markdown
function parse_inline_links(string $text, string $lang): string {
    $regex = '/\[([^\]]+)\]\(([^)]+)\)/';
    return preg_replace_callback($regex, function($matches) use ($lang) {
        $linkText = $matches[1];
        $linkUrl = $matches[2];
        
        if (strpos($linkUrl, '/') === 0 && strpos($linkUrl, '/' . $lang . '/') !== 0 && $linkUrl !== '/' . $lang) {
            $supportedLangs = ["tr", "en", "ru", "ar", "fa"];
            $hasLangPrefix = false;
            foreach ($supportedLangs as $l) {
                if (strpos($linkUrl, '/' . $l . '/') === 0 || $linkUrl === '/' . $l) {
                    $hasLangPrefix = true;
                    break;
                }
            }
            if (!$hasLangPrefix) {
                if (strpos($linkUrl, '/citizenship') === 0) {
                    $linkUrl = "citizenship.php?lang=" . $lang;
                } else if (strpos($linkUrl, '/services') === 0) {
                    $linkUrl = "services.php?lang=" . $lang;
                } else if ($linkUrl === '/') {
                    $linkUrl = "index.php?lang=" . $lang;
                } else {
                    $linkUrl = trim($linkUrl, '/') . ".php?lang=" . $lang;
                }
            }
        }
        return '<a href="' . htmlspecialchars($linkUrl) . '" class="text-red-700 hover:text-red-900 underline font-semibold transition-colors duration-200">' . htmlspecialchars($linkText) . '</a>';
    }, $text);
}

function render_parsed_desc(string $text, string $lang): string {
    $baseClass = "text-[14px] leading-7 text-gray-600";
    $blocks = preg_split('/\n\n+/', $text);
    $html = '<div class="mt-2 space-y-3">';
    
    foreach ($blocks as $block) {
        $trimmed = trim($block);
        if (!$trimmed) continue;
        
        // 1. Blockquote
        if (strpos($trimmed, '>') === 0) {
            $cleanText = ltrim(substr($trimmed, 1));
            $html .= '<blockquote class="border-l-4 border-blue-600 bg-blue-50/50 px-4 py-3 text-blue-950 rounded-r-lg my-4 text-[14px] leading-relaxed font-normal not-italic">';
            $html .= parse_inline_links($cleanText, $lang);
            $html .= '</blockquote>';
            continue;
        }
        
        // 2. Image markdown ![caption](src)
        if (preg_match('/^!\[(.*?)\]\((.*?)\)$/', $trimmed, $imageMatch)) {
            $caption = $imageMatch[1];
            $src = $imageMatch[2];
            $cleanSrc = ltrim($src, '/');
            $html .= '<figure class="my-5">';
            $html .= '<img src="' . htmlspecialchars($cleanSrc) . '" alt="' . htmlspecialchars($caption) . '" class="w-full rounded-lg border border-gray-200 object-contain shadow-sm" />';
            if ($caption) {
                $html .= '<figcaption class="mt-2 text-center text-xs italic text-gray-400">' . htmlspecialchars($caption) . '</figcaption>';
            }
            $html .= '</figure>';
            continue;
        }
        
        // 3. Subheading ###
        if (strpos($trimmed, '###') === 0) {
            $cleanText = ltrim(substr($trimmed, 3));
            $html .= '<h4 class="text-[15px] font-bold text-gray-900 mt-4 mb-2">';
            $html .= parse_inline_links($cleanText, $lang);
            $html .= '</h4>';
            continue;
        }
        
        $lines = array_filter(explode("\n", $block), function($l) { return trim($l) !== ''; });
        if (empty($lines)) continue;
        
        $isBullet = function($l) { return preg_match('/^[-•✔✓]\s/', trim($l)); };
        $isNumbered = function($l) { return preg_match('/^\d+\.\s/', trim($l)); };
        
        $allBullet = true;
        $allNumbered = true;
        foreach ($lines as $line) {
            if (!$isBullet($line)) $allBullet = false;
            if (!$isNumbered($line)) $allNumbered = false;
        }
        
        if ($allBullet) {
            $html .= '<ul class="list-none space-y-1.5">';
            foreach ($lines as $line) {
                $cleanLine = preg_replace('/^[\s\t•\-*✓✔◦‣▪]+\s*/', '', trim($line));
                $html .= '<li class="flex gap-2.5 ' . $baseClass . '">';
                $html .= '<span class="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-red-700"></span>';
                $html .= '<span>' . parse_inline_links($cleanLine, $lang) . '</span>';
                $html .= '</li>';
            }
            $html .= '</ul>';
            continue;
        }
        
        if ($allNumbered) {
            $html .= '<ol class="space-y-1.5">';
            foreach ($lines as $line) {
                if (preg_match('/^(\d+)\.\s+(.*)/', trim($line), $m)) {
                    $num = $m[1];
                    $cleanLine = $m[2];
                } else {
                    $num = '';
                    $cleanLine = $line;
                }
                $html .= '<li class="flex gap-2 ' . $baseClass . '">';
                if ($num !== '') {
                    $html .= '<span class="shrink-0 font-medium text-gray-500">' . htmlspecialchars($num) . '.</span>';
                }
                $html .= '<span>' . parse_inline_links($cleanLine, $lang) . '</span>';
                $html .= '</li>';
            }
            $html .= '</ol>';
            continue;
        }
        
        $firstBulletIdx = -1;
        $firstNumberedIdx = -1;
        foreach ($lines as $idx => $line) {
            if ($isBullet($line) && $firstBulletIdx === -1) $firstBulletIdx = $idx;
            if ($isNumbered($line) && $firstNumberedIdx === -1) $firstNumberedIdx = $idx;
        }
        
        $splitIdx = -1;
        if ($firstBulletIdx >= 0) $splitIdx = $firstBulletIdx;
        elseif ($firstNumberedIdx >= 0) $splitIdx = $firstNumberedIdx;
        
        if ($splitIdx > 0) {
            $introLines = array_slice($lines, 0, $splitIdx);
            $listLines = array_slice($lines, $splitIdx);
            $useBullet = $isBullet($listLines[0]);
            
            $html .= '<p class="' . $baseClass . '">' . parse_inline_links(implode(' ', $introLines), $lang) . '</p>';
            if ($useBullet) {
                $html .= '<ul class="list-none mt-2 space-y-1.5">';
                foreach ($listLines as $line) {
                    $cleanLine = preg_replace('/^[\s\t•\-*✓✔◦‣▪]+\s*/', '', trim($line));
                    $html .= '<li class="flex gap-2.5 ' . $baseClass . '">';
                    $html .= '<span class="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-red-700"></span>';
                    $html .= '<span>' . parse_inline_links($cleanLine, $lang) . '</span>';
                    $html .= '</li>';
                }
                $html .= '</ul>';
            } else {
                $html .= '<ol class="mt-2 space-y-1.5">';
                foreach ($listLines as $line) {
                    if (preg_match('/^(\d+)\.\s+(.*)/', trim($line), $m)) {
                        $num = $m[1];
                        $cleanLine = $m[2];
                    } else {
                        $num = '';
                        $cleanLine = $line;
                    }
                    $html .= '<li class="flex gap-2 ' . $baseClass . '">';
                    if ($num !== '') {
                        $html .= '<span class="shrink-0 font-medium text-gray-500">' . htmlspecialchars($num) . '.</span>';
                    }
                    $html .= '<span>' . parse_inline_links($cleanLine, $lang) . '</span>';
                    $html .= '</li>';
                }
                $html .= '</ol>';
            }
            continue;
        }
        
        $html .= '<p class="' . $baseClass . '">' . parse_inline_links(implode(' ', $lines), $lang) . '</p>';
    }
    
    $html .= '</div>';
    return $html;
}

function render_intro_section($section, $lang) {
    if (empty($section)) return '';
    $html = '<div class="mb-12">';
    if (!empty($section['eyebrow'])) {
        $html .= '<p class="mb-2 text-[11px] font-extrabold uppercase tracking-[0.25em] text-red-600">' . htmlspecialchars($section['eyebrow']) . '</p>';
    }
    if (!empty($section['title'])) {
        $html .= '<h2 class="mb-4 text-xl font-bold leading-snug tracking-tight text-gray-900 sm:text-2xl">' . htmlspecialchars($section['title']) . '</h2>';
    }
    
    if (!empty($section['paragraphs'])) {
        foreach ($section['paragraphs'] as $p) {
            $trimmed = trim($p);
            if (strpos($trimmed, '>') === 0) {
                $clean = ltrim(substr($trimmed, 1));
                $html .= '<blockquote class="border-l-4 border-blue-600 bg-blue-50/50 px-4 py-3 text-blue-950 rounded-r-lg my-4 text-base leading-relaxed font-normal not-italic">' . parse_inline_links($clean, $lang) . '</blockquote>';
            } else if (preg_match('/^[-•✔✓]\s/', $trimmed) || preg_match('/^[•\-*✓✔◦‣▪]/', $trimmed)) {
                $clean = preg_replace('/^[\s\t•\-*✓✔◦‣▪]+\s*/', '', $trimmed);
                $html .= '<ul class="list-none mb-4 space-y-1.5 pl-1"><li class="flex gap-3 text-base leading-relaxed text-gray-700"><span class="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700"></span><span>' . parse_inline_links($clean, $lang) . '</span></li></ul>';
            } else {
                $html .= '<p class="mb-4 text-base leading-7 text-gray-700">' . parse_inline_links($p, $lang) . '</p>';
            }
        }
    }
    $html .= '</div>';
    return $html;
}

function render_numbered_section($section, $lang) {
    if (empty($section) || empty($section['items'])) return '';
    $html = '<div class="mb-14 border-t border-gray-100 pt-10 first:border-t-0 first:pt-0">';
    if (!empty($section['eyebrow'])) {
        $html .= '<p class="mb-2 text-[11px] font-extrabold uppercase tracking-[0.25em] text-red-600">' . htmlspecialchars($section['eyebrow']) . '</p>';
    }
    if (!empty($section['title'])) {
        $html .= '<h2 class="mb-4 text-xl font-bold leading-snug tracking-tight text-gray-900 sm:text-2xl">' . htmlspecialchars($section['title']) . '</h2>';
    }
    if (!empty($section['description'])) {
        $html .= '<p class="mb-6 text-[15px] leading-7 text-gray-600">' . parse_inline_links($section['description'], $lang) . '</p>';
    }
    
    $html .= '<ol class="space-y-4">';
    foreach ($section['items'] as $i => $item) {
        $html .= '<li class="flex gap-4 rounded-lg border border-gray-100 bg-gray-50 p-5">';
        $html .= '<span class="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0a192f] text-xs font-bold text-white">' . ($i + 1) . '</span>';
        $html .= '<div class="min-w-0 w-full">';
        $html .= '<p class="text-[15px] font-semibold leading-snug text-gray-900">' . htmlspecialchars(preg_replace('/^[\s\t•\-*✓✔◦‣▪]+\s*/', '', $item['title'])) . '</p>';
        
        if (!empty($item['desc'])) {
            $html .= render_parsed_desc($item['desc'], $lang);
        }
        $html .= '</div>';
        $html .= '</li>';
    }
    $html .= '</ol>';
    
    $html .= '</div>';
    return $html;
}

function render_bullet_section($section, $lang) {
    if (empty($section) || empty($section['items'])) return '';
    $html = '<div class="mb-14 border-t border-gray-100 pt-10 first:border-t-0 first:pt-0">';
    if (!empty($section['eyebrow'])) {
        $html .= '<p class="mb-2 text-[11px] font-extrabold uppercase tracking-[0.25em] text-red-600">' . htmlspecialchars($section['eyebrow']) . '</p>';
    }
    if (!empty($section['title'])) {
        $html .= '<h2 class="mb-4 text-xl font-bold leading-snug tracking-tight text-gray-900 sm:text-2xl">' . htmlspecialchars($section['title']) . '</h2>';
    }
    if (!empty($section['description'])) {
        $html .= '<p class="mb-6 text-[15px] leading-7 text-gray-600">' . parse_inline_links($section['description'], $lang) . '</p>';
    }
    
    $html .= '<ul class="list-none space-y-4">';
    foreach ($section['items'] as $item) {
        $html .= '<li class="flex gap-4 rounded-lg border border-gray-100 bg-gray-50 p-5">';
        $html .= '<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700"></span>';
        $html .= '<div class="min-w-0 w-full">';
        $html .= '<p class="text-[15px] font-semibold leading-snug text-gray-900">' . htmlspecialchars(preg_replace('/^[\s\t•\-*✓✔◦‣▪]+\s*/', '', $item['title'])) . '</p>';
        
        if (!empty($item['desc'])) {
            $html .= render_parsed_desc($item['desc'], $lang);
        }
        $html .= '</div>';
        $html .= '</li>';
    }
    $html .= '</ul>';
    $html .= '</div>';
    return $html;
}

function render_plain_bullet_section($section, $lang) {
    if (empty($section) || empty($section['items'])) return '';
    $html = '<div class="mb-10">';
    if (!empty($section['eyebrow'])) {
        $html .= '<p class="mb-2 text-[11px] font-extrabold uppercase tracking-[0.25em] text-red-600">' . htmlspecialchars($section['eyebrow']) . '</p>';
    }
    if (!empty($section['title'])) {
        $headingTag = !empty($section['eyebrow']) ? 'h2' : 'h3';
        $titleClass = $headingTag === 'h2'
            ? 'mb-4 text-xl font-bold leading-snug tracking-tight text-gray-900 sm:text-2xl'
            : 'mb-3 text-lg font-semibold text-gray-900';
        $html .= '<' . $headingTag . ' class="' . $titleClass . '">' . htmlspecialchars($section['title']) . '</' . $headingTag . '>';
    }
    if (!empty($section['description'])) {
        $html .= '<p class="mb-6 text-[15px] leading-7 text-gray-600">' . parse_inline_links($section['description'], $lang) . '</p>';
    }
    
    $html .= '<ul class="list-none divide-y divide-gray-100 border-y border-gray-100">';
    foreach ($section['items'] as $item) {
        $cleanLine = preg_replace('/^[\s\t•\-*✓✔◦‣▪]+\s*/', '', trim($item));
        $html .= '<li class="flex gap-3 py-3 text-sm leading-relaxed text-gray-700">';
        $html .= '<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700"></span>';
        $html .= '<span>' . parse_inline_links($cleanLine, $lang) . '</span>';
        $html .= '</li>';
    }
    $html .= '</ul>';
    $html .= '</div>';
    return $html;
}

function render_legal_section($section, $lang) {
    $html = '<div class="mb-14 border-t border-gray-100 pt-10 first:border-t-0 first:pt-0">';
    if (!empty($section['eyebrow'])) {
        $html .= '<p class="mb-2 text-[11px] font-extrabold uppercase tracking-[0.25em] text-red-600">' . htmlspecialchars($section['eyebrow']) . '</p>';
    }
    if (!empty($section['title'])) {
        $html .= '<h2 class="mb-4 text-xl font-bold leading-snug tracking-tight text-gray-900 sm:text-2xl">' . htmlspecialchars($section['title']) . '</h2>';
    }
    
    if (!empty($section['items'])) {
        $html .= '<ul class="space-y-4">';
        foreach ($section['items'] as $item) {
            $html .= '<li class="rounded-lg border border-gray-100 bg-gray-50 p-5">';
            $html .= '<p class="text-[15px] font-semibold text-gray-900">' . htmlspecialchars($item['title']) . '</p>';
            $html .= '<p class="mt-2 text-[14px] leading-7 text-gray-600">' . parse_inline_links($item['text'], $lang) . '</p>';
            $html .= '</li>';
        }
        $html .= '</ul>';
    }
    $html .= '</div>';
    return $html;
}

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
$BES_CITIZENSHIP_TEXT = "Bireysel Emeklilik Sistemi (BES) ve Türk Vatandaşlığı\n\nTürk vatandaşlığının yatırım yoluyla, istisnai yoldan kazanılması kapsamında başvurulabilecek yöntemlerden biri de kanunda öngörülen şekil ve şartlara uygun olarak Bireysel Emeklilik Sistemi’ne yatırım yapılmasıdır. Bu başvuru yolunda yabancı yatırımcı, belirli tutardaki katkı payını vatandaşlık başvurusuna uygun özel bir BES planı kapsamında sisteme aktararak, mevzuatta öngörülen süre boyunca sistemde kalmayı taahhüt eder. Bu nedenle BES yatırımı yoluyla vatandaşlık başvurusu, yalnızca bir emeklilik sözleşmesi kurulmasından ibaret olmayıp; yatırım tutarının aktarımı, fon planının seçimi, üç yıllık taahhüt süreci ve yetkili kurumlar nezdinde uygunluk belgesinin alınması gibi aşamaların hukuki ve teknik olarak doğru yürütülmesini gerektirir.\n\nBireysel Emeklilik Sistemi (BES) Nedir?\nBireysel Emeklilik Sistemi (BES), Türkiye’de gönüllü olarak katılınan ve emeklilik döneminde birikim oluşturmayı amaçlayan, katkı paylarınızın “emeklilik yatırım fonları”nda değerlendirildiği uzun vadeli bir tasarruf sistemidir. Sisteme bir emeklilik şirketi üzerinden bir sözleşme ile girilir; siz düzenli ya da tek seferlik katkı payı ödersiniz, bu tutarlar seçtiğiniz fonlarda yatırıma yönlendirilir ve fonların performansına göre birikiminiz artabilir veya azalabilir.\n\nBES, banka mevduatı gibi “anapara veya kur garantisi” veren bir ürün değildir; birikiminizin değeri fonların piyasa performansına bağlıdır. Bununla birlikte sistemin önemli bir teşviki “Devlet katkısı” uygulamasıdır.\n\nBES Emeklilik Sistemine Yapılacak Yatırımla Türk Vatandaşlığına Başvurmak Mümkün müdür?\nTürkiye’de, belirli büyüklükte bir BES yatırımı yaparak “istisnai Türk vatandaşlığına başvuru hakkı” doğuran özel bir uygulama bulunmaktadır. Bu yol; en az 500.000 ABD Doları veya karşılığı diğer yabancı para döviz tutarındaki katkı payının, “vatandaşlık” ibaresi taşıyan özel bir BES planı kapsamında ve en az 3 yıl sistemde tutulması esasına dayanır.\n\nTürkiye Cumhuriyet Merkez Bankası (TCMB) ile yapılan satış süreci tamamlandıktan sonra elde edilen TL tutarın emeklilik şirketi hesaplarına nakden intikal etmesiyle BES sözleşmesi yürürlüğe girer ve 3 yıllık asgari sistemde kalma süresi bu tarihte başlar.\n\nVatandaşlık planınızın içinde tanımlı fon havuzu kapsamında kalmak kaydıyla, Türkiye’deki diğer fon kategorilerine (altın, gümüş, platin, katılım esaslı fonlar vb.) geçişler; planın sunduğu seçenekler ve mevzuattaki genel fon değişikliği kuralları çerçevesinde mümkün olabilir. Ancak unvanında “yabancı” veya “dış borçlanma araçları” ibaresi bulunan fonlar, bu vatandaşlık planlarında baştan dışarıda bırakıldığından söz konusu iki tür etikete sahip fonlara geçiş yapılamaz.\n\nBuradaki pratik sınır şudur: Emeklilik şirketinizin vatandaşlık planı için tanımladığı fonlar belirlidir ve fon dağılımınızı yalnızca bu menü içinde yaparsınız. Yani uygulama, “Türkiye’deki her fona serbestçe geçiş” değil; “planın izin verdiği fonlar içinde fon dağılımının yönetilmesi” şeklinde işler.\n\nBES Sistemi Kur Koruması Sağlar mı?\nKur koruması konusuna, özellikle yabancı yatırımcılar açısından açık ve net yaklaşmak gerekir. Vatandaşlık BES süreci; dövizin TCMB aracılığıyla TL’ye çevrilip BES fonlarına yönlendirilmesi mantığıyla kurgulandığı için, bankalardaki “kur korumalı mevduat” benzeri otomatik bir kur garantisi mekanizması olarak sunulmamalıdır.\n\nYatırımcı fiilen TL bazlı fonlarda yatırım yapacağı için birikimin TL getirisi seçilen fonların performansına bağlıdır; USD bazında bakıldığında ise TL’nin döviz karşısındaki hareketi ayrıca etki eder. Buna karşılık mevzuat, kur hareketleri nedeniyle sonradan bakiyenin 500.000 USD karşılığının altına inmesinin vatandaşlık başvurusunu veya kazanımını otomatik olarak bozmayacağını da açıkça düzenlemektedir.\n\nÖrneğin, 500.000 USD ilk işlem gününde satılarak TL’ye çevrilip elde edilen tutarın tamamıyla altın alınması durumunda; 3 yılın sonunda altın yine aynı bankaya satılıp para, TL veya USD olarak çekilebilir.\n\nBES Sistemiyle Vatandaşlık Başvurusunda 3 Yıllık Taahhüt Süresinin Sonunda Sözleşmenin Akıbeti Ne Olur?\n“3 yıl sonunda yatırılan paranın akıbeti ne olur?” sorusuna ilişkin olarak; bu modelde 3 yıllık süre, vatandaşlığa ilişkin taahhüt ve koruma süresidir. 3 yıl dolduğunda BES sözleşmesi otomatik olarak sona ermez. Birikim sistemde kalmaya devam edebilir ve fonlarda değerlendirilmeyi sürdürebilir; ayrıca istenmesi hâlinde toplu çekim, kısmi çekim ya da programlı geri ödeme gibi seçeneklerle birikimin geri alınması planlanabilir.\n\nMevzuat metnindeki örnek bilgilendirme bölümünde de, birikiminizin henüz ödenmemiş kısmının BES’te kalıp getiri elde etmeye devam edebileceği; hesabınızda kalan tutar için fon dağılımı değişikliği yapabileceğiniz ve başka bir şirkete aktarım hakkınızı kullanabileceğiniz ifade edilmektedir. Fon dağılımı değişikliği sayısı çalışılan şirkete göre farklılık göstermekle birlikte, genelde 6 ile 12 kez fon dağılımı değişikliği yapılabilir. Bu şirketler, çoğunlukla bankaların kurduğu fon şirketleridir.\n\nBu durum, vatandaşlık planlarında ilk 3 yıl boyunca uygulanan “aktarım yasağı” kuralıyla birlikte değerlendirildiğinde şu anlama gelir: 3 yıl tamamlanmadan şirket değişimi veya aktarım yapılamaz; 3 yılın sonunda ise genel BES aktarım ve plan değişikliği haklarınız (o tarihteki mevzuat ve sözleşme koşullarına tabi olmak üzere) normal çerçevesine döner.\n\n“Kesinti olur mu?” sorusunda ise iki ayrı kesinti türünün ayrı ayrı değerlendirilmesi gerekir. Birincisi, vatandaşlık planlarına özgü açık bir avantajdır: giriş aidatı ve yönetim gider kesintisi alınmaması. Bu durum, özellikle yüksek tutarlı girişlerde önemli bir maliyet avantajı yaratır. İkincisi ise sistemden ayrılırken veya ödeme alınırken getiriler üzerinden uygulanabilen vergi kesintileri ile devlet katkısında hak ediş nedeniyle oluşan kayıplardır. Genelgenin bilgilendirme kısmında, toplu para çekimi veya programlı geri ödemede elde edilmiş ek getiri üzerinden net %5 oranında vergi kesintisi yapılacağı belirtilmiştir.\n\nBES Sistemiyle Vatandaşlık Başvurusunda Bulunduğum Takdirde Yatırım Yaptığım Fonu Değiştirebilir miyim?\nBES sistemi ile yapılacak vatandaşlık başvurusunda fon değiştirme konusunda en net özet şudur: Vatandaşlık BES planlarında, “yabancı” veya “dış borçlanma araçları” ibareli fonlara yer verilmez ve bu fonlar tercih edilemez. Bunun dışındaki fonlar için ise geçiş; planın sunduğu fon seti içinde ve BES’in genel fon dağılımı değişikliği kuralları çerçevesinde yapılabilir.\n\nÖrneğin altın fonu alınmışken, altın tutarının bir kısmıyla ya da tamamıyla gümüş fonuna geçilebilir. Ancak ilk 3 yıl boyunca plan değişikliği ve başka bir şirkete aktarım yapılması yasaktır. 3 yılın sonunda ise birikiminizi BES içinde tutmaya devam edebilir, fon dağılımınızı değiştirebilir; isterseniz banka ile yapılan sözleşme kapsamında olmak üzere birikiminizi toplu veya programlı şekilde çekebilirsiniz.\n\nBES Sistemiyle Vatandaşlık Başvurusunda Uygunluk Belgesine Başvuru İçin İstenecek Bilgi ve Belgeler Nelerdir? Uygunluk Belgesi Başvurusuna Kadar İzlenecek Süreç Nasıl İlerler?\nUygulamada emeklilik şirketleri; SEDDK başvurusu ve iç kontrol süreçleri için yatırımın akışını ispatlayan belgeleri talep etmektedir. Tipik olarak aşağıdaki belgeler bu dosyada yer almakta olup söz konusu belgeler, banka ile çalışan kendi bünyelerindeki fon şirketi tarafından hazırlanmaktadır:\n• Yatırımcının pasaport örneği ve kimlik tespiti dokümanları\n• 3 yıl sistemde kalma taahhüdü (vatandaşlık planı kapsamında)\n• Döviz veya efektifin bankaya yatırıldığını ya da transfer edildiğini gösteren banka dekontu, SWIFT veya muhasebe fişi benzeri kayıtlar\n• Dövizin banka aracılığıyla TCMB’ye satıldığını gösteren belge veya işlem kaydı\n• Döviz satışından elde edilen TL’nin katkı payı olarak emeklilik şirketi hesabına intikal ettiğini gösteren dekont veya kayıt\n\nBES ile yatırım yoluyla Türk vatandaşlığı sürecinde başvuru, iki paralel hat üzerinden ilerler:\n• (i) BES yatırımının usule uygun yapıldığının SEDDK tarafından tespiti ve bunun sonucunda verilen uygunluk yazısı.\n• (ii) Bu uygunluk yazısı ve standart vatandaşlık başvuru dosyasıyla Nüfus ve Vatandaşlık tarafında yapılan istisnai vatandaşlık (VAT-4) başvurusu.\n\nBaşvuru Süreci\nYabancı yatırımcı önce Türkiye’de faaliyet gösteren bir emeklilik şirketi üzerinden “vatandaşlık” kapsamındaki BES planına dâhil olur. Teklif ve sözleşme aşamasında emeklilik şirketi, yatırımcıdan özellikle şu bilgileri talep eder:\n• İkamet izni başvurusunda bulunulacak valilik bilgisi,\n• Pasaport örneği,\n• Üç yıl sistemde kalma taahhüdü.\n\nBunlara ek olarak, ilk üç yıl boyunca uygulanacak plan değişikliği ve aktarım kısıtları konusunda yatırımcıya bilgilendirme yapılır. Yatırımcı, emeklilik şirketinin yönlendirdiği bankaya katkı payı tutarındaki dövizi yatırır; döviz, TCMB’ye satılarak TL’ye çevrilir ve TL tutarın emeklilik şirketi hesaplarına nakden intikal ettiği anda BES sözleşmesi yürürlüğe girer. Böylece vatandaşlık kriteri açısından kritik olan 3 yıllık asgari sistemde kalma süresi de bu tarihten itibaren işlemeye başlar.\n\nBu yatırım işlemi tamamlandıktan sonra emeklilik şirketi, sözleşmenin yürürlük tarihinden itibaren 5 iş günü içinde (genelgede sayılan belgelerle) SEDDK’ya “uygunluk belgesi/uygunluk yazısı” başvurusunda bulunur. SEDDK incelemesi olumlu sonuçlanırsa uygunluk yazısı, yatırımcıya iletilmek üzere emeklilik şirketine gönderilir; aynı zamanda Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü, Göç İdaresi Başkanlığı ve ilgili Valilik (İl Göç İdaresi Müdürlüğü) ile de paylaşılır. Uygunluk yazısı, vatandaşlık dosyasında “BES yatırımıyla yatırım kriterinin sağlandığını” gösteren temel resmî referanstır.\n\nBES’e Özgü (SEDDK Uygunluk Sürecinde) Verilen Belgeler ve Bilgiler\nVatandaşlık amaçlı BES başlatılırken emeklilik şirketine verilmesi beklenen temel set; pasaport örneği, 3 yıl sistemde kalma taahhüdü ve (ikamet veya uzun dönem ikamet süreçleri de planlanıyorsa) başvurulacak valilik bilgisi şeklinde özetlenebilir. Uygunluk yazısının düzenlenmesi de bu verilerin ve yatırım akışının (bankaya yatırma → TCMB’ye satış → TL’nin şirkete intikali → sözleşmenin yürürlüğe girmesi) mevzuata uygunluğunun teyidiyle tamamlanır.\n\nBES Sistemiyle Vatandaşlık Başvurusu Süreç Akışı\nBES yoluyla Türk vatandaşlığı, “yatırım yoluyla istisnai vatandaşlık” kapsamında tanınan bir başvuru hakkıdır. Bu yöntemde yabancı yatırımcı; Türkiye’de faaliyet gösteren bir emeklilik şirketi üzerinden “vatandaşlık” ibareli BES planına dâhil olur, en az 500.000 USD veya karşılığı döviz tutarında katkı payı yatırır ve bu tutarı en az 3 yıl boyunca sistemde tutmayı taahhüt eder.\n\nSürecin temel mantığı; yatırımın mevzuata uygun şekilde yapıldığının ve 3 yıl boyunca korunacağının Sigortacılık ve Özel Emeklilik Düzenleme ve Denetleme Kurumu (SEDDK) tarafından tespit edilmesi ve bu tespitin bir uygunluk yazısı/uygunluk belgesi ile resmîleştirilmesidir.\n\nSüreç Akışı (Yatırımdan Vatandaşlık Başvurusuna)\n• Emeklilik şirketi üzerinden vatandaşlık planının kurulması: Yatırımcı adına “vatandaşlık” ibareli emeklilik planı ile yeni bir BES sözleşmesi kurulur. Vatandaşlık planları, yalnızca bu amaçla düzenlenen planlardır ve mevzuatta özel şekilde tanımlanır. Bu şirketin tespiti için aslında önce çalışılacak bankanın tespiti gerekir; bankanın kurduğu fon kuruluşuyla çalışılması daha pratik olacaktır.\n• Döviz transferi ve TL’ye dönüşüm: Yatırım tutarı, emeklilik şirketinin yönlendirdiği bankaya döviz olarak yatırılır veya transfer edilir; vatandaşlık uygulaması kapsamında döviz, banka aracılığıyla TCMB’ye satılarak TL’ye çevrilir.\n• Katkı payının BES’e intikali ve sürenin başlaması: Döviz satışından elde edilen TL tutar, emeklilik şirketi hesaplarına nakden intikal ettiği anda katkı payı olarak BES’e yatırılmış sayılır. Üç yıllık “sistemden çıkmama” süresi de bu yürürlük ve ödeme esasına göre başlar.\n• SEDDK uygunluk belgesi (uygunluk yazısı): Emeklilik şirketi, yatırımın şartlara uygun yapıldığını tevsik eden bilgi ve belgelerle SEDDK’ya başvurur; inceleme olumlu ise SEDDK tarafından uygunluk yazısı düzenlenir. Bu yazı, vatandaşlık başvurusunda yatırım kriterinin BES ile sağılandığını gösteren en kritik resmî belgedir ve ilgili kamu kurumlarıyla da paylaşılır.\n• Vatandaşlık başvurusu öncesinde gereken ikamet izni başvurusu: Vatandaşlık başvuruşuna temel evrak teşkil eden uygunluk belgesi temin edildikten sonra vatandaşlık başvuru sürecine geçilebilir. İstisnai yoldan vatandaşlık başvurusunun ön koşulu olan ikamet izni başvurusu, Göç İdaresi Müdürlüğü’ne yapılır. Bu ikamet izni türü; 6458 sayılı Yabancılar ve Uluslararası Koruma Kanunu’nun 31. maddesinin (j) bendinde belirtilen yatırımcı ikamet iznidir. Yatırım neticesinde düzenlenen uygunluk belgesi, aynı zamanda bu ikamet iznine başvurma hakkı tanıyan bir belgedir. Gerekli diğer evraklarla birlikte Göç İdaresi Müdürlüğü’ne ikamet izni başvurusunda bulunulur; bu aşamada yatırımcı ve varsa eşinin Göç İdaresi Müdürlüğü’nde hazır bulunması ve parmak izi vermesi gerekir. Gerekli evraklar teslim edilip yatırımcıların parmak izi verisi de alındıktan sonra ikamet izni başvurusu kayda alınmış olur. İkamet izni onaylandıktan sonra (dönemsel yoğunluğa bağlı olarak yaklaşık 10-15 gün) vatandaşlık başvurusu için son aşamaya geçilir.\n• İstisnai vatandaşlık başvurusu (VAT-4): Uygunluk yazısı alındıktan sonra istisnai vatandaşlık başvuru dosyası hazırlanır ve Türkiye içinde Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü üzerinden başvuru yapılır. Başvurunun temel formu VAT-4’tür. Posta ile başvuru kabul edilmez. Yatırımcı ve varsa eşi, bu başvuru sırasında Nüfus ve Vatandaşlık İşleri Müdürlüğü’nde hazır bulunmalıdır.\n\nNot: Yatırım yoluyla vatandaşlık başvurularında, mevzuat gereği millî güvenlik ve kamu düzeni değerlendirmeleri ile idari incelemeler sürecin bir parçasıdır. Dosya yönetiminde en önemli husus, yatırımın akışının (banka → TCMB satışı → BES’e intikal) eksiksiz ve ispatlanabilir şekilde kurulmasıdır.\n\nVatandaşlık Planlarında Kritik Sınırlamalar (3 Yıl Boyunca)\nVatandaşlık amaçlı BES planları, normal BES sözleşmelerinden bazı yönleriyle ayrılır. Mevzuat; bu planlarda giriş aidatı ve yönetim gider kesintisi alınmayacağını, ayrıca fon evreni ve bazı işlemler üzerinde sınırlama bulunduğunu açıkça düzenlemektedir. Özellikle:\n• Unvanında “yabancı” veya “dış borçlanma araçları” ibaresi bulunan fonlara (BEFAS fonları dâhil) vatandaşlık planlarında yer verilemez.\n• İlk 3 yıl boyunca plan değişikliği, emeklilik nedeniyle hesap birleştirme ve başka bir emeklilik şirketine aktarım (transfer) yapılamaz. Ancak çalışılan şirkete göre fon dağılımında 6 ile 12 kez değişiklik yapılabilir.\n\nFon tarafında uygulamada şu ayrım önemlidir: “plan/şirket değişikliği ve aktarım” üç yıl boyunca kapalıyken; fon dağılımı yönetimi, emeklilik şirketinin vatandaşlık planı içinde sunduğu fon seti ve BES’in genel kuralları çerçevesinde değerlendirilir. Bu nedenle süreç, “Türkiye’deki her fona serbestçe geçiş” değil; vatandaşlık planının izin verdiği fonlar arasında fon dağılımının yönetilmesi şeklinde yürür.\n\nBüromuz Ne Yapar? (Hizmet Kapsamı Örneği)\nBüromuz; yatırım yoluyla vatandaşlık sürecinde BES yatırımının hukuki kurgusunun yapılması, banka–emeklilik şirketi–SEDDK uygunluk sürecinin koordinasyonu, uygunluk yazısı sonrası VAT-4 dosyasının hazırlanması ve başvurunun ilgili merciler nezdinde takibi dâhil olmak üzere süreci uçtan uca yönetir.";

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
                    class="border-b border-gray-400 pb-px font-semibold text-gray-800 transition hover:border-red-700 hover:text-red-700"
                  >
                    <?= htmlspecialchars(__t('bes_page.cta.primaryCta') ?? 'Ücretsiz Danışın') ?>
                  </a>
                </p>
              </div>
            </div>

            <!-- SAĞ: Sticky Sidebar -->
            <aside class="w-full lg:w-64 lg:shrink-0">
              <div class="lg:sticky lg:top-28 space-y-5">

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
                    class="block border border-gray-900 bg-gray-900 px-5 py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-gray-800"
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
                    $otherPrograms = [
                      ['label' => __t('nav.investment_real_estate') ?? 'Gayrimenkul Yatırımı', 'href' => 'gayrimenkul-yatirimi.php?lang=' . $lang],
                      ['label' => __t('nav.investment_deposit') ?? 'Mevduat Hesabı', 'href' => 'mevduat-hesabi.php?lang=' . $lang],
                      ['label' => __t('nav.investment_employment') ?? 'İstihdam Oluşturmak', 'href' => 'istihdam-olusturmak.php?lang=' . $lang],
                      ['label' => __t('nav.investment_fund') ?? 'Gayrimenkul Yatırım Fonu', 'href' => 'gayrimenkul-yatirim-fonu.php?lang=' . $lang],
                      ['label' => __t('nav.investment_bonds') ?? 'Devlet Borçlanma Araçları', 'href' => 'devlet-borclanma-araclari.php?lang=' . $lang],
                      ['label' => __t('nav.item_cit_marriage') ?? 'Evlilik Yoluyla Vatandaşlık', 'href' => 'evlilik-yoluyla-vatandaslik.php?lang=' . $lang],
                      ['label' => __t('nav.item_cit_gen') ?? 'Genel Yolla Vatandaşlık', 'href' => 'genel-yolla-vatandaslik.php?lang=' . $lang],
                    ];
                    foreach ($otherPrograms as $prog):
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
