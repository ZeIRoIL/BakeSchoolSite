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
                <div class="row g-4">
                    <div class="col-md stepBox">
                        <Step number={1}/>
                    </div>
                    <div class="col-md stepBox">
                        <Step number={2}/>
                    </div>
                    <div class="col-md stepBox">
                        <Step number={3}/>
                    </div>
                </div>
            </div>
        </section>

    )
}


export default StepByStep
