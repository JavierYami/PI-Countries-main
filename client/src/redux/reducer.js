 import { GET_COUNTRIES, COUNTRY_DETAIL, CLEAN_STATE, CREATE_ACTIVITY, ORDER_CARDS, FILTER_CARDS, GET_ALL_ACTIVITIES, FILTER_COUNTRIES_BY_ACTIVITY, UPDATE_INPUT_VALUE, ERROR} from "./actions-types";

 const initialState = {
    countries : [],
    countryDetail : {},
    activities: [],
    inputValue: '',
    filteredCountries: [],
    error: '',
 }

 const reducer = (state = initialState, action) => {
    switch(action.type){

        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                filteredCountries: action.payload,
            }
        case COUNTRY_DETAIL:
            return {
                ...state,
                countryDetail: action.payload,
            }
        case ERROR:
            return{
                ...state,
                error: action.payload,
            }
        case CLEAN_STATE:
            return {
                ...state,
                countryDetail: {},
                error:'',
            }
        case CREATE_ACTIVITY:
            return {
                ...state,
                activities: [...state.activities, action.payload]
            }
        case FILTER_CARDS:
            if(action.payload === '0') return {
                ...state,
                filteredCountries: state.countries,
            }
            return {
                ...state,
                filteredCountries: state.countries.filter(country => {
                    return country.continent === action.payload;
                })
            }
        case GET_ALL_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
            }
        case FILTER_COUNTRIES_BY_ACTIVITY:
            return {
                ...state,
                filteredCountries: action.payload,
            }
        case ORDER_CARDS:
            return {
                ...state,
                filteredCountries: state.filteredCountries.sort(((a, b) => {
                    if (action.payload === 'AZ' || action.payload === 'none') {
                        return a.name.localeCompare(b.name);
                    } else if (action.payload === 'ZA') {
                        return b.name.localeCompare(a.name);
                    }
                    if(action.payload === 'MAXTOMIN'){
                        return b.population - a.population;
                    }else if(action.payload === 'MINTOMAX'){
                        return a.population - b.population;
                    }
                }))
            }
        case UPDATE_INPUT_VALUE:
            return{
                ...state,
                inputValue: action.payload.value,
                filteredCountries: state.countries.filter(country => {
                    return country.name.includes(state.inputValue)
                })
            }

        default:
            return {...state}
    }
 }

 export default reducer;