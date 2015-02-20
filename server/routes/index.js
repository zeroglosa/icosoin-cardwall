var express = require('express');
var router = express.Router();
var fs = require('fs')

require('rootpath')();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cardwall/:id.:format', function (req, res, next) {
    var options = {
        root: '/public/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    var fileName = "response.json";
    fs.readFile('public/response.json', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).end();
        }
        else {
            console.log('Sent!');
            res.type('application/json');
            res.write(data);
            res.end()
        }
    });
});

module.exports = router;
