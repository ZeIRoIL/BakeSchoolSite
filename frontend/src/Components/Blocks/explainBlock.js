// Components
import ExplainCard from "../Cards/explainCard";

// Assets
import pic1 from '../../Assets/img/MainSite/viewSites/Glühbirne.png';
import pic2 from '../../Assets/img/MainSite/viewSites/ErdbeereCake.png';
import pic3 from '../../Assets/img/MainSite/viewSites/Mixer.png';



export default function explainBlock() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row ">
                <div className="col pe-3 ">
                    <ExplainCard
                        name={"Backwelt"} 
                        color={"color-backwelt"} 
                        text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."} 
                        img={pic1} 
                        btnName={"Backwelt"} />
                </div>
                <div className="col pe-3">
                    <ExplainCard 
                        name={"Rezepte"} 
                        color={"color-recipe"} 
                        text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "} 
                        img={pic2} 
                        btnName={"Rezepte"} />
                </div>
                <div className="col pe-3">
                    <ExplainCard 
                        name={"Backkurse"} 
                        color={"color-backkurs"} 
                        text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "} 
                        img={pic3} 
                        btnName={"Backkurse"} />
                </div>
            </div>
        </div>
    );
}