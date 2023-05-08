

const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {Country} = require ('./src/db.js');
const {apiData} = require ('./src/apiData.js')
const axios = require('axios');
const url = 'https://restcountries.com/v3/all';
const {PORT} = process.env || 3001;

// Syncing all the models at once.

conn.sync({ force: false }).then(() => {
  server.listen(PORT, async () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
    const countries =  await Country.findAll();
    if(countries.length > 0) return;
    else apiData();
  });
});
