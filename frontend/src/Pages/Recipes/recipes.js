import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getRecipes } from "../../Data/Mocks/recipesData.js";


import '../../Assets/Style/pages/Recipes/recipes.scss';

function Recipes() {
    // get the data from the Api Fetch! It is needed to load for the next sitepage
  let recipes = getRecipes();
  let [searchParams, setSearchParams] = useSearchParams();


  return (
    <div style={{ display: "flex" }}>
      <nav className="recipesList"
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
          {/* Search Function for the Params (URLName) */}
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {recipes
          .filter((recipe) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = recipe.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((recipe) => (
            <NavLink
              style={({ isActive }) => ({
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
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
