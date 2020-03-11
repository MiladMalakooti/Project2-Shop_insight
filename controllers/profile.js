var Posts = require('../models/post');
var Profile = require('../models/profile');

//funcs:
function show(req, res) {
  req.user.populate('photos', function (err, user) {
      res.render('profile', { user: req.user, title: 'Shop Insight' });
  })
}

function create(req, res) {
  req.body.userReporting = req.user._id;
  const post = new Post(req.body);
  User.findById(req.user._id, function (err, currUser) {
    if (err) return res.redirect('./');
    currUser.reports.push(post);
    currUser.save();
    report.save(function (err) {
      res.redirect('/post');
    });
  });
}

function addLike(req, res, next) {
  Posts.findById(req.params.id, function (err, post) {
      Users.findOne({ googleId: post.pId }, function (err, user) {
          if(post.likes.includes(req.user.email)){
              for( var i = 0; i < post.likes.length; i++){ 
                  if ( post.likes[i] === req.user.email) {
                    post.likes.splice(i, 1); 
                  }
               }
                post.save();
                res.redirect(`back`);
          }else {
              post.likes.push( req.user.email );
              post.save();
              user.save(function () {
                  res.redirect(`back`);
              });
          }
      });
  });
}

function addComment(req, res) {
  Posts.findById(req.params.id, function (err, post){
      Users.findOne({googleId: post.pId}, function(err, user){
          post.comments.push({
            comment: req.body.comment,
            user: req.user.userName });
            post.save();
            user.save(function(){
              res.redirect(`back`);
          })
      })
  })
}

function deleteComment(req, res){
  Posts.findById(req.params.i_id, function(err, post){
    post.comments.id(req.params.c_id).remove();
    post.save().then(function(){
      res.json({success: true});
    }).catch(err => {res.status.json({ err: err }); 
  });
})}

function deletePost(req, res){
  Posts.findById(req.params.i_id, function(err, post){
      post.remove();
      post.save(function(err){
        res.redirect(`/profile/${req.user.adrs}`);
      })
})}

module.exports = {
  show, //
  addLike,//
  addComment,//
  deleteComment,//
  deletePost, //
}