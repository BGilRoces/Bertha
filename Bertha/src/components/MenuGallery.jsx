import React, { useState } from 'react';
import { Coffee, Utensils, Cookie, ChevronLeft, ChevronRight } from 'lucide-react';


const heightMenu = 345;
const widthMenu = 680;

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
    <div className="space-y-8">
      <div className="bg-white rounded-3xl p-8 border border-[#8b9374]/20 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-[#8b9374] flex items-center gap-3 font-effra mb-0">
            <IconComponent className="text-[#8b9374]" />
            Menú
          </h2>
          <div className="flex gap-2">
            {Object.entries(menuData).map(([key]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-2 rounded-xl font-medium transition-all capitalize ${
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
        <div className="relative mb-6 group">
          <div
            className="relative rounded-2xl overflow-hidden mx-auto"
            style={{
              height: window.innerWidth >= 1536 ? `${heightMenu}px` : `calc(${heightMenu}px * 0.7)`,
              width: window.innerWidth >= 1536 ? `${widthMenu}px` : `calc(${widthMenu}px * 0.95)`
            }}
          >
            <img 
              src={currentImages[currentImage]} 
              alt={`${activeCategory} - ${currentImage}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-2xl"
              style={{
                height: window.innerWidth >= 1536 ? `${heightMenu}px` : `calc(${heightMenu}px * 0.7)`,
                width: window.innerWidth >= 1536 ? `${widthMenu}px` : `calc(${widthMenu}px * 0.95)`
              }}
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#8b9374]/40 to-transparent pointer-events-none" />
          </div>
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full p-2 text-black hover:bg-white/20 transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full p-2 text-black hover:bg-[#8b9374]/20 transition-all"
          >
            <ChevronRight size={20} />
          </button>
          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {currentImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImage ? 'bg-white/80 w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuGallery;
