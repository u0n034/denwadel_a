import React from 'react';
import { FiMapPin, FiCreditCard, FiPhone, FiSliders } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { PRICING } from '../../constants/pricing';

const features = [
  {
    icon: <FiMapPin className="w-5 h-5" />,
    title: "地域密着の運営",
    description: "代行業務を能登のオフィスで行い、地元の雇用を支援します。"
  },
  {
    icon: <FiCreditCard className="w-5 h-5" />,
    title: "シンプルなサブスクモデル",
    description: `月額${PRICING.MONTHLY_FEE}円（${PRICING.CALLS_INCLUDED}コール）${PRICING.BUSINESS_HOURS}に対応可能です。`
  },
  {
    icon: <FiPhone className="w-5 h-5" />,
    title: "プロフェッショナルな一次受付",
    description: "経験豊富なスタッフが丁寧に対応し、あなたのビジネスをしっかりサポートします。"
  },
  {
    icon: <FiSliders className="w-5 h-5" />,
    title: "柔軟な対応",
    description: "必要に応じて追加コールも簡単に利用でき、コストパフォーマンスに優れています。"
  }
];

const HeroFeatures = () => {
  return (
    <div className="space-y-6">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white/95 backdrop-blur-sm rounded-lg p-4"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white">
              {feature.icon}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroFeatures; 