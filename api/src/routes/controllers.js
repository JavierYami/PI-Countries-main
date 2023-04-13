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

    const country_Activities = await CountryActivities.findAll({
        where: {countryId : countryId}
    })

    const country_ActivitiesiDs = country_Activities.map(country_Activity => country_Activity.activityId)

    const activities = await Promise.all( country_ActivitiesiDs.map(async(country_ActivityiD) =>  Activity.findOne({
        where: {id : country_ActivityiD}
    })))

    
    getCountry.dataValues.activities = activities;
    
    console.log(getCountry.activities)

    if(getCountry) return getCountry;

    else throw new Error ('Country Not found')
}

const postActivity =  async (name, difficulty, duration, season, countriesIds) => {

     const activityName = await Activity.findOne({
        where: {name : name}
    })
    if(activityName) throw new Error ('This activity alredy exists, please create another one')

    const activity = await Activity.create({
        name,
        difficulty,
        duration,
        season
    });

    
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

    return getCountries;
}

const getCountriesFiltered = async (key) => {

    const countries = await Country.findAll();

    if(key === 'filter by continent') return countries;

    const countriesFiltered = countries.filter(country => {
        return country.continent === key;
    })

    return countriesFiltered;
}

const getCountriesFilteredByActivity = async (key) => {

    if(key === 'filter by activity') return await Country.findAll();

    const country_Activities = await CountryActivities.findAll({
        where: {activityId : key}
    })

    console.log(country_Activities);

    const countries = await Promise.all(country_Activities.map(async (countryActivitiy) =>{
        const country = await getCountryById(countryActivitiy.countryId)
        return country;
    }));

    return countries;
}

module.exports = {getAllCountries, getCountryById, postActivity, getAllActivities, getCountryByQuery, getCountriesFiltered, getCountriesFilteredByActivity}