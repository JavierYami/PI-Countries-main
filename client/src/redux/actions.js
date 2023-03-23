import { GET_COUNTRIES, COUNTRY_DETAIL } from "./actions-types";
import axios from 'axios'

export const getCountries = () => {
    return async function(dispatch) {
        let response = await axios('http://localhost:3001/countries')
        return dispatch({ type: GET_COUNTRIES, payload: response.data})
    }
}