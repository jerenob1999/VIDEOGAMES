import { Link } from "react-router-dom/cjs/react-router-dom.min"
import style from "./Card.module.css"
import { useState } from "react"


const Card = (props) => {

    const platforms = Array.isArray(props.platforms) ? props.platforms.map(p => p.platform.name).join(", ") : props.platforms
    const genres = Array.isArray(props.genre) && props.genre.map(genre => genre.name).join(", ")
   
    return (

        <Link  style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/detail/${props.id}`}>
            <div className={style.card}>
                <h1 className={style.cardTitle} >{props.name}</h1>
                <p className={style.platforms}>{platforms}</p> 
                <p className={style.genres}>{genres}</p>
                <p>{props.released} </p>
                <span className={style.rating}>{props.rating}</span>
                <img className={style.cardImage} src={props.image} alt={props.name}></img>
            </div>
        </Link>

    )
}

export default Card;