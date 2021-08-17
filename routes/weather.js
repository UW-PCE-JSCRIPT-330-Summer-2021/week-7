const { Router } = require('express');
const router = Router();
const weatherDAO = require('../daos/weather');

router.get("/", (req, res, next) => {
    res.render('weather');
});

router.get("/location", async (req, res, next) => {
    try {
        const locationName = req.query.name;
        if (!locationName || JSON.stringify(locationName) === '{}') {
            res.redirect('/weather');
            return;
        } else {
            const weather = await weatherDAO.getWeather(locationName);
            if (!weather || JSON.stringify(weather) === '{}') {
                res.status(404).render('errorpage', { name: locationName });
            } else {
                res.render('location', { name: weather.name, temperature: weather.temperature });
            }
            }
        } catch (e) {
        }
});

module.exports = router;