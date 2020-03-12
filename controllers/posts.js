const Post = require('../models/post');
module.exports = {
	index,
	new: newPost,
	create,
	show,
	update,
	delete: deletePost
};
 
function update(req, res) {
	Post.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
			if (err) return res.redirect('/posts');
			res.redirect('/posts')
	});
}

function index(req, res) {
	Post.find({}, function (err, posts) {
		console.log("Here")
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

function deletePost(req, res) {
	Post.findByIdAndDelete(req.params.id, req.body, (err, post) => {
			if (err) return res.redirect('./post');
			res.redirect('./post')
			console.log("hit delete")
	})
}


