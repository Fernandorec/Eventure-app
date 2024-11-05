import "./App.css";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Departamentos from "./Departamentos";
import LaLibertadLugares from "./LaLibertadLugares/LaLibertadLugares";
import HotelMediterraneo from "./Hotel-Mediterraneo/Hotel-Mediterraneo";
import CarrucelInicio from "./Carrucel-Inicio/Carrucel-Inicio";



import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <div className="App">
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet" />

      {/* Navbar */}
      <header id="AllBanner">
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#3d2669" }}>
          <div className="container-fluid">
            <a id="Name" className="navbar-brand" href="#" style={{ color: "white" }}>
              Eventure
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ backgroundColor: "white" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: "white" }}>
                    SOBRE NOSOTROS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: "white" }}>
                    EVENTOS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: "white" }}>
                    CONTACTOS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <br /><br /><br /><br />
    </div>
  );
}

function AllPage() {
  return (
    <BrowserRouter>
      <App /> {/* El banner se muestra en ambas rutas */}
      <CarrucelInicio />
      
      
      
  
      <Routes>
        <Route path="/" element={<Departamentos />} /> {/* Ruta raíz */}
        <Route path="/lalibertad" element={<LaLibertadLugares />} /> {/* Ruta La Libertad */}
        <Route path="/Hotel-Mediterraneo" element={<HotelMediterraneo />} /> {/* Nueva Ruta */}  
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}



export default AllPage;
