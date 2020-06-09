import React from 'react';
import './cardAuthor.scss';
import {Keys} from "../../keys";
import {StorageService} from "../../services/save.local.storage";
import { useHistory } from 'react-router-dom';

export const CardAuthor = (props: any) => {
    const history = useHistory();
    const storageService = new StorageService();
    let user = storageService.get(Keys.USER);

    const handle = (action : any) => {
        console.log(props.author);
        if (user){
            user.icon = props.author;
            storageService.set(Keys.USER, user);
            if(action){
                action(props.author.id);
            }
            history.push('/game');
        }else{
            console.log("No se ha creado un usuario")
            history.push('/');
        }
    }
    return <>
        <div className="container" onClick={() => handle(props.action)}>
            <img src={props.author.icon} alt={props.author.name} />
            <p className="title">{props.author.name}</p>
            <div className="overlay"></div>
        </div>
    </>
};
