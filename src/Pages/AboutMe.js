import React from "react";
import "../Styles/aboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="section-head">
        <span>ALGO DE INFORMACIÓN</span>
        <h2>ACERCA DE MI</h2>
      </div>
      <div className="about-container">
        <p>
          Soy un padawan del desarrollo web en busca de nuevas oportunidades en
          el mundo IT. Tuve un primer acercamiento a la programacion como
          autodidacta completado cursos de JavaScript, HTML y CSS donde me
          encanto el desafio de resolver problemas con logica y ver los
          resultados tanto del lado del cliente(FRONT-END) como desde el
          servidor(BACK-END). Actualmente me estoy capacitando como
          desarrollador
          <span> Web Full Stack en un bootcamp en Academlo</span> y busco mi
          primera oportunidad para poner mis conocimientos en práctica y seguir
          creciendo.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
