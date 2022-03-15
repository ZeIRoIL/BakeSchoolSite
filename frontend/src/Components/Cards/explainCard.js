
//style
import "../../Assets/Style/Card/explainCard.scss";

function explainCard({name,color,text,img,btnName}) {
  return (
    <>
    <div class="explainCard" >
        <h2 className={`p-5 card-title text-uppercase font-weight-bold  ${color}`}>{name}</h2>
            <img src={img} className="card-img-top explainImg  " alt="..."/>
            <div class="card-body">
                <p class="card-text p-3">{text}</p>
                <a href="#" class="btn p-2 m-1">{btnName}</a>
            </div>
    </div>
    </>
  )
}

export default explainCard