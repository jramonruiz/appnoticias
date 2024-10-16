import React, { useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

export function Ultimas_noticias () {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    //const [ultimas_noticias, setUltimas_noticias] = useState([]);
    const [titulos, setTitulos] = useState([]);
    const [contenidonoticias, setContenidonoticias] = useState([]);

    useEffect(() => {
        const fetchUltimas_noticias = async () => {
            try {
                const response = await axios.get(`https://gnews.io/api/v4/top-headlines?category=general&lang=es&country=mx&apikey=0916952f5281314fd60dcb8b93736b61`);
                setData(response.data); // Guardar datos de clima   
                console.log('entrando a la api');  
                console.log(response.data);
                //const total_articulos = response.data.length;
                //console.log('numero de articulos que trae el json'+total_articulos);
                const ftitulos = [];
                const fcontenidonoticias = [];
                let i = 0; // Comenzamos desde 1
                    while (i < 10) 
                        {  
                            const titulo_noticia=response.data.articles[i].title;
                            const imagen_noticia=response.data.articles[i].image;
                            const description=response.data.articles[i].description;
                            const contenido=response.data.articles[i].content;
                            const published_total=response.data.articles[i].publishedAt;
                            const palabras_fecha = published_total.split("T"); // Divide la cadena en palabras
                            const published=palabras_fecha[0];

                            ftitulos.push({ id: i, titulo_noticia: titulo_noticia, imagen_noticia: imagen_noticia, 
                                description: description, published: published, contenido: contenido });

                            fcontenidonoticias.push({ id: i, titulo_noticia: titulo_noticia, contenido: contenido, 
                                    description: description, published: published });   

                            setTitulos(ftitulos);
                            setContenidonoticias(fcontenidonoticias);
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

    //console.log(titulos[0]);

    //const noticiascompletas=titulos; // Este es un ejemplo de parámetro que quieres enviar.

    //const noticiascompletas = encodeURIComponent(JSON.stringify(contenidonoticias));
    //const jsonData = {id:1, name:"Elemento 1", description:"Descripción del elemento"};
    //const noticiascompletas = encodeURIComponent(JSON.stringify(jsonData));

    //console.log(jsonData);

    
    return (        
        <table width="100%">
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
              <td align="center" colspan="2"><span className='valor'>ULTIMAS NOTICIAS</span></td>
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
                <Link to={`/detalle_noticia?titulo=`+titulo.titulo_noticia+`&descripcion=`+titulo.description+`&imagen=`+titulo.imagen_noticia+`&contenido=`+titulo.contenido+``}><button className="btn btn-danger">Ver mas..</button></Link>
                </div>
            </td>
          </tr>
        ))}
    </table>
    );
}

export default Ultimas_noticias

