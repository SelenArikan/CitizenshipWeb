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

    <nav class="fixed w-full z-50 top-0 bg-[#0a192f]/85 backdrop-blur-md text-white border-b border-white/10 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <div class="flex-shrink-0 flex items-center">
             <a href="/" class="font-bold text-2xl tracking-wider text-white">Citizenship<span class="text-[#8a1c1c]">Web</span></a>
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <a href="<?= seo_page_href('home', $lang) ?>" class="text-sm font-medium text-gray-300 hover:text-white transition"><?= __t('nav.home') ?></a>
            <a href="<?= seo_page_href('services', $lang) ?>" class="text-sm font-medium text-gray-300 hover:text-white transition"><?= __t('nav.services') ?></a>
            <a href="<?= seo_page_href('citizenship', $lang) ?>" class="text-sm font-medium text-gray-300 hover:text-white transition">Adımlar</a>
            <a href="<?= seo_page_href('knowledge', $lang) ?>" class="text-sm font-medium text-gray-300 hover:text-white transition">Bilgi Bankası</a>
            <a href="<?= seo_page_href('news', $lang) ?>" class="text-sm font-medium text-gray-300 hover:text-white transition">Haberler</a>
            <a href="<?= seo_page_href('contact', $lang) ?>" class="px-6 py-2 rounded-full bg-[#8a1c1c] hover:bg-[#a32222] transition text-sm font-bold shadow-lg"><?= __t('nav.contact') ?></a>
            
            <!-- Language Switcher -->
            <div class="ml-4 flex gap-2">
               <?php foreach ($supported_langs as $switchLang): ?>
                 <a href="<?= seo_page_href($seoKey, $switchLang) ?>" class="text-xs <?= $lang == $switchLang ? 'text-white font-bold' : 'text-gray-500' ?>">
                   <?= strtoupper($switchLang) ?>
                 </a>
               <?php endforeach; ?>
            </div>
          </div>
        </div>
      </div>
    </nav>
