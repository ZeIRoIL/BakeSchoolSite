import logo from './logo.svg';
import './App.css';

import {Navigation} from './components/navigation';
import {CardCategory} from './components/cardCategory';
import { CarouselMain } from './components/carouselMain';
import CardsCategory from './components/cardsCategory';


import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  return (
    <div className="App" > 
      <Navigation/>
     
      <div class="cat-main">
        <h1  style={{ marginTop: '50px'}} >Suche eine Kategorie!</h1>
        
        <div style={{ backgroundColor: 'lightblue',marginTop: '100px'}} >
          <CardsCategory/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
