import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api", // Cambia la URL según sea necesario
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Obtener todos los proveedores autorizados
export const getProveedoresAutorizados = async (token: string) => {
  try {
    const response = await api.get("/proveedores-autorizados", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // Devuelve los datos obtenidos
  } catch (error: any) {
    console.error("Error al obtener los proveedores autorizados:", error);
    throw new Error(error.response?.data?.message || "Error al obtener datos");
  }
};
