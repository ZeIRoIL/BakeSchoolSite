import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";

import { getRecipe } from "../../Api/RecipeData";


//  added components for the site 
import RecipeTable from "../../Components/Blocks/recipes/RecipeTable";
import RecipeList from "../../Components/Blocks/recipes/RecipeList";
import { useStoreState } from "easy-peasy";

// Style assets
import '../../Assets/Style/pages/Recipes/recipes.scss';

export default function Recipe() {

  
  let navigate = useNavigate();
  let params = useParams();

  // easy peasy framework function
  const recipeNummer = parseInt(params.recipeId, 10) - 1;
  const recipes = useStoreState((state) => state.recipes);
  const recipe = recipes[recipeNummer];

  //get data from the recipes Data
    let ingredients = recipe.ingredients;
    let description = recipe.description;
    let video = "https://www.youtube.com/watch?v=" + recipe.video;
  console.log(recipe);
 
  return (
    <>
    <main className="container p-5 recipeMain " style={{ padding: "1rem" }}>
      <h2 className="mb-5 recipeHeaderText ">{recipe.name}</h2>
        <img src={recipe.thumbnail} alt={recipe.thumbnail} className="recipe-thumbnail mb-5 text-left"/>
      <div className="d-flex flex-row"> 
      <div className="col-xl-4 pb-3 pe-4">
              <h3>Rezeptur</h3>
              <RecipeTable ingredients={ingredients} />
              {/* Place for the ads */}
            </div>
        <div className="row recipeMain">
            
            <div className="col-xl-12 ms-3">
            <RecipeList description={description}/>
            </div>
          </div>
      </div>
      {/* <div className="col mt-5">
            <h2>Hier kommt das Video</h2>
            <iframe width="1195" height="672" src="https://www.youtube.com/embed/pDwcTZnO21E" title="GIGGAND Reagiert auf meinen SONG für ihn .. (KRANKE FOLGE)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div> */}
        
    </main>
  </>
  );
}