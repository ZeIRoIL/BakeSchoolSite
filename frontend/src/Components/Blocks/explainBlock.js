// Components
import ExpainCard from "../Cards/explainCard";

// Assets
import pic1 from '../../Assets/img/logo.png';



export default function explainBlock() {
    return (
        <div className="container mt-5">
            <div className="row ">
                <div className="col pe-3 pt-5">
                    <ExpainCard
                        name={"Backwelt"} 
                        color={"color-bakeworld"} 
                        text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."} 
                        img={pic1} 
                        btnName={"Backwelt"} />
                </div>
                <div className="col pe-3">
                    <ExpainCard 
                        name={"Rezepte"} 
                        color={"color-recipe"} 
                        text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."} 
                        img={pic1} 
                        btnName={"Rezepte"} />
                </div>
                <div className="col pe-3 pt-5">
                    <ExpainCard 
                        name={"Backkurse"} 
                        color={"color-quiz"} 
                        text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."} 
                        img={pic1} 
                        btnName={"Backkurse"} />
                </div>
            </div>
        </div>
    );
}