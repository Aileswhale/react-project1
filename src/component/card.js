// import Image1 from "../Images/image1.png"
// import Star from "../Images/Star.png"
const Card = (props) => {
  let badgetag
  if (props.data.openSpots === 0) {
    badgetag = "SOLD OUT"
    
  } else if (props.data.location === "Online") {
    badgetag= "ONLINE"
    
  }
    return (
      <div className="card">
        {badgetag && <div className="tag"> {badgetag}</div>}
        <img src={`../Images/${props.data.coverImg}`} alt="katie" className="cardImg" />
        <div className="card1-bottom">
          <img src="../Images/Star.png" alt="star" className="star" />
          <span>{props.data.stats.rating}</span>
          <span className="grey">{props.data.stats.reviewcount} </span> <span> . </span>
          <span className="grey"> {props.data.location}</span>
        </div>
        <div className="card1-bottom2">{props.data.title}</div>
        <div className="card1-bottom3">
          <strong>From ${props.data.price}</strong> / person
        </div>
      </div>
    );
}
export default Card;