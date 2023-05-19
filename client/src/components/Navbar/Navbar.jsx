import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import style from "./Navbar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const location = useLocation();
  const hideSearchBar = location.pathname === "/form";

  return (
    <div>
    <div className={style.mainContainer}>

    <div className={style.buttonContainer}>
      <Link className={style.navbarLink} to="/home">
        <button>HOME</button>
      </Link>
      <Link className={style.navbarLink} to="/form">
        <button>NEW VIDEOGAME</button>
      </Link>
    </div>

    {!hideSearchBar && <SearchBar />}
    </div>
    </div>
  );
};

export default Navbar;
