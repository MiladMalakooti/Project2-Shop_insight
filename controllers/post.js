const Post = require('../models/post');//
const Profile = require('../model/profile');//


module.exports = {
  show,
  // create
};

function show(req, res, next) {
  res.render('post', { title: 'Shop Insight', user: req.user })
}

const reviewSchema = new Schema({
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5}
}, {
  timestamps: true
});