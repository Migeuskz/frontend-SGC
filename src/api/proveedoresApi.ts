import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api", // Cambia la URL según sea necesario
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Obtener todos los proveedores autorizados
export const getProveedoresAutorizados = async () => {
    try {
      const token = localStorage.getItem("access_token"); // Recuperar el token de autenticación
      const response = await api.get("/proveedores-autorizados", {
        headers: {
          Authorization: `Bearer ${token}`, // Incluir el token de autenticación
        },
      });
      return response.data; // Devolver los datos obtenidos
    } catch (error: any) {
      console.error("Error al obtener los proveedores autorizados:", error.response?.data || error);
      throw new Error(error.response?.data?.message || "Error al obtener proveedores");
    }
  };

// Crear un nuevo proveedor autorizado
export const createProveedorAutorizado = async (data: any, token: string) => {
    try {
      const response = await api.post("/proveedores-autorizados", data, {
        headers: {
          Authorization: `Bearer ${token}`, // Token de autenticación
        },
      });
      return response.data; // Devuelve los datos de la API
    } catch (error: any) {
      console.error("Error al crear el proveedor:", error.response?.data || error);
      throw new Error(error.response?.data?.message || "Error al crear el proveedor");
    }
  };