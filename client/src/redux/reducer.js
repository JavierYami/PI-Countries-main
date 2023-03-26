 import { GET_COUNTRIES, COUNTRY_DETAIL, CLEAN_STATE } from "./actions-types";

 const initialState = {
    countries : [],
    countryDetail : {},
 }

 const reducer = (state = initialState, action) => {
    switch(action.type){

        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case COUNTRY_DETAIL:
            return {
                ...state,
                countryDetail: action.payload
            }
        case CLEAN_STATE:
            return {
                ...state,
                countryDetail: {}
            }
        default:
            return {...state}
    }
 }

 export default reducer;