const { Router } = require("express")
const router = Router()

const weatherDAO = require('../daos/weather');

router.get("/", (req, res, next) => {
  return res.render('weather');
});

router.get("/location", async (req, res, next) => {
  const location = req.query.name;
  if (!location || location === '') {
    return res.redirect(302, '/weather'); 
  }
  try {
    const weather = await weatherDAO.getWeatherByLocation(location);
    if (!weather) {
      return res.status(404).render('location', { name: location, temperature: 'not available' });
    }
    return res.render('location', { name: weather.name, temperature: weather.temperature });
  } catch (e) {
    return res.status(500).send(e.message)
  }
});

module.exports = router