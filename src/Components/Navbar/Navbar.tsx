import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      className="d-flex flex-column bg-dark text-white"
      style={{
        width: "70px", // Ancho inicial
        height: "100vh",
        transition: "width 0.3s", // Transición suave para el hover
        position: "fixed", // Fijar el sidebar al lado izquierdo
        top: 0,
        left: 0,
        overflow: "hidden", // Ocultar contenido que se salga
      }}
      onMouseEnter={(e) => (e.currentTarget.style.width = "200px")} // Expande
      onMouseLeave={(e) => (e.currentTarget.style.width = "60px")} // Contrae
    >
      <ul className="nav nav-pills flex-column mb-auto p-2">
        <li className="nav-item">
          <Link to="/home/" className="nav-link text-white d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="me-2"
              style={{ width: "24px", height: "24px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span className="d-none d-md-inline">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/home/formularios"
            className="nav-link text-white d-flex align-items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="me-2"
              style={{ width: "24px", height: "24px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
              />
            </svg>
            <span className="d-none d-md-inline">Formularios</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link text-white d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="me-2"
              style={{ width: "24px", height: "24px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
              />
            </svg>
            <span className="d-none d-md-inline">Salir</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
