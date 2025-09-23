import React, { useState } from 'react';
import { Plus, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');
  const { dispatch } = useCart();

  const categories = [
    { id: 'coffee', name: 'قهوه‌های داغ', icon: '☕' },
    { id: 'cold', name: 'نوشیدنی‌های سرد', icon: '🧊' },
    { id: 'dessert', name: 'دسرها', icon: '🍰' },
  ];

  const menuItems = {
    coffee: [
      {
        id: 1,
        name: 'اسپرسو کلاسیک',
        price: 25000,
        description: 'قهوه‌ای غنی و پرطعم با کرمای طلایی',
        image: './../public/image/esperso.jpg',
        rating: 4.8
      },
      {
        id: 2,
        name: 'کاپوچینو',
        price: 35000,
        description: 'ترکیبی عالی از اسپرسو و شیر بخارشده',
        image: './../public/image/capochino.jpg',
        rating: 4.9
      },
      {
        id: 3,
        name: 'لاته',
        price: 40000,
        description: 'قهوه نرم با شیر و کف شیر هنری',
        image: './../public/image/late2.jpg',
        rating: 4.7
      },
      {
        id: 4,
        name: 'موکا',
        price: 45000,
        description: 'قهوه با طعم شکلات و خامه',
        image: './../public/image/moca.jpg',
        rating: 4.6
      }
    ],
    cold: [
      {
        id: 5,
        name: 'آیس کافی',
        price: 30000,
        description: 'قهوه سرد با یخ و شیر',
        image: './../public/image/ice.jpg',
        rating: 4.5
      },
      {
        id: 6,
        name: 'فراپه',
        price: 35000,
        description: 'نوشیدنی یخی با طعم قهوه و خامه',
        image: '/../public/image/فراپه.png',
        rating: 4.4
      },
      {
        id: 7,
        name: 'شیک شکلات',
        price: 40000,
        description: 'شیک کرمی با طعم شکلات',
        image: './../public/image/sheik.jpg',
        rating: 4.7
      }
    ],
    dessert: [
      {
        id: 8,
        name: 'تیرامیسو',
        price: 50000,
        description: 'دسر ایتالیایی با طعم قهوه',
        image: './../public/image/tramiso.jpeg',
        rating: 4.9
      },
      {
        id: 9,
        name: 'چیزکیک شکلاتی',
        price: 45000,
        description: 'چیزکیک کرمی با روکش شکلات',
        image: './../public/image/chizkike.jpg',
        rating: 4.8
      },
      {
        id: 10,
        name: 'کروسان',
        price: 20000,
        description: 'کروسان تازه با کره',
        image: './../public/image/kike.jpg',
        rating: 4.3
      }
    ]
  };

  const addToCart = (item: any) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image
      }
    });
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('fa-IR') + ' تومان';
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">منوی کافه</h2>
          <p className="text-amber-700 text-lg">بهترین نوشیدنی‌ها و دسرهای ما را کشف کنید</p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-amber-100 p-2 rounded-xl flex gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-amber-700 text-white shadow-lg'
                    : 'text-amber-700 hover:bg-amber-200'
                }`}
              >
                <span className="ml-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems].map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-amber-700 text-white px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm">{item.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">{item.name}</h3>
                <p className="text-amber-600 mb-4 leading-relaxed">{item.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-800">
                    {formatPrice(item.price)}
                  </span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-amber-700 hover:bg-amber-800 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;