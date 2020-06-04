import React from 'react';
import './cardAuthor.scss';
import {Keys} from "../../enums";
import {StorageService} from "../../services/save.local.storage";
export const CardAuthor = (props: any) => {
    const storageService = new StorageService();
    const handle = (action : any) => {
        let user = storageService.get('__user_name');
        if (user){
            user.icon = props.author;
        }
        storageService.set('__user_name', user);
        if(action){
            action(props.author.id);
        }
    }
    return <>
        <div className="container" onClick={() => handle(props.action)}>
            <img src={props.author.imagen} alt="" />
            <p className="title">{props.author.name}</p>
            <div className="overlay"></div>
        </div>
    </>
};
