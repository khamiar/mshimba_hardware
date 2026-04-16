-- MSHIMBA HARDWARE Database Schema

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  price INT NOT NULL,
  description TEXT,
  stock INT DEFAULT 1,
  image VARCHAR(255) DEFAULT 'assets/images/default-product.jpg',
  badge VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert default products with placeholder images
INSERT INTO products (name, category, price, description, stock, image, badge) VALUES
('Saruji Dangote 50kg', 'Ujenzi', 25000, 'Saruji bora kwa ujenzi imara. Gremu 50kg.', 1, 'assets/images/cement.jpg', 'MAARUFU'),
('Chuma cha Ujenzi 12mm', 'Ujenzi', 18000, 'Chuma cha nguvu kwa sakafu na nguzo.', 1, 'assets/images/steel.jpg', ''),
('Drili ya Umeme Bosch', 'Zana', 85000, 'Drili yenye nguvu kwa kuchimba ukuta na mbao.', 1, 'assets/images/drill.jpg', 'HOT'),
('Nyundo ya Karpenta', 'Zana', 12000, 'Nyundo nzito ya chuma na mpini wa mbao.', 1, 'assets/images/hammer.jpg', ''),
('Bomba PVC 1/2 inch (6m)', 'Maji', 8500, 'Bomba la PVC bora kwa mfumo wa maji nyumbani.', 1, 'assets/images/pipe.jpg', ''),
('Tangi la Maji 1000L', 'Maji', 185000, 'Tangi la plastiki la kuhifadhi maji. Rangi nyeusi.', 0, 'assets/images/tank.jpg', ''),
('Nyaya za Umeme 2.5mm (50m)', 'Umeme', 45000, 'Nyaya za ubora wa juu kwa wiring ya nyumba.', 1, 'assets/images/wire.jpg', ''),
('Balbu LED 18W', 'Umeme', 5500, 'Balbu ya LED inayooka chini na kutoa mwango mkali.', 1, 'assets/images/bulb.jpg', 'MPYA');

