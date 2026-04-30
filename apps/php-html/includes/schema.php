<?php

require_once __DIR__ . '/seo.php';

const SCHEMA_SITE_NAME = 'CitizenshipWeb';
const SCHEMA_SITE_URL = 'https://citizenshipweb.com';
const SCHEMA_HERO_IMAGE = 'https://citizenshipweb.com/assets/images/hero.png';
const SCHEMA_PHONE = '+90 212 555 00 00';
const SCHEMA_EMAIL = 'info@citizenshipweb.com';

function schema_address(): array {
    return [
        '@type' => 'PostalAddress',
        'streetAddress' => 'Levent Mah. Cömert Sok. No:1 Kat:15',
        'addressLocality' => 'Beşiktaş',
        'addressRegion' => 'İstanbul',
        'postalCode' => '34330',
        'addressCountry' => 'TR',
    ];
}

function schema_render_scripts(array $schemas): string {
    $html = '';
    foreach ($schemas as $schema) {
        $html .= '<script type="application/ld+json">' .
            json_encode($schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) .
            '</script>' . "\n";
    }
    return $html;
}

function schema_breadcrumb(string $seoKey, string $lang): array {
    return [
        '@context' => 'https://schema.org',
        '@type' => 'BreadcrumbList',
        'itemListElement' => [
            [
                '@type' => 'ListItem',
                'position' => 1,
                'name' => 'Home',
                'item' => seo_page_url('home', $lang),
            ],
            [
                '@type' => 'ListItem',
                'position' => 2,
                'name' => seo_page_meta($seoKey, $lang)['title'],
                'item' => seo_page_url($seoKey, $lang),
            ],
        ],
    ];
}

function schema_organization(): array {
    return [
        '@context' => 'https://schema.org',
        '@type' => 'Organization',
        'name' => SCHEMA_SITE_NAME,
        'url' => SCHEMA_SITE_URL,
        'image' => SCHEMA_HERO_IMAGE,
        'address' => schema_address(),
        'contactPoint' => [
            [
                '@type' => 'ContactPoint',
                'contactType' => 'customer support',
                'telephone' => SCHEMA_PHONE,
                'email' => SCHEMA_EMAIL,
                'availableLanguage' => ['tr', 'en', 'ru', 'ar', 'fa'],
            ],
        ],
    ];
}

function schema_website(string $lang): array {
    return [
        '@context' => 'https://schema.org',
        '@type' => 'WebSite',
        'name' => SCHEMA_SITE_NAME,
        'url' => seo_page_url('home', $lang),
        'inLanguage' => $lang,
    ];
}

function schema_faq_page(array $faqs): array {
    return [
        '@context' => 'https://schema.org',
        '@type' => 'FAQPage',
        'mainEntity' => array_map(static function ($faq) {
            return [
                '@type' => 'Question',
                'name' => $faq['q'],
                'acceptedAnswer' => [
                    '@type' => 'Answer',
                    'text' => $faq['a'],
                ],
            ];
        }, $faqs),
    ];
}

function schema_home_page(string $lang, array $faqs): array {
    return [
        schema_organization(),
        schema_website($lang),
        schema_faq_page($faqs),
    ];
}

function schema_services_page(string $lang, array $services): array {
    return [
        schema_breadcrumb('services', $lang),
        [
            '@context' => 'https://schema.org',
            '@type' => 'ItemList',
            'name' => seo_page_meta('services', $lang)['title'],
            'itemListElement' => array_map(static function ($service, $index) {
                return [
                    '@type' => 'ListItem',
                    'position' => $index + 1,
                    'item' => [
                        '@type' => 'Service',
                        'name' => $service['title'],
                        'description' => $service['desc'],
                        'provider' => [
                            '@type' => 'Organization',
                            'name' => SCHEMA_SITE_NAME,
                            'url' => SCHEMA_SITE_URL,
                        ],
                    ],
                ];
            }, $services, array_keys($services)),
        ],
    ];
}

function schema_citizenship_page(string $lang, array $steps): array {
    return [
        schema_breadcrumb('citizenship', $lang),
        [
            '@context' => 'https://schema.org',
            '@type' => 'HowTo',
            'name' => seo_page_meta('citizenship', $lang)['title'],
            'description' => seo_page_meta('citizenship', $lang)['description'],
            'image' => SCHEMA_HERO_IMAGE,
            'step' => array_map(static function ($step, $index) {
                return [
                    '@type' => 'HowToStep',
                    'position' => $index + 1,
                    'name' => $step['title'],
                    'text' => $step['desc'],
                ];
            }, $steps, array_keys($steps)),
        ],
    ];
}

function schema_collection_page(string $seoKey, string $lang, array $items): array {
    return [
        schema_breadcrumb($seoKey, $lang),
        [
            '@context' => 'https://schema.org',
            '@type' => 'CollectionPage',
            'name' => seo_page_meta($seoKey, $lang)['title'],
            'description' => seo_page_meta($seoKey, $lang)['description'],
            'url' => seo_page_url($seoKey, $lang),
            'hasPart' => array_map(static function ($item) {
                return [
                    '@type' => 'CreativeWork',
                    'headline' => $item['title'],
                    'description' => $item['summary'] ?? null,
                    'about' => $item['cat'] ?? null,
                ];
            }, $items),
        ],
    ];
}

function schema_questions_page(string $lang, array $faqs): array {
    return [
        schema_breadcrumb('questions', $lang),
        [
            '@context' => 'https://schema.org',
            '@type' => 'QAPage',
            'mainEntity' => array_map(static function ($faq) {
                return [
                    '@type' => 'Question',
                    'name' => $faq['q'],
                    'acceptedAnswer' => [
                        '@type' => 'Answer',
                        'text' => $faq['a'],
                    ],
                ];
            }, $faqs),
        ],
    ];
}

function schema_contact_page(string $lang): array {
    return [
        schema_breadcrumb('contact', $lang),
        [
            '@context' => 'https://schema.org',
            '@type' => 'LocalBusiness',
            'name' => SCHEMA_SITE_NAME,
            'url' => seo_page_url('contact', $lang),
            'image' => SCHEMA_HERO_IMAGE,
            'email' => SCHEMA_EMAIL,
            'telephone' => SCHEMA_PHONE,
            'address' => schema_address(),
            'openingHours' => 'Mo-Fr 09:00-18:00',
        ],
        [
            '@context' => 'https://schema.org',
            '@type' => 'LegalService',
            'name' => SCHEMA_SITE_NAME . ' Legal & Immigration Advisory',
            'url' => seo_page_url('contact', $lang),
            'description' => seo_page_meta('contact', $lang)['description'],
            'image' => SCHEMA_HERO_IMAGE,
            'email' => SCHEMA_EMAIL,
            'telephone' => SCHEMA_PHONE,
            'address' => schema_address(),
            'areaServed' => 'Worldwide',
        ],
    ];
}
