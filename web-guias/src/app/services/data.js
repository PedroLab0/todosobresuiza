import { API_URL } from "../config";

export async function getTemas() { 
    try {
      const response = await fetch(`${API_URL}/temas?populate=*`)
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

  export async function getArticlesForTema(slug) {
  try {
    const response = await fetch(`${API_URL}/temas?populate=*`);
    if (!response.ok) {
      throw new Error('No se pudo obtener la información de la API.');
    }
    const data = await response.json();

    const result = {
      titleTema: null, // Inicializa el título del tema como nulo
      articles: [],
    };

    for (const tema of data.data) {
      if (tema.attributes.slug === slug) {
        // Encontramos el tema específico, ahora procesamos los artículos de ese tema.
        result.titleTema = tema.attributes.title;

        tema.attributes.articles.data.forEach((article) => {
          const articleTitle = article.attributes.title;
          const articleContent = article.attributes.content;
          const articleURL = article.attributes.url;
          const articleDate = article.attributes.date;

          result.articles.push({ articleTitle, articleContent, articleURL, articleDate });
        });

        // Detenemos la iteración una vez que encontramos el tema.
        break;
      }
    }

    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
