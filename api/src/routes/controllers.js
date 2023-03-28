const { Activity, Country, CountryActivities} = require ('../db');
const {Op} = require ('sequelize')

const getAllCountries = async () => {

    const allCountries = await Country.findAll();
    return allCountries;

}

const getCountryById = async (countryId) => {

    const getCountry = await Country.findOne({
        where: {id : countryId}
    })
    if(getCountry) return getCountry;
    else throw new Error ('Id not found')
}

const postActivity =  async (name, difficulty, duration, season, countriesIds) => {

    const activity = await Activity.create({
        name,
        difficulty,
        duration,
        season
    });

//    const  addActivities = async ( countryId) => {

//        const country = await getCountryById(countryId);
   
//        await country.addActivity(activity);

//     }
    
    countriesIds.map( async (countryId)=>{
        const country = await getCountryById(countryId);
        await country.addActivity(activity);
        return 0;
    });

    return activity;

}

const getAllActivities = async () => {

    const AllActivities = await Activity.findAll();
    return AllActivities;

}

const getCountryByQuery = async (countryName) => {

    countryName = countryName.charAt(0).toUpperCase() + countryName.slice(1).toLowerCase();
    
    const getCountries = await Country.findAll({
        where: {
            name : {
            [Op.like] : `%${countryName}%`
            }
        }
    })

    if(getCountries.length>0) return getCountries;

    else throw new Error ('country not found')

}

const getCountriesFiltered = async (key) => {

    const countries = await Country.findAll();

    const countriesFiltered = countries.filter(country => {
        return country.continent === key;
    })

    return countriesFiltered;
}

module.exports = {getAllCountries, getCountryById, postActivity, getAllActivities, getCountryByQuery, getCountriesFiltered}