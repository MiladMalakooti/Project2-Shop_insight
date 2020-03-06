var express = require('express');
var router = express.Router();
var postCtrl = require('../controllers/post');




router.get('/', isLoggedIn, postCtrl.show);



function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;