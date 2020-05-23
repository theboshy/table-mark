import React, {FunctionComponent, useEffect, useState} from 'react';

export const Card = (props: any) => {
    const [time, setTime] = useState(0);

    useEffect(()=> {
        console.log('time changed!');
    }, [time]);

    const showConsole = (log = '') => {
        console.log('result:', log);
        asyncFunction().then( () => {
            setTime(1);
        });
        runCallback(callbackC);
    };

    const callbackC =  () => {
        console.log('callback executed!');
    }

    const runCallback = (callback: any) => {
        callback();
    }

    const asyncFunction = () => {
        return new Promise(resolve =>
            setTimeout(() => resolve(), 2000)
        );
    }

    return <>
        <p>Card component {props.name} {time}</p>
        <button onClick={() => showConsole()}>CLICK ME!</button>
    </>
}
