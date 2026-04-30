<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$LOCALES = ["tr", "en", "ru", "ar", "fa"];
$LOCALE_FLAGS = ["tr" => "🇹🇷", "en" => "🇬🇧", "ru" => "🇷🇺", "ar" => "🇸🇦", "fa" => "🇮🇷"];
$LOCALE_LABELS = ["tr" => "Türkçe", "en" => "English", "ru" => "Русский", "ar" => "العربية", "fa" => "فارسی"];
$STATUS_LABELS = ["published" => "Yayında", "draft" => "Taslak", "archived" => "Arşiv", "pending" => "Bekliyor", "approved" => "Onaylandı", "rejected" => "Reddedildi"];
$STATUS_COLORS = ["published" => "badge-approved", "draft" => "badge-pending", "archived" => "badge-rejected"];

function table_has_column(PDO $db, string $table, string $column): bool {
    $stmt = $db->query("PRAGMA table_info($table)");
    if (!$stmt) {
        return false;
    }

    foreach ($stmt->fetchAll() as $info) {
        if (($info['name'] ?? null) === $column) {
            return true;
        }
    }

    return false;
}

function ensure_column(PDO $db, string $table, string $column, string $definition): void {
    if (!table_has_column($db, $table, $column)) {
        $db->exec("ALTER TABLE $table ADD COLUMN $column $definition");
    }
}

function initialize_admin_db(PDO $db): void {
    $db->exec("
        CREATE TABLE IF NOT EXISTS admins (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE,
            password_hash TEXT,
            role TEXT,
            locale TEXT,
            name TEXT
        );

        CREATE TABLE IF NOT EXISTS news (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            locale TEXT,
            title TEXT,
            summary TEXT,
            content TEXT,
            category TEXT,
            status TEXT,
            publishedAt TEXT,
            coverImage TEXT,
            isFeatured INTEGER DEFAULT 0
        );

        CREATE TABLE IF NOT EXISTS knowledge (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            locale TEXT,
            title TEXT,
            summary TEXT,
            content TEXT,
            category TEXT,
            status TEXT,
            coverImage TEXT,
            isFeatured INTEGER DEFAULT 0,
            publishedAt TEXT
        );

        CREATE TABLE IF NOT EXISTS questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            phone TEXT,
            message TEXT,
            status TEXT,
            locale TEXT,
            createdAt TEXT,
            answer TEXT,
            answeredBy TEXT,
            answeredAt TEXT,
            isPublic INTEGER DEFAULT 0
        );

        CREATE TABLE IF NOT EXISTS chat_sessions (
            id TEXT PRIMARY KEY,
            locale TEXT,
            status TEXT,
            createdAt TEXT
        );

        CREATE TABLE IF NOT EXISTS chat_messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            session_id TEXT,
            sender TEXT,
            message TEXT,
            createdAt TEXT
        );
    ");

    ensure_column($db, 'knowledge', 'summary', 'TEXT');
    ensure_column($db, 'knowledge', 'coverImage', 'TEXT');
    ensure_column($db, 'knowledge', 'isFeatured', 'INTEGER DEFAULT 0');
    ensure_column($db, 'knowledge', 'publishedAt', 'TEXT');

    ensure_column($db, 'questions', 'answer', 'TEXT');
    ensure_column($db, 'questions', 'answeredBy', 'TEXT');
    ensure_column($db, 'questions', 'answeredAt', 'TEXT');
    ensure_column($db, 'questions', 'isPublic', 'INTEGER DEFAULT 0');
}

function seed_admin_db(PDO $db): void {
    $adminCount = (int) $db->query("SELECT COUNT(*) FROM admins")->fetchColumn();
    if ($adminCount === 0) {
        $stmt = $db->prepare("INSERT INTO admins (username, password_hash, role, locale, name) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute(['admin', password_hash('admin123', PASSWORD_DEFAULT), 'super', null, 'Süper Admin']);
    }

    $newsCount = (int) $db->query("SELECT COUNT(*) FROM news")->fetchColumn();
    if ($newsCount === 0) {
        $stmt = $db->prepare("
            INSERT INTO news (locale, title, summary, content, category, status, publishedAt, isFeatured)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ");
        $stmt->execute([
            'tr',
            'Yeni Vatandaşlık Yasası',
            '2026 göçmenlik yasalarında yapılan büyük değişiklikler.',
            '2026 göçmenlik yasalarındaki değişikliklere dair örnek içerik.',
            'Hukuk',
            'published',
            '2026-04-10',
            1,
        ]);
    }
}

function admin_can_access_locale(?string $locale): bool {
    if (!isset($_SESSION['admin_role'])) {
        return false;
    }

    if ($_SESSION['admin_role'] === 'super') {
        return true;
    }

    $adminLocale = $_SESSION['admin_locale'] ?? null;
    return $locale !== null && $adminLocale === $locale;
}

function normalize_publish_date(?string $value): ?string {
    if (!$value) {
        return null;
    }

    $ts = strtotime($value);
    return $ts ? date('Y-m-d', $ts) : null;
}

// Connect to SQLite Database
$db_file = __DIR__ . '/database.sqlite';

try {
    $db = new PDO('sqlite:' . $db_file);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    initialize_admin_db($db);
    seed_admin_db($db);
} catch(PDOException $e) {
    die("Veritabanı bağlantı hatası: " . $e->getMessage());
}

function require_login() {
    if (!isset($_SESSION['admin_id'])) {
        header("Location: login.php");
        exit;
    }
}
?>
