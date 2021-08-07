const { Router } = require('express');
const router = Router();

router.get("/", (req, res, next) => {
  res.render('index', { 
    items: ['item one', 'other', 'new item'] 
  })
});



module.exports = router;