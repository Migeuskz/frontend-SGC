import { useState } from "react";
import { Navbar } from "../../Components/Navbar";
import fondo from "../../../public/logo.svg";
import { createProveedorAutorizado } from "../../api/proveedoresApi";
import { useNavigate } from "react-router-dom";

export default function Formularios() {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    proveedor: "",
    medio_de_contacto: "",
    nombre_del_contacto: "",
    clasificacion: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("access_token"); // Recuperar el token del login
      if (!token) {
        throw new Error("Usuario no autenticado");
      }

      // Enviar datos al backend
      await createProveedorAutorizado(formData, token);

      alert("Proveedor creado con éxito");
      // Limpia el formulario después de enviarlo
      setFormData({
        proveedor: "",
        medio_de_contacto: "",
        nombre_del_contacto: "",
        clasificacion: "",
      });
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-start vh-100"
      style={{
        padding: "20px",
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${fondo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "90% 90%",
        backgroundSize: "20%",
      }}
    >
      <Navbar />
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "800px",
          width: "100%",
          marginTop: "20px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{
            color: "#333",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          GENERAR PETICIÓN
        </h2>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="row gx-2">
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="proveedor" className="form-label" style={{ fontWeight: "bold", color: "#555" }}>
                Nombre de proveedor
              </label>
              <input
                type="text"
                className="form-control"
                id="proveedor"
                name="proveedor"
                placeholder="Nombre completo del proveedor"
                value={formData.proveedor}
                onChange={handleChange}
                style={{
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  padding: "10px",
                }}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="medio_de_contacto" className="form-label" style={{ fontWeight: "bold", color: "#555" }}>
                Medio de contacto
              </label>
              <input
                type="text"
                className="form-control"
                id="medio_de_contacto"
                name="medio_de_contacto"
                placeholder="Medio de contacto"
                value={formData.medio_de_contacto}
                onChange={handleChange}
                style={{
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  padding: "10px",
                }}
              />
            </div>
          </div>
        </div>

        <div className="row gx-2">
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="nombre_del_contacto" className="form-label" style={{ fontWeight: "bold", color: "#555" }}>
                Nombre del contacto
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre_del_contacto"
                name="nombre_del_contacto"
                placeholder="Nombre completo del contacto"
                value={formData.nombre_del_contacto}
                onChange={handleChange}
                style={{
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  padding: "10px",
                }}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="clasificacion" className="form-label" style={{ fontWeight: "bold", color: "#555" }}>
                Clasificación
              </label>
              <select
                className="form-select"
                id="clasificacion"
                name="clasificacion"
                value={formData.clasificacion}
                onChange={handleChange}
                style={{
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  padding: "10px",
                }}
              >
                <option value="">Selecciona uno</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
          </div>
        </div>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-primary me-md-2" type="button">
            Ver gráfica
          </button>
          <button className="btn btn-primary me-md-2" type="button" onClick={() => {
            navigate('/graficas/tabla')
          }}>
            Generar reporte PDF
          </button>
          <button className="btn btn-success" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
