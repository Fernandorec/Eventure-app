import React, { useState } from "react";
import "./Portada.css";

function Portada() {

  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div className="Portada">
      <main className="main-content">
        <h2 className="title">Organiza tus eventos</h2>
        <p className="subtitle">Organiza, planifica, crea con Eventure</p>
        <div className="image-container">
          <img src="ImagenesPortada/Evento1.jpg" alt="Evento 1" className="event-image" />
          <img src="ImagenesPortada/Evento2.jpg" alt="Evento 2" className="event-image" />
          <img src="ImagenesPortada/Evento3.jpg" alt="Evento 3" className="event-image" />
          <img src="ImagenesPortada/Event4.jpg" alt="Evento 4" className="event-image" />
        </div>
        <div className="button-container">
          {isRegistered ? (
            <button className="action-button">Bienvenido</button>
          ) : (
            <>
              <button className="action-button" onClick={() => setIsRegistered(true)}>
                Registrarse
              </button>
              <button className="action-button">Iniciar sesión</button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Portada;