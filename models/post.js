var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const postSchema = new Schema({
    product: String,
    brand: String,
    barcode: String,
    url: [String], // a youtube video
    user: String,
    description: String,
    pId: String,
    avatar: String,
    likes: [],
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    userPosting: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },

    adrs: String,
    comments: [{
        user: String,
        comment: String
    }]
},{
    timestamps: true
})


const commentSchema = new Schema({
    text: String,
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    userName: String
  })

module.exports = mongoose.model('Post', postSchema);  