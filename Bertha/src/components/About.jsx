function About() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl mb-6 text-[#8b9374] font-serif">Nuestra Historia</h2>
            <p className="text-lg mb-4 text-gray-700 leading-relaxed">Desde 1985, Café Barrio ha sido el corazón de Belgrano. Lo que comenzó como un pequeño local familiar se ha convertido en el punto de encuentro preferido del barrio.</p>
            <p className="text-lg mb-4 text-gray-700 leading-relaxed">Mantenemos la calidez de siempre, pero con la calidad y presentación que merecés. Cada café es preparado con granos seleccionados, cada pastel horneado con amor.</p>
            <p className="text-lg text-gray-700 leading-relaxed">Porque creemos que los mejores momentos se comparten alrededor de una buena taza de café.</p>
          </div>

          <div className="bg-[#8b9374] h-96 rounded-xl flex items-center justify-center text-[#f2f2e9] p-8 text-center">
            <div>
              <h3 className="text-2xl mb-3 font-serif">40 años</h3>
              <p>sirviendo el mejor café del barrio</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-[#8b9374] rounded-full mx-auto mb-4 flex items-center justify-center text-[#f2f2e9] text-2xl">☕</div>
            <h4 className="text-[#8b9374] mb-2">Calidad Premium</h4>
            <p className="text-gray-600">Granos seleccionados y tostados artesanalmente</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-[#8b9374] rounded-full mx-auto mb-4 flex items-center justify-center text-[#f2f2e9] text-2xl">🏠</div>
            <h4 className="text-[#8b9374] mb-2">Ambiente Familiar</h4>
            <p className="text-gray-600">Un lugar cálido donde todos son bienvenidos</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-[#8b9374] rounded-full mx-auto mb-4 flex items-center justify-center text-[#f2f2e9] text-2xl">👥</div>
            <h4 className="text-[#8b9374] mb-2">Tradición Local</h4>
            <p className="text-gray-600">Parte de la historia y cultura del barrio</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About