import React, { useState } from 'react';

// import image
import logo from '../../../Assets/img/MainSite/Backkurse.jpeg';

// import mock data
import data, { getStep } from '../../../Data/Mocks/StepbyStep';

export default function Step({ number }) {

    let step = getStep(parseInt(number))

    // const [selected, setselected] = useState('none');

    return (
        <div className='step-card-container shadow p-1 mb-1 pt-4'>
            <div>
                {/* <div className='step-number'>
                    <p>{number}</p>
                </div> */}
                

                <div>
                    {/* <div>
                    <p className='step-amount'>{number}</p>
                </div> */}
                    <div class="col-md">
                        <img src={logo} class="img-fluid stepimg" alt="" />
                    </div>
                </div>
                <br />
                <h3>
                    {step.text}
                </h3>
            </div>
        </div>
    )
}


