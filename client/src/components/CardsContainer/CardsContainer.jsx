import Card from "../Card/Card";
import { useSelector } from "react-redux";
import style from "./CardsContainer.module.css";
import { useState } from "react";

const CardContainer = () => {
  const { videogames, source, filteredVideogames } = useSelector(
    (state) => state
  );
  const [page, setPage] = useState(1);
  const gamesPerPage = 15;

  const gamesToShow = source
    ? filteredVideogames.slice((page - 1) * gamesPerPage, page * gamesPerPage)
    : videogames.slice((page - 1) * gamesPerPage, page * gamesPerPage);

  const totalPages = Math.ceil(
    (source ? filteredVideogames.length : videogames.length) / gamesPerPage
  );

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrePage = () => {
    setPage(page - 1);
  };

  return (
    <div className={style.cardContainer}>
      <div className={style.buttonContainer}>
        {page > 1 && (
          <button onClick={handlePrePage} className={style.prevButton}>
            {"<"}
          </button>
        )}
        <span className={style.pageNumber}>{page}</span>
        <span >/</span>
        <span className={style.totalPages}>{totalPages}</span>

        {page !== totalPages && (
          <button className={style.nextButton} onClick={handleNextPage}>
            {">"}
          </button>
        )}
      </div>
      {gamesToShow.map((game) => {
        return (
          <Card
            id={game.id}
            name={game.name}
            image={game.image}
            genre={game.genre}
            platforms={game.platforms}
            key={game.id}
            released={game.released}
            rating={game.rating}
          />
        );
      })}
      <div className={style.buttonContainer}>
        {page > 1 && (
          <button onClick={handlePrePage} className={style.prevButton}>
            {"<"}
          </button>
        )}
        <span className={style.pageNumber}>{page}</span>
        <span className={style.pageSeparator}>/</span>
        <span className={style.totalPages}>{totalPages}</span>
        {page !== totalPages && (
          <button className={style.nextButton} onClick={handleNextPage}>
            {">"}
          </button>
        )}
      </div>
    </div>
  );
};

export default CardContainer;
