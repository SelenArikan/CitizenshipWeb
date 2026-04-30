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
    global $dict;
    $keys = explode('.', $keyPath);
    $val = $dict;
    foreach ($keys as $k) {
        if (isset($val[$k])) {
            $val = $val[$k];
        } else {
            return "{" . $keyPath . "}";
        }
    }
    return $val;
}
?>
