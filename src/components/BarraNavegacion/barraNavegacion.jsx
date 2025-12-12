import React from 'react'
import './barraNavegacion.css'

function barraNavegacion() {
  return (
    <section className='menuBotones'>
      <a href="#Inicio" className='botones'>Inicio</a>
      <a href="#SobreNosotros" className='botones'>Sobre nosotros</a>
      <a href="#" className='botones'>Iniciar Sesion</a>
      <a href="#" className='botones registro'>Registrarse</a>
    </section>
  )
}

export default barraNavegacion
