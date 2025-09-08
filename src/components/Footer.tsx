import React from 'react';
import { Coffee, MapPin, Phone, Mail, Instagram, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Coffee className="w-8 h-8 text-amber-300" />
              <h3 className="text-2xl font-bold">کافه رویایی</h3>
            </div>
            <p className="text-amber-200 leading-relaxed mb-6">
              از سال ۱۳۹۵، کافه رویایی با ارائه بهترین قهوه‌های جهان و خدمات بی‌نظیر، 
              فضایی گرم و دوستانه برای عاشقان قهوه فراهم کرده است.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-200">دسترسی سریع</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-amber-100 hover:text-amber-300 transition-colors">
                  صفحه اصلی
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-100 hover:text-amber-300 transition-colors">
                  منوی کافه
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-100 hover:text-amber-300 transition-colors">
                  درباره ما
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-100 hover:text-amber-300 transition-colors">
                  تماس با ما
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-200">اطلاعات تماس</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-300 mt-1 flex-shrink-0" />
                <p className="text-amber-100 text-sm">
                  تهران، خیابان ولیعصر، پلاک ۱۲۳
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-300 flex-shrink-0" />
                <p className="text-amber-100 text-sm">۰۲۱-۱۲۳۴۵۶۷۸</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-300 flex-shrink-0" />
                <p className="text-amber-100 text-sm">info@dreamcafe.ir</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-200 flex items-center justify-center gap-2">
            ساخته شده با 
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            برای عاشقان قهوه © ۱۴۰۳ کافه رویایی
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;