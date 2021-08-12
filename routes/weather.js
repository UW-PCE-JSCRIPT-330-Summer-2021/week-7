const { Router } = require('express');
const router = Router();
const weatherDAO = require('../daos/weather');

router.get('/', async (req, res, next) => {
    res.render('weather');
});

router.get('/location', async (req, res, next) => {
    try {
        const name = req.query.name;
        if (!name || name === '') {
            res.redirect('/weather');
        } else {
            const weather = await weatherDAO.getWeatherByName(name);
            if (!weather) {
                const temperature = "not available";
                res.status(404).render('location', { name, temperature });
            } else {
                const temperature = weather.temperature;
                res.render('location', { name, temperature })
            }
        }
    } catch (e) {
        next(e);
    }
});

module.exports = router;
