import React from "react";
import "../Styles/aside.css";

const Aside = ({ isMenuOpen }) => {
  return (
    <div className={isMenuOpen ? "side-menu is-open" : "side-menu is-closed"}>
      <p>Logo</p>
      <nav>
        <ul>
          <li className="home-nav">HOME</li>
          <li className="about-nav"></li>
          <li className="skills-nav"></li>
          <li className="projects-nav"></li>
          <li className="contact-nav"></li>
        </ul>
      </nav>
    </div>
  );
};

export default Aside;
