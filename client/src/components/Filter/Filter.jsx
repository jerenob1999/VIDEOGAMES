import { setSource } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getGenres,filterByGenre } from "../../redux/actions";
import style from "./Filter.module.css"


const Filter = () => {
  const dispatch = useDispatch();
  const [displayDropdown, setDisplayDropdown] = useState({
    genre:false,
    source:false
  });




  const [origin, setOrigin] = useState("");
  const {genres} = useSelector(state => state)
  const [selectedGenre, setSelectedGenre] = useState([]);

  const handleDropdown = (event) => {
    const property = event.target.name
    setDisplayDropdown({...displayDropdown,[property]:!displayDropdown[property]});
  };

  const handleGenreSelect = (genre) => {
     dispatch(filterByGenre(genre))
     setSelectedGenre([...selectedGenre,genre])
  }

  useEffect(() => {
    if (!genres.length) {
        dispatch(getGenres())
    }
}, [dispatch,genres.length])

  useEffect(() => {
    if (origin !== "") {
      dispatch(setSource(origin));
    }
  }, [dispatch, origin]);

  return (
    <div className={style.filter}>

      <section className={style.section}>
      <div onClick={handleDropdown}  >
        <input
          readOnly
          placeholder="Filter by genre"
          value={selectedGenre}
          name="genre" 
        />
      </div>
      {displayDropdown.genre ? (
        <div className={style.sectionContainer} >
          <div  className={style.sectionOptions} onClick={() => {
            setSelectedGenre(["All"])
            handleDropdown({target: {name: "genre"}})
          }} >All</div>
          {genres.map(genre => {
            return (
              <div className={style.sectionOptions} key={genre.id} onClick={() => {
                handleGenreSelect(genre.name)
                handleDropdown({ target: { name: "genre" } }) }}>{genre.name}</div>
            )
          })}
        </div>
      ): null}
      </section>



    <section className={style.section}>
      <div onClick={handleDropdown}>
        <input
          type="text"
          readOnly
          placeholder="Filter by source"
          value={origin}
          name="source"
        />
      </div>

      {displayDropdown.source ? (
        <div name="source">
          <div
             className={style.sectionOptions}
             onClick={() => {
              setOrigin("API");
              handleDropdown({ target: { name: "source" } });
            }}
          >
            API
          </div>

          <div
          className={style.sectionOptions}
            onClick={() => {
              setOrigin("CREATED");
              handleDropdown({ target: { name: "source" } });
            }}
          >
            CREATED
          </div>

          <div
          className={style.sectionOptions}
            onClick={() => {
              setOrigin("ALL");
              handleDropdown({ target: { name: "source" } });
            }}
          >
            ALL
          </div>
        </div>
      ) : null}
    </section>
    </div>
  );
};

export default Filter;


