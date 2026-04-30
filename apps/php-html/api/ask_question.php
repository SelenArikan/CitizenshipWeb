<?php
require_once __DIR__ . '/../admin/config.php';

$lang = $_POST['lang'] ?? 'tr';
if (!in_array($lang, $LOCALES, true)) {
    $lang = 'tr';
}

$question = trim((string) ($_POST['question'] ?? ''));
$name = trim((string) ($_POST['name'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$phone = trim((string) ($_POST['phone'] ?? ''));
$redirect = $_POST['redirect'] ?? ("/questions.php?lang=" . urlencode($lang));

if (!is_string($redirect) || $redirect === '' || !str_starts_with($redirect, '/')) {
    $redirect = "/questions.php?lang=" . urlencode($lang);
}

$separator = str_contains($redirect, '?') ? '&' : '?';

if ($question === '') {
    header("Location: {$redirect}{$separator}question_error=required#newsletterContainer");
    exit;
}

try {
    $stmt = $db->prepare("
        INSERT INTO questions (name, email, phone, message, status, locale, createdAt)
        VALUES (:name, :email, :phone, :message, 'pending', :locale, :createdAt)
    ");
    $stmt->execute([
        ':name' => $name !== '' ? $name : 'Anonim',
        ':email' => $email,
        ':phone' => $phone,
        ':message' => $question,
        ':locale' => $lang,
        ':createdAt' => date('c'),
    ]);

    header("Location: {$redirect}{$separator}question_submitted=1#newsletterContainer");
    exit;
} catch (Throwable $e) {
    header("Location: {$redirect}{$separator}question_error=failed#newsletterContainer");
    exit;
}
