const { Router } = require('express');
const router = Router();
const Weather = require('../models/weather');
const weatherDAO = require('../daos/weather');
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
router.get('/weather', (req, res, next) => {
  res.render('weather');
});

router.get('/weather/location', async (req, res, next) => {
  try {
    const cityName = req.query.name;

    if (!cityName || cityName.length === 0) {
      throw new Error('Redirect');
    } else {
      let location = await Weather.findOne({ name: cityName });

      if (location) {
        res.render('location', { location });
      } else {
        location = {
          name: cityName,
          temperature: 'not available',
        };

        res.status(404).render('location', { location });
      }
    }
  } catch (e) {
    res.status(302).redirect('/weather');
  }
});

module.exports = router;
