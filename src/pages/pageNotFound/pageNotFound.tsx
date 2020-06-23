import React from 'react';
import {useHistory} from 'react-router-dom'
import {Keys} from "../../keys";
import './pageNotFound.scss';
 export const PageNotFound = (props: any) =>{
    const history = useHistory();
     const handle = () => {
        history.push(Keys.PAGE_LOGIN);
     }

     return <>
         <section id="not-found">
             <div id="title">Esta página no existe en el juego</div>
             <div id={"subtitle"}>
                 Oprime el botón de abajo para ser redirigido a una parte existente en el juego... <em>¡Vamos!</em></div>
             <button id="button" onClick={handle}>VOLVER AL JUEGO</button>
             <div className="circles">
                 <p>404
                     <small>PÁGINA NO ENCONTRADA</small>
                 </p>
                 <span className="circle big"></span>
                 <span className="circle med"></span>
                 <span className="circle small"></span>
             </div>
         </section>
         </>
 };