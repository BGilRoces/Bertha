function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen pt-20 flex items-center justify-center text-center bg-gradient-to-br from-[#8b9374] to-[#6b7c5a] text-[#f2f2e9]"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-[4rem] mb-4 font-serif font-[400] tracking-wider">Café Barrio</h1>
        <p className="text-[1.15rem] mb-8 opacity-90 max-w-xl mx-auto">
          Donde la tradición se encuentra con la modernidad. El café de tu barrio, con el sabor que recordarás para siempre.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#menu"
            className="px-6 py-3 text-lg border-2 border-[#f2f2e9] bg-transparent text-[#f2f2e9] rounded-md transition hover:opacity-90"
          >
            Ver Menú
          </a>
          <a
            href="#nosotros"
            className="px-6 py-3 text-lg border-2 border-[#f2f2e9] bg-[#f2f2e9] text-[#8b9374] rounded-md transition hover:opacity-90"
          >
            Nuestra Historia
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero