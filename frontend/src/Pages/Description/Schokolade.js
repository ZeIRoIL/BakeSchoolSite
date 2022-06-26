import { Button } from 'react-bootstrap';
import React from 'react';

import {
    Link
} from "react-router-dom";
// 
import pic1 from "../../Assets/img/Description/Schokolade/SchokoHerkunft.jpg";
import pic2 from "../../Assets/img/Description/Schokolade/temperieren.png";
import pic3 from "../../Assets/img/Description/Schokolade/impf.PNG";
import pic4 from "../../Assets/img/Description/Schokolade/mikro.PNG";
import pic5 from "../../Assets/img/Description/Schokolade/wasserbad.PNG";
import pic6 from "../../Assets/img/Description/Schokolade/kakao.PNG";
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
                    <p>Die Schokolade wie man sie aus dem Supermarkt kennt, in ihrer herkömmlichen Tafel Form, hat einen <strong> geringeren Kakaobutteranteil </strong> 
                        (mindestens 18%)<br></br> und einen <strong>höheren Zuckergehalt</strong>. Schokoladen eignen sich daher nicht zum Überziehen und Tunken, da sie eher 
                        <strong> dickflüssiger</strong> ist.</p>
                </div>
                <div className='cardMainDes p-2 m-2'>
                    <h2>Kuvertüre</h2>
                    <p>Die Kuvertüre ist durch ihren <strong>höheren Fettgehalt</strong> (mindestens 31%) nach dem Schmelzen <strong>flüssiger</strong> und besser zu verarbeiten. Sie härtet außerdem schneller und fester aus.</p>
                </div>
                <div className='cardMainDes p-2 m-2'>
                    <h2>Fettglasur</h2>
                    <p>Die sogenannte Fettglasur ist häufig in den Bäckereien zu sehen, da sie eine unkomplizierte<strong> Handhabung</strong>, gegenüber normalen Kuvertüren haben kann.<br></br>
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
                    <img src={pic6} alt="Wie wird Kakao erzeugt" />
                </div>

                <div className='cardMainDes p-2 m-2'>
                    <h2>Warum Temperieren?</h2>
                    <p>Damit die Schokolade nach dem Aushärtennicht grau wird. Grau wird die Schokolade,wenndie Kakaobutterkristalle nicht gut miteinander verbunden werden.Ohne Temperieren würde die Kuvertüre nur langsamfest werden und keinen schönen Bruch erlangen. <br></br>Nach dem Schmelzen der verschiedenen Kuvertüren, wird sie durch verschiedene Temperiermethoden wieder abgekühlt.<br></br>Dadurch können sich die Kakaobestandteile wieder binden, die Kakaobutter kristallisiert vor.<br></br>Durch das Temperieren erhält man eine matt glänzende Oberfläche und den gewissen „Knack“.</p>
                    <h3>Temperiermethoden:</h3>
                    <h5>Tabliermethode</h5>
                    <img src={pic2} alt="Warum temperieren!" className='leit-bild' />
                    <h5>Impfmethode</h5>
                    <img src={pic3} alt="Warum temperieren!" className='leit-bild' />
                    <h5>Temperieren in der Mikrowelle</h5>
                    <img src={pic4} alt="Warum temperieren!" className='leit-bild' />
                    <h5>Temperieren im Wasserbad</h5>
                    <h6>Vorsicht bei dieser Methode darf auf keinen Fall Wasser in die Kurvertüre gelangen!</h6>
                    <img src={pic5} alt="Warum temperieren!" className='leit-bild' />
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
