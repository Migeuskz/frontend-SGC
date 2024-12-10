import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../Components/Navbar";
import "../../assets/styles/styles.css"; // Asegúrate de importar el archivo CSS

export default function Home() {
  return (
    <div className="d-flex" style={{ height: "100vh", width: "100%" }}>
      {/* Sidebar */}
      <Navbar />

      {/* Contenido principal */}
      <main
        className="flex-grow-1 bg-light d-flex flex-column justify-content-center align-items-center"
        style={{
          marginLeft: "50px", // Ajusta este valor al ancho inicial del sidebar
          padding: "80px",
          background: 'linear-gradient(to right, #2F4F4F, #1E90FF)' /* Gris oscuro a Azul vibrante */

        }}
      >
        <div className="text-center text-white mb-4">
          {/* Título con Arial Black */}
          <h1 className="display-3 typing-effect-title" style={{ fontWeight: 'bold' }}>
            ¡Bienvenidos a SGC!
          </h1>
          {/* Párrafo con Arial */}
          <p className="lead typing-effect" style={{ fontSize: '1.5rem' }}>
            SI PUEDES SOÑARLO PODEMOS CONTRUIRLO
          </p>
        </div> 
        {/* Área para el contenido adicional */}
        <Outlet />
      </main>
    </div>
  );
}
