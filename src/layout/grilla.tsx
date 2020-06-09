import React from 'react';
import author from '../mocks/authors.json';
import {CardAuthor} from "../components/cardAuthor/card.author";
import './layout.scss';

export const Grilla = (props: any) => {

    const cards = () => {
        let authors = author;
        let cards: JSX.Element[] =  [];
        authors.forEach((aut) => {
            cards.push(<CardAuthor action={props.action} author={aut} key={aut.id}/>)
        });
        return cards;
    }
    return <>
        <div className='layoutContainer'>
            {cards()}
        </div>
        </>
}
