// var Users = require('../models/Profile');
var Posts = require('../models/post');

module.exports = {
    index
}

function index(req, res, next) {
    Posts.find({}).exec(function(err, post){
        if(err) res.redirect('/');
        post.forEach((i) => {
            //i.populate('user');
            i.populate('userId');
        })
        var user = req.user;
        res.render('feed', { title: 'Shop Insight' , post , user});
    })      
}
