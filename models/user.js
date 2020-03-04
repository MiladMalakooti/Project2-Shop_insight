var mongoose = require('mongoose');

var aboutSchema = new mongoose.Schema({
    text: String
}, {
    timeStamps: true
});

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    picture: String,
    about: [aboutSchema],
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema)