// Components
import ExpainCard from "../Cards/explainCard";

// Assets
import pic1 from '../../Assets/img/logo.png';



export default function explainBlock() {
    return (
        <div className="container mt-5">
            <div className="row ">
                <div className="col pe-3">
                    <ExpainCard name={"Backwelt"} color={"explainCardFirst"} text={"sadfasdfasfdasdfa"} img={pic1} btnName={"Backwelt"}  />
                </div>
                <div className="col pe-3">
                    <ExpainCard name={"Rezepte"} color={"explainCardsecond"} text={"dsaafasfdasdf"} img={pic1} btnName={"Rezepte"} />
                </div>
                <div className="col pe-3">
                    <ExpainCard name={"Backkurse"} color={"explainCardthird"} text={"dsaafasfdasdf"} img={pic1} btnName={"Backkurse"} />
                </div>
            </div>
        </div>
    );
}