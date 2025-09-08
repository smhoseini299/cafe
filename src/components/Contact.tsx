import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('پیام شما با موفقیت ارسال شد!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-amber-700" />,
      title: 'آدرس',
      info: 'تهران، خیابان ولیعصر، پلاک ۱۲۳'
    },
    {
      icon: <Phone className="w-6 h-6 text-amber-700" />,
      title: 'تلفن',
      info: '۰۲۱-۱۲۳۴۵۶۷۸'
    },
    {
      icon: <Mail className="w-6 h-6 text-amber-700" />,
      title: 'ایمیل',
      info: 'info@dreamcafe.ir'
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-700" />,
      title: 'ساعات کاری',
      info: 'شنبه تا پنج‌شنبه: ۸-۲۳، جمعه: ۱۰-۲۴'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">تماس با ما</h2>
          <p className="text-amber-700 text-lg">نظرات و پیشنهادات خود را با ما در میان بگذارید</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-amber-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">ارسال پیام</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-amber-800 font-semibold mb-2">نام و نام خانوادگی</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder="نام خود را وارد کنید"
                />
              </div>

              <div>
                <label className="block text-amber-800 font-semibold mb-2">ایمیل</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-amber-800 font-semibold mb-2">شماره تلفن</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                />
              </div>

              <div>
                <label className="block text-amber-800 font-semibold mb-2">پیام</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all resize-none"
                  placeholder="پیام خود را اینجا بنویسید..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
                ارسال پیام
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-amber-50 rounded-xl">
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-amber-900 mb-1">{item.title}</h4>
                    <p className="text-amber-700">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="bg-amber-100 rounded-2xl p-8 text-center">
              <div className="w-full h-48 bg-amber-200 rounded-lg flex items-center justify-center mb-4">
                <div className="text-amber-700">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-semibold">نقشه کافه رویایی</p>
                </div>
              </div>
              <p className="text-amber-700">
                در قلب شهر، در خیابان ولیعصر منتظر شما هستیم
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;