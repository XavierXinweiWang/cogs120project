/**
 * Created by XavierXinweiWang on 2016/11/1.
 */
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: { type: String, unique: true},
    password: {type: String},
    email: {type: String},
    resetPasswordToken: {type:String},
    resetPasswordExpire: {type : Date},
    id: String,
    access_token: String
});

module.exports = mongoose.model('User', userSchema);