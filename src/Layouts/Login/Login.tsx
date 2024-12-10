import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Evitar recarga de la página

    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });

      // Guardar el token en localStorage
      localStorage.setItem("access_token", response.data.access_token);

      // Redirigir al home
      navigate("/home");
    } catch (err: any) {
      // Manejo de errores
      setError(
        err.response?.data?.message || "Error al iniciar sesión. Intente nuevamente."
      );
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      {/* Fila para contener el formulario y la imagen */}
      <div className="row w-100">
        {/* Formulario de Login */}
        <div className="col-md-6">
          <div className="text-center mb-4">
            <h2 className="display-4" style={{ fontWeight: "bold" }}>
              Bienvenidos
            </h2>

            <img
              src="/src/assets/imgs/Blanco 2.svg" // Asegúrate de que la ruta sea correcta
              alt="Logo"
              className="img-fluid rounded-circle shadow mb-4"
              style={{ maxWidth: "300px" }}
            />
          </div>

          {/* Datos obligatorios */}
          <div className="row">
            <div className="col-12 text-start mb-3">
              <strong>
                <h6>Datos obligatorios *</h6>
              </strong>
            </div>
          </div>

          {/* Formulario de Login */}
          <form onSubmit={handleSubmit}>
            {/* Correo Electrónico */}
            <div className="mb-3">
              <input
                type="email"
                className="form-control mx-auto"
                id="email"
                placeholder="Correo Electrónico *"
                required
                style={{ maxWidth: "450px" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Contraseña */}
            <div className="mb-3">
              <input
                type="password"
                className="form-control mx-auto"
                id="password"
                placeholder="Contraseña *"
                required
                style={{ maxWidth: "450px" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />

            {/* Botón de Enviar */}
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Iniciar sesión
              </button>
            </div>
          </form>

          {/* Mensaje de error */}
          {error && (
            <div className="text-center mt-3">
              <p style={{ color: "red" }}>{error}</p>
            </div>
          )}
        </div>
        <br />

        {/* Imagen al lado derecho */}
        <div className="col-md-6 d-flex justify-content-center align-items-center p-0 m-0">
          <img
            alt="Login Image"
            src="/src/assets/imgs/negro.svg" // Ruta de la imagen
            className="img-fluid"
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
}
