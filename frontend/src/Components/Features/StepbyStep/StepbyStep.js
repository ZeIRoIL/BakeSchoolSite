import React from 'react';
import Step from './Step';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

// Assets
import pic1 from '../../../Assets/img/MainSite/pic1.jpg';
// Style
import '../../../Assets/Style/Features/stepbystep.scss';





function StepByStep() {
    return (
        <section className='stepsection p-5'>
            
            <div class="container stepcontainer">
                <div className='mt-5 text-step p-3'>
                    <h1 class="text-center text-black"> Tauch in die Welt von den Profis ein </h1>
                    <p> Sei so schlau wie ein Profi und backe wie ein Profi :)  </p>
                </div>
                <div class="row g-4 mt-3">
                    <div class="col-md stepBox mt-5 me-5">
                        <Step number={1}/>
                    </div>
                    <div class="col-md stepBox">
                        <Step number={2}/>
                    </div>
                    <div class="col-md stepBox mt-5 ms-5 bg-white">
                        <Step number={3}/>
                    </div>
                </div>
            </div>
        </section>

    )
}


export default StepByStep
