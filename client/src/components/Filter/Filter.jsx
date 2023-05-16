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
  }

  useEffect(() => {
    if (!genres.length) {
        dispatch(getGenres())
    }
}, [])

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
        <div>
          <div onClick={() => {
            setSelectedGenre(["All"])
            handleDropdown({target: {name: "genre"}})
          }} >All</div>
          {genres.map(genre => {
            return (
              <div className={style.sectionOptions} key={genre.id} onClick={() => {
                setSelectedGenre([...selectedGenre,genre.name])
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

{
  /* <div>
//    <label htmlFor="source-select">Selecciona el origen:</label>
//    <select id="source-select" value={source} onChange={handleSource}>
//    <option value="TODOS">Todos</option>
//    <option value="API">API</option>
//    <option value="BDD">CREATED</option>

//    </select>


// <select name="order" value={orderBy} onChange={handleOrder}>
//   <option value="" > SELECT ORDER </option>
//   <option value="Ascendiente" > Ascendente</option>
//   <option value="Descendiente" > Descendiente </option>
       
//       </select>


      
//     </div> */
}

// const [orderBy, setOrderBy] = useState("")

// const handleOrder = (event) => {
//   const {name, value} = event.target;
//   setOrderBy(value)
//   dispatch(orderVideogames(orderBy))
// }
