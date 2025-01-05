import React from 'react';
import { motion } from 'framer-motion';

const HeroActions = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-md hover:bg-yellow-500 transition-colors text-lg font-bold"
        onClick={() => {
          const element = document.getElementById('mission');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        私たちの使命
      </motion.button>
    </div>
  );
};

export default HeroActions; 