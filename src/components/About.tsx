import { assetPath } from '../utils/assetPath';
import React from 'react';
import { Coffee, Users, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Coffee className="w-12 h-12 text-amber-700" />,
      title: 'قهوه تازه روزانه',
      description: 'دانه‌های قهوه ما هر روز تازه برشته می‌شوند'
    },
    {
      icon: <Users className="w-12 h-12 text-amber-700" />,
      title: 'تیم حرفه‌ای',
      description: 'باریستاهای با تجربه و مهارت‌های بالا'
    },
    {
      icon: <Award className="w-12 h-12 text-amber-700" />,
      title: 'کیفیت برتر',
      description: 'دارای گواهینامه‌های بین‌المللی کیفیت'
    },
    {
      icon: <Heart className="w-12 h-12 text-amber-700" />,
      title: 'ساخته با عشق',
      description: 'هر فنجان با دقت و عشق آماده می‌شود'
    }
  ];

  const teamMembers = [
    {
      name: 'احمد محمدی',
      role: 'سرآشپز',
      image: assetPath('image/bar4.jpg')
    },
    {
      name: 'سارا کریمی',
      role: 'باریستا ارشد',
      image: assetPath('image/bar1.jpg')
    },
    {
      name: 'علی رضایی',
      role: 'متخصص برشته کاری',
      image: assetPath('image/bar2.png')
    }
  ];

  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">درباره کافه رویایی</h2>
          <p className="text-amber-700 text-lg max-w-3xl mx-auto leading-relaxed">
            از سال ۱۳۹۵، کافه رویایی با افتخار بهترین قهوه‌های جهان را به شما ارائه می‌دهد. 
            ما معتقدیم که هر فنجان قهوه باید تجربه‌ای فراموش‌نشدنی باشد.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={assetPath('image/cafee.jpeg')}
              alt="داخل کافه"
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-amber-900 mb-6">داستان ما</h3>
            <p className="text-amber-700 text-lg leading-relaxed mb-6">
              کافه رویایی با هدف ایجاد فضایی گرم و صمیمی برای عاشقان قهوه آغاز شد. 
              ما از بهترین مزارع قهوه دنیا دانه‌هایمان را تهیه می‌کنیم و با روش‌های 
              سنتی و مدرن آن‌ها را آماده می‌کنیم.
            </p>
            <p className="text-amber-700 text-lg leading-relaxed">
              فلسفه ما ساده است: کیفیت بالا، خدمات عالی و احترام به مشتریانمان. 
              هر روز تلاش می‌کنیم تا بهترین تجربه را برای شما فراهم کنیم.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">{feature.title}</h3>
              <p className="text-amber-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-amber-900 mb-8">تیم ما</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-amber-900 mb-2">{member.name}</h4>
                  <p className="text-amber-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;