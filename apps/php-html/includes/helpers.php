<?php

// Helper functions for parsing inline markdown
if (!function_exists('parse_inline_links')) {
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
                    if (strpos($linkUrl, '/citizenship/basvuru-sureci') === 0) {
                        $linkUrl = "basvuru-sureci.php?lang=" . $lang;
                    } else if (strpos($linkUrl, '/citizenship/pasaport') === 0) {
                        $linkUrl = "pasaport.php?lang=" . $lang;
                    } else if ($linkUrl === '/citizenship') {
                        $linkUrl = "citizenship.php?lang=" . $lang;
                    } else if (strpos($linkUrl, '/citizenship/') === 0) {
                        $slug = substr($linkUrl, strlen('/citizenship/'));
                        $linkUrl = $slug . ".php?lang=" . $lang;
                    } else if (strpos($linkUrl, '/ikamet-izni/') === 0) {
                        $slug = substr($linkUrl, strlen('/ikamet-izni/'));
                        $linkUrl = $slug . ".php?lang=" . $lang;
                    } else if ($linkUrl === '/ikamet-izni') {
                        $linkUrl = "services.php?lang=" . $lang;
                    } else if (strpos($linkUrl, '/legal/') === 0) {
                        $slug = substr($linkUrl, strlen('/legal/'));
                        $linkUrl = $slug . ".php?lang=" . $lang;
                    } else if ($linkUrl === '/legal') {
                        $linkUrl = "services.php?lang=" . $lang;
                    } else if ($linkUrl === '/services') {
                        $linkUrl = "services.php?lang=" . $lang;
                    } else if (strpos($linkUrl, '/services/') === 0) {
                        $slug = substr($linkUrl, strlen('/services/'));
                        $linkUrl = $slug . ".php?lang=" . $lang;
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
}

if (!function_exists('render_parsed_desc')) {
    function render_parsed_desc(string $text, string $lang): string {
        $baseClass = "text-[14px] leading-7 text-gray-600 text-justify";
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
}

if (!function_exists('render_intro_section')) {
    function render_intro_section($section, $lang) {
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
                    $html .= '<p class="mb-4 text-base leading-7 text-gray-700 text-justify">' . parse_inline_links($p, $lang) . '</p>';
                }
            }
        }
        $html .= '</div>';
        return $html;
    }
}

if (!function_exists('render_numbered_section')) {
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
            $html .= '<p class="mb-6 text-[15px] leading-7 text-gray-600 text-justify">' . parse_inline_links($section['description'], $lang) . '</p>';
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
}

if (!function_exists('render_bullet_section')) {
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
            $html .= '<p class="mb-6 text-[15px] leading-7 text-gray-600 text-justify">' . parse_inline_links($section['description'], $lang) . '</p>';
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
}

if (!function_exists('render_plain_bullet_section')) {
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
            $html .= '<p class="mb-6 text-[15px] leading-7 text-gray-600 text-justify">' . parse_inline_links($section['description'], $lang) . '</p>';
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
}

if (!function_exists('render_legal_section')) {
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
                $html .= '<p class="mt-2 text-[14px] leading-7 text-gray-600 text-justify">' . parse_inline_links($item['text'], $lang) . '</p>';
                $html .= '</li>';
            }
            $html .= '</ul>';
        }
        $html .= '</div>';
        return $html;
    }
}
