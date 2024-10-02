import React, { useState, useEffect} from "react";
import axios from "axios";

export function Ultimas_noticias () {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    const [ultimas_noticias, setUltimas_noticias] = useState([]);

    useEffect(() => {
        const fetchUltimas_noticias = async () => {
            try {
                const response = await axios.get(`https://api.currentsapi.services/v1/latest-news?language=us&apiKey=Xbyf8b97Btv1XMBs5kkcsQobAxv-EXODFwluyw2VyJj9MNdy`);
                setData(response.data); // Guardar datos de clima   
                console.log('entrando a la api');  
                console.log(response.data);   
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
        <h1>ULTIMAS NOTICIAS</h1>  
    );    

}

export default Ultimas_noticias

