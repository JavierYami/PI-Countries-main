import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filterCountries, getCountries } from '../../redux/actions';
import CountryCard from "../CountryCard/CountryCard";
import Pagination from "../Pagination/Pagination";

export default function HomePage () {

    const dispatch = useDispatch();

    const countries = useSelector(state => state.countries);

    const [currentPage, setCurrentPage ] = useState(1);

    const [postPerPage, setPostPerPage] = useState(10);

    const lastPostIndex = currentPage * postPerPage;

    const firstPostIndex = lastPostIndex - postPerPage;

    const currentPosts = countries.slice(firstPostIndex, lastPostIndex);


    useEffect(() =>{
        dispatch(getCountries());
    }, [])

    const handleOnChange = (event) => {
        const id = event.target.value;
        dispatch(filterCountries(id))
    }

    return(
        <div>

            <h1>Home Page</h1>

            <div>

                <select >
                    <option value="order by" disabled='disabled'>Order by</option>
                    <option value="AZ">A-Z</option>
                    <option value="ZA">Z-A</option>
                </select>

                <select onChange={handleOnChange}>
                    <option value="filter by continent" disabled='disabled'>Filter by Continent</option>
                    <option value='Africa'>Africa</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='North America'>North America</option>
                    <option value='Oceania'>Oceania</option>
                    <option value='South America'>South America</option>
                </select>

            </div>
            {
                currentPosts.map((country) => {
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
            <Pagination totalPosts={countries.length} postsPerPage={postPerPage} setCurrentPage={setCurrentPage}/>
        </div>
    )
}