const { Router } = require('express');
const router = Router({ mergeParams: true });
const weatherDAO = require('../daos/weather');



router.get('/', (req, res, next) => {
  res.render('weather');
});

router.get('/location', async (req, res, next) => {
  const name = req.query.name;
  if (name) {
    const weatherCity = await weatherDAO.getByLocation(name);
    if (weatherCity) {
      res.render('location', { weatherCity });
    } else {
      res.status(404).render('otherlocation', { name });
    }
  } else {
    res.redirect(302, '/weather');
  }
});

module.exports = router; 

