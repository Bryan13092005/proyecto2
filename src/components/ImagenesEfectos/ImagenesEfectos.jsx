import React from 'react'
import "./ImagenesEfectos.css"
import img1 from "../../assets/JavaScript.webp";
import img2 from "../../assets/c++.jpg";
import img3 from "../../assets/Analisis.jpg";
import img4 from "../../assets/IA.jpg";
import img5 from "../../assets/programacion.jpg";

function ImagenesEfectos() {
  return (
    <section className='Efectos'>
        <img src={img1} alt="JavaScript" className='imagen js'></img>
        <img src={img2} alt="C++" className='imagen cpp'></img>
        <img src={img3} alt="Analisis" className='imagen analisis'></img>
        <img src={img4} alt="Inteligencia Artificial" className='imagen ia'></img>
        <img src={img5} alt="Programacion" className='imagen programacion'></img>
    </section>
  )
}

export default ImagenesEfectos
