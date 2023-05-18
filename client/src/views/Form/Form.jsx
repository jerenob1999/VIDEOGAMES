import { useEffect, useState } from "react"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { getGenres } from "../../redux/actions";
import style from "./Form.module.css"


const Form = () => {

    const dispatch = useDispatch();
    const { genres } = useSelector(state => state)
    const [show, setShow] = useState(false)

    const showHandler = () => {
        setShow(true)
    }



    useEffect(() => {
        dispatch(getGenres())
    }, [])




    const [errors, setErrors] = useState({
        name: "",
        description: "",
        platforms: "",
        genres: "",
        image: "",
        releaseDate: ""
    })

    const [form, setForm] = useState({
        name: "",
        description: "",
        platforms: "",
        genre: [],
        image: "",
        releaseDate: "",
        rating: ""
    })
    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setForm({ ...form, [property]: value })
    };

    const [options, setOptions] = useState([])
    const handleOptions = (event) => {
        const [id, name] = event.target.value.split(",");
        setOptions([...options, name])
        setForm({ ...form, genre: [...form.genre, id] })
        console.log(options)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        try {
            axios.post("http://localhost:3001/videogames", form)
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
                <label htmlFor="genres" name="genres">GENRES</label>
                <select name="genres"  id="genres" onChange={handleOptions} onClick={showHandler}>
                    <option disabled>-- Select a genre --</option>
                    {show && genres.map((genre) => (
                        <option key={genre.id} value={`${genre.id},${genre.name}`}>{genre.name}</option>
                    ))}
                </select>

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
                <label>RATING </label>
                <input type="number" min="1" max="5" step="0.1" value={form.rating} onChange={changeHandler} name="rating" />
            </div>
            <div>
                <label>DESCRIPTION </label>
                <input type="text" value={form.description} onChange={changeHandler} name="description" />
            </div>
            <button className={style.submitButton} type="submit" onClick={() => console.log(form)} >SUBMIT</button>
        </form>
    )
}

export default Form

