var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const profileSchema = new Schema({
    userName: String,
    email: String,
    googleId: String,
    email: String,
    pic: String,
    about: String,
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Posts'
      }]
},{
    timestamps: true
})

module.exports = mongoose.model('Profile', profileSchema);