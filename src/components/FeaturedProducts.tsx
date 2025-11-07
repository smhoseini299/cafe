import { assetPath } from '../utils/assetPath';
import { Link } from 'react-router-dom';
import React from 'react';

const FeaturedProducts: React.FC = () => {
  const bestSellers = [
    {
      id: 1,
      name: "کاپوچینو کلاسیک",
      price: 35000,
      image: assetPath('image/capochino.jpg'),
    },
    {
      id: 2,
      name: "اسپرسو ایتالیایی",
      price: 25000,
      image: assetPath('image/esperso.jpg'),
    },
    {
      id: 3,
      name: "موکا شکلاتی",
      price: 45000,
      image: assetPath('image/moca.jpg'),
    },
    {
      id: 4,
      name: "لاته دابل",
      price: 40000,
      image: assetPath('image/late2.jpg'),
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">محصولات محبوب</h2>
          <p className="text-gray-600">پرطرفدارترین نوشیدنی‌های کافه رویایی</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {bestSellers.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-amber-600 transition-colors group">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.price.toLocaleString('fa-IR')} تومان</p>
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-md text-sm font-medium transition-colors">
                  افزودن به سبد
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/cafe/menu"
            className="inline-block text-amber-600 hover:text-amber-700 font-medium"
          >
            مشاهده منوی کامل ←
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
