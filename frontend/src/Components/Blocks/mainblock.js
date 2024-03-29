import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

// Assets
import pic1 from '../../Assets/img/MainSite/brot.jpg';
import pic2 from '../../Assets/img/MainSite/gebäck.jpg';

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
            <div className="mainblockHidden container">
            <div className="container cardmain mainblock-right ">
                    <div className='row'>
                        <div className="col cardText ">
                            <h2>Mehr Wissen über Brot oder Mehl?</h2>
                            <p>Eine Beschreibung und ein Quiz und DU bist sooo schlau wie ein Profi!</p>
                            <br />
                            <button type='button' className='mainbtn'>Schlau werden :) </button>
                        </div>
                        <div className='col'>
                            <Image src={pic1} className="mainblockimgright"  />
                        </div>
                   </div> 
                </div> 
                <hr></hr>
            </div>
var elementLeft =   
            <div className="container cardmain mainblock-left ">
                <div className='row'>
                    <div className='col' >
                        <Image src={pic2} className="mainblockimgleft"  />
                    </div>
                    <div  className=" col cardText">
                        <h2>Keine Backkurse gefunden?</h2>    
                        <p>Dein Kind will backen, aber du willst nicht das die Küche nach dem Backen aussieht wie auf einem Schlachtfeld?
                            <br/>
                            <p>Wir haben die Lösung!</p>
                        </p>
                        <br />
                        <button className='mainbtn'  type='button'>Zu einem Backkurs</button>
                    </div>
                </div> 
                <hr></hr>
            </div>

    switch(props.name) {
        case 'left':
          return elementRight;
        case 'right':
          return elementLeft;
      }
}

export default mainBlock
