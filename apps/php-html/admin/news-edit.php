<?php
require_once 'config.php';
require_login();

$activePath = 'news';
$isSuper = ($_SESSION['admin_role'] ?? null) === 'super';
$adminLocale = $_SESSION['admin_locale'] ?? null;

$bulletinId = (int) ($_GET['id'] ?? 0);
$isEditing = $bulletinId > 0;
$error = null;
$success = null;

$bulletin = [
    'id' => null,
    'locale' => $adminLocale ?: 'tr',
    'title' => '',
    'summary' => '',
    'content' => '',
    'category' => 'Vatandaşlık',
    'status' => 'draft',
    'publishedAt' => date('Y-m-d'),
    'coverImage' => '',
    'isFeatured' => 0,
];

if ($isEditing) {
    $stmt = $db->prepare("SELECT * FROM news WHERE id = :id");
    $stmt->execute([':id' => $bulletinId]);
    $existing = $stmt->fetch();

    if (!$existing) {
        require_once 'layout-top.php';
        ?>
        <div class="admin-topbar">
          <span class="admin-topbar-title">Bülten Düzenle</span>
        </div>
        <div class="admin-content">
          <div class="admin-card">
            <div class="admin-empty">
              <div class="admin-empty-icon">📰</div>
              <div class="admin-empty-title">Bülten bulunamadı</div>
              <div class="admin-empty-text">Silinmiş veya hiç oluşmamış bir içeriğe erişmeye çalışıyorsunuz.</div>
            </div>
          </div>
        </div>
        <?php
        require_once 'layout-bottom.php';
        exit;
    }

    if (!$isSuper && ($existing['locale'] ?? null) !== $adminLocale) {
        http_response_code(403);
        require_once 'layout-top.php';
        ?>
        <div class="admin-topbar">
          <span class="admin-topbar-title">Bülten Düzenle</span>
        </div>
        <div class="admin-content">
          <div class="admin-card">
            <div class="admin-empty">
              <div class="admin-empty-icon">🔒</div>
              <div class="admin-empty-title">Bu bültene erişim yetkiniz yok</div>
              <div class="admin-empty-text">Yalnızca kendi dilinizdeki içerikleri düzenleyebilirsiniz.</div>
            </div>
          </div>
        </div>
        <?php
        require_once 'layout-bottom.php';
        exit;
    }

    $bulletin = array_merge($bulletin, $existing);
}

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'POST') {
    $action = $_POST['action'] ?? 'save';

    if ($action === 'delete' && $isEditing) {
        $deleteStmt = $db->prepare("DELETE FROM news WHERE id = :id");
        $deleteStmt->execute([':id' => $bulletinId]);
        header("Location: news.php?deleted=1");
        exit;
    }

    $locale = $_POST['locale'] ?? ($adminLocale ?: 'tr');
    if (!$isSuper && $adminLocale) {
        $locale = $adminLocale;
    }

    $payload = [
        'locale' => $locale,
        'title' => trim($_POST['title'] ?? ''),
        'summary' => trim($_POST['summary'] ?? ''),
        'content' => trim($_POST['content'] ?? ''),
        'category' => trim($_POST['category'] ?? 'Vatandaşlık'),
        'status' => $_POST['status'] ?? 'draft',
        'publishedAt' => normalize_publish_date($_POST['publishedAt'] ?? date('Y-m-d')),
        'coverImage' => trim($_POST['coverImage'] ?? ''),
        'isFeatured' => isset($_POST['isFeatured']) ? 1 : 0,
    ];

    $allowedStatuses = ['published', 'draft', 'archived'];
    if (!in_array($payload['locale'], $LOCALES, true)) {
        $error = "Geçersiz dil seçimi.";
    } elseif ($payload['title'] === '' || $payload['summary'] === '' || $payload['content'] === '') {
        $error = "Başlık, özet ve içerik alanları zorunludur.";
    } elseif (!in_array($payload['status'], $allowedStatuses, true)) {
        $error = "Geçersiz durum seçimi.";
    } else {
        if ($isEditing) {
            $updateStmt = $db->prepare("
                UPDATE news
                SET locale = :locale,
                    title = :title,
                    summary = :summary,
                    content = :content,
                    category = :category,
                    status = :status,
                    publishedAt = :publishedAt,
                    coverImage = :coverImage,
                    isFeatured = :isFeatured
                WHERE id = :id
            ");
            $updateStmt->execute([
                ':locale' => $payload['locale'],
                ':title' => $payload['title'],
                ':summary' => $payload['summary'],
                ':content' => $payload['content'],
                ':category' => $payload['category'],
                ':status' => $payload['status'],
                ':publishedAt' => $payload['publishedAt'],
                ':coverImage' => $payload['coverImage'] ?: null,
                ':isFeatured' => $payload['isFeatured'],
                ':id' => $bulletinId,
            ]);
            $success = "Bülten güncellendi.";
        } else {
            $insertStmt = $db->prepare("
                INSERT INTO news (locale, title, summary, content, category, status, publishedAt, coverImage, isFeatured)
                VALUES (:locale, :title, :summary, :content, :category, :status, :publishedAt, :coverImage, :isFeatured)
            ");
            $insertStmt->execute([
                ':locale' => $payload['locale'],
                ':title' => $payload['title'],
                ':summary' => $payload['summary'],
                ':content' => $payload['content'],
                ':category' => $payload['category'],
                ':status' => $payload['status'],
                ':publishedAt' => $payload['publishedAt'],
                ':coverImage' => $payload['coverImage'] ?: null,
                ':isFeatured' => $payload['isFeatured'],
            ]);
            $bulletinId = (int) $db->lastInsertId();
            $isEditing = true;
            $success = "Yeni bülten oluşturuldu.";
        }

        $stmt = $db->prepare("SELECT * FROM news WHERE id = :id");
        $stmt->execute([':id' => $bulletinId]);
        $reloaded = $stmt->fetch();
        if ($reloaded) {
            $bulletin = array_merge($bulletin, $reloaded);
        }
    }
}

require_once 'layout-top.php';
?>

<div class="admin-topbar">
  <span class="admin-topbar-title"><?= $isEditing ? 'Bülten Düzenle' : 'Yeni Bülten' ?></span>
  <div class="admin-topbar-actions">
    <a href="news.php" class="admin-btn admin-btn-ghost admin-btn-sm">← Bültenlere Dön</a>
  </div>
</div>

<div class="admin-content">
  <div class="admin-breadcrumb">
    <a href="news.php">Haber Bültenleri</a>
    <span>›</span>
    <span><?= $isEditing ? 'Düzenle' : 'Yeni' ?></span>
  </div>

  <?php if ($error): ?>
    <div class="admin-error" style="margin-bottom: 16px;"><?= htmlspecialchars($error) ?></div>
  <?php endif; ?>

  <?php if ($success): ?>
    <div class="admin-success" style="margin-bottom: 16px;"><?= htmlspecialchars($success) ?></div>
  <?php endif; ?>

  <form method="POST" class="admin-card">
    <h2 class="admin-card-title"><?= $isEditing ? 'Bülten İçeriği' : 'Yeni Bülten Oluştur' ?></h2>

    <div class="admin-form-group">
      <label class="admin-form-label" for="title">Başlık</label>
      <input id="title" name="title" class="admin-form-input" value="<?= htmlspecialchars($bulletin['title'] ?? '') ?>" required>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 20px;">
      <div class="admin-form-group" style="margin-bottom: 0;">
        <label class="admin-form-label" for="locale">Dil</label>
        <select id="locale" name="locale" class="admin-form-select" <?= !$isSuper ? 'disabled' : '' ?>>
          <?php foreach ($LOCALES as $loc): ?>
            <option value="<?= $loc ?>" <?= ($bulletin['locale'] ?? '') === $loc ? 'selected' : '' ?>>
              <?= $LOCALE_FLAGS[$loc] ?> <?= $LOCALE_LABELS[$loc] ?>
            </option>
          <?php endforeach; ?>
        </select>
        <?php if (!$isSuper): ?>
          <input type="hidden" name="locale" value="<?= htmlspecialchars($bulletin['locale'] ?? ($adminLocale ?: 'tr')) ?>">
        <?php endif; ?>
      </div>

      <div class="admin-form-group" style="margin-bottom: 0;">
        <label class="admin-form-label" for="category">Kategori</label>
        <input id="category" name="category" class="admin-form-input" value="<?= htmlspecialchars($bulletin['category'] ?? '') ?>" placeholder="Vatandaşlık">
      </div>

      <div class="admin-form-group" style="margin-bottom: 0;">
        <label class="admin-form-label" for="status">Durum</label>
        <select id="status" name="status" class="admin-form-select">
          <option value="draft" <?= ($bulletin['status'] ?? '') === 'draft' ? 'selected' : '' ?>>Taslak</option>
          <option value="published" <?= ($bulletin['status'] ?? '') === 'published' ? 'selected' : '' ?>>Yayında</option>
          <option value="archived" <?= ($bulletin['status'] ?? '') === 'archived' ? 'selected' : '' ?>>Arşiv</option>
        </select>
      </div>

      <div class="admin-form-group" style="margin-bottom: 0;">
        <label class="admin-form-label" for="publishedAt">Yayın Tarihi</label>
        <input id="publishedAt" type="date" name="publishedAt" class="admin-form-input" value="<?= htmlspecialchars($bulletin['publishedAt'] ?? '') ?>">
      </div>
    </div>

    <div class="admin-form-group">
      <label class="admin-form-label" for="coverImage">Kapak Görseli URL</label>
      <input id="coverImage" name="coverImage" class="admin-form-input" value="<?= htmlspecialchars($bulletin['coverImage'] ?? '') ?>" placeholder="https://... veya /assets/...">
    </div>

    <div class="admin-form-group">
      <label class="admin-form-label" for="summary">Özet</label>
      <textarea id="summary" name="summary" class="admin-form-textarea" rows="4" required><?= htmlspecialchars($bulletin['summary'] ?? '') ?></textarea>
    </div>

    <div class="admin-form-group">
      <label class="admin-form-label" for="content">İçerik</label>
      <textarea id="content" name="content" class="admin-form-textarea" rows="12" required><?= htmlspecialchars($bulletin['content'] ?? '') ?></textarea>
      <div class="admin-form-hint">Tam metni buradan düzenleyebilirsiniz.</div>
    </div>

    <div class="admin-toggle-row" style="margin-bottom: 20px;">
      <div class="admin-toggle-info">
        <div class="admin-toggle-title">Öne Çıkan Bülten</div>
        <div class="admin-toggle-desc">Ana sayfada ve listelerde öncelikli vurgulansın.</div>
      </div>
      <label class="admin-toggle">
        <input type="checkbox" name="isFeatured" <?= !empty($bulletin['isFeatured']) ? 'checked' : '' ?>>
        <span class="admin-toggle-track"></span>
      </label>
    </div>

    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <button type="submit" class="admin-btn admin-btn-gold"><?= $isEditing ? 'Güncelle' : 'Oluştur' ?></button>
      <?php if ($isEditing): ?>
        <button
          type="submit"
          name="action"
          value="delete"
          class="admin-btn admin-btn-danger"
          onclick="return confirm('Bu bülten silinsin mi?');"
        >
          Sil
        </button>
      <?php endif; ?>
    </div>
  </form>
</div>

<?php require_once 'layout-bottom.php'; ?>
