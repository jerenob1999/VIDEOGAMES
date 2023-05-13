import { filterVideogames, orderVideogames, filterBySource } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from "react";

const Filter = () => {
  const dispatch = useDispatch();
  const {genres , videogames, source} = useSelector(state => state);
  const [orderBy, setOrderBy] = useState("")


  const handleOrder = (event) => {
    const {name, value} = event.target;
    setOrderBy(value)
    dispatch(orderVideogames(orderBy))
  }


  const handleSource = (event) => {
    dispatch(filterBySource(event.target.value))
  }

  return (

    
    <div>
   <label htmlFor="source-select">Selecciona el origen:</label>
   <select id="source-select" value={source} onChange={handleSource}>
   <option value="TODOS">Todos</option>
   <option value="API">API</option>
   <option value="BDD">CREATED</option>

   </select>


<select name="order" value={orderBy} onChange={handleOrder}>
  <option value="" > SELECT ORDER </option>
  <option value="Ascendiente" > Ascendente</option>
  <option value="Descendiente" > Descendiente </option>
       
      </select>


      
    </div>
  );
};

export default Filter;
