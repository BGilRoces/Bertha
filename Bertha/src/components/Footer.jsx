import { contactInfo } from '../data/menuData'
import LogoBertha02 from '../assets/logos/LogoBertha02.png'

function Footer() {
  return (
  <footer className="bg-[#8b9374] text-[#f2f2e9] py-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-[1fr_1fr_1fr] mb-8">
          <div>
            <img src={LogoBertha02} alt="Logo Bertha" className="mb-4 h-10 w-auto" />
            <p className="opacity-80 leading-relaxed">El sabor de la tradición, la calidez del hogar.</p>
          </div>

          <div>
            <h5 className="mb-4">Enlaces Rápidos</h5>
            <div className="flex flex-col gap-2">
              <a href="#inicio" className="text-[#f2f2e9] opacity-80">Inicio</a>
              <a href="#menu" className="text-[#f2f2e9] opacity-80">Menú</a>
              <a href="#nosotros" className="text-[#f2f2e9] opacity-80">Nosotros</a>
              <a href="#contacto" className="text-[#f2f2e9] opacity-80">Contacto</a>
            </div>
          </div>

          <div>
            <h5 className="mb-4">Contacto</h5>
            <div className="flex flex-col gap-2 text-sm opacity-90">
              <span>📍 {contactInfo.direccion}</span>
              <span>📞 {contactInfo.telefono}</span>
              <span>✉️ {contactInfo.email}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(242,242,233,0.2)] pt-6 opacity-70 text-center">
          <p>&copy; KlikYListo. Todos los derechos reservados.</p>
          <p className="text-sm mt-2">Hecho con ❤️ para la comunidad del barrio</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer