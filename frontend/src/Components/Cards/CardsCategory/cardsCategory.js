import React from 'react';
import axios from "axios";
import CardCategory from './cardCategory';
import Spinner from 'react-bootstrap/Spinner';
import { useEffect } from 'react';

// Routing
import { Outlet, NavLink } from "react-router-dom";

// importt the function with the Mock Datas
import { getCategories } from '../../../Data/Mocks/CategorieData';

// Test Data
import picture from '../../../Assets/img/logo.svg';

// style for the cards
import '../../../Assets/Style/Card/card.scss';

// // Axios (API Interfaces)
// import CategorieData from '../../../Api/CategorieData';

// Axios Details Instanz!
const api = axios.create({
  baseURL: 'https://localhost:5001/api/Category'
})

// store data in a variabelen
let categories = getCategories();

// If the data is finish loading
const isLoaded = false;
export default class CardsCategory extends React.Component {

  state = {
    category: []
  }

  // constructor(props) {
  //   super(props);
  //   // The Api get the data from the internet and set the variable "category"
  //   // api.get('/').then(res => {
  //   //   console.log(res.data)
  //   //   this.setState({category: res.data})})
  //   // this.isLoaded = true
  // }

  render() {
    if (isLoaded) {
      return <Spinner animation="border" className='spinner' variant="secondary" />;
    } else {
      return (
        // Really Data Turn
        // <div>
        //     {this.state.category.map(cat =>
        //         <div key={cat.categoryId} className="category-cards-main">
        //             <CardCategory image={picture} name={cat.details.categoryName} level={cat.details.difficultyLevel} title={cat.details.categoryText} target={'Zucker.js'} />
        //         </div>
        //     )}


        // </div>
        //  Mock Data Turn
        <div>
          {categories.map(cat =>
            <div key={cat.number} className="category-cards-main">
                <CardCategory image={picture} name={cat.name} />
            </div>
          )}
        </div>

      )
    }
  }
}