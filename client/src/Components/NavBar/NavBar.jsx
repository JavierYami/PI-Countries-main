import { Link } from "react-router-dom";
import style from "../NavBar/NavBar.module.css"

const NavBar = () => {

    return ( 
        <nav className={style.nav}>
            <Link to={'homepage'}><button className={style.button}>Home</button></Link>
            <Link to={'create'}><button className={style.button}>Create Activity</button></Link>
        </nav>
    )
}

export default NavBar;