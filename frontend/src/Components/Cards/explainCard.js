
//style
import "../../Assets/Style/Card/explainCard.scss";

function explainCard({name,color,text,img,btnName}) {
  return (
    <>
    <div class="explainCard p-3" >
      <h2 className={` card-title-explain text-uppercase font-weight-bold  ${color}`}>{name}</h2>
      <img src={img} className=" explainImg  " alt="..."/>
      <p class=" pt-3 card-text-explain">{text}</p>
      <a href="#" class={` btn ${color} `}>{btnName}</a>
    </div>
    </>
  )
}

export default explainCard