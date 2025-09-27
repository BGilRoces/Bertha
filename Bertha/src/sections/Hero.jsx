import heroImg from '../assets/extras/evento.jpg'
import LogoBertha02 from '../assets/logos/LogoBertha02.png'
import Ilustracion01 from '../assets/ilustraciones/IlustracionBertha01.png'
import Ilustracion03 from '../assets/ilustraciones/IlustracionBertha03.png'
import Ilustracion04 from '../assets/ilustraciones/IlustracionBertha04.png'
import Ilustracion05 from '../assets/ilustraciones/IlustracionBertha05.png'

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[62vh] pt-10 flex items-center justify-center text-center text-[#f2f2e9]"
      style={{ backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.82), rgba(17, 17, 17, 0.43)), url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <img src={LogoBertha02} alt="Logo Bertha" className="mx-auto h-10 md:h-16 lg:h-20 drop-shadow-lg" />
        <p className="text-lg md:text-3xl lg:text-4xl mb-6 opacity-95 max-w-xl mx-auto leading-relaxed font-marydale">Café de Especialidad</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#menu" className="font-semibold px-6 py-1.5 text-lg border border-[#f2f2e9] bg-[#8b9374] text-[#f2f2e9] rounded-md transition hover:scale-103">Menú</a>
          <a href="#contacto" className="font-semibold px-6 py-1.5 text-lg border border-[#8b9374] bg-[#f2f2e9] text-[#8b9374] rounded-md transition hover:scale-103">Contacto</a>
        </div>
      </div>
      {/* Ilustraciones decorativas en la parte inferior, por encima del fondo */}
      <div className="absolute left-0 right-0 bottom-0 flex justify-between items-end pointer-events-none select-none z-20">
        <img src={Ilustracion01} alt="Ilustración Bertha 01" className="h-20 md:h-32 lg:h-40 drop-shadow-xl" />
        <img src={Ilustracion03} alt="Ilustración Bertha 03" className="h-16 md:h-24 lg:h-32 drop-shadow-xl" />
        <img src={Ilustracion04} alt="Ilustración Bertha 04" className="h-20 md:h-32 lg:h-40 drop-shadow-xl" />
        <img src={Ilustracion05} alt="Ilustración Bertha 05" className="h-16 md:h-24 lg:h-32 drop-shadow-xl" />
      </div>
    </section>
  )
}

export default Hero