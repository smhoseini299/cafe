import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

interface ProductWeight {
  weight: number;
  price: number;
}

interface Product {
  id: number;
  name: string;
  type: string;
  roastLevel: string;
  basePrice: number;
  rating: number;
  image: string;
  description: string;
  longDescription: string;
  origin: string;
  weights: ProductWeight[];
  reviews: Review[];
}

// Sample product data
const products: Product[] = [
  {
    id: 1,
    name: "قهوه ترک کلاسیک",
    type: "ترک",
    roastLevel: "تیره",
    basePrice: 85000,
    rating: 4.5,
    image: "./../public/image/capochino.jpg",
    description: "قهوه ترک سنتی با طعم غنی و پررنگ",
    longDescription: "قهوه ترک کلاسیک ما با دقت خاصی برشته و آسیاب می‌شود تا طعم غنی و اصیل قهوه ترک را به شما هدیه دهد. این قهوه با رایحه دلپذیر و عطر ماندگارش، تجربه‌ای بی‌نظیر از نوشیدن قهوه را برایتان به ارمغان می‌آورد.",
    origin: "ترکیه",
    weights: [
      { weight: 250, price: 85000 },
      { weight: 500, price: 160000 },
      { weight: 1000, price: 310000 }
    ],
    reviews: [
      {
        id: 1,
        user: "علی محمدی",
        rating: 5,
        comment: "طعم فوق‌العاده‌ای داره و بسته‌بندی شیکی هم داره",
        date: "۱۴۰۲/۰۵/۱۵"
      },
      {
        id: 2,
        user: "مریم احمدی",
        rating: 4,
        comment: "کیفیت خوبی داره ولی قیمتش یکم بالاست",
        date: "۱۴۰۲/۰۵/۱۰"
      }
    ]
  },
  // Add more products as needed
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === Number(id));
  const [selectedWeight, setSelectedWeight] = useState<ProductWeight | null>(
    product ? product.weights[0] : null
  );
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">محصول مورد نظر یافت نشد</h2>
        <button
          onClick={() => navigate('/shop')}
          className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors"
        >
          بازگشت به فروشگاه
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (selectedWeight) {
      addToCart({
        id: product.id,
        name: `${product.name} (${selectedWeight.weight} گرم)`,
        price: selectedWeight.price,
        image: product.image,
        initialQuantity: quantity
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-6">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[400px] object-cover rounded-lg shadow-md"
            />
            <span className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-amber-600">
              {product.type}
            </span>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-5 h-5 ${
                    index < product.rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="mr-2 text-gray-600">
                ({product.rating} از ۵)
              </span>
            </div>

            {/* Product Details */}
            <div className="space-y-4 mb-6">
              <p className="text-gray-600">{product.longDescription}</p>
              <div className="flex items-center">
                <span className="font-semibold ml-2">درجه برشت:</span>
                <span className="text-gray-600">{product.roastLevel}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold ml-2">منشأ:</span>
                <span className="text-gray-600">{product.origin}</span>
              </div>
            </div>

            {/* Weight Selection */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">انتخاب وزن:</h3>
              <div className="flex flex-wrap gap-3">
                {product.weights.map((weight) => (
                  <button
                    key={weight.weight}
                    onClick={() => setSelectedWeight(weight)}
                    className={`px-4 py-2 rounded-lg border-2 transition-all ${
                      selectedWeight?.weight === weight.weight
                        ? 'border-amber-500 bg-amber-50 text-amber-700'
                        : 'border-gray-200 hover:border-amber-200'
                    }`}
                  >
                    {weight.weight} گرم - {weight.price.toLocaleString()} تومان
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-gray-600 hover:text-amber-600"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-gray-600 hover:text-amber-600"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={!selectedWeight}
                className="flex-1 bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="border-t p-6">
          <h2 className="text-2xl font-bold mb-6">نظرات کاربران</h2>
          <div className="space-y-6">
            {product.reviews.map((review) => (
              <div key={review.id} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <span className="font-semibold ml-2">{review.user}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className={`w-4 h-4 ${
                            index < review.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm">{review.date}</span>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
