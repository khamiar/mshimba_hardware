<?php
require_once '../../conn.php';
header('Content-Type: application/json');

try {
    session_destroy();
    echo json_encode(['success' => true, 'message' => 'Logged out successfully']);
} catch(Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
?>
