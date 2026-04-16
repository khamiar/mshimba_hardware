<?php
require_once '../../conn.php';
header('Content-Type: application/json');

if (isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in']) {
    echo json_encode(['logged_in' => true, 'user' => $_SESSION['admin_user']]);
} else {
    echo json_encode(['logged_in' => false]);
}
?>
