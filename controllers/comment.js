const Post = require('../models/post');

module.exports = {
  create,
  delete: deleteComment
};

function create(req, res) {
  Post.findById(req.params.id, function (err, post) {
    if (err) return res.redirect('./');
    req.body.userId = req.user._id
    req.body.userName = req.user.name;
    console.log(req.body);
    post.comments.push(req.body);
    post.save(function (err) {
      res.redirect(`back`);
    });
  });
}

function deleteComment(req, res) {
  Repostport.findById(req.params.rid, function (err, foundPost) {
    if (err) return res.redirect('./');
    foundPost.comments.remove(req.params.cid);
    foundPost.save(function (err) {
      res.redirect(`back`);
    });
  })
}