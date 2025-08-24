#!/bin/bash

echo "🚀 Bắt đầu deploy website Thanh Long Bình Thuận lên Vercel..."
echo ""

# Kiểm tra xem Vercel CLI đã được cài đặt chưa
if ! command -v vercel &> /dev/null; then
    echo "📦 Cài đặt Vercel CLI..."
    npm install -g vercel
    echo ""
fi

# Build project
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build thành công!"
    echo ""
    
    # Deploy lên Vercel
    echo "🌐 Deploying lên Vercel..."
    echo "Làm theo hướng dẫn trên màn hình..."
    echo ""
    
    vercel --prod
    
    echo ""
    echo "🎉 Deploy hoàn tất!"
    echo "Website của bạn đã được deploy lên Vercel!"
    echo ""
    echo "📱 Kiểm tra website:"
    echo "- Truy cập URL được cung cấp bởi Vercel"
    echo "- Kiểm tra responsive trên mobile"
    echo "- Test tất cả các tính năng"
    echo ""
    echo "📚 Tài liệu tham khảo:"
    echo "- DEPLOYMENT.md - Hướng dẫn chi tiết"
    echo "- README.md - Thông tin project"
    echo ""
else
    echo "❌ Build thất bại! Vui lòng kiểm tra lỗi và thử lại."
    exit 1
fi
