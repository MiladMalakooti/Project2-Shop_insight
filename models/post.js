var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    url: String, // a youtube video
    user: String,
    description: String,
    pId: String,
    avatar: String,
    likes: [],
    userId: {
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

module.exports = mongoose.model('Post', postSchema);  