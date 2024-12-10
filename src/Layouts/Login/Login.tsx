import { Link } from 'react-router-dom'; // Importamos Link
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
              style={{ maxWidth: "300px" }}
            />
          </div>

          {/* Datos obligatorios */}
          <div className="row">
          <div className="col-12 text-start mb-3">
             <strong><h6>Datos obligatorios *</h6></strong>
          </div>
          </div>
            {/* Formulario de Login */}
          <form>
            {/* Correo Electrónico */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-start">
              </label>
              <input
                type="email"
                className="form-control mx-auto"
                id="email"
                placeholder="Correo Electrónico *"
                required
                style={{ maxWidth: "450px" }}  // Limita el ancho de los campos
              />
            </div>

            {/* Contraseña */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-start">
              </label>
              <input
                type="password"
                className="form-control mx-auto"
                id="password"
                placeholder="Contraseña *"
                required
                style={{ maxWidth: "450px" }}  // Limita el ancho de los campos
              />
            </div>
            <br></br>

            {/* Botón de Enviar */}
            <div className="d-flex justify-content-center">
              {/* Link que redirige a la página de inicio */}
              <Link to="/home" className="btn btn-primary">
                Iniciar sesión
              </Link>
            </div>
          </form>
        </div>
        <br></br>

        {/* Imagen al lado derecho */}
        <div className="col-md-6 d-flex justify-content-center align-items-center p-0 m-0">
        <img
    alt="Login Image"
    src="/src/assets/imgs/negro.svg" // Ruta de la imagen
    className="img-fluid" // Hace que la imagen se ajuste bien en la pantalla
    style={{
      width: "100%",           // La imagen ocupará el 100% del ancho del contenedor
      height: "100vh",         // La imagen ocupará el 100% de la altura de la pantalla
      objectFit: "cover",      // Mantiene el aspecto de la imagen, recortándola si es necesario
    }}
  />
</div>
      </div>
    </div>
  );
}
