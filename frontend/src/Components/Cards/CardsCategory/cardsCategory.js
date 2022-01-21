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





export default function CardsCategory () {

  let [searchParams,setSearchParams ] = useSearchParams();
  // let [category, setCategory] = useState([]);
  
  // constructor(props) {
  //   super(props);
  //   // The Api get the data from the internet and set the variable "category"
  //   // api.get('/').then(res => {
  //   //   console.log(res.data)
  //   //   setCategory({category: res.data})}) //can be a trouble because the change to function as a class
  //   // this.isLoaded = true
  // }

  

 
    if (isLoaded) {
      return <Spinner animation="border" className='spinner' variant="secondary" />;
    } else {
      return (
        
        
        // Really Data Turn
        // <div>
        //     {this.state.category.map(cat =>
        //         <div ke y={cat.categoryId} className="category-cards-main">
        //             <CardCategory image={picture} name={cat.details.categoryName} level={cat.details.difficultyLevel} title={cat.details.categoryText} target={'Zucker.js'} />
        //         </div>
        //     )}


        // </div>
        //  Mock Data Turn
        <div>
          {/* the Searchbutton be able to filter the category */}
          <input
          className='seach-category'
          placeholder='Suche dir eine Kategorie'
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
          />
          {/* Filter the categories with the user searchdata  */}
          {categories
          .filter((category) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = category.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map(cat =>
            <div key={cat.number} className="category-cards-main">
                <CardCategory image={picture} name={cat.name} />
            </div>
          )}
          <Outlet/>
        </div>
      )
    }
}