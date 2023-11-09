import { API_URL } from "../config";

export async function getTemas() { 
    try {
      const response = await fetch(`${API_URL}/temas?populate=*`)
      if (!response.ok) {
        throw new Error('No se pudo obtener la información de la API.');
      }
      const data = await response.json();
      //console.log(data.data)

      return data.data; // Devuelve solo el arreglo de temas (data) de la respuesta.
  
    } catch (error) {
      console.error(error);
      throw error; // Manejo de errores
    }
    
  }

  export async function getArticles() {
    try {
      const response = await fetch(`${API_URL}/temas?populate=*`);
      if (!response.ok) {
        throw new Error('No se pudo obtener la información de la API.');
      }
      const data = await response.json();
  
      const allArticles = [];
  
      data.data.forEach((tema) => {
        tema.attributes.articles.data.forEach((article) => {
          const articleTitle = article.attributes.title;
          const articleContent = article.attributes.content;
          const articleURL = article.attributes.url;
  
          allArticles.push({ articleTitle, articleContent, articleURL });
        });
      });
  
      console.log(allArticles);
  
      return data.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }