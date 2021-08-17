const { Router } = require('express');
const router = Router();

const weatherDAO = require('../daos/weather');


router.get('/weather', (req, res, next) => {
    res.render('weather');
});
router.get('/weather/location', async (req, res, next) => {
    try {
        const name = req.query.name;
        const data = await weatherDAO.getByName(name);
        if (!name) {
            res.redirect(302, '/weather');
        } else {
            if (!data || data.length == 0) {
                throw new Error(`The weather for ${name} is not available
                    <a href= "/weather">Go Back</a>`);
            } else {
                res.render('location', { data: { name: name, temperature: data[0].temperature }});
            }
        }
    } catch(e) {
        console.log(e);
        res.status(404).send(e.message);
    }
});


module.exports = router;