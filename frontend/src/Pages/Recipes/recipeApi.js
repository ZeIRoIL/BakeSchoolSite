import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";

import { getRecipe } from "../../Api/RecipeData";


//  added components for the site 
import RecipeTable from "../../Components/Blocks/recipes/RecipeTable";
import RecipeList from "../../Components/Blocks/recipes/RecipeList";
import { useStoreState } from "easy-peasy";



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

  console.log(recipe);

  return (
    <>
    <main className="container p-5 " style={{ padding: "1rem" }}>
      <h2 className="mb-5 recipeHeaderText ">{recipe.name}</h2>
      <div className="d-flex flex-row"> 
      <div className="col-xl-4 pb-3 pe-4">
              <h3>Zutaten</h3>
              <RecipeTable ingredients={ingredients} />
              {/* Place for the ads */}
            </div>
        <div className="row recipeMain">
            
            <div className="col-xl-12 ms-5">
            <RecipeList description={description}/>
            <RecipeList description={description}/>
            </div>
          </div>
      </div>
      <div className="col mt-5">
            <h2>Hier kommt das Video</h2>
      </div>
        
    </main>
  </>
  );
}