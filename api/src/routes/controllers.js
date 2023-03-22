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

const postActivity =  async (name, difficulty, duration, season, countryId) => {

    const activity = await Activity.create({
        name,
        difficulty,
        duration,
        season
    });

    const country = await getCountryById(countryId);

    await country.addActivity(activity);

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

module.exports = {getAllCountries, getCountryById, postActivity, getAllActivities, getCountryByQuery}