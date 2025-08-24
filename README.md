# 🌵 Website Giới Thiệu Thanh Long Bình Thuận

Một website hiện đại và đẹp mắt giới thiệu về cây thanh long của tỉnh Bình Thuận, được xây dựng bằng React.js và Tailwind CSS.

## ✨ Tính Năng

- **Responsive Design**: Tương thích với mọi thiết bị
- **Modern UI/UX**: Giao diện đẹp mắt với animations mượt mà
- **Smooth Scrolling**: Điều hướng mượt mà giữa các section
- **Interactive Components**: Các component tương tác như gallery, contact form
- **SEO Optimized**: Tối ưu hóa cho công cụ tìm kiếm
- **Performance**: Tải trang nhanh và mượt mà

## 🚀 Cài Đặt và Chạy

### Yêu Cầu Hệ Thống
- Node.js (phiên bản 16 trở lên)
- npm hoặc yarn

### Bước 1: Cài Đặt Dependencies
```bash
npm install
```

### Bước 2: Chạy Ứng Dụng
```bash
npm start
```

Ứng dụng sẽ chạy tại `http://localhost:3000`

### Bước 3: Build Production
```bash
npm run build
```

## 🏗️ Cấu Trúc Dự Án

```
src/
├── components/          # Các component React
│   ├── Navbar.js       # Thanh điều hướng
│   ├── Hero.js         # Section chính
│   ├── About.js        # Giới thiệu
│   ├── Features.js     # Đặc điểm nổi bật
│   ├── Gallery.js      # Thư viện hình ảnh
│   ├── Benefits.js     # Lợi ích
│   ├── Contact.js      # Liên hệ
│   └── Footer.js       # Chân trang
├── App.js              # Component chính
├── index.js            # Entry point
└── index.css           # Styles chính
```

## 🎨 Công Nghệ Sử Dụng

- **React.js 18**: Framework chính
- **Tailwind CSS**: Framework CSS utility-first
- **Lucide React**: Icon library
- **React Router**: Điều hướng
- **Framer Motion**: Animations (có thể thêm sau)

## 📱 Các Section Chính

### 1. Hero Section
- Headline ấn tượng về thanh long Bình Thuận
- Call-to-action buttons
- Thống kê về sản lượng và diện tích

### 2. About Section
- Giới thiệu về Bình Thuận và thanh long
- Lịch sử trồng trọt
- Đặc điểm nổi bật

### 3. Features Section
- Đặc điểm nổi bật của thanh long
- Quy trình canh tác
- Tiêu chuẩn chất lượng

### 4. Gallery Section
- Thư viện hình ảnh đẹp mắt
- Filter theo danh mục
- Lightbox xem ảnh

### 5. Benefits Section
- Lợi ích sức khỏe
- Lợi ích kinh tế
- Thông tin dinh dưỡng

### 6. Contact Section
- Form liên hệ
- Thông tin liên hệ
- Danh sách nhà sản xuất

## 🎯 Tùy Chỉnh

### Thay Đổi Màu Sắc
Chỉnh sửa file `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Thay đổi màu chủ đạo
  },
  dragon: {
    // Thay đổi màu phụ
  }
}
```

### Thay Đổi Nội Dung
- Cập nhật text trong các component
- Thay đổi hình ảnh trong `Gallery.js`
- Cập nhật thông tin liên hệ trong `Contact.js`

### Thêm Section Mới
1. Tạo component mới trong `src/components/`
2. Import vào `App.js`
3. Thêm vào navigation trong `Navbar.js`

## 📸 Hình Ảnh

Website sử dụng hình ảnh từ Unsplash. Bạn có thể:
- Thay thế bằng hình ảnh thực tế của thanh long Bình Thuận
- Cập nhật alt text cho SEO
- Tối ưu hóa kích thước hình ảnh

## 🌐 Triển Khai

### Netlify
1. Push code lên GitHub
2. Kết nối với Netlify
3. Deploy tự động

### Vercel
1. Push code lên GitHub
2. Import vào Vercel
3. Deploy

### Hosting Thông Thường
1. Chạy `npm run build`
2. Upload thư mục `build/` lên hosting

## 📞 Hỗ Trợ

Nếu bạn cần hỗ trợ hoặc có câu hỏi:
- Email: info@thanhlongbinhthuan.vn
- Điện thoại: +84 252 3 123 456

## 📄 Giấy Phép

Dự án này được phát hành dưới giấy phép MIT.

---

**Thanh Long Bình Thuận** - Nét đặc trưng vùng đất nắng gió 🌵☀️
