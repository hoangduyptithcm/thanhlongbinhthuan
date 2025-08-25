import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Trang Chủ', id: 'hero' },
    { name: 'Giới Thiệu', id: 'about' },
    { name: 'Đặc Điểm', id: 'features' },
    { name: 'Hình Ảnh', id: 'image-showcase' },
    { name: 'Bộ Sưu Tập', id: 'image-gallery' },
    { name: 'Thư Viện', id: 'gallery' },
    { name: 'Lợi Ích', id: 'benefits' },
    { name: 'Liên Hệ', id: 'contact' },
  ];

  return (
    <nav aria-label="Thanh Long Bình Thuận" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 px-2 md:px-0">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Leaf className="h-7 w-7 md:h-8 md:w-8 text-primary-600" />
            <span className="text-lg md:text-xl font-bold text-gradient whitespace-nowrap">Thanh Long Bình Thuận</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-600"
            aria-controls="primary-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="primary-navigation" className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-2 sm:space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-700 hover:text-primary-600 font-medium py-3 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-600"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
