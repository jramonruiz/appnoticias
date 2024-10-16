import React, { useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import axios from "axios";

export function Detalle_noticia () {
    
    let {search} = useLocation();

    console.log(search);

    let query = new URLSearchParams(search);

    let titulo = query.get("titulo");
    let descripcion = query.get("descripcion");
    let imagen = query.get("imagen");
    let contenido = query.get("contenido");

    return (        
        <table width="100%">
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
              <td align="center" colspan="2"><span className='valor'>DETALLE DE LA NOTICIA</span></td>
        </tr>
        <tr>
            <td align="center">
              <div className="shadow-box">
                  <p className="texto_temperatura_diario">
                  <img src={imagen} class="image" />      
                  </p>    
                  <p className="texto_temperatura_diario">
                        <span className='descripcion'>{titulo}</span></p>    
                  <p className="texto_temperatura_diario">
                        <span className='descripcion'>{descripcion}</span></p>    
                  <p className="texto_temperatura_diario">
                        <span className='descripcion'>{contenido}</span></p>    
                </div>
            </td>
        </tr>
    </table>
    );
}

export default Detalle_noticia