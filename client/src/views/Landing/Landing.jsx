import { Link } from "react-router-dom/cjs/react-router-dom.min"
import style from "./Landing.module.css"
import Carousel from "./Carousel"
import TypeWritter from "./TypeWritter"

const Landing = () => {
    return (
        <div className={style.landing}>
        <Carousel autoplay={true}/>
          <div className={style.textContainer}>
        <TypeWritter className={style.title} text="Welcome to GameFinder, Your Gateway to Endless Gaming Possibilities!"/>
        <Link className={style.link} to="/home">
          <h1>LET'S GET STARTED</h1>
        </Link>
          </div>
        </div>
    )
}

export default Landing