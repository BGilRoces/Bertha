import React, { useRef, useEffect } from 'react'
import logoInstagram from '/src/assets/extras/LogoInstagram.png'

// Reemplaza los links por los videos mp4 que quieras
const REELS = [
  '/src/assets/reels/reel1.mp4',
  '/src/assets/reels/reel5.mp4',
  '/src/assets/reels/reel3.mp4',
  '/src/assets/reels/reel4.mp4'
]

function Gallery() {
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
        <h2 className="flex items-center justify-center gap-1.5 text-3xl font-serif text-[#8b9374] mb-6 text-center">
          <img src={logoInstagram} alt="Logo Instagram" className="w-14" />
          <span className='mb-1 font-effra font-semibold tracking'>@CAFE.BERTHA</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {REELS.map((src, i) => (
            <div key={i} className="relative rounded-xl shadow-md overflow-hidden bg-white w-[320px] h-[460px] flex items-center justify-center">
              <video
                ref={el => videoRefs.current[i] = el}
                src={src}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                preload="metadata"
                controls={false}
                style={{background: '#222'}}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
