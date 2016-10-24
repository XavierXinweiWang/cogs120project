var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET storage page. */
router.get('/storage', function(req, res, next) {
  res.render('storage', { title: 'Express' });
});

module.exports = router;
