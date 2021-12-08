import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

// Assets
import pic1 from '../../Assets/img/MainSite/pic1.jpg';
// Style
import '../../Assets/Style/Blocks/mainblock.css';
import '../../Assets/Style/Button/MainBtn.css';




function mainBlock ({side}) {
    return (
                
                  <SwitchCase name={side}/>
             
    )
}

// choose the side for the main text 
function SwitchCase(props)
{
var elementRight =   

            <Container className="cardmain mainblock-right ">
                    <Row>
                        <Col className="cardText ">
                            empor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            <br />
                            <Button className="mainbtn" variant="primary" size="lg">
                                Mehr Details
                            </Button>
                        </Col>
                        <Col xs={3} md={5}>
                            <Image src={pic1} className="mainblockimg" roundedCircle />
                        </Col>
                    </Row> 
            </Container>
var elementLeft =   
            <Container className="cardmain mainblock-left ">
                <Row>
                    <Col xs={3} md={5}>
                        <Image src={pic1} className="mainblockimg" roundedCircle />
                    </Col>
                    <Col className="cardText">
                        empor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        <br />
                        <Button className="mainbtn" variant="primary" size="lg">
                            Mehr Details
                        </Button>
                    </Col>
                </Row> 
            </Container>

    switch(props.name) {
        case 'left':
          return elementRight;
        case 'right':
          return elementLeft;
      }
}

export default mainBlock
