import { Button } from 'react-bootstrap';
import React from 'react';

import {
    Link
} from "react-router-dom";
// 
import pic1 from "../../Assets/img/Description/Schokolade/SchokoHerkunft.jpg";

import Image from '../../Assets/img/Description/Schokolade/MainSchokolade.png';

// import styles
import '../../Assets/Style/pages/Description/zucker.scss';
import '../../Assets/Style/pages/Description/schokolade.scss';

export const Schokolade = () => {
    return (
        <div>
            <div className='container mt-5'>
                <img src={Image} width={200} className="descriptionImg mb-3" alt="logo" />
            </div>
            <h1>Schokolade</h1>
            <div className='container'>
                <p>Ist eine Mischung aus Kakaomasse und Kakaobutter, Zucker und anderen erlaubten Zusatzstoffen.<br></br> Der Unterschied zwischen Schokolade und Kuvertüre is, der Fettgehalt</p>
           

{/* 
                Arten von Schokolade
                <div className='row  mb-5 mt-5'>
                <ol class="list-group list-group-numbered">
                    <li class="list-group-item">Schokolade/ dunkl</li>
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Cras justo odio</li>
                </ol>
                </div> */}
        
                <div className='cardMainDes p-2 m-2'>
                    <h2>Schokolade</h2>
                    <p>Die Schokolade wie man sie aus dem Supermarkt kennt, in ihrer herkömmlichen Tafel Form, hat einen <strong>geringeren Kakaobutteranteil</strong> 
                        (mindestens 18%)<br></br> und einen <strong>höheren Zuckergehalt</strong>. Schokoladen eignen sich daher nicht zum Überziehen und Tunken, da sie eher 
                        <strong>dickflüssiger</strong> ist.</p>
                </div>
                <div className='cardMainDes p-2 m-2'>
                    <h2>Kuvertüre</h2>
                    <p>Die Kuvertüre ist durch ihren <strong>höheren Fettgehalt</strong> (mindestens 31%) nach dem Schmelzen <strong>flüssiger</strong> und besser zu verarbeiten. Sie härtet außerdem schneller und fester aus.</p>
                </div>
                <div className='cardMainDes p-2 m-2'>
                    <h2>Fettglasur</h2>
                    <p>Die sogenannte Fettglasur ist häufig in den Bäckereien zu sehen, da sie eine unkomplizierte<strong>Handhabung</strong>, gegenüber normalen Kuvertüren haben kann.<br></br>
                    Sie müssen <strong>nicht temperiert</strong> werden!<br></br>Sie können einfach aufgewärmt und zum Überziehen und Dekorieren von Gebäcken verwendet werden.<br></br>
                    Die Fettglasur besteht nur zu einem kleinen teil aus Kakaobutter, jedoch aus vielen anderen <strong>Fetten</strong> wie z.B. Pflanzenfette. Daher kann man sie mit normalen Fetten verdünnen. </p>
                </div>


                
                <div className='schokolade-textbild'>
                    <h4>Von wo kommt die Schokolade und der Kakao</h4>
                    <p>
                        Es wird von der <strong>Kakaofrucht</strong> gewonnen, diese wird angebaut in Regionen mit hoher Luftfeuchtigkeit unter den Schatten größer Bäume.<br></br>
                        Kakaobäume werden circa <strong>8-15 Meter</strong> hoch, die Kakaofrucht wächst meist direkt am Stamm und enthält ca. <strong>25-50 Kakaobohnen.</strong><br></br>
                        Pro Jahr werden maximal 2 Kilogramm Kakaobohnen von einem Baum geerntet.<br></br>
                        <strong>Anbaugebiete: Afrika, Mittelamerika, Südamerika, Südostasien, südlicher Pazifik</strong>
                    </p>
                    <img src={pic1} alt="Karte von den Länder die Schokolade haben" />
                </div>

                <Link to="/questions">
                    <button className="mainbtn" >
                        Zum Quiz!
                    </button>
                </Link>

            </div>
        </div>
    )
}
