const { Router } = require("express");
const router = Router();

const weatherDAO = require('../daos/weather');

router.get("/", async (req, res, next) => {
    //should return weather landing page with a form
    res.render("weather");
});

router.get("/location", async( req, res, next) => {
    const location = req.query.name;

        if (!location || location === '') {
            //should redirect back to weather landing if no name is provided
            res.redirect("/weather");
        }
        else {
            //get the weather based off of the given location
            const weather = await weatherDAO.getByLocation(location);
            if (weather) {
                //should return weather for the providied location
                res.render('location', { name: weather.name, temperature: weather.temperature });
            }
            else {
                //should return error if no matching place
                res.status(404);
                res.render('location', { name: 'Other', temperature: 'not available' });
            }
        }

});

module.exports = router;