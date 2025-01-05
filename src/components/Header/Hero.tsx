import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import HeroActions from './HeroActions';
import HeroFeatures from './HeroFeatures';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative">
      <Container className="flex-1 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-[48px] leading-tight font-bold text-white mb-4">
              能登で対応！<br />
              <span className="text-yellow-400">温かい電話代行サービス</span>
            </h1>
            <p className="text-xl text-gray-200 mb-2">
              オフィスの電話に代わりに対応して、メッセージでお知らせする電話代行サービス
            </p>
            <p className="text-base text-gray-200 mb-8">
              能登半島の復興支援と共に、あなたのビジネスの成長をお手伝いします。
            </p>
            <HeroActions />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <HeroFeatures />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;