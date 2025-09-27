import React from 'react';

const Card = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col${className}`}>
      <div className="px-6 py-4 flex-1 flex flex-col">
        <h2 className="text-2xl font-bold text-[#8b9374]">{title}</h2>
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;