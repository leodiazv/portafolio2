import React from "react";
import "../Styles/aboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me" id="about">
      <div className="section-head">
        <span>ALGO DE INFORMACIÓN</span>
        <h2>ACERCA DE MI</h2>
      </div>
      <div className="about-container">
        <p>
          Soy un padawan del desarrollo web en busca de nuevas oportunidades en
          el mundo IT. Tuve un primer acercamiento a la programacion como
          autodidacta completando cursos de JavaScript, HTML y CSS donde me
          encantó el desafío de resolver problemas con lógica y ver los
          resultados tanto del lado del cliente (FRONT-END) como desde el
          servidor (BACK-END). Me capacité como desarrollador
          <span>
            {" "}
            Web Full Stack en un bootcamp en{" "}
            <a
              href="https://www.linkedin.com/company/academlo/"
              target="_blanck"
            >
              Academlo,
            </a>
          </span>{" "}
          y busco mi primera oportunidad para poner mis conocimientos en
          práctica y seguir creciendo.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
