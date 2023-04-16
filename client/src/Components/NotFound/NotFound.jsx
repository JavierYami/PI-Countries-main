import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";
import style from '../NotFound/NotFound.module.css'

const NotFound = () => {

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(getCountries())
    }
    return(
        <div>
            <h1>No matches found</h1>
            <Link onClick={handleSubmit} to={'/homepage'}><img className={style.linkImg} src="https://res.cloudinary.com/dvldakcin/image/upload/v1681620702/Countries/back_1_m5z4d1.png"/></Link>
        </div>
    )
}

export default NotFound;