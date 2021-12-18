import logo from '../../../Assets/img/logo.svg';
import React, { Component } from 'react';
import { Card, Button, Placeholder } from 'react-bootstrap';

// Routing
import { Outlet, NavLink, Routes,Route } from "react-router-dom";


import heart from '../../../Assets/img/heart.svg';
import search from '../../../Assets/img/MainSite/6424.jpg';

// import the specified Page


// style for the cards
import '../../../Assets/Style/Card/card.scss';


var picsize = 4 + 'rem';

function CardCategory({number, image, name, level, title, ctaButton, target }) {
    return (
        <>
            <div className="card">
                <div className='card-top'>
                    <div className='card-headertext'>
                        <p>{name}</p>
                    </div>
                    
                    <div className='card-bottom'>
                    <NavLink
                        to={`${name}`}
                        key={number}>
                        <img src={image} className="descriptionImg" alt="logo" /> 
                    </NavLink> 
                    </div>
                   <br/>
                    <div className='card-details'>
                            <img className='detailslogo' src={search} alt="logo" />
                            <img className='difficultlogo' src={heart} alt="logo" />
                    </div>
                </div>
            </div>
            <div className='categories-details'>
                <h2>Beschreibung</h2>
                <p>{title}</p>
            </div>
        </>
    );
}

export default CardCategory