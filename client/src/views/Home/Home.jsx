import { useEffect, useRef, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Filter,
  Order,
  Loading,
  filterBySource,
  resetFilters,
  orderVideogames,
  setResetFalse,
  getVideogames,
} from "./index";
import style from "./Home.module.css";
const LazyCardContainer = lazy(() =>
  import("../../components/CardsContainer/CardsContainer")
);

const Home = () => {
  const { source, videogames, order, searched } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  const reset = useRef(null);

  useEffect(() => {
    if (!searched) dispatch(getVideogames());
  }, [dispatch, searched]);

  useEffect(() => {
    if (videogames.length && !reset.current) {
      reset.current = videogames;
    }
  }, [videogames]);

  useEffect(() => {
    if (source) dispatch(filterBySource(source));
    if (order) dispatch(orderVideogames(order));
  }, [dispatch, source, order]);

  const buttonHandler = () => {
    dispatch(resetFilters(reset.current));
    dispatch(setResetFalse());
  };



  return (
    <div className={style.home}>
      <h1>GameFinder</h1>
      <div className={style.filters}>
          <Order/>
        <div className={style.filterContainer}>
          <Filter/>
        </div>
      <button onClick={() => buttonHandler()}>Reset Filters</button>
        <Suspense fallback={<Loading/>}>
          <LazyCardContainer />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
