import heroImg from '../assets/extras/evento.jpg'

function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-[62vh] pt-10 flex items-center justify-center text-center text-[#f2f2e9]"
      style={{ backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.82), rgba(17, 17, 17, 0.43)), url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-[3rem] md:text-[3.6rem] -mb-2 font-effra effra-bold tracking-wider drop-shadow-lg">BERTHA</h1>
        <p className="text-[1rem] md:text-[1.05rem] mb-6 opacity-95 max-w-xl mx-auto leading-relaxed">Café de Especialidad</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#menu" className="font-semibold px-6 py-1.5 text-lg border-2 border-[#f2f2e9] bg-[#8b9374] text-[#f2f2e9] rounded-md transition hover:opacity-90">Menú</a>
          <a href="#contacto" className="font-semibold px-6 py-1.5 text-lg border-2 border-[#8b9374] bg-[#f2f2e9] text-[#8b9374] rounded-md transition hover:opacity-90">Contacto</a>
        </div>
      </div>
    </section>
  )
}

export default Hero