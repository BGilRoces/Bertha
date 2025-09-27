import React, { useRef, useEffect } from 'react'
import LogoBertha02 from '../assets/logos/LogoBertha02.png'

// Reemplaza los links por los videos mp4 y el link real del reel
const REELS = [
  {
    src: '/src/assets/reels/reel1.mp4',
    link: 'https://www.instagram.com/reel/DLDoWqVSDWc/'
  },
  {
    src: '/src/assets/reels/reel5.mp4',
    link: 'https://www.instagram.com/reel/DHtFyRXOl8L/'
  },
  {
    src: '/src/assets/reels/reel3.mp4',
    link: 'https://www.instagram.com/reel/DOhQLzyjy6H/'
  },
  {
    src: '/src/assets/reels/reel4.mp4',
    link: 'https://www.instagram.com/reel/DN6gyKyEvpa/'
  }
]

function Reels() {
  const videoRefs = useRef([])

  useEffect(() => {
    const observers = []
    videoRefs.current.forEach((video) => {
      if (!video) return
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            video.play()
          } else {
            video.pause()
          }
        },
        { threshold: 0.5 }
      )
      observer.observe(video)
      observers.push(observer)
    })
    return () => {
      observers.forEach(obs => obs.disconnect())
    }
  }, [])

  return (
    <section className="py-16 bg-[#f6f6f1]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="flex items-center gap-4 bg-[#8b9374]/50 rounded-full px-7 py-4 shadow-lg">
            <div className="border border-gray-800 border-opacity-10 flex items-center justify-center rounded-full bg-[#8b9374] w-16 h-16 overflow-hidden">
              <img src={LogoBertha02} alt="Logo Bertha" className="w-16 h-16 ml-1 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-effra font-bold text-gray-800 tracking-wide">@cafe.bertha</span>
              <span className="text-sm text-gray-700 opacity-90">Bertha - Café de especialidad</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {REELS.map((reel, i) => (
            <a
              key={i}
              href={reel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl shadow-md overflow-hidden bg-white w-[320px] h-[460px] flex items-center justify-center cursor-pointer"
            >
              <video
                ref={el => videoRefs.current[i] = el}
                src={reel.src}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                preload="metadata"
                controls={false}
                style={{background: '#222'}}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center justify-center">
                  <span className="flex items-center justify-center rounded-full bg-[#8b9374] w-16 h-16 shadow-lg">
                    {/* Icono Play/Despausa SVG más grande, solo blanco */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
                      <polygon points="18,15 34,24 18,33" fill="#f2f2e9" />
                    </svg>
                  </span>
                </div>
                <span className="text-[#f2f2e9] text-lg font-effra font-bold px-4 py-1">Ver Reel</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reels
