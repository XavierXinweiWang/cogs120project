var express = require('express');
var router = express.Router();
var data = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', data);
});

/* GET storage page. */
router.get('/compare', function(req, res, next) {
  res.render('storage', { title: 'Express' });
});

module.exports = router;
