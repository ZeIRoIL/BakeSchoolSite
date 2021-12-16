import logo from '../../../Assets/img/logo.svg';
import React, { Component } from 'react';
import { Card, Button,Placeholder } from 'react-bootstrap';

import heart from '../../../Assets/img/heart.svg';
import search from '../../../Assets/img/MainSite/6424.jpg';


// style for the cards
import '../../../Assets/Style/Card/card.scss';

var picsize = 4 + 'rem';

function CardCategory({image, name, level, title, ctaButton,target}){
    return (
        <>
        <div className="card">
                <div className='card-top'>
                    <div className='card-headertext'>
                        <p>{name}</p>
                    </div>
                    <div className='card-bottom'>
                        <img src={image} className="" alt="logo" />
                        <div className='card-details'>
                            <img className='detailslogo' src={search}  alt="logo" />
                            <img className='difficultlogo' src={heart}  alt="logo" />
                        </div>
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