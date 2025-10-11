import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import Menu from './Menu';
import Shop from './Shop';
import About from './About';
import Contact from './Contact';
import ProductDetail from './ProductDetail';
import FeaturedProducts from './FeaturedProducts';
import Blog from './Blog';
import BlogPost from './BlogPost';
import NotFound from './NotFound';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Hero />
          <FeaturedProducts />
          <Menu />
          <About />
        </>
      } />
      <Route path="/menu" element={<Menu />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:id" element={<ProductDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogPost />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
