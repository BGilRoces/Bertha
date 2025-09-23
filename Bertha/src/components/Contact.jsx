import { horarios, contactInfo } from '../data/menuData'

function Contact() {
  return (
    <section id="contacto" className="py-20 bg-[#8b9374] text-[#f2f2e9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 font-serif">Visitanos</h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto">Te esperamos con el café recién hecho y la sonrisa de siempre</p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Información de contacto */}
          <div>
            <h3 className="text-2xl mb-4 font-serif">Información</h3>
            <div className="mb-6">
              <h4 className="text-lg mb-2">📍 Dirección</h4>
              <p className="opacity-90 leading-relaxed">
                {contactInfo.direccion}<br />Buenos Aires, Argentina
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg mb-2">📞 Teléfono</h4>
              <p className="opacity-90">{contactInfo.telefono}</p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg mb-2">✉️ Email</h4>
              <p className="opacity-90">{contactInfo.email}</p>
            </div>

            <div>
              <h4 className="text-lg mb-2">📱 Redes Sociales</h4>
              <div className="flex gap-4">
                <a href="#" className="opacity-80">Instagram</a>
                <a href="#" className="opacity-80">Facebook</a>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-2xl mb-4 font-serif">Horarios</h3>
            <div className="bg-[rgba(242,242,233,0.1)] p-4 rounded-lg">
              {Object.entries(horarios).map(([dia, horario]) => (
                <div key={dia} className="flex justify-between mb-3 pb-3 border-b border-[rgba(242,242,233,0.2)]">
                  <span className={`capitalize font-medium ${horario === 'Cerrado' ? 'text-[#ff6b6b]' : ''}`}>{dia}</span>
                  <span className={`${horario === 'Cerrado' ? 'text-[#ff6b6b] font-semibold' : 'opacity-90'}`}>{horario}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mapa placeholder */}
          <div>
            <h3 className="text-2xl mb-4 font-serif">Ubicación</h3>
            <div className="bg-[rgba(242,242,233,0.1)] h-64 rounded-lg flex items-center justify-center border-2 border-dashed border-[rgba(242,242,233,0.3)]">
              <div className="text-center opacity-80">
                <div className="text-2xl mb-2">🗺️</div>
                <p>Mapa interactivo</p>
                <small className="opacity-70">A 2 cuadras del subte línea D</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact