<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$dbPath = __DIR__ . '/../../../../shared/db/chat.sqlite';
try {
    $db = new PDO('sqlite:' . $dbPath);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->exec("UPDATE chats SET status = 'finished' WHERE status != 'finished' AND updated_at < datetime('now', '-30 minutes')");
    
    $chat_id = $_GET['chat_id'] ?? null;
    $last_id = isset($_GET['last_id']) ? (int)$_GET['last_id'] : 0;
    
    if (!$chat_id) {
        echo json_encode(['error' => 'Missing chat_id']);
        exit;
    }
    
    // Kullanıcı polling yaptığında updated_at'i güncelle (30dk arşivleme saatini sıfırla)
    if (isset($_GET['is_user'])) {
        $stmt = $db->prepare('UPDATE chats SET updated_at = CURRENT_TIMESTAMP WHERE id = :id');
        $stmt->execute([':id' => $chat_id]);
    }
    
    // Chat durumunu ve admin heartbeat'ini getir
    $stmt = $db->prepare('SELECT status, admin_heartbeat_at FROM chats WHERE id = :id');
    $stmt->execute([':id' => $chat_id]);
    $chat = $stmt->fetch(PDO::FETCH_ASSOC);
    $status = $chat ? $chat['status'] : 'waiting';
    
    // Admin son 30 saniye içinde heartbeat gönderdiyse çevrimiçi
    $adminOnline = false;
    if ($chat && !empty($chat['admin_heartbeat_at'])) {
        $hbTime = strtotime($chat['admin_heartbeat_at']);
        $adminOnline = (time() - $hbTime) < 30;
    }
    
    $stmt = $db->prepare('SELECT * FROM messages WHERE chat_id = :chat_id AND id > :last_id ORDER BY id ASC');
    $stmt->execute([':chat_id' => $chat_id, ':last_id' => $last_id]);
    $messages = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode([
        'status'       => $status,
        'admin_online' => $adminOnline,
        'messages'     => $messages
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
