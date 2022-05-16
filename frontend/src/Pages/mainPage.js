import React from 'react'

// Components
import { CardGroup, Card } from 'react-bootstrap';
import CarouselMain from '../Components/Features/carouselMain';
import MainBlock from '../Components/Blocks/mainblock'; // const variable
import StepByStep from '../Components/Features/StepbyStep/StepbyStep';
import ExplainBlock from '../Components/Blocks/explainBlock';
import MainViewBox  from '../Components/Blocks/mainViewBox';
import AboutUs from '../Components/Blocks/aboutus';

import pic1 from '../Assets/img/MainSite/MainSiteSmile.png';


function mainPage ()  {
    return (
        <div>
            
        
        <div class="img-BakeSchool" alt="..."></div>
        
        
        <AboutUs />
        
        <h2 className='slogan '>"Back School ist richtig cool!"</h2>

        {/* This a explain for the kids, which opporunity are used in our site  */}
        <ExplainBlock />

        {/* This are the picture at the footer */}
        <MainViewBox />
        
        </div>
    );
}

export default mainPage
