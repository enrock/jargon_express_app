var express = require('express');
var router = express.Router();

/* GET Admin Dashboard. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Consumer Dashbaord. */
router.get('/consumer-dashboard', function(req, res) {
    res.render('consumer-dashboard', { title: 'consumer-dashboard' });
});

/* GET login form page. */
router.get('/login', function(req, res) {
    res.render('login', { title: 'login' });
});

/* GET signup form page. */
router.get('/signup', function(req, res) {
    res.render('signup', { title: 'signup' });
});

/* GET signup error page. */
router.get('/error-login', function(req, res) {
    res.render('error-login', { title: 'signup' });
});

/* GET signup error page. */
router.get('/admin-login', function(req, res) {
    res.render('admin-login', { title: 'admin-login' });
});


module.exports = router;
