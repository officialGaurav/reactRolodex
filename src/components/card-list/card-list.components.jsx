import React from 'react';
import { Cards } from '../cards/cards.components';
import './card-list.style.css';

export const CardList = (props) => {

    console.log("ts", new Date().getTime(), " -- ", props)
    return (<div className = 'card-list'>
        { props.monsters.map(monster => (
            <Cards key={monster.id} monster={monster}></Cards>
        ))}
    </div>);
}
