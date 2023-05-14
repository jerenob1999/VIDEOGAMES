import { useEffect, useState } from "react"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { getGenres } from "../../redux/actions";
import style from "./Form.module.css"


const Form = () => {

    const dispatch = useDispatch();
    const {genres} = useSelector(state => state)



     useEffect(() => {
         if (!genres.length) {
             dispatch(getGenres())
         }
     },[])



     
     const [errors, setErrors] = useState({
         name: "",
         description: "",
         platforms: "",
         genres: "",
         image: "",
         releaseDate: ""
        })
        
        const [form, setForm] = useState({
            name:"",
            description:"",
            platforms:"",
            genre:[],
            image:"",
            releaseDate:""
        })
    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setForm({ ...form, [property]: value })
    };

    const [options, setOptions] = useState([])

    const handleOptions = (event) => {
        setForm({...form,genre:[...form.genre,event.target.value]})
    }
 



    const genresHandler = () => {
        if (!genres.length) {
            dispatch(getGenres())
        }
    }

    const submitHandler = (event) => {
        event.preventDefault()
        try {
            axios.post("http://localhost:3001/videogames",form)
            .then(res => alert("Videogame created succesfully"))
            
        } catch (error) {
            console.log(error.request.data)
        }
    }


    return (
        <form className={style.form} onSubmit={submitHandler}>
            <div>
                <label>NAME</label>
                <input type="text" value={form.name} onChange={changeHandler} name="name" />
                {errors.name && <span>{errors.name}</span>}
            </div>
            <div>
                <label>PLATFORMS </label>
                <input type="text" value={form.platforms} onChange={changeHandler} name="platforms" />
            </div>
            <div>
                <label htmlFor="genres">GENRES</label>
                <select multiple id="genres"  onChange={handleOptions} onClick={() => console.log(form)} > 
                <option disabled>-- Select a genre --</option>
                {genres.map((genre) => (
                    <option key={genre.id} value={genre.id} >{genre.name}</option>
                    ))}
                
                </select>
                <p>opciones seleccionadas: {form.genre.join(",")} </p>
                 
            </div>
            <div>
                <label>IMAGE</label>
                <input type="file" value={form.image} onChange={changeHandler} name="image" />
            </div>
            <div>
                <label>RELEASEDATE </label>
                <input type="date" value={form.releaseDate} onChange={changeHandler} name="releaseDate" />
            </div>
            <div>
                <label>DESCRIPTION </label>
                <input type="text" value={form.description} onChange={changeHandler} name="description" />
            </div>
            <button type="submit" onClick={() => console.log(form)} >SUBMIT</button>
        </form>
    )
}

export default Form

