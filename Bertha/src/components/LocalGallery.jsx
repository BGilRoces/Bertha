import React, { useState } from 'react';
import { contactInfo } from '../data/menuData';
import { MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const heightLocal = 680;

const localImages = [
  '/src/assets/local/local1.jpg',
  '/src/assets/local/local2.jpg',
  '/src/assets/local/local3.jpg'
];

function LocalGallery() {
  const [currentLocalImage, setCurrentLocalImage] = useState(0);

  const nextLocalImage = () => {
    setCurrentLocalImage((prev) => (prev + 1) % localImages.length);
  };

  const prevLocalImage = () => {
    setCurrentLocalImage((prev) => (prev - 1 + localImages.length) % localImages.length);
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-3xl p-4 sm:p-6 xl:p-8 border border-[#8b9374]/20 shadow-xl">
        <h2 className="text-3xl font-bold text-[#8b9374] mb-6 flex items-center gap-3 font-effra">
          <MapPin className="text-[#8b9374]" />
          Nuestro Espacio
        </h2>
        {/* Image Carousel */}
        <div className="relative mb-6 group">
          <div
            className="relative rounded-2xl overflow-hidden mx-auto"
            style={{
              height: window.innerWidth >= 1536 ? `${heightLocal}px` : `calc(${heightLocal}px * 0.7)`
            }}
          >
            <img 
              src={localImages[currentLocalImage]} 
              alt="Interior del café"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-2xl"
              style={{
                height: window.innerWidth >= 1536 ? `${heightLocal}px` : `calc(${heightLocal}px * 0.7)`
              }}
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#8b9374]/40 to-transparent pointer-events-none" />
          </div>
          <button 
            onClick={prevLocalImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full p-2 text-black hover:bg-white/20 transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextLocalImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full p-2 text-black hover:bg-[#8b9374]/20 transition-all"
          >
            <ChevronRight size={20} />
          </button>
          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {localImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentLocalImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentLocalImage ? 'bg-white/80 w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
        {/* Local Info y Ubicación */}
        <div className="flex flex-col gap-y-4">
          <div className="bg-[#f6f6f1] rounded-2xl p-4 text-center border border-[#8b9374]/20 flex flex-col justify-between min-h-[72px]">
            <div className='flex flex-row justify-center items-center gap-1 mb-1'>
              <Clock className="text-[#8b9374]" size={24} />
              <p className="text-[#8b9374] font-bold text-xl leading-none">Horarios</p>
            </div>
            <p className="text-[#8b9374] font-medium text-lg">Martes a Domingo, 8hs a 20hs</p>
          </div>
          <div className="bg-[#f6f6f1] rounded-2xl p-4 text-center border border-[#8b9374]/20 flex flex-col justify-center min-h-[72px]">
            <div className='flex flex-row justify-center items-center gap-1 mb-1'>
              <MapPin className="text-[#8b9374]" size={24} />
              <p className="text-[#8b9374] font-bold text-xl leading-none">Ubicación</p>
            </div>
            <p className="text-[#8b9374] font-medium text-lg">{contactInfo.direccion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocalGallery;
