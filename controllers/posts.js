const Post = require('../models/post');
module.exports = {
	index,
	new: newPost,
	create,
	show

};
function index(req, res) {
	Post.find({}, function (err, posts) {
		if (err) return next(err);
		res.render('posts/feed', {
			posts,
			user: req.user,
			title: 'Shop Insight'
		});
		// console.log(req.user.id, post.owner)
	});
}


function create(req, res) {
	console.log(req.user)
	req.body.owner = req.user._id;
	console.log(req.body)
	const post = new Post(req.body);
	post.save(function (err) {
		if (err) return res.render('posts/new');
		console.log(post._id);
		res.redirect('/posts');
	});

}

function newPost(req, res, next) {
	res.render('posts/new');
}

function show(req, res) {
	res.render('post', { title: 'Shop Insight', user: req.user })
}