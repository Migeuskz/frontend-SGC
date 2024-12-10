import { useEffect, useState } from "react";
import { getProveedoresAutorizados } from "../../api/proveedoresApi";

interface Proveedor {
  id: number;
  proveedor: string;
  medio_de_contacto: string;
  nombre_del_contacto: string;
  clasificacion: string;
}

export default function TablaPDF() {
  const [proveedores, setProveedores] = useState<Proveedor[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProveedores = async () => {
      try {
        const data = await getProveedoresAutorizados();

        // Acceder a la propiedad "proveedores" del objeto
        if (data.proveedores) {
          setProveedores(data.proveedores);
        } else {
          setError("No se encontraron proveedores");
        }
        console.log(data.proveedores);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchProveedores();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Lista de Proveedores Autorizados</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Proveedor</th>
            <th>Medio de Contacto</th>
            <th>Nombre del Contacto</th>
            <th>Clasificación</th>
          </tr>
        </thead>
        <tbody>
          {proveedores.length > 0 ? (
            proveedores.map((proveedor, index) => (
              <tr key={proveedor.id}>
                <td>{index + 1}</td>
                <td>{proveedor.proveedor}</td>
                <td>{proveedor.medio_de_contacto}</td>
                <td>{proveedor.nombre_del_contacto}</td>
                <td>{proveedor.clasificacion}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center">
                No hay proveedores disponibles
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
