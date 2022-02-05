import logo from '../../Assets/img/logo.svg';
import React, { Component } from 'react';


// Style 
import '../../Assets/Style/Features/carousel.scss';

// Components
import pic1 from '../../Assets/img/MainSite/KategorieSlider.jpeg';
import pic2 from '../../Assets/img/MainSite/RezeptSlider.jpeg';
import pic3 from '../../Assets/img/MainSite/Backkurse.jpeg';

export class CarouselMain extends Component {
    render() {

        return (
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={pic1} class="caroImg d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block slider-text">
                            <p className='fs-3'>Wie entsteht Brot? Wie kann man Schokolade verarbeiten? Mehr Wissen? </p>
                            <button  type='button'>Mehr Wissen!</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={pic2} class="caroImg d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block slider-text">
                            <p className='fs-3'>Nach einem Quiz bekommst du eine Belohung. <br/>Ein Kinderrezept zum Nachbacken!</p>
                               <button type='button'>Rezept haben!</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={pic3} class="caroImg d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block slider-text">
                            <p className='fs-3'>Du möchtest mit dem Profi's mitarbeiten und lernen?<br/>Hier sind die Backkurse!</p>
                            <button  type='button'>Mit einem Profi backen!</button>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        )
    }
}

export default CarouselMain;