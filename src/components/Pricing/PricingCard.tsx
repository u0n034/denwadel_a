import React from 'react';
import { PricingHeader } from './PricingHeader';
import { PricingFeatures } from './PricingFeatures';

export const PricingCard = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <PricingHeader />
        <div className="p-8">
          <PricingFeatures />
        </div>
      </div>
    </div>
  );
};