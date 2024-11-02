import "./Hotel-Mediterraneo.css";

// Hotel-Mediterraneo/Hotel-Mediterraneo.js
import React from "react";

function HotelMediterraneo() {
  return (
    <div>
      <br></br>
      <h4 id="seccion">
        <a href="http://localhost:3000/">Inicio</a> {">"}{" "}
        <a href="http://localhost:3000/lalibertad">Lugares La Libertad</a> {">"}{" "}
        Hotel Mediterraneo
      </h4>
      <br></br>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./Hotel-Mediterraneo/Hotel-Mediterraneo1.jpeg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./Hotel-Mediterraneo/Hotel-Mediterraneo2.jpeg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./Hotel-Mediterraneo/Hotel-Mediterraneo3.jpeg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="Datos"  style={{ border: "1px solid black" }}>
        <h1>hola</h1>
      </div>

      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default HotelMediterraneo;
