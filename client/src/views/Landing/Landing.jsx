import { Link } from "react-router-dom/cjs/react-router-dom.min"
import landingVideo from "./Video/landingVideo.mp4"
import style from "./Landing.module.css"

const Landing = () => {
    return (
        <div className={style.landing}>

        <div className={style.buttonContainer}>
        <Link to="/home">
          <h1>LETS GET STARTED</h1>
        </Link>
        </div>

          <video controls={false} autoPlay loop muted playsInline>
          <source src={landingVideo} type="video/mp4" />
          </video>
        </div>
    )
}

export default Landing