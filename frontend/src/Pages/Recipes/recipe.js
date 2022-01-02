import { useParams, useNavigate } from "react-router-dom";
import { getRecipe } from "../../Data/Mocks/recipesData";

export default function Invoice() {
  let navigate = useNavigate();
  let params = useParams();
  let recipe = getRecipe(parseInt(params.recipeId, 10));


  let ingredients = recipe.ingredients;
  let description = recipe.description;


  // Hier habe ich noch ein Problem mit der Ausgabe!
  function Hint(value) {
  
    if (value.value === "undefined") {
      return <div>Empty</div>
    }
    else {
      console.log(value.value.length);
      return(
        <div></div>
      );
    }
  }

  return (
    <main className="container p-5" style={{ padding: "1rem" }}>
      <div className="row">
        <div className="col-xl-3">
          {/* Should be a new component */}
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Menge</th>
              </tr>
            </thead>
            <tbody>
              {ingredients
                .map(ingredient =>
                  <tr>
                    <td>{ingredient.data}</td>
                    <td>{ingredient.amount}</td>
                  </tr>
                )}
            </tbody>
          </table>
        </div>
        <div className="col-xl-7">
          {/* Should be new Component */}
          <h1>Anleitung</h1>

          {description

            .map(des =>
              <div>

                <h3>{des.step}</h3>
                <p>{des.text}</p>
                <Hint value={des.hint} />
              </div>

            )
          }
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