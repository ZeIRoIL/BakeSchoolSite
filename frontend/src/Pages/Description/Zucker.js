import { Button } from 'react-bootstrap';
import React from 'react';

import {
    Link
} from "react-router-dom";
// 
import pic1 from "../../Assets/img/Description/Zucker/Arten.png";
import Herz from "../../Assets/img/Description/Zucker/zuckerHerz.jpg";
import ImageT from '../../Assets/img/Description/Zucker/zuckerSelf.png';
import Image from '../../Assets/img/Description/Zucker/pfeilunten.png';


// import styles
import '../../Assets/Style/pages/Description/zucker.scss';
export const Zucker = () => {
    return (
        <div>
            <div className='container mt-5'>
                <img src={ImageT} className="descriptionImg mb-3" alt="logo" />
            </div>
            <h1>Zucker</h1>
            <div className='container'>
                <p>Zucker ist meist ein Einfach oder Zweifachzucker. Der Zucker wird auch als Kohlenhydrat bezeichnet!</p>
                {/* EinfachZucker */}
                <div className='row  m-5 '>
                    <div className='col-2 sp-3 m-3 cardMainDes'>
                        <div className='row cardHeaderDes'>
                            <h3 className=''>Einfachzucker</h3>
                        </div>
                        <div className='row cardBodyDes'>
                            <p>Traubenzucker</p>
                            <ul className=''>  
                                <li>in Früchten</li>
                                <li>in Honig</li>
                                <li>in Weintrauben</li>
                            </ul>
                        </div>
                        <div className='row cardBodyDes'>
                            <p>Fruchtzucker</p>
                            <ul className=''>  
                                <li>in Früchten</li>
                            </ul>
                        </div>
                        <div className='row cardBodyDes'>
                            <p>Schleimzucker</p>
                            <ul className=''>  
                                <li>in Milchzucker</li>    
                            </ul>
                        </div>
                    </div>

                    {/* Zweifachzucker */}
                    <div className='col-2 sp-3 m-3 cardMainDes'>
                        <div className='row cardHeaderDes'>
                            <h3 className=''>Einfachzucker</h3>
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
                    <div className='col-2 sp-3 m-3 cardMainDes'>
                        <div className='row cardHeaderDes'>
                            <h3 className=''>VielfachZucker</h3>
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
                    <div className='col-2 sp-3 m-3 cardMainDes'>
                    <img src={Herz} width={900} className="zucker-header-image mb-3" alt="logo" />
                    </div>
                </div>
        
                <div className='cardMainDes m-3'>
                    <h2>Allgemein</h2>
                    <p>Zucker wird aus der Zuckerrübe und aus dem Zuckerrohr gewonnen.	Diese bestehen meist aus circa 16-22% Kohlenhydrate und aus ca. 75% Wasser.
                        Das Zuckerrohr wird in allen tropischen Ländern angebaut und kann bis zu 4m hoch werden. Der Zucker befindet sich in den 2-5cm dicken stängeln.
                        Die Zuckerrübe wird in den wärmeren Teilen von Österreich angebaut und befindet sich in den Wurzeln unter der Erde.
                    </p>
                </div>

                <div className='cardMainHintZucker  m-3'>
                    <p>Für 1kg Zucker braucht man 6 kg Zuckerrüben!</p>
                </div>
                <div className='ZuckerSortContainer'>
                    <img src={pic1} alt="" />
                </div>

                <div className='cardMainDes p-3 m-3'>
                    <div>
                        <h2>Die Gewinnung des Zuckers aus der Zuckerrübe</h2>
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
                    <p>Der Zucker zieht Feuchtigkeit an, daher sollte er Trocken und gut verschlossen gelagert werden! Durch gute und richtige Lagerung ist der Zucker fast unbegrenzt haltbar!</p>
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
