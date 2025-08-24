import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import heroImage from '../img/Hero Image Thanh Long Bình Thuận.png';
import gardenImage from '../img/Vườn Thanh Long Bình Thuận.png';
import landscapeImage from '../img/Cảnh Quan Nông Nghiệp Hàm Thuận Nam.png';
import flowerImage from '../img/Hoa Thanh Long Nở Rộ.png';
import cultivationImage from '../img/Quy Trình Trồng Trọt Thanh Long.png';
import technologyImage from '../img/Công Nghệ Chiếu Sáng.png';
import harvestImage from '../img/Thu Hoạch Thủ Công.png';
import packagingImage from '../img/Đóng Gói Sản Phẩm.png';
import productImage from '../img/Sản Phẩm Thanh Long Chất Lượng Cao.png';

const ImageGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tất Cả');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = [
    {
      id: 1,
      title: "Vườn Thanh Long Bình Thuận",
      description: "Những vườn thanh long xanh mướt trải dài trên vùng đất cát pha, tạo nên cảnh quan độc đáo của vùng duyên hải Nam Trung Bộ.",
      category: "Vườn Trồng",
      imageUrl: heroImage,
      tags: ["vườn", "xanh", "cảnh quan"]
    },
    {
      id: 2,
      title: "Vườn Thanh Long Xanh Mướt",
      description: "Vườn thanh long được chăm sóc cẩn thận, tạo nên không gian xanh mát và tràn đầy sức sống.",
      category: "Vườn Trồng",
      imageUrl: gardenImage,
      tags: ["vườn", "chăm sóc", "xanh mát"]
    },
    {
      id: 3,
      title: "Cảnh Quan Nông Nghiệp",
      description: "Vùng đất nắng gió với khí hậu lý tưởng cho thanh long phát triển mạnh mẽ.",
      category: "Thiên Nhiên",
      imageUrl: landscapeImage,
      tags: ["cảnh quan", "nông nghiệp", "khí hậu"]
    },
    {
      id: 4,
      title: "Hoa Thanh Long Nở Rộ",
      description: "Hoa thanh long nở vào ban đêm, tỏa hương thơm ngọt ngào dưới ánh trăng.",
      category: "Hoa Nở",
      imageUrl: flowerImage,
      tags: ["hoa", "nở", "hương thơm"]
    },
    {
      id: 5,
      title: "Kỹ Thuật Canh Tác",
      description: "Quy trình trồng trọt hiện đại và bền vững, đảm bảo chất lượng sản phẩm.",
      category: "Công Nghệ",
      imageUrl: cultivationImage,
      tags: ["kỹ thuật", "canh tác", "hiện đại"]
    },
    {
      id: 6,
      title: "Công Nghệ Chiếu Sáng",
      description: "Hệ thống đèn LED hiện đại giúp kích thích thanh long ra hoa trái vụ.",
      category: "Công Nghệ",
      imageUrl: technologyImage,
      tags: ["công nghệ", "LED", "chiếu sáng"]
    },
    {
      id: 7,
      title: "Thu Hoạch Thủ Công",
      description: "Người nông dân thu hoạch thanh long bằng phương pháp thủ công truyền thống.",
      category: "Thu Hoạch",
      imageUrl: harvestImage,
      tags: ["thu hoạch", "thủ công", "nông dân"]
    },
    {
      id: 8,
      title: "Đóng Gói Sản Phẩm",
      description: "Quy trình đóng gói cẩn thận, đảm bảo chất lượng khi đến tay người tiêu dùng.",
      category: "Đóng Gói",
      imageUrl: packagingImage,
      tags: ["đóng gói", "chất lượng", "sản phẩm"]
    },
    {
      id: 9,
      title: "Sản Phẩm Chất Lượng",
      description: "Thanh long Bình Thuận - Đặc sản quốc gia với hương vị tuyệt vời.",
      category: "Sản Phẩm",
      imageUrl: productImage,
      tags: ["sản phẩm", "chất lượng", "đặc sản"]
    }
  ];

  const categories = ['Tất Cả', 'Vườn Trồng', 'Thiên Nhiên', 'Hoa Nở', 'Công Nghệ', 'Thu Hoạch', 'Đóng Gói', 'Sản Phẩm'];

  const filteredImages = selectedCategory === 'Tất Cả' 
    ? allImages 
    : allImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image, index) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const currentIndex = allImages.findIndex(img => img.id === lightboxImage.id);
    const nextIndex = (currentIndex + 1) % allImages.length;
    setLightboxImage(allImages[nextIndex]);
    setLightboxIndex(nextIndex);
  };

  const prevImage = () => {
    const currentIndex = allImages.findIndex(img => img.id === lightboxImage.id);
    const prevIndex = currentIndex === 0 ? allImages.length - 1 : currentIndex - 1;
    setLightboxImage(allImages[prevIndex]);
    setLightboxIndex(prevIndex);
  };

  return (
    <section id="image-gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bộ Sưu Tập <span className="text-gradient">Hình Ảnh</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Khám phá vẻ đẹp toàn diện của thanh long Bình Thuận qua bộ sưu tập 
            hình ảnh chất lượng cao, từ vườn trồng đến sản phẩm cuối cùng.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-primary-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div key={image.id} className="group cursor-pointer">
              <div 
                className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500"
                onClick={() => openLightbox(image, index)}
              >
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center space-x-2 mb-3">
                      <ImageIcon className="h-5 w-5" />
                      <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                        {image.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">{image.description}</p>
                  </div>
                </div>

                {/* Click to View */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-sm font-semibold text-gray-800 flex items-center space-x-2">
                    <ImageIcon className="h-4 w-4" />
                    <span>Click để xem</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Counter */}
        <div className="text-center mt-8 text-gray-600">
          Hiển thị {filteredImages.length} / {allImages.length} hình ảnh
          {selectedCategory !== 'Tất Cả' && ` trong danh mục "${selectedCategory}"`}
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-300 z-10"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-300 z-10"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-300 z-10"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Main Image */}
              <img
                src={lightboxImage.imageUrl}
                alt={lightboxImage.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">{lightboxImage.title}</h3>
                  <p className="text-white/90 mb-3">{lightboxImage.description}</p>
                  <div className="flex items-center space-x-4">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      {lightboxImage.category}
                    </span>
                    <span className="text-white/70">
                      {lightboxIndex + 1} / {allImages.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageGallery;
