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

    const countriesFiltered = countries.filter(country => {
        return country.continent === key;
    })

    return countriesFiltered;
}

const getCountriesFilteredByActivity = async (key) => {

    const country_Activities = await CountryActivities.findAll({
        where: {activityId : key}
    })

    const countries = await Promise.all(country_Activities.map(async (countryActivitiy) =>{
        const country = await getCountryById(countryActivitiy.countryId)
        return country;
    }));

    return countries;
}

const getCountriesOrdered = async (key) => {

    const countries =  await getAllCountries();

        function compararPorNombreAscendente(a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
        }
        function compararPorNombreDescendente(a, b) {
        if (a.name > b.name) {
              return -1;
            }
        if (a.name < b.name) {
              return 1;
            }
        return 0;
        }
    
    key === 'A-Z' ? countries.sort(compararPorNombreAscendente) : countries.sort(compararPorNombreDescendente);
        

    return countries;
}


module.exports = {getAllCountries, getCountryById, postActivity, getAllActivities, getCountryByQuery, getCountriesFiltered, getCountriesFilteredByActivity, getCountriesOrdered}