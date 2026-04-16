# MSHIMBA HARDWARE - Setup Instructions

## Database Setup

### 1. Create MySQL Database
```bash
mysql -u root -p < database.sql
```

Or manually in phpMyAdmin:
1. Create a new database named: `mshimba_hardware`
2. Import the `database.sql` file
3. The file will create:
   - `products` table with 8 default products
   - Columns: id, name, category, price, description, stock, emoji, badge

### 2. Configure Database Connection
Edit `conn.php` with your database credentials:
```php
$host = 'localhost';
$db_name = 'mshimba_hardware';
$db_user = 'root';  // Your MySQL username
$db_pass = '';      // Your MySQL password
```

### 3. Directory Structure Required
```
/home/khamiar/Desktop/MshimbaWebsite/
├── index.html                    (Public storefront)
├── styles/
│   └── style.css                (Styles for public & admin)
├── conn.php                      (Database configuration)
├── database.sql                  (Database schema)
├── admin/
│   ├── login.html               (Admin login page)
│   ├── panel.html               (Admin dashboard)
│   └── api/
│       ├── login.php            (Authentication API)
│       ├── logout.php           (Logout API)
│       ├── check-session.php    (Session verification API)
│       └── products.php         (Product CRUD API)
```

## Features Implemented

✅ **Public Site (index.html)**
- Product listing with real-time filtering
- About section with mission/vision/features
- Testimonials section
- Call-to-action banner
- Contact information with embedded map
- Responsive design (mobile-friendly)

✅ **Admin Panel**
- Session-based authentication (login.html)
- Product management dashboard (panel.html)
- Real-time CRUD operations
- Category filtering
- Stock management
- Emoji and badge customization

✅ **Backend APIs**
- POST `/admin/api/login.php` - Authenticate admin
- GET `/admin/api/check-session.php` - Verify session
- POST `/admin/api/logout.php` - Logout
- GET `/admin/api/products.php?action=read` - Fetch all products
- POST `/admin/api/products.php?action=create` - Add product (requires auth)
- POST `/admin/api/products.php?action=update` - Edit product (requires auth)
- POST `/admin/api/products.php?action=delete` - Remove product (requires auth)

## Default Admin Credentials

**Username:** admin
**Password:** mshimba2025

⚠️ **Security Note:** Change these in `conn.php` after first login!

## Default Products

1. 🧱 Saruji Dangote 50kg - 25,000 TZS
2. 🏗️ Chuma cha Ujenzi 12mm - 18,000 TZS
3. 🔧 Drili ya Umeme Bosch - 85,000 TZS
4. 🔨 Nyundo ya Karpenta - 12,000 TZS
5. 💧 Bomba PVC 1/2 inch (6m) - 8,500 TZS
6. 🪣 Tangi la Maji 1000L - 185,000 TZS (Out of stock)
7. ⚡ Nyaya za Umeme 2.5mm (50m) - 45,000 TZS
8. 💡 Balbu LED 18W - 5,500 TZS

## Testing the System

### Local Testing (with PHP built-in server)
```bash
cd /home/khamiar/Desktop/MshimbaWebsite
php -S localhost:8000
```
Then visit: `http://localhost:8000`

### Admin Access
1. Navigate to: `http://localhost:8000/admin/login.html`
2. Login with: admin / mshimba2025
3. You'll be directed to the dashboard at: `http://localhost:8000/admin/panel.html`

## Project Architecture

**Tech Stack:**
- Frontend: HTML5, CSS3, Vanilla JavaScript (ES6+)
- Backend: PHP 7.0+
- Database: MySQL 5.7+
- Session Management: PHP `$_SESSION`

**Data Flow:**
1. Public site fetches products from `/admin/api/products.php?action=read`
2. Admin login posts to `/admin/api/login.php`
3. Session created if credentials match
4. Admin panel loads and fetches products
5. CRUD operations update database in real-time
6. Public site reflects changes immediately

## Troubleshooting

### Database Connection Failed
- Check `conn.php` credentials match your MySQL setup
- Ensure database `mshimba_hardware` exists
- Verify MySQL service is running

### Products Not Loading
- Run `database.sql` to create table and insert default data
- Check browser console for errors
- Verify `/admin/api/products.php` returns JSON

### Login Not Working
- Clear browser cache and cookies
- Check PHP sessions are enabled (`php.ini`)
- Verify admin credentials in `conn.php`

### Mobile Not Showing Products
- Ensure responsive CSS is loaded from `styles/style.css`
- Check network tab for API errors

## Future Enhancements

- User accounts for multiple admins
- Product images/upload functionality
- Inventory alerts
- Sales reporting dashboard
- Email notification system
- Mobile app integration
