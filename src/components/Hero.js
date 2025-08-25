import React from 'react';
import { ArrowDown, Play, Star } from 'lucide-react';
import heroImage from '../img/Hero Image Thanh Long Bình Thuận.png';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Vườn thanh long Bình Thuận xanh mướt"
          loading="eager"
          fetchpriority="high"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-20 z-10">
        <div className="absolute top-10 md:top-20 left-6 md:left-20 w-16 h-16 md:w-32 md:h-32 bg-white rounded-full"></div>
        <div className="absolute top-24 md:top-40 right-10 md:right-32 w-12 h-12 md:w-24 md:h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-20 md:bottom-32 left-1/5 md:left-1/4 w-10 h-10 md:w-20 md:h-20 bg-white rounded-full"></div>
        <div className="absolute bottom-10 md:bottom-20 right-8 md:right-20 w-14 h-14 md:w-28 md:h-28 bg-white rounded-full"></div>
      </div>

      <div className="container-custom relative z-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="text-white font-medium">Đặc sản nổi tiếng Việt Nam</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Thanh Long
            <span className="block text-3xl sm:text-4xl md:text-5xl mt-2 opacity-90">Bình Thuận</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto px-2">
            Khám phá nét đặc trưng của vùng đất nắng gió, nơi sản sinh ra những trái thanh long 
            thơm ngon, giàu dinh dưỡng và mang đậm hương vị miền Trung
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
            <button 
              onClick={() => scrollToSection('about')}
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              Khám Phá Ngay
            </button>
            <button className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
              <Play className="h-5 w-5 mr-2 inline" />
              Xem Video
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">15,000+</div>
              <div className="text-white/80">Hecta trồng trọt</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">50,000+</div>
              <div className="text-white/80">Tấn sản lượng/năm</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">100%</div>
              <div className="text-white/80">Tự nhiên</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-white/80 hover:text-white transition-colors duration-300 animate-bounce-slow"
        >
          <ArrowDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
