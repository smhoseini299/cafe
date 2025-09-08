import React from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: number, newQuantity: number) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity: newQuantity }
    });
  };

  const removeItem = (id: number) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: id
    });
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('fa-IR') + ' تومان';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      {/* Cart Sidebar */}
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-amber-200">
            <h2 className="text-xl font-bold text-amber-900 flex items-center gap-2">
              <ShoppingBag className="w-6 h-6" />
              سبد خرید
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-amber-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-amber-700" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {state.items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-amber-300 mx-auto mb-4" />
                <p className="text-amber-600 text-lg">سبد خرید شما خالی است</p>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-amber-50 p-4 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-amber-900 mb-1">{item.name}</h3>
                      <p className="text-amber-600 text-sm mb-2">
                        {formatPrice(item.price)}
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 bg-amber-200 hover:bg-amber-300 rounded-full flex items-center justify-center transition-colors"
                          >
                            <Minus className="w-4 h-4 text-amber-700" />
                          </button>
                          <span className="w-8 text-center font-semibold text-amber-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 bg-amber-200 hover:bg-amber-300 rounded-full flex items-center justify-center transition-colors"
                          >
                            <Plus className="w-4 h-4 text-amber-700" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="p-6 border-t border-amber-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-amber-900">مجموع:</span>
                <span className="text-xl font-bold text-amber-900">
                  {formatPrice(state.total)}
                </span>
              </div>
              
              <button className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-lg font-semibold transition-colors">
                ادامه خرید
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;