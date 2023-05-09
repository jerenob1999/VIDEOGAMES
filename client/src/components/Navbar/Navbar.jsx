import { Link } from "react-router-dom/cjs/react-router-dom.min"
import style from "./Navbar.module.css"


const Navbar = () => {
    return (
       <div className={style.mainContainer}>
        <Link to="/home">HOME </Link>
        <Link to="/form">CREATE NEW VIDEOGAME </Link>
       </div>
    )
}

export default Navbar