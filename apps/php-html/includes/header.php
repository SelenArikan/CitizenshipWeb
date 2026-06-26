<?php
require_once __DIR__ . '/i18n.php';
require_once __DIR__ . '/seo.php';

$seoKey = $seoKey ?? 'home';
$pageSeo = seo_page_meta($seoKey, $lang);
?>
<!DOCTYPE html>
<html lang="<?= $dict['lang'] ?? 'tr' ?>" dir="<?= $dict['dir'] ?? 'ltr' ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($pageSeo['title']) ?> | CitizenshipWeb</title>
    <meta name="description" content="<?= htmlspecialchars($pageSeo['description']) ?>">
    <link rel="canonical" href="<?= htmlspecialchars($pageSeo['canonical']) ?>">
    <?php foreach ($pageSeo['alternates'] as $altLocale => $altHref): ?>
      <link rel="alternate" hreflang="<?= htmlspecialchars($altLocale) ?>" href="<?= htmlspecialchars($altHref) ?>">
    <?php endforeach; ?>
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="CitizenshipWeb">
    <meta property="og:locale" content="<?= htmlspecialchars($pageSeo['ogLocale']) ?>">
    <meta property="og:title" content="<?= htmlspecialchars($pageSeo['title']) ?>">
    <meta property="og:description" content="<?= htmlspecialchars($pageSeo['description']) ?>">
    <meta property="og:url" content="<?= htmlspecialchars($pageSeo['canonical']) ?>">
    <meta property="og:image" content="<?= htmlspecialchars($pageSeo['image']) ?>">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?= htmlspecialchars($pageSeo['title']) ?>">
    <meta name="twitter:description" content="<?= htmlspecialchars($pageSeo['description']) ?>">
    <meta name="twitter:image" content="<?= htmlspecialchars($pageSeo['image']) ?>">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              navy: '#0a192f',
              'navy-light': '#112240',
              burgundy: '#8a1c1c',
              'burgundy-light': '#a32222',
            },
            fontFamily: {
              sans: ['"Open Sans"', 'sans-serif'],
            }
          }
        }
      }
    </script>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body class="min-h-full flex flex-col font-sans pt-20">

    <nav id="cw-navbar" class="fixed top-0 z-50 w-full border-b border-blue-100 bg-white/96 text-[#0a192f] shadow-sm backdrop-blur-md">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <!-- Logo — Necmettin Barman & Associates -->
          <a
            href="<?= seo_page_href('home', $lang) ?>"
            class="relative flex h-9 max-w-[min(100%,240px)] shrink-0 items-center sm:h-12 sm:max-w-[280px]"
          >
            <img
              src="logo/necmettin-barman-logo.png"
              alt="CITIZENSHIP LAW FIRM — Necmettin Barman & Associates — Attorneys at Law"
              class="h-9 w-auto bg-transparent object-contain object-left sm:h-12"
            />
          </a>

          <!-- Desktop nav -->
          <div class="hidden items-center gap-1 lg:flex">
            <!-- Anasayfa -->
            <a href="<?= seo_page_href('home', $lang) ?>" class="rounded-lg px-3 py-2 text-sm font-medium text-[#0a192f] transition hover:bg-blue-50 hover:text-[#112240]"><?= __t('nav.home') ?></a>
            
            <!-- Biz Kimiz -->
            <a href="<?= seo_page_href('home', $lang) ?>#about" class="rounded-lg px-3 py-2 text-sm font-medium text-[#0a192f] transition hover:bg-blue-50 hover:text-[#112240]"><?= __t('nav.about_company') ?></a>
            
            <!-- Türk Vatandaşlığı (Mega Menu) -->
            <div class="relative mega-trigger" data-menu="vatandaslik">
              <button
                type="button"
                class="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-[#0a192f] transition hover:bg-blue-50 hover:text-[#112240] focus:outline-none"
              >
                <?= __t('nav.mega_tc') ?>
                <svg class="chevron-icon h-3.5 w-3.5 text-slate-400 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <!-- Oturum İzni (Mega Menu) -->
            <div class="relative mega-trigger" data-menu="oturum">
              <button
                type="button"
                class="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-[#0a192f] transition hover:bg-blue-50 hover:text-[#112240] focus:outline-none"
              >
                <?= __t('nav.mega_res') ?>
                <svg class="chevron-icon h-3.5 w-3.5 text-slate-400 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <!-- Hukuki Hizmetler (Mega Menu) -->
            <div class="relative mega-trigger" data-menu="hukuki">
              <button
                type="button"
                class="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-[#0a192f] transition hover:bg-blue-50 hover:text-[#112240] focus:outline-none"
              >
                <?= __t('nav.mega_leg') ?>
                <svg class="chevron-icon h-3.5 w-3.5 text-slate-400 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <!-- SSS -->
            <a href="questions.php?lang=<?= $lang ?>" class="rounded-lg px-3 py-2 text-sm font-medium text-[#0a192f] transition hover:bg-blue-50 hover:text-[#112240]"><?= __t('nav.faq') ?></a>
            <a href="contact.php?lang=<?= $lang ?>" class="ml-2 rounded-full bg-[#b52727] px-6 py-2 text-sm font-bold text-white shadow-lg transition hover:bg-[#cc3333] hover:text-white"><?= __t('nav.contact') ?></a>
            
            <!-- Language Switcher Dropdown -->
            <div class="relative ml-1" id="langDropdownWrapper">
              <?php
              $languages = [
                ['code' => 'tr', 'name' => 'Türkçe', 'flag' => 'tr'],
                ['code' => 'en', 'name' => 'English', 'flag' => 'us'],
                ['code' => 'ru', 'name' => 'Русский', 'flag' => 'ru'],
                ['code' => 'ar', 'name' => 'العربية', 'flag' => 'sa'],
                ['code' => 'fa', 'name' => 'فارسی', 'flag' => 'ir'],
              ];
              $currentLangObj = array_values(array_filter($languages, function($l) use ($lang) { return $l['code'] === $lang; }))[0] ?? $languages[0];
              ?>
              <button
                type="button"
                id="langDropdownBtn"
                class="flex items-center gap-1.5 rounded-lg px-2.5 py-2 transition hover:bg-blue-50 focus:outline-none"
                title="<?= htmlspecialchars($currentLangObj['name']) ?>"
              >
                <img src="https://flagcdn.com/w40/<?= $currentLangObj['flag'] ?>.png" alt="" class="h-3.5 w-5 object-cover rounded-[2px] border border-slate-200">
                <svg class="h-3 w-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <!-- Dropdown Menu -->
              <div
                id="langDropdownMenu"
                class="hidden absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl py-1.5 shadow-xl bg-white border border-blue-50/50 backdrop-blur-md"
                style="background: rgba(255, 255, 255, 0.99); border: 1px solid rgba(15, 45, 94, 0.10);"
              >
                <?php foreach ($languages as $l): ?>
                  <a
                    href="<?= seo_page_href($seoKey, $l['code']) ?>"
                    class="flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition hover:bg-blue-50"
                    style="color: <?= $lang === $l['code'] ? '#0a192f' : 'rgba(10,25,47,0.50)' ?>;"
                  >
                    <img src="https://flagcdn.com/w40/<?= $l['flag'] ?>.png" alt="" class="h-3.5 w-5 object-cover rounded-[2px] border border-slate-200">
                    <span><?= htmlspecialchars($l['name']) ?></span>
                    <?php if ($lang === $l['code']): ?>
                      <span class="ml-auto h-1.5 w-1.5 rounded-full bg-[#8a1c1c]"></span>
                    <?php endif; ?>
                  </a>
                <?php endforeach; ?>
              </div>
            </div>
          </div>

          <!-- Mobile: flag + hamburger -->
          <div class="flex items-center gap-3 lg:hidden">
            <div class="relative" id="mobileLangWrapper">
              <button
                type="button"
                id="mobileLangBtn"
                class="flex items-center gap-1.5 text-slate-700 focus:outline-none"
              >
                <img src="https://flagcdn.com/w40/<?= $currentLangObj['flag'] ?>.png" alt="" class="h-3.5 w-5 object-cover rounded-[2px] border border-slate-200">
                <svg class="h-3 w-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                id="mobileLangMenu"
                class="hidden absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl py-1.5 shadow-xl bg-white border border-blue-50/50"
                style="background: rgba(255, 255, 255, 0.99); border: 1px solid rgba(15, 45, 94, 0.10);"
              >
                <?php foreach ($languages as $l): ?>
                  <a
                    href="<?= seo_page_href($seoKey, $l['code']) ?>"
                    class="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-[#0a192f]/70 transition hover:bg-blue-50 hover:text-[#0a192f]"
                  >
                    <img src="https://flagcdn.com/w40/<?= $l['flag'] ?>.png" alt="" class="h-3.5 w-5 object-cover rounded-[2px] border border-slate-200">
                    <span><?= htmlspecialchars($l['name']) ?></span>
                  </a>
                <?php endforeach; ?>
              </div>
            </div>

            <button
              type="button"
              id="mobileMenuToggleBtn"
              aria-label="Toggle menu"
              class="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-100 bg-white transition hover:bg-blue-50 text-[#0a192f]"
            >
              <svg id="hamburgerIcon" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg id="closeIcon" class="h-5 w-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu drawer -->
      <div id="mobileMenuDrawer" class="hidden border-t border-blue-100 bg-white px-4 pb-6 pt-4 lg:hidden shadow-lg">
        <div class="flex flex-col gap-1">
          <!-- Anasayfa -->
          <a href="<?= seo_page_href('home', $lang) ?>" class="rounded-lg px-4 py-3 text-sm font-medium text-[#0a192f] transition hover:bg-blue-50"><?= __t('nav.home') ?></a>
          
          <!-- Biz Kimiz -->
          <a href="<?= seo_page_href('home', $lang) ?>#about" class="rounded-lg px-4 py-3 text-sm font-medium text-[#0a192f] transition hover:bg-blue-50"><?= __t('nav.about_company') ?></a>
          
          <!-- Türk Vatandaşlığı (Collapsible Accordion) -->
          <div class="mobile-accordion" data-menu="vatandaslik">
            <button
              type="button"
              class="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-[#0a192f] transition hover:bg-blue-50 focus:outline-none"
            >
              <span><?= __t('nav.mega_tc') ?></span>
              <svg class="accordion-chevron h-4 w-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="accordion-content hidden ml-4 mt-1 flex flex-col gap-0.5 border-l border-blue-100 pl-4">
              <span class="block px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[#8a1c1c]"><?= __t('nav.mega_h_invest') ?></span>
              <a href="<?= seo_page_href('gayrimenkul-yatirimi', $lang) ?>" class="block rounded-lg px-3 py-2.5 text-sm text-[#0a192f]/80 transition hover:text-[#0a192f]">
                <span><?= __t('nav.investment_real_estate') ?></span>
              </a>
              <a href="<?= seo_page_href('mevduat-hesabi', $lang) ?>" class="block rounded-lg px-3 py-2.5 text-sm text-[#0a192f]/80 transition hover:text-[#0a192f]">
                <span><?= __t('nav.investment_deposit') ?></span>
              </a>
              <a href="services.php?lang=<?= $lang ?>" class="block rounded-lg px-3 py-2.5 text-sm text-[#0a192f]/80 transition hover:text-[#0a192f]">
                <span><?= __t('nav.investment_bes') ?></span>
              </a>
              <a href="<?= seo_page_href('istihdam-olusturmak', $lang) ?>" class="block rounded-lg px-3 py-2.5 text-sm text-[#0a192f]/80 transition hover:text-[#0a192f]">
                <span><?= __t('nav.investment_employment') ?></span>
              </a>
              <a href="<?= seo_page_href('gayrimenkul-yatirim-fonu', $lang) ?>" class="block rounded-lg px-3 py-2.5 text-sm text-[#0a192f]/80 transition hover:text-[#0a192f]">
                <span><?= __t('nav.investment_fund') ?></span>
              </a>
              <a href="<?= seo_page_href('devlet-borclanma-araclari', $lang) ?>" class="block rounded-lg px-3 py-2.5 text-sm text-[#0a192f]/80 transition hover:text-[#0a192f]">
                <span><?= __t('nav.investment_bonds') ?></span>
              </a>
              
              <span class="block px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[#8a1c1c] mt-2"><?= __t('nav.mega_h_other') ?></span>
              <a href="<?= seo_page_href('genel-yolla-vatandaslik', $lang) ?>" class="block rounded-lg px-3 py-2.5 text-sm text-[#0a192f]/80 transition hover:text-[#0a192f]">
                <span><?= __t('nav.item_cit_gen') ?></span>
              </a>
              <a href="<?= seo_page_href('evlilik-yoluyla-vatandaslik', $lang) ?>" class="block rounded-lg px-3 py-2.5 text-sm text-[#0a192f]/80 transition hover:text-[#0a192f]">
                <span><?= __t('nav.item_cit_marriage') ?></span>
              </a>
              <a href="citizenship.php?lang=<?= $lang ?>" class="block rounded-lg px-3 py-2.5 text-sm text-[#0a192f]/80 transition hover:text-[#0a192f] mt-2 border-t border-blue-100 pt-4">
                <span class="flex items-start gap-2">
                  <span class="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#8a1c1c]"></span>
                  <span><?= __t('nav.item_cit_process') ?></span>
                </span>
              </a>
              <a href="citizenship.php?lang=<?= $lang ?>" class="block rounded-lg px-3 py-2.5 text-sm text-[#0a192f]/80 transition hover:text-[#0a192f]">
                <span class="flex items-start gap-2">
                  <span class="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#8a1c1c]"></span>
                  <span><?= __t('nav.item_cit_passport') ?></span>
                </span>
              </a>
            </div>
          </div>

          <!-- Oturum İzni (Collapsible Accordion) -->
          <div class="mobile-accordion" data-menu="oturum">
            <button
              type="button"
              class="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-[#0a192f] transition hover:bg-blue-50 focus:outline-none"
            >
              <span><?= __t('nav.mega_res') ?></span>
              <svg class="accordion-chevron h-4 w-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="accordion-content hidden ml-4 mt-1 flex flex-col gap-0.5 border-l border-blue-100 pl-4">
              <span class="block px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[#8a1c1c]"><?= __t('nav.mega_h_rtypes') ?></span>
              <a href="services.php?lang=<?= $lang ?>" class="block rounded-lg px-3 py-2.5 text-sm text-[#0a192f]/80 transition hover:text-[#0a192f]">
                <span><?= __t('nav.item_res_j') ?></span>
              </a>
              <a href="services.php?lang=<?= $lang ?>" class="block rounded-lg px-3 py-2.5 text-sm text-[#0a192f]/80 transition hover:text-[#0a192f]">
                <span><?= __t('nav.item_res_re') ?></span>
              </a>
              <a href="services.php?lang=<?= $lang ?>" class="block rounded-lg px-3 py-2.5 text-sm text-[#0a192f]/80 transition hover:text-[#0a192f]">
                <span><?= __t('nav.item_res_fam') ?></span>
              </a>
              <a href="services.php?lang=<?= $lang ?>" class="block rounded-lg px-3 py-2.5 text-sm text-[#0a192f]/80 transition hover:text-[#0a192f]">
                <span><?= __t('nav.item_res_long') ?></span>
              </a>
            </div>
          </div>

          <!-- Hukuki Hizmetler (Collapsible Accordion) -->
          <div class="mobile-accordion" data-menu="hukuki">
            <button
              type="button"
              class="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-[#0a192f] transition hover:bg-blue-50 focus:outline-none"
            >
              <span><?= __t('nav.mega_leg') ?></span>
              <svg class="accordion-chevron h-4 w-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="accordion-content hidden ml-4 mt-1 flex flex-col gap-0.5 border-l border-blue-100 pl-4">
              <span class="block px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[#8a1c1c]"><?= __t('nav.mega_h_tax') ?></span>
              <a href="services.php?lang=<?= $lang ?>" class="block rounded-lg px-3 py-2.5 text-sm text-[#0a192f]/80 transition hover:text-[#0a192f]">
                <span><?= __t('nav.item_tax_exempt') ?></span>
              </a>
              <a href="services.php?lang=<?= $lang ?>" class="block rounded-lg px-3 py-2.5 text-sm text-[#0a192f]/80 transition hover:text-[#0a192f]">
                <span><?= __t('nav.item_tax_deed') ?></span>
              </a>
              <a href="services.php?lang=<?= $lang ?>" class="block rounded-lg px-3 py-2.5 text-sm text-[#0a192f]/80 transition hover:text-[#0a192f]">
                <span><?= __t('nav.item_tax_re') ?></span>
              </a>
              <a href="services.php?lang=<?= $lang ?>" class="block rounded-lg px-3 py-2.5 text-sm text-[#0a192f]/80 transition hover:text-[#0a192f]">
                <span><?= __t('nav.item_tax_rent') ?></span>
              </a>

              <span class="block px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[#8a1c1c] mt-2"><?= __t('nav.mega_h_law') ?></span>
              <a href="services.php?lang=<?= $lang ?>" class="block rounded-lg px-3 py-2.5 text-sm text-[#0a192f]/80 transition hover:text-[#0a192f]">
                <span><?= __t('nav.item_law_rent') ?></span>
              </a>
              <a href="services.php?lang=<?= $lang ?>" class="block rounded-lg px-3 py-2.5 text-sm text-[#0a192f]/80 transition hover:text-[#0a192f]">
                <span><?= __t('nav.item_law_com') ?></span>
              </a>
              <a href="services.php?lang=<?= $lang ?>" class="block rounded-lg px-3 py-2.5 text-sm text-[#0a192f]/80 transition hover:text-[#0a192f]">
                <span><?= __t('nav.item_law_inherit') ?></span>
              </a>
              <a href="services.php?lang=<?= $lang ?>" class="block rounded-lg px-3 py-2.5 text-sm text-[#0a192f]/80 transition hover:text-[#0a192f]">
                <span><?= __t('nav.item_law_pop') ?></span>
              </a>
              <a href="services.php?lang=<?= $lang ?>" class="block rounded-lg px-3 py-2.5 text-sm text-[#0a192f]/80 transition hover:text-[#0a192f]">
                <span><?= __t('nav.item_law_enf') ?></span>
              </a>

              <span class="block px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[#8a1c1c] mt-2"><?= __t('nav.mega_h_more') ?></span>
              <a href="services.php?lang=<?= $lang ?>" class="block rounded-lg px-3 py-2.5 text-sm text-[#0a192f]/80 transition hover:text-[#0a192f]">
                <span><?= __t('nav.item_more_bank') ?></span>
              </a>
              <a href="services.php?lang=<?= $lang ?>" class="block rounded-lg px-3 py-2.5 text-sm text-[#0a192f]/80 transition hover:text-[#0a192f]">
                <span><?= __t('nav.item_more_green') ?></span>
              </a>
              <a href="services.php?lang=<?= $lang ?>" class="block rounded-lg px-3 py-2.5 text-sm text-[#0a192f]/80 transition hover:text-[#0a192f]">
                <span><?= __t('nav.item_more_license') ?></span>
              </a>
            </div>
          </div>

          <!-- SSS -->
          <a href="questions.php?lang=<?= $lang ?>" class="rounded-lg px-4 py-3 text-sm font-medium text-[#0a192f] transition hover:bg-blue-50"><?= __t('nav.faq') ?></a>
          
          <div class="mt-3 border-t border-stone-100 pt-3">
            <a href="contact.php?lang=<?= $lang ?>" class="block rounded-full bg-[#8a1c1c] px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-[#a32222]"><?= __t('nav.contact') ?></a>
          </div>
        </div>
      </div>

      <!-- ── Mega Dropdown Panels (Fixed Position via JS) ── -->
      <!-- Mega Menu: Vatandaşlık -->
      <div
        id="megaPanel-vatandaslik"
        class="mega-panel fixed z-[200] hidden pointer-events-auto"
        style="width: 800px;"
      >
        <!-- Invisible bridge -->
        <div class="absolute -top-2 left-0 h-3 w-full"></div>
        <div
          class="overflow-hidden shadow-2xl bg-white/99 border border-blue-50/50 backdrop-blur-md rounded-2xl"
          style="background: rgba(255,255,255,0.99); border: 1px solid rgba(15, 45, 94, 0.08); animation: cwDropIn 0.18s ease both;"
        >
          <div class="flex">
            <!-- Featured Image -->
            <div class="relative w-56 shrink-0 overflow-hidden" style="min-height: 280px;">
              <div class="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-700" style="background-image: url('news2.webp');"></div>
              <div class="absolute inset-0 bg-gradient-to-r from-white/60 to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-2">
                <span class="text-xs font-bold uppercase tracking-widest text-[#b52727]"><?= __t('nav.mega_tc') ?></span>
              </div>
            </div>
            <!-- Groups -->
            <div class="flex flex-1 gap-0 divide-x divide-blue-50">
              <!-- Group 1 -->
              <div class="flex min-w-[200px] flex-col p-6 flex-1">
                <span class="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#8a1c1c]"><?= __t('nav.mega_h_invest') ?></span>
                <div class="flex flex-col gap-1">
                  <a href="<?= seo_page_href('gayrimenkul-yatirimi', $lang) ?>" class="group flex rounded-lg px-3 py-3 text-[0.9375rem] text-[#0a192f]/80 transition-all duration-150 hover:bg-blue-50 hover:text-[#0a192f] hover:translate-x-0.5 items-center justify-between">
                    <span class="leading-snug"><?= __t('nav.investment_real_estate') ?></span>
                  </a>
                  <a href="<?= seo_page_href('mevduat-hesabi', $lang) ?>" class="group flex rounded-lg px-3 py-3 text-[0.9375rem] text-[#0a192f]/80 transition-all duration-150 hover:bg-blue-50 hover:text-[#0a192f] hover:translate-x-0.5 items-center justify-between">
                    <span class="leading-snug"><?= __t('nav.investment_deposit') ?></span>
                  </a>
                  <a href="services.php?lang=<?= $lang ?>" class="group flex rounded-lg px-3 py-3 text-[0.9375rem] text-[#0a192f]/80 transition-all duration-150 hover:bg-blue-50 hover:text-[#0a192f] hover:translate-x-0.5 items-center justify-between">
                    <span class="leading-snug"><?= __t('nav.investment_bes') ?></span>
                  </a>
                  <a href="<?= seo_page_href('istihdam-olusturmak', $lang) ?>" class="group flex rounded-lg px-3 py-3 text-[0.9375rem] text-[#0a192f]/80 transition-all duration-150 hover:bg-blue-50 hover:text-[#0a192f] hover:translate-x-0.5 items-center justify-between">
                    <span class="leading-snug"><?= __t('nav.investment_employment') ?></span>
                  </a>
                  <a href="<?= seo_page_href('gayrimenkul-yatirim-fonu', $lang) ?>" class="group flex rounded-lg px-3 py-3 text-[0.9375rem] text-[#0a192f]/80 transition-all duration-150 hover:bg-blue-50 hover:text-[#0a192f] hover:translate-x-0.5 items-center justify-between">
                    <span class="leading-snug"><?= __t('nav.investment_fund') ?></span>
                  </a>
                  <a href="<?= seo_page_href('devlet-borclanma-araclari', $lang) ?>" class="group flex rounded-lg px-3 py-3 text-[0.9375rem] text-[#0a192f]/80 transition-all duration-150 hover:bg-blue-50 hover:text-[#0a192f] hover:translate-x-0.5 items-center justify-between">
                    <span class="leading-snug"><?= __t('nav.investment_bonds') ?></span>
                  </a>
                </div>
              </div>
              <!-- Group 2 -->
              <div class="flex min-w-[200px] flex-col p-6 flex-1">
                <span class="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#8a1c1c]"><?= __t('nav.mega_h_other') ?></span>
                <div class="flex flex-col gap-1">
                  <a href="<?= seo_page_href('genel-yolla-vatandaslik', $lang) ?>" class="group flex rounded-lg px-3 py-3 text-[0.9375rem] text-[#0a192f]/80 transition-all duration-150 hover:bg-blue-50 hover:text-[#0a192f] hover:translate-x-0.5 items-center justify-between">
                    <span class="leading-snug"><?= __t('nav.item_cit_gen') ?></span>
                  </a>
                  <a href="<?= seo_page_href('evlilik-yoluyla-vatandaslik', $lang) ?>" class="group flex rounded-lg px-3 py-3 text-[0.9375rem] text-[#0a192f]/80 transition-all duration-150 hover:bg-blue-50 hover:text-[#0a192f] hover:translate-x-0.5 items-center justify-between">
                    <span class="leading-snug"><?= __t('nav.item_cit_marriage') ?></span>
                  </a>
                  <a href="citizenship.php?lang=<?= $lang ?>" class="group flex rounded-lg px-3 py-3 text-[0.9375rem] text-[#0a192f]/80 transition-all duration-150 hover:bg-blue-50 hover:text-[#0a192f] hover:translate-x-0.5 items-start justify-start gap-2 mt-2 border-t border-blue-100 pt-5">
                    <span class="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#8a1c1c]"></span>
                    <span class="leading-snug"><?= __t('nav.item_cit_process') ?></span>
                  </a>
                  <a href="citizenship.php?lang=<?= $lang ?>" class="group flex rounded-lg px-3 py-3 text-[0.9375rem] text-[#0a192f]/80 transition-all duration-150 hover:bg-blue-50 hover:text-[#0a192f] hover:translate-x-0.5 items-start justify-start gap-2">
                    <span class="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#8a1c1c]"></span>
                    <span class="leading-snug"><?= __t('nav.item_cit_passport') ?></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mega Menu: Oturum İzni -->
      <div
        id="megaPanel-oturum"
        class="mega-panel fixed z-[200] hidden pointer-events-auto"
        style="width: 800px;"
      >
        <!-- Invisible bridge -->
        <div class="absolute -top-2 left-0 h-3 w-full"></div>
        <div
          class="overflow-hidden shadow-2xl bg-white/99 border border-blue-50/50 backdrop-blur-md rounded-2xl"
          style="background: rgba(255,255,255,0.99); border: 1px solid rgba(15,45,94,0.08); animation: cwDropIn 0.18s ease both;"
        >
          <div class="flex">
            <!-- Featured Image -->
            <div class="relative w-56 shrink-0 overflow-hidden" style="min-height: 280px;">
              <div class="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-700" style="background-image: url('hero/yatirimci-ikamet-izni.webp');"></div>
              <div class="absolute inset-0 bg-gradient-to-r from-white/60 to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-2">
                <span class="text-xs font-bold uppercase tracking-widest text-[#b52727]"><?= __t('nav.mega_res') ?></span>
              </div>
            </div>
            <!-- Groups -->
            <div class="flex flex-1 gap-0 divide-x divide-blue-50">
              <!-- Group 1 -->
              <div class="flex min-w-[200px] flex-col p-6 flex-1">
                <span class="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#8a1c1c]"><?= __t('nav.mega_h_rtypes') ?></span>
                <div class="flex flex-col gap-1">
                  <a href="services.php?lang=<?= $lang ?>" class="group flex rounded-lg px-3 py-3 text-[0.9375rem] text-[#0a192f]/80 transition-all duration-150 hover:bg-blue-50 hover:text-[#0a192f] hover:translate-x-0.5 items-center justify-between">
                    <span class="leading-snug"><?= __t('nav.item_res_j') ?></span>
                  </a>
                  <a href="services.php?lang=<?= $lang ?>" class="group flex rounded-lg px-3 py-3 text-[0.9375rem] text-[#0a192f]/80 transition-all duration-150 hover:bg-blue-50 hover:text-[#0a192f] hover:translate-x-0.5 items-center justify-between">
                    <span class="leading-snug"><?= __t('nav.item_res_re') ?></span>
                  </a>
                  <a href="services.php?lang=<?= $lang ?>" class="group flex rounded-lg px-3 py-3 text-[0.9375rem] text-[#0a192f]/80 transition-all duration-150 hover:bg-blue-50 hover:text-[#0a192f] hover:translate-x-0.5 items-center justify-between">
                    <span class="leading-snug"><?= __t('nav.item_res_fam') ?></span>
                  </a>
                  <a href="services.php?lang=<?= $lang ?>" class="group flex rounded-lg px-3 py-3 text-[0.9375rem] text-[#0a192f]/80 transition-all duration-150 hover:bg-blue-50 hover:text-[#0a192f] hover:translate-x-0.5 items-center justify-between">
                    <span class="leading-snug"><?= __t('nav.item_res_long') ?></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mega Menu: Hukuki Hizmetler -->
      <div
        id="megaPanel-hukuki"
        class="mega-panel fixed z-[200] hidden pointer-events-auto"
        style="width: 800px;"
      >
        <!-- Invisible bridge -->
        <div class="absolute -top-2 left-0 h-3 w-full"></div>
        <div
          class="overflow-hidden shadow-2xl bg-white/99 border border-blue-50/50 backdrop-blur-md rounded-2xl"
          style="background: rgba(255,255,255,0.99); border: 1px solid rgba(15,45,94,0.08); animation: cwDropIn 0.18s ease both;"
        >
          <div class="flex">
            <!-- Featured Image -->
            <div class="relative w-56 shrink-0 overflow-hidden" style="min-height: 280px;">
              <div class="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-700" style="background-image: url('hero/hukuki-hizmetler.webp');"></div>
              <div class="absolute inset-0 bg-gradient-to-r from-white/60 to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-2">
                <span class="text-xs font-bold uppercase tracking-widest text-[#b52727]"><?= __t('nav.mega_leg') ?></span>
              </div>
            </div>
            <!-- Groups -->
            <div class="flex flex-1 gap-0 divide-x divide-blue-50">
              <!-- Group 1 -->
              <div class="flex min-w-[200px] flex-col p-6 flex-1">
                <span class="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#8a1c1c]"><?= __t('nav.mega_h_tax') ?></span>
                <div class="flex flex-col gap-1">
                  <a href="services.php?lang=<?= $lang ?>" class="group flex rounded-lg px-3 py-3 text-[0.9375rem] text-[#0a192f]/80 transition-all duration-150 hover:bg-blue-50 hover:text-[#0a192f] hover:translate-x-0.5 items-center justify-between">
                    <span class="leading-snug"><?= __t('nav.item_tax_exempt') ?></span>
                  </a>
                  <a href="services.php?lang=<?= $lang ?>" class="group flex rounded-lg px-3 py-3 text-[0.9375rem] text-[#0a192f]/80 transition-all duration-150 hover:bg-blue-50 hover:text-[#0a192f] hover:translate-x-0.5 items-center justify-between">
                    <span class="leading-snug"><?= __t('nav.item_tax_deed') ?></span>
                  </a>
                  <a href="services.php?lang=<?= $lang ?>" class="group flex rounded-lg px-3 py-3 text-[0.9375rem] text-[#0a192f]/80 transition-all duration-150 hover:bg-blue-50 hover:text-[#0a192f] hover:translate-x-0.5 items-center justify-between">
                    <span class="leading-snug"><?= __t('nav.item_tax_re') ?></span>
                  </a>
                  <a href="services.php?lang=<?= $lang ?>" class="group flex rounded-lg px-3 py-3 text-[0.9375rem] text-[#0a192f]/80 transition-all duration-150 hover:bg-blue-50 hover:text-[#0a192f] hover:translate-x-0.5 items-center justify-between">
                    <span class="leading-snug"><?= __t('nav.item_tax_rent') ?></span>
                  </a>
                </div>
              </div>
              <!-- Group 2 -->
              <div class="flex min-w-[200px] flex-col p-6 flex-1">
                <span class="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#8a1c1c]"><?= __t('nav.mega_h_law') ?></span>
                <div class="flex flex-col gap-1">
                  <a href="services.php?lang=<?= $lang ?>" class="group flex rounded-lg px-3 py-3 text-[0.9375rem] text-[#0a192f]/80 transition-all duration-150 hover:bg-blue-50 hover:text-[#0a192f] hover:translate-x-0.5 items-center justify-between">
                    <span class="leading-snug"><?= __t('nav.item_law_rent') ?></span>
                  </a>
                  <a href="services.php?lang=<?= $lang ?>" class="group flex rounded-lg px-3 py-3 text-[0.9375rem] text-[#0a192f]/80 transition-all duration-150 hover:bg-blue-50 hover:text-[#0a192f] hover:translate-x-0.5 items-center justify-between">
                    <span class="leading-snug"><?= __t('nav.item_law_com') ?></span>
                  </a>
                  <a href="services.php?lang=<?= $lang ?>" class="group flex rounded-lg px-3 py-3 text-[0.9375rem] text-[#0a192f]/80 transition-all duration-150 hover:bg-blue-50 hover:text-[#0a192f] hover:translate-x-0.5 items-center justify-between">
                    <span class="leading-snug"><?= __t('nav.item_law_inherit') ?></span>
                  </a>
                  <a href="services.php?lang=<?= $lang ?>" class="group flex rounded-lg px-3 py-3 text-[0.9375rem] text-[#0a192f]/80 transition-all duration-150 hover:bg-blue-50 hover:text-[#0a192f] hover:translate-x-0.5 items-center justify-between">
                    <span class="leading-snug"><?= __t('nav.item_law_pop') ?></span>
                  </a>
                  <a href="services.php?lang=<?= $lang ?>" class="group flex rounded-lg px-3 py-3 text-[0.9375rem] text-[#0a192f]/80 transition-all duration-150 hover:bg-blue-50 hover:text-[#0a192f] hover:translate-x-0.5 items-center justify-between">
                    <span class="leading-snug"><?= __t('nav.item_law_enf') ?></span>
                  </a>
                </div>
              </div>
              <!-- Group 3 -->
              <div class="flex min-w-[200px] flex-col p-6 flex-1">
                <span class="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#8a1c1c]"><?= __t('nav.mega_h_more') ?></span>
                <div class="flex flex-col gap-1">
                  <a href="services.php?lang=<?= $lang ?>" class="group flex rounded-lg px-3 py-3 text-[0.9375rem] text-[#0a192f]/80 transition-all duration-150 hover:bg-blue-50 hover:text-[#0a192f] hover:translate-x-0.5 items-center justify-between">
                    <span class="leading-snug"><?= __t('nav.item_more_bank') ?></span>
                  </a>
                  <a href="services.php?lang=<?= $lang ?>" class="group flex rounded-lg px-3 py-3 text-[0.9375rem] text-[#0a192f]/80 transition-all duration-150 hover:bg-blue-50 hover:text-[#0a192f] hover:translate-x-0.5 items-center justify-between">
                    <span class="leading-snug"><?= __t('nav.item_more_green') ?></span>
                  </a>
                  <a href="services.php?lang=<?= $lang ?>" class="group flex rounded-lg px-3 py-3 text-[0.9375rem] text-[#0a192f]/80 transition-all duration-150 hover:bg-blue-50 hover:text-[#0a192f] hover:translate-x-0.5 items-center justify-between">
                    <span class="leading-snug"><?= __t('nav.item_more_license') ?></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        @keyframes cwDropIn {
          from { opacity: 0; transform: translateY(-8px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)  scale(1); }
        }
      </style>

      <script>
        document.addEventListener('DOMContentLoaded', function() {
          // Language Switcher Dropdown
          var btn = document.getElementById('langDropdownBtn');
          var menu = document.getElementById('langDropdownMenu');
          var wrapper = document.getElementById('langDropdownWrapper');
          if (btn && menu) {
            btn.addEventListener('click', function(e) {
              e.stopPropagation();
              menu.classList.toggle('hidden');
            });
            document.addEventListener('click', function(e) {
              if (wrapper && !wrapper.contains(e.target)) {
                menu.classList.add('hidden');
              }
            });
          }

          // Mobile Language switcher
          var mobLangBtn = document.getElementById('mobileLangBtn');
          var mobLangMenu = document.getElementById('mobileLangMenu');
          var mobLangWrapper = document.getElementById('mobileLangWrapper');
          if (mobLangBtn && mobLangMenu) {
            mobLangBtn.addEventListener('click', function(e) {
              e.stopPropagation();
              mobLangMenu.classList.toggle('hidden');
            });
            document.addEventListener('click', function(e) {
              if (mobLangWrapper && !mobLangWrapper.contains(e.target)) {
                mobLangMenu.classList.add('hidden');
              }
            });
          }

          // Mobile Hamburger Menu
          var mobMenuBtn = document.getElementById('mobileMenuToggleBtn');
          var mobDrawer = document.getElementById('mobileMenuDrawer');
          var hamIcon = document.getElementById('hamburgerIcon');
          var closeIcon = document.getElementById('closeIcon');
          if (mobMenuBtn && mobDrawer) {
            mobMenuBtn.addEventListener('click', function() {
              var isHidden = mobDrawer.classList.toggle('hidden');
              if (isHidden) {
                hamIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
              } else {
                hamIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
              }
            });
          }

          // Mobile Accordions
          var accordions = document.querySelectorAll('.mobile-accordion');
          accordions.forEach(function(acc) {
            var btn = acc.querySelector('button');
            var content = acc.querySelector('.accordion-content');
            var chevron = acc.querySelector('.accordion-chevron');
            if (btn && content) {
              btn.addEventListener('click', function(e) {
                e.stopPropagation();
                var isHidden = content.classList.toggle('hidden');
                if (isHidden) {
                  chevron.classList.remove('rotate-180');
                } else {
                  chevron.classList.add('rotate-180');
                }
              });
            }
          });

          // Desktop Mega Menus
          var activeMenu = null;
          var dropdownTimer = null;
          var DROPDOWN_WIDTH = 800;
          
          var triggers = document.querySelectorAll('.mega-trigger');
          var panels = document.querySelectorAll('.mega-panel');
          
          function hideAllPanels() {
            panels.forEach(function(panel) {
              panel.classList.add('hidden');
            });
            triggers.forEach(function(trig) {
              var btn = trig.querySelector('button');
              var chevron = trig.querySelector('.chevron-icon');
              if (btn) btn.classList.remove('bg-blue-50');
              if (chevron) chevron.classList.remove('rotate-180');
            });
            activeMenu = null;
          }
          
          function repositionPanel(menuKey, triggerEl) {
            var targetPanel = document.getElementById('megaPanel-' + menuKey);
            if (!targetPanel) return;
            
            var triggerRect = triggerEl.getBoundingClientRect();
            var viewportWidth = window.innerWidth;
            var left = triggerRect.left + triggerRect.width / 2 - DROPDOWN_WIDTH / 2;
            var margin = 12;
            left = Math.max(margin, left);
            left = Math.min(left, viewportWidth - DROPDOWN_WIDTH - margin);
            
            targetPanel.style.left = left + 'px';
            targetPanel.style.top = (triggerRect.bottom + 6) + 'px';
          }
          
          function showPanel(menuKey, triggerEl) {
            if (dropdownTimer) clearTimeout(dropdownTimer);
            
            var targetPanel = document.getElementById('megaPanel-' + menuKey);
            if (!targetPanel) return;
            
            if (activeMenu && activeMenu !== menuKey) {
              hideAllPanels();
            }
            
            targetPanel.classList.remove('hidden');
            repositionPanel(menuKey, triggerEl);
            
            // Styling trigger
            var btn = triggerEl.querySelector('button');
            var chevron = triggerEl.querySelector('.chevron-icon');
            if (btn) btn.classList.add('bg-blue-50');
            if (chevron) chevron.classList.add('rotate-180');
            
            activeMenu = menuKey;
          }
          
          function startHideTimer() {
            if (dropdownTimer) clearTimeout(dropdownTimer);
            dropdownTimer = setTimeout(function() {
              hideAllPanels();
            }, 180);
          }
          
          triggers.forEach(function(trig) {
            var menuKey = trig.getAttribute('data-menu');
            
            trig.addEventListener('mouseenter', function() {
              showPanel(menuKey, trig);
            });
            
            trig.addEventListener('mouseleave', function() {
              startHideTimer();
            });
            
            // Also toggle on click
            var btn = trig.querySelector('button');
            if (btn) {
              btn.addEventListener('click', function(e) {
                e.stopPropagation();
                if (activeMenu === menuKey) {
                  hideAllPanels();
                } else {
                  showPanel(menuKey, trig);
                }
              });
            }
          });
          
          panels.forEach(function(panel) {
            panel.addEventListener('mouseenter', function() {
              if (dropdownTimer) clearTimeout(dropdownTimer);
            });
            panel.addEventListener('mouseleave', function() {
              startHideTimer();
            });
          });
          
          // Reposition on scroll/resize
          window.addEventListener('scroll', function() {
            if (activeMenu) {
              var trig = document.querySelector('.mega-trigger[data-menu="' + activeMenu + '"]');
              if (trig) repositionPanel(activeMenu, trig);
            }
          }, { passive: true });
          
          window.addEventListener('resize', function() {
            if (activeMenu) {
              var trig = document.querySelector('.mega-trigger[data-menu="' + activeMenu + '"]');
              if (trig) repositionPanel(activeMenu, trig);
            }
          });
          
          // Close on outside click
          document.addEventListener('click', function(e) {
            var isClickInsideTrigger = false;
            triggers.forEach(function(trig) {
              if (trig.contains(e.target)) isClickInsideTrigger = true;
            });
            
            var isClickInsidePanel = false;
            panels.forEach(function(panel) {
              if (panel.contains(e.target)) isClickInsidePanel = true;
            });
            
            if (!isClickInsideTrigger && !isClickInsidePanel) {
              hideAllPanels();
            }
          });
        });
      </script>
    </nav>
