import { useEffect, useRef,lazy,Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions";
import style from "./Home.module.css"
import Filter from "../../components/Filter/Filter";
import Order from "../../components/Order/Order"
import { filterBySource, resetFilters, orderVideogames, setResetFalse } from "../../redux/actions";
import Loading from "../../components/Loading/Loading"
const LazyCardContainer = lazy(() => import("../../components/CardsContainer/CardsContainer"))



const Home = () => {
    const {source,videogames,resetVideogames,order,searched} = useSelector(state => state)
    const dispatch = useDispatch()
    const reset = useRef(null);
    

    useEffect(() => {
        if(!searched) dispatch(getVideogames())
    },[dispatch,searched])



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
            <button onClick={() => buttonHandler()}>Reset Filters</button>
            <h1>GameFinder</h1>
            <div className={style.filters}>
            <div className={style.filterContainer}>
            <Order resetVideogames={resetVideogames}/>
            <Filter/>
            </div>
            <Suspense fallback={<Loading/>}>
            <LazyCardContainer />
            </Suspense>
            </div>
        </div>
    )
}

export default Home;