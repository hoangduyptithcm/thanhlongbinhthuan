import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary-600" />,
      title: "Địa Chỉ",
      content: "Tỉnh Bình Thuận, Việt Nam",
      description: "Vùng đất nắng gió duyên hải Nam Trung Bộ"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary-600" />,
      title: "Điện Thoại",
      content: "+84 252 3 123 456",
      description: "Hỗ trợ khách hàng 24/7"
    },
    {
      icon: <Mail className="h-6 w-6 text-primary-600" />,
      title: "Email",
      content: "info@thanhlongbinhthuan.vn",
      description: "Liên hệ qua email"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary-600" />,
      title: "Giờ Làm Việc",
      content: "Thứ 2 - Thứ 7: 8:00 - 17:00",
      description: "Chủ nhật: 8:00 - 12:00"
    }
  ];

  const producers = [
    {
      name: "HTX Thanh Long Bình Thuận",
      description: "Hợp tác xã sản xuất thanh long chất lượng cao",
      contact: "+84 252 3 123 456"
    },
    {
      name: "Công Ty TNHH Thanh Long Xanh",
      description: "Công ty xuất khẩu thanh long hàng đầu",
      contact: "+84 252 3 123 457"
    },
    {
      name: "Trang Trại Thanh Long Gia Đình",
      description: "Trang trại thanh long hữu cơ truyền thống",
      contact: "+84 252 3 123 458"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Liên Hệ <span className="text-gradient">Với Chúng Tôi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bạn có câu hỏi về thanh long Bình Thuận? Hãy liên hệ với chúng tôi để 
            được tư vấn và hỗ trợ tốt nhất.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Gửi Tin Nhắn
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Cảm ơn bạn!
                </h4>
                <p className="text-gray-600">
                  Tin nhắn của bạn đã được gửi thành công. Chúng tôi sẽ phản hồi sớm nhất có thể.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Nhập họ và tên của bạn"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Nhập email của bạn"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Chủ đề *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Nhập chủ đề tin nhắn"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Nội dung tin nhắn *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Nhập nội dung tin nhắn của bạn"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Gửi Tin Nhắn</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Thông Tin Liên Hệ
            </h3>
            
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md">
                <div className="flex-shrink-0 mt-1">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {info.title}
                  </h4>
                  <p className="text-gray-900 font-medium mb-1">
                    {info.content}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Producers Section */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nhà Sản Xuất Thanh Long Bình Thuận
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Danh sách các nhà sản xuất và cung cấp thanh long chất lượng cao tại Bình Thuận
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {producers.map((producer, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors duration-300">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {producer.name}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {producer.description}
                </p>
                <div className="text-primary-600 font-medium">
                  {producer.contact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Thăm Quan Vườn Thanh Long Bình Thuận
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Trải nghiệm thực tế tại những vườn thanh long xanh mướt, 
              tìm hiểu quy trình canh tác và thưởng thức hương vị tươi ngon.
            </p>
            <button className="btn-secondary text-lg px-8 py-4">
              Đặt Tour Thăm Quan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
