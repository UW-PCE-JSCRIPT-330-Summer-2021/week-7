const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
    const time = new Date().toTimeString();
    res.render('index', {
        data: { time: time },
        items: ['item1', 'item2', 'item3']
    });
});
  
router.use('/weather', require('./weather'));

module.exports = router;
