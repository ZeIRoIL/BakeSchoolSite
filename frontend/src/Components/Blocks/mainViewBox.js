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
        <div className="container viewBox-Con">
            <div className="row m-0 p-0">
                <div className="col p-0">
                    <img
                        className="img-fluid rounded"
                        src={pic3}
                        alt="First slide"
                    />
                </div>
                <div className="col p-0 ">
                    <img
                        className="img-fluid rounded"
                        src={pic7}
                        alt="First slide"
                    />
                </div>
                <div className="col p-0 ">
                    <img
                        className="img-fluid rounded"
                        src={pic1}
                        alt="First slide"
                    />
                </div>
                <div className="col p-0 ">
                    <img
                        className="img-fluid rounded"
                        src={pic4}
                        alt="First slide"
                    />
                </div>
                <div className="col p-0 ">
                    <img
                        className="img-fluid rounded"
                        src={pic5}
                        alt="First slide"
                    />
                </div>
                <div className="col p-0">
                    <img
                        className="img-fluid rounded"
                        src={pic2}
                        alt="First slide"
                    />
                </div>
                <div className="col p-0">
                    <img
                        className="img-fluid rounded"
                        src={pic8}
                        alt="First slide"
                    />
                </div>
            </div>
        </div>
        </div>
    );
}


