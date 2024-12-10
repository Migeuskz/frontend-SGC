import React from "react";
import fondo from "../../../public/logo.svg";

export default function Formularios() {
  return (
    <div
      className="d-flex justify-content-center align-items-start vh-100"
      style={{
        padding: "20px",
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "90% 90%", // Posición hacia la derecha y abajo
    backgroundSize: "20%", // Reduce el tamaño de la imagen al 20% del contenedor
  }}
    >
      <form
        style={{
          maxWidth: "800px",
          width: "100%",
          marginTop: "20px",
          background: "white", // Fondo sólido para el formulario
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
       <br /><br /> <h2
          className="text-center mb-4"
          style={{
            color: "#333",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          GENERAR PETICIÓN
        </h2><br /><br />
        <div className="row gx-2">
          <div className="col-6">
            <div className="mb-3">
              <label
                htmlFor="text"
                className="form-label"
                style={{ fontWeight: "bold", color: "#555" }}
              >
                Nombre de proveedor
              </label>
              <input
                type="text"
                className="form-control"
                id="text"
                placeholder="Nombre completo del proveedor"
                style={{
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  padding: "10px",
                }}
              />
            </div>
          </div><br />
          <div className="col-6">
            <div className="mb-3">
              <label
                htmlFor="inputName"
                className="form-label"
                style={{ fontWeight: "bold", color: "#555" }}
              >
                Medio de contacto
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Medio de contacto"
                style={{
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  padding: "10px",
                }}
              />
            </div>
          </div>
        </div><br />
        <div className="row gx-2">
          <div className="col-6">
            <div className="mb-3">
              <label
                htmlFor="text"
                className="form-label"
                style={{ fontWeight: "bold", color: "#555" }}
              >
                Nombre del contacto
              </label>
              <input
                type="text"
                className="form-control"
                id="text"
                placeholder="Nombre completo del contacto"
                style={{
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  padding: "10px",
                }}
              />
            </div>
          </div><br />
          <div className="col-6">
            <div className="mb-3">
              <label
                htmlFor="text"
                className="form-label"
                style={{ fontWeight: "bold", color: "#555" }}
              >
                Clasificación
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                style={{
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  padding: "10px",
                }}
              >
                <option selected>Selecciona uno</option>
                <option value="1">A</option>
                <option value="2">B</option>
                <option value="3">C</option>
              </select>
            </div>
          </div><br />
        </div><br /><br />
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-primary me-md-2" type="button">
            Ver gráfica
          </button>
          <button className="btn btn-primary" type="button">
            Generar reporte PDF
          </button>
        </div>
      </form>

    </div>
  );
}
