import { filterVideogames, orderVideogames, filterBySource, setSource } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from "react";

const Filter = () => {
  const dispatch = useDispatch();
  const {genres , videogames, source} = useSelector(state => state);
  const [displayDropdown,setDisplayDrowdown] = useState(false)
  const [origin , setOrigin] = useState("")
  

  const handleDropdown = () => {
    setDisplayDrowdown(!displayDropdown)
  }

  useEffect(() => {
    if(origin !== "") {
      dispatch(setSource(origin))
    }
  },[dispatch,origin])

  return (

    <section>
      <div onClick={handleDropdown}>
        <input
        type="text"
        readOnly
        placeholder="Filter by source"
        value={origin}        
        />
      </div>

      {displayDropdown ? (
        <div>
          <div onClick={() => {
         setOrigin("API")
         handleDropdown() }} >API</div>


          <div onClick={() => {
            setOrigin("CREATED")
            handleDropdown()
          }} >CREATED</div>
        </div>
      ) : null}

    </section>
//  
  );
};

export default Filter;



{/* <div>
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


      
//     </div> */}


// const [orderBy, setOrderBy] = useState("")


// const handleOrder = (event) => {
//   const {name, value} = event.target;
//   setOrderBy(value)
//   dispatch(orderVideogames(orderBy))
// }
