
//style
import "../../Assets/Style/Card/explainCard.scss";

function explainCard({name,text,img,btnName}) {
  return (
    <>
    <div class="explainCard" >
        <h2 class="card-title">{name}</h2>
            <img src={img} class="card-img-top explainImg" alt="..."/>
            <div class="card-body">
                <p class="card-text">{text}</p>
                <a href="#" class="btn btn-primary">{btnName}</a>
            </div>
    </div>
    </>
  )
}

export default explainCard