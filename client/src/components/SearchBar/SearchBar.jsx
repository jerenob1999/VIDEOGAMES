import { useState } from "react"
import { getVideogamesByName } from "../../redux/actions"
import { useDispatch } from "react-redux"

const SearchBar = () => {
    const dispatch = useDispatch()
    const [query,setQuery] = useState("")
    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(getVideogamesByName(query))
    }
    return (
        <form onSubmit={submitHandler}>
            <input type="text" id="query" value={query} placeholder="Search videogames" onChange={(e) => setQuery(e.target.value)}
             />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar