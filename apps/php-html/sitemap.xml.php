<?php
require_once __DIR__ . '/includes/seo.php';

header('Content-Type: application/xml; charset=utf-8');
echo '<?xml version="1.0" encoding="UTF-8"?>';
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">';

$locales = ['tr', 'en', 'ru', 'ar', 'fa'];
$pages = ['home', 'services', 'citizenship', 'knowledge', 'news', 'questions', 'contact', 'privacy'];

foreach ($pages as $pageKey) {
    foreach ($locales as $locale) {
        $url = seo_page_url($pageKey, $locale);
        echo '  <url>' . "\n";
        echo '    <loc>' . $url . '</loc>' . "\n";
        echo '    <lastmod>' . date('Y-m-d') . '</lastmod>' . "\n";
        echo '    <changefreq>weekly</changefreq>' . "\n";
        echo '    <priority>' . ($pageKey === 'home' ? '1.0' : '0.8') . '</priority>' . "\n";
        
        // Hreflang
        echo '    <xhtml:link rel="alternate" hreflang="x-default" href="' . seo_page_url($pageKey, 'en') . '"/>' . "\n";
        foreach ($locales as $altLocale) {
             echo '    <xhtml:link rel="alternate" hreflang="'.$altLocale.'" href="' . seo_page_url($pageKey, $altLocale) . '"/>' . "\n";
        }
        
        echo '  </url>' . "\n";
    }
}

echo '</urlset>';
?>
