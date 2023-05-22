import { useState } from "react"
import { getVideogamesByName,setSearched } from "../../redux/actions"
import { useDispatch } from "react-redux"
import style from "./SearchBar.module.css"


const SearchBar = () => {
    const dispatch = useDispatch()
    const [query,setQuery] = useState("")
    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(getVideogamesByName(query))
        dispatch(setSearched(query))
    }
    return (
        <form onSubmit={submitHandler} className={style.container}>
            <input type="text" id="query" value={query} placeholder="Search videogames" onChange={(e) => setQuery(e.target.value)}
             />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar