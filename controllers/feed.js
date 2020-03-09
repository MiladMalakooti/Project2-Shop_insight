// var Users = require('../models/Profile');
var Posts = require('../models/post');


module.exports = {
	index,
	create,
	delete: deleteOne,
	update
};

function index(req, res, next) {
	Posts.find({}).exec(function(err, post) {
		if (err) res.redirect('/');
		post.forEach((i) => {
			i.populate('userId');
		})
		var user = req.user;
		res.render('feed', {
			title: 'Shop Insight',
			post,
			user
		});
	})
}

function create(req, res) {
	req.body.userPosting = req.user._id;
	const post = new Post(req.body);
	User.findById(req.user._id, function(err, currUser) {
		if (err) return res.redirect('./');
		currUser.posts.push(post);
		currUser.save();
		post.save(function(err) {
			res.redirect('/feed');
		});
	});
}
  
function deleteOne(req, res) {
	Post.findByIdAndRemove(req.params.id, function(err, post) {
		if (err) return res.redirect('./');
		res.redirect('/feed');
	});
}
  
function update(req, res) {
	Post.findByIdAndUpdate(req.params.id, req.body, {
		new: true
	}, function(err, post) {
		if (err) return res.redirect('./');
		console.log(post);
		res.redirect('/feed');
	});
}