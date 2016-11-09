var express = require('express');
var router = express.Router();
var data = require('../data.json');

/* GET Signin page. */
router.get('/', function(req, res, next) {
  res.render('main', {title: 'Express'});
});

/* GET Signin page. */
router.get('/register', function(req, res, next) {
  res.render('register', {title: 'Express'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', data);
});

/* GET storage page. */
router.get('/compare', function(req, res, next) {
  res.render('storage', data);
});

module.exports = router;
