import React from 'react';
import axios from "axios";
import CardCategory from './cardCategory';
import Spinner from 'react-bootstrap/Spinner';

// Routing
import { Outlet, NavLink, useSearchParams } from "react-router-dom";

// import the function with the Mock Datas
import { getCategories } from '../../../Data/Mocks/CategorieData';

// Test Data
import picture from '../../../Assets/img/logo.svg';

// style for the cards
import '../../../Assets/Style/Card/card.scss';
import '../../../Assets/Style/Button/searchCategory.scss';


// store data in a variabelen
let categories = getCategories();


export default function CardsCategory () {

  let [searchParams,setSearchParams ] = useSearchParams();

  console.log(categories);

      return (
        
        <>

          {/* Filter the categories with the user searchdata  */}
          {categories.map(cat =>
          <div className='col-xl-4 col-md-4'>
            <CardCategory image={cat.details.image} text={cat.details.text} name={cat.details.name} level={cat.details.level} /> 
          </div>
          )}
        </>
      )
}
