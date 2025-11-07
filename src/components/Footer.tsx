import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-6 h-6 text-amber-600" />
              <h3 className="text-lg font-bold text-white">کافه رویایی</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              از سال ۱۳۹۵، ارائه‌دهنده بهترین قهوه‌های تازه برشته‌شده با کیفیتی برتر.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">دسترسی سریع</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/cafe" className="text-sm text-gray-400 hover:text-white transition-colors">
                  خانه
                </Link>
              </li>
              <li>
                <Link to="/cafe/menu" className="text-sm text-gray-400 hover:text-white transition-colors">
                  منو
                </Link>
              </li>
              <li>
                <Link to="/cafe/shop" className="text-sm text-gray-400 hover:text-white transition-colors">
                  فروشگاه
                </Link>
              </li>
              <li>
                <Link to="/cafe/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                  تماس
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">تماس با ما</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">
                  تهران، خیابان ولیعصر، پلاک ۱۲۳
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <p className="text-sm text-gray-400">۰۲۱-۱۲۳۴۵۶۷۸</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <p className="text-sm text-gray-400">info@dreamcafe.ir</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © ۱۴۰۳ کافه رویایی. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;