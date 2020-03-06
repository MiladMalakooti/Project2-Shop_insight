var express = require('express');
var router = express.Router();
const passport = require('passport');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Shop Insight', 
    user: req.user });
});

router.get('/', function (req, res) {
  res.render('index', { title: 'Shop Insight' });
})

router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);
router.get('/oauth2callback', passport.authenticate('google',
  {
    successRedirect: '/profile',// used to be user.
    failureRedirect: '/' // it could be directed to its own page where the login was not successful
  }
));

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
