import api from "./api"

export interface LoginData {
    email: string;
    password: string;
  }

  export const loginApi = async (data: LoginData) => {
    try {
      const response = await api.post("/login", data);
      return response.data; // Devuelve los datos recibidos del servidor
    } catch (error: any) {
      if (error.response) {
        // Manejo de errores de la API
        throw new Error(error.response.data.message || "Error en el login");
      }
      throw new Error("Error de conexión con el servidor");
    }
  };