import { Button } from 'react-bootstrap';
import React from 'react';

import {
    Link
} from "react-router-dom";
// 
import pic1 from "../../Assets/img/Description/Schokolade/SchokoHerkunft.jpg";

import Image from '../../Assets/img/Description/Zucker/zucker.png';

// import styles
import '../../Assets/Style/pages/Description/zucker.scss';

export const Schokolade = () => {
    return (
        <div>
            <div className='container mt-5'>
                <img src={Image} width={200} className="descriptionImg mb-3" alt="logo" />
            </div>
            <h1>Schokolade</h1>
            <div className='container'>
                <p>Ist eine Mischung aus Kakaomasse und Kakaobutter, Zucker und anderen erlaubten Zusatzstoffen </p>

                <div className='cardMainDes p-3 m-3'>
                    <p>Die Schokolade wie man sie aus dem Supermarkt kennt, in ihrer herkömmlichen Tafel Form, hat einen geringeren Kakaobutteranteil 
                        (mindestens 18%) und einen höheren Zuckergehalt. Schokoladen eignen sich daher nicht zum Überziehen und Tunken, sie ist eher 
                        dickflüssiger.</p>
                </div>


                {/* Arten von Schokolade */}
                <div className='row  mb-5 mt-5'>
                    

                    {/* Zweifachzucker */}
                    <div className='col sp-3 m-3 cardMainDes'>
                        <div className='row cardHeaderDes'>
                            <h3 className='text-center'>Einfachzucker</h3>
                        </div>
                        <div className='row cardBodyDes'>
                            <p>Milchzucker</p>
                            <ul className=''>  
                                <li>in Milchzucker</li>
                            </ul>
                        </div>
                        <div className='row cardBodyDes'>
                            <p>Malzzucker</p>
                            <ul className=''>  
                                <li>in Bier</li>
                            </ul>
                        </div>
                    </div>
                    {/* VielfachZucker Description */}
                    <div className='col sp-3 m-3 cardMainDes'>
                        <div className='row cardHeaderDes'>
                            <h3 className='text-center'>VielfachZucker</h3>
                        </div>
                        <div className='row cardBodyDes'>
                            <p>Stärke</p>
                            <ul className=''>  
                                <li>in Pflanzen und Getreideprodukten</li>
                                <li>in Kartfoffeln</li>
                                <li>in Maisstärke</li>
                                <li>in Weizenstärke</li>
                            </ul>
                        </div>
                        <div className='row cardBodyDes'>
                            <p>Zellulose</p>
                            <ul className=''>  
                                <li>in Ballaststoffe</li>
                                <li>sind sehr wichtig für uns</li>
                            </ul>
                        </div>
                        <div className='row cardBodyDes'>
                            <p>Glycogen</p>
                            <ul className=''>  
                                <li>in tierischen Produkten</li>
                                <li>sind sehr wichtig für uns</li>
                            </ul>
                        </div>
                    </div>
                </div>
        
                <div className='cardMainDes p-3 m-3'>
                    <p>Zucker wird aus der Zuckerrübe und aus dem Zuckerrohr gewonnen.	Diese bestehen meist aus circa 16-22% Kohlenhydrate und aus ca. 75% Wasser.
                        Das Zuckerrohr wird in allen tropischen Ländern angebaut und kann bis zu 4m hoch werden. Der Zucker befindet sich in den 2-5cm dicken stängeln.
                        Die Zuckerrübe wird in den wärmeren Teilen von Österreich angebaut und befindet sich in den Wurzeln unter der Erde.
                    </p>
                </div>

                <div className='cardMainHint p-3 m-3'>
                    <p>Für 1kg Zucker braucht man 6 kg Zuckerrüben!</p>
                </div>
                <div className='ZuckerSortContainer'>
                    <img src={pic1} alt="" />
                </div>

                <div className='cardMainDes p-3 m-3'>
                    <div>
                        <h4>Die Gewinnung des Zuckers aus der Zuckerrübe</h4>
                    </div>
                    <div>
                        <p>Die Ernte der Zuckerrübe findet im September bis Dezember statt!</p>
                    </div>
                    
                
                
                <div className='ZuckerStepMain '>
                    <div className='row'>
                        <div className='col-3'>
                        <img src={Image} width={100} className="descriptionImg" alt="logo" />
                        </div>
                        <div className='col-9'>
                            <h4>Vorbereitung</h4>
                            <p>Rüben waschen <i className=''></i> Zu „Schnitzel“ zerkleinern</p>
                        </div>
                    </div>
                </div>
                <div className='ZuckerStepMain '>
                    <div className='row'>
                        <div className='col-3'>
                        <img src={Image} width={100} className="descriptionImg" alt="logo" />
                        </div>
                        <div className='col-9'>
                            <h4>Extrahieren</h4>
                            <p>Durch Heißes Wasser wird der sogenannte Rohsaft herausgelöst</p>
                        </div>
                    </div>
                </div>
                <div className='ZuckerStepMain '>
                    <div className='row'>
                        <div className='col-3'>
                        <img src={Image} width={100} className="descriptionImg" alt="logo" />
                        </div>
                        <div className='col-9'>
                            <h4>Saftreinigung</h4>
                            <p>Nichtzuckerstoffe werden herausgelöst und es entsteht der Dünnsaft</p>
                        </div>
                    </div>
                </div>
                <div className='ZuckerStepMain '>
                    <div className='row'>
                        <div className='col-3'>
                        <img src={Image} width={100} className="descriptionImg" alt="logo" />
                        </div>
                        <div className='col-9'>
                            <h4>Eindickung</h4>
                            <p>Ein Dicksaft entsteht durch mehrstufigen Verdampfen und dieser enthält 70% Zuckergehalt</p>
                        </div>
                    </div>
                </div>
                <div className='ZuckerStepMain  '>
                    <div className='row'>
                        <div className='col-3'>
                        <img src={Image} width={100} className="descriptionImg" alt="logo" />
                        </div>
                        <div className='col-9'>
                            <h4>Kristallisieren</h4>
                            <p>In einer Kochstation wird der Dicksaft unter Vakuum eingedickt und mit Zugabe von fein vermahlenem Zucker weiter bis zur ewünschten Korngröße eingedickt.</p>
                        </div>
                    </div>
                </div>
                <div className='ZuckerStepMain '>
                    <div className='row'>
                        <div className='col-3'>
                        <img src={Image} width={100} className="descriptionImg" alt="logo" />
                        </div>
                        <div className='col-9'>
                            <h4>Zentrifugieren</h4>
                            <p>Der Zucker ist noch immer nicht ganz rein, er muss noch von der sogenannten Melasse getrennt werden! Diese Melasse ist ein zähflüssiger, dunkelbrauner Zuckersirup die als Nebenprodukt der Herstellung für die Erzeugung von Hefe und für die Alkoholerzeugung dient.</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className='cardMainDes  '>
                    <h4>Lagerung von Zucker</h4>
                    <p>Der Zucker zieht Feuchtigkeit an daher sollte er Trocken und gut verschlossen gelagert werden! Durch gute und richtige Lagerung ist der Zucker fast unbegrenzt haltbar!</p>
                </div>
                
            </div>
            <div>
                <Link to="/questions">
                    <button className="mainbtn" >
                        Zum Quiz!
                    </button>
                </Link>

            </div>
        </div>
    )
}
