import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Coffee } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  setIsCartOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setIsCartOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { state } = useCart();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const menuItems = [
    { path: '/cafe', label: 'صفحه اصلی' },
    { path: '/cafe/shop', label: 'فروشگاه' },
    { path: '/cafe/menu', label: 'منو' },
    { path: '/cafe/blog', label: 'وبلاگ' },
    { path: '/cafe/about', label: 'درباره ما' },
    { path: '/cafe/contact', label: 'تماس با ما' },
  ];

  return (
    <header className="bg-amber-900 text-white shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/cafe" className="flex items-center gap-2">
            <Coffee className="w-8 h-8 text-amber-300" />
            <h1 className="text-2xl font-bold">کافه رویایی</h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-all duration-300 hover:bg-amber-800 ${
                  isActive(item.path) ? 'bg-amber-700' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-lg bg-amber-800 hover:bg-amber-700 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-amber-800">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-right px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.path) ? 'bg-amber-700' : 'hover:bg-amber-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;