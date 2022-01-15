import React from 'react';

// Components
import ImageQuestion from '../Components/Cards/CardsQuestions/imageQuestion';
import MultChoiceQuestion from '../Components/Cards/CardsQuestions/multChoiceQuestion';
import ConnectQuestion from '../Components/Cards/CardsQuestions/connectQuestion';

const questionPage = () => {
    return (
        <div>
        <div class="cat-main">
        <h1  style={{ marginTop: '50px'}} >FRAGEN</h1>
        
        <div style={{ backgroundColor: 'lightblue',marginTop: '100px'}} >
          
        </div>

        <div>
            <ImageQuestion />
            <MultChoiceQuestion />
            <ConnectQuestion />

        </div>
        
      </div>
        </div>
    );
} 

 export default questionPage;