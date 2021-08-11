const { Router } = require('express');
const router = Router();
const Weather = require('../models/weather');

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/weather', (req, res, next) => {
    res.render('weather');
});

router.get('/weather/location', async (req, res, next) => {
    try {
        const locName = req.query.name;
        
        if(!locName || locName.length === 0) {
            throw new Error('Redirect');
        } else {

            let location = await Weather.findOne({ name: locName });

            if(location) {
                res.render('location', {location});
            } else {
                location = {
                    name: locName,
                    temperature: 'not available'
                };

                res.status(404).render('location', {location});
            }
        }
    } catch(e) {
        res.status(302).redirect('/weather');
    }
});

module.exports = router;
