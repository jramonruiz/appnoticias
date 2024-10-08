import React, { useState, useEffect} from "react";
import axios from "axios";

export function Noticias_tecnologia () {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    //const [ultimas_noticias, setUltimas_noticias] = useState([]);
    const [titulos, setTitulos] = useState([]);

    useEffect(() => {
        const fetchNoticias_tecnologia = async () => {
            try {
                const response = await axios.get(`https://gnews.io/api/v4/top-headlines?category=technology&lang=es&apikey=0916952f5281314fd60dcb8b93736b61`);
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
                            const description=response.data.articles[i].description;
                            const published_total=response.data.articles[i].publishedAt;
                            const palabras_fecha = published_total.split("T"); // Divide la cadena en palabras
                            const published=palabras_fecha[0];

                            ftitulos.push({ id: i, titulo_noticia: titulo_noticia, imagen_noticia: imagen_noticia, 
                                description: description, published: published });
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
  
        fetchNoticias_tecnologia(); // Llamar a la función para obtener datos

    }, []); // Ejecutar solo al montar el componente    
    
    return (        
        <table width="100%">
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
              <td align="center" colspan="2"><span className='valor'>NOTICIAS TECNOLOGIA</span></td>
        </tr>
        {titulos.map(titulo => (
          <tr key={titulo.id}>
            <td width="50%">
                <div class="image-container">
                <img src={titulo.imagen_noticia} class="image" />
                <div class="text-overlay">{titulo.titulo_noticia}</div>
                </div>
            </td>    
            <td width="50%">
                <div className="shadow-box">
                    <p className="texto_temperatura_diario">
                        <span className='descripcion'>{titulo.description}</span></p>    
                <p className="texto_temperatura_diario">
                        <span className='publicado'>Publicado: {titulo.published}</span></p>    
                <button className="btn btn-danger">Ver mas..</button>
                </div>
            </td>
          </tr>
        ))}
    </table>
    );
}

export default Noticias_tecnologia

