import React from 'react';
import { useState, useEffect} from "react";
import axios from "axios";
import CardCategory from './cardCategory';
import Spinner from 'react-bootstrap/Spinner';


// Test Data
import picture from '../../../Assets/img/logo.svg';

// API function
import { CategorieData } from "../../../Api/CategorieData";

// style for the cards
import '../../../Assets/Style/Card/card.scss';
import '../../../Assets/Style/Button/searchCategory.scss';


const api = axios.create({
    baseURL: 'https://localhost:5001/api/Category'
  })


export default function CardsCategory () {

  let [category, setCategory] = useState([]);
  let [error, setError] = useState("");
  let [isLoaded, setLoaded] = useState(false);
 

  useEffect(() => {
    CategorieData()
    .then(
      category => {
      setLoaded(true);
      setCategory(category);
    })
    .catch(
      e => setError(e)
    )
    ;
    
  }, []);

    console.log(category);
    if(error)
    {
      return <p>{error}</p>;
    }
    if (!isLoaded) {
      return <Spinner  animation="border"  size="lg" className='spinner' variant="secondary" />;
    } else {
      return (
        <div>
          {/* Filter the categories with the user searchdata  */}
          {category.map(cat =>
            <div key={cat.details.number} className="category-cards-main">
                <CardCategory image={picture} name={cat.details.name} level={cat.details.level} />
                
            </div>
          )}
        </div>
      )
    }
}