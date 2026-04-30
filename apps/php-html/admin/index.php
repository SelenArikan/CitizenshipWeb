<?php
$activePath = 'dashboard';
require_once 'layout-top.php';

$selLocale = $_GET['locale'] ?? null;
$selStatus = $_GET['status'] ?? 'all';
$missingLocaleAccess = !$isSuper && !$adminLocale;

if (!$isSuper) {
    $selLocale = $adminLocale ?: '__missing_locale__';
}

// Build query
$query = "SELECT * FROM questions WHERE 1=1";
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
$questions = $stmt->fetchAll();

// Get stats
function getStats($locale = null) {
    global $db;
    $q = "SELECT status, COUNT(*) as c FROM questions";
    $p = [];
    if ($locale) {
        $q .= " WHERE locale = :loc";
        $p[':loc'] = $locale;
    }
    $q .= " GROUP BY status";
    $s = $db->prepare($q);
    $s->execute($p);
    
    $stats = array('total' => 0, 'approved' => 0, 'pending' => 0, 'rejected' => 0);
    while($row = $s->fetch()) {
        $stats[$row['status']] = $row['c'];
        $stats['total'] += $row['c'];
    }
    return $stats;
}

$counts = getStats($isSuper ? $selLocale : ($adminLocale ?: '__missing_locale__'));

function filterUrl($ov) {
    global $selLocale, $selStatus, $missingLocaleAccess;
    $base = array();
    if ($selLocale && !$missingLocaleAccess) $base['locale'] = $selLocale;
    if ($selStatus !== 'all') $base['status'] = $selStatus;
    
    $merged = array_merge($base, $ov);
    $qs = [];
    foreach($merged as $k => $v) {
        if ($v !== null && $v !== 'all' && $v !== '') {
            $qs[] = urlencode($k) . '=' . urlencode($v);
        }
    }
    return 'index.php' . (!empty($qs) ? '?' . implode('&', $qs) : '');
}
?>

<div class="admin-topbar">
  <span class="admin-topbar-title">Gelen Sorular ve Talepler</span>
</div>

<div class="admin-content">
  <?php if ($missingLocaleAccess): ?>
    <div class="admin-error" style="margin-bottom: 16px;">
      Bu dil adminine henüz bir dil atanmadığı için soru listesi gösterilmiyor.
    </div>
  <?php endif; ?>

  <!-- Stats -->
  <div class="admin-stats">
    <div class="admin-stat-card total"><div class="admin-stat-value"><?= $counts['total'] ?></div><div class="admin-stat-label">Toplam</div></div>
    <div class="admin-stat-card approved"><div class="admin-stat-value"><?= $counts['approved'] ?></div><div class="admin-stat-label">Yanıtlanan</div></div>
    <div class="admin-stat-card pending"><div class="admin-stat-value"><?= $counts['pending'] ?></div><div class="admin-stat-label">Bekleyen</div></div>
    <div class="admin-stat-card rejected"><div class="admin-stat-value"><?= $counts['rejected'] ?></div><div class="admin-stat-label">Reddedilen</div></div>
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

      <?php if (!$isSuper && !$adminLocale): ?>
        <div class="admin-filter-row">
          <span class="admin-filter-label">Dil</span>
          <div class="admin-filter-tab active" style="cursor: default; background: #fee2e2; border-color: #fecaca; color: #b91c1c;">
            Dil atanmamış
          </div>
        </div>
      <?php endif; ?>

      <div class="admin-filter-row">
        <span class="admin-filter-label">Durum</span>
        <div class="admin-filter-tabs">
          <?php 
          $statuses = ['all', 'approved', 'pending', 'rejected'];
          foreach ($statuses as $s): 
              $class = 'admin-filter-tab';
              if ($selStatus === $s) {
                  if ($s === 'all') $class .= ' active';
                  elseif ($s === 'approved') $class .= ' active-approved';
                  elseif ($s === 'pending') $class .= ' active-pending';
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
  <?php if (empty($questions)): ?>
    <div class="admin-card">
      <div class="admin-empty">
        <div class="admin-empty-icon">📂</div>
        <div class="admin-empty-title">Talep bulunamadı</div>
      </div>
    </div>
  <?php else: ?>
    <div class="admin-question-list">
      <?php foreach ($questions as $q): ?>
        <a href="question-detail.php?id=<?= $q['id'] ?>" class="admin-question-card">
          <div class="admin-question-meta">
            <span class="badge-locale"><?= $LOCALE_FLAGS[$q['locale']] ?> <?= strtoupper($q['locale']) ?></span>
            <span class="badge <?= $STATUS_COLORS[$q['status']] ?? '' ?>"><?= $STATUS_LABELS[$q['status']] ?? $q['status'] ?></span>
          </div>
          <div class="admin-question-body">
            <div class="admin-question-name">
              <?= htmlspecialchars($q['name']) ?>
              <span style="font-weight: 400; color: #9ca3af; font-size: 12px; margin-left: 8px;"><?= htmlspecialchars($q['email']) ?></span>
            </div>
            <div class="admin-question-text"><?= htmlspecialchars($q['message']) ?></div>
            <div class="admin-question-date">
              <?= $q['createdAt'] ? date("d M Y H:i", strtotime($q['createdAt'])) : "" ?>
            </div>
          </div>
          <div style="color: #d1d5db; font-size: 18px; flex-shrink: 0;">›</div>
        </a>
      <?php endforeach; ?>
    </div>
  <?php endif; ?>
</div>

<?php require_once 'layout-bottom.php'; ?>
