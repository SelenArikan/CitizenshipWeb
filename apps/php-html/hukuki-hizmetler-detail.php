<?php
require_once 'includes/schema.php';
require_once 'includes/legal-data.php';

if (!isset($slug)) {
    die('Slug not specified.');
}

if (!isset($LEGAL_DETAIL_PAGES[$slug])) {
    die('Legal service page not found.');
}

$seoKey = $slug;
include 'includes/header.php';

$homeLabel = __t('nav.home') ?? 'Anasayfa';
$backLabel = __t('nav.mega_leg') ?? 'Hukuki Hizmetler';
$backHref = 'services.php?lang=' . $lang;

$UI_TEXTS = [
    'tr' => [
        'relatedTitle' => "Diğer Hukuki Başlıklar",
        'consultationLabel' => "Danışmanlık",
        'ctaTitle' => "Dosyanızı birlikte planlayalım",
        'ctaDescription' => "Uygunluk, belge akışı ve başvuru sırasını birlikte değerlendirelim.",
    ],
    'en' => [
        'relatedTitle' => "Other Legal Topics",
        'consultationLabel' => "Consultation",
        'ctaTitle' => "Let us plan your file together",
        'ctaDescription' => "We can review eligibility, document flow, and filing order together.",
    ],
    'ru' => [
        'relatedTitle' => "Другие правовые темы",
        'consultationLabel' => "Консультация",
        'ctaTitle' => "Давайте спланируем ваше досье вместе",
        'ctaDescription' => "Вместе оценим соответствие условиям, комплект документов и порядок подачи.",
    ],
    'ar' => [
        'relatedTitle' => "مواضيع قانونية أخرى",
        'consultationLabel' => "استشارة",
        'ctaTitle' => "لنخطط ملفك معاً",
        'ctaDescription' => "يمكننا مراجعة الأهلية وتسلسل المستندات وترتيب التقديم معاً.",
    ],
    'fa' => [
        'relatedTitle' => "سایر موضوعات حقوقی",
        'consultationLabel' => "مشاوره",
        'ctaTitle' => "بیایید پرونده شما را با هم برنامه ریزی کنیم",
        'ctaDescription' => "می توانیم شرایط احراز، جریان مدارک و ترتیب ثبت پرونده را با هم بررسی کنیم.",
    ],
];

$ui = $UI_TEXTS[$lang] ?? $UI_TEXTS['tr'];

function isBulletLine($line) {
    return preg_match('/^(?:[•✔👉-]|[a-zçğıöşü]\)|[0-9]+\))\s*/ui', $line);
}

function isAllCapsHeading($line) {
    $letters = preg_replace('/[^A-Za-zÇĞİÖŞÜçğıöşü]/u', '', $line);
    if (mb_strlen($letters) < 8) return false;
    $upper = mb_convert_case($letters, MB_CASE_UPPER, "UTF-8");
    return $letters === $upper;
}

function isHeading($line, $index) {
    if ($index === 0) return true;
    if (preg_match('/^\d+(?:\.\d+)*[.)]\s+/u', $line)) return true;
    if (preg_match('/^[IVXLCDM]+\.\s+/u', $line)) return true;
    if (preg_match('/^(BÖLÜM|AŞAMA|Adım)\s+/ui', $line)) return true;
    if (preg_match('/^(Giriş|Sonuç|Hukuki Dayanak|Kimler Başvurabilir\?|Başvuru Koşulları Nelerdir\?|Gerekli Belgeler|Sık Sorulan Sorular)$/ui', $line)) return true;
    
    $specialHeadings = [
        "Veraset İlamının Hukuki Niteliği ve Yasal Dayanağı",
        "Görevli ve Yetkili Merci: Sulh Hukuk Mahkemesi ve Noter",
        "Sulh Hukuk Mahkemesinin Görevi",
        "Noterin Yetkisi ve Sınırları",
        "Mirasçılığın Belirlenmesi: Yasal ve Atanmış Mirasçılar",
        "Yasal Mirasçılar ve Zümre Sistemi",
        "Atanmış Mirasçılar",
        "Saklı Paylı Mirasçılar",
        "Veraset İlamı Alma Süreci",
        "Mirasın Kabulü, Reddi ve Borçlardan Sorumluluk",
        "Mirasın Gerçek (İradi) Reddi",
        "Mirasın Hükmen Reddi",
        "Mirasın Resmî Defter Tutularak Kabulü",
        "Veraset İlamının İptali",
        "Sürecin Tamamlanma Süresi",
        "Masraflar, Harçlar ve Vekâlet Ücreti",
        "Yabancılık Unsuru İçeren Mirasçılık Belgesi Talepleri",
        "Uygulanacak Hukukun Tespiti: MÖHUK",
        "Yurt Dışından Temin Edilen Belgelerin Tasdiki",
        "Yabancı Mahkeme Kararlarının Tanınması ve Tenfizi",
        "Yabancılarda Türkiye’deki Taşınmazlara İlişkin Mütekabiliyet ve Sınırlamalar",
        "Yabancı Uyruklu Kişilerden İstenebilecek Belgeler",
        "Veraset ve İntikal Vergisi Yükümlülüğü",
        "Uygulamada Sık Karşılaşılan Sorunlar",
        "Sonuç ve Değerlendirme",
        "1968 Karayolu Trafiği Konvansiyonuna Taraf Ülkeler"
    ];
    
    foreach ($specialHeadings as $sh) {
        if ($line === $sh) return true;
    }
    
    if (preg_match('/^Aşama \d+:.*$/u', $line)) return true;
    if (preg_match('/^İlgili Yargıtay Kararı:.*$/u', $line)) return true;
    
    return isAllCapsHeading($line);
}

