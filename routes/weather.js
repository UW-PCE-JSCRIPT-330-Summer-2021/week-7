const { Router } = require('express');
const router = Router();

const weatherDAO = require('../daos/weather');

router.get('/', (req, res, next) => {
	res.render('weather');
});

router.get('/location', async (req, res, next) => {
	try {
		const location = req.query;
		const locationName = location.name;
		if (!locationName || JSON.stringify(location) === '{}') {
			res.redirect(302, '/weather');
			return;
		} else {
			const weather = await weatherDAO.getWeatherByLocation(locationName);
			if (!weather || JSON.stringify(weather) === '{}') {
				res.status(404).render('error', { name: locationName });
			} else {
				res.render('location', {
					name: weather.name,
					temperature: weather.temperature,
				});
			}
		}
	} catch (e) {
		next(e);
	}
});

module.exports = router;
