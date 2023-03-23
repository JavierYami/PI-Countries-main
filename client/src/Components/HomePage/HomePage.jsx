import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/actions'

export default function HomePage () {

    const dispatch = useDispatch();




    useEffect(() =>{
        dispatch(getCountries())
    }, [])

    return(
        <div>
            <h1>Home Page</h1>
        </div>
    )
}