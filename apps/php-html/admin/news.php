<?php
$activePath = 'news';
require_once 'layout-top.php';

$selLocale = $_GET['locale'] ?? null;
$selStatus = $_GET['status'] ?? 'all';

// If not super admin, force their own locale
if (!$isSuper) {
    $selLocale = $adminLocale;
}

// Build query
$query = "SELECT * FROM news WHERE 1=1";
$params = [];

if ($selLocale) {
    $query .= " AND locale = :locale";
    $params[':locale'] = $selLocale;
}
if ($selStatus !== 'all') {
    $query .= " AND status = :status";
    $params[':status'] = $selStatus;
}
$query .= " ORDER BY id DESC";

$stmt = $db->prepare($query);
$stmt->execute($params);
$bulletins = $stmt->fetchAll();

// Get stats
function getStats($locale = null) {
    global $db;
    $q = "SELECT status, COUNT(*) as c FROM news";
    $p = [];
    if ($locale) {
        $q .= " WHERE locale = :loc";
        $p[':loc'] = $locale;
    }
    $q .= " GROUP BY status";
    $s = $db->prepare($q);
    $s->execute($p);
    
    $stats = array('total' => 0, 'published' => 0, 'draft' => 0, 'archived' => 0);
    while($row = $s->fetch()) {
        $stats[$row['status']] = $row['c'];
        $stats['total'] += $row['c'];
    }
    return $stats;
}

$counts = getStats($isSuper ? $selLocale : $adminLocale);

function filterUrl($ov) {
    global $selLocale, $selStatus;
    $base = array();
    if ($selLocale) $base['locale'] = $selLocale;
    if ($selStatus !== 'all') $base['status'] = $selStatus;
    
    $merged = array_merge($base, $ov);
    $qs = [];
    foreach($merged as $k => $v) {
        if ($v !== null && $v !== 'all' && $v !== '') {
            $qs[] = urlencode($k) . '=' . urlencode($v);
        }
    }
    return 'news.php' . (!empty($qs) ? '?' . implode('&', $qs) : '');
}
?>

<div class="admin-topbar">
  <span class="admin-topbar-title">Haber Bültenleri</span>
  <div class="admin-topbar-actions">
    <a href="news-edit.php" class="admin-btn admin-btn-gold admin-btn-sm">+ Yeni Bülten</a>
  </div>
</div>

<div class="admin-content">
  <!-- Stats -->
  <div class="admin-stats">
    <div class="admin-stat-card total"><div class="admin-stat-value"><?= $counts['total'] ?></div><div class="admin-stat-label">Toplam</div></div>
    <div class="admin-stat-card approved"><div class="admin-stat-value"><?= $counts['published'] ?></div><div class="admin-stat-label">Yayında</div></div>
    <div class="admin-stat-card pending"><div class="admin-stat-value"><?= $counts['draft'] ?></div><div class="admin-stat-label">Taslak</div></div>
    <div class="admin-stat-card rejected"><div class="admin-stat-value"><?= $counts['archived'] ?></div><div class="admin-stat-label">Arşiv</div></div>
  </div>

  <!-- Filters -->
  <div class="admin-card" style="margin-bottom: 20px;">
    <div class="admin-filters">
      <?php if ($isSuper): ?>
        <div class="admin-filter-row">
          <span class="admin-filter-label">Dil</span>
          <div class="admin-filter-tabs">
            <a href="<?= filterUrl(['locale' => null]) ?>" class="admin-filter-tab <?= !$selLocale ? 'active' : '' ?>">🌐 Tümü</a>
            <?php foreach ($LOCALES as $loc): 
              $locStats = getStats($loc);
            ?>
              <a href="<?= filterUrl(['locale' => $loc]) ?>" class="admin-filter-tab <?= $selLocale === $loc ? 'active' : '' ?>">
                <?= $LOCALE_FLAGS[$loc] ?> <?= strtoupper($loc) ?>
                <span style="margin-left: 4px; font-size: 10px; background: rgba(0,0,0,0.08); padding: 1px 5px; border-radius: 999px;">
                  <?= $locStats['total'] ?>
                </span>
              </a>
            <?php endforeach; ?>
          </div>
        </div>
      <?php endif; ?>

      <?php if (!$isSuper && $adminLocale): ?>
        <div class="admin-filter-row">
          <span class="admin-filter-label">Dil</span>
          <div class="admin-filter-tab active" style="cursor: default;">
            <?= $LOCALE_FLAGS[$adminLocale] ?> <?= $LOCALE_LABELS[$adminLocale] ?>
          </div>
        </div>
      <?php endif; ?>

      <div class="admin-filter-row">
        <span class="admin-filter-label">Durum</span>
        <div class="admin-filter-tabs">
          <?php 
          $statuses = ['all', 'published', 'draft', 'archived'];
          foreach ($statuses as $s): 
              $class = 'admin-filter-tab';
              if ($selStatus === $s) {
                  if ($s === 'all') $class .= ' active';
                  elseif ($s === 'published') $class .= ' active-approved';
                  elseif ($s === 'draft') $class .= ' active-pending';
                  else $class .= ' active-rejected';
              }
          ?>
            <a href="<?= filterUrl(['status' => $s === 'all' ? null : $s]) ?>" class="<?= $class ?>">
              <?= $s === 'all' ? 'Tümü' : $STATUS_LABELS[$s] ?>
            </a>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
  </div>

  <!-- List -->
  <?php if (empty($bulletins)): ?>
    <div class="admin-card">
      <div class="admin-empty">
        <div class="admin-empty-icon">📰</div>
        <div class="admin-empty-title">Bülten bulunamadı</div>
        <div class="admin-empty-text">
          <a href="news-edit.php" style="color: #c9a76b;">Yeni bülten ekleyin.</a>
        </div>
      </div>
    </div>
  <?php else: ?>
    <div class="admin-question-list">
      <?php foreach ($bulletins as $b): ?>
        <a href="news-edit.php?id=<?= $b['id'] ?>" class="admin-question-card">
          <?php if (!empty($b['coverImage'])): ?>
            <div style="width: 64px; height: 64px; border-radius: 8px; background: url('<?= htmlspecialchars($b['coverImage']) ?>') center/cover no-repeat; flex-shrink: 0;"></div>
          <?php endif; ?>
          
          <div class="admin-question-meta">
            <span class="badge-locale"><?= $LOCALE_FLAGS[$b['locale']] ?> <?= strtoupper($b['locale']) ?></span>
            <span class="badge <?= $STATUS_COLORS[$b['status']] ?? '' ?>"><?= $STATUS_LABELS[$b['status']] ?? $b['status'] ?></span>
            <?php if ($b['isFeatured']): ?>
              <span title="Öne çıkan" style="font-size: 14px;">⭐</span>
            <?php endif; ?>
          </div>
          <div class="admin-question-body">
            <div class="admin-question-name">
              <?= htmlspecialchars($b['title']) ?>
              <span style="font-weight: 400; color: #9ca3af; font-size: 11px; margin-left: 8px;"><?= htmlspecialchars($b['category']) ?></span>
            </div>
            <div class="admin-question-text"><?= htmlspecialchars($b['summary']) ?></div>
            <div class="admin-question-date">
              <?= $b['publishedAt'] ? date("d F Y", strtotime($b['publishedAt'])) : "Yayın tarihi yok" ?>
            </div>
          </div>
          <div style="color: #d1d5db; font-size: 18px; flex-shrink: 0;">›</div>
        </a>
      <?php endforeach; ?>
    </div>
  <?php endif; ?>
</div>

<?php require_once 'layout-bottom.php'; ?>
