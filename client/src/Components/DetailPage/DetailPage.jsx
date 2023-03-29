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
        <div>
            <img src={countryDetail.flag} alt={`${countryDetail.name} flag`} />
            <h1>{countryDetail.name}</h1>
            <h1>{countryDetail.id}</h1>
            <h2>Capital: {countryDetail.capital}</h2>
            <h2>Continent: {countryDetail.continent}</h2>
            <h2> Subregion: {countryDetail.subregion}</h2>
            <h2>Area: {countryDetail.area} km2</h2>
            <h2>Population: {countryDetail.population}</h2>
        </div>
    )
}

export default DetailPage;