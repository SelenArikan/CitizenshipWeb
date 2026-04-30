<?php
header('Content-Type: application/json');
$dbPath = __DIR__ . '/../../../../shared/db/chat.sqlite';
try {
    $db = new PDO('sqlite:' . $dbPath);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->exec("UPDATE chats SET status = 'finished' WHERE status != 'finished' AND updated_at < datetime('now', '-30 minutes')");
    
    $input = json_decode(file_get_contents('php://input'), true);
    if (!$input) {
        echo json_encode(['error' => 'Invalid JSON']);
        exit;
    }
    
    $chat_id = $input['chat_id'] ?? null;
    $message = $input['message'] ?? null;
    $lang = $input['lang'] ?? 'tr';
    $allowedLocales = ['tr', 'en', 'ru', 'ar', 'fa'];
    $safeLang = in_array($lang, $allowedLocales, true) ? $lang : 'tr';
    $sender_type = 'user';
    
    if (!$chat_id || !$message) {
        echo json_encode(['error' => 'Missing fields']);
        exit;
    }
    
    $stmt = $db->prepare('SELECT status FROM chats WHERE id = :id');
    $stmt->execute([':id' => $chat_id]);
    $chat = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if (!$chat) {
        $stmt = $db->prepare('INSERT INTO chats (id, lang, status) VALUES (:id, :lang, :status)');
        $stmt->execute([':id' => $chat_id, ':lang' => $safeLang, ':status' => 'waiting']);
    } else {
        $stmt = $db->prepare('UPDATE chats SET lang = :lang, status = :status, updated_at = CURRENT_TIMESTAMP WHERE id = :id');
        $stmt->execute([':lang' => $safeLang, ':status' => 'waiting', ':id' => $chat_id]);
    }
    
    $stmt = $db->prepare('INSERT INTO messages (chat_id, sender_type, message) VALUES (:chat_id, :sender_type, :message)');
    $stmt->execute([':chat_id' => $chat_id, ':sender_type' => $sender_type, ':message' => $message]);
    $msg_id = $db->lastInsertId();

    // Broadcast to Next.js WebSockets automatically
    $ch = curl_init('http://localhost:3000/api/internal/ws-broadcast');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
        'chat_id' => $chat_id,
        'message' => [
            'id' => (string)$msg_id,
            'sender' => 'visitor',
            'body' => $message,
            'createdAt' => time()
        ]
    ]));
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_TIMEOUT, 1);
    curl_exec($ch);
    curl_close($ch);
    
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
