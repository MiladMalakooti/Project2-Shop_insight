var express = require('express');
var router = express.Router();
var postCtrl = require('../controllers/post');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

// router.get('/', isLoggedIn, postCtrl.show);
router.get('/', isLoggedIn, postCtrl.index);
router.post('/', isLoggedIn, postCtrl.create);
router.delete('/:id', isLoggedIn, postCtrl.delete);
router.put('/:id', isLoggedIn, postCtrl.update);








module.exports = router;

/* 
router.get('/', reportsCtrl.index);
router.post('/', reportsCtrl.create);
router.delete('/:id', reportsCtrl.delete);
router.put('/:id', reportsCtrl.update);
*/