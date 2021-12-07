import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

// Assets
import pic1 from '../../Assets/img/MainSite/pic1.jpg';
// Style
import '../../Assets/Style/Blocks/mainblock.css';

const mainBlock = () => {
    return (
        <div>
            <div className="cardmain">
                <Container>
                    <Row>
                        <Col xs={3} md={5}>
                            <Image src={pic1} className="mainblockimg" roundedCircle />
                        </Col>
                        <Col>empor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            <br />
                            <Button variant="primary" size="lg">
                                Large button
                            </Button>{' '}
                        </Col>


                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default mainBlock
