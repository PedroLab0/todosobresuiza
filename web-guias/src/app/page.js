import { getTemas } from './services/data'
import Link from 'next/link';

export default async function Home() {
  try {
    const temas = await getTemas();
    return (
      <main className="min-h-screen flex-col items-center p-14">
        <div className="z-10 max-w-5xl w-full items-center text-sm lg:flex justify-between mt-5">
          <h1 className="text-4xl font-bold dark:text-white mb-3">
            Guía sobre Zúrich 🇨🇭
          </h1>
      </div>
      <div className="grid grix-cols-1 lg:grid-cols-4 gap-4 mt-5">
      {temas && temas.map(tema => {
      const slug = tema.attributes.slug; // Declara la constante fuera del JSX
      return (
        <div key={tema.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover-bg-gray-700">
          <Link 
          href={`/tema/${slug}`} 
          as={`/tema/${slug}`}
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {tema.attributes.title}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {tema.attributes.description}
          </p>
          <Link
            href={`/tema/${slug}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            Leer más
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      );
    })}
    </div>
  </main>
  );

  } catch (error) {
    console.error('Error en la solicitud:', error);
    // Puedes agregar un mensaje de error en tu interfaz si lo deseas.
    return (
      <main className="min-h-screen flex-col items-center p-24">
        <div className="z-10 max-w-5xl w-full items-center text-sm lg:flex mt-5">
          <h1 className="text-4xl font-bold dark:text-white mb-3">
            Guía sobre Zúrich 🇨🇭
          </h1>
        </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-5">
          <p className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>Error al cargar. Contacta: <a className='font-medium text-blue-600 dark:text-blue-500 hover:underline' href='mailto:pedroansiofuentes@gmail.com'>pedroansiofuente@gmail.com</a></p>
          </div>
      </main>
    );
  }
}
