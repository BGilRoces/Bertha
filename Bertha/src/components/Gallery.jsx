import React from 'react'

const IMAGES = [
  '/src/assets/menu/comidas/plato2.jpg',
  '/src/assets/menu/comidas/postre.jpg',
  '/src/assets/local/local1.jpg',
  '/src/assets/extras/evento.jpg',
  '/src/assets/menu/cafes/matcha.jpg',
  '/src/assets/menu/comidas/tortaVasca.jpg',
]

function Gallery() {
  return (
    <section className="py-16 bg-[#f6f6f1]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-[#8b9374] mb-6 text-center">Momentos en Bertha</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {IMAGES.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl shadow-md">
              <img src={src} alt={`gal-${i}`} className="w-full h-48 object-cover transform hover:scale-105 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