function buildSectionsFromDocumentText($text) {
    $text = str_replace("\r", "", $text);
    $rawLines = explode("\n", $text);
    $lines = [];
    foreach ($rawLines as $line) {
        $trimmed = trim($line);
        if ($trimmed !== '') {
            $lines[] = $trimmed;
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
            $hasTitle = !empty($intro['title']) && trim($intro['title']) !== '';
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
    
    $createIntro = function($title = null) {
        return [
            'type' => 'intro',
            'title' => $title,
            'paragraphs' => []
        ];
    };
    
    $count = count($lines);
    for ($i = 0; $i < $count; $i++) {
        $line = $lines[$i];
        
        // Table 1: Aşama / Açıklama
        if (
            $line === "Aşama" &&
            $i + 1 < $count &&
            $lines[$i + 1] === "Açıklama" &&
            $i + 2 < $count &&
            preg_match('/^\d+\.\s+/', $lines[$i + 2])
        ) {
            $flushBullets();
            $flushIntro();
            
            $headers = ["Aşama", "Açıklama"];
            $rows = [];
            $tempIndex = $i + 2;
            
            while (
                $tempIndex < $count &&
                preg_match('/^\d+\.\s+/', $lines[$tempIndex]) &&
                $tempIndex + 1 < $count
            ) {
                $rows[] = [$lines[$tempIndex], $lines[$tempIndex + 1]];
                $tempIndex += 2;
            }
            
            $sections[] = [
                'type' => 'table',
                'headers' => $headers,
                'rows' => $rows
            ];
            
            $i = $tempIndex - 1;
            continue;
        }
        
        // Table 2: Ortalama Yıllık İhracat / Verilebilecek Yeşil Pasaport Sayısı
        if (
            $line === "Ortalama Yıllık İhracat (Son 3 Yıl)" &&
            $i + 1 < $count &&
            $lines[$i + 1] === "Verilebilecek Yeşil Pasaport Sayısı"
        ) {
            $flushBullets();
            $flushIntro();
            
            $headers = ["Ortalama Yıllık İhracat (Son 3 Yıl)", "Verilebilecek Yeşil Pasaport Sayısı"];
            $rows = [];
            $tempIndex = $i + 2;
            
            while (
                $tempIndex < $count &&
                !isHeading($lines[$tempIndex], $tempIndex) &&
                !isBulletLine($lines[$tempIndex]) &&
                $tempIndex + 1 < $count
            ) {
                $rows[] = [$lines[$tempIndex], $lines[$tempIndex + 1]];
                $tempIndex += 2;
            }
            
            $sections[] = [
                'type' => 'table',
                'headers' => $headers,
                'rows' => $rows
            ];
            
            $i = $tempIndex - 1;
            continue;
        }
        
        if (isBulletLine($line)) {
            if ($intro !== null) {
                $intro['paragraphs'][] = $line;
            } else {
                $bulletItems[] = $line;
            }
            continue;
        }
        
        $flushBullets();
        
        if (isHeading($line, $i)) {
            $flushIntro();
            $intro = $createIntro($line);
            continue;
        }
        
        if ($intro === null) {
            $intro = $createIntro();
        }
        $intro['paragraphs'][] = $line;
    }
    
    $flushBullets();
    $flushIntro();
    
    return $sections;
}

function render_table_section($section, $lang) {
    if (empty($section) || empty($section['headers'])) return '';
    
    $html = '<div class="mb-14 border-t border-gray-100 pt-10 first:border-t-0 first:pt-0">';
    if (!empty($section['eyebrow'])) {
        $html .= '<p class="mb-2 text-[11px] font-extrabold uppercase tracking-[0.25em] text-red-600">' . htmlspecialchars($section['eyebrow']) . '</p>';
    }
    if (!empty($section['title'])) {
        $html .= '<h2 class="mb-4 text-xl font-bold leading-snug tracking-tight text-gray-900 sm:text-2xl">' . htmlspecialchars($section['title']) . '</h2>';
    }
    if (!empty($section['description'])) {
        $html .= '<p class="mb-6 text-[15px] leading-7 text-gray-600 text-justify">' . parse_inline_links($section['description'], $lang) . '</p>';
    }
    
    $html .= '<div class="mt-4 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">';
    $html .= '<div class="overflow-x-auto">';
    $html .= '<table class="min-w-full divide-y divide-gray-200 text-sm">';
    $html .= '<thead class="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-700">';
    $html .= '<tr>';
    foreach ($section['headers'] as $header) {
        $html .= '<th class="px-6 py-3.5 text-left font-bold text-slate-900 border-b border-gray-200">' . parse_inline_links($header, $lang) . '</th>';
    }
    $html .= '</tr>';
    $html .= '</thead>';
    $html .= '<tbody class="divide-y divide-gray-200 bg-white">';
    foreach ($section['rows'] as $row) {
        $html .= '<tr class="transition-colors hover:bg-slate-50/50">';
        foreach ($row as $j => $cell) {
            $tdClass = ($j === 0) ? 'font-semibold text-slate-900 whitespace-nowrap' : 'font-normal';
            $html .= '<td class="px-6 py-4 text-gray-600 leading-relaxed ' . $tdClass . '">' . parse_inline_links($cell, $lang) . '</td>';
        }
        $html .= '</tr>';
    }
    $html .= '</tbody>';
    $html .= '</table>';
    $html .= '</div>';
    $html .= '</div>';
    $html .= '</div>';
    
    return $html;
}

$pageCopy = [
    'metadata' => [
        'breadcrumbLabel' => $LEGAL_DETAIL_PAGES[$slug]['title'],
        'title' => $LEGAL_DETAIL_PAGES[$slug]['title'],
        'description' => $LEGAL_DETAIL_PAGES[$slug]['summary'],
    ],
    'hero' => [
        'summary' => $LEGAL_DETAIL_PAGES[$slug]['summary'],
        'imageAlt' => $LEGAL_DETAIL_PAGES[$slug]['title'] . ' sayfası görseli',
        'backgroundImage' => 'hero/hukuki-hizmetler.webp',
    ],
    'sections' => buildSectionsFromDocumentText($LEGAL_DETAIL_PAGES[$slug]['text']),
];

$otherPrograms = [];
foreach ($LEGAL_DETAIL_PAGES as $s => $item) {
    if ($s !== $slug) {
        $otherPrograms[] = [
            'label' => $item['navLabel'],
            'slug' => $s,
            'href' => $s . '.php?lang=' . $lang
        ];
    }
}
$otherProgramsTitle = $ui['relatedTitle'];
$consultationLabel = $ui['consultationLabel'];
?>

    <main dir="<?= $dict['dir'] ?? 'ltr' ?>" class="bg-white font-sans">

      <!-- ── BREADCRUMB + HERO ── -->
      <?php if (!empty($pageCopy['hero']['backgroundImage'])): 
          $bgImg = ltrim($pageCopy['hero']['backgroundImage'], '/');
      ?>
        <section class="relative overflow-hidden min-h-[450px] md:min-h-[540px] flex flex-col justify-between pt-10 pb-16 bg-slate-950">
          <img
            src="<?= htmlspecialchars($bgImg) ?>"
            alt=""
            aria-hidden="true"
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 0.9;"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-slate-950/60"></div>
          
          <div class="relative mx-auto w-full max-w-6xl px-6 flex flex-col justify-between flex-1">
            <nav class="mb-auto flex items-center gap-1.5 text-xs text-white/70" aria-label="Breadcrumb">
              <a href="index.php?lang=<?= $lang ?>" class="transition hover:text-white"><?= htmlspecialchars($homeLabel) ?></a>
              <span>/</span>
              <a href="<?= $backHref ?>" class="transition hover:text-white"><?= htmlspecialchars($backLabel) ?></a>
              <span>/</span>
              <span class="text-white font-medium"><?= htmlspecialchars($pageCopy['metadata']['breadcrumbLabel'] ?? '') ?></span>
            </nav>

            <div class="mt-20">
              <h1 class="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-md">
                <?= htmlspecialchars($pageCopy['metadata']['breadcrumbLabel'] ?? '') ?>
              </h1>
              <?php if (!empty($pageCopy['hero']['summary'])): ?>
                <p class="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 drop-shadow">
                  <?= htmlspecialchars($pageCopy['hero']['summary']) ?>
                </p>
              <?php endif; ?>
            </div>
          </div>
        </section>
      <?php else: ?>
        <section class="relative overflow-hidden border-b border-gray-100 bg-white pt-8 pb-12">
          <div class="relative mx-auto max-w-6xl px-6">
            <nav class="mb-8 flex items-center gap-1.5 text-xs text-gray-400" aria-label="Breadcrumb">
              <a href="index.php?lang=<?= $lang ?>" class="transition hover:text-gray-700"><?= htmlspecialchars($homeLabel) ?></a>
              <span>/</span>
              <a href="<?= $backHref ?>" class="transition hover:text-gray-700"><?= htmlspecialchars($backLabel) ?></a>
              <span>/</span>
              <span class="text-gray-700 font-medium"><?= htmlspecialchars($pageCopy['metadata']['breadcrumbLabel'] ?? '') ?></span>
            </nav>

            <h1 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-950 md:text-4xl">
              <?= htmlspecialchars($pageCopy['metadata']['breadcrumbLabel'] ?? '') ?>
            </h1>
            <?php if (!empty($pageCopy['hero']['summary'])): ?>
              <p class="mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
                <?= htmlspecialchars($pageCopy['hero']['summary']) ?>
              </p>
            <?php endif; ?>
          </div>
        </section>
      <?php endif; ?>

      <!-- ── ANA İÇERİK + SIDEBAR ── -->
      <section class="bg-white py-16">
        <div class="mx-auto max-w-6xl px-6">
          <div class="flex flex-col gap-16 lg:flex-row lg:gap-20">

            <!-- SOL: İçerik Bölümleri -->
            <div class="min-w-0 flex-1">
              <?php
              foreach ($pageCopy['sections'] as $s) {
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
                  } elseif ($s['type'] === 'table') {
                      echo render_table_section($s, $lang);
                  }
              }
              ?>

              <!-- İletişim Notu -->
              <div class="border-t border-gray-100 pt-10 text-sm leading-relaxed text-gray-500">
                <p>
                  <?= htmlspecialchars($ui['ctaDescription']) ?>
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
                    <?= htmlspecialchars($ui['ctaTitle']) ?>
                  </p>
                  <a
                    href="contact.php?lang=<?= $lang ?>"
                    class="block border border-gray-900 bg-gray-900 px-5 py-2.5 text-center text-xs font-bold uppercase tracking-widest text-white transition hover:bg-gray-800"
                  >
                    <?= htmlspecialchars(__t('nav.contact') ?? 'Bizimle İletişime Geç') ?>
                  </a>
                  <a
                    href="questions.php?lang=<?= $lang ?>"
                    class="mt-2 block border border-gray-200 px-5 py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-gray-600 transition hover:border-gray-400"
                  >
                    <?= htmlspecialchars(__t('nav.faq') ?? 'SSS') ?>
                  </a>
                </div>

                <!-- Diğer Seçenekler -->
                <?php if (count($otherPrograms) > 0): ?>
                  <div class="border border-gray-100">
                    <div class="border-b border-gray-100 bg-gray-50 px-5 py-3">
                      <p class="text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
                        <?= htmlspecialchars($otherProgramsTitle) ?>
                      </p>
                    </div>
                    <ul class="divide-y divide-gray-100">
                      <?php foreach ($otherPrograms as $prog): ?>
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
                <?php endif; ?>

              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>

<?php include 'includes/footer.php'; ?>
