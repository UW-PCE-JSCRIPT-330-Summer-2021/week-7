const { Router } = require('express');
const router = Router();
const weatherDAO = require('../daos/weather');

router.get('/', (req, res, next) => {
    res.render('weather');
});

router.get('/location', async (req, res, next) => {
    try {
        const loc = req.query;
        if (!loc.name || JSON.stringify(loc) === '{}') {
            res.redirect(302, '/weather');
            return;
        } else {
            const weatherByLoc = await weatherDAO.getWeather(loc.name);
            if (!weatherByLoc || JSON.stringify(weatherByLoc) === '{}') {
                res.status(404).render('location', { name: loc.name, temperature: 'not available' });
                return;
            } else {
                res.render('location', { name: weatherByLoc.name, temperature: weatherByLoc.temperature });
            }
        }
    } catch (e) {
        next(e);
    }
});

module.exports = router;
