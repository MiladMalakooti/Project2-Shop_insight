var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var profileSchema = new Schema({
    userName: String,
    email: String,
    googleId: String,
    email: String,
    pic: String,
    about: String,
},{
    timestamps: true
})

module.exports = mongoose.model('Profile', profileSchema);