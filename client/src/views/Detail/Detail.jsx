import style from "./Detail.module.css"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getVideogameDetail , cleanvideogameDetail } from "../../redux/actions"

const Detail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const videogameDetail = useSelector(store => store.videogameDetail)
    const platforms = videogameDetail.platforms ? videogameDetail.platforms.map(p => p.platform.name).join(", ") : "";
    const genre = videogameDetail.genre ? videogameDetail.genre.map(genre => genre.name).join(", ") : "";

    

    useEffect(() => {
        dispatch(getVideogameDetail(id))
        return () => {
        dispatch(cleanvideogameDetail())
        }
    }, [dispatch, id])

    return (
        <div className={style.container}>
            <h1 className={style.gameTitle} >{videogameDetail.name}</h1>
            <p>{platforms} </p> 
            <p>{genre}</p>
            <p className={style.gameRating} >{videogameDetail.rating} </p>
            <img className={style.gameImage} src={videogameDetail.image} alt={videogameDetail.name} />
            <p className={style.gameDescription} >{videogameDetail.description} </p>

        </div>
    )
}

export default Detail;