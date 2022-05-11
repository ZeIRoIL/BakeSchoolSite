// Components

// Assets
    //style
import "../../Assets/Style/Blocks/mainViewBox.scss";

    //img
import pic1 from "../../Assets/img/RecipesThumbnail/pic1.jpg";
import pic2 from "../../Assets/img/RecipesThumbnail/pic2.jpg";
import pic3 from "../../Assets/img/RecipesThumbnail/pic3.jpg";
import pic4 from "../../Assets/img/RecipesThumbnail/pic4.jpg";
import pic5 from "../../Assets/img/RecipesThumbnail/pic9.jpg";
import pic6 from "../../Assets/img/RecipesThumbnail/pic6.jpg";
import pic7 from "../../Assets/img/RecipesThumbnail/pic7.jpg";
import pic8 from "../../Assets/img/RecipesThumbnail/pic8.jpg";

export default function mainViewBox() {
    return (
        <div className="containerViewBox">
            <h3 className="mb-5">Inspiration aus unserer Backstube</h3>
        <div className="container viewBox-Con">
            <div className="row m-0 p-0 mb-3">
                <div className="col p-0">
                    <img
                        className="img-fluid"
                        src={pic3}
                        alt="First slide"
                    />
                </div>
                <div className="col p-0 ">
                    <img
                        className="img-fluid"
                        src={pic7}
                        alt="First slide"
                    />
                </div>
                <div className="col p-0 ">
                    <img
                        className="img-fluid "
                        src={pic1}
                        alt="First slide"
                    />
                </div>
                <div className="col p-0 ">
                    <img
                        className="img-fluid "
                        src={pic5}
                        alt="First slide"
                    />
                </div>
                <div className="col p-0 ">
                    <img
                        className="img-fluid "
                        src={pic8}
                        alt="First slide"
                    />
                </div>
                
            </div>
        </div>
        </div>
    );
}


