import { useState } from "react";
import "./App.css";
import Aside from "./Layouts/Aside";
import AboutMe from "./Pages/AboutMe";
import ContactForm from "./Pages/ContactForm";
import Presentation from "./Pages/Presentation";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <div className="menu-button">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i class="fas fa-hamburger"></i>
        </button>
      </div>
      <Aside isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="outer-wrapper">
        <div className="inner-wrapper">
          <Presentation />
          <AboutMe />
          <Skills />
          <Projects />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;
