import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createActivity } from "../../redux/actions";
import validation from "./validation";

const FormPage = () => {

    const dispatch = useDispatch();

    const countries = useSelector((state) => state.countries)

    const [activity, setActivity] = useState({
        name: '',
        difficulty: '0',
        duration :'',
        season: '0',
        countriesIds: [],
    })

    const [errors, setErrors] = useState({
        name: 'Name cannot be empty',
        duration: 'Duration must be a number',
        difficulty: 'Must select an option',
        season: 'Must select an option',
        countriesIds: 'Must select a country',
    })

    const difficultyRef = useRef(null);
    const seasonRef = useRef(null);
    const countriesIdsRef = useRef(null);

    const handleOnChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        if(name !== 'countriesIds'){
            
            setActivity({
                ...activity,
                [name] : value,
            })

        }
        else if(value === '0') {
            setActivity({
                ...activity,
                countriesIds: [...activity.countriesIds]
            })
        }
        else {
            setActivity({
                ...activity,
                countriesIds: [...activity.countriesIds, value]
            })
        }

        setErrors(validation({...activity, [name]: value}))

    }

    const handleSubmit = (event) => {
        event.preventDefault();
      
        const errors = validation(activity);
      
        if (Object.keys(errors).length > 0) {
          setErrors(errors);
          return;
        }

        dispatch(createActivity(activity));

        setActivity({
          name: "",
          difficulty: "0",
          duration: '0',
          season: "0",
          countriesIds: [],
        });

        setErrors({
          name: "",
          difficulty: "",
          duration: "",
          season: "",
          countriesIds: "",
        });

        difficultyRef.current.value = '0';
        seasonRef.current.value = '0';
        countriesIdsRef.current.value = '0';

      };

    return (

        <form onSubmit={handleSubmit}>

            <div>
            <label>Name: </label>
            <input type="text" name="name" value={activity.name} onChange={handleOnChange}/>
            {errors.name && <span>{errors.name}</span>}
            </div>

            <div>

            <label>Duration: </label>
            <input type="text" name="duration" value={activity.duration} onChange={handleOnChange} />
            {errors.duration && <span>{errors.duration}</span>}
            </div>

            <div>
            <label>Difficulty: </label>
            <select name="difficulty" onChange={handleOnChange} ref={difficultyRef}>
                <option value='0' disabled='disabled'>Select a difficulty</option>
                <option value={1}>Easy</option>
                <option value={2}>Moderate</option>
                <option value={3}>Indermediate</option>
                <option value={4}>Hard</option>
                <option value={5}>Extreme</option>
            </select>
            {errors.difficulty && <span>{errors.difficulty}</span>}
            </div>

            <div>
            <label>Season: </label>
            <select name="season" onChange={handleOnChange}  ref={seasonRef}>
                <option value="0" disabled='disabled'>Select a season</option>
                <option value="Summer">Summer</option>
                <option value="Winter">Winter</option>
                <option value='Spring'>Spring</option>
                <option value="Autumn">Autumn</option>
            </select>
            {errors.season && <span>{errors.season}</span>}
            </div>

            <div>
            <label >Countries: </label>
            <select name="countriesIds" onChange={handleOnChange} ref={countriesIdsRef}>
                <option value="0" disabled='disabled'>Select a country</option>
                {countries.map((country) => {
                    return <option value={country.id} key={country.id}>{country.name}</option>
                })}
            </select>
            {errors.countriesIds && <span>{errors.countriesIds}</span>}
            </div>

            <input type="submit" value="Enviar" ></input>

        </form>

    )

}

export default FormPage;