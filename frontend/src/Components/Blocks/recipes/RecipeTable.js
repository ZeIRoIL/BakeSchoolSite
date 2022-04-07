import React from 'react'

// Style assets
import '../../../Assets/Style/Blocks/recipeTable.scss';


export default function RecipeTable({ingredients}) {


    return (
        <div>
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
                    <td>{ingredient.unit}</td>
                  </tr>
                )}
            </tbody>
          </table>
        </div>
    )
}

