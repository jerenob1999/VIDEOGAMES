import { Link } from "react-router-dom/cjs/react-router-dom.min"
import landingVideo from "./Video/landingVideo.mp4"
import style from "./Landing.module.css"

const Landing = () => {
    return (
        <div className={style.landing}>


        <Link to="/home">
        <button className={style.buttonContainer}>
          <h1>WELCOME TO GAMERZONE</h1>
        </button>
        </Link>

          <video controls={false} autoPlay loop muted playsInline>
          <source src={landingVideo} type="video/mp4" />
          </video>
        </div>
    )
}

export default Landing