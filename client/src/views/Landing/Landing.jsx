import { Link } from "react-router-dom/cjs/react-router-dom.min"
import style from "./Landing.module.css"
import Carousel from "./Carousel"
import TypeWritter from "./TypeWritter"

const Landing = () => {
    return (
        <div className={style.landing}>
        <TypeWritter className={style.title} text="Welcome to GameFinder"/>
        <Link className={style.link} to="/home">
          <h1>LET'S GET STARTED</h1>
        </Link>
        <Carousel autoplay={true}/>
        </div>
    )
}

export default Landing