const Profile = require('../models/profile');//
const Post = require('../models/post');//


module.exports = {
  show,
  // create
};

function show(req, res) {
  res.render('post', { title: 'Shop Insight', user: req.user })
}