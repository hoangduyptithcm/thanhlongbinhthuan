import React from 'react';
import { Heart, Brain, Eye, Shield, TrendingUp, Globe, Users, Award } from 'lucide-react';
import productImage from '../img/Sản Phẩm Thanh Long Chất Lượng Cao.png';

const Benefits = () => {
  const healthBenefits = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Tốt Cho Tim Mạch",
      description: "Chứa nhiều chất chống oxy hóa, giúp giảm cholesterol xấu và bảo vệ sức khỏe tim mạch.",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: <Brain className="h-8 w-8 text-blue-500" />,
      title: "Tăng Cường Trí Não",
      description: "Giàu vitamin B và các khoáng chất cần thiết cho hoạt động của não bộ và hệ thần kinh.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Eye className="h-8 w-8 text-green-500" />,
      title: "Bảo Vệ Mắt",
      description: "Chứa beta-carotene và vitamin A, giúp duy trì thị lực tốt và ngăn ngừa các bệnh về mắt.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-500" />,
      title: "Tăng Cường Miễn Dịch",
      description: "Hàm lượng vitamin C cao giúp tăng cường hệ miễn dịch, chống lại các bệnh tật.",
      color: "from-purple-400 to-pink-500"
    }
  ];

  const economicBenefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      title: "Tăng Thu Nhập",
      description: "Thanh long mang lại thu nhập cao và ổn định cho nông dân Bình Thuận, góp phần xóa đói giảm nghèo.",
      value: "15-20 triệu VNĐ/ha/năm"
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      title: "Xuất Khẩu Quốc Tế",
      description: "Sản phẩm được xuất khẩu sang hơn 40 quốc gia, mang lại nguồn ngoại tệ lớn cho đất nước.",
      value: "40+ quốc gia"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Tạo Việc Làm",
      description: "Tạo công ăn việc làm cho hàng nghìn lao động địa phương trong các khâu sản xuất và chế biến.",
      value: "50,000+ việc làm"
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "Thương Hiệu Quốc Gia",
      description: "Thanh long Bình Thuận đã trở thành thương hiệu nổi tiếng, được bảo hộ chỉ dẫn địa lý.",
      value: "Thương hiệu quốc gia"
    }
  ];

  const nutritionFacts = [
    { nutrient: "Calories", value: "60", unit: "kcal" },
    { nutrient: "Protein", value: "1.2", unit: "g" },
    { nutrient: "Carbohydrates", value: "13", unit: "g" },
    { nutrient: "Fiber", value: "1.1", unit: "g" },
    { nutrient: "Vitamin C", value: "8.0", unit: "mg" },
    { nutrient: "Calcium", value: "8.0", unit: "mg" },
    { nutrient: "Iron", value: "0.7", unit: "mg" },
    { nutrient: "Magnesium", value: "18", unit: "mg" }
  ];

  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lợi Ích <span className="text-gradient">Tuyệt Vời</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Thanh long Bình Thuận không chỉ ngon miệng mà còn mang lại nhiều lợi ích 
            cho sức khỏe con người và đóng góp tích cực cho nền kinh tế địa phương.
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="mb-20">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={productImage}
              alt="Sản phẩm thanh long Bình Thuận chất lượng cao"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-4xl font-bold mb-4">Thanh Long Bình Thuận</h3>
                <p className="text-xl opacity-90">Chất lượng quốc tế - Hương vị Việt Nam</p>
              </div>
            </div>
          </div>
        </div>

        {/* Health Benefits */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Lợi Ích Sức Khỏe
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Với hàm lượng dinh dưỡng cao và các chất chống oxy hóa tự nhiên, 
              thanh long là loại trái cây lý tưởng cho một chế độ ăn uống lành mạnh.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthBenefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br ${benefit.color} p-6 rounded-2xl mb-4 transform group-hover:scale-105 transition-transform duration-300`}>
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Economic Benefits */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Lợi Ích Kinh Tế
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Thanh long Bình Thuận không chỉ là cây trồng mang lại thu nhập cao 
              mà còn góp phần phát triển kinh tế địa phương và quốc gia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {economicBenefits.map((benefit, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {benefit.description}
                    </p>
                    <div className="text-2xl font-bold text-primary-600">
                      {benefit.value}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nutrition Facts */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Thông Tin Dinh Dưỡng
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Thành phần dinh dưỡng trong 100g thịt thanh long (tươi)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nutritionFacts.map((fact, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {fact.value}
                </div>
                <div className="text-sm text-gray-500 mb-1">
                  {fact.unit}
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {fact.nutrient}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              * Thông tin dinh dưỡng có thể thay đổi tùy thuộc vào độ chín và điều kiện trồng trọt
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Trải Nghiệm Hương Vị Thanh Long Bình Thuận
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Hãy thưởng thức hương vị tuyệt vời của thanh long Bình Thuận và 
              cảm nhận những lợi ích sức khỏe mà loại trái cây này mang lại.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary text-lg px-8 py-4">
                Mua Ngay
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Tìm Hiểu Thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
