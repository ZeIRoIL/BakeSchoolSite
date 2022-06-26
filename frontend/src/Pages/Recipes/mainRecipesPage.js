import React from 'react';


import pic1 from '../../Assets/img/recipes/mainsite/main.jpg';
import pic2 from '../../Assets/img/recipes/mainsite/mainCroissant.jpg';
import pic3 from '../../Assets/img/recipes/mainsite/mainMandeln.jpg';

import '../../Assets/Style/pages/Recipes/recipes.scss';


export default function mainRecipesPage() {
    return (
        <>
            <div className='container recipes-container'>
                <div className='row p-5'>
                    <h1 className='recipeHeader'>Rezepte</h1>
                </div>
            
                <div className="row main-recipes">
                    <div className='col-4'>
                    <a href='/recipes/2'>
                        <img src={pic1} alt="" className='recipe-thumbnail' />
                    </a>
                    </div>
                    <div className='col-4'>
                    <a href='/recipes/3'>
                        <img src={pic2} alt="" className='recipe-thumbnail' />
                    </a>
                    </div>
                    <div className='col-4'>
                    <a href='/recipes/1'>
                        <img src={pic3} alt="" className='recipe-thumbnail' />
                    </a>
                    </div>
                </div>
            </div>

       </>
    )
}
