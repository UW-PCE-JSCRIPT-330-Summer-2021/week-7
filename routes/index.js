const { Router } = require('express');
const router = Router();

router.use("/weather", require('./weather'));

router.get("/", (req, res, next) => {
    res.render("index", { 
        items: ['item one', 'item two', 'item three']
     });
})

module.exports = router;