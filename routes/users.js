var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var app = express();

// Put these statements before you define any routes.
var parser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

/* Login */
router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Login Page' });
});

/* Register */
router.get('/register', function(req, res, next) {
    res.render('register', { title: 'Register Page' });
});

/* Register users. */
router.post('/register', parser, function(req, res, next) {
    var nameForm = req.body.uname;
    var usernameForm = req.body.username;
    var emailForm = req.body.email;
    var passwordForm = req.body.password;
    var password2Form = req.body.password2;
});

module.exports = router;