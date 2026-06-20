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
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet">
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
              sans: ['Outfit', 'sans-serif'],
            }
          }
        }
      }
    </script>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body class="min-h-full flex flex-col font-sans pt-20">

    <nav class="fixed top-0 z-50 w-full border-b border-blue-100 bg-white/96 text-[#0a192f] shadow-sm backdrop-blur-md">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div class="flex-shrink-0 flex items-center">
             <a href="/" class="relative flex h-9 sm:h-12 max-w-[240px] sm:max-w-[280px] shrink-0 items-center">
               <img
                 src="logo/necmettin-barman-logo.png"
                 alt="Necmettin Barman & Associates"
                 class="h-9 sm:h-12 w-auto bg-transparent object-contain object-left"
               />
             </a>
          </div>
          <div class="hidden md:flex items-center gap-1">
            <a href="<?= seo_page_href('home', $lang) ?>" class="rounded-lg px-3 py-2 text-sm font-medium text-[#0a192f] transition hover:bg-blue-50 hover:text-[#112240]"><?= __t('nav.home') ?></a>
            <a href="<?= seo_page_href('services', $lang) ?>" class="rounded-lg px-3 py-2 text-sm font-medium text-[#0a192f] transition hover:bg-blue-50 hover:text-[#112240]"><?= __t('nav.services') ?></a>
            <a href="<?= seo_page_href('citizenship', $lang) ?>" class="rounded-lg px-3 py-2 text-sm font-medium text-[#0a192f] transition hover:bg-blue-50 hover:text-[#112240]">Adımlar</a>
            <a href="<?= seo_page_href('knowledge', $lang) ?>" class="rounded-lg px-3 py-2 text-sm font-medium text-[#0a192f] transition hover:bg-blue-50 hover:text-[#112240]">Bilgi Bankası</a>
            <a href="<?= seo_page_href('news', $lang) ?>" class="rounded-lg px-3 py-2 text-sm font-medium text-[#0a192f] transition hover:bg-blue-50 hover:text-[#112240]">Haberler</a>
            <a href="<?= seo_page_href('contact', $lang) ?>" class="ml-2 rounded-full bg-[#b52727] px-6 py-2 text-sm font-bold text-white shadow-lg transition hover:bg-[#cc3333] hover:text-white"><?= __t('nav.contact') ?></a>
            
            <!-- Language Switcher Dropdown -->
            <div class="relative ml-2" id="langDropdownWrapper">
              <?php
              $languages = [
                ['code' => 'tr', 'name' => 'Türkçe', 'flag' => '🇹🇷'],
                ['code' => 'en', 'name' => 'English', 'flag' => '🇬🇧'],
                ['code' => 'ru', 'name' => 'Русский', 'flag' => '🇷🇺'],
                ['code' => 'ar', 'name' => 'العربية', 'flag' => '🇸🇦'],
                ['code' => 'fa', 'name' => 'فارسی', 'flag' => '🇮🇷'],
              ];
              $currentLangObj = array_values(array_filter($languages, function($l) use ($lang) { return $l['code'] === $lang; }))[0] ?? $languages[0];
              ?>
              <button
                type="button"
                id="langDropdownBtn"
                class="flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-lg transition hover:bg-blue-50 focus:outline-none"
                title="<?= htmlspecialchars($currentLangObj['name']) ?>"
              >
                <span><?= $currentLangObj['flag'] ?></span>
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
                    class="flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition hover:bg-blue-50 text-slate-700 hover:text-slate-900"
                    style="color: <?= $lang === $l['code'] ? '#0a192f' : 'rgba(10,25,47,0.50)' ?>;"
                  >
                    <span class="text-xl"><?= $l['flag'] ?></span>
                    <span><?= htmlspecialchars($l['name']) ?></span>
                    <?php if ($lang === $l['code']): ?>
                      <span class="ml-auto h-1.5 w-1.5 rounded-full bg-[#8a1c1c]"></span>
                    <?php endif; ?>
                  </a>
                <?php endforeach; ?>
              </div>
            </div>
            <script>
              document.addEventListener('DOMContentLoaded', function() {
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
              });
            </script>
          </div>
        </div>
      </div>
    </nav>
