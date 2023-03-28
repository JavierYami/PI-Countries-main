import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filterCountries, filterCountriesByActivity, getAllActivities, getCountries, getFilteredCountries, orderCards } from '../../redux/actions';
import CountryCard from "../CountryCard/CountryCard";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";

export default function HomePage () {

    const dispatch = useDispatch();

    const countries = useSelector(state => state.filteredCountries);

    const activities = useSelector(state => state.activities);

    const [currentPage, setCurrentPage ] = useState(1);

    const [postPerPage] = useState(10);

    const lastPostIndex = currentPage * postPerPage;

    const firstPostIndex = lastPostIndex - postPerPage;

    const [order, setOrder] = useState('none')

    let currentPosts = countries.slice(firstPostIndex, lastPostIndex);


    useEffect(() =>{
        dispatch(getCountries());
        dispatch(getAllActivities());
    }, [])

    const handleOnChangeContinent = (event) => {
        const id = event.target.value;
        dispatch(filterCountries(id))
    }

    const handleOnChangeActivity = (event) => {
        const id = event.target.value;
        dispatch(filterCountriesByActivity(id))
    }

    const handleOnChangeOrder = (event) => {
        const id = event.target.value;
        dispatch(orderCards(id))
        setOrder(id)
    }

    return(
        <div>

            <h1>Home Page</h1>

            <div>

                <SearchBar/>

                <select onChange={handleOnChangeActivity} >
                    <option value="filter by activity" disabled='disabled'>Filter by Activity</option>
                    {activities.map(activity => {
                        return <option value={activity.id} key={activity.id}>{activity.name}</option>
                    })}
                </select>

                <select onChange={handleOnChangeContinent}>
                    <option value="filter by continent" disabled='disabled'>Filter by Continent</option>
                    <option value='Africa'>Africa</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='North America'>North America</option>
                    <option value='Oceania'>Oceania</option>
                    <option value='South America'>South America</option>
                </select>

                <select onChange={handleOnChangeOrder}>
                    <option value="none" disabled= 'disabled' >Order By</option>
                    <option value="AZ">A-Z</option>
                    <option value="ZA">Z-A</option>
                    <option value="MAXTOMIN">Max population</option>
                    <option value="MINTOMAX">Min population</option>

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