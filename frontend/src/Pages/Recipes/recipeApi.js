import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";

import { getRecipe } from "../../Api/RecipeData";


//  added components for the site 
import RecipeTable from "../../Components/Blocks/recipes/RecipeTable";
import RecipeList from "../../Components/Blocks/recipes/RecipeList";
import { useStoreState } from "easy-peasy";



export default function Recipe() {

  // let [recipe, setRecipe] = useState([]);

  let navigate = useNavigate();
  let params = useParams();

  // easy peasy 
  const recipeNummer = parseInt(params.recipeId, 10) - 1;
  const recipes = useStoreState((state) => state.recipes);
  const recipe = recipes[recipeNummer];
  // let recipe = getRecipe(parseInt(params.recipeId, 10));

  //get data from the recipes Data
    let ingredients = recipe.ingredients;
    let description = recipe.description;
  
  // useEffect(() => {
  //   getRecipe(parseInt(params.recipeId, 10))
  //   .then(
  //     recipe => {
  //       setRecipe(recipe);
  //     });
  // }, []);

  console.log(recipe);

  return (
    <main className="container p-5" style={{ padding: "1rem" }}>
      <div className="row">
        <div className="col-xl-4 pe-5">
          <h2 className="">{recipe.name}</h2>
          <RecipeTable ingredients={ingredients} />
        </div>
        <div className="col-xl-8 ps-5">
        <RecipeList description={description}/>
        </div>
      </div>
      <div className="container">
        <h2>Hier kommt das Video</h2>
      </div>
    </main>
  );
}