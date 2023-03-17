//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {Activity, Country, CountryActivities} = require ('../api/src/db')
const axios = require('axios');
const url = 'https://restcountries.com/v3/all';

// Syncing all the models at once.

conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
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
        area: countryData.Area,
        subregion: countryData.subregion,
      });

      country.save();
    });
  })
  .catch(error => {
    console.error(error);
  });
});
