const { Router } = require('express');
const router = Router();

const weatherDao = require('../daos/weather');

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/weather', (req, res, next) => {
  res.render('weather');
});

router.get('/weather/location', async (req, res, next) => {
  try {
    const locationName = req.query.name;
    if (!locationName || locationName.length === 0) {
      res.status(302).redirect('/weather');
    } else {
      const locWeather = await weatherDao.getWeather(locationName);
      if (!locWeather || JSON.stringify(locWeather) === '{}') {
        let noLocationFound = {
          name: locationName,
          temperature: "not available"
        }
        res.status(404).render('location', noLocationFound);
      } else {
        res.render('location', locWeather);
      }
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
