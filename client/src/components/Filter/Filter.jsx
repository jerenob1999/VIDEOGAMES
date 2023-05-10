import { useEffect } from "react"
import { filterVideogames } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux"

const Filter = () => {
    
    const dispatch = useDispatch()
    const genres = useSelector(state => state.genres)

    const filterHandler = (event) => {
        const {name, value} = event.target
        dispatch(filterVideogames(value))
    }


    return (
        <div>
            <select multiple={true} name="filter" onChange={filterHandler}>

                {genres.map(genre => {
                  return  (
                        <option value={genre.name} key={genre.id} >{genre.name}</option>
                    )
                })}

            </select>


              
            </div>
    )
}


export default Filter




{/* <label> FILTER BY
<select multiple={true} value={genres.name} onChange={changeHandler}> 
{genres.map((genre) => (
<option key={genre.id} value={genre.id}>{genre.name}</option>
))}

</select>
    
    
    
     </label>
<input type="text" value={form.GENRES} onChange={changeHandler} name="genres" /> */}