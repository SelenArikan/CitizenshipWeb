<?php
require_once 'config.php';
require_login();

$activePath = 'dashboard';
$isSuper = ($_SESSION['admin_role'] ?? null) === 'super';
$adminLocale = $_SESSION['admin_locale'] ?? null;

$questionId = (int) ($_GET['id'] ?? 0);
$error = null;
$success = null;

if ($questionId <= 0) {
    require_once 'layout-top.php';
    ?>
    <div class="admin-topbar">
      <span class="admin-topbar-title">Soru Detayı</span>
    </div>
    <div class="admin-content">
      <div class="admin-card">
        <div class="admin-empty">
          <div class="admin-empty-icon">❓</div>
          <div class="admin-empty-title">Soru bulunamadı</div>
          <div class="admin-empty-text">Geçerli bir kayıt seçilmedi.</div>
        </div>
      </div>
    </div>
    <?php
    require_once 'layout-bottom.php';
    exit;
}

$stmt = $db->prepare("SELECT * FROM questions WHERE id = :id");
$stmt->execute([':id' => $questionId]);
$question = $stmt->fetch();

if (!$question) {
    require_once 'layout-top.php';
    ?>
    <div class="admin-topbar">
      <span class="admin-topbar-title">Soru Detayı</span>
    </div>
    <div class="admin-content">
      <div class="admin-card">
        <div class="admin-empty">
          <div class="admin-empty-icon">📭</div>
          <div class="admin-empty-title">Kayıt bulunamadı</div>
          <div class="admin-empty-text">Silinmiş veya hiç oluşmamış bir soruya erişmeye çalışıyorsunuz.</div>
        </div>
      </div>
    </div>
    <?php
    require_once 'layout-bottom.php';
    exit;
}

