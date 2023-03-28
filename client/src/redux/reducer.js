 import { GET_COUNTRIES, COUNTRY_DETAIL, CLEAN_STATE, CREATE_ACTIVITY, ORDER_CARDS, FILTER_CARDS, GET_ALL_ACTIVITIES, FILTER_COUNTRIES_BY_ACTIVITY} from "./actions-types";

 const initialState = {
    countries : [],
    countryDetail : {},
    activities: [],
    filteredCountries: [],
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
        case CREATE_ACTIVITY:
            return {
                ...state,
                activities: [...state.activities, action.payload]
            }
        case FILTER_CARDS:
            return {
                ...state,
                countries: action.payload,
            }
        case GET_ALL_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
            }
        case FILTER_COUNTRIES_BY_ACTIVITY:
            return {
                ...state,
                countries: action.payload,
            }
        case ORDER_CARDS:
            return{
                ...state,
                countries: action.payload,
            }
        default:
            return {...state}
    }
 }

 export default reducer;