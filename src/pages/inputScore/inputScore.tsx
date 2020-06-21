import React from "react";
import {Link} from "react-router-dom";

export const InputScore = (props: any) =>{

    const handleButton = () =>{
        window.open("http://www.facebook.com");
    }

    return <>
        <button onClick={handleButton}>
            Botón
        </button>
    </>
}