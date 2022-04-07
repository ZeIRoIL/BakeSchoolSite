import logo from '../../../Assets/img/logo.svg';
import React, { Component, useState } from 'react';
import { Card, Button, Placeholder } from 'react-bootstrap';

// Routing
import { Outlet, NavLink, Routes, Route } from "react-router-dom";


import icon from '../../../Assets/img/Category/schneebesen.png';
import search from '../../../Assets/img/Category/lupe.png';

// import the specified Page


// style for the cards
import '../../../Assets/Style/Card/card.scss';


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
            <div className='d-table-cell'>
                <img className='difficultlogo' src={icon} alt="logo" />
            </div>
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
    <div className="card shadow-sm card-section">
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
            <br />
            <div className='card-details'>
                <img className='detailslogo' data-bs-toggle="modal" data-bs-target="#descritionModal" src={search} alt="logo" onClick={showDescription} />


                {setDifficult()}
            </div>
        </div>
    </div>
    <div class="modal fade" id="descritionModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <h5 class=" text-center">Beschreibung</h5>
                </div>
                <div class="modal-body">
                    {Text}
                </div>
            </div>
        </div>
    </div>
</>
);
}

export default CardCategory