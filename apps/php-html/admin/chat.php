<?php
require_once 'config.php';
require_login();

$activePath = 'chat';
$isSuper = ($_SESSION['admin_role'] ?? null) === 'super';
$adminLocale = $_SESSION['admin_locale'] ?? null;

$selLocale = $_GET['locale'] ?? null;
$selStatus = $_GET['status'] ?? 'all';
$selectedChatId = $_GET['chat'] ?? null;
$error = null;
$success = null;

if (!$isSuper) {
    $selLocale = $adminLocale;
}

try {
    $chatDb = new PDO('sqlite:' . __DIR__ . '/../../../shared/db/chat.sqlite');
    $chatDb->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $chatDb->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    $chatDb->exec("UPDATE chats SET status = 'finished' WHERE status != 'finished' AND updated_at < datetime('now', '-30 minutes')");
} catch (PDOException $e) {
    require_once 'layout-top.php';
    ?>
    <div class="admin-topbar">
      <span class="admin-topbar-title">Canlı Sohbetler</span>
    </div>
    <div class="admin-content">
      <div class="admin-error">Chat veritabanına bağlanılamadı: <?= htmlspecialchars($e->getMessage()) ?></div>
    </div>
    <?php
    require_once 'layout-bottom.php';
    exit;
}

function chat_accessible(PDO $chatDb, string $chatId, bool $isSuper, ?string $adminLocale): ?array {
    $stmt = $chatDb->prepare("SELECT * FROM chats WHERE id = :id");
    $stmt->execute([':id' => $chatId]);
    $chat = $stmt->fetch();

    if (!$chat) {
        return null;
    }

    if (!$isSuper && ($chat['lang'] ?? null) !== $adminLocale) {
        return null;
    }

    return $chat;
}

function chat_filter_url(array $overrides): string {
    global $selLocale, $selStatus, $selectedChatId;

    $params = [];
    if ($selLocale) {
        $params['locale'] = $selLocale;
    }
    if ($selStatus !== 'all') {
        $params['status'] = $selStatus;
    }
    if ($selectedChatId) {
        $params['chat'] = $selectedChatId;
    }

    foreach ($overrides as $key => $value) {
        if ($value === null || $value === '' || $value === 'all') {
            unset($params[$key]);
        } else {
            $params[$key] = $value;
        }
    }

    $query = http_build_query($params);
    return 'chat.php' . ($query ? '?' . $query : '');
}

