import React from "react";
import "../Styles/projects.css";
import ecommerce from "../assets/projects-screenshots/ecommerce.png";
import rickandmorty from "../assets/projects-screenshots/rickandmorty.png";
import pokedex from "../assets/projects-screenshots/pokedex.png";
import weather from "../assets/projects-screenshots/weather.png";

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <div className="section-head">
        <span>DALE UN VISTAZO A MIS</span>
        <h2>TRABAJOS</h2>
      </div>
      <div className="projects-container">
        <article className="project-box">
          <div className="project-image-container">
            <img
              className="project-image-container"
              src={ecommerce}
              alt="ecommerce"
            ></img>
          </div>
          <div className="project-describe-container">
            <h3>E-commerce</h3>
            <h4>
              Tecnologias usadas:
              <span className="tech-stack"> React</span>,
              <span className="tech-stack"> Redux</span>,
              <span className="tech-stack"> CSS</span>,
              <span className="tech-stack"> REST API</span>,
              <span className="tech-stack"> React Router</span>.
            </h4>
            <ul>
              <li>
                Desarrollo de front para e-commerce con React consumiendo una
                API.
              </li>
              <li>
                Funcionalidad de login, añadir y editar productos del carrito y
                efectuar compra y consultar historial de compras.
              </li>
            </ul>
            <div className="project-links">
              <a
                href="https://leos-e-commerce.netlify.app/#/products"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
              <a href="https://github.com/leodiazv/e-commerce">Repo</a>
            </div>
          </div>
        </article>
        <article className="project-box">
          <div className="project-image-container">
            <img
              className="project-image-container"
              src={pokedex}
              alt="pokedex"
            ></img>
          </div>
          <div className="project-describe-container">
            <h3>Pokedex</h3>
            <h4>
              Tecnologias usadas:
              <span className="tech-stack"> React</span>,
              <span className="tech-stack"> Redux</span>,
              <span className="tech-stack"> CSS</span>,
              <span className="tech-stack"> REST API</span>,
              <span className="tech-stack"> React Router</span>.
            </h4>
            <ul>
              <li>APP para buscar pokemons por nombre o ID.</li>
              <li>Filtrado de pokemons por tipo.</li>
              <li>Informacion de estadisticas de cada pokemon.</li>
            </ul>
            <div className="project-links">
              <a
                href="https://leos-pokedex.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
              <a href="https://github.com/leodiazv/pokedex">Repo</a>
            </div>
          </div>
        </article>
        <article className="project-box">
          <div className="project-image-container">
            <img
              className="project-image-container"
              src={rickandmorty}
              alt="rickandmorty"
            ></img>
          </div>
          <div className="project-describe-container">
            <h3>Rick and Morty APP</h3>
            <h4>
              Tecnologias usadas:
              <span className="tech-stack"> React</span>,
              <span className="tech-stack"> CSS</span>,
              <span className="tech-stack"> REST API</span>,
              <span className="tech-stack"> React Router</span>.
            </h4>
            <ul>
              <li>
                App para buscar personajes de la serie animada por localización
                consumiendo la API y usando React.
              </li>
            </ul>
            <div className="project-links">
              <a
                href="https://leos-riack-and-morty-app.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
              <a href="https://github.com/leodiazv/leo-rick-and-morty-app">
                Repo
              </a>
            </div>
          </div>
        </article>
        <article className="project-box">
          <div className="project-image-container">
            <img
              className="project-image-container"
              src={weather}
              alt="weather"
            ></img>
          </div>
          <div className="project-describe-container">
            <h3>App del clima</h3>
            <h4>
              Tecnologias usadas:
              <span className="tech-stack"> React</span>,
              <span className="tech-stack"> CSS</span>,
              <span className="tech-stack"> REST API</span>,
            </h4>
            <ul>
              <li>
                Estado del clima por ubicación consumiendo la API de{" "}
                <a href="https://openweathermap.org/api">Open Weather</a>
              </li>
              <li>Pronostico del clima para los próximos dos días.</li>
            </ul>
            <div className="project-links">
              <a
                href="https://leos-weather-app.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
              <a href="https://github.com/leodiazv/weather-app">Repo</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Projects;
