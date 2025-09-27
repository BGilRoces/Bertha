import React, { useState } from 'react';
import { Coffee, Utensils, Cookie, ChevronLeft, ChevronRight } from 'lucide-react';

const menuData = {
  cafes: {
    icon: Coffee,
    images: [
      '/src/assets/menu/cafes/cafe1.jpg',
      '/src/assets/menu/cafes/cafe2.jpg',
      '/src/assets/menu/cafes/cafe3.jpg',
      '/src/assets/menu/cafes/cafe4.jpg',
      '/src/assets/menu/cafes/matcha.jpg'
    ]
  },
  platos: {
    icon: Utensils,
    images: [
      '/src/assets/menu/comidas/plato2.jpg',
      '/src/assets/menu/comidas/plato3.jpg',
      '/src/assets/menu/comidas/plato4.jpg',
      '/src/assets/menu/comidas/plato5.jpg',
      '/src/assets/menu/comidas/bagelTrucha.jpg',
      '/src/assets/menu/comidas/milanesaconfideos.jpg',
      '/src/assets/menu/comidas/noquis.jpg',
      '/src/assets/menu/comidas/tostado.jpg'
    ]
  },
  postres: {
    icon: Cookie,
    images: [
      '/src/assets/menu/comidas/cookies.jpg',
      '/src/assets/menu/comidas/postre.jpg',
      '/src/assets/menu/comidas/tortaVasca.jpg',
      '/src/assets/menu/carta/menu3.jpg',
      '/src/assets/menu/carta/menu4.jpg'
    ]
  }
};

function MenuGallery() {
  const [activeCategory, setActiveCategory] = useState('cafes');
  const [currentImage, setCurrentImage] = useState(0);
  const currentImages = menuData[activeCategory].images;
  const IconComponent = menuData[activeCategory].icon;

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % currentImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + currentImages.length) % currentImages.length);

  // Reset image index when category changes
  React.useEffect(() => {
    setCurrentImage(0);
  }, [activeCategory]);

  return (
    <div className="bg-white rounded-xl 2xl:rounded-3xl p-2 sm:p-3 2xl:p-6 border border-[#8b9374]/20 shadow-lg 2xl:shadow-xl">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-2 sm:mb-3 2xl:mb-6 gap-1 sm:gap-2 2xl:gap-3">
        <h2 className="text-sm sm:text-base 2xl:text-3xl font-bold text-[#8b9374] flex items-center gap-1 sm:gap-2 2xl:gap-3 font-effra">
          <IconComponent className="text-[#8b9374] w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6" />
          Menú
        </h2>
        <div className="flex gap-1 sm:gap-1.5 2xl:gap-2">
          {Object.entries(menuData).map(([key]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-1.5 py-1 sm:px-2.5 sm:py-1.5 2xl:px-3 2xl:py-2 rounded-md sm:rounded-lg 2xl:rounded-xl font-medium transition-all capitalize text-xs 2xl:text-sm ${
                activeCategory === key 
                  ? 'bg-[#8b9374] text-white shadow-lg' 
                  : 'bg-[#f6f6f1] text-[#8b9374] hover:bg-[#8b9374]/10'
              }`}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
      
      {/* Image Carousel */}
      <div className="relative group">
        <div className="relative rounded-lg 2xl:rounded-2xl overflow-hidden w-full h-full bg-[#f6f6f1]">
          <div className="aspect-[16/9] w-full">
            <img
              src={currentImages[currentImage]}
              alt={`${activeCategory} - ${currentImage}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#8b9374]/40 to-transparent pointer-events-none" />
        </div>
        
        <button 
          onClick={prevImage}
          className="absolute left-1 sm:left-2 2xl:left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full p-1 sm:p-1.5 2xl:p-2 text-black hover:bg-white/20 transition-all"
        >
          <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5" />
        </button>
        
        <button 
          onClick={nextImage}
          className="absolute right-1 sm:right-2 2xl:right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full p-1 sm:p-1.5 2xl:p-2 text-black hover:bg-[#8b9374]/20 transition-all"
        >
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5" />
        </button>
        
        {/* Dots indicator */}
        <div className="absolute bottom-1 sm:bottom-2 2xl:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5 2xl:gap-2">
          {currentImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-1 h-1 sm:w-1.5 sm:h-1.5 2xl:w-2 2xl:h-2 rounded-full transition-all ${
                index === currentImage ? 'bg-white/80 w-4 sm:w-6 2xl:w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuGallery;