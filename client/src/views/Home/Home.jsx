import CardContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions";
import style from "./Home.module.css"
import Filter from "../../components/Filter/Filter";
import Order from "../../components/Order/Order"
import { filterBySource, resetFilters, orderVideogames, setResetFalse } from "../../redux/actions";

const Home = () => {
    const {source,videogames,resetVideogames,order} = useSelector(state => state)
    const dispatch = useDispatch()
    const reset = useRef(null);
    

    useEffect(() => {
      dispatch(getVideogames())
    },[dispatch])


    useEffect(() => {
        if (videogames.length && !reset.current) {
          reset.current = videogames;
        }
      }, [videogames]);




    useEffect(() => {
       if(source) dispatch(filterBySource(source))
       if(order) dispatch(orderVideogames(order))
    },[dispatch,source,order]) 


    const buttonHandler  = () => {
        dispatch(resetFilters(reset.current))
        dispatch(setResetFalse())
    }


    return (
        <div className={style.home}>
            <button onClick={() => buttonHandler()}>RESET FILTERS</button>
            <Order resetVideogames={resetVideogames}/>
            <Filter/>
            <CardContainer></CardContainer>
        </div>
    )
}

export default Home;