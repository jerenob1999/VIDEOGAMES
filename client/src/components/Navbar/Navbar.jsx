import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "./Navbar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <div className={style.mainContainer}>
      <SearchBar></SearchBar>
      <button>
        {" "}
        <Link className={style.navbarLink} to="/home">
          HOME{" "}
        </Link>
      </button>
      <button>
        <Link className={style.navbarLink} to="/form">
          CREATE NEW VIDEOGAME{" "}
        </Link>
      </button>
    </div>
  );
};

export default Navbar;
