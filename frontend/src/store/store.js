// easy peasy store
import { createStore, action } from "easy-peasy";
// Api Data
import { getRecipes } from "../Api/RecipeData";
// Mock Data just only for Tests
// import { getRecipes } from "../Data/Mocks/recipesData";
let store;

const  ApiCall = async () => {
    store = await createStore({
    recipes: getRecipes()
  });
}
ApiCall();
export default store;