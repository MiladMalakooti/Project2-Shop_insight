var express = require('express');
var router = express.Router();
var feedCtrl = require('../controllers/feed')

router.get('/', isLoggedIn, feedCtrl.index);
router.post('/', isLoggedIn, feedCtrl.create);
router.delete('/:id', isLoggedIn, feedCtrl.delete);
router.put('/:id', isLoggedIn, feedCtrl.update);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) {
        return next();
    }
    else res.redirect('/auth/google');
}
  
module.exports = router;