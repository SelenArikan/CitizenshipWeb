<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$supported_langs = ['tr', 'en', 'ru', 'ar', 'fa'];
$lang = 'tr';

if (isset($_GET['lang']) && in_array($_GET['lang'], $supported_langs)) {
    $_SESSION['lang'] = $_GET['lang'];
}

if (isset($_SESSION['lang']) && in_array($_SESSION['lang'], $supported_langs)) {
    $lang = $_SESSION['lang'];
}

$i18n_path = __DIR__ . '/../../../shared/i18n/' . $lang . '.json';
$dict = json_decode(file_get_contents($i18n_path), true);

if (!$dict) {
    // Fallback if missing
    $dict = ['lang' => 'tr', 'dir' => 'ltr', 'hero' => []];
}

function __t($keyPath) {
    global $dict, $lang;
    $keys = explode('.', $keyPath);
    
    // 1. Try active language
    $val = $dict;
    $found = true;
    foreach ($keys as $k) {
        if (isset($val[$k])) {
            $val = $val[$k];
        } else {
            $found = false;
            break;
        }
    }
    if ($found) {
        return $val;
    }
    
    // 2. Fallback to Turkish if not already Turkish
    if ($lang !== 'tr') {
        static $tr_dict = null;
        if ($tr_dict === null) {
            $tr_path = __DIR__ . '/../../../shared/i18n/tr.json';
            if (file_exists($tr_path)) {
                $tr_dict = json_decode(file_get_contents($tr_path), true);
            }
        }
        if ($tr_dict) {
            $val = $tr_dict;
            $found = true;
            foreach ($keys as $k) {
                if (isset($val[$k])) {
                    $val = $val[$k];
                } else {
                    $found = false;
                    break;
                }
            }
            if ($found) {
                return $val;
            }
        }
    }
    
    return "{" . $keyPath . "}";
}
?>
