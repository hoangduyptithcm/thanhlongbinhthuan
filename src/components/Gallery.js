import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import gardenImage from '../img/Vườn Thanh Long Bình Thuận.png';
import flowerImage from '../img/Hoa Thanh Long Nở Rộ.png';
import harvestImage from '../img/Thu Hoạch Thủ Công.png';
import technologyImage from '../img/Công Nghệ Chiếu Sáng.png';
import packagingImage from '../img/Đóng Gói Sản Phẩm.png';
import productImage from '../img/Sản Phẩm Thanh Long Chất Lượng Cao.png';

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(0);

  const galleryImages = [
    {
      id: 1,
      title: "Vườn Thanh Long Bình Thuận",
      description: "Những vườn thanh long xanh mướt trải dài trên vùng đất cát pha, tạo nên cảnh quan độc đáo của vùng duyên hải Nam Trung Bộ.",
      category: "Vườn Trồng",
      imageUrl: gardenImage
    },
    {
      id: 2,
      title: "Hoa Thanh Long Nở Rộ",
      description: "Hoa thanh long nở vào ban đêm, tỏa hương thơm ngọt ngào và tạo nên vẻ đẹp kỳ diệu dưới ánh trăng.",
      category: "Hoa Nở",
      imageUrl: flowerImage
    },
    {
      id: 3,
      title: "Trái Thanh Long Chín Mọng",
      description: "Những trái thanh long đỏ tươi, căng mọng, sẵn sàng được thu hoạch và mang đến hương vị tuyệt vời cho người thưởng thức.",
      category: "Thu Hoạch",
      imageUrl: productImage
    },
    {
      id: 4,
      title: "Công Nghệ Chiếu Sáng",
      description: "Hệ thống đèn LED hiện đại giúp kích thích thanh long ra hoa trái vụ, tăng năng suất và chất lượng sản phẩm.",
      category: "Công Nghệ",
      imageUrl: technologyImage
    },
    {
      id: 5,
      title: "Thu Hoạch Thủ Công",
      description: "Người nông dân Bình Thuận thu hoạch thanh long bằng phương pháp thủ công, đảm bảo chất lượng và vẻ đẹp của trái.",
      category: "Thu Hoạch",
      imageUrl: harvestImage
    },
    {
      id: 6,
      title: "Đóng Gói Sản Phẩm",
      description: "Quy trình đóng gói cẩn thận, đảm bảo thanh long giữ được độ tươi ngon và vẻ đẹp khi đến tay người tiêu dùng.",
      category: "Đóng Gói",
      imageUrl: packagingImage
    }
  ];

  const categories = ["Tất Cả", "Vườn Trồng", "Hoa Nở", "Thu Hoạch", "Công Nghệ", "Đóng Gói"];

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Thư Viện <span className="text-gradient">Hình Ảnh</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Khám phá vẻ đẹp của những vườn thanh long Bình Thuận qua những hình ảnh 
            chân thực và ấn tượng, từ lúc trồng trọt đến thu hoạch.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-3 rounded-full bg-white hover:bg-primary-600 hover:text-white text-gray-700 font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Main Gallery Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Image Display */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={galleryImages[activeImage].imageUrl}
                alt={galleryImages[activeImage].title}
                className="w-full h-96 object-cover"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-all duration-300"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-all duration-300"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </button>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white/90 hover:bg-white p-4 rounded-full transition-all duration-300 transform hover:scale-110">
                  <Play className="h-8 w-8 text-primary-600 fill-current" />
                </button>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              {activeImage + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Right: Image Info */}
          <div className="space-y-6">
            <div className="inline-block bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium">
              {galleryImages[activeImage].category}
            </div>
            <h3 className="text-3xl font-bold text-gray-900">
              {galleryImages[activeImage].title}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {galleryImages[activeImage].description}
            </p>
            
            {/* Image Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {galleryImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setActiveImage(index)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                    index === activeImage ? 'ring-2 ring-primary-600' : 'hover:scale-105'
                  }`}
                >
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full h-20 object-cover"
                  />
                  {index === activeImage && (
                    <div className="absolute inset-0 bg-primary-600/20 flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={image.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-semibold text-lg mb-2">{image.title}</h4>
                    <p className="text-sm text-white/90 line-clamp-2">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Khám Phá Thêm Về Thanh Long Bình Thuận
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Đăng ký để nhận thông tin mới nhất về các hoạt động, sự kiện và 
              cập nhật từ vùng đất thanh long nổi tiếng Việt Nam.
            </p>
            <button className="btn-secondary text-lg px-8 py-4">
              Đăng Ký Ngay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
