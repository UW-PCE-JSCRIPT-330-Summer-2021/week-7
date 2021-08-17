const { Router } = require("express");
const router = Router();

const weatherDAO = require('../daos/weather');

router.get('/', (req, res, next) => {
    res.render('weather');
});

router.get('/location', async (req, res, next) => {
    const location = req.query.name;
    if (!location) {
        res.redirect('/weather');
    } else {
        const weather = await weatherDAO.getWeather(location);
        if (weather) {
            res.render('location', {
                name: weather.name,
                temperature: weather.temperature
            });
        } else {
            res.status(404);
            res.render('location', {
                name: location,
                temperature: 'not available'
            });
        }
    }
});

module.exports = router;