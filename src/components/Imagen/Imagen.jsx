import React from 'react'
import './Imagen.css'
import imagen1 from '../../assets/imagen1.jpg'
import imagen2 from '../../assets/imagen2.png'
function Imagen() {
    return (
    <div>
        <img src={imagen1} alt="programador1" />
        <img src={imagen2} alt="programador2" />
    </div>
    )
}

export default Imagen