var express = require('express');
var router = express.Router();
var postCtrl = require('../controllers/posts');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

router.get('/', postCtrl.index);

router.get('/new', postCtrl.new );
router.post('/:id', postCtrl.update);
router.delete('/:id', postCtrl.delete);


router.post('/', postCtrl.create );


module.exports = router;