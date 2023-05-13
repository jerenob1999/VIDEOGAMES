import { Link } from "react-router-dom/cjs/react-router-dom.min"
import style from "./Card.module.css"


const Card = (props) => {

    const platforms = props.platforms ? props.platforms.map(p => p.platform.name).join(", ") : "";
   
    return (

        <Link  style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/detail/${props.id}`}>
            <div className={style.card}>
                <h1 className={style.cardTitle} >{props.name}</h1>
                <p>{platforms}</p>
                <p>{props.genre} </p>
                <p>{props.released} </p>
                <p className={style.rating}>{props.rating} </p>
                <img className={style.cardImage} src={props.image} alt={props.name}></img>
                <p>{props.genre} </p>
            </div>
        </Link>

    )
}

export default Card;