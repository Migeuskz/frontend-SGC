// import React from 'react'
import { Navbar } from '../../Components/Navbar';
import { Outlet } from 'react-router-dom';

export default function Formularios() {
  return (
    <div className="d-flex" style={{ height: "100vh", width: "100%" }}>
      {/* Sidebar */}
      <Navbar />

      {/* Contenido principal */}
      <main
        className="flex-grow-1 p-4"
        style={{
          marginLeft: "60px", // Espacio igual al ancho inicial del sidebar
          backgroundColor: "#f8f9fa", // Color de fondo claro
          overflow: "auto", // Hacer desplazable si el contenido es grande
        }}
      >
        <h2>Formularios</h2>
        <Outlet />
      </main>
    </div>
  );
}
