import React from "react";
import { Link } from "react-router-dom";
import "./barraNavegacion.css";

export default function BarraNavegacion() {
  return (
    <section className="menuBotones">
      <a href="#Inicio" className="botones">Inicio</a>
      <a href="#SobreNosotros" className="botones">Sobre nosotros</a>

      <Link to="/login" className="botones">Iniciar Sesion</Link>
      <Link to="register" className="botones registro">Registrarse</Link>
    </section>
  );
}