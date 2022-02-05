import { Button } from 'react-bootstrap';
import React from 'react';

import {
    Link
} from "react-router-dom";

import Image from '../../Assets/img/logo.png';

export const Zucker = () => {
    return (
        <div>
            <div className='container mt-5'>
                <img src={Image} width={100} className="descriptionImg mb-3" alt="logo" />
            </div>
            <h1>Zucker</h1>
            <div className='container'>
                <p>Zucker ist meist ein Einfach oder Zweifachzucker. Der Zucker wird auch als Kohlenhydray bezeichnet!</p>
                {/* EInfachZucker */}
                <div className='row  mb-5 mt-5'>
                    <div className='col tablecard p-3 m-3'>
                        <h6>Einfach- Zucker</h6>
                        <table className=' table table-hover'>
                            <tr>
                                <td>Fruchtzucker</td>
                                <td>Ist zum Beispiel in Früchten</td>
                            </tr>
                            <tr>
                                <td>Fruchtzucker</td>
                                <td>Ist zum Beispiel in Früchten, Honig, Weintrauben</td>
                            </tr>
                            <tr>
                                <td>Fruchtzucker</td>
                                <td>Ist zum Beispile im Milchzucker</td>
                            </tr>
                        </table>
                    </div>

                    {/* Zweifachzucker */}
                    <div className='col tablecard p-3 m-3'>
                    <h6>Einfach- Zucker</h6>
                        <table>
                        
                            <tr>
                                <td>Fruchtzucker</td>
                                <td>Ist zum Beispiel in Früchten</td>
                            </tr>
                            <tr>
                                <td>Fruchtzucker</td>
                                <td>Ist zum Beispiel in Früchten, Honig, Weintrauben</td>
                            </tr>
                            <tr>
                                <td>Fruchtzucker</td>
                                <td>Ist zum Beispile im Milchzucker</td>
                            </tr>
                        </table>
                    </div>
                    {/* VielfachZucker Description */}
                    <div className='col tablecard p-3 m-3'>
                    <h6>Einfach- Zucker</h6>
                        <table>
                            <tr>
                                <td>Fruchtzucker</td>
                                <td>Ist zum Beispiel in Früchten</td>
                            </tr>
                            <tr>
                                <td>Fruchtzucker</td>
                                <td>Ist zum Beispiel in Früchten, Honig, Weintrauben</td>
                            </tr>
                            <tr>
                                <td>Fruchtzucker</td>
                                <td>Ist zum Beispile im Milchzucker</td>
                            </tr>
                        </table>
                    </div>
                </div>
        
                <div className='tablecard p-3 m-3'>
                    <p>Zucker wird aus der Zuckerrübe und aus dem Zuckerrohr gewonnen.	Diese bestehen meist aus circa 16-22% Kohlenhydrate und aus ca. 75% Wasser.
                        Das Zuckerrohr wird in allen tropischen Ländern angebaut und kann bis zu 4m hoch werden. Der Zucker befindet sich in den 2-5cm dicken stängeln.
                        Die Zuckerrübe wird in den wärmeren Teilen von Österreich angebaut und befindet sich in den Wurzeln unter der Erde.
                    </p>
                </div>

                <div className=' p-3 m-3'>
                    <p>Für 1kg Zucker braucht man 6 kg Zuckerrüben!</p>
                </div>
                <div className='tablecard p-3 m-3'>
                    <div>
                        <h4>Die Gewinnung des Zuckers aus der Zuckerrübe</h4>
                    </div>
                    <div>
                        <p>Die Ernte der Zuckerrübe findet im September bis Dezember statt!</p>
                    </div>
                    <div>
                        <p>Hier wird die Reihensfolge vom Zucker dargestellt!</p>
                    </div>
                </div>
                <div className='tablecard p-3 m-3'>
                    <h4>Lagerung von Zucker</h4>
                    <p>Der Zucker zieht Feuchtigkeit an daher sollte er Trocken und gut verschlossen gelagert werden! Durch gute und richtige Lagerung ist der Zucker fast unbegrenzt haltbar!</p>
                </div>
                <div className='tablecard p-3 m-3'>
                    <h4>Lagerung von Zucker</h4>
                    <p>Hier werden die verschiedenen Formen des Zuckers aufgezählt</p>
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
