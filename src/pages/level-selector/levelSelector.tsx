import React from 'react';
import './levelSelector.scss'
import {CardAuthor} from "../../components/cardAuthor/card.author";
import author from "../../mocks/authors.json";
export const LevelSelectorPage = (props: any)=>{

    const cards = () => {
        let authors = author;
        let cards: JSX.Element[] =  [];
        authors.forEach((aut) => {
            cards.push(<CardAuthor action={props.action} author={aut}/>)
        });
        return cards;
    }

    return <>
      {cards()}
    </>
}
