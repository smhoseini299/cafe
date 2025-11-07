import { assetPath } from '../utils/assetPath';
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
      image: assetPath('image/cofe1.jpg'),
      description: "قهوه ترک سنتی با طعم غنی و پررنگ"
    },
    {
      id: 2,
      name: "اسپرسو ایتالیایی",
      type: "اسپرسو",
      roastLevel: "متوسط",
      price: 65000,
      rating: 4.8,
      image: assetPath('image/esperso.jpg'),
      description: "اسپرسو با کیفیت با عطر دلپذیر"
    },
    {
      id: 3,
      name: "عربیکا پریمیوم",
      type: "عربیکا",
      roastLevel: "روشن",
      price: 120000,
      rating: 4.9,
      image: assetPath('image/late2.jpg'),
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
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">فروشگاه</h1>
          <p className="text-gray-600">خرید آنلاین دانه قهوه و محصولات</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="جستجو در محصولات..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
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
            <div className="bg-white border border-gray-200 p-6 rounded-lg sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4">فیلترها</h2>

              {/* Coffee Type Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">نوع قهوه</h3>
                <div className="space-y-2">
                  {coffeeTypes.map((type) => (
                    <label key={type} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="coffeeType"
                        checked={filters.type === type}
                        onChange={() => handleFilterChange('type', type)}
                        className="w-4 h-4 text-amber-600 focus:ring-amber-600"
                      />
                      <span className="mr-2 text-sm text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Roast Level Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">درجه برشت</h3>
                <div className="space-y-2">
                  {roastLevels.map((level) => (
                    <label key={level} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="roastLevel"
                        checked={filters.roastLevel === level}
                        onChange={() => handleFilterChange('roastLevel', level)}
                        className="w-4 h-4 text-amber-600 focus:ring-amber-600"
                      />
                      <span className="mr-2 text-sm text-gray-700">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">محدوده قیمت</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label key={range.label} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="priceRange"
                        checked={filters.priceRange === range.value}
                        onChange={() => handleFilterChange('priceRange', range.value)}
                        className="w-4 h-4 text-amber-600 focus:ring-amber-600"
                      />
                      <span className="mr-2 text-sm text-gray-700">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">حداقل امتیاز</h3>
                <div className="flex items-center gap-1">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => handleFilterChange('minRating', rating)}
                      className={`p-1 transition-colors ${
                        filters.minRating === rating
                          ? 'text-amber-500'
                          : 'text-gray-300 hover:text-amber-400'
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
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
                <Link
                  key={product.id}
                  to={`/cafe/shop/${product.id}`}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-amber-600 transition-colors block"
                >
                  <div className="relative aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md text-xs font-medium text-gray-900">
                      {product.type}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className={`w-4 h-4 ${
                            index < Math.floor(product.rating)
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-xs text-gray-600 mr-1">({product.rating})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">
                        {product.price.toLocaleString()} تومان
                      </span>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(product);
                        }}
                        className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                      >
                        افزودن
                      </button>
                    </div>
                  </div>
                </Link>
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
    </div>
  );
};

export default Shop;
