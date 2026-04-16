<?php
require_once '../../conn.php';
header('Content-Type: application/json');

$action = $_GET['action'] ?? 'read';

// Function to log operations
function logOperation($operation, $data = []) {
    $logEntry = [
        'timestamp' => date('Y-m-d H:i:s'),
        'operation' => $operation,
        'data' => $data,
        'user' => isset($_SESSION['admin_logged_in']) ? $_SESSION['admin_user'] ?? 'admin' : 'public'
    ];
    error_log('PRODUCT_API: ' . json_encode($logEntry));
}

// Function to validate product data
function validateProductData($data, $isUpdate = false) {
    $errors = [];
    
    // Name validation - required and minimum length
    if (empty($data['name'])) {
        $errors[] = 'Jina la bidhaa linahitajika';
    } elseif (strlen($data['name']) < 3) {
        $errors[] = 'Jina la bidhaa lazima liwe na herufi 3 au zaidi';
    }
    
    // Category validation - required
    if (empty($data['category'])) {
        $errors[] = 'Kategoria ya bidhaa inahitajika';
    }
    
    // Price validation - required and positive number
    if (empty($data['price'])) {
        $errors[] = 'Bei ya bidhaa inahitajika';
    } elseif (!is_numeric($data['price']) || $data['price'] <= 0) {
        $errors[] = 'Bei lazima iwe namba chanya';
    }
    
    // Description validation - minimum length
    if (empty($data['description'])) {
        $errors[] = 'Maelezo ya bidhaa yanahitajika';
    } elseif (strlen($data['description']) < 10) {
        $errors[] = 'Maelezo lazima yawe na herufi 10 au zaidi';
    }
    
    // Stock validation - must be non-negative integer
    if (isset($data['stock']) && (!is_numeric($data['stock']) || $data['stock'] < 0 || floor($data['stock']) != $data['stock'])) {
        $errors[] = 'Staki lazima iwe namba isiyo hasi';
    }
    
    // ID validation for updates
    if ($isUpdate && (empty($data['id']) || !is_numeric($data['id']))) {
        $errors[] = 'ID ya bidhaa ni sahihi';
    }
    
    return $errors;
}

// Function to handle image upload
function handleImageUpload($fileInputName = 'image') {
    if (!isset($_FILES[$fileInputName]) || $_FILES[$fileInputName]['error'] === UPLOAD_ERR_NO_FILE) {
        return 'assets/images/default-product.jpg';
    }
    
    $file = $_FILES[$fileInputName];
    
    // Check upload errors
    if ($file['error'] !== UPLOAD_ERR_OK) {
        throw new Exception('Polese, kuna hitilafu katika kupakua picha: ' . $file['error']);
    }
    
    // Validate file type
    $allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    $fileInfo = finfo_open(FILEINFO_MIME_TYPE);
    $mimeType = finfo_file($fileInfo, $file['tmp_name']);
    finfo_close($fileInfo);
    
    if (!in_array($mimeType, $allowedTypes)) {
        throw new Exception('Aina ya faili hairuhusiwi. Tumia JPG, PNG, au WebP.');
    }
    
    // Validate file size (max 5MB)
    if ($file['size'] > 5 * 1024 * 1024) {
        throw new Exception('Saizi ya picha ni kubwa sana. Maksimum 5MB.');
    }
    
    // Generate unique filename
    $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
    $filename = 'product_' . time() . '_' . uniqid() . '.' . $extension;
    $uploadPath = '../../assets/images/' . $filename;
    
    // Move uploaded file
    if (!move_uploaded_file($file['tmp_name'], $uploadPath)) {
        throw new Exception('Imeshindwa kupakua picha. Tafadhali jaribu tena.');
    }
    
    return 'assets/images/' . $filename;
}

