import React from 'react'


// There is the Output for the RecipeDescription
function Hint(value) {
    if (value.value === "undefined") {
        return <div></div>
    }
    else {
        return (
            <div>
                {value.value
                    .map(h =>
                        <div>
                            <h5>{h.step}</h5>
                            <p className="hinttext">{h.text}</p>
                        </div>
                    )
                }
            </div>
        );
    }
}

function RecipeList({ description }) {
    return (
        <div>
            <h1>Anleitung</h1>

            {description

                .map(des =>
                    <div>

                        <h3>{des.step}</h3>
                        <h5>{des.text}</h5>
                        <Hint value={des.hint} />
                    </div>

                )
            }
        </div>
    )
}

export default RecipeList
