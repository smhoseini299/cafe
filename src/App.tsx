import  { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import AppRoutes from './components/AppRoutes';
import { CartProvider } from './context/CartContext';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-white font-sans" dir="rtl">
          <Header 
            setIsCartOpen={setIsCartOpen}
          />
          <main>
            <AppRoutes />
          </main>
          <Footer />
          <Cart 
            isOpen={isCartOpen} 
            onClose={() => setIsCartOpen(false)} 
          />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;