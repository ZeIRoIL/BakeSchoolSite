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
                        text={"Hier findest du reichlich Wissenswertes und viele interssante Themen aus der Konditorei und Bäckerei."} 
                        img={pic1} 
                        btnName={"Backwelt"} />
                </div>
                <div className="col pe-3">
                    <ExplainCard 
                        name={"Rezepte"} 
                        color={"color-recipe"} 
                        text={"Hast du Lust auf etwas Süßes? Oder ein gutes saftiges Brot? Hier findest du großartige einfache Rezepte zum Nachbacken!"} 
                        img={pic2} 
                        btnName={"Rezepte"} />
                </div>
                <div className="col pe-3">
                    <ExplainCard 
                        name={"Backkurse"} 
                        color={"color-backkurs"} 
                        text={"Willst du von Profis lernen? Dann kannst du hier nachschauen, ob ein Bäcker oder Konditor in deiner Nähe Backkurse anbietet."} 
                        img={pic3} 
                        btnName={"Backkurse"} />
                </div>
            </div>
        </div>
    );
}