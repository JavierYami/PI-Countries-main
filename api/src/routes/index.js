const { Router } = require ('express');
const { Activity, Country, CountryActivities} = require ('../db')
const {getAllCountries, getCountryById, postActivity, getAllActivities, getCountryByQuery} = require ('./controllers')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/countries', async (req, res) => {

    const {name} = req.query;

    if (name) {

        try {

            const countries = await getCountryByQuery (name);

            res.status(200).json(countries);

        } catch (error) {
            res.status(404).json({error: error.message});
        }
    }
    else {
    try {

        const allCountries = await getAllCountries();
        res.status(200).json(allCountries);

    } catch (error) {
        res.status(400).json({error: error.message});
    }}

  });

router.get('/countries/:countryId', async (req, res) => {

    try {     

        const {countryId} = req.params;
        const foundCountry = await getCountryById (countryId);
        res.status(200).json(foundCountry);

    } catch (error) {
        res.status(404).json({error: error.message});
    }

})

router.post('/activities' , async (req, res) => {

     try {

        const {name, difficulty, duration, season, countryId} = req.body;
        const newActivity = await postActivity(name, difficulty, duration, season, countryId)
        res.status(200).send(newActivity)

     } catch (error) {
        res.status(400).json({error: error.message})
     }

})

router.get('/activities', async (req, res) => {

    try {
        const AllActivities = await getAllActivities ();
        res.status(200).json(AllActivities)
    } catch (error) {
        res.status(400).json({error: error.message})

    }
})

module.exports = router;
