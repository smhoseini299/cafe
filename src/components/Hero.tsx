import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-l from-amber-100 to-amber-200 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-right">
            <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 leading-tight">
              بهترین قهوه
              <br />
              <span className="text-amber-700">شهر</span>
            </h1>
            <p className="text-xl text-amber-800 mb-8 leading-relaxed">
              در کافه رویایی، ما بهترین دانه‌های قهوه را از سراسر جهان تهیه کرده و با عشق برای شما آماده می‌کنیم. طعمی فراموش‌نشدنی را تجربه کنید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                مشاهده منو
              </button>
              <button className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300">
                درباره ما
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="قهوه تازه"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-300 rounded-full opacity-50 z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-400 rounded-full opacity-30 z-0"></div>
          </div>
        </div>
      </div>

      {/* Floating Coffee Beans */}
      <div className="absolute top-20 right-10 w-4 h-4 bg-amber-600 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute top-40 left-20 w-3 h-3 bg-amber-700 rounded-full opacity-50 animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-amber-800 rounded-full opacity-40 animate-bounce" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default Hero;