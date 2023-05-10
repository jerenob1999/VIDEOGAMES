import CardContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions";
import style from "./Home.module.css"
import Filter from "../../components/Filter/Filter";

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getVideogames())
    },[dispatch])
    return (
        <div className={style.home}>
            <Filter/>
            <CardContainer></CardContainer>
        </div>
    )
}

export default Home;