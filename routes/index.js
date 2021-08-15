const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
  const timeStamp = new Date().toTimeString();
  res.render('index', { data: {time: timeStamp }, items: ['item one', 'item two', 'item three'] });
});

router.use('/weather', require('./weather'));

module.exports = router;