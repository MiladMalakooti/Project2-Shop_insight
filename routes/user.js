var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user');

router.get('/', isLoggedIn, userCtrl.show)
// router.get('/:username', isLoggedIn, profileCtrl.show);
// router.post('/:id', isLoggedIn, profileCtrl.addLike);
// router.post('/comments/:id', isLoggedIn, profileCtrl.addComment);
// router.delete('/:i_id/comments/:c_id', profileCtrl.deleteComment);
// router.delete('/post/:i_id', profileCtrl.deletePost)

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}
  
module.exports = router;