if (($_GET['action'] ?? '') === 'heartbeat' && $selectedChatId) {
    $chat = chat_accessible($chatDb, $selectedChatId, $isSuper, $adminLocale);
    if ($chat) {
        $heartbeatStmt = $chatDb->prepare("
            UPDATE chats
            SET admin_heartbeat_at = CURRENT_TIMESTAMP,
                updated_at = CURRENT_TIMESTAMP
            WHERE id = :id
        ");
        $heartbeatStmt->execute([':id' => $selectedChatId]);
    }

    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['ok' => (bool) $chat]);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'POST') {
    $action = $_POST['action'] ?? 'send';
    $postedChatId = trim($_POST['chat_id'] ?? '');
    $selectedChatId = $postedChatId !== '' ? $postedChatId : $selectedChatId;
    $chat = $selectedChatId ? chat_accessible($chatDb, $selectedChatId, $isSuper, $adminLocale) : null;

    if (!$chat) {
        $error = "Sohbet bulunamadı veya bu kayda erişim yetkiniz yok.";
    } elseif ($action === 'send') {
        $message = trim($_POST['message'] ?? '');
        if ($message === '') {
            $error = "Gönderilecek mesaj boş olamaz.";
        } else {
            $insertStmt = $chatDb->prepare("
                INSERT INTO messages (chat_id, sender_type, message)
                VALUES (:chat_id, 'admin', :message)
            ");
            $insertStmt->execute([
                ':chat_id' => $selectedChatId,
                ':message' => $message,
            ]);

            $updateStmt = $chatDb->prepare("
                UPDATE chats
                SET status = 'active',
                    updated_at = CURRENT_TIMESTAMP,
                    admin_heartbeat_at = CURRENT_TIMESTAMP
                WHERE id = :id
            ");
            $updateStmt->execute([':id' => $selectedChatId]);
            header("Location: chat.php?chat=" . urlencode($selectedChatId) . "&sent=1");
            exit;
        }
    } elseif ($action === 'finish') {
        $finishStmt = $chatDb->prepare("
            UPDATE chats
            SET status = 'finished',
                updated_at = CURRENT_TIMESTAMP,
                admin_heartbeat_at = CURRENT_TIMESTAMP
            WHERE id = :id
        ");
        $finishStmt->execute([':id' => $selectedChatId]);
        header("Location: chat.php?chat=" . urlencode($selectedChatId) . "&finished=1");
        exit;
    } elseif ($action === 'reopen') {
        $reopenStmt = $chatDb->prepare("
            UPDATE chats
            SET status = 'active',
                updated_at = CURRENT_TIMESTAMP,
                admin_heartbeat_at = CURRENT_TIMESTAMP
            WHERE id = :id
        ");
        $reopenStmt->execute([':id' => $selectedChatId]);
        header("Location: chat.php?chat=" . urlencode($selectedChatId) . "&reopened=1");
        exit;
    }
}

$listQuery = "
    SELECT
        c.*,
        (SELECT message FROM messages m WHERE m.chat_id = c.id ORDER BY m.id DESC LIMIT 1) AS last_message,
        (SELECT sender_type FROM messages m WHERE m.chat_id = c.id ORDER BY m.id DESC LIMIT 1) AS last_sender,
        (SELECT created_at FROM messages m WHERE m.chat_id = c.id ORDER BY m.id DESC LIMIT 1) AS last_message_at,
        (SELECT COUNT(*) FROM messages m WHERE m.chat_id = c.id) AS message_count
    FROM chats c
    WHERE 1 = 1
";
$params = [];
if ($selLocale) {
    $listQuery .= " AND c.lang = :lang";
    $params[':lang'] = $selLocale;
}
if ($selStatus !== 'all') {
    $listQuery .= " AND c.status = :status";
    $params[':status'] = $selStatus;
}
$listQuery .= "
    ORDER BY
        CASE c.status
            WHEN 'waiting' THEN 0
            WHEN 'active' THEN 1
            ELSE 2
        END,
        c.updated_at DESC
";

$listStmt = $chatDb->prepare($listQuery);
$listStmt->execute($params);
$chats = $listStmt->fetchAll();

if (!$selectedChatId && !empty($chats)) {
    $selectedChatId = $chats[0]['id'];
}

$selectedChat = $selectedChatId ? chat_accessible($chatDb, $selectedChatId, $isSuper, $adminLocale) : null;
$messages = [];

if ($selectedChat) {
    $heartbeatStmt = $chatDb->prepare("
        UPDATE chats
        SET admin_heartbeat_at = CURRENT_TIMESTAMP
        WHERE id = :id
    ");
    $heartbeatStmt->execute([':id' => $selectedChatId]);

    $selectedChat = chat_accessible($chatDb, $selectedChatId, $isSuper, $adminLocale);
    $messageStmt = $chatDb->prepare("SELECT * FROM messages WHERE chat_id = :chat_id ORDER BY id ASC");
    $messageStmt->execute([':chat_id' => $selectedChatId]);
    $messages = $messageStmt->fetchAll();
}

$statsQuery = "SELECT status, COUNT(*) AS c FROM chats";
$statsParams = [];
if (!$isSuper && $adminLocale) {
    $statsQuery .= " WHERE lang = :lang";
    $statsParams[':lang'] = $adminLocale;
}
$statsQuery .= " GROUP BY status";
$statsStmt = $chatDb->prepare($statsQuery);
$statsStmt->execute($statsParams);
$counts = ['total' => 0, 'waiting' => 0, 'active' => 0, 'finished' => 0];
while ($row = $statsStmt->fetch()) {
    $counts[$row['status']] = (int) $row['c'];
    $counts['total'] += (int) $row['c'];
}

$sent = isset($_GET['sent']);
$finished = isset($_GET['finished']);
$reopened = isset($_GET['reopened']);

require_once 'layout-top.php';
?>

<div class="admin-topbar">
  <span class="admin-topbar-title">Canlı Sohbetler</span>
  <div class="admin-topbar-actions">
    <a href="<?= htmlspecialchars(chat_filter_url([])) ?>" class="admin-btn admin-btn-ghost admin-btn-sm">Yenile</a>
  </div>
</div>

<div class="admin-content">
  <?php if ($error): ?>
    <div class="admin-error" style="margin-bottom: 16px;"><?= htmlspecialchars($error) ?></div>
  <?php endif; ?>
  <?php if ($sent): ?>
    <div class="admin-success" style="margin-bottom: 16px;">Mesaj gönderildi.</div>
  <?php endif; ?>
  <?php if ($finished): ?>
    <div class="admin-success" style="margin-bottom: 16px;">Sohbet arşive alındı.</div>
  <?php endif; ?>
  <?php if ($reopened): ?>
    <div class="admin-success" style="margin-bottom: 16px;">Sohbet yeniden aktifleştirildi.</div>
  <?php endif; ?>

  <div class="admin-stats">
    <div class="admin-stat-card total"><div class="admin-stat-value"><?= $counts['total'] ?></div><div class="admin-stat-label">Toplam</div></div>
    <div class="admin-stat-card pending"><div class="admin-stat-value"><?= $counts['waiting'] ?></div><div class="admin-stat-label">Yanıt Bekliyor</div></div>
    <div class="admin-stat-card approved"><div class="admin-stat-value"><?= $counts['active'] ?></div><div class="admin-stat-label">Aktif</div></div>
    <div class="admin-stat-card rejected"><div class="admin-stat-value"><?= $counts['finished'] ?></div><div class="admin-stat-label">Arşiv</div></div>
  </div>

  <div class="admin-card" style="margin-bottom: 20px;">
    <div class="admin-filters">
      <?php if ($isSuper): ?>
        <div class="admin-filter-row">
          <span class="admin-filter-label">Dil</span>
          <div class="admin-filter-tabs">
            <a href="<?= chat_filter_url(['locale' => null]) ?>" class="admin-filter-tab <?= !$selLocale ? 'active' : '' ?>">🌐 Tümü</a>
            <?php foreach ($LOCALES as $loc): ?>
              <a href="<?= chat_filter_url(['locale' => $loc]) ?>" class="admin-filter-tab <?= $selLocale === $loc ? 'active' : '' ?>">
                <?= $LOCALE_FLAGS[$loc] ?> <?= strtoupper($loc) ?>
              </a>
            <?php endforeach; ?>
          </div>
        </div>
      <?php endif; ?>

      <div class="admin-filter-row">
        <span class="admin-filter-label">Durum</span>
        <div class="admin-filter-tabs">
          <?php foreach (['all', 'waiting', 'active', 'finished'] as $status): ?>
            <?php
            $class = 'admin-filter-tab';
            if ($selStatus === $status) {
                if ($status === 'all') $class .= ' active';
                elseif ($status === 'waiting') $class .= ' active-pending';
                elseif ($status === 'active') $class .= ' active-approved';
                else $class .= ' active-rejected';
            }
            ?>
            <a href="<?= chat_filter_url(['status' => $status === 'all' ? null : $status]) ?>" class="<?= $class ?>">
              <?= $status === 'all' ? 'Tümü' : ucfirst($status) ?>
            </a>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
  </div>

  <div style="display: grid; grid-template-columns: 340px 1fr; gap: 20px; align-items: start;">
    <div class="admin-card" style="padding: 12px;">
      <?php if (empty($chats)): ?>
        <div class="admin-empty" style="padding: 32px 16px;">
          <div class="admin-empty-icon">💬</div>
          <div class="admin-empty-title">Aktif sohbet yok</div>
          <div class="admin-empty-text">Yeni ziyaretçi mesajları burada listelenecek.</div>
        </div>
      <?php else: ?>
        <div class="admin-question-list" style="gap: 10px;">
          <?php foreach ($chats as $chat): ?>
            <?php
            $chatUrl = chat_filter_url(['chat' => $chat['id']]);
            $statusClass = $chat['status'] === 'active' ? 'badge-approved' : ($chat['status'] === 'finished' ? 'badge-rejected' : 'badge-pending');
            $needsReply = ($chat['last_sender'] ?? '') === 'user' && ($chat['status'] ?? '') !== 'finished';
            ?>
            <a href="<?= htmlspecialchars($chatUrl) ?>" class="admin-question-card <?= $selectedChatId === $chat['id'] ? 'unread' : '' ?>">
              <div class="admin-question-meta">
                <span class="badge-locale"><?= $LOCALE_FLAGS[$chat['lang']] ?? '🌐' ?> <?= strtoupper($chat['lang'] ?? 'tr') ?></span>
                <span class="badge <?= $statusClass ?>"><?= htmlspecialchars($chat['status']) ?></span>
                <?php if ($needsReply): ?>
                  <span title="Kullanıcı son mesajı gönderdi" style="font-size: 14px;">🔔</span>
                <?php endif; ?>
              </div>
              <div class="admin-question-body">
                <div class="admin-question-name">
                  Chat #<?= htmlspecialchars(substr($chat['id'], 0, 10)) ?>
                  <span style="font-weight: 400; color: #9ca3af; font-size: 11px; margin-left: 8px;"><?= (int) ($chat['message_count'] ?? 0) ?> mesaj</span>
                </div>
                <div class="admin-question-text"><?= htmlspecialchars($chat['last_message'] ?: 'Henüz mesaj yok.') ?></div>
                <div class="admin-question-date">
                  <?= !empty($chat['last_message_at']) ? date('d M Y H:i', strtotime($chat['last_message_at'])) : 'Mesaj bekleniyor' ?>
                </div>
              </div>
            </a>
          <?php endforeach; ?>
        </div>
      <?php endif; ?>
    </div>

    <div class="admin-card">
      <?php if (!$selectedChat): ?>
        <div class="admin-empty" style="padding: 48px 16px;">
          <div class="admin-empty-icon">🗨️</div>
          <div class="admin-empty-title">Sohbet seçilmedi</div>
          <div class="admin-empty-text">Soldan bir sohbet açarak mesaj geçmişini görüntüleyin.</div>
        </div>
      <?php else: ?>
        <?php
        $heartbeatAt = !empty($selectedChat['admin_heartbeat_at']) ? strtotime($selectedChat['admin_heartbeat_at']) : null;
        $adminOnline = $heartbeatAt && (time() - $heartbeatAt) < 30;
        ?>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; margin-bottom: 20px;">
          <div>
            <h2 class="admin-card-title" style="margin-bottom: 8px;">Chat #<?= htmlspecialchars($selectedChat['id']) ?></h2>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <span class="badge-locale"><?= $LOCALE_FLAGS[$selectedChat['lang']] ?? '🌐' ?> <?= strtoupper($selectedChat['lang'] ?? 'tr') ?></span>
              <span class="badge <?= $selectedChat['status'] === 'active' ? 'badge-approved' : ($selectedChat['status'] === 'finished' ? 'badge-rejected' : 'badge-pending') ?>">
                <?= htmlspecialchars($selectedChat['status']) ?>
              </span>
              <span style="display: inline-flex; align-items: center; gap: 6px; font-size: 12px; color: #6b7280;">
                <span style="width: 8px; height: 8px; border-radius: 999px; background: <?= $adminOnline ? '#10b981' : '#9ca3af' ?>;"></span>
                <?= $adminOnline ? 'Admin çevrimiçi' : 'Admin çevrimdışı' ?>
              </span>
            </div>
          </div>

          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <?php if (($selectedChat['status'] ?? '') !== 'finished'): ?>
              <form method="POST">
                <input type="hidden" name="chat_id" value="<?= htmlspecialchars($selectedChat['id']) ?>">
                <input type="hidden" name="action" value="finish">
                <button type="submit" class="admin-btn admin-btn-danger admin-btn-sm">Sohbeti Kapat</button>
              </form>
            <?php else: ?>
              <form method="POST">
                <input type="hidden" name="chat_id" value="<?= htmlspecialchars($selectedChat['id']) ?>">
                <input type="hidden" name="action" value="reopen">
                <button type="submit" class="admin-btn admin-btn-success admin-btn-sm">Yeniden Aç</button>
              </form>
            <?php endif; ?>
          </div>
        </div>

        <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 14px; padding: 16px; max-height: 520px; overflow-y: auto; display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px;">
          <?php foreach ($messages as $message): ?>
            <?php $isAdminMessage = ($message['sender_type'] ?? '') === 'admin'; ?>
            <div style="display: flex; justify-content: <?= $isAdminMessage ? 'flex-end' : 'flex-start' ?>;">
              <div style="
                max-width: 78%;
                padding: 12px 14px;
                border-radius: 14px;
                background: <?= $isAdminMessage ? '#071c34' : '#ffffff' ?>;
                color: <?= $isAdminMessage ? '#ffffff' : '#111827' ?>;
                border: 1px solid <?= $isAdminMessage ? '#071c34' : '#e5e7eb' ?>;
                box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
              ">
                <div style="font-size: 11px; opacity: 0.7; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.08em;">
                  <?= $isAdminMessage ? 'Admin' : 'Ziyaretçi' ?>
                </div>
                <div style="font-size: 14px; line-height: 1.6; white-space: pre-wrap;"><?= htmlspecialchars($message['message']) ?></div>
                <div style="font-size: 11px; opacity: 0.7; margin-top: 8px;">
                  <?= !empty($message['created_at']) ? date('d M Y H:i', strtotime($message['created_at'])) : '' ?>
                </div>
              </div>
            </div>
          <?php endforeach; ?>
        </div>

        <form method="POST">
          <input type="hidden" name="chat_id" value="<?= htmlspecialchars($selectedChat['id']) ?>">
          <textarea name="message" class="admin-form-textarea" rows="4" placeholder="Ziyaretçiye yanıt yazın..."></textarea>
          <div style="display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-top: 12px; flex-wrap: wrap;">
            <div class="admin-form-hint">Bu ekran açık kaldıkça admin heartbeat güncellenir.</div>
            <button type="submit" class="admin-btn admin-btn-gold">Mesaj Gönder</button>
          </div>
        </form>
      <?php endif; ?>
    </div>
  </div>
</div>

<?php if ($selectedChat): ?>
  <script>
    (function() {
      const chatId = <?= json_encode($selectedChat['id']) ?>;
      setInterval(function() {
        fetch('chat.php?action=heartbeat&chat=' + encodeURIComponent(chatId) + '&t=' + Date.now(), {
          credentials: 'same-origin'
        }).catch(function() {});
      }, 10000);
    })();
  </script>
<?php endif; ?>

<?php require_once 'layout-bottom.php'; ?>
