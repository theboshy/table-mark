import React from "react";
import {useHistory} from "react-router-dom";
import {Keys} from "../../keys";


export const InputScore = (props: any) =>{
    const history = useHistory();
    const handleButton = () =>{
        history.push(Keys.PAGE_TABLE_GAME);
    }

    return <>
        <button onClick={handleButton}>
            Botón
        </button>
    </>
}