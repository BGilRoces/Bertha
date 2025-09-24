
function About() {
  return (
    <section id="nosotros" className="py-20 bg-[#f6f6f1]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-effra effra-bold text-[#8b9374] mb-10 text-center flex items-center justify-center gap-4">
          <span role="img" aria-label="party">🎉</span>
          ¿Por qué Bertha es especial?
          <span role="img" aria-label="coffee">☕</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="rounded-xl overflow-hidden shadow-lg bg-white flex flex-col items-center p-6">
            <img src="/src/assets/menu/comidas/plato4.jpg" alt="plato" className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-[#8b9374]" />
            <h3 className="text-xl font-effra effra-bold text-[#8b9374] mb-2">Platos que sorprenden</h3>
            <p className="text-gray-700 text-center">¿Probaste la torta vasca? ¡No te la pierdas! Cada semana hay algo nuevo.</p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg bg-white flex flex-col items-center p-6">
            <img src="/src/assets/local/local2.jpg" alt="local" className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-[#8b9374]" />
            <h3 className="text-xl font-effra effra-bold text-[#8b9374] mb-2">Ambiente Bertha</h3>
            <p className="text-gray-700 text-center">Música, charlas, y el aroma a café recién hecho. Sentite como en casa, pero mejor.</p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg bg-white flex flex-col items-center p-6">
            <img src="/src/assets/menu/carta/menu3.jpg" alt="menu" className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-[#8b9374]" />
            <h3 className="text-xl font-effra effra-bold text-[#8b9374] mb-2">Café de Especialidad</h3>
            <p className="text-gray-700 text-center">Baristas que te saludan por tu nombre y te preparan el café como te gusta.</p>
          </div>
        </div>

        <div className="bg-[#8b9374] rounded-2xl py-10 px-6 md:px-16 text-[#f2f2e9] text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-effra effra-bold mb-4 flex items-center justify-center gap-2">
            <span role="img" aria-label="star">⭐</span>
            Momentos Bertha
            <span role="img" aria-label="star">⭐</span>
          </h3>
          <p className="text-lg md:text-xl mb-4">Más de 40 años creando recuerdos, risas y meriendas épicas.</p>
          <p className="text-base md:text-lg mb-6">¿Tenés una foto o anécdota en Bertha? Compartila en Instagram con <span className="font-bold">#BerthaMomentos</span> y sumate a la historia.</p>
          <div className="flex justify-center gap-6 mt-6">
            <span className="text-4xl">🥐</span>
            <span className="text-4xl">🍰</span>
            <span className="text-4xl">🎶</span>
            <span className="text-4xl">☕</span>
            <span className="text-4xl">📸</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About