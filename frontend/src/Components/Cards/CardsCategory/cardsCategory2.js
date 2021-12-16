import React from 'react';
import axios from "axios";
import  CardCategory  from './cardCategory';
import Spinner from 'react-bootstrap/Spinner'

// Test Data
import picture from '../../../Assets/img/logo.svg';

// style for the cards
import '../../../Assets/Style/Card/card.scss';

// Axios (API Interfaces)
import CategorieData from '../../../Api/CategorieData';

 const api = axios.create({
          baseURL: 'https://localhost:5001/api/Category'
        })

export default class CardsCategory extends React.Component {
  
  state= {
    name: []
  }
    constructor(props){
        super(props);
        api.get('/').then(res => {
          console.log(res.data)
          this.setState({name: res.data})
        })
    }

  render() {
    // const { error, isLoaded, items } = this.state;
    // if (!error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <Spinner animation="border" variant="secondary"  />;
    // } else {
        return(
            <div>
               {this.state.name.map(nam => <h2>{nam.details.categoryName}</h2>)}
                 {/* {items.map(item => (
                    <div className="category-cards-main">
                        <CardCategory image={picture} name={item.details.categoryName} level={'3'} title={'Just a dummy title'} />
                    </div>
              ))}   */}
            </div>
           
           
        )
    }
  // }
}