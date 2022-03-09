import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";

import { getRecipe } from "../../Api/RecipeData";


//  added components for the site 
import RecipeTable from "../../Components/Blocks/recipes/RecipeTable";
import RecipeList from "../../Components/Blocks/recipes/RecipeList";



export default function Recipe() {

  let [recipe, setRecipe] = useState([]);

  let navigate = useNavigate();
  let params = useParams();

  // let recipe = getRecipe(parseInt(params.recipeId, 10));

  //get data from the recipes Data
    let ingredients = recipe.ingredients;
    let description = recipe.description;
  
  useEffect(() => {
    getRecipe(parseInt(params.recipeId, 10))
    .then(
      recipe => {
        setRecipe(recipe);
      });
  }, []);

  console.log(recipe);

  return (
    <main className="container p-5" style={{ padding: "1rem" }}>
      <div className="row">
        <div className="col-xl-3">
          <h1>{recipe.name}</h1>
          <RecipeTable ingredients={ingredients} />
        </div>
        <div className="col-xl-7">
        {/* <RecipeList description={description}/> */}
        </div>
      </div>



      {/* <p>
        <button
          onClick={() => {
            deleteInvoice(recipe.number);
            navigate("/recipe");
          }}
        >
          Delete
        </button>
      </p> */}
    </main>
  );
}