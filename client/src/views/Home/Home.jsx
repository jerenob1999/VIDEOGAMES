import CardContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions";
import style from "./Home.module.css"
import Filter from "../../components/Filter/Filter";
import Order from "../../components/Order/Order"
import { filterBySource, resetFilters } from "../../redux/actions";

const Home = () => {
    const {source,videogames,resetVideogames} = useSelector(state => state)
    const [reset, setReset] = useState([])
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getVideogames())
    },[dispatch])


    useEffect(() => {
        setReset(videogames);
    }, [videogames]);
    
    useEffect(() => {
        if(resetVideogames === true) dispatch(resetFilters(reset))
    },[resetVideogames])

    useEffect(() => {
       if(source) dispatch(filterBySource(source))
    },[dispatch,source])


    return (
        <div className={style.home}>
            <Order/>
            <Filter/>
            <CardContainer></CardContainer>
        </div>
    )
}

export default Home;