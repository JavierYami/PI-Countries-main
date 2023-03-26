import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/actions';
import CountryCard from "../CountryCard/CountryCard";

export default function HomePage () {

    const dispatch = useDispatch();

    const countries = useSelector(state => state.countries);

    useEffect(() =>{
        dispatch(getCountries());
    }, [])

    return(
        <div>
            <h1>Home Page</h1>
            {
                countries.map((country) => {
                    return (
                        <CountryCard
                        key={country.id}
                        id={country.id}
                        img={country.flag}
                        name={country.name}
                        continent={country.continent}
                        />
                    )
                })
            }
        </div>
    )
}