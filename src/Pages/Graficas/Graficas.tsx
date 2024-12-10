import { Outlet } from "react-router-dom";
import { Navbar } from "../../Components/Navbar";
import { GraficaComponent } from "../../Components/Graficas";
// import React from 'react'

export default function Graficas() {
  return (
    <div className="d-flex" style={{ height: "100vh", width: "100%" }}>
      <Navbar />
      <main
        lassName="flex-grow-1 p-4"
        style={{
          marginLeft: "60px", // Espacio igual al ancho inicial del sidebar
          backgroundColor: "#f8f9fa", // Color de fondo claro
          overflow: "auto", // Hacer desplazable si el contenido es grande
        }}
      >
        <h2>Graficas</h2>
        <Outlet/>
        <GraficaComponent/>
      </main>
    </div>
  );
}
