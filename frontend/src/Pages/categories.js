import React from 'react';
// The Api with MockData is works!
import CardsCategory from '../Components/Cards/CardsCategory/cardsCategory';
// The Api with Class component is works!
// import CardsCategory2 from '../Components/Cards/CardsCategory/cardsCategory2';
// The APi with function does not work!
import CardsCategoryApi from '../Components/Cards/CardsCategory/cardsCategoryApi';

import '../Assets/Style/pages/categories.scss'

const categoriesPage = () => {
  return (
    <div>
      <div className="cat-main">
        <h1 style={{ marginTop: '60px' }} className="backweltHeader fs-1">Backwelt</h1>
        
        <div className='card-section' >
          <CardsCategoryApi />
        </div>
      </div>
    </div>
  );
}

export default categoriesPage