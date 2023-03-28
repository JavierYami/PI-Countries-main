import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filterCountries, filterCountriesByActivity, getAllActivities, getCountries, orderCards } from '../../redux/actions';
import CountryCard from "../CountryCard/CountryCard";
import Pagination from "../Pagination/Pagination";

export default function HomePage () {

    const dispatch = useDispatch();

    const countries = useSelector(state => state.countries);

    const activities = useSelector(state => state.activities);

    const [currentPage, setCurrentPage ] = useState(1);

    const [postPerPage, setPostPerPage] = useState(10);

    const lastPostIndex = currentPage * postPerPage;

    const firstPostIndex = lastPostIndex - postPerPage;

    const currentPosts = countries.slice(firstPostIndex, lastPostIndex);


    useEffect(() =>{
        dispatch(orderCards('A-Z'))
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
    }

    return(
        <div>

            <h1>Home Page</h1>

            <div>

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
                    <option value="Order by" disabled='disabled'>Order By</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>

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