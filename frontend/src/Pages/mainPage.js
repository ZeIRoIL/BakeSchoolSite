import React from 'react'

// Components
import { CardGroup, Card } from 'react-bootstrap';
import CarouselMain from '../Components/Features/carouselMain';
import MainBlock from '../Components/Blocks/mainblock'; // const variable
import StepByStep from '../Components/Features/StepbyStep/StepbyStep';
import MainViewBox  from '../Components/Blocks/mainViewBox';

import pic1 from '../Assets/img/MainSite/teri.png';


function mainPage ()  {
    return (
        <div>
            
        
        <div class="img-BakeSchool" alt="...">
        </div>
        <StepByStep/>
        <MainBlock side={"left"}/>
        <MainBlock side={'right'}/>
        
        

        <MainViewBox />
        
        </div>
    );
}

export default mainPage
