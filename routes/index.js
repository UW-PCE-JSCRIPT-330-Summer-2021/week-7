const { Router } = require('express');
const router = Router();

router.use('/weather', require('./weather'));

router.get('/', (req, res, next) => {
  res.render('index', { items: ['item1', 'item2', 'item3'] });
})

module.exports = router;