import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Este componente será el contenedor principal donde se mostrará el formulario o cualquier contenido
export default function Login() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      {/* Fila para contener el formulario y la imagen */}
      <div className="row w-100">
        {/* Formulario de Login */}
        <div className="col-md-6">
          <div className="text-center mb-4">
            <h2 className="display-4" style={{ fontWeight: 'bold' }}>Bienvenidos</h2>

            <img
              src="/src/assets/imgs/Blanco 2.svg" // Asegúrate de que la ruta sea correcta
              alt="Logo"
              className="img-fluid rounded-circle shadow mb-4"
              style={{ maxWidth: "250px" }}
            />
          </div>

          {/* Datos obligatorios */}
          <div className="row">
            <div className="col-12 text-start mb-3">
              <p>
                <strong>Datos obligatorios *</strong>
              </p>
            </div>
          </div>

          {/* Formulario de Login */}
          <form>
            {/* Correo Electrónico */}
            {/* Formulario de Login */}
          <form>
            {/* Correo Electrónico */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-start">
                Correo Electrónico *
              </label>
              <input
                type="email"
                className="form-control mx-auto"
                id="email"
                placeholder="Correo Electrónico"
                required
                style={{ maxWidth: "400px" }}  // Limita el ancho de los campos
              />
            </div>

            {/* Contraseña */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-start">
                Contraseña *
              </label>
              <input
                type="password"
                className="form-control mx-auto"
                id="password"
                placeholder="Contraseña"
                required
                style={{ maxWidth: "400px" }}  // Limita el ancho de los campos
              />
            </div>

            {/* Botón de Enviar */}
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>

        {/* Imagen al lado derecho */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            alt={"Login Image"}
            src="/src/assets/imgs/negro.svg" // Ruta de la imagen a la derecha
            className="img-fluid" // Hace que la imagen se ajuste bien en la pantalla
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
