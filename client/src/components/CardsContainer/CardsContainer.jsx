import Card from "../Card/Card";
import { useSelector } from "react-redux";
import style from "./CardsContainer.module.css";
import { useState } from "react";

const CardContainer = () => {
  const {videogames,source,filteredVideogames,order} = useSelector((state) => state);
  const [page, setPage] = useState(1);
  const gamesToShow =  source ? filteredVideogames.slice((page - 1) * 15, page * 15)
                              : videogames.slice((page - 1) * 15, page * 15)

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrePage = () => {
    setPage(page - 1);
  };


  return (
    <div className={style.cardContainer}>
      {gamesToShow.map((game) => {
        return (
          <Card
            id={game.id}
            name={game.name}
            image={game.image}
            // genre={game.genre.map(genre => genre.name).join(", ") } checkear el genre en creados
            platforms={game.platforms}
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
