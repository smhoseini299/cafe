import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Clock, Share2 } from 'lucide-react';

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

// برای نمونه از همان مقالات قبلی استفاده می‌کنیم
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "راهنمای کامل دم کردن قهوه با روش پور اور",
    excerpt: "در این مقاله، تکنیک‌های حرفه‌ای دم کردن قهوه به روش پور اور را به صورت گام به گام یاد می‌گیرید.",
    content: `
      <h2>مقدمه</h2>
      <p>دم کردن قهوه به روش پور اور یکی از محبوب‌ترین روش‌های تهیه قهوه در بین علاقه‌مندان به قهوه است. این روش به شما اجازه می‌دهد کنترل کاملی بر روی فرایند دم‌آوری داشته باشید.</p>

      <h2>وسایل مورد نیاز</h2>
      <ul>
        <li>فیلتر پور اور</li>
        <li>قهوه آسیاب شده</li>
        <li>کتری</li>
        <li>ترازو</li>
      </ul>

      <h2>مراحل دم کردن</h2>
      <p>1. آب را تا دمای 92-96 درجه سانتیگراد گرم کنید.</p>
      <p>2. فیلتر را با آب گرم آبکشی کنید.</p>
      <p>3. 20 گرم قهوه آسیاب شده را در فیلتر بریزید.</p>
      <p>4. به آرامی 50 میلی‌لیتر آب روی قهوه بریزید و 30 ثانیه صبر کنید.</p>
      <p>5. به تدریج بقیه آب را اضافه کنید تا به 300 میلی‌لیتر برسید.</p>

      <h2>نکات کلیدی</h2>
      <p>- درجه آسیاب قهوه باید متوسط باشد</p>
      <p>- زمان کل فرایند باید حدود 3 دقیقه باشد</p>
      <p>- دما و سرعت ریختن آب بسیار مهم است</p>
    `,
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
  // ... سایر مقالات
];

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">مقاله مورد نظر یافت نشد</h2>
        <Link
          to="/blog"
          className="inline-flex items-center text-amber-600 hover:text-amber-700"
        >
          <ChevronRight className="w-5 h-5" />
          <span>بازگشت به وبلاگ</span>
        </Link>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
        <Link to="/" className="hover:text-amber-600">خانه</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/blog" className="hover:text-amber-600">وبلاگ</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900">{post.title}</span>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto">
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 right-0 p-8 text-white">
            <div className="bg-amber-600 text-white text-sm px-3 py-1 rounded-full inline-block mb-4">
              {post.category === 'brewing' && 'آموزش دم‌آوری'}
              {post.category === 'types' && 'انواع قهوه'}
              {post.category === 'health' && 'سلامتی'}
            </div>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{post.author.name}</p>
                  <p className="text-sm text-gray-200">{post.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime} دقیقه مطالعه</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div 
            className="prose prose-lg prose-amber max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Tags & Share */}
        <div className="flex items-center justify-between py-6 border-t">
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <button className="flex items-center gap-2 text-gray-600 hover:text-amber-600">
            <Share2 className="w-5 h-5" />
            <span>اشتراک‌گذاری</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
