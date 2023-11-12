import { getArticlesForTema } from '@/app/services/data';
import '../../src/app/globals.css';

export default function Tema({ titleTema, articles }) {    
    return (
      <main className='min-h-screen flex-col items-center p-14'>
      <div>
        <h1 className='text-4xl font-extrabold dark:text-white mb-3 text-center'>{titleTema}</h1>
      </div>
      <div className='mt-5'>
        {articles.map((article, index) => (
          <div key={index}>
            <a href="#" className='text-xl font-semibold dark:text-white align-middle hover:underline'>{article.articleTitle}</a>
            <h4 className='mb-3 text-gray-500 dark:text-gray-400 align-middle'>Creado el {article.articleDate}</h4>
            {/* Puedes agregar más elementos aquí según tu estructura de datos */}
          </div>
        ))}
      </div>
    </main>
    );          
  } 

  export async function getServerSideProps(context) {
    const { slug } = context.query;
    try {
      const { titleTema,articles } = await getArticlesForTema(slug);
      console.log('titulo tema:', titleTema);  // Añade este log para verificar la salida
      return {
        props: {
          titleTema,
          articles,
        },
      };
    } catch (error) {
      console.error('Error en la solicitud:', error);
      return {
        props: {
          titleTema: null,
          articles: [],
        },
      };
    }
  }
  

