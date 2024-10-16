import React, { useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

export function Ultimas_noticias () {
    //console.log(titulos[0]);

    //const noticiascompletas=titulos; // Este es un ejemplo de parámetro que quieres enviar.

    //const noticiascompletas = encodeURIComponent(JSON.stringify(contenidonoticias));
    const jsonData = {id:1, name:"Elemento 1", description:"http://www.urlenviada.com"};
    const noticiascompletas = encodeURIComponent(JSON.stringify(jsonData));

    console.log(noticiascompletas);

    
    return (        
        <table width="100%">
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
              <td align="center" colspan="2"><span className='valor'>ULTIMAS NOTICIAS</span></td>
        </tr>
          <tr key={noticiascompletas.id}>
            <td width="50%">
                <div className="shadow-box">
                    <p className="texto_temperatura_diario">
                        <span className='descripcion'>{noticiascompletas.description}</span></p>    
                <p className="texto_temperatura_diario">
                        <span className='publicado'>Publicado: {noticiascompletas.name}</span></p>    
                <Link to={`/detalle_noticia?inicio=1&fin=2`}><button className="btn btn-danger">Ver mas..</button></Link>
                </div>
            </td>
          </tr>
    </table>
    );
}

export default Ultimas_noticias

