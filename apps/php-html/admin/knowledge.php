<?php
require_once 'config.php';
require_login();

$activePath = 'knowledge';
$isSuper = ($_SESSION['admin_role'] ?? null) === 'super';
$adminLocale = $_SESSION['admin_locale'] ?? null;

$selLocale = $_GET['locale'] ?? null;
$selStatus = $_GET['status'] ?? 'all';
$editingId = (int) ($_GET['id'] ?? 0);
$mode = $_GET['mode'] ?? '';
$error = null;

if (!$isSuper) {
    $selLocale = $adminLocale;
}

$categories = ['Vatandaşlık', 'Oturum', 'Mülkiyet', 'Yatırım', 'Aile', 'Çalışma', 'Seyahat', 'Sosyal Haklar'];

$article = [
    'id' => null,
    'locale' => $adminLocale ?: 'tr',
    'title' => '',
    'summary' => '',
    'content' => '',
    'category' => $categories[0],
    'status' => 'draft',
    'coverImage' => '',
    'isFeatured' => 0,
    'publishedAt' => date('Y-m-d'),
];

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'POST') {
    $action = $_POST['action'] ?? 'save_article';
    $articleId = (int) ($_POST['article_id'] ?? 0);

    if ($action === 'delete_article' && $articleId > 0) {
        $deleteStmt = $db->prepare("DELETE FROM knowledge WHERE id = :id");
        $deleteStmt->execute([':id' => $articleId]);
        header("Location: knowledge.php?deleted=1");
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
        'category' => trim($_POST['category'] ?? $categories[0]),
        'status' => $_POST['status'] ?? 'draft',
        'coverImage' => trim($_POST['coverImage'] ?? ''),
        'isFeatured' => isset($_POST['isFeatured']) ? 1 : 0,
        'publishedAt' => normalize_publish_date($_POST['publishedAt'] ?? date('Y-m-d')),
    ];

    $allowedStatuses = ['published', 'draft', 'archived'];
    if (!in_array($payload['locale'], $LOCALES, true)) {
        $error = "Geçersiz dil seçimi.";
    } elseif ($payload['title'] === '' || $payload['summary'] === '' || $payload['content'] === '') {
        $error = "Başlık, özet ve içerik alanları zorunludur.";
    } elseif (!in_array($payload['status'], $allowedStatuses, true)) {
        $error = "Geçersiz durum seçimi.";
    } else {
        if ($articleId > 0) {
            $checkStmt = $db->prepare("SELECT locale FROM knowledge WHERE id = :id");
            $checkStmt->execute([':id' => $articleId]);
            $existing = $checkStmt->fetch();
            if (!$existing || !admin_can_access_locale($existing['locale'] ?? null)) {
                $error = "Bu makaleyi düzenleme yetkiniz yok.";
            }
        }
    }

    if (!$error) {
        if ($articleId > 0) {
            $updateStmt = $db->prepare("
                UPDATE knowledge
                SET locale = :locale,
                    title = :title,
                    summary = :summary,
                    content = :content,
                    category = :category,
                    status = :status,
                    coverImage = :coverImage,
                    isFeatured = :isFeatured,
                    publishedAt = :publishedAt
                WHERE id = :id
            ");
            $updateStmt->execute([
                ':locale' => $payload['locale'],
                ':title' => $payload['title'],
                ':summary' => $payload['summary'],
                ':content' => $payload['content'],
                ':category' => $payload['category'],
                ':status' => $payload['status'],
                ':coverImage' => $payload['coverImage'] ?: null,
                ':isFeatured' => $payload['isFeatured'],
                ':publishedAt' => $payload['publishedAt'],
                ':id' => $articleId,
            ]);
            header("Location: knowledge.php?id={$articleId}&saved=1");
            exit;
        }

        $insertStmt = $db->prepare("
            INSERT INTO knowledge (locale, title, summary, content, category, status, coverImage, isFeatured, publishedAt)
            VALUES (:locale, :title, :summary, :content, :category, :status, :coverImage, :isFeatured, :publishedAt)
        ");
        $insertStmt->execute([
            ':locale' => $payload['locale'],
            ':title' => $payload['title'],
            ':summary' => $payload['summary'],
            ':content' => $payload['content'],
            ':category' => $payload['category'],
            ':status' => $payload['status'],
            ':coverImage' => $payload['coverImage'] ?: null,
            ':isFeatured' => $payload['isFeatured'],
            ':publishedAt' => $payload['publishedAt'],
        ]);
        $newId = (int) $db->lastInsertId();
        header("Location: knowledge.php?id={$newId}&saved=1");
        exit;
    }

    $article = array_merge($article, $payload, ['id' => $articleId ?: null]);
    $editingId = $articleId;
    $mode = $articleId > 0 ? '' : 'new';
}

if ($editingId > 0) {
    $stmt = $db->prepare("SELECT * FROM knowledge WHERE id = :id");
    $stmt->execute([':id' => $editingId]);
    $found = $stmt->fetch();
    if ($found && admin_can_access_locale($found['locale'] ?? null)) {
        $article = array_merge($article, $found);
    } elseif ($found) {
        http_response_code(403);
        $error = "Bu makaleyi görüntüleme yetkiniz yok.";
        $editingId = 0;
    } else {
        $error = "Makale bulunamadı.";
        $editingId = 0;
    }
}

function knowledge_stats(PDO $db, ?string $locale = null): array {
    $query = "SELECT status, COUNT(*) AS c FROM knowledge";
    $params = [];
    if ($locale) {
        $query .= " WHERE locale = :locale";
        $params[':locale'] = $locale;
    }
    $query .= " GROUP BY status";

    $stmt = $db->prepare($query);
    $stmt->execute($params);

    $stats = ['total' => 0, 'published' => 0, 'draft' => 0, 'archived' => 0];
    while ($row = $stmt->fetch()) {
        $stats[$row['status']] = (int) $row['c'];
        $stats['total'] += (int) $row['c'];
    }

    return $stats;
}

function knowledge_filter_url(array $overrides): string {
    global $selLocale, $selStatus;
    $params = [];

    if ($selLocale) {
        $params['locale'] = $selLocale;
    }
    if ($selStatus !== 'all') {
        $params['status'] = $selStatus;
    }

    foreach ($overrides as $key => $value) {
        if ($value === null || $value === '' || $value === 'all') {
            unset($params[$key]);
        } else {
            $params[$key] = $value;
        }
    }

    $query = http_build_query($params);
    return 'knowledge.php' . ($query ? '?' . $query : '');
}

$query = "SELECT * FROM knowledge WHERE 1=1";
$params = [];
if ($selLocale) {
    $query .= " AND locale = :locale";
    $params[':locale'] = $selLocale;
}
if ($selStatus !== 'all') {
    $query .= " AND status = :status";
    $params[':status'] = $selStatus;
}
$query .= " ORDER BY isFeatured DESC, publishedAt DESC, id DESC";

$listStmt = $db->prepare($query);
$listStmt->execute($params);
$articles = $listStmt->fetchAll();
$counts = knowledge_stats($db, $isSuper ? $selLocale : $adminLocale);

$showEditor = $mode === 'new' || $editingId > 0 || $error !== null;
$saved = isset($_GET['saved']);
$deleted = isset($_GET['deleted']);

require_once 'layout-top.php';
?>

<div class="admin-topbar">
  <span class="admin-topbar-title">Bilgi Kütüphanesi</span>
  <div class="admin-topbar-actions">
    <a href="knowledge.php?mode=new" class="admin-btn admin-btn-gold admin-btn-sm">+ Yeni Makale</a>
  </div>
</div>

<div class="admin-content">
  <?php if ($saved): ?>
    <div class="admin-success" style="margin-bottom: 16px;">Makale kaydedildi.</div>
  <?php endif; ?>

  <?php if ($deleted): ?>
    <div class="admin-success" style="margin-bottom: 16px;">Makale silindi.</div>
  <?php endif; ?>

  <?php if ($error): ?>
    <div class="admin-error" style="margin-bottom: 16px;"><?= htmlspecialchars($error) ?></div>
  <?php endif; ?>

  <div class="admin-stats">
    <div class="admin-stat-card total"><div class="admin-stat-value"><?= $counts['total'] ?></div><div class="admin-stat-label">Toplam</div></div>
    <div class="admin-stat-card approved"><div class="admin-stat-value"><?= $counts['published'] ?></div><div class="admin-stat-label">Yayında</div></div>
    <div class="admin-stat-card pending"><div class="admin-stat-value"><?= $counts['draft'] ?></div><div class="admin-stat-label">Taslak</div></div>
    <div class="admin-stat-card rejected"><div class="admin-stat-value"><?= $counts['archived'] ?></div><div class="admin-stat-label">Arşiv</div></div>
  </div>

  <?php if ($showEditor): ?>
    <div class="admin-card" style="margin-bottom: 20px;">
      <div class="admin-breadcrumb">
        <a href="knowledge.php">Bilgi Kütüphanesi</a>
        <span>›</span>
        <span><?= $editingId > 0 ? 'Makale Düzenle' : 'Yeni Makale' ?></span>
      </div>

      <form method="POST">
        <input type="hidden" name="article_id" value="<?= (int) ($article['id'] ?? 0) ?>">
        <h2 class="admin-card-title"><?= $editingId > 0 ? 'Makale Düzenle' : 'Yeni Makale Oluştur' ?></h2>

        <div class="admin-form-group">
          <label class="admin-form-label" for="title">Başlık</label>
          <input id="title" name="title" class="admin-form-input" value="<?= htmlspecialchars($article['title'] ?? '') ?>" required>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 20px;">
          <div class="admin-form-group" style="margin-bottom: 0;">
            <label class="admin-form-label" for="locale">Dil</label>
            <select id="locale" name="locale" class="admin-form-select" <?= !$isSuper ? 'disabled' : '' ?>>
              <?php foreach ($LOCALES as $loc): ?>
                <option value="<?= $loc ?>" <?= ($article['locale'] ?? '') === $loc ? 'selected' : '' ?>>
                  <?= $LOCALE_FLAGS[$loc] ?> <?= $LOCALE_LABELS[$loc] ?>
                </option>
              <?php endforeach; ?>
            </select>
            <?php if (!$isSuper): ?>
              <input type="hidden" name="locale" value="<?= htmlspecialchars($article['locale'] ?? ($adminLocale ?: 'tr')) ?>">
            <?php endif; ?>
          </div>

          <div class="admin-form-group" style="margin-bottom: 0;">
            <label class="admin-form-label" for="category">Kategori</label>
            <select id="category" name="category" class="admin-form-select">
              <?php foreach ($categories as $category): ?>
                <option value="<?= htmlspecialchars($category) ?>" <?= ($article['category'] ?? '') === $category ? 'selected' : '' ?>>
                  <?= htmlspecialchars($category) ?>
                </option>
              <?php endforeach; ?>
            </select>
          </div>

          <div class="admin-form-group" style="margin-bottom: 0;">
            <label class="admin-form-label" for="status">Durum</label>
            <select id="status" name="status" class="admin-form-select">
              <option value="draft" <?= ($article['status'] ?? '') === 'draft' ? 'selected' : '' ?>>Taslak</option>
              <option value="published" <?= ($article['status'] ?? '') === 'published' ? 'selected' : '' ?>>Yayında</option>
              <option value="archived" <?= ($article['status'] ?? '') === 'archived' ? 'selected' : '' ?>>Arşiv</option>
            </select>
          </div>

          <div class="admin-form-group" style="margin-bottom: 0;">
            <label class="admin-form-label" for="publishedAt">Yayın Tarihi</label>
            <input id="publishedAt" type="date" name="publishedAt" class="admin-form-input" value="<?= htmlspecialchars($article['publishedAt'] ?? '') ?>">
          </div>
        </div>

        <div class="admin-form-group">
          <label class="admin-form-label" for="coverImage">Kapak Görseli URL</label>
          <input id="coverImage" name="coverImage" class="admin-form-input" value="<?= htmlspecialchars($article['coverImage'] ?? '') ?>" placeholder="https://... veya /assets/...">
        </div>

        <div class="admin-form-group">
          <label class="admin-form-label" for="summary">Özet</label>
          <textarea id="summary" name="summary" class="admin-form-textarea" rows="4" required><?= htmlspecialchars($article['summary'] ?? '') ?></textarea>
        </div>

        <div class="admin-form-group">
          <label class="admin-form-label" for="content">İçerik</label>
          <textarea id="content" name="content" class="admin-form-textarea" rows="12" required><?= htmlspecialchars($article['content'] ?? '') ?></textarea>
        </div>

        <div class="admin-toggle-row" style="margin-bottom: 20px;">
          <div class="admin-toggle-info">
            <div class="admin-toggle-title">Öne Çıkan Makale</div>
            <div class="admin-toggle-desc">Öne çıkan rehber alanında önceliklensin.</div>
          </div>
          <label class="admin-toggle">
            <input type="checkbox" name="isFeatured" <?= !empty($article['isFeatured']) ? 'checked' : '' ?>>
            <span class="admin-toggle-track"></span>
          </label>
        </div>

        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <button type="submit" class="admin-btn admin-btn-gold"><?= $editingId > 0 ? 'Güncelle' : 'Kaydet' ?></button>
          <?php if ($editingId > 0): ?>
            <button
              type="submit"
              name="action"
              value="delete_article"
              class="admin-btn admin-btn-danger"
              onclick="return confirm('Bu makale silinsin mi?');"
            >
              Sil
            </button>
          <?php endif; ?>
        </div>
      </form>
    </div>
  <?php endif; ?>

  <div class="admin-card" style="margin-bottom: 20px;">
    <div class="admin-filters">
      <?php if ($isSuper): ?>
        <div class="admin-filter-row">
          <span class="admin-filter-label">Dil</span>
          <div class="admin-filter-tabs">
            <a href="<?= knowledge_filter_url(['locale' => null]) ?>" class="admin-filter-tab <?= !$selLocale ? 'active' : '' ?>">🌐 Tümü</a>
            <?php foreach ($LOCALES as $loc): $locStats = knowledge_stats($db, $loc); ?>
              <a href="<?= knowledge_filter_url(['locale' => $loc]) ?>" class="admin-filter-tab <?= $selLocale === $loc ? 'active' : '' ?>">
                <?= $LOCALE_FLAGS[$loc] ?> <?= strtoupper($loc) ?>
                <span style="margin-left: 4px; font-size: 10px; background: rgba(0,0,0,0.08); padding: 1px 5px; border-radius: 999px;">
                  <?= $locStats['total'] ?>
                </span>
              </a>
            <?php endforeach; ?>
          </div>
        </div>
      <?php endif; ?>

      <div class="admin-filter-row">
        <span class="admin-filter-label">Durum</span>
        <div class="admin-filter-tabs">
          <?php foreach (['all', 'published', 'draft', 'archived'] as $status): ?>
            <?php
            $class = 'admin-filter-tab';
            if ($selStatus === $status) {
                if ($status === 'all') $class .= ' active';
                elseif ($status === 'published') $class .= ' active-approved';
                elseif ($status === 'draft') $class .= ' active-pending';
                else $class .= ' active-rejected';
            }
            ?>
            <a href="<?= knowledge_filter_url(['status' => $status === 'all' ? null : $status]) ?>" class="<?= $class ?>">
              <?= $status === 'all' ? 'Tümü' : ($STATUS_LABELS[$status] ?? ucfirst($status)) ?>
            </a>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
  </div>

  <?php if (empty($articles)): ?>
    <div class="admin-card">
      <div class="admin-empty">
        <div class="admin-empty-icon">📚</div>
        <div class="admin-empty-title">Makale bulunamadı</div>
        <div class="admin-empty-text">İlk rehber içeriğini oluşturmak için üstteki butonu kullanın.</div>
      </div>
    </div>
  <?php else: ?>
    <div class="admin-question-list">
      <?php foreach ($articles as $item): ?>
        <a href="knowledge.php?id=<?= (int) $item['id'] ?>" class="admin-question-card">
          <?php if (!empty($item['coverImage'])): ?>
            <div style="width: 64px; height: 64px; border-radius: 8px; background: url('<?= htmlspecialchars($item['coverImage']) ?>') center/cover no-repeat; flex-shrink: 0;"></div>
          <?php endif; ?>

          <div class="admin-question-meta">
            <span class="badge-locale"><?= $LOCALE_FLAGS[$item['locale']] ?? '🌐' ?> <?= strtoupper($item['locale'] ?? 'tr') ?></span>
            <span class="badge <?= $STATUS_COLORS[$item['status']] ?? 'badge-pending' ?>"><?= $STATUS_LABELS[$item['status']] ?? ($item['status'] ?: 'Taslak') ?></span>
            <?php if (!empty($item['isFeatured'])): ?>
              <span title="Öne çıkan" style="font-size: 14px;">⭐</span>
            <?php endif; ?>
          </div>

          <div class="admin-question-body">
            <div class="admin-question-name">
              <?= htmlspecialchars($item['title']) ?>
              <span style="font-weight: 400; color: #9ca3af; font-size: 11px; margin-left: 8px;"><?= htmlspecialchars($item['category'] ?: 'Genel') ?></span>
            </div>
            <div class="admin-question-text"><?= htmlspecialchars($item['summary'] ?: 'Özet bulunmuyor.') ?></div>
            <div class="admin-question-date">
              <?= !empty($item['publishedAt']) ? date('d F Y', strtotime($item['publishedAt'])) : 'Yayın tarihi yok' ?>
            </div>
          </div>
          <div style="color: #d1d5db; font-size: 18px; flex-shrink: 0;">›</div>
        </a>
      <?php endforeach; ?>
    </div>
  <?php endif; ?>
</div>

<?php require_once 'layout-bottom.php'; ?>
