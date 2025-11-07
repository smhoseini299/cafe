import { assetPath } from '../utils/assetPath';
import { Link } from 'react-router-dom';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="text-center md:text-right order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              قهوه تازه، هر روز
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              تجربه طعم اصیل قهوه با دانه‌های برشته‌شده تازه. 
              سفارش آنلاین یا حضوری از کافه رویایی.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/cafe/menu"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium text-base transition-colors"
              >
                مشاهده منو
              </Link>
              <Link
                to="/cafe/shop"
                className="inline-block border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium text-base transition-colors"
              >
                خرید آنلاین
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 md:order-2">
            <img
              src={assetPath('image/cofe1.jpg')}
              alt="قهوه تازه کافه رویایی"
              className="rounded-lg w-full h-80 md:h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;