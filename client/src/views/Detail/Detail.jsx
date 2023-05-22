import style from "./Detail.module.css"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getVideogameDetail , cleanvideogameDetail } from "../../redux/actions"

const Detail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const videogameDetail = useSelector(store => store.videogameDetail)
    const platforms = Array.isArray(videogameDetail.platforms) ? videogameDetail.platforms.map(p => p.platform.name).join(", ") : videogameDetail.platforms;


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
            <p><span>Supported Platforms:       </span>{platforms}</p> 
            <p> <span>Genres:       </span>{genre}</p>
            <p><span>Release Date:     </span>{videogameDetail.releaseDate} </p>
            <p className={style.gameRating} ><span>Rating:       </span>{videogameDetail.rating}</p>
            <img className={style.gameImage} src={videogameDetail.image} alt={videogameDetail.name} />
            <p className={style.gameDescription} dangerouslySetInnerHTML={{__html:videogameDetail.description }} ></p>
        </div>
    )
}

export default Detail;