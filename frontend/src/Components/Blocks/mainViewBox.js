// Components

// Assets
    //style
import "../../Assets/Style/Blocks/mainViewBox.scss";

    //img
import pic1 from "../../Assets/img/MainSite/pic1.jpg";
import pic2 from "../../Assets/img/MainSite/pic2.jpg";
import pic3 from "../../Assets/img/MainSite/pic3.jpg";
import pic4 from "../../Assets/img/MainSite/pic1.jpg";

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


