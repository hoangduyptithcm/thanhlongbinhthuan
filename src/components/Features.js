import React from 'react';
import { Sun, Droplets, Leaf, Zap, Shield, Heart } from 'lucide-react';
import cultivationImage from '../img/Quy Trình Trồng Trọt Thanh Long.png';

const Features = () => {
  const features = [
    {
      icon: <Sun className="h-12 w-12 text-yellow-500" />,
      title: "Khí Hậu Lý Tưởng",
      description: "Nắng nóng quanh năm với nhiệt độ trung bình 27-28°C, độ ẩm thấp tạo điều kiện hoàn hảo cho thanh long phát triển.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Droplets className="h-12 w-12 text-blue-500" />,
      title: "Tưới Tiêu Thông Minh",
      description: "Hệ thống tưới nhỏ giọt tự động, tiết kiệm nước và đảm bảo độ ẩm phù hợp cho từng giai đoạn phát triển.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Leaf className="h-12 w-12 text-green-500" />,
      title: "Canh Tác Hữu Cơ",
      description: "Áp dụng phương pháp canh tác hữu cơ, không sử dụng thuốc bảo vệ thực vật độc hại.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <Zap className="h-12 w-12 text-purple-500" />,
      title: "Công Nghệ Chiếu Sáng",
      description: "Sử dụng đèn LED để kích thích ra hoa trái vụ, tăng năng suất và chất lượng sản phẩm.",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <Shield className="h-12 w-12 text-indigo-500" />,
      title: "Bảo Vệ Môi Trường",
      description: "Cam kết bảo vệ môi trường, sử dụng năng lượng tái tạo và giảm thiểu tác động đến hệ sinh thái.",
      color: "from-indigo-400 to-blue-500"
    },
    {
      icon: <Heart className="h-12 w-12 text-red-500" />,
      title: "Chất Lượng Tối Ưu",
      description: "Quy trình kiểm soát chất lượng nghiêm ngặt từ khâu trồng trọt đến thu hoạch và đóng gói.",
      color: "from-red-400 to-pink-500"
    }
  ];

  const cultivationSteps = [
    {
      step: "01",
      title: "Chuẩn Bị Đất",
      description: "Đất cát pha được cải tạo, bón phân hữu cơ và tạo hệ thống thoát nước tốt."
    },
    {
      step: "02",
      title: "Trồng Cây",
      description: "Cây giống chất lượng cao được trồng với khoảng cách phù hợp, đảm bảo ánh sáng đầy đủ."
    },
    {
      step: "03",
      title: "Chăm Sóc",
      description: "Tưới nước, bón phân định kỳ và kiểm soát sâu bệnh bằng phương pháp sinh học."
    },
    {
      step: "04",
      title: "Thu Hoạch",
      description: "Thu hoạch khi trái đạt độ chín tối ưu, đảm bảo hương vị và chất lượng tốt nhất."
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Đặc Điểm <span className="text-gradient">Nổi Bật</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Khám phá những yếu tố làm nên sự khác biệt của thanh long Bình Thuận, 
            từ điều kiện tự nhiên đến kỹ thuật canh tác hiện đại.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className={`bg-gradient-to-br ${feature.color} p-6 rounded-2xl mb-6 transform group-hover:scale-105 transition-transform duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Cultivation Process with Image */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={cultivationImage}
                  alt="Quy trình trồng trọt thanh long Bình Thuận"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-primary text-white p-4 rounded-xl shadow-lg">
                <h4 className="text-lg font-bold">Kỹ Thuật Hiện Đại</h4>
                <p className="text-sm opacity-90">Canh tác bền vững</p>
              </div>
            </div>

            {/* Right: Process Steps */}
            <div>
              <div className="text-center lg:text-left mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Quy Trình Canh Tác
                </h3>
                <p className="text-lg text-gray-600">
                  Từ khâu chuẩn bị đất đến thu hoạch, mỗi bước đều được thực hiện 
                  cẩn thận để đảm bảo chất lượng sản phẩm tốt nhất.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {cultivationSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-primary text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      {step.step}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quality Standards */}
        <div className="text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">
              Tiêu Chuẩn Chất Lượng Quốc Tế
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">VietGAP</div>
                <p className="text-white/90">Tiêu chuẩn thực hành nông nghiệp tốt Việt Nam</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">GlobalGAP</div>
                <p className="text-white/90">Tiêu chuẩn thực hành nông nghiệp tốt toàn cầu</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">ISO 22000</div>
                <p className="text-white/90">Hệ thống quản lý an toàn thực phẩm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
