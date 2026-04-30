<?php
require_once 'config.php';

if (isset($_GET['action']) && $_GET['action'] == 'logout') {
    session_destroy();
    header("Location: login.php");
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    $stmt = $db->prepare("SELECT * FROM admins WHERE username = ?");
    $stmt->execute([$username]);
    $admin = $stmt->fetch();

    if ($admin && password_verify($password, $admin['password_hash'])) {
        $_SESSION['admin_id'] = $admin['id'];
        $_SESSION['admin_username'] = $admin['username'];
        $_SESSION['admin_role'] = $admin['role'];
        $_SESSION['admin_locale'] = $admin['locale'];
        $_SESSION['admin_name'] = $admin['name'];
        header("Location: index.php");
        exit;
    } else {
        $error = "Geçersiz kullanıcı adı veya şifre.";
    }
}
?>
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Girişi</title>
    <link rel="stylesheet" href="admin.css">
</head>
<body style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background-color: #f4f6f8;">

<div class="admin-card" style="max-width: 400px; width: 100%;">
    <div style="text-align: center; margin-bottom: 2rem;">
        <div class="admin-sidebar-logo-mark" style="margin: 0 auto 1rem;">C</div>
        <h2>CitizanShip Admin</h2>
        <p style="color: #6b7280; margin-top: 0.5rem;">Yönetim paneline giriş yapın.</p>
    </div>

    <?php if (isset($error)): ?>
        <div style="background-color: #fee2e2; color: #b91c1c; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; text-align: center; font-size: 14px;">
            <?php echo $error; ?>
        </div>
    <?php endif; ?>

    <form method="POST">
        <div style="margin-bottom: 1.2rem;">
            <label style="display: block; font-size: 13px; font-weight: 500; color: #374151; margin-bottom: 0.5rem;">Kullanıcı Adı</label>
            <input type="text" name="username" required class="admin-input" style="width: 100%; box-sizing: border-box;" placeholder="admin">
        </div>
        <div style="margin-bottom: 1.5rem;">
            <label style="display: block; font-size: 13px; font-weight: 500; color: #374151; margin-bottom: 0.5rem;">Şifre</label>
            <input type="password" name="password" required class="admin-input" style="width: 100%; box-sizing: border-box;" placeholder="••••••••">
        </div>
        <button type="submit" class="admin-btn admin-btn-gold" style="width: 100%; justify-content: center;">
            Giriş Yap
        </button>
    </form>
</div>

</body>
</html>
