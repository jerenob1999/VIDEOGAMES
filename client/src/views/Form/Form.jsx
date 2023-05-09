import { useState } from "react"
import axios from "axios";

const Form = () => {

    const [form, setForm] = useState({
        name: "",
        description: "",
        platforms: "",
        genres: "",
        image: "",
        releaseDate: ""
    })

    const [opcionSeleccionada, setOpcionSeleccionada] = useState([]);

    const [errors, setErrors] = useState({
        name: "",
        description: "",
        platforms: "",
        genres: "",
        image: "",
        releaseDate: ""
    })

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;



        validate({ ...form, [property]: value })
        setForm({ ...form, [property]: value })
    };

    const validate = (form) => {
        /^.{1,30}$/.test(form.name) ? setErrors({ ...errors, name: "" })
            : setErrors({ ...errors, name: "invalid name" })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3001/videogames",form)
        .then(res => alert(res))
    }

    return (
        <form onSubmit={submitHandler}>
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
                <label>GENRES
                <select multiple={true} value={opcionSeleccionada} onChange={changeHandler}> 
                <option > AVENTURA</option>
                <option > PLATAFORMA</option>
                <option > INDIE</option>
                
                
                </select>
                    
                    
                    
                     </label>
                <input type="text" value={form.GENRES} onChange={changeHandler} name="genres" />
            </div>
            <div>
                <label>IMAGE</label>
                <input type="text" value={form.image} onChange={changeHandler} name="image" />
            </div>
            <div>
                <label>RELEASEDATE </label>
                <input type="date" value={form.releaseDate} onChange={changeHandler} name="releaseDate" />
            </div>
            <div>
                <label>DESCRIPTION </label>
                <input type="text" value={form.description} onChange={changeHandler} name="description" />
            </div>
            <button type="submit">SUBMIT</button>
        </form>
    )
}

export default Form