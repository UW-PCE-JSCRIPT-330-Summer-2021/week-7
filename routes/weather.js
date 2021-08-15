const { Router } = require('express');
const router = Router();
const weatherDAO = require('../daos/weather');

router.get('/', (req, res, next) => {
  res.render('weather');
});

router.get('/location', async (req, res, next) => {
  try {
    const location = req.query;
    if (!location.name || location.name === '') {
      res.redirect('/weather');
      return;
    } else {
      const weather = await weatherDAO.getWeather(location.name);
      if (!weather || weather === '') {
        res.status(404).render('location', { name: location.name, temperature: 'not available' });
        return;
      } else {
        res.render('location', { name: weather.name, temperature: weather.temperature });
      }
    }
  } catch (e) {
    next (e);
  }
});

module.exports = router;