import React from 'react'

// Components
import { CardGroup, Card } from 'react-bootstrap';
import CarouselMain from '../Components/Features/carouselMain';
import MainBlock from '../Components/Blocks/mainblock'; // const variable
import StepByStep from '../Components/Features/StepbyStep/StepbyStep';



function mainPage ()  {
    return (
        <div>
            
        <CarouselMain/>
        
        <StepByStep/>
        <MainBlock side={"left"}/>
        <MainBlock side={'right'}/>
        
        
        </div>
    );
}

export default mainPage
