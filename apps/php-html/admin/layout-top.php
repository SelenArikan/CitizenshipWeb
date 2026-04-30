<?php
require_once 'config.php';
require_login();

$activePath = $activePath ?? '';
$isSuper = ($_SESSION['admin_role'] === 'super');
$adminLocale = $_SESSION['admin_locale'] ?? null;

// Get pending questions count
if (!$isSuper && $adminLocale) {
    $stmt = $db->prepare("SELECT COUNT(*) FROM questions WHERE status = 'pending' AND locale = :locale");
    $stmt->execute([':locale' => $adminLocale]);
    $pendingCount = (int) $stmt->fetchColumn();
} elseif (!$isSuper) {
    $pendingCount = 0;
} else {
    $stmt = $db->query("SELECT COUNT(*) FROM questions WHERE status='pending'");
    $pendingCount = (int) $stmt->fetchColumn();
}
?>
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel &mdash; CitizanShip</title>
    <link rel="stylesheet" href="admin.css">
</head>
<body>
<div class="admin-root">
    <aside class="admin-sidebar">
      <!-- Logo -->
      <a href="index.php" class="admin-sidebar-logo">
        <div class="admin-sidebar-logo-mark">C</div>
        <div class="admin-sidebar-logo-text">
          CitizanShip
          <span class="admin-sidebar-logo-sub">Admin Panel</span>
        </div>
      </a>

      <!-- Admin info -->
      <div class="admin-info">
        <div class="admin-info-name"><?php echo htmlspecialchars($_SESSION['admin_name']); ?></div>
        <div class="admin-info-meta">
          <?php if ($adminLocale): ?>
            <span class="admin-locale-badge">
              <?php echo $LOCALE_FLAGS[$adminLocale] ?? ""; ?> <?php echo strtoupper($adminLocale); ?>
            </span>
          <?php elseif (!$isSuper): ?>
            <span class="admin-locale-badge" style="background: #fee2e2; color: #b91c1c;">
              Dil atanmamış
            </span>
          <?php else: ?>
            <span class="admin-locale-badge">🌐 Tüm Diller</span>
          <?php endif; ?>
          <span class="admin-role-badge">
            <?php echo $isSuper ? "Süper Admin" : "Dil Admini"; ?>
          </span>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="admin-nav">
        <div class="admin-nav-section">
          <div class="admin-nav-title">Yönetim</div>

          <a href="index.php" class="admin-nav-link <?php echo $activePath === 'dashboard' ? 'active' : ''; ?>">
            <span class="admin-nav-icon">📋</span>
            Sorular / Talepler
            <?php if ($pendingCount > 0): ?>
              <span class="admin-nav-badge"><?php echo $pendingCount; ?></span>
            <?php endif; ?>
          </a>

          <a href="knowledge.php" class="admin-nav-link <?php echo $activePath === 'knowledge' ? 'active' : ''; ?>">
            <span class="admin-nav-icon">📚</span>
            Bilgi Kütüphanesi
          </a>

          <a href="news.php" class="admin-nav-link <?php echo $activePath === 'news' ? 'active' : ''; ?>">
            <span class="admin-nav-icon">📰</span>
            Haber Bültenleri
          </a>

          <a href="chat.php" class="admin-nav-link <?php echo $activePath === 'chat' ? 'active' : ''; ?>">
            <span class="admin-nav-icon">💬</span>
            Canlı Sohbetler
          </a>

          <?php if ($isSuper): ?>
            <a href="setup.php" class="admin-nav-link <?php echo $activePath === 'setup' ? 'active' : ''; ?>">
              <span class="admin-nav-icon">👤</span>
              Admin Ekle
            </a>
          <?php endif; ?>
        </div>

        <?php if ($isSuper): ?>
          <div class="admin-nav-section">
            <div class="admin-nav-title">Dil Yetkileri</div>
            <?php foreach($LOCALES as $loc): ?>
              <div class="admin-nav-link" style="cursor: default; opacity: 0.7">
                <span class="admin-nav-icon"><?php echo $LOCALE_FLAGS[$loc]; ?></span>
                <span style="font-size: 12px">
                  <?php echo $LOCALE_LABELS[$loc]; ?> <span style="opacity: 0.5">(<?php echo $loc; ?>)</span>
                </span>
              </div>
            <?php endforeach; ?>
          </div>
        <?php endif; ?>

        <div class="admin-nav-section">
          <div class="admin-nav-title">Site</div>
          <a href="../index.php" target="_blank" class="admin-nav-link">
            <span class="admin-nav-icon">🌐</span>
            Siteye Git
          </a>
        </div>
      </nav>

      <!-- Logout -->
      <div class="admin-logout">
        <form action="login.php?action=logout" method="POST">
          <button type="submit" class="admin-logout-btn">
            <span>🚪</span> Çıkış Yap
          </button>
        </form>
      </div>
    </aside>

    <div class="admin-main">
