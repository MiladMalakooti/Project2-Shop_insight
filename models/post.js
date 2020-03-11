var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const postSchema = new Schema({
  product: String,
  brand: String,
  barcode: String,
  url: String, // a youtube video
  description: String,
  avatar: String,
  likes: [],
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {
  timestamps: true
})


const commentSchema = new Schema({
  text: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
})

module.exports = mongoose.model('Post', postSchema);  