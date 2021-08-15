const { Router } = require('express');
const router = Router();
const weatherDAO = require('../daos/weather');

router.get('/', (req, res, next) => {
  res.render('weather');
});

router.get('/location', async (req, res, next) => {
  try {
    const locationName = req.query;
    const weather = await weatherDAO.getWeather(locationName);
    res.json(weather);
    res.render('location');
  } catch (e) {
    //console.log(e);
    next (e);
  }
});

module.exports = router;