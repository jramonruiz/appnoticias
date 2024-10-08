import React, { useState, useEffect} from "react";
import axios from "axios";

export function Ultimas_noticias () {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    //const [ultimas_noticias, setUltimas_noticias] = useState([]);
    const [titulos, setTitulos] = useState([]);

    useEffect(() => {
        const fetchUltimas_noticias = async () => {
            try {
                const response = await axios.get(`https://gnews.io/api/v4/top-headlines?category=general&lang=es&apikey=0916952f5281314fd60dcb8b93736b61`);
                setData(response.data); // Guardar datos de clima   
                console.log('entrando a la api');  
                console.log(response.data);
                //const total_articulos = response.data.length;
                //console.log('numero de articulos que trae el json'+total_articulos);
                const ftitulos = [];
                let i = 0; // Comenzamos desde 1
                    while (i < 10) 
                        {  
                            const titulo_noticia=response.data.articles[i].title;
                            const imagen_noticia=response.data.articles[i].image;
                            ftitulos.push({ id: i, titulo_noticia: titulo_noticia, imagen_noticia: imagen_noticia });
                            setTitulos(ftitulos);
                            i++;
                        }
            } catch (err) {
                setError('No se pudo obtener las ultimas noticias. Intenta de nuevo.');
                console.log('No se pudo obtener las ultimas noticias');
                //console.error('Error fetching data:', error.response ? error.response.data : error.message);
            } finally {
                setLoading(false); // Cambiar el estado de carga
                console.log('cargando');                
            }
        };
  
        fetchUltimas_noticias(); // Llamar a la función para obtener datos

    }, []); // Ejecutar solo al montar el componente    
    
    return (        
        <table width="100%">
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
              <td align="center">ULTIMAS NOTICIAS</td>
        </tr>
        {titulos.map(titulo => (
          <tr key={titulo.id}>
            <div class="image-container">
            <img src={titulo.imagen_noticia} class="image" />
            <div class="text-overlay">{titulo.titulo_noticia}</div>
            </div>    
          </tr>
        ))}
    </table>
    );
}

export default Ultimas_noticias

