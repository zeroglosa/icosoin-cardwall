var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cardwall/1', function (req, res, next) {
    res.redirect("/response.json");
});

module.exports = router;
