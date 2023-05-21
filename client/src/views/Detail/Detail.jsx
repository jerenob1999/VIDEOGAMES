import style from "./Detail.module.css"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getVideogameDetail , cleanvideogameDetail } from "../../redux/actions"

const Detail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const videogameDetail = useSelector(store => store.videogameDetail)
    const platforms = Array.isArray(videogameDetail.platforms)  && videogameDetail.platforms.map(p => p.platform.name).join(", ");
    const genre = videogameDetail.genre ? videogameDetail.genre.map(genre => genre.name).join(", ") : "";


    useEffect(() => {
        dispatch(getVideogameDetail(id))
        console.log(videogameDetail)
        return () => {
        dispatch(cleanvideogameDetail())
        }
    }, [dispatch, id])

    return (
        <div className={style.container}>
            <h1 className={style.gameTitle} >{videogameDetail.name}</h1>
            <p>{`Sopported platforms:     ${platforms} `} </p> 
            <p> {`Genres:   ${genre} `}</p>
            <p>{`Release date:   ${videogameDetail.releaseDate} `} </p>
            <p className={style.gameRating} >{`Overral score:   ${videogameDetail.rating} `} </p>
            <img className={style.gameImage} src={videogameDetail.image} alt={videogameDetail.name} />
            <p className={style.gameDescription} >{videogameDetail.description} </p>
        </div>
    )
}

export default Detail;