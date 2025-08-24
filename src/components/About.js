import React from 'react';
import { MapPin, Calendar, Users, Award } from 'lucide-react';
import landscapeImage from '../img/Cảnh Quan Nông Nghiệp Hàm Thuận Nam.png';

const About = () => {
  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-primary-600" />,
      title: "Vị Trí Địa Lý",
      description: "Nằm ở vùng duyên hải Nam Trung Bộ, Bình Thuận có khí hậu nắng nóng quanh năm, đất cát pha phù hợp cho việc trồng thanh long."
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary-600" />,
      title: "Lịch Sử Trồng Trọt",
      description: "Thanh long được trồng ở Bình Thuận từ những năm 1990, trở thành cây trồng chủ lực của tỉnh và được công nhận là đặc sản quốc gia."
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: "Cộng Đồng Nông Dân",
      description: "Hơn 15,000 hộ nông dân tham gia trồng thanh long, tạo việc làm và thu nhập ổn định cho người dân địa phương."
    },
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: "Chứng Nhận Chất Lượng",
      description: "Thanh long Bình Thuận đã được cấp chứng nhận VietGAP, GlobalGAP và xuất khẩu sang nhiều thị trường quốc tế."
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Về <span className="text-gradient">Thanh Long Bình Thuận</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bình Thuận - vùng đất của nắng, gió và biển, nơi sản sinh ra những trái thanh long 
            thơm ngon, ngọt lịm, được mệnh danh là "vua của các loại trái cây nhiệt đới".
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Tại sao thanh long Bình Thuận lại đặc biệt?
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nhờ khí hậu nắng nóng quanh năm, đất cát pha giàu khoáng chất và kỹ thuật 
              canh tác truyền thống kết hợp với công nghệ hiện đại, thanh long Bình Thuận 
              có hương vị đặc trưng không thể nhầm lẫn.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Với hàm lượng dinh dưỡng cao, giàu vitamin C, chất xơ và các chất chống oxy hóa, 
              thanh long Bình Thuận không chỉ ngon miệng mà còn rất tốt cho sức khỏe.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-2xl font-bold text-primary-600">1990</div>
                <div className="text-sm text-gray-600">Năm bắt đầu trồng</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-2xl font-bold text-primary-600">30+</div>
                <div className="text-sm text-gray-600">Năm kinh nghiệm</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={landscapeImage}
                alt="Cảnh quan nông nghiệp thanh long Bình Thuận"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-primary text-white p-4 rounded-xl shadow-lg">
              <h4 className="text-lg font-bold mb-2">Cảnh Quan Đẹp</h4>
              <p className="text-sm opacity-90">Vùng đất nắng gió</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-6 text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
