import { useState, useEffect} from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

import { getRecipes } from "../../Api/RecipeData";

import '../../Assets/Style/pages/recipes.scss';

export default function Recipes() {


    // get the data from the Api Fetch! It is needed to load for the next sitepage
  let [recipes, setRecipes] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(recipes);

  useEffect(() => {
    getRecipes().then(setRecipes);
  }, []);


  return (
    <div style={{ display: "flex" }}>
      <nav className="recipesList"
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {/* the Searchbutton be able to filter the category */}
        <input
          className=''
          placeholder='Suche dir ein Rezept'
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } 
            else {
              setSearchParams({});
            }
          }}
          />
          {/* Search Function for the Params (URLName) */}
        {recipes
          .filter((recipe) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = recipe.Name.toLowerCase();
            return name.includes(filter.toLowerCase());
          })
          .map((recipe) => (
            <NavLink
              style={({ isActive }) => ({
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              })}
              to={`/recipes/${recipe.Number}`}
              key={recipe.Number}
            >
              {recipe.Name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
