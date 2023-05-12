import { filterVideogames, orderVideogames } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from "react";

const Filter = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const videogames = useSelector((state => state.videogames))
  const [orderBy, setOrderBy] = useState("")

  const filterHandler = (event) => {
    event.preventDefault()
    const { name, value } = event.target;
    console.log(videogames)
    dispatch(filterVideogames([value]));
  };

  const handleOrder = (event) => {
    event.preventDefault()
    const {name, value} = event.target;
    setOrderBy(value)
  }

  useEffect(() => {
    if (orderBy === "Ascendiente")  {
      dispatch(orderVideogames(orderBy))}
    if (orderBy === "Descendiente") {
      dispatch(orderVideogames(orderBy))
    }  
  },[dispatch,orderBy])


  return (

    
    <div>


<select name="order" value={orderBy} onChange={handleOrder}>
  <option value="" > SELECT ORDER </option>
  <option value="Ascendiente" > Ascendente</option>
  <option value="Descendiente" > Descendiente </option>
       
      </select>


      
    </div>
  );
};

export default Filter;

{
  /* <label> FILTER BY
<select multiple={true} value={genres.name} onChange={changeHandler}> 
{genres.map((genre) => (
  <option key={genre.id} value={genre.id}>{genre.name}</option>
  ))}
  
  </select>
  
  
  
  </label>
<input type="text" value={form.GENRES} onChange={changeHandler} name="genres" /> */
}

{/* <select multiple={true} name="filter" onChange={filterHandler}>
  {genres.map((genre) => {
    return (
      <option value={genre.name} key={genre.id}>
        {genre.name}
      </option>
    );
  })}
</select> */}