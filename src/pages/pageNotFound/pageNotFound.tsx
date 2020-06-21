import React from 'react';
import {useHistory} from 'react-router-dom'
import {Keys} from "../../keys";
 export const PageNotFound = (props: any) =>{
    const history = useHistory();
     const handle = () => {
        history.push(Keys.LOGIN);
     }

     return <>
         <div>
             <main>
                 <h1>No se puede acceder a esta parte del juego.</h1>
                 <p>
                     Oprime el botón de abajo para ser redirigido a una parte existente en el juego... <em>¡Vamos!</em>
                 </p>
                 <button onClick={handle}>VOLVER AL JUEGO</button>
             </main>
         </div>
         </>
 };