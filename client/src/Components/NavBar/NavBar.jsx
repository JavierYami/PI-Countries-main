import { Link } from "react-router-dom";
import style from "../NavBar/NavBar.module.css"

const NavBar = () => {

    return (
        <nav className={style.nav}>
            <Link to={'homepage'}><img src='https://res.cloudinary.com/dvldakcin/image/upload/v1681610337/Countries/home_fohrb4.png'className={style.navImg}/></Link>
            <Link to={'create'}><img  src='https://res.cloudinary.com/dvldakcin/image/upload/v1681610616/Countries/plus_fkmuir.png'className={style.navImg}/></Link>
            <Link to={'About'}><img src='https://res.cloudinary.com/dvldakcin/image/upload/v1681665748/Countries/info_dbzbnf.png' className={style.navImg}/></Link>
        </nav>
    )
}

export default NavBar;