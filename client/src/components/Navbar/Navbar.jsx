import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import style from "./Navbar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const location = useLocation()
  const hideSearchBar = location.pathname === "/form";

  return (
    <div className={style.mainContainer}>
      {!hideSearchBar && <SearchBar/>}
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
