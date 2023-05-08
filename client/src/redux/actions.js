import { GET_COUNTRIES, COUNTRY_DETAIL, CLEAN_STATE, CREATE_ACTIVITY, FILTER_CARDS, ORDER_CARDS, GET_ALL_ACTIVITIES, FILTER_COUNTRIES_BY_ACTIVITY, UPDATE_INPUT_VALUE, ERROR } from "./actions-types";
import axios from 'axios'

export const getCountries = () => {
    return async function(dispatch) {
        let response = await axios('pi-countries-main-production-9f83.up.railway.app/countries')
        return dispatch({ type: GET_COUNTRIES, payload: response.data})
    }
}
export const getCountryDetail = (id) => {
    return async function (dispatch) {
        await axios(`pi-countries-main-production-9f83.up.railway.app/countries/${id}`).then(response => dispatch({type:COUNTRY_DETAIL, payload:response.data})).catch(error =>  dispatch({type: ERROR, payload: error.message}))
    }
}

export const cleanState = () => {
    return function (dispatch) {
        return dispatch({type: CLEAN_STATE})
    }
}

export const createActivity = (activity) => {
        return async function (dispatch) {
            let response = await axios.post('pi-countries-main-production-9f83.up.railway.app/activities', activity).then(response => alert(`Activity ${activity.name} succesfully created`)).catch(error => alert(error.response.data.error));
            return dispatch({type: CREATE_ACTIVITY, payload: response.data})
        }
   
}

export const orderCards = (id) => {
    return  function (dispatch) {
        return dispatch({type: ORDER_CARDS, payload: id})
    }
}

export const filterCountries = (id) => {
    return  function (dispatch) {
        return dispatch({type: FILTER_CARDS, payload: id})
    }
}

export const getAllActivities = () => {
    return async function (dispatch) {
        let response = await axios ('pi-countries-main-production-9f83.up.railway.app/activities');
        return dispatch({type: GET_ALL_ACTIVITIES, payload: response.data})
    }
}

export const filterCountriesByActivity = (id) => {
    return async function (dispatch) {
        let response = await axios(`pi-countries-main-production-9f83.up.railway.app/countriesFilteredByActivity/${id}`);
        return dispatch({type: FILTER_COUNTRIES_BY_ACTIVITY, payload: response.data})
    }
}

export const updateInputValue = (inputValue) => {
    return async function (dispatch) {
        let response = await axios.get(`pi-countries-main-production-9f83.up.railway.app/countries/?name=${inputValue}`)
        return dispatch({type: UPDATE_INPUT_VALUE, payload:{ value: inputValue, data: response.data}})
    }
}



