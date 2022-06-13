import "../Styles/contact.css";

import React, { useState } from "react";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/607bd0b0-eab5-11ec-94cd-436cd72d679b"; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Gracias!</h2>
        <div>Nos pondremos en contacto pronto.</div>
      </>
    );
  }

  return (
    <div className="contact-section" id="contact">
      <div className="section-head">
        <span>DI HOLA</span>
        <h2>CONTÁCTAME</h2>
      </div>
      <div className="contact-container">
        <div className="mail-container">
          <h3>Escribeme</h3>
          <a href="mailto:leodiazv@gmail.com">leodiazv@gmail.com</a>
          <br></br>
          {/* <h3>Llamame</h3>
        +57 319-218-8473 */}
        </div>
        <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
          <input type="text" placeholder="Tu nombre" name="name" required />
          <input type="email" placeholder="Correo" name="email" required />
          <textarea placeholder="Mensaje" name="message" required />
          <button type="submit"> ENVIAR </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
