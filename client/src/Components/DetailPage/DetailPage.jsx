import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCountryDetail, cleanState } from "../../redux/actions";
import style from './DetailPage.module.css'
import ActivityCard from "../ActivityCard/ActivityCard";
import NotFound from "../NotFound/NotFound";

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
        <div>
            {error && <NotFound/>}
        <div className={style.mainContainer}>
            {error ? '': <div className={style.imgContainer}>
            {countryDetail.flag ? <img src={countryDetail.flag} alt={`${countryDetail.name} flag`} /> : ''}
            </div>}
            <div className={style.textContainer}>
            {countryDetail.name ? <h2><span className={style.title}>Name: </span>{countryDetail.name}</h2> : ''}
            {countryDetail.capital ? <h2><span className={style.title}>Capital:</span> {countryDetail.capital} </h2> : ''}
            {countryDetail.continent ? <h2><span className={style.title}>Continent: </span>{countryDetail.continent}</h2> : ''}
            {countryDetail.subregion ? <h2><span className={style.title}>Subregion: </span>{countryDetail.subregion} </h2> : ''}
            {countryDetail.area ? <h2><span className={style.title}>Area: </span>{countryDetail.area} Km2</h2>:''}
            {countryDetail.population ? <h2><span className={style.title}>Population: </span>{countryDetail.population}</h2> : ''}
            </div>

        </div>
        {countryDetail.activities?.length ? <h1 className={style.subtitle}>Activities created in this country: </h1> : ''}
            <div className={style.activityContainer}>
                {countryDetail.activities?.map(activity => {
                    return (
                        <ActivityCard name={activity.name} season={activity.season} difficulty={activity.difficulty} duration={activity.duration} key={activity.id}/>
                    )
                })}
            </div>
        </div>
    )
}

export default DetailPage;