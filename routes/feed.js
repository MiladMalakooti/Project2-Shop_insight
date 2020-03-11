var express = require('express');
var router = express.Router();
var feedCtrl = require('../controllers/feed')

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) {
        return next();
    }
    else res.redirect('/auth/google');
}
  
function show(req, res) {
    res.render('posts/feed', { title: 'Shop Insight', user: req.user })
  }
module.exports = router;