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
            
            <!-- Language Switcher -->
            <div class="ml-4 flex gap-2">
               <?php foreach ($supported_langs as $switchLang): ?>
                 <a href="<?= seo_page_href($seoKey, $switchLang) ?>" class="text-xs transition px-2 py-1 rounded hover:bg-blue-50 <?= $lang == $switchLang ? 'text-[#0a192f] font-bold' : 'text-gray-400' ?>">
                   <?= strtoupper($switchLang) ?>
                 </a>
               <?php endforeach; ?>
            </div>
          </div>
        </div>
      </div>
    </nav>
