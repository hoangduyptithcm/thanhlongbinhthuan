import React from 'react';
import { Star, Leaf, Zap, Award, Flower, Package, Users } from 'lucide-react';
import heroImage from '../img/Hero Image Thanh Long Bình Thuận.png';
import gardenImage from '../img/Vườn Thanh Long Bình Thuận.png';
import landscapeImage from '../img/Cảnh Quan Nông Nghiệp Hàm Thuận Nam.png';
import flowerImage from '../img/Hoa Thanh Long Nở Rộ.png';
import cultivationImage from '../img/Quy Trình Trồng Trọt Thanh Long.png';
import technologyImage from '../img/Công Nghệ Chiếu Sáng.png';
import harvestImage from '../img/Thu Hoạch Thủ Công.png';
import packagingImage from '../img/Đóng Gói Sản Phẩm.png';
import productImage from '../img/Sản Phẩm Thanh Long Chất Lượng Cao.png';

const ImageShowcase = () => {
  const showcaseImages = [
    {
      image: heroImage,
      title: "Vườn Thanh Long Bình Thuận",
      description: "Những vườn thanh long xanh mướt trải dài trên vùng đất cát pha, tạo nên cảnh quan độc đáo của vùng duyên hải Nam Trung Bộ.",
      icon: <Leaf className="h-6 w-6 text-green-500" />,
      category: "Vườn Trồng"
    },
    {
      image: gardenImage,
      title: "Vườn Thanh Long Xanh Mướt",
      description: "Vườn thanh long được chăm sóc cẩn thận, tạo nên không gian xanh mát và tràn đầy sức sống.",
      icon: <Leaf className="h-6 w-6 text-emerald-500" />,
      category: "Vườn Trồng"
    },
    {
      image: landscapeImage,
      title: "Cảnh Quan Nông Nghiệp",
      description: "Vùng đất nắng gió với khí hậu lý tưởng cho thanh long phát triển mạnh mẽ.",
      icon: <Star className="h-6 w-6 text-yellow-500" />,
      category: "Thiên Nhiên"
    },
    {
      image: flowerImage,
      title: "Hoa Thanh Long Nở Rộ",
      description: "Hoa thanh long nở vào ban đêm, tỏa hương thơm ngọt ngào dưới ánh trăng.",
      icon: <Flower className="h-6 w-6 text-pink-500" />,
      category: "Hoa Nở"
    },
    {
      image: cultivationImage,
      title: "Kỹ Thuật Canh Tác",
      description: "Quy trình trồng trọt hiện đại và bền vững, đảm bảo chất lượng sản phẩm.",
      icon: <Zap className="h-6 w-6 text-blue-500" />,
      category: "Công Nghệ"
    },
    {
      image: technologyImage,
      title: "Công Nghệ Chiếu Sáng",
      description: "Hệ thống đèn LED hiện đại giúp kích thích thanh long ra hoa trái vụ.",
      icon: <Zap className="h-6 w-6 text-purple-500" />,
      category: "Công Nghệ"
    },
    {
      image: harvestImage,
      title: "Thu Hoạch Thủ Công",
      description: "Người nông dân thu hoạch thanh long bằng phương pháp thủ công truyền thống.",
      icon: <Users className="h-6 w-6 text-orange-500" />,
      category: "Thu Hoạch"
    },
    {
      image: packagingImage,
      title: "Đóng Gói Sản Phẩm",
      description: "Quy trình đóng gói cẩn thận, đảm bảo chất lượng khi đến tay người tiêu dùng.",
      icon: <Package className="h-6 w-6 text-indigo-500" />,
      category: "Đóng Gói"
    },
    {
      image: productImage,
      title: "Sản Phẩm Chất Lượng",
      description: "Thanh long Bình Thuận - Đặc sản quốc gia với hương vị tuyệt vời.",
      icon: <Award className="h-6 w-6 text-red-500" />,
      category: "Sản Phẩm"
    }
  ];

  return (
    <section id="image-showcase" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hình Ảnh <span className="text-gradient">Thanh Long Bình Thuận</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Khám phá vẻ đẹp và sự đa dạng của thanh long Bình Thuận qua những hình ảnh 
            chân thực và ấn tượng từ vùng đất nắng gió.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseImages.map((item, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center space-x-2 mb-3">
                      {item.icon}
                      <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Corner Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-sm font-semibold text-gray-800">
                    {index + 1} / {showcaseImages.length}
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
              Khám Phá Thực Tế Vườn Thanh Long
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Đặt tour thăm quan vườn thanh long Bình Thuận để trải nghiệm 
              vẻ đẹp thiên nhiên và tìm hiểu quy trình canh tác.
            </p>
            <button className="btn-secondary text-lg px-8 py-4">
              Đặt Tour Ngay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcase;
