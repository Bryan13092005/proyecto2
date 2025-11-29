import React from "react";
import "./Integrantes.css";

const Integrantes = () => {
  return (
    <section id="Integrantes" className="Integrantes">
      <div className="container">
        <h2 className="Integrantes__title">Integrantes</h2>
        <div className="personas">
          <div>
            <h3>Bryan Salvador</h3>
            <p>0987876935</p>
          </div>
          <div>
            <h3>Dylan Inlago</h3>
            <p>0968484440</p>
          </div>
          <div>
            <h3>Ariana Villota</h3>
            <p>0987423077</p>
          </div>
          <div>
            <h3>Jossue Chulde</h3>
            <p>0969134788</p>
          </div>
          <div>
            <h3>Michael Vargas</h3>
            <p>0999101795</p>
          </div>
          <div>
            <h3>Camila Bueno</h3>
            <p>0985392901</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrantes;