var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user');

router.get('/', isLoggedIn, userCtrl.show)


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}
  
module.exports = router;