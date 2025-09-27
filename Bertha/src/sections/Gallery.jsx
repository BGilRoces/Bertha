import React from 'react';
import OptionsCard from '../components/OptionsCard';
import StaticCard from '../components/StaticCard';

const Gallery = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 md:items-stretch">
          {/* Interactive options card */}
          <div className="order-1 md:order-1">
            <OptionsCard />
          </div>

          {/* Static carousel card */}
          <div className="order-2 md:order-2">
            <StaticCard />
          </div>
        </div>
        </div>
    </section>
  );
};

export default Gallery;