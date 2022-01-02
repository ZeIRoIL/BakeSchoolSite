import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

// Assets
import pic1 from '../../Assets/img/MainSite/pic1.jpg';
// Style
import '../../Assets/Style/Blocks/mainblock.scss';
import '../../Assets/Style/Button/MainBtn.scss';




function mainBlock ({side}) {
    return (
                
                  <SwitchCase name={side}/>
             
    )
}

// choose the side for the main text 
function SwitchCase(props)
{
var elementRight =   

            <div className="container cardmain mainblock-right ">
                    <div className='row'>
                        <div className="col cardText ">
                            empor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            <br />
                            <Button className="mainbtn" variant="primary" size="lg">
                                Mehr Details
                            </Button>
                        </div>
                        <div className='col'>
                            <Image src={pic1} className="mainblockimg" roundedCircle />
                        </div>
                    </div> 
            </div>
var elementLeft =   
            <div className="container cardmain mainblock-left ">
                <div className='row'>
                    <div className='col' >
                        <Image src={pic1} className="mainblockimg" roundedCircle />
                    </div>
                    <div  className=" col cardText">
                        empor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        <br />
                        <Button className="mainbtn" variant="primary" size="lg">
                            Mehr Details
                        </Button>
                    </div>
                </div> 
            </div>

    switch(props.name) {
        case 'left':
          return elementRight;
        case 'right':
          return elementLeft;
      }
}

export default mainBlock
