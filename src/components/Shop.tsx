import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface Product {
  id: number;
  name: string;
  type: string;
  roastLevel: string;
  price: number;
  rating: number;
  image: string;
  description: string;
}

interface FilterState {
  type: string;
  roastLevel: string;
  priceRange: string;
  minRating: number;
  searchQuery: string;
}

const Shop: React.FC = () => {
  const { addToCart } = useCart();
  
  // Sample product data
  const products: Product[] = [
    {
      id: 1,
      name: "قهوه ترک کلاسیک",
      type: "ترک",
      roastLevel: "تیره",
      price: 85000,
      rating: 4.5,
      image: "https://images.pexels.com/photos/7657823/pexels-photo-7657823.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "قهوه ترک سنتی با طعم غنی و پررنگ"
    },
    {
      id: 2,
      name: "اسپرسو ایتالیایی",
      type: "اسپرسو",
      roastLevel: "متوسط",
      price: 65000,
      rating: 4.8,
      image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "اسپرسو با کیفیت با عطر دلپذیر"
    },
    {
      id: 3,
      name: "عربیکا پریمیوم",
      type: "عربیکا",
      roastLevel: "روشن",
      price: 120000,
      rating: 4.9,
      image: "https://images.pexels.com/photos/2074122/pexels-photo-2074122.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "دانه‌های عربیکای مرغوب با طعمی متعادل"
    },
    // Add more products as needed
  ];

  const [filters, setFilters] = useState<FilterState>({
    type: '',
    roastLevel: '',
    priceRange: '',
    minRating: 0,
    searchQuery: '',
  });

  const coffeeTypes = ["همه", "ترک", "اسپرسو", "عربیکا", "روبوستا"];
  const roastLevels = ["همه", "روشن", "متوسط", "تیره"];
  const priceRanges = [
    { label: "همه", value: "" },
    { label: "کمتر از ۵۰ هزار تومان", value: "0-50000" },
    { label: "۵۰ تا ۱۰۰ هزار تومان", value: "50000-100000" },
    { label: "بیشتر از ۱۰۰ هزار تومان", value: "100000-999999" },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesType = !filters.type || filters.type === "همه" || product.type === filters.type;
      const matchesRoast = !filters.roastLevel || filters.roastLevel === "همه" || product.roastLevel === filters.roastLevel;
      const matchesRating = product.rating >= filters.minRating;
      const matchesSearch = product.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(filters.searchQuery.toLowerCase());

      let matchesPrice = true;
      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split('-').map(Number);
        matchesPrice = product.price >= min && product.price <= max;
      }

      return matchesType && matchesRoast && matchesPrice && matchesRating && matchesSearch;
    });
  }, [filters, products]);

  const handleFilterChange = (key: keyof FilterState, value: string | number) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="جستجو در محصولات..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            value={filters.searchQuery}
            onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
          />
          <svg
            className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">فیلترها</h2>
            
            {/* Coffee Type Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">نوع قهوه</h3>
              <div className="space-y-2">
                {coffeeTypes.map((type) => (
                  <label key={type} className="flex items-center">
                    <input
                      type="radio"
                      name="coffeeType"
                      checked={filters.type === type}
                      onChange={() => handleFilterChange('type', type)}
                      className="form-radio text-amber-600"
                    />
                    <span className="mr-2">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Roast Level Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">درجه برشت</h3>
              <div className="space-y-2">
                {roastLevels.map((level) => (
                  <label key={level} className="flex items-center">
                    <input
                      type="radio"
                      name="roastLevel"
                      checked={filters.roastLevel === level}
                      onChange={() => handleFilterChange('roastLevel', level)}
                      className="form-radio text-amber-600"
                    />
                    <span className="mr-2">{level}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">محدوده قیمت</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <label key={range.label} className="flex items-center">
                    <input
                      type="radio"
                      name="priceRange"
                      checked={filters.priceRange === range.value}
                      onChange={() => handleFilterChange('priceRange', range.value)}
                      className="form-radio text-amber-600"
                    />
                    <span className="mr-2">{range.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Rating Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">حداقل امتیاز</h3>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => handleFilterChange('minRating', rating)}
                    className={`p-2 ${
                      filters.minRating === rating
                        ? 'text-amber-500'
                        : 'text-gray-400'
                    }`}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
              >
                <Link to={`/shop/${product.id}`} className="block relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="bg-white px-2 py-1 rounded-full text-sm font-semibold text-amber-600">
                      {product.type}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className={`w-4 h-4 ${
                            index < Math.floor(product.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-sm text-gray-600 mr-1">
                        ({product.rating})
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-4 pt-0">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-amber-600">
                      {product.price.toLocaleString()} تومان
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                    >
                      افزودن به سبد
                    </button>
                  </div>
                </div>
                <div className="relative h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="bg-white px-2 py-1 rounded-full text-sm font-semibold text-amber-600">
                      {product.type}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className={`w-4 h-4 ${
                          index < Math.floor(product.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-sm text-gray-600 mr-1">
                      ({product.rating})
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold text-amber-600">
                      {product.price.toLocaleString()} تومان
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                    >
                      افزودن به سبد
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">محصولی با این مشخصات یافت نشد</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
