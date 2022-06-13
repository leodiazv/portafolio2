import React from "react";
import "../Styles/aside.css";

const Aside = ({ isMenuOpen }) => {
  return (
    <div className={isMenuOpen ? "side-menu is-open" : "side-menu is-closed"}>
      <p className="logo">Ld</p>
      <nav>
        <ul>
          <li className="home-nav">
            <a href={"#home"}>
              <i class="fa-solid fa-house"></i>HOME
            </a>
          </li>
          <li className="about-nav">
            <a href={"#about"}>
              <i class="fa-solid fa-user-astronaut"></i>ACERCA DE MI
            </a>
          </li>
          <li className="skills-nav">
            <a href={"#skills"}>
              <i class="fa-solid fa-laptop-code"></i>HABILIDADES
            </a>
          </li>
          <li className="projects-nav">
            <a href={"#projects"}>
              <i class="fa-solid fa-briefcase"></i>PROYECTOS
            </a>
          </li>
          <li className="contact-nav">
            <a href={"#contact"}>
              <i class="fa-solid fa-at"></i>CONTACTO
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Aside;
