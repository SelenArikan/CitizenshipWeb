<?php
require_once 'includes/schema.php';
$seoKey = 'gayrimenkul-yatirim-fonu';
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

// Resolve backLabel dynamically matching Next.js
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
            <span class="text-gray-700 font-medium"><?= htmlspecialchars(__t('gayrimenkul_fon_page.hero.breadcrumbLabel') ?? '') ?></span>
          </nav>

          <!-- Başlık -->
          <h1 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-950 md:text-4xl">
            <?= htmlspecialchars(__t('gayrimenkul_fon_page.hero.breadcrumbLabel') ?? '') ?>
          </h1>
          <?php if ($summary = __t('gayrimenkul_fon_page.hero.summary')): ?>
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
              $copy = __t('gayrimenkul_fon_page');
              
              // 1. Giriş (intro)
              if (!empty($copy['intro'])) {
                  echo render_intro_section($copy['intro'], $lang);
              }
              
              // 2. Süreç (process)
              if (!empty($copy['process'])) {
                  echo render_numbered_section($copy['process'], $lang);
              }
              
              // 3. Yatırım Süreci Aşamaları (processStages)
              if (!empty($copy['processStages'])) {
                  echo render_plain_bullet_section([
                      'eyebrow' => $copy['processStages']['eyebrow'] ?? '',
                      'title' => $copy['processStages']['title'] ?? '',
                      'items' => $copy['processStages']['items'] ?? []
                  ], $lang);
              }
              
              // 4. Hukuki Çerçeve (legal)
              if (!empty($copy['legal'])) {
                  echo render_legal_section($copy['legal'], $lang);
              }
              
              // 5. Uygunluk Belgesi Sonrası (postApproval)
              if (!empty($copy['postApproval'])) {
                  $postApproval = $copy['postApproval'];
                  echo render_intro_section($postApproval, $lang);
                  
                  if (!empty($postApproval['bullets'])) {
                      echo render_plain_bullet_section([
                          'items' => $postApproval['bullets']
                      ], $lang);
                  }
              }
              ?>

              <!-- İletişim Notu -->
              <div class="border-t border-gray-100 pt-10 text-sm leading-relaxed text-gray-500">
                <p>
                  <?= htmlspecialchars(__t('gayrimenkul_fon_page.cta.description') ?? '') ?>
                  <a
                    href="contact.php?lang=<?= $lang ?>"
                    class="border-b border-gray-400 pb-px font-semibold text-gray-800 transition hover:border-red-700 hover:text-red-700"
                  >
                    <?= htmlspecialchars(__t('gayrimenkul_fon_page.cta.primaryCta') ?? 'Ücretsiz Danışın') ?>
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
                    <?= htmlspecialchars(__t('gayrimenkul_fon_page.cta.title') ?? '') ?>
                  </p>
                  <a
                    href="contact.php?lang=<?= $lang ?>"
                    class="block border border-gray-900 bg-gray-900 px-5 py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-gray-800"
                  >
                    <?= htmlspecialchars(__t('gayrimenkul_fon_page.cta.primaryCta') ?? 'Ücretsiz Danışın') ?>
                  </a>
                  <?php if ($secCta = __t('gayrimenkul_fon_page.cta.secondaryCta')): ?>
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