try {
    switch ($action) {
        case 'create':
            if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
                throw new Exception('Method not allowed');
            }
            
            if (!isset($_SESSION['admin_logged_in'])) {
                throw new Exception('Unauthorized');
            }
            
            // Handle both JSON and form data
            $data = $_POST;
            if (empty($data)) {
                $data = json_decode(file_get_contents('php://input'), true);
            }
            
            // Validate input data
            $validationErrors = validateProductData($data);
            if (!empty($validationErrors)) {
                throw new Exception(implode(', ', $validationErrors));
            }
            
            // Handle image upload
            $imagePath = handleImageUpload();
            
            $sql = "INSERT INTO products (name, category, price, description, stock, image, badge) 
                    VALUES (:name, :category, :price, :description, :stock, :image, :badge)";
            $stmt = $conn->prepare($sql);
            $stmt->execute([
                ':name' => $data['name'],
                ':category' => $data['category'],
                ':price' => (int)$data['price'],
                ':description' => $data['description'],
                ':stock' => (int)($data['stock'] ?? 1),
                ':image' => $imagePath,
                ':badge' => $data['badge'] ?? ''
            ]);
            
            $newId = $conn->lastInsertId();
            logOperation('CREATE', ['id' => $newId, 'name' => $data['name']]);
            
            echo json_encode(['success' => true, 'id' => $newId, 'message' => 'Bidhaa imeongezwa kikamilifu']);
            break;
            
        case 'read':
            if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
                throw new Exception('Method not allowed');
            }
            
            $sql = "SELECT id, name, category as cat, price, description as `desc`, stock, image, badge FROM products ORDER BY id DESC";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            logOperation('READ', ['count' => count($products)]);
            
            echo json_encode(['success' => true, 'products' => $products]);
            break;
            
        case 'update':
            if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
                throw new Exception('Method not allowed');
            }
            
            if (!isset($_SESSION['admin_logged_in'])) {
                throw new Exception('Unauthorized');
            }
            
            // Handle both JSON and form data
            $data = $_POST;
            if (empty($data)) {
                $data = json_decode(file_get_contents('php://input'), true);
            }
            
            // Validate input data
            $validationErrors = validateProductData($data, true);
            if (!empty($validationErrors)) {
                throw new Exception(implode(', ', $validationErrors));
            }
            
            // Check if product exists
            $checkSql = "SELECT id, image FROM products WHERE id = :id";
            $checkStmt = $conn->prepare($checkSql);
            $checkStmt->execute([':id' => $data['id']]);
            $existingProduct = $checkStmt->fetch(PDO::FETCH_ASSOC);
            
            if (!$existingProduct) {
                throw new Exception('Bidhaa haipatikani');
            }
            
            // Handle image upload if new image provided
            $imagePath = $existingProduct['image'];
            if (isset($_FILES['image']) && $_FILES['image']['error'] !== UPLOAD_ERR_NO_FILE) {
                // Delete old image if it's not the default
                if ($existingProduct['image'] !== 'assets/images/default-product.jpg' && file_exists('../../' . $existingProduct['image'])) {
                    unlink('../../' . $existingProduct['image']);
                }
                $imagePath = handleImageUpload();
            }
            
            $sql = "UPDATE products SET name = :name, category = :category, price = :price, 
                    description = :description, stock = :stock, image = :image, badge = :badge 
                    WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->execute([
                ':name' => $data['name'],
                ':category' => $data['category'],
                ':price' => (int)$data['price'],
                ':description' => $data['description'],
                ':stock' => (int)($data['stock'] ?? 1),
                ':image' => $imagePath,
                ':badge' => $data['badge'] ?? '',
                ':id' => (int)$data['id']
            ]);
            
            logOperation('UPDATE', ['id' => $data['id'], 'name' => $data['name']]);
            
            echo json_encode(['success' => true, 'message' => 'Bidhaa imesasishwa kikamilifu']);
            break;
            
        case 'delete':
            if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
                throw new Exception('Method not allowed');
            }
            
            if (!isset($_SESSION['admin_logged_in'])) {
                throw new Exception('Unauthorized');
            }
            
            $data = json_decode(file_get_contents('php://input'), true);
            
            if (empty($data['id']) || !is_numeric($data['id'])) {
                throw new Exception('ID ya bidhaa ni sahihi');
            }
            
            // Get product info before deletion
            $checkSql = "SELECT id, name, image FROM products WHERE id = :id";
            $checkStmt = $conn->prepare($checkSql);
            $checkStmt->execute([':id' => $data['id']]);
            $product = $checkStmt->fetch(PDO::FETCH_ASSOC);
            
            if (!$product) {
                throw new Exception('Bidhaa haipatikani');
            }
            
            // Delete product
            $sql = "DELETE FROM products WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->execute([':id' => $data['id']]);
            
            // Delete image file if it's not the default
            if ($product['image'] !== 'assets/images/default-product.jpg' && file_exists('../../' . $product['image'])) {
                unlink('../../' . $product['image']);
            }
            
            logOperation('DELETE', ['id' => $data['id'], 'name' => $product['name']]);
            
            echo json_encode(['success' => true, 'message' => 'Bidhaa imefutwa kikamilifu']);
            break;
            
        default:
            throw new Exception('Invalid action');
    }
} catch(Exception $e) {
    http_response_code(400);
    logOperation('ERROR', ['message' => $e->getMessage()]);
    echo json_encode(['error' => $e->getMessage()]);
}
?>
