import React from 'react';
import { useState, useEffect} from "react";
import axios from "axios";
import CardCategory from './cardCategory';
import Spinner from 'react-bootstrap/Spinner';
import { Image } from 'react';


// Test Data
import picture from '../../../Assets/img/Description/Schokolade/MainSchokolade.png';

// API function
import { CategorieData } from "../../../Api/CategorieData";

// style for the cards
import '../../../Assets/Style/Card/cardCategories.scss';
import '../../../Assets/Style/Button/searchCategory.scss';


const api = axios.create({
    baseURL: 'https://localhost:5001/api/Category'
});


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
        <>

          {/* Filter the categories with the user searchdata  */}
          {category.map(cat =>
          <div className='col-xl-4 col-md-4'>
            <CardCategory image={cat.details.image} text={cat.details.text} name={cat.details.name} level={cat.details.level} /> 
          </div>
          )}
        </>
         
        
      )
    }
}