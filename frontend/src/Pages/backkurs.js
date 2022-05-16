import React from 'react';
import { useEffect, useState } from "react";
import mainPicture from "../Assets/img/Backkurs/backkursimg.jpg";

// Style File import
import '../Assets/Style/pages/backkurs.scss';

// import ScheduleCourse from the data
import {getScheduleCourse} from '../Data/Mocks/backkursData';


const backkurs = () => {

    let schedule = getScheduleCourse();
    
    
    return(
        <>
        <section className="backkurs-section">
            <div className="container backkurs-header  ">
                <h1>Backkurs</h1>
                <p>
                    Hier findest du viele coole Firmen, die dir das Wissen weitergeben möchten. Hier kannst du von den Profis lernen.
                    Schau jederzeit bei einer coole Bäckerei vorbei und frage, ob es noch einen Platz für einen Backkurs gibt.
                </p>
            </div>
            <div className="container backkurs-details pt-5">
                <div className="row">
                    <div className="col">
                        <img src={mainPicture} alt="Unser About Us bild"/>;
                    </div>
                    <div className="col-6">
                    {schedule.map(sche =>
                        <div className=' backkurs-container-each mb-2'>
                            <div className='row'>
                                <div className='col-10'>
                                    <h3>{sche.datum}</h3>
                                </div>
                                <div className='col'>
                                    {/* <h4>{sche.amount}</h4> */}
                                </div>
                            </div>
                                <p>{sche.Text}</p>
                                <button><a>Buchen</a></button>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
        
        </>
    );
}

export default backkurs