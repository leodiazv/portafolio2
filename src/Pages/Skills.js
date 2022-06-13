import React from "react";
import "../Styles/skills.css";
import html from "../assets/skills/html.svg";
import css from "../assets/skills/css.svg";
import javascript from "../assets/skills/javascript.svg";
import react from "../assets/skills/react.svg";
import api from "../assets/skills/api.svg";
import node from "../assets/skills/node.svg";
import expressjs from "../assets/skills/expressjs.svg";
import sequelize from "../assets/skills/sequelize.svg";
import git from "../assets/skills/git.svg";
import postman from "../assets/skills/postman.svg";
import vscode from "../assets/skills/vscode.svg";

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <div className="section-head">
        <span>MIRA MIS</span>
        <h2>HABILIDADES</h2>
      </div>
      <div className="skills-container">
        <ul className="skills-grid">
          <li className="item-container">
            <img src={html} alt="html"></img>
            <p>HTML</p>
          </li>
          <li className="item-container">
            <img src={css} alt="css"></img>
            <p>CSS</p>
          </li>
          <li className="item-container">
            <img src={javascript} alt="java-script"></img>
            <p>Javascript</p>
          </li>
          <li className="item-container">
            <img src={react} alt="react"></img>
            <p>React</p>
          </li>
          <li className="item-container">
            <img src={api} alt="restApi"></img>
            <p>REST API</p>
          </li>
          <li className="item-container">
            <img src={node} alt="nodejs"></img>
            <p>NodeJS</p>
          </li>
          <li className="item-container">
            <img src={expressjs} alt="expressjs"></img>
            <p>Express</p>
          </li>
          <li className="item-container">
            <img src={sequelize} alt="sequelize"></img>
            <p>Sequelize</p>
          </li>
          <li className="item-container">
            <img src={git} alt="git"></img>
            <p>Git</p>
          </li>
          <li className="item-container">
            <img src={postman} alt="postman"></img>
            <p>Postman</p>
          </li>
          <li className="item-container">
            <img src={vscode} alt="vscode"></img>
            <p>VS CODE</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
