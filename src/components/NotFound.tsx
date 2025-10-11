import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-l from-amber-100 to-amber-200 flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold text-amber-900 opacity-20 leading-none">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              صفحه مورد نظر یافت نشد
            </h2>
            <p className="text-xl text-amber-800 mb-8 max-w-2xl mx-auto leading-relaxed">
              متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد. ممکن است آدرس اشتباه باشد یا صفحه حذف شده باشد.
            </p>
          </div>

          {/* Coffee Illustration */}
          <div className="mb-12 relative">
            <div className="inline-block relative">
              <div className="w-32 h-32 bg-amber-700 rounded-full flex items-center justify-center shadow-2xl">
                <svg 
                  className="w-16 h-16 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M2 21h18v-2H2v2zm2-4h14v-2H4v2zm2-4h10v-2H6v2zm2-4h6v-2H8v2zm8-4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H4V5h12v12z"/>
                </svg>
              </div>
              {/* Steam Animation */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-1">
                  <div className="w-1 h-8 bg-amber-300 rounded-full animate-pulse opacity-60"></div>
                  <div className="w-1 h-6 bg-amber-300 rounded-full animate-pulse opacity-40" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-1 h-7 bg-amber-300 rounded-full animate-pulse opacity-50" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              بازگشت به صفحه اصلی
            </Link>
            <Link 
              to="/menu" 
              className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            >
              مشاهده منو
            </Link>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-4 h-4 bg-amber-600 rounded-full opacity-60 animate-bounce"></div>
          <div className="absolute top-40 left-20 w-3 h-3 bg-amber-700 rounded-full opacity-50 animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-amber-800 rounded-full opacity-40 animate-bounce" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-10 w-2 h-2 bg-amber-500 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1.5s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
