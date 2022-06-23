import { Button } from 'react-bootstrap';
import React from 'react';

import {
    Link
} from "react-router-dom";
// 


// import styles
import '../../Assets/Style/pages/Description/zucker.scss';

export const Allgemein = () => {
    return (
        <div>
            <div className='container mt-5'>
                <img src={Image} className="descriptionImg mb-3" alt="logo" />
            </div>
            
            <h1>Coming soon...</h1>
        </div>
    )
}
