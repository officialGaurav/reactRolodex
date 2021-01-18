import React from 'react';
import './cards.style.css';

export const Cards = props => (
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set5&size=150x250`} />
        <h2> {props.monster.name} </h2>
        <p> {props.monster.address.city} </p>
    </div>
)