import { API_URL } from "../config";

export async function getTemas() { 
    try {
      const response = await fetch(`${API_URL}/temas?_populate=*`)
      if (!response.ok) {
        throw new Error('No se pudo obtener la información de la API.');
      }
      
      const data = await response.json();
      return data.data; // Devuelve solo el arreglo de temas (data) de la respuesta.
  
    } catch (error) {
      console.error(error);
      throw error; // Manejo de errores
    }
  }