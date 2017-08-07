var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var app = express();

// Put these statements before you define any routes.
var parser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Login and Registration Applicaltion' });
});

module.exports = router;