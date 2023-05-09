import { Link } from "react-router-dom/cjs/react-router-dom.min"


const Card = (props) => {
    return (
        <>
        <Link to={`/detail/${props.id}`}><h1>{props.name}</h1></Link>      
        <p>{props.released} </p>
        <p>{props.rating} </p>
        <img src={props.image} alt={props.name}></img>
        <p>{props.genre} </p>
        </>
    )
}

export default Card;