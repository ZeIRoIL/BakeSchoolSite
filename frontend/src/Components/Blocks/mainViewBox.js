// Components

// Assets
    //style
import "../../Assets/Style/Blocks/mainViewBox.scss";

    //img
import pic1 from "../../Assets/img/MainSite/Backkurse.jpeg";
import pic2 from "../../Assets/img/MainSite/KategorieSlider.jpeg";
import pic3 from "../../Assets/img/MainSite/FragezeichenSlider.jpeg";
import pic4 from "../../Assets/img/MainSite/RezeptSlider.jpeg";

export default function mainViewBox() {
    return (
        <div className="container viewBox-Con">
            <div className="row m-0 p-0">
                <div className="col p-0">
                    <img
                        className="img-fluid rounded"
                        src={pic1}
                        alt="First slide"
                    />
                </div>
                <div className="col p-0 ">
                    <img
                        className="img-fluid rounded"
                        src={pic2}
                        alt="First slide"
                    />
                </div>
                <div className="col p-0">
                    <img
                        className="img-fluid rounded"
                        src={pic3}
                        alt="First slide"
                    />
                </div>
                <div className="col p-0">
                    <img
                        className="img-fluid rounded"
                        src={pic4}
                        alt="First slide"
                    />
                </div>
            </div>

        </div>
    );
}


