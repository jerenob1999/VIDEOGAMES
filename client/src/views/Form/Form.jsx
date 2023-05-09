import { useState } from "react"

const Form = () => {

    const [form, setForm] = useState({
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

        setForm({...form, [property]:value})
    };

    return (
        <form>
            <div>
                <label>NAME</label>
                <input type="text" value={form.name} onChange={changeHandler} name="name" />
            </div>
            <div>
                <label>DESCRIPTION </label>
                <input type="text" value={form.description} onChange={changeHandler} name="description" />
            </div>
            <div>
                <label>PLATFORMS </label>
                <input type="text" value={form.platforms} onChange={changeHandler} name="platforms" />
            </div>
            <div>
                <label>GENRES </label>
                <input type="text" value={form.GENRES} onChange={changeHandler} name="genres" />
            </div>
            <div>
                <label>IMAGE</label>
                <input type="text" value={form.image} onChange={changeHandler} name="image" />
            </div>
            <div>
                <label>RELEASEDATE </label>
                <input type="text" value={form.releaseDate} onChange={changeHandler} name="releaseDate" />
            </div>
        </form>
    )
}

export default Form