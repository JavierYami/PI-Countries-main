import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCountryDetail, cleanState } from "../../redux/actions";
import style from './DetailPage.module.css'

const DetailPage = () => {

    const dispatch = useDispatch();

    let countryDetail = useSelector((state) => state.countryDetail);

    const {id} = useParams();

    useEffect(()=>{
        dispatch(getCountryDetail(id));
        return () => {
            dispatch(cleanState())
        }
    }, [])

    return (
        <div className={style.mainContainer}>
            <div className={style.imgContainer}>
            <img src={countryDetail.flag} alt={`${countryDetail.name} flag`} />
            </div>
            <div>
            <h1 className={style.title}>{countryDetail.name}</h1>
            {countryDetail.capital ? <h2><span className={style.subtitle}>Capital:</span> {countryDetail.capital} </h2> : ''}
            <h2><span className={style.subtitle}>Continent: </span>{countryDetail.continent}</h2>
            {countryDetail.subregion ? <h2><span className={style.subtitle}>Subregion: </span>{countryDetail.subregion} </h2> : ''}
            <h2><span className={style.subtitle}>Area: </span>{countryDetail.area} km2</h2>
            <h2><span className={style.subtitle}>Population: </span>{countryDetail.population}</h2>
            </div>
        </div>
    )
}

export default DetailPage;