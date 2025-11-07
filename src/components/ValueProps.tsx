import React from 'react';
import { Coffee, Clock, Award } from 'lucide-react';

const ValueProps: React.FC = () => {
  const features = [
    {
      icon: <Coffee className="w-8 h-8 text-amber-600" />,
      title: 'قهوه تازه روزانه',
      description: 'برشته‌کاری تازه هر روز'
    },
    {
      icon: <Clock className="w-8 h-8 text-amber-600" />,
      title: 'ارسال سریع',
      description: 'تحویل در کمتر از ۲۴ ساعت'
    },
    {
      icon: <Award className="w-8 h-8 text-amber-600" />,
      title: 'کیفیت تضمینی',
      description: 'دانه‌های ممتاز از سراسر جهان'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-50 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;

