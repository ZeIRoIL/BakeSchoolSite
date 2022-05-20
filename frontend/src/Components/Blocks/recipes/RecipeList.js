import React from 'react'


// Assets
import pic1 from '../../../Assets/img/logo.svg';
// Style assets
import '../../../Assets/Style/Blocks/recipeList.scss';
// There is the Output for the RecipeDescription



function RecipeList({ description }) {

// Creating a state for the hintbutton
const [showHints, setHints] = React.useState(false);

// function for the value of the button
const ToggleHint = () => {
    showHints ? setHints(false) : setHints(true);

    console.log(showHints);
}

function Hint(value) {
    if (value.value === "undefined") {
        return <div></div>
    }
    else {
        return (
            <div className="recipeHintsMain">
                <button className="btn"
                    onClick={ToggleHint} >
                    <i class="bi bi-info-circle"></i>
                    <p className='d-inline'> Hinweis</p>
                </button>
                {/* If the hint should be showed */}
                {value.value
                .map(h =>
                    <div >
                        <div id="" className={showHints ? "d-inline" : "d-none"}>
                            <h5>{h.step}</h5>
                            <p className="hinttext">{h.text}</p>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

function Image(value) {
    if (value.value === "undefined") {
        return <div className='empty-image-recipes'></div>
    }
    else {
        return (
            <>
                <img src={value.value} alt={value.value} className="recipesListImage"/>
            </>
        );
    }
}




console.log(description[0].step);
return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                {/* <h2 className='text-center'>Anleitung</h2> */}
                {description
                    .map(des =>
                    <div className="d-flex flex-row justify-content-start recipe-main pb-3">
                        <h3 className='pe-3'>{des.step}.</h3>
                        
                        <h5 className='pe-3 ps-3 recipesListText'>{des.text}</h5>
                        <Image value={des.image} image={des.image} />
                        {/* <h3>{des.step}</h3>
                        <div className='row m-1 rounded recipeListBody'>
                            <div className='col-xl-7 recipesListText'>
                            <Hint value={des.hint} className="recipehint" />
                            <Hint value={des.hint} className="recipehint" />                                  
                                <h3>{des.step}</h3>
                                <h5>{des.text}</h5>
                            </div>
                            <div className='col-xl-4 m-1 recipesListImage'>
                            
                                <img className="mainblockimg img-fluid" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==" />
                            </div>
                        </div> */}
                    </div>
                    )
                }
            </div>
        </div>
    </div>
    )
}


export default RecipeList
