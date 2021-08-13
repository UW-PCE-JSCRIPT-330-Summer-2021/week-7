const { Router } = require('express');
const weatherDAO = require('../daos/weatherDAO');
const router = Router();

router.get("/", (req, res, next) => {
    res.render("weather");
})

router.get("/location", async (req, res, next) => {
    try {
        if (!req.query.name || req.query.name.length < 1) {
            res.setHeader("Location", "/weather");
            res.sendStatus(302);
            return;
        }

        const temp = await weatherDAO.getByLocation(req.query.name);
        if (temp === null) {
            res.status(404).render("location", { Location: req.query.name, NotFound: true });
        } else {
            res.render("location", { Location: req.query.name, Weather: temp.temperature });
        }
    }
    catch (exc) {
        res.status(500).send(exc.message);
    }
})

module.exports = router;