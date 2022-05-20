// easy peasy store
import { createStore, action } from "easy-peasy";
import { LoadRecipes } from "../Api/RecipeData";
// Api Data
// import { getRecipes } from "../Api/RecipeData";
// let recipesData = LoadRecipes();
// Mock Data just only for Tests
import { getRecipes } from "../Data/Mocks/recipesData";




const store = createStore({
  recipes: getRecipes()
});

export default store;