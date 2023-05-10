import { useState } from "react"

const SearchBar = () => {

    const [query,setQuery] = useState("")
    return (
        <form id="form">
            <input type="search" id="query" name="q" placeholder="Search..." />
            <button>Search</button>
        </form>
    )
}

export default SearchBar