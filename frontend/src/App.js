import logo from './logo.svg';
import './App.css';


// Components
import {Navigation} from './components/navigation';
import {CardCategory} from './components/cardCategory';
import { CarouselMain } from './components/carouselMain'; // class variable
import MainBlock from './components/mainblock'; // const variable
import Footer from './components/footer';
import { Routes, Route, Link } from "react-router-dom";


// Pages
import Home from './pages/mainPage';
import LoginPage from './pages/login';

// libary
import 'bootstrap/dist/css/bootstrap.css';



const App = () => {
  return ( 

    <div className="App" >  
      <Navigation/>
    <Footer/>
  </div>

  );
}

export default App
