var express = require('express');
var router = express.Router();
const passport = require('passport');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/', function(req, res) {
//   res.redirect('/users');
// });

router.get('/auth/google', passport.authenticate(
  'google',
  {scope: ['profile', 'email']}
));
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/users',
    failureRedirect: '/users' // it could be directed to its own page where the login was not successful
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/index'); // originally it was '/users' but after login it makes sense to go the main page
});

module.exports = router;
