import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import logo from '../../Assets/img/logo.svg'

import '../../Assets/Style/Footer/footer.scss';


const footer = () => {
    return (
        <div className="footercontainer">
            <div className="contact-info">
                    <h3 className="contact-title">
                        Feedback?
                    </h3>
                    <h2>Her damit!</h2>
                    <p>Neuhofen an der Ybbs 3244</p>
                    <p>+44 786 997 7162</p>
                    <p>lernbacken@gmail.com</p>
                </div>
                <div className="bg-image">
                    <img src={logo} alt="" />
                </div>
        </div>
    )
}

export default footer
