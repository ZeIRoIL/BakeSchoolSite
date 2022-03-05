import React from 'react';

import '../../Assets/Style/pages/recipes.scss';

import pic1 from '../../Assets/img/Recipes/Steps/step1.png';
import pic2 from '../../Assets/img/Recipes/Steps/step2.png';
import pic3 from '../../Assets/img/Recipes/Steps/step3.png';

export default function mainRecipesPage() {
    return (
        <>
            <div className='container recipes-container'>
                <div className='row p-5'>
                    <h1 className='recipeHeader'>Rezepte</h1>
                </div>
               
                <div className='row p-5'>
                    <div className='col card-recipe  '>
                    <img src={pic1} class="stepImgRecipes" alt="..."/>
                    </div>
                    <div className='col card-recipe  '>
                    <img src={pic2} class="stepImgRecipes" alt="..."/>
                    </div>
                    <div className='col card-recipe  '>
                    <img src={pic3} class="stepImgRecipes" alt="..."/>
                    </div>
                </div>
            </div>

       </>
    )
}
