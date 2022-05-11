import logo from '../../../Assets/img/logo.svg';
import React, { Component, useState } from 'react';
import { Card, Button, Placeholder } from 'react-bootstrap';

// Routing
import { Outlet, NavLink, Routes, Route } from "react-router-dom";


import icon from '../../../Assets/img/Category/schneebesen.png';
import search from '../../../Assets/img/Category/lupe.png';

// import the specified Page

// style for the cards

var picsize = 4 + 'rem';

function CardCategory({ number, image, name, level, title, ctaButton, target }) {

const showDescriptionModal = () => {

}

const [showDesc, setshowDesc] = useState(false);

// There is needed for the difficultlevels
const setDifficult = () => {
    console.log(level);
    const levels = [];
    for (var i = 0; i < level; i++) {
        levels.push(
                <img className='difficultlogo' src={icon} alt="logo" />
        );
    }
    return levels;
};

const showDescription = () => {
    showDesc ? setshowDesc(false) : setshowDesc(true);

    console.log(showDesc);
}


return (
<>
    <div className='category-card-main'>
        <h2>{name}</h2>
        <div className='categroy-card-image'>
        <NavLink
                to={`${name}`}
                key={number}>
                <img src={image} className="category-card-img " alt="logo" />
        </NavLink>
        </div>
        
        
        <div className='categroy-card-details'>        
                <p>Schwierigkeit </p>{setDifficult()}
        </div>
    </div>
</>
);
}

export default CardCategory