import logo from '../../../Assets/img/logo.svg';
import React, { Component } from 'react';
import { Card, Button,Placeholder } from 'react-bootstrap';

import heart from '../../../Assets/img/heart.svg';
import time from '../../../Assets/img/time.svg';


var picsize = 4 + 'rem';

function CardCategory({image, avatar, name, price, title, ctaButton}){
    return (
        <div className="g-card">
                <div className="inner-content">
                    <div className="image">
                        <img src={image} alt="" />
                        <div className="name">
                            <img src={avatar} alt="" />
                            <p>{name}</p>
                        </div>
                    </div>
                    <div className="card-content">
                        <h6 className="card-title">{title}</h6>
                        <p>Price <span className="price">{price}</span> &nbsp; &nbsp; <span className="l-text">1 of 15</span></p>
                        <p>Highest Bid : &nbsp; <span className="price">{price}</span> </p>
                        <div className="duration">
                            <p><img src={time} alt="" /> 7 Hours Ago</p>
                            <p><img src={heart} alt="" /> 200 Likes</p>
                        </div>
                        {/* <div className="cta-btn">
                            <CtaButton name={'View More Details'}/>
                        </div> */}
                    </div>
                </div>
        </div>
    );
}

export default CardCategory