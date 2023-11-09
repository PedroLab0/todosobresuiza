import { useRouter } from 'next/router';

export default function Tema() {
    const router = useRouter();
    const { slug } = router.query;
    
    return (
            <div>
              <div>
                <h1>Tema: {slug}</h1>
                <h2>Aqui van todos los articulos</h2>
              </div>
              <div>
                <p>
                  Contenido del artículo
                </p>
              </div>
            </div>
        );         
  } 
  

