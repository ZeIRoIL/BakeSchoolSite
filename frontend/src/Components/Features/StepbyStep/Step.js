import React,{useState} from 'react';

// import image
import logo from '../../../Assets/img/logo.svg';

// import mock data
import data, { getStep } from '../../../Data/Mocks/StepbyStep';

export default function Step({ number }) {

    let step = getStep(parseInt(number))

    const [selected, setselected] = useState('none');

    return (
        <div className='stepBox'>
            {/* <div class="h1 mb-3">
                <i class="bi bi-check2-circle"></i>
            </div> */}
            <br />
            <div>
                <hr className= {selected}/>    
                <div class="col-md" onClick = {() => setselected('show')}>
                    <img src={logo} class="img-fluid" alt="" />
                </div>
           </div>
            <br />
            <h3>
                {step.text}
            </h3>
        </div>
    )
}


