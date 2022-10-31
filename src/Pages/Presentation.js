import React from "react";
import "../Styles/presentation.css";

const Presentation = () => {
  return (
    <div className="presentation" id="home">
      <div className="profile-img-container">
        <img src="https://avatars.githubusercontent.com/u/87768747?v=4" />
      </div>

      <div className="profileDescription">
        <p className="greeting">HOLA! SOY</p>
        <h1>
          <span>LEO</span> DIAZ
        </h1>
        <p className="smallBio">
          Un <span>Desarrollador Full-Stack Jr. </span>emocionado por crear
          aplicaciones interactivas y experiencias en la web
        </p>
        <div className="socialResume">
          <a
            href="https://drive.google.com/uc?id=1M0kakPI0lqAupq3JXATh3QN5mNzg6JX-&export=download"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white", textDecoration: "none" }}
          >
            <div className="resume-link">CV</div>
          </a>
          <ul className="social-list">
            <li>
              <a
                href="https://www.linkedin.com/in/leonardo-diaz-vecchio-48358923b/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/leodiazv"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <br></br>
    </div>
  );
};

export default Presentation;
