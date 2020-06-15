import React from 'react';
import './levelSelector.scss'
export const LevelSelectorPage = (props: any)=>{

    const pointCount = 7;
    const circleRadius = 160;
    const startAnimDelta = 5;
    const circumference = Math.PI * circleRadius * 2;

    var selectedItemIndex = -1;

    var circlePath = document.getElementById('mask-circle');

    const onMouseLeave = () => {
        let index = (selectedItemIndex !== -1) ? selectedItemIndex : 0;
        calculateOffset(index);
    };

    const onClick = (index: any) => {
        selectedItemIndex = (selectedItemIndex === index) ? -1 : index;
        calculateOffset(index);

        let activeListItem = document.querySelectorAll('.navigation-circle-list-item.active');
        if (activeListItem.length > 0) activeListItem[0].classList.remove('active');

        let listItem = document.querySelectorAll('.navigation-circle-list-item:nth-of-type(' + selectedItemIndex + ')');
        if (listItem.length > 0) listItem[0].classList.add('active');
    };


    const calculateOffset = (index=0) => {
        let offset = 0;

        if (index !== 0) offset = (circumference / pointCount) * (pointCount - index);
        if (circlePath) {
            circlePath.style.strokeDashoffset = `${offset}px`;
        }
    };

// INTRO

    let buffer = 500;
    let delay = 1000 * (1 + (pointCount / startAnimDelta) - (1 / startAnimDelta)) + buffer;

    setTimeout(() => onClick(1), delay);

    return <>
        <div className="main">
            <div className="navigation-circle">
                <div className="navigation-circle__inner">
                    <svg className="navigation-circle-svg navigation-circle-svg--opaque" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 320 320"
                         >
                        <circle cx="160" cy="160" r="158" fill="none" stroke-width="1" stroke="#c644fc"
                                stroke-linecap="round" stroke-miterlimit="10"
                                ></circle>
                    </svg>
                    <svg
                        className="navigation-circle-svg navigation-circle-svg--mask" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 320 320"
                        >
                        <circle id="mask-circle" cx="160" cy="160" r="158" fill="none" stroke-width="2" stroke="#c644fc"
                                stroke-linecap="round" stroke-miterlimit="10"
                                ></circle>
                    </svg>
                    <ul className="navigation-circle__list">
                        <li className="navigation-circle-list-item">
                            <a className="navigation-circle-list-item__point" onClick={() => onClick(1)}
                               onMouseEnter={() => calculateOffset(1)} onMouseLeave={() => onMouseLeave()}>
                                <div className="navigation-circle-list-item__meta">
                                    <h3 className="navigation-circle-list-item__title">Level 1</h3>
                                    <h4 className="navigation-circle-list-item__subtitle">Descripcion
                                        round</h4>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}
