var mongoose = require('mongoose');
var Schema = mongoose.Schema;

feedSchema = new Schema({
  product: String,
  url: String, // a youtube video
  user: String,
  description: String,
  pId: String,
  avatar: String,
  likes: [],
  userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
  }
})

module.exports = mongoose.model('Feed', feedSchema);