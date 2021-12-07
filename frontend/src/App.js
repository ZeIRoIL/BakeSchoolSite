import logo from './Assets/img/logo.svg';
import './App.css';


// Components
import {Navigation} from './Parts/Navigation/navigation';
import Footer from './Parts/Footer/footer';


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
