import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

const FormPage = () => {

    const dispatch = useDispatch();

    const countries = useSelector((state) => state.countries)

    const [activity, setActivity] = useState({

    })

    return (
        <form>
            <select>
                {countries.map((country) => {
                    return <option value={country.id}>{country.name}</option>
                })}
            </select>
        </form>
    )

}

export default FormPage;