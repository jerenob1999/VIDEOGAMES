import { setSource } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getGenres } from "../../redux/actions";

const Filter = () => {
  const dispatch = useDispatch();
  const [displayDropdown, setDisplayDropdown] = useState({
    genre:false,
    source:false
  });




  const [origin, setOrigin] = useState("");
  const {genres} = useSelector(state => state)
  const [genre, setGenre] = useState("");

  const handleDropdown = (event) => {
    const property = event.target.name
    setDisplayDropdown({...displayDropdown,[property]:!displayDropdown[property]});
  };

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
    <div>

      <section>
      <div onClick={handleDropdown} >
        <input
          type="text"
          readOnly
          placeholder="Filter by genre"
          value={genre}
          name="genre" 
        />
      </div>
      {displayDropdown.genre ? (
        <div>
          {genres.map(genre => {
            return (
              <div key={genre.id} onClick={() => {
                setGenre(genre.name)
                handleDropdown({ target: { name: "genre" } }) }}>{genre.name}</div>
            )
          })}
        </div>
      ): null}
      </section>



    <section>
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
             
             onClick={() => {
              setOrigin("API");
              handleDropdown({ target: { name: "source" } });
            }}
          >
            API
          </div>

          <div
            onClick={() => {
              setOrigin("CREATED");
              handleDropdown({ target: { name: "source" } });
            }}
          >
            CREATED
          </div>

          <div
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
