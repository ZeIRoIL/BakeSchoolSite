import { useStoreState } from "easy-peasy";
import { useState, useEffect} from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";



import { getRecipes } from "../../Api/RecipeData";

import '../../Assets/Style/pages/Recipes/recipes.scss';

function Recipes() {
  
  let [searchParams, setSearchParams] = useSearchParams();
  // console.log(recipes);

  // easy peasy data
  const recipes = useStoreState((state) => state.recipes);

  console.log(recipes)


  return (
    <div style={{ display: "flex" }}>
      <nav className="recipesList"
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {/* the Searchbutton be able to filter the category */}
        <h3>Rezeptübersicht</h3>
        <br/>
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
            let name = recipe.name.toLowerCase();
            return name.includes(filter.toLowerCase());
          })
          .map((recipe) => (
            <NavLink
              style={({ isActive }) => ({
                display: "block",
                margin: "1rem 0",
                color: isActive ? "#DC5C49" : "black",
              })}
              to={`/recipes/${recipe.number}`}
              key={recipe.number}
            >
              {recipe.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}

export default Recipes