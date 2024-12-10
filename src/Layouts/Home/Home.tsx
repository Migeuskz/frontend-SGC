import { Outlet } from "react-router-dom";
import { Navbar } from "../../Components/Navbar";
// import Navbar from "../../Components/Navbar"

export default function Home() {
  return (
    <div className="d-flex" style={{ height: "100vh", width: "100%" }}>
      {/* Sidebar */}
      <Navbar />

      {/* Contenido principal */}
      <main
        className="flex-grow-1 bg-light"
        style={{
          marginLeft: "60px", // Ajusta este valor al ancho inicial del sidebar
          padding: "20px",
        }}
      >
        <h2>Bienvenido</h2>
        <Outlet />
      </main>
    </div>
  );
}
