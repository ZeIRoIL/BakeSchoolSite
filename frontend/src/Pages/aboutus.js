import mainPicture from "../Assets/img/überunsTanja.jpeg";

// Style import 
import '../Assets/Style/pages/aboutus.scss';

const aboutusPage = () => {
    return(<>
        <div className="container mt-5 aboutUs-container">
            <div className="row mb-5">
                <div className="col-sm">
                    <h2>Wer steht hinter der Webseite</h2>
                </div>
                <div className="row mb-5">
                    <div className="col-7">
                    <p>Mein Name ist Tanja Kinast. Durch meine Absolvierung der Ausbildung zum Bäcker- und Konditormeister an der HTL/LMT in Wels habe ich dieses Projekt gestartet. So werde ich euch laufend mit neuen Inspirationen anregen.
                </p>
                    </div>
                    <div className="col-5">
                    <img className="mb-3" src={mainPicture} alt="Tanja mit einer Torte"></img>
                </div>
                
                
                <p>Gemeinsam mit Alexander Umgeher, der für das Programmieren der Webseite verantwortlich ist, hat dieses großartige Projekt für seine Diplomarbeit gestaltet.</p>
                
            </div>
            </div>
            
        </div>
        
        </>
        );
}

export default aboutusPage;