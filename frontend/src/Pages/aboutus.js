import mainPicture from "../Assets/img/Category/lupe.png";

// Style import 
import '../Assets/Style/pages/aboutus.scss';

const aboutusPage = () => {
    return(<>
        <div className="container mt-5 aboutUs-container">
            <div className="row mb-5">
                <div className="col-sm">
                    <h2>Wer steht hinter der Webseite</h2>
                </div>
                
            </div>
            <div className="row">
                <p>Mein Name ist Tanja Kinast. Durch meine Absolvierung der Ausbildung zum Bäcker- und Konditormeister an der HTL/LMT in Wels habe ich dieses Projekt gestartet. So werde ich euch laufend mit neuen Inspirationen anregen.
</p>
<p>Gemeinsam mit Alexander Umgeher, der für das Programmieren der Webseite verantwortlich ist, hat dieses großartige Projekt für seine Diplomarbeit gestaltet.</p>
            </div>
        </div>
        </>
        );
}

export default aboutusPage;