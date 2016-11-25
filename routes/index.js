var express = require('express');
var router = express.Router();
var data = require('../data.json');
var passport = require('passport');
var User = require('../models/user');
var register = require('../passport/register');
var bCrypt = require('bcrypt-nodejs');
var Forget = require('../passport/forget');

var isAuthenticated = function (req, res, next) {
  // if user is authenticated in the session, call the next() to call the next request handler
  // Passport adds this method to request object. A middleware is allowed to add properties to
  // request and response objects
  if (req.isAuthenticated())
    return next();
  // if the user is not authenticated then redirect him to the login page
  res.redirect('/');
};

module.exports = function(passport) {
  /* GET Signin page. */
  router.get('/', function (req, res) {
    /*
    if (req.user){
      console.log(req.user);
      res.redirect('home', { message: req.flash('message') }, {user: req.user});
    }
    else
      res.render('main', { message: req.flash('message') });
    */
    res.render('main', { message: req.flash('message') });
  });

  /* Handle Login POST */
  router.post('/login', passport.authenticate('login', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash : true
  }));

  /* GET Register page. */
  router.get('/register', function (req, res, next) {
    res.render('register', {message: req.flash('message')});
  });

  /* GET Forget Password page. */
  router.get('/forgetPassword', function (req, res, next) {
    res.render('forget', {message: req.flash('message')});
  });

  /* Handle Registration POST */
  router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash : true
  }));

  /* Handle Logout */
  router.get('/signout', function(req, res) {
    req.session.destroy(function (err) {
      res.redirect('/');
    });
  });

  //handle forget password
  router.post('/forgot', function(req, res, next) {
    Forget.sendResetEmail(req, res, next);
  });

  router.get('/reset/:token', function(req, res) {
    User.findOne({ $and: [{resetPasswordToken: req.params.token}, {resetPasswordExpire: { $gt: Date.now()} }] }, function(err, user) {
      if (!user) {
        req.flash('error', 'Password reset token is invalid or has expired.');
        console.log(err);
        console.log('user: '+user);
        console.log(req.params.token);
        return res.redirect('/');
      }
      res.render('reset', {message: req.flash('message')
      });
    });
  });

  router.post('/reset/:token', function(req, res) {
    Forget.resetPost(req, res);
  });

  /* GET home page. */
  /*router.get('/home', isAuthenticated, function (req, res, next) {
    data['bversion'] = true;
    res.render('index', data);
  });*/

  /* GET alternate home page. */
  /*router.get('/home2', isAuthenticated, function (req, res, next) {
    data['bversion'] = false;
    res.render('index', data);
  });*/


  /* GET home page. */
  router.get('/home', function (req, res, next) {
    data['bversion'] = true;
    res.render('index', data);
  });

  /* GET alternate home page. */
  router.get('/home2', function (req, res, next) {
    data['bversion'] = false;
    res.render('index', data);
  });


  /* GET storage page. */
  router.get('/compare', function (req, res, next) {
    res.render('storage', data);
  });

  return router;

}
