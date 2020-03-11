const Post = require('../models/post');//
module.exports = {
	index,
	//create,
	new: newPost,
	show

};

function index(req, res) {
	Post.find({}, function(err, posts){
		if (err) return next(err);
		res.render('/posts/feed', {post,
			user: req.user,
			title: 'Shop Insight'});
	});
}

// function create(req, res) {
// 	const post = new Post(req.body);
// 	post.save(function(err) {
// 		if (err) return res.render('posts/new');
// 		console.log(post);
// 		res.redirect('/posts/new');
		
// 	});

// }

function newPost(req, res, next) {
	res.render('posts/new');
}

function show(req, res) {
  res.render('posts/feed', { title: 'Shop Insight', user: req.user })
}
