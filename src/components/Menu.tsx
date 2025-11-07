import React, { useState } from 'react';
import { Plus, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { assetPath } from '../utils/assetPath';

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
        image: assetPath('image/esperso.jpg'),
        rating: 4.8
      },
      {
        id: 2,
        name: 'کاپوچینو',
        price: 35000,
        description: 'ترکیبی عالی از اسپرسو و شیر بخارشده',
        image: assetPath('image/capochino.jpg'),
        rating: 4.9
      },
      {
        id: 3,
        name: 'لاته',
        price: 40000,
        description: 'قهوه نرم با شیر و کف شیر هنری',
        image: assetPath('image/late2.jpg'),
        rating: 4.7
      },
      {
        id: 4,
        name: 'موکا',
        price: 45000,
        description: 'قهوه با طعم شکلات و خامه',
        image: assetPath('image/moca.jpg'),
        rating: 4.6
      }
    ],
    cold: [
      {
        id: 5,
        name: 'آیس کافی',
        price: 30000,
        description: 'قهوه سرد با یخ و شیر',
        image: assetPath('image/ice.jpg'),
        rating: 4.5
      },
      {
        id: 6,
        name: 'فراپه',
        price: 35000,
        description: 'نوشیدنی یخی با طعم قهوه و خامه',
        image: assetPath('image/فراپه.png'),
        rating: 4.4
      },
      {
        id: 7,
        name: 'شیک شکلات',
        price: 40000,
        description: 'شیک کرمی با طعم شکلات',
        image: assetPath('image/sheik.jpg'),
        rating: 4.7
      }
    ],
    dessert: [
      {
        id: 8,
        name: 'تیرامیسو',
        price: 50000,
        description: 'دسر ایتالیایی با طعم قهوه',
        image: assetPath('image/tramiso.jpeg'),
        rating: 4.9
      },
      {
        id: 9,
        name: 'چیزکیک شکلاتی',
        price: 45000,
        description: 'چیزکیک کرمی با روکش شکلات',
        image: assetPath('image/chizkike.jpg'),
        rating: 4.8
      },
      {
        id: 10,
        name: 'کروسان',
        price: 20000,
        description: 'کروسان تازه با کره',
        image: assetPath('image/kike.jpg'),
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">منوی کافه</h2>
          <p className="text-gray-600">انتخاب کنید از میان نوشیدنی‌ها و دسرهای ما</p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white border border-gray-200 rounded-lg p-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-md font-medium text-sm transition-colors ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white'
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                <span className="ml-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {menuItems[activeCategory as keyof typeof menuItems].map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-amber-600 transition-colors"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-medium text-gray-900">{item.rating}</span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">
                    {formatPrice(item.price)}
                  </span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-amber-600 hover:bg-amber-700 text-white p-2 rounded-md transition-colors"
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