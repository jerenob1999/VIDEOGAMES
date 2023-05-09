import style from "./Detail.module.css"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getVideogameDetail , cleanvideogameDetail } from "../../redux/actions"

const Detail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const videogameDetail = useSelector(store => store.videogameDetail)

    useEffect(() => {
        dispatch(getVideogameDetail(id))
        return () => {
        dispatch(cleanvideogameDetail())
        }
    }, [dispatch, id])

    return (
        <div className={style.container}>
            <h1>{videogameDetail.name}</h1>
            <p>{videogameDetail.description} </p>
            <p>{videogameDetail.rating} </p>
            <img src={videogameDetail.image} alt={videogameDetail.name} />

        </div>
    )
}

export default Detail;