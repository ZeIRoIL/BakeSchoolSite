import { Button } from 'react-bootstrap';
import React from 'react';

import {
    Link
} from "react-router-dom";
// 
import pic from "../../Assets/img/Description/Allgemein/Allgemein.png";

// import styles
import '../../Assets/Style/pages/Description/allgemein.scss';

export const Allgemein = () => {
    return (
        <div className='cardMainDes container allgemein-container'>
            <div className='container mt-5'>
                <img src={pic} className="descriptionImg mb-3" alt="logo" />
            </div>
            
            <h1>Allgemein/Einstieg</h1>
            <br></br>
            <h4>Maße und Gewicht Bezeichnungen</h4>
            <div className='table-container table-bordered'>
            <table className='table-allgemein'>
                <tr>
                    <th colspan="3">Gewichtsmaße</th>
                </tr>
                <tr>
                    <td>1000</td>
                    <td>g</td>
                    <td>gramm</td>
                </tr>
                <tr>
                    <td>100</td>
                    <td>dag</td>
                    <td>Dekagramm</td>

                </tr>
                <tr>
                    <td>1</td>
                    <td>kg</td>
                    <td>Kilogramm</td>
                </tr>

                <tr>
                    <th colspan="3">Litermaße</th>
                </tr>
                <tr>
                    <td>1000</td>
                    <td>ml</td>
                    <td>Milliliter</td>
                </tr>
                <tr>
                    <td>100</td>
                    <td>cl</td>
                    <td>Zentiliter</td>

                </tr>
                <tr>
                    <td>10</td>
                    <td>dl</td>
                    <td>Deziliter</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>l</td>
                    <td>Liter</td>     
                </tr>
                <tr>
                    <th colspan="3">Längenmaße</th>
                </tr>
                <tr>
                    <td>1000</td>
                    <td>mm</td>
                    <td>Millimeter</td>
                </tr>
                <tr>
                    <td>100</td>
                    <td>cm</td>
                    <td>Zentimeter</td>

                </tr>
                <tr>
                    <td>10</td>
                    <td>dm</td>
                    <td>Dezimeter</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>m</td>
                    <td>Meter</td>     
                </tr>
            </table>
            </div>
            <div className='m-5 table-container table-bordered'>
                <h4>Allgemeine Bezeichnungen in der Lebensmittel Branche</h4>
                <table className=' m-5 table-bordered'>
                    <tr>
                        <th colspan="">Abkürzungen</th>
                        <th colspan="">Bezeichnungen</th>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td>Temperatur Einheit Grad Celsius</td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td>Temperatur Einheit Grad Celsius</td>
                    </tr>
                    <tr>
                        <td>Bl.</td>
                        <td>Blatt</td>
                    </tr>
                    <tr>
                        <td>1000</td>
                        <td>g</td>                 
                    </tr>
                </table>
            </div>
            <div>
                <h4>
                    Vorschriften in der Bäckerei/Konditorei
                </h4>
                <p>
                    Zu beachten sind zb. EU-Lebensmittelrecht, EU-Verordnungen und EU-Richtlinien und zusätzlich die Össterreichische Gesetzte und Verordnungen im Bundensgesetzblatt.
                    <br></br>
                    Im LMSVG (Lebensmittelsichert- und Verbraucherschutzgesetz) ist genau geregelt, welche Verantwortung man als Lebnsmittelunternehmen hat! 
                    <br></br>
                    <strong>  Zum Schutz der Käufer vor Täuschung</strong> 
                </p>
                <h5>
                    Beispielregel:
                </h5>
                <ol class="list-group list-group-numbered">
                    <li class="list-group-item">Was genau man unter Lebensmittel versteht</li>
                    <li class="list-group-item">Wie genau man die verschiedenen Lebensmittel beschriften darf und muss!<br></br>(ob es z.b. Lebensmittel für spezielle Ernährung (Babynahrung, Glutenfrei,..) ist oder Nahrungsergäzungzmittel)</li>
                    <li class="list-group-item">Allgemeie Anforderung an Lebensmittel
                    <ul>
                        <li>Es muss sicher sein!</li>
                        <li>Es darf nicht gesundheitsschädlich sein!</li>
                        <li>Es dürfen keine verfälschten Angaben auf der Verpackung angegeben sein!</li>
                        <li>Es dürfen keine Irreführenden Angaben beworben sein!</li>
                    </ul></li>
                    <li class="list-group-item">Hygiene im Lebensmittelbereichen<strong>EU-Hygiene-Verordnung</strong></li>
                  
                    
                </ol>
            </div>
            
           
            
        </div>
    )
}
