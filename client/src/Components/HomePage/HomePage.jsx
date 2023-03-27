import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/actions';
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

    return(
        <div>
            <h1>Home Page</h1>
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