import React from 'react'
import { CardsCategory } from '../components/cardsCategory'

const categoriesPage = () => {
    return (
        <div>
        <div class="cat-main">s
        <h1  style={{ marginTop: '50px'}} >Suche eine Kategorie!</h1>
        
        <div style={{ backgroundColor: 'lightblue',marginTop: '100px'}} >
          <CardsCategory/>
        </div>
        <a href='https://www.freepik.com/photos/food'>Food photo created by freepik - www.freepik.com</a>
      </div>
        </div>
    );
} 

 export default categoriesPage