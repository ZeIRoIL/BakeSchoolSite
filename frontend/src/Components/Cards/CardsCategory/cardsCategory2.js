import React from 'react';
import axios from "axios";
import  CardCategory  from './cardCategory';
import Spinner from 'react-bootstrap/Spinner'

// Test Picture
import picture from '../../../Assets/img/logo.svg';

// style for the cards
import '../../../Assets/Style/Card/card.scss';

const api = axios.create({
          baseURL: 'https://localhost:5001/api/Category'
        })

export default class CardsCategory extends React.Component {
  
  state= {
    name: [],
    isLoaded: false
  }
    constructor(props){
        super(props);
        api.get('/').then(res => {
          console.log(res.data)
          this.setState({
            name: res.data,
            isLoaded: true
          })
        })
    }

  render() {
    const { isLoaded,name } = this.state;
    if (!isLoaded) {
      return <Spinner animation="border" variant="secondary"  />;
    } else {
        return(
            <div>
                 {name.map(item => (
                    <div className="category-cards-main">
                        <CardCategory image={picture} name={item.Details.Name} level={'3'} title={item.Details.Text} />
                    </div>
              ))}  
            </div>
           
           
        )
    }
  }
}