import mainPicture from "../Assets/img/Category/lupe.png";

// Style import 
import '../Assets/Style/pages/aboutus.scss';

const aboutusPage = () => {
    return(<>
        <div className="container mt-5 aboutUs-container">
            <div className="row mb-5">
                <div className="col-sm">
                    <h2>Das sind wir !</h2>
                    <p>Das Team :)</p>
                </div>
                <div className="col-sm">
                   <img src={mainPicture} alt="Unser About Us bild"/>
                </div>
            </div>
            <div className="row">
                <p> Das ist unsere Geschichte!</p>
            </div>
        </div>
        </>
        );
}

export default aboutusPage;