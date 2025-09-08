import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: 'brewing' | 'types' | 'health';
  readTime: number;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "راهنمای کامل دم کردن قهوه با روش پور اور",
    excerpt: "در این مقاله، تکنیک‌های حرفه‌ای دم کردن قهوه به روش پور اور را به صورت گام به گام یاد می‌گیرید.",
    content: "محتوای کامل مقاله...",
    image: "https://images.pexels.com/photos/7657823/pexels-photo-7657823.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "brewing",
    readTime: 8,
    date: "۱۵ شهریور ۱۴۰۲",
    author: {
      name: "علی کریمی",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    tags: ["قهوه", "دم‌آوری", "پور اور", "آموزش"]
  },
  {
    id: 2,
    title: "معرفی انواع قهوه عربیکا و تفاوت‌های آن‌ها",
    excerpt: "با انواع مختلف قهوه عربیکا و ویژگی‌های منحصر به فرد هر کدام آشنا شوید.",
    content: "محتوای کامل مقاله...",
    image: "https://images.pexels.com/photos/2074122/pexels-photo-2074122.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "types",
    readTime: 12,
    date: "۱۲ شهریور ۱۴۰۲",
    author: {
      name: "سارا محمدی",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    tags: ["قهوه", "عربیکا", "انواع قهوه"]
  },
  {
    id: 3,
    title: "تأثیر قهوه بر سلامت مغز و حافظه",
    excerpt: "بررسی جدیدترین تحقیقات علمی در مورد فواید نوشیدن قهوه برای سلامت مغز و تقویت حافظه",
    content: "محتوای کامل مقاله...",
    image: "https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "health",
    readTime: 10,
    date: "۱۰ شهریور ۱۴۰۲",
    author: {
      name: "دکتر محمد احمدی",
      avatar: "https://i.pravatar.cc/150?img=8"
    },
    tags: ["قهوه", "سلامتی", "مغز", "حافظه"]
  }
];

const CategoryIcon: React.FC<{ category: BlogPost['category'] }> = ({ category }) => {
  switch (category) {
    case 'brewing':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'types':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );
    case 'health':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
  }
};

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">وبلاگ کافه</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          آخرین مقالات و نکات مفید درباره دنیای قهوه، روش‌های دم‌آوری و سلامتی
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {(['brewing', 'types', 'health'] as const).map((category) => (
          <div
            key={category}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-amber-100 text-amber-600 rounded-lg">
                <CategoryIcon category={category} />
              </div>
              <h3 className="text-xl font-semibold">
                {category === 'brewing' && 'آموزش دم‌آوری'}
                {category === 'types' && 'انواع قهوه'}
                {category === 'health' && 'سلامتی'}
              </h3>
            </div>
            <p className="text-gray-600">
              {category === 'brewing' && 'آموزش تکنیک‌های مختلف دم کردن قهوه و نکات کلیدی'}
              {category === 'types' && 'معرفی و مقایسه انواع مختلف دانه‌های قهوه'}
              {category === 'health' && 'تأثیرات قهوه بر سلامتی و نکات مصرف'}
            </p>
          </div>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Link to={`/blog/${post.id}`} className="block">
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-amber-600">
                  {post.category === 'brewing' && 'آموزش دم‌آوری'}
                  {post.category === 'types' && 'انواع قهوه'}
                  {post.category === 'health' && 'سلامتی'}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {post.author.name}
                      </p>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">
                    {post.readTime} دقیقه مطالعه
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
