import React from 'react';
import CardsCategory from '../Components/Cards/CardsCategory/cardsCategory';
import CardsCategory2 from '../Components/Cards/CardsCategory/cardsCategory2';

import '../Assets/Style/pages/categories.scss'

const categoriesPage = () => {
  return (
    <div>
      <div className="cat-main">
        <h1 style={{ marginTop: '50px' }} >Kategorien</h1>
        
        <div className='card-section' >
          <CardsCategory />
        </div>
      </div>
    </div>
  );
}

export default categoriesPage