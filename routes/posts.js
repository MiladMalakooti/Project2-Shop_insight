var express = require('express');
var router = express.Router();
var postCtrl = require('../controllers/posts');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

router.get('/', postCtrl.index);

router.get('/new', postCtrl.new );


router.post('/', postCtrl.create );


/// to be deleted:
// router.get('/', isLoggedIn, postCtrl.show);
// router.get('/post', isLoggedIn, postCtrl.index);
// router.post('/:id', isLoggedIn, postCtrl.create);
// router.delete('/:id', isLoggedIn, postCtrl.delete);
// router.put('/:id', isLoggedIn, postCtrl.update);

module.exports = router;