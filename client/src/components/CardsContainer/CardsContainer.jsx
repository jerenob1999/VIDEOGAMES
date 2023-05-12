import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import style from "./CardsContainer.module.css";
import { useState, useEffect } from "react";
import { orderVideogames } from "../../redux/actions";

const CardContainer = () => {
  const videogames = useSelector((state) => state.videogames);
  const order = useSelector(state => state.order)
  const dispatch = useDispatch()

  const [page, setPage] = useState(1);
  const gamesToShow = videogames.slice((page - 1) * 15, page * 15);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrePage = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    if (order === "Ascendiente") dispatch(orderVideogames())
    if (order === "Descendiente") dispatch(orderVideogames())
  },[dispatch])


  return (
    <div className={style.cardContainer}>
      {gamesToShow.map((game) => {
        return (
          <Card
            id={game.id}
            name={game.name}
            image={game.image}
            //revisar
            // genre={game.genre.length && game.genre.map(genre => {
            //     return `${genre.name}`
            // })}
            key={game.id}
            released={game.released}
            rating={game.rating}
          />
        );
      })}
      <div className={style.buttonContainer}>
        {page > 1 && (
          <button  onClick={handlePrePage} className={style.prevButton}>
            Previous
          </button>
        )}
        <button className={style.nextButton} onClick={handleNextPage}>
          Next page
        </button>
      </div>
    </div>
  );
};

export default CardContainer;
