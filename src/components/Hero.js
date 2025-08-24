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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Vườn thanh long Bình Thuận xanh mướt"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-20 z-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-white rounded-full"></div>
      </div>

      <div className="container-custom relative z-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="text-white font-medium">Đặc sản nổi tiếng Việt Nam</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Thanh Long
            <span className="block text-4xl md:text-5xl mt-2 opacity-90">Bình Thuận</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Khám phá nét đặc trưng của vùng đất nắng gió, nơi sản sinh ra những trái thanh long 
            thơm ngon, giàu dinh dưỡng và mang đậm hương vị miền Trung
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button 
              onClick={() => scrollToSection('about')}
              className="btn-primary text-lg px-8 py-4"
            >
              Khám Phá Ngay
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              <Play className="h-5 w-5 mr-2 inline" />
              Xem Video
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">15,000+</div>
              <div className="text-white/80">Hecta trồng trọt</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50,000+</div>
              <div className="text-white/80">Tấn sản lượng/năm</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
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
