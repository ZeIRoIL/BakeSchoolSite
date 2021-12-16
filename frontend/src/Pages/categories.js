import React from 'react';
import CardsCategory from '../Components/Cards/CardsCategory/cardsCategory';
import CardsCategory2 from '../Components/Cards/CardsCategory/cardsCategory2';

import '../Assets/Style/pages/categories.scss'

const categoriesPage = () => {
    return (
        <div>
        <div className="cat-main">
        <h1  style={{ marginTop: '50px'}} >Suche eine Kategorie!</h1>
        
        <div className='card-section' >
          <CardsCategory/>
        </div>
        <a href='https://www.freepik.com/photos/food'>Food photo created by freepik - www.freepik.com</a>
      </div>
        </div>
    );
} 

 export default categoriesPage