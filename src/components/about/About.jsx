// About.jsx
import React from 'react';
import './About.css';
import imagenLateral from '../../assets/imagen2.png'; // ajusta la ruta si la tienes en otro sitio

const About = () => {
  return (
    <section id="SobreNosotros" className="about">
      <div className="about__content">
        <div className="about__text">
          <h2 className="about__title">Sobre Nosotros</h2>
          <p className="about__paragraph">
            Somos un grupo de estudiantes de desarrollo de Software en donde cada integrante aporta sus habilidades y conocimientos para trabajar de la mejor manera colaborativa, desde el diseño de interfaces y la programación hasta organización del contenido y la experiencia del usuario.
          </p>
          <p className="about__paragraph">
            Nuestro objetivo es poder transmitir nuestro compromiso con la calidad y el potencial en el ámbito digital y creativo a través de una página web.
          </p>
        </div>

        <div className="about__imageWrapper">
          <img src={imagenLateral} alt="programador" className="about__image" />
        </div>
      </div>
    </section>
  );
};

export default About;
