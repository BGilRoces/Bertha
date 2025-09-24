import { contactInfo } from '../data/menuData'
import { useRef, useState } from 'react'
import { ClockIcon, MapPinIcon } from '@heroicons/react/24/solid'

function Contact() {
  const formRef = useRef(null)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  // EmailJS placeholders (replace with your real IDs or use env vars)
  const EMAILJS_SERVICE = 'your_service_id'
  const EMAILJS_TEMPLATE = 'your_template_id'
  const EMAILJS_USER = 'your_user_id'

  const handleEmailSend = async (e) => {
    e.preventDefault()
    if (!formRef.current) return
    setSending(true)
    const form = formRef.current
    const data = new FormData(form)

    try {
      const payload = {
        service_id: EMAILJS_SERVICE,
        template_id: EMAILJS_TEMPLATE,
        user_id: EMAILJS_USER,
        template_params: Object.fromEntries(data.entries()),
      }

      await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      setSent(true)
      form.reset()
    } catch (err) {
      console.error('EmailJS send error', err)
      alert('Ocurrió un error al enviar el formulario. Intentá por WhatsApp.')
    } finally {
      setSending(false)
    }
  }

  const whatsappHref = () => {
    const phone = contactInfo.telefono.replace(/\s|\+|-/g, '')
    const msg = encodeURIComponent(`Hola! Quisiera hacer una consulta sobre el café.`)
    return `https://wa.me/${phone}?text=${msg}`
  }

  return (
  <section id="contacto" className="relative py-20 bg-[#f2f2e9] text-[#f2f2e9] overflow-hidden">
      {/* Decorative coffee steam SVG */}
      <div className="pointer-events-none absolute right-6 top-6 opacity-20">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12c0-4.418 3.582-8 8-8v8H3z" fill="#e6d9c6" />
          <path d="M12 4c4.418 0 8 3.582 8 8s-3.582 8-8 8" stroke="#e6d9c6" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
  <div className="max-w-6xl mx-auto bg-white/60 backdrop-blur-sm rounded-3xl p-10 shadow-2xl grid gap-6 md:grid-cols-2 items-stretch">
          <div className="space-y-4 h-full flex flex-col">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-[#f2e9db] rounded-full shadow-inner">
                <span className="text-xl">☕️</span>
              </div>
              <div>
                <h2 className="text-3xl font-serif text-gray-800">Visítanos</h2>
                <p className="text-sm text-gray-700 mt-1">Un rincón del barrio con cariño en cada taza.</p>
              </div>
            </div>

            <p className="text-gray-700">Pasá cuando quieras: luz cálida, pan recién hecho y buena charla. Si querés reservar o consultarnos algo, mandanos un mensaje abajo — te leemos con gusto.</p>

            {/* Horario + ubicacion row */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-3">
              <div className="w-fit">
                <div className="rounded-lg bg-[#f2f2e9] border border-[rgba(242,242,233,0.06)] p-3 shadow-sm transform hover:-translate-y-0.5 transition">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-white rounded-md shadow-sm">
                      <ClockIcon className="w-5 h-5 text-gray-800" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-800">Martes a Domingo</div>
                      <div className="text-sm text-gray-800">8hs a 20hs</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-fit">
                <div className="rounded-lg bg-[#f2f2e9] border border-[rgba(242,242,233,0.06)] p-3 shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-white rounded-md shadow-sm">
                      <MapPinIcon className="w-4 h-4 text-gray-800" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-800">Ubicación</div>
                      <div className="text-sm text-gray-800 max-w-xs break-words">{contactInfo.direccion}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map below the horario box */}
            <div className="mt-3 rounded-lg overflow-hidden shadow-sm border border-[rgba(242,242,233,0.06)]">
              <iframe
                title="Mapa - Café Barrio"
                src={`https://www.google.com/maps?q=${encodeURIComponent(contactInfo.direccion + ', Buenos Aires')}&output=embed`}
                width="100%"
                height="220"
                className="border-0"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex">
            <div className="bg-[#f2f2e9] rounded-2xl p-4 shadow-md h-full flex flex-col w-full">
              <h3 className="text-2xl text-gray-800 font-serif mb-4">Escribinos</h3>
              <form ref={formRef} onSubmit={handleEmailSend} className="space-y-4 flex flex-col flex-grow">
                <div>
                  <label className="block text-sm text-gray-800 mb-1">Nombre</label>
                  <input name="from_name" required className="w-full rounded-lg border border-gray-500/30 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#cbb894] transition bg-transparent text-[#f2f2e9]" />
                </div>

                <div>
                  <label className="block text-sm text-gray-800 mb-1">Email</label>
                  <input name="reply_to" type="email" required className="w-full rounded-lg border border-gray-500/30 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#cbb894] transition bg-transparent text-[#f2f2e9]" />
                </div>

                <div>
                  <label className="block text-sm text-gray-800 mb-1">Mensaje</label>
                  <textarea name="message" required className="w-full rounded-lg border border-gray-500/30 px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-[#cbb894] transition resize-none bg-transparent text-[#f2f2e9]" />
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  <button type="submit" disabled={sending} className="inline-flex items-center gap-1 bg-[#b37b58] text-[#f2f2e9] px-5 py-2 rounded-full shadow hover:scale-105 transition">
                    <span className="text-sm font-semibold">📩</span>
                    <span className='font-semibold'>{sending ? 'Enviando...' : 'Enviar'}</span>
                  </button>

                  <button type="button" onClick={() => window.open(whatsappHref(), '_blank')} className="inline-flex items-center gap-1 bg-white text-[#8b9374] px-5 py-2 rounded-full shadow hover:scale-105 transition">
                    <span className="text-sm ">📱</span>
                    <span className="text-sm font-semibold">WhatsApp</span>
                  </button>
                </div>

                {sent && <div className="mt-2 text-sm text-green-600">¡Mensaje enviado! Te respondemos pronto.</div>}
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact