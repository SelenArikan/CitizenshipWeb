<?php
require_once 'config.php';
require_login();

if (($_SESSION['admin_role'] ?? null) !== 'super') {
    header("Location: index.php");
    exit;
}

$activePath = 'setup';
$error = null;
$success = null;

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'POST') {
    $action = $_POST['action'] ?? 'create_admin';

    if ($action === 'delete_admin') {
        $deleteId = (int) ($_POST['admin_id'] ?? 0);
        if ($deleteId === (int) ($_SESSION['admin_id'] ?? 0)) {
            $error = "Oturumu açık olan admin hesabını silemezsiniz.";
        } elseif ($deleteId > 0) {
            $stmt = $db->prepare("DELETE FROM admins WHERE id = :id");
            $stmt->execute([':id' => $deleteId]);
            $success = "Admin hesabı silindi.";
        }
    } else {
        $name = trim($_POST['name'] ?? '');
        $username = trim($_POST['username'] ?? '');
        $password = trim($_POST['password'] ?? '');
        $role = $_POST['role'] ?? 'locale';
        $locale = $_POST['locale'] ?? null;

        if (!in_array($role, ['super', 'locale'], true)) {
            $error = "Geçersiz admin rolü.";
        } elseif ($role !== 'super' && !in_array($locale, $LOCALES, true)) {
            $error = "Dil admini için geçerli bir dil seçin.";
        } elseif ($name === '' || $username === '' || $password === '') {
            $error = "Ad, kullanıcı adı ve şifre alanları zorunludur.";
        } else {
            $checkStmt = $db->prepare("SELECT COUNT(*) FROM admins WHERE username = :username");
            $checkStmt->execute([':username' => $username]);
            if ((int) $checkStmt->fetchColumn() > 0) {
                $error = "Bu kullanıcı adı zaten kullanılıyor.";
            } else {
                $insertStmt = $db->prepare("
                    INSERT INTO admins (username, password_hash, role, locale, name)
                    VALUES (:username, :password_hash, :role, :locale, :name)
                ");
                $insertStmt->execute([
                    ':username' => $username,
                    ':password_hash' => password_hash($password, PASSWORD_DEFAULT),
                    ':role' => $role,
                    ':locale' => $role === 'super' ? null : $locale,
                    ':name' => $name,
                ]);
                $success = "Yeni admin eklendi.";
            }
        }
    }
}

$admins = $db->query("SELECT * FROM admins ORDER BY role = 'super' DESC, id ASC")->fetchAll();
$totalAdmins = count($admins);
$superAdmins = count(array_filter($admins, static fn($admin) => ($admin['role'] ?? '') === 'super'));
$localeAdmins = $totalAdmins - $superAdmins;

require_once 'layout-top.php';
?>

<div class="admin-topbar">
  <span class="admin-topbar-title">Admin Ekle</span>
</div>

<div class="admin-content">
  <?php if ($error): ?>
    <div class="admin-error" style="margin-bottom: 16px;"><?= htmlspecialchars($error) ?></div>
  <?php endif; ?>

  <?php if ($success): ?>
    <div class="admin-success" style="margin-bottom: 16px;"><?= htmlspecialchars($success) ?></div>
  <?php endif; ?>

  <div class="admin-stats">
    <div class="admin-stat-card total"><div class="admin-stat-value"><?= $totalAdmins ?></div><div class="admin-stat-label">Toplam Admin</div></div>
    <div class="admin-stat-card approved"><div class="admin-stat-value"><?= $superAdmins ?></div><div class="admin-stat-label">Süper Admin</div></div>
    <div class="admin-stat-card pending"><div class="admin-stat-value"><?= $localeAdmins ?></div><div class="admin-stat-label">Dil Admini</div></div>
    <div class="admin-stat-card rejected"><div class="admin-stat-value"><?= count($LOCALES) ?></div><div class="admin-stat-label">Desteklenen Dil</div></div>
  </div>

  <div class="admin-detail-grid">
    <div class="admin-card">
      <h2 class="admin-card-title">Yeni Admin Oluştur</h2>
      <form method="POST">
        <div class="admin-form-group">
          <label class="admin-form-label" for="name">Ad Soyad</label>
          <input id="name" name="name" class="admin-form-input" placeholder="Selen Arıkan" required>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 20px;">
          <div class="admin-form-group" style="margin-bottom: 0;">
            <label class="admin-form-label" for="username">Kullanıcı Adı</label>
            <input id="username" name="username" class="admin-form-input" placeholder="admin-tr" required>
          </div>

          <div class="admin-form-group" style="margin-bottom: 0;">
            <label class="admin-form-label" for="password">Şifre</label>
            <input id="password" type="password" name="password" class="admin-form-input" placeholder="En az 6 karakter" required>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 20px;">
          <div class="admin-form-group" style="margin-bottom: 0;">
            <label class="admin-form-label" for="role">Rol</label>
            <select id="role" name="role" class="admin-form-select">
              <option value="locale">Dil Admini</option>
              <option value="super">Süper Admin</option>
            </select>
          </div>

          <div class="admin-form-group" style="margin-bottom: 0;">
            <label class="admin-form-label" for="locale">Yetkili Dil</label>
            <select id="locale" name="locale" class="admin-form-select">
              <?php foreach ($LOCALES as $loc): ?>
                <option value="<?= $loc ?>"><?= $LOCALE_FLAGS[$loc] ?> <?= $LOCALE_LABELS[$loc] ?></option>
              <?php endforeach; ?>
            </select>
          </div>
        </div>

        <button type="submit" class="admin-btn admin-btn-gold">Admini Kaydet</button>
      </form>
    </div>

    <div class="admin-card">
      <h2 class="admin-card-title">Mevcut Adminler</h2>
      <?php if (empty($admins)): ?>
        <div class="admin-empty" style="padding: 24px 0;">
          <div class="admin-empty-title">Admin kaydı yok</div>
        </div>
      <?php else: ?>
        <div class="admin-question-list" style="gap: 12px;">
          <?php foreach ($admins as $admin): ?>
            <div class="admin-question-card" style="cursor: default;">
              <div class="admin-question-meta">
                <?php if (!empty($admin['locale'])): ?>
                  <span class="badge-locale"><?= $LOCALE_FLAGS[$admin['locale']] ?? '🌐' ?> <?= strtoupper($admin['locale']) ?></span>
                <?php else: ?>
                  <span class="badge-locale">🌐 TÜMÜ</span>
                <?php endif; ?>
                <span class="badge <?= ($admin['role'] ?? '') === 'super' ? 'badge-approved' : 'badge-pending' ?>">
                  <?= ($admin['role'] ?? '') === 'super' ? 'Süper Admin' : 'Dil Admini' ?>
                </span>
              </div>

              <div class="admin-question-body">
                <div class="admin-question-name"><?= htmlspecialchars($admin['name'] ?: $admin['username']) ?></div>
                <div class="admin-question-text">@<?= htmlspecialchars($admin['username']) ?></div>
              </div>

              <?php if ((int) $admin['id'] !== (int) ($_SESSION['admin_id'] ?? 0)): ?>
                <form method="POST" onsubmit="return confirm('Bu admin hesabı silinsin mi?');">
                  <input type="hidden" name="action" value="delete_admin">
                  <input type="hidden" name="admin_id" value="<?= (int) $admin['id'] ?>">
                  <button type="submit" class="admin-btn admin-btn-danger admin-btn-sm">Sil</button>
                </form>
              <?php else: ?>
                <span style="font-size: 12px; color: #9ca3af;">Oturum açık</span>
              <?php endif; ?>
            </div>
          <?php endforeach; ?>
        </div>
      <?php endif; ?>
    </div>
  </div>
</div>

<?php require_once 'layout-bottom.php'; ?>
