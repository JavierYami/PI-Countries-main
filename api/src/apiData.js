const axios = require('axios');

const url = 'https://restcountries.com/v3/all';

const apiCountries = [];


const apiData = () => {

    axios.get(url)
  .then(response => {
    const countries = response.data;

    countries.forEach(countryData => {
      const capital = Array.isArray(countryData.capital) ? countryData.capital[0] : countryData.capital;
      const country = Country.build({
        id: countryData.cca3,
        name: countryData.name.common,
        flag: countryData.flags[1],
        continent: countryData.continents[0],
        capital: typeof capital === 'string' ? capital : '',
        population: countryData.population,
        area: countryData.area,
        subregion: countryData.subregion,
      });

      apiCountries.push(country);
      
      country.save();
    });
  })

}

module.exports = {
    apiData,
}