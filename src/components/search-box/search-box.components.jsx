import React from "react";
import './search-box.style.css';

export const Search = ({placeholder, handleChange}) => (
    <input className='search' type="search" placeholder='search monsters' onChange={handleChange}></input>
)