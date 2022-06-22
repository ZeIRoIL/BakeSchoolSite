import React from 'react';
// The Api with MockData is works!
import CardsCategory from '../Components/Cards/CardsCategory/cardsCategory';
// The Api with Class component is works!
// import CardsCategory2 from '../Components/Cards/CardsCategory/cardsCategory2';
// The APi with function does not work!
import CardsCategoryApi from '../Components/Cards/CardsCategory/cardsCategoryApi';

// the style for the categories site
import "../Assets/Style/pages/categories.scss";

const categoriesPage = () => {
  return (
    <>
    <div className='section-backwelt'>
      <div className='backwelt-main'>
          <h1 className="backweltHeader mt-5 fs-1">Backwelt</h1>
            <p>Hier kannst du dir eine Kategorie aussuchen die du dir gerne ansehen willst :)
              Du kannst dich überall durch schauen und nach dem Lernen kannst du ein Rezept, das nur für Kinder erstellt worden ist, nach backen!
            </p>
          
      </div>
      <div className='container categories-main-container'>
        <div className='row'>
          <CardsCategory />
        </div>
      </div>
    </div>
    </>
    
  );
}

export default categoriesPage