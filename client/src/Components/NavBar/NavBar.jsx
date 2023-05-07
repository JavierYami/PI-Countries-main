import { Link } from "react-router-dom";
import style from "../NavBar/NavBar.module.css"

const NavBar = () => {

    return (
        <nav className={style.nav}>
            <Link to={'homepage'}><img src='https://res.cloudinary.com/dvldakcin/image/upload/v1683492844/Countries/jh4zzolmfz1gdbm2hc6a.png'className={style.navImg}/></Link>
            <Link to={'create'} className={style.navLink}><h3 className={style.navText}>Create</h3></Link>
            <Link to={'About'} className={style.navLink}><h3 className={style.navText}>About</h3></Link>
        </nav>
    )
}

export default NavBar;