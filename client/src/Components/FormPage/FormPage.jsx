import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createActivity } from "../../redux/actions";

const FormPage = () => {

    const dispatch = useDispatch();

    const countries = useSelector((state) => state.countries)

    const [activity, setActivity] = useState({
        name: '',
        difficulty: 0,
        duration : 0,
        season: '',
        countriesIds: [],
    })

    const handleOnChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        if(name !== 'countriesIds'){
            
            setActivity({
                ...activity,
                [name] : value,
            })

        }
        else {
            setActivity({
                ...activity,
                countriesIds: [...activity.countriesIds, value]
            })
        }

        console.log(activity.countriesIds);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createActivity(activity));
  }

    return (

        <form onSubmit={handleSubmit}>

            <label>Name: </label>
            <input type="text" name="name" value={activity.name} onChange={handleOnChange}/>

            <label>Duration: </label>
            <input type="text" name="duration" value={activity.duration} onChange={handleOnChange} />

            <label>Difficulty: </label>
            <select name="difficulty" onChange={handleOnChange}>
                <option value={0}>Select a difficulty</option>
                <option value={1}>Easy</option>
                <option value={2}>Moderate</option>
                <option value={3}>Indermediate</option>
                <option value={4}>Hard</option>
                <option value={5}>Extreme</option>
            </select>

            <label>Season: </label>
            <select name="season" onChange={handleOnChange}>
                <option value="0">Select a season</option>
                <option value="Summer">Summer</option>
                <option value="Winter">Winter</option>
                <option value='Spring'>Spring</option>
                <option value="Autumn">Autumn</option>
            </select>


            <label >Countries: </label>
            <select name="countriesIds" onChange={handleOnChange}>
                <option value="0">Select a country</option>
                {countries.map((country) => {
                    return <option value={country.id} key={country.id}>{country.name}</option>
                })}
            </select>


            <input type="submit" value="Enviar" ></input>

        </form>

    )

}

export default FormPage;