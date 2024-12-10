import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { getProveedoresAutorizados } from "../../api/proveedoresApi";

interface Proveedor {
  id: number;
  nombre: string; // Cambia esto según los atributos de tu modelo
  cantidad: number; // Asegúrate de tener un campo con valores numéricos
}

export default function GraficasComponent() {
  const [data, setData] = useState<Proveedor[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("access_token"); // Recuperar el token del login

        if (!token) {
          throw new Error("Usuario no autenticado");
        }

        // Limpieza del token (remover prefijo "5|")
        const cleanToken = token.split("|")[1];

        if (!cleanToken) {
          throw new Error("Token inválido");
        }
        console.log(cleanToken)
        const proveedores = await getProveedoresAutorizados(cleanToken); // Usar el token limpio
        setData(proveedores);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: "1700px", height: "400px" }}>
      <h2 className="text-center">Proveedores Autorizados</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nombre" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="cantidad" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
