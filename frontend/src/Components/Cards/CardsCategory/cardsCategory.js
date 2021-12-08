import React from 'react';
import  CardCategory  from './cardCategory';

// Test Data
import picture from '../../../Assets/img/logo.svg';


// Style
import '../../../Assets/Style/Card/card.css';

const CardsCategory = () => {
    return (
        <div>
            <div className="category-cards-main">
            <CardCategory image={picture} avatar={picture} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} />
            <CardCategory image={picture} avatar={picture} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} />
            <CardCategory image={picture} avatar={picture} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} />
            <CardCategory image={picture} avatar={picture} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} />
            <CardCategory image={picture} avatar={picture} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} />
            <CardCategory image={picture} avatar={picture} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} />
        
            </div>
            
        
        </div>
    )
}

export default CardsCategory
