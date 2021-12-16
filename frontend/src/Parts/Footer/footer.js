import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import '../../Assets/Style/Footer/footer.scss';


const footer = () => {
    return (
        <div className="footercontainer">
            <Container >
                <Row  >
                    <Col>Impressum</Col>
                    <Col xs={5}>Created by Alex & Kasim </Col>
                    <Col>LernenundBacken 2021</Col>
                </Row>
            </Container>
        </div>
    )
}

export default footer
