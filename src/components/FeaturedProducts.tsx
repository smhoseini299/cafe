import React from 'react';

const FeaturedProducts: React.FC = () => {
  const specialOffer = {
    title: "پیشنهاد ویژه امروز",
    description: "لاته دابل شات با ۳۰٪ تخفیف",
    image: "./../public/image/late2.jpg"
  };

  const bestSellers = [
    {
      id: 1,
      name: "کاپوچینو",
      price: "۶۵,۰۰۰",
      image: "./../public/image/capochino.jpg",
      tag: "پرفروش"
    },
    {
      id: 2,
      name: "اسپرسو",
      price: "۴۵,۰۰۰",
      image: "./../public/image/esperso.jpg",
      tag: "کلاسیک"
    },
    {
      id: 3,
      name: "موکا",
      price: "۷۵,۰۰۰",
      image: "./../public/image/moca.jpg",
      tag: "جدید"
    }
  ];

  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        {/* Special Offer */}
        <div className="mb-16 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                پیشنهاد ویژه
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{specialOffer.title}</h2>
              <p className="text-xl text-gray-600 mb-6">{specialOffer.description}</p>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
                همین حالا سفارش دهید
              </button>
            </div>
            <div className="relative h-64 md:h-full">
              <img
                src={specialOffer.image}
                alt="پیشنهاد ویژه"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Best Sellers Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">محصولات پرفروش</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {bestSellers.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {product.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-amber-600 font-bold">{product.price} تومان</p>
                  <button className="mt-4 w-full bg-amber-100 hover:bg-amber-200 text-amber-800 px-4 py-2 rounded-lg font-semibold transition-colors duration-300">
                    افزودن به سبد خرید
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
