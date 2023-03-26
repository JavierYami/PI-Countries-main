import { GET_COUNTRIES, COUNTRY_DETAIL, CLEAN_STATE } from "./actions-types";
import axios from 'axios'

export const getCountries = () => {
    return async function(dispatch) {
        let response = await axios('http://localhost:3001/countries')
        return dispatch({ type: GET_COUNTRIES, payload: response.data})
    }
}
export const getCountryDetail = (id) => {
    return async function (dispatch) {
        let response = await axios(`http://localhost:3001/countries/${id}`)
        return dispatch({type: COUNTRY_DETAIL, payload: response.data})
    }
}

export const cleanState = () => {
    return function (dispatch) {
        return dispatch({type: CLEAN_STATE})
    }
}