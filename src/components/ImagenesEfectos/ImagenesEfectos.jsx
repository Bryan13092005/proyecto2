import React, { useEffect, useRef } from 'react'
import "./ImagenesEfectos.css"
import img1 from "../../assets/JavaScript.webp"
import img2 from "../../assets/c++.jpg"
import img3 from "../../assets/Analisis.jpg"
import img4 from "../../assets/IA.jpg"
import img5 from "../../assets/programacion.jpg"
import img6 from "../../assets/códigos.jpg"

function ImagenesEfectos() {
  const containerRef = useRef(null)

  useEffect(() => {
    const images = containerRef.current?.querySelectorAll('.imagen')
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px'
    })

    images?.forEach(img => observer.observe(img))

    return () => {
      images?.forEach(img => observer.unobserve(img))
    }
  }, [])

  return (
    <section className='Efectos' ref={containerRef}>
        <img src={img1} alt="JavaScript" className='imagen js'></img>
        <img src={img2} alt="C++" className='imagen cpp'></img>
        <img src={img3} alt="Analisis" className='imagen analisis'></img>
        <img src={img4} alt="Inteligencia Artificial" className='imagen ia'></img>
        <img src={img5} alt="Programacion" className='imagen programacion'></img>
        <img src={img6} alt="Códigos" className='imagen codigos'></img>
    </section>
  )
}

export default ImagenesEfectos
