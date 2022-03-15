import logo from './Assets/img/logo.svg';
import './App.css';
import './Assets/Style/global.scss'


// Components
import {Navigation} from './Parts/Navigation/navigation';
import Footer from './Parts/Footer/footer';


// libary
import 'bootstrap/dist/css/bootstrap.css';
// easy-peasy 
import store from './store/store';
import { StoreProvider } from 'easy-peasy';



const App = () => {
  return ( 
  <StoreProvider store={store}>
    <div className="App" >  
      <Navigation/>
      <Footer/>
    </div>
  </StoreProvider>
  );
}

export default App
