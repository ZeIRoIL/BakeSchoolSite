import logo from '../../Assets/img/logo.svg';
import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

// Style 
import '../../Assets/Style/Features/carousel.scss';

// Components
import pic1 from '../../Assets/img/MainSite/pic1.jpg';
import pic2 from '../../Assets/img/MainSite/pic2.jpg';
import pic3 from '../../Assets/img/MainSite/pic3.jpg';

export class CarouselMain extends Component {
    render() {

        return (
            <div className="d-flex justify-content-around">
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100 caroImg"
                            src={pic1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Wie kann ich einen Kuchen backen?</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100 caroImg"
                            src={pic2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Was ist alles im Essen drinnen?</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 caroImg"
                            src={pic3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Mehr übers Backen lernen!</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default CarouselMain;