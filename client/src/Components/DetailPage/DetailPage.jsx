import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCountryDetail, cleanState } from "../../redux/actions";
import style from './DetailPage.module.css'

const DetailPage = () => {

    const dispatch = useDispatch();

    let countryDetail = useSelector((state) => state.countryDetail);

    let error = useSelector((state) => state.error)

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
            {countryDetail.flag ? <img src={countryDetail.flag} alt={`${countryDetail.name} flag`} /> : <img src = 'https://dinahosting.com/blog/cont/uploads/2021/03/error-404.jpg'/>}
            </div>
            <div className={style.textContainer}>
            {countryDetail.name ? <h1><span className={style.subtitle}>Name: </span>{countryDetail.name}</h1> : ''}
            {countryDetail.capital ? <h2><span className={style.subtitle}>Capital:</span> {countryDetail.capital} </h2> : ''}
            {countryDetail.continent ? <h1><span className={style.subtitle}>Continent: </span>{countryDetail.continent}</h1> : ''}
            {countryDetail.subregion ? <h2><span className={style.subtitle}>Subregion: </span>{countryDetail.subregion} </h2> : ''}
            {countryDetail.area ? <h1><span className={style.subtitle}>Area: </span>{countryDetail.area} Km2</h1>:''}
            {countryDetail.population ? <h1><span className={style.subtitle}>Population: </span>{countryDetail.population}</h1> : ''}
            {error ? <h1>COUNTRY NOT FOUND</h1> : ''}
            </div>
        </div>
    )
}

export default DetailPage;