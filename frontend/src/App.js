import logo from './logo.svg';
import './App.css';


// Components
import {Navigation} from './components/navigation';
import {CardCategory} from './components/cardCategory';
import { CarouselMain } from './components/carouselMain'; // class variable
import MainBlock from './components/mainblock'; // const variable
import Footer from './components/footer';


// Pages
import './pages/mainPage';

// libary
import 'bootstrap/dist/css/bootstrap.css';



const App = () => {
  return (
    <div className="App" >  
      <Navigation/>
      <CarouselMain/>
      
      <MainBlock/>
      <MainBlock/>
      <MainBlock/>
      
      <Footer/>
    </div>
  );
}

export default App
