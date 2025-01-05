import React from 'react';
import { Navbar } from './Navbar';
import Hero from './Hero';

export const Header = () => {
  return (
    <header className="relative min-h-screen">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/noto.jpg"
          alt="能登の風景"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-20">
        <Navbar />
        <Hero />
      </div>
    </header>
  );
};