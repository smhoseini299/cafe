import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Clock, Share2 } from 'lucide-react';
import { blogPosts } from '../data/blogData';

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
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-8">
          <div 
            className="prose prose-lg max-w-none
              prose-headings:text-gray-900 prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b-2 prose-h2:border-amber-200
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
              prose-ul:list-disc prose-ul:mr-6 prose-ul:mb-4 prose-ul:text-gray-700
              prose-li:mb-2
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-table:w-full prose-table:border-collapse prose-table:my-6
              prose-th:border prose-th:border-gray-300 prose-th:bg-amber-50 prose-th:p-3 prose-th:text-right
              prose-td:border prose-td:border-gray-300 prose-td:p-3 prose-td:text-right"
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
