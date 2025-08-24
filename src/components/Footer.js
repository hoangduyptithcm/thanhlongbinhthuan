import React from 'react';
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Trang Chủ", href: "#hero" },
    { name: "Giới Thiệu", href: "#about" },
    { name: "Đặc Điểm", href: "#features" },
    { name: "Thư Viện", href: "#gallery" },
    { name: "Lợi Ích", href: "#benefits" },
    { name: "Liên Hệ", href: "#contact" }
  ];

  const services = [
    "Mua sỉ thanh long",
    "Đặt tour thăm quan",
    "Tư vấn kỹ thuật",
    "Xuất khẩu",
    "Đào tạo nông dân",
    "Hỗ trợ tiêu thụ"
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Youtube className="h-5 w-5" />, href: "#", label: "YouTube" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold">Thanh Long Bình Thuận</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Chuyên cung cấp thông tin và dịch vụ về thanh long Bình Thuận - 
              đặc sản nổi tiếng của vùng đất nắng gió duyên hải Nam Trung Bộ.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-500" />
                <span className="text-gray-300">Bình Thuận, Việt Nam</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-500" />
                <span className="text-gray-300">+84 252 3 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-500" />
                <span className="text-gray-300">info@thanhlongbinhthuan.vn</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Liên Kết Nhanh</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Dịch Vụ</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Đăng Ký Nhận Tin</h4>
            <p className="text-gray-300 mb-4">
              Nhận thông tin mới nhất về thanh long Bình Thuận và các sự kiện đặc biệt.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-300">
                <Mail className="h-4 w-4" />
              </button>
            </div>
            
            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-sm font-medium text-gray-400 mb-3">Theo Dõi Chúng Tôi</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Thanh Long Bình Thuận. Tất cả quyền được bảo lưu.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button className="hover:text-primary-400 transition-colors duration-300">
                Chính Sách Bảo Mật
              </button>
              <button className="hover:text-primary-400 transition-colors duration-300">
                Điều Khoản Sử Dụng
              </button>
              <button className="hover:text-primary-400 transition-colors duration-300">
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => scrollToSection('hero')}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Về đầu trang"
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
