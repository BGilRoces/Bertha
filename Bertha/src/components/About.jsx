import React, { useState } from 'react';
import { Coffee, Utensils, Cookie, MapPin, Clock, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const AboutBertha = () => {
  const [activeCategory, setActiveCategory] = useState('cafes');
  const [currentLocalImage, setCurrentLocalImage] = useState(0);
  const [currentMenuImage, setCurrentMenuImage] = useState(0);

  const localImages = [
    '/src/assets/local/local1.jpg',
    '/src/assets/local/local2.jpg',
    '/src/assets/local/local3.jpg'
  ];

  const menuData = {
    cafes: {
      icon: Coffee,
      color: 'from-[#8b9374] to-[#b6c1a2]',
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
      color: 'from-[#f2c572] to-[#8b9374]',
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
      color: 'from-[#b6c1a2] to-[#f2c572]',
      images: [
        '/src/assets/menu/comidas/cookies.jpg',
        '/src/assets/menu/comidas/postre.jpg',
        '/src/assets/menu/comidas/tortaVasca.jpg',
        '/src/assets/menu/carta/menu3.jpg',
        '/src/assets/menu/carta/menu4.jpg'
      ]
    }
  };

  const nextLocalImage = () => {
    setCurrentLocalImage((prev) => (prev + 1) % localImages.length);
  };

  const prevLocalImage = () => {
    setCurrentLocalImage((prev) => (prev - 1 + localImages.length) % localImages.length);
  };

  const nextMenuImage = () => {
    const images = menuData[activeCategory].images;
    setCurrentMenuImage((prev) => (prev + 1) % images.length);
  };

  const prevMenuImage = () => {
    const images = menuData[activeCategory].images;
    setCurrentMenuImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Reset menu image index when category changes
  React.useEffect(() => {
    setCurrentMenuImage(0);
  }, [activeCategory]);

  const IconComponent = menuData[activeCategory].icon;

  return (
  <section className="min-h-screen bg-gradient-to-br from-[#f6f6f1] via-[#f6f6f1] to-[#f6f6f1] py-20">
  <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-[#8b9374] mb-6 tracking-tight font-effra">
            Café <span className="bg-gradient-to-r from-[#8b9374] to-[#f2c572] bg-clip-text text-transparent">Bertha</span>
          </h1>
          <p className="text-xl text-[#8b9374] max-w-2xl mx-auto font-marydale">
            El sabor de la tradición, la calidez del barrio y el café como protagonista
          </p>
        </div>

        {/* Main Content Grid */}
  <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Local Section */}
          <div className="space-y-8 flex flex-col h-full">
            <div className="bg-white rounded-3xl p-8 border border-[#8b9374]/20 shadow-xl flex flex-col h-full">
              <h2 className="text-3xl font-bold text-[#8b9374] mb-6 flex items-center gap-3 font-effra">
                <MapPin className="text-[#8b9374]" />
                Nuestro Espacio
              </h2>
              
              {/* Image Carousel */}
              <div className="relative mb-6 group">
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img 
                    src={localImages[currentLocalImage]} 
                    alt="Interior del café"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8b9374]/40 to-transparent" />
                </div>
                
                <button 
                  onClick={prevLocalImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#8b9374]/20 backdrop-blur-sm rounded-full p-2 text-[#8b9374] hover:bg-[#8b9374]/30 transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <button 
                  onClick={nextLocalImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#8b9374]/20 backdrop-blur-sm rounded-full p-2 text-[#8b9374] hover:bg-[#8b9374]/30 transition-all"
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
                        index === currentLocalImage ? 'bg-[#8b9374] w-8' : 'bg-[#8b9374]/30'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Local Info y Ubicación */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#f6f6f1] rounded-2xl p-4 text-center border border-[#8b9374]/20 flex flex-col justify-between min-h-[72px]">
                  <Clock className="text-[#8b9374] mx-auto mb-2" size={24} />
                  <p className="text-[#8b9374] font-semibold">Horarios</p>
                  <p className="text-gray-700 text-sm">Lun-Dom 7AM-10PM</p>
                </div>
                <div className="bg-[#f6f6f1] rounded-2xl p-4 text-center border border-[#8b9374]/20 flex flex-col justify-between min-h-[72px]">
                  <Star className="text-[#8b9374] mx-auto mb-2" size={24} />
                  <p className="text-[#8b9374] font-semibold">Rating</p>
                  <p className="text-gray-700 text-sm">4.8/5 ⭐</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <div className="bg-[#f6f6f1] rounded-2xl p-4 text-center border border-[#8b9374]/20 flex flex-col justify-center min-h-[56px] w-full">
                  <MapPin className="text-[#8b9374] mx-auto mb-2" size={24} />
                  <p className="text-[#8b9374] font-semibold">Ubicación</p>
                  <p className="text-gray-700 text-sm">Av. Ejemplo 123, Barrio, Ciudad</p>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Section */}
          <div className="space-y-8 flex flex-col h-full">
            <div className="bg-white rounded-3xl p-8 border border-[#8b9374]/20 shadow-xl flex flex-col h-full">
              <h2 className="text-3xl font-bold text-[#8b9374] mb-8 flex items-center gap-3 font-effra">
                <IconComponent className="text-[#8b9374]" />
                Nuestro Menú
              </h2>

              {/* Category Tabs */}
              <div className="flex gap-2 mb-8 p-1 bg-[#8b9374]/10 rounded-2xl">
                {Object.entries(menuData).map(([key, category]) => {
                  const CategoryIcon = category.icon;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveCategory(key)}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl transition-all font-semibold capitalize ${
                        activeCategory === key 
                          ? `bg-gradient-to-r ${category.color} text-[#8b9374] shadow-lg shadow-[#8b9374]/25` 
                          : 'text-[#8b9374]/60 hover:text-[#8b9374] hover:bg-[#8b9374]/10'
                      }`}
                    >
                      <CategoryIcon size={18} />
                      {key}
                    </button>
                  );
                })}
              </div>

              {/* Menu Images Carousel */}
              <div className="relative mb-6 group">
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img 
                    src={menuData[activeCategory].images[currentMenuImage]} 
                    alt={`${activeCategory} del café`}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#8b9374]/60 via-transparent to-transparent`} />
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${menuData[activeCategory].color} px-4 py-2 rounded-full text-[#8b9374] font-semibold capitalize shadow-lg`}>
                    <IconComponent size={16} className="inline mr-2" />
                    {activeCategory}
                  </div>
                </div>
                
                <button 
                  onClick={prevMenuImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#8b9374]/20 backdrop-blur-sm rounded-full p-2 text-[#8b9374] hover:bg-[#8b9374]/30 transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <button 
                  onClick={nextMenuImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#8b9374]/20 backdrop-blur-sm rounded-full p-2 text-[#8b9374] hover:bg-[#8b9374]/30 transition-all"
                >
                  <ChevronRight size={20} />
                </button>
                
                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {menuData[activeCategory].images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMenuImage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentMenuImage ? 'bg-[#8b9374] w-8' : 'bg-[#8b9374]/30'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Image Counter */}
              <div className="text-center mb-6">
                <p className="text-[#8b9374] text-sm">
                  {currentMenuImage + 1} de {menuData[activeCategory].images.length} fotos
                </p>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <button className={`bg-gradient-to-r ${menuData[activeCategory].color} text-[#8b9374] px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-[#8b9374]/25 transition-all transform hover:scale-105`}>
                  Explorar {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ...sin CTA inferior... */}
      </div>
    </section>
  );
};

export default AboutBertha;