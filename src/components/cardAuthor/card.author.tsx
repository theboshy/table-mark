import React from 'react';
import './cardAuthor.scss';
import {Keys} from "../../keys";
import {StorageService} from "../../services/save.local.storage";
export const CardAuthor = (props: any) => {
    const storageService = new StorageService();
    const handle = (action : any) => {
        console.log(props.author);
        console.log(props.author.icon);
        let user = storageService.get(Keys.USER);
        if (user){
            user.icon = props.author;
        }
        storageService.set(Keys.USER, user);
        if(action){
            action(props.author.id);
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
