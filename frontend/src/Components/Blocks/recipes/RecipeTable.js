import React from 'react'




export default function RecipeTable({ingredients}) {

console.log(ingredients);

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
              {/* {ingredients
                .map(ingredient =>
                  <tr>
                    <td>{ingredient.data}</td>
                    <td>{ingredient.amount}</td>
                    <td>{ingredient.unit}</td>
                  </tr>
                )} */}
            </tbody>
          </table>
        </div>
    )
}