if (!$isSuper && ($question['locale'] ?? null) !== $adminLocale) {
    http_response_code(403);
    require_once 'layout-top.php';
    ?>
    <div class="admin-topbar">
      <span class="admin-topbar-title">Soru Detayı</span>
    </div>
    <div class="admin-content">
      <div class="admin-card">
        <div class="admin-empty">
          <div class="admin-empty-icon">🔒</div>
          <div class="admin-empty-title">Bu kayda erişim yetkiniz yok</div>
          <div class="admin-empty-text">Sadece yetkili olduğunuz dildeki soruları görüntüleyebilirsiniz.</div>
        </div>
      </div>
    </div>
    <?php
    require_once 'layout-bottom.php';
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'POST') {
    $action = $_POST['action'] ?? 'save';

    if ($action === 'delete') {
        $deleteStmt = $db->prepare("DELETE FROM questions WHERE id = :id");
        $deleteStmt->execute([':id' => $questionId]);
        header("Location: index.php?deleted=1");
        exit;
    }

    $allowedStatuses = ['pending', 'approved', 'rejected'];
    $status = $_POST['status'] ?? 'pending';
    $answer = trim($_POST['answer'] ?? '');
    $isPublic = isset($_POST['isPublic']) ? 1 : 0;

    if (!in_array($status, $allowedStatuses, true)) {
        $error = "Geçersiz durum seçildi.";
    } elseif ($status === 'approved' && $answer === '') {
        $error = "Onaylamak için yanıt alanını doldurun.";
    } else {
        $answeredAt = $answer !== '' ? date('c') : null;
        $answeredBy = $answer !== '' ? ($_SESSION['admin_name'] ?? 'Admin') : null;

        $updateStmt = $db->prepare("
            UPDATE questions
            SET status = :status,
                answer = :answer,
                answeredBy = :answeredBy,
                answeredAt = :answeredAt,
                isPublic = :isPublic
            WHERE id = :id
        ");
        $updateStmt->execute([
            ':status' => $status,
            ':answer' => $answer !== '' ? $answer : null,
            ':answeredBy' => $answeredBy,
            ':answeredAt' => $answeredAt,
            ':isPublic' => $isPublic,
            ':id' => $questionId,
        ]);

        $stmt->execute([':id' => $questionId]);
        $question = $stmt->fetch();
        $success = "Soru kaydı güncellendi.";
    }
}

$questionText = trim((string) ($question['message'] ?? $question['question'] ?? ''));
$statusColor = $STATUS_COLORS[$question['status']] ?? 'badge-pending';
$statusLabel = $STATUS_LABELS[$question['status']] ?? ($question['status'] ?: 'Bekliyor');

require_once 'layout-top.php';
?>

<div class="admin-topbar">
  <span class="admin-topbar-title">Soru Detayı</span>
  <div class="admin-topbar-actions">
    <a href="index.php" class="admin-btn admin-btn-ghost admin-btn-sm">← Listeye Dön</a>
  </div>
</div>

<div class="admin-content">
  <div class="admin-breadcrumb">
    <a href="index.php">Sorular</a>
    <span>›</span>
    <span>#<?= $questionId ?></span>
  </div>

  <?php if ($error): ?>
    <div class="admin-error" style="margin-bottom: 16px;"><?= htmlspecialchars($error) ?></div>
  <?php endif; ?>

  <?php if ($success): ?>
    <div class="admin-success" style="margin-bottom: 16px;"><?= htmlspecialchars($success) ?></div>
  <?php endif; ?>

  <form method="POST" class="admin-detail-grid">
    <div>
      <div class="admin-card" style="margin-bottom: 20px;">
        <h2 class="admin-card-title">Soru Metni</h2>
        <div class="admin-question-display">
          <div class="admin-question-display-label">Gönderilen Soru</div>
          <div class="admin-question-display-text">
            <?= nl2br(htmlspecialchars($questionText !== '' ? $questionText : 'Mesaj içeriği yok.')) ?>
          </div>
        </div>

        <div class="admin-form-group">
          <label class="admin-form-label" for="answer">Admin Yanıtı</label>
          <textarea
            id="answer"
            name="answer"
            class="admin-form-textarea"
            rows="8"
            placeholder="Soruyu yanıtlayın veya not bırakın..."
          ><?= htmlspecialchars($question['answer'] ?? '') ?></textarea>
        </div>

        <div class="admin-form-group">
          <label class="admin-form-label" for="status">Durum</label>
          <select id="status" name="status" class="admin-form-select">
            <option value="pending" <?= ($question['status'] ?? '') === 'pending' ? 'selected' : '' ?>>Bekliyor</option>
            <option value="approved" <?= ($question['status'] ?? '') === 'approved' ? 'selected' : '' ?>>Onaylandı</option>
            <option value="rejected" <?= ($question['status'] ?? '') === 'rejected' ? 'selected' : '' ?>>Reddedildi</option>
          </select>
        </div>

        <div class="admin-toggle-row" style="margin-bottom: 20px;">
          <div class="admin-toggle-info">
            <div class="admin-toggle-title">Herkese Açık</div>
            <div class="admin-toggle-desc">Yanıtı public soru-cevap sayfasında göster.</div>
          </div>
          <label class="admin-toggle">
            <input type="checkbox" name="isPublic" <?= !empty($question['isPublic']) ? 'checked' : '' ?>>
            <span class="admin-toggle-track"></span>
          </label>
        </div>

        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <button type="submit" class="admin-btn admin-btn-success">Kaydet</button>
          <button
            type="submit"
            name="action"
            value="delete"
            class="admin-btn admin-btn-danger"
            onclick="return confirm('Bu kaydı silmek istediğinize emin misiniz?');"
          >
            Sil
          </button>
        </div>
      </div>
    </div>

    <div>
      <div class="admin-card">
        <h2 class="admin-card-title">Soru Bilgileri</h2>
        <div class="admin-meta-row">
          <div class="admin-meta-item">
            <span class="admin-meta-key">Ad Soyad</span>
            <span class="admin-meta-val"><?= htmlspecialchars($question['name'] ?: 'İsimsiz') ?></span>
          </div>
          <div class="admin-meta-item">
            <span class="admin-meta-key">E-posta</span>
            <span class="admin-meta-val"><?= htmlspecialchars($question['email'] ?: 'Belirtilmedi') ?></span>
          </div>
          <div class="admin-meta-item">
            <span class="admin-meta-key">Telefon</span>
            <span class="admin-meta-val"><?= htmlspecialchars($question['phone'] ?: 'Belirtilmedi') ?></span>
          </div>
          <div class="admin-meta-item">
            <span class="admin-meta-key">Dil</span>
            <span class="admin-meta-val"><?= ($LOCALE_FLAGS[$question['locale']] ?? '🌐') . ' ' . strtoupper($question['locale'] ?: 'tr') ?></span>
          </div>
          <div class="admin-meta-item">
            <span class="admin-meta-key">Durum</span>
            <span class="badge <?= $statusColor ?>"><?= $statusLabel ?></span>
          </div>
          <div class="admin-meta-item">
            <span class="admin-meta-key">Gönderim</span>
            <span class="admin-meta-val"><?= !empty($question['createdAt']) ? date('d M Y H:i', strtotime($question['createdAt'])) : 'Tarih yok' ?></span>
          </div>
          <div class="admin-meta-item">
            <span class="admin-meta-key">Yanıtlayan</span>
            <span class="admin-meta-val"><?= htmlspecialchars($question['answeredBy'] ?: 'Henüz yok') ?></span>
          </div>
          <div class="admin-meta-item">
            <span class="admin-meta-key">Yanıt Tarihi</span>
            <span class="admin-meta-val"><?= !empty($question['answeredAt']) ? date('d M Y H:i', strtotime($question['answeredAt'])) : 'Henüz yok' ?></span>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>

<?php require_once 'layout-bottom.php'; ?>
