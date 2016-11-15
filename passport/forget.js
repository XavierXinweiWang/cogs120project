var async = require('async');
var bCrypt = require('bcrypt-nodejs');
var express = require('express');
var passport = require('passport');
var nodemailer = require('nodemailer');
var crypto = require('crypto');
var User = require('../models/user');


exports.sendResetEmail = function (req, res, next) {
    async.waterfall([
        function (done) {
            crypto.randomBytes(20, function (err, buf) {
                var token = buf.toString('hex');
                done(err, token);
            });
        },
        function (token, done) {
            User.findOne({email: req.body.email}, function (err, user) {
                if (!user) {
                    console.log('no email found');
                    req.flash('error', 'No account with that email address exists.');
                    return res.redirect('/');
                }
                user.resetPasswordToken = token;
                user.resetPasswordExpire = Date.now() + 7200000; // 2 hours
                console.log('email found');
                console.log(Date.now());
                user.save(function (err) {
                    if (err) throw err;
                    console.log('user saved');
                    done(err, token, user);
                });
            });
        },
        function (token, user, done) {
            console.log('logging in to email');
            var transporter = nodemailer.createTransport('smtps://cogs120decaf@gmail.com:decafvestiarium@smtp.gmail.com');
            var sampleMail = {
                to: user.email,
                from: 'passwordreset@demo.com',
                subject: 'Vestiarium Password Reset',
                text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                'http://' + req.headers.host + '/reset/' + token + '\n\n' +
                'If you did not request this, please ignore this email and your password will remain unchanged.\n'
            };
            transporter.sendMail(sampleMail, function (err) {
                req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
                done(err, 'done');
            });
        }
    ], function (err) {
        if (err) return next(err);
        res.redirect('/');
    });
};

exports.resetPost = function (req, res) {
    async.waterfall([
        function (done) {
            User.findOne({
                resetPasswordToken: req.params.token,
                resetPasswordExpire: {$gt: Date.now()}
            }, function (err, user) {
                if (!user) {
                    req.flash('message','Password reset token is invalid or has expired.');
                    console.log('reset token not working or expired');
                    return res.redirect('/');
                }
                req.assert('confirm', 'Passwords must match').equals(req.body.password);
                var errors = req.validationErrors();
                if (!errors) {   //No errors were found.  Passed Validation!
                    user.password = bCrypt.hashSync(req.body.password, bCrypt.genSaltSync(10), null);
                    user.resetPasswordToken = undefined;
                    user.resetPasswordExpire = undefined;

                    user.save(function (err, user) {
                        if (err) throw err;
                        req.logIn(user, function (err) {
                            req.flash('message', 'Success, your password has been changed.');
                            console.log('password has been reset');
                            console.log(user.password);
                            done(err, user);
                        });
                    });

                }
                else {   //Display errors to user
                    req.flash('message', 'The two passwords must match');
                    res.redirect('/reset/'+ req.params.token);
                }
            });
        }], function (err) {
        res.redirect('/');
    });


};