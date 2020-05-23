import React, {FunctionComponent} from 'react';

export const Card = (props: any) => {

    const showConsole = (log = '') => {
        console.log('result:', log);
    };

    return <>
        <p>Card component {props.name}</p>
        <button onClick={() => showConsole()}>CLICK ME!</button>
    </>
}
