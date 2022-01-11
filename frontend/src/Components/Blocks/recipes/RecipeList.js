import React from 'react'


// Assets
import pic1 from '../../../Assets/img/logo.svg';

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
                            <i class="bi bi-info-circle"></i>
                            {/* <h5>{h.step}</h5> */}
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
                    <div className='container p-5'>
                        <div className='row'>
                        <div className='col-xl-9'>
                        <h3>{des.step}</h3>
                        <h5>{des.text}</h5>
                        <Hint value={des.hint} />
                        </div>
                        <div className='col-xl-3'>
                            <img src={des.image} className="mainblockimg img-fluid" />
                        </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default RecipeList
