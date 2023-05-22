import { useEffect, useState } from "react"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { getGenres } from "../../redux/actions";
import style from "./Form.module.css"


const Form = () => {

    const dispatch = useDispatch();
    const { genres } = useSelector(state => state)
    const [show, setShow] = useState(false)
    const [platforms, setPlatforms] = useState(["PC","Playstation","Playstation 2","Playstation 3","Playstation 4","Playstation 5","PSP","Xbox","Xbox One","Xbox Series S/X","Xbox 360"])
    const [regex, setRegex] = useState({
        nameRegex:/^[\w\s]{1,50}$/,
        descriptionRegex:/^[\s\S]{1,500}$/,

    })
    const currentDate = new Date().toISOString().split('T')[0];
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
        releaseDate: "",
        submit:"",
        rating:""
    })

    const [form, setForm] = useState({
        name: "",
        description: "",
        platforms: "",
        genre: [],
        image: "",
        releaseDate: "",
        rating: "",
        submit: "",
    })
    
    const [options, setOptions] = useState([])
    const handleOptions = (event) => {
        const [id, name] = event.target.value.split(",");
        setOptions([...options, name])
        setForm({ ...form, genre: [...form.genre, id] })
        console.log(options)
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        axios
          .post("http://localhost:3001/videogames", form)
          .then((res) => {
            setErrors({...errors, submit:""})
            setForm({...form,submit:"VIDEOGAME CREATED SUCCESFULLY"})
          })
          .catch((error) => {
            setForm({...form,submit:""})
            setErrors({ ...errors, submit: "ERROR AT SUBMITING" });
          });
      };
    
    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        validate({ ...form, [property]: value })
        if(property === "genre") setForm({ ...form, [property]: [...form[property], value] }); 
        else setForm({ ...form, [property]: value }) 
    };
    const validate = (form) => {
        setErrors((prevErrors) => {
          let updatedErrors = { ...prevErrors };
      
          if (regex.nameRegex.test(form.name)) {
            updatedErrors = { ...updatedErrors, name: "" };
          } else {
            updatedErrors = { ...updatedErrors, name: "name is too long" };
          }
      
          if (form.name === "") {
            updatedErrors = { ...updatedErrors, name: "name cannot be empty" };
          }

          if (regex.descriptionRegex.test(form.description)) {
            updatedErrors = {...updatedErrors, description: ""};
          } else {
            updatedErrors = { ...updatedErrors, description: "description is too long" }
          }

          if (form.description === "") {
            updatedErrors = { ...updatedErrors, description: "description cannot be empty"}
          }

          if (form.platforms === "") {
            updatedErrors = { ...updatedErrors, platforms: "platforms cannot be empty" };
          }

          if (form.rating === "") {
            updatedErrors = { ...updatedErrors, rating: "rating cannot be empty" };
          }

          if (form.image === "") {
            updatedErrors = { ...updatedErrors, image: "image cannot be empty" };
          }

          if (form.releaseDate === "") {
            updatedErrors = { ...updatedErrors, releaseDate: "Release date cannot be empty" };
          }

          return updatedErrors;
        });
      };

    return (
        <form className={style.form} onSubmit={submitHandler}>
          <h1>CREATE YOUR OWN VIDEOGAME</h1>
            <div className={style.formContainer}>
                <label>NAME</label>
                <input type="text" value={form.name} onChange={changeHandler} name="name" />
                {errors.name && <span className={style.errors} >{errors.name}</span>}
            </div>
            <div>
                <label>PLATFORMS </label>
                <input type="text" value={form.platforms} onChange={changeHandler} name="platforms" />
                {errors.platforms && <span className={style.errors} >{errors.platforms}</span>}
            </div>
            <div>
                <label htmlFor="genres" name="genres">GENRES</label>
                <select name="genres" className={style.select} id="genres" onChange={handleOptions} onClick={showHandler}>
                    <option disabled>-- Select a genre --</option>
                    {show && genres.map((genre) => (
                        <option key={genre.id} value={`${genre.id},${genre.name}`}>{genre.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>IMAGE</label>
                <input type="text" value={form.image} onChange={changeHandler} name="image" placeholder="Insert img url"/>
                {errors.image && <span className={style.errors} >{errors.image}</span>}
            </div>
            <div>
                <label>RELEASEDATE </label>
                <input type="date" value={form.releaseDate} onChange={changeHandler} name="releaseDate" min="2023-01-01" max={currentDate} />
                {errors.releaseDate && <span className={style.errors} >{errors.releaseDate}</span>}
            </div>
            <div>
                <label>RATING </label>
                <input type="number" min="1" max="5" step="0.1" value={form.rating} onChange={changeHandler} name="rating" />
                {errors.rating && <span className={style.errors} >{errors.rating}</span>}
            </div>
            <div>
                <label>DESCRIPTION </label>
                <input type="text" value={form.description} className={style.description} onChange={changeHandler} name="description" />
                {errors.description && <span className={style.errors}>{errors.description}</span>}
            </div>
            <button className={style.submitButton} type="submit" disabled={!!errors.name || !!errors.description}>SUBMIT</button>
            <div className={style.submit}>
            {errors.submit && <span className={style.errors}>{errors.submit}</span>}
            {form.submit && <span className={style.success}>{form.submit}</span>}
            </div>
        </form>
    )
}

export default Form

