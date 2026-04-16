<?php
// Database Configuration
$host = 'localhost';
$db_name = 'mshimba_hardware';
$db_user = 'root';
$db_pass = 'ydev@19';

try {
    $conn = new PDO("mysql:host=$host;dbname=$db_name;charset=utf8", $db_user, $db_pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die(json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]));
}

// Start session
session_start();

// Admin credentials
define('ADMIN_USER', 'admin');
define('ADMIN_PASS', 'mshimba2025');
?>