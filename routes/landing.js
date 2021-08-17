const { Router } = require('express');
const router = Router();

/* See comment in index.js */

router.get('/', (req, res, next) => {
    res.render('index');
});

module.exports = router;