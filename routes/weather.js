const { Router } = require("express")
const router = Router()

const weatherDAO = require('../daos/weather');

router.get("/", (req, res, next) => {
    res.render('weather');
});

router.get("/location", async (req, res, next) => {
    const location = req.query.name;
    if (!location || location === '') {
        res.redirect('/weather');
    } else {
        const weatherData = await weatherDAO.getWeatherByLocation(location);
        if (weatherData) {
            res.render('location', { name: weatherData.name, temperature: weatherData.temperature });
        } else {
            res.status(404);
            res.render('error', { name: location });
        }
    }
});

module.exports = router