const { Router } = require('express');
const router = Router();

router.use("/landing", require('./landing'));
router.use("/weather", require('./weather'));

/*
I thought having index.html from static / landing would be sufficient to pass
"should return a landing page" test from landing.test.js but that wasn't the case
for me. I kept getting "should return a landing page" as a fail.

To fix this, I ended up creating a landing.js route and index.mustache to pass the test.
*/

module.exports = router;