import logo from './logo.svg';
import './App.css';


// Components
import {Navigation} from './components/navigation';
import Footer from './components/footer';


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
