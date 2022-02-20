import React from 'react';

import '../../Assets/Style/pages/recipes.scss';

export default function mainRecipesPage() {
    return (
        <>
            <div className='container recipes-container'>
                <div className='row p-5'>
                    <h1>Wähle ein Rezept aus ! </h1>
                </div>
               
                <div className='row p-5'>
                    <div className='col card-recipe me-3 p-3'>
                    <h3>Step 1</h3>
                    <p>Lorem ipsumadkfjas ldkjfalsödjf</p>
                    </div>
                    <div className='col card-recipe me-3 p-3'>
                    <h3>Step 2</h3>
                    <p>Lorem ipsumadkfjasldkjfalsödjf</p>
                    </div>
                    <div className='col card-recipe me-3 p-3'>
                    <h3>Step 3</h3>
                    <p>Lorem ipsumadkfjasldkjfalsödjf</p>
                    </div>
                </div>
            </div>

       </>
    )
}
