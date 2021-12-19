import { useParams, useNavigate } from "react-router-dom";
import { getRecipe, deleteInvoice } from "../../Data/Mocks/dataRoute";

export default function Invoice() {
    let navigate = useNavigate();
  let params = useParams();
  let recipe = getRecipe(parseInt(params.recipeId, 10));
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {recipe.amount}</h2>
      <p>
        {recipe.name}: {recipe.number}
      </p>
      <p>Due Date: {recipe.due}</p>
      <p>
      <button
          onClick={() => {
            deleteInvoice(recipe.number);
            navigate("/recipe");
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}