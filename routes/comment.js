const express = require('express')
var router = express.Router();
const commentsCtrl = require('../controllers/comment');

router.post('/post/:id/comments', commentCtrl.create);
router.delete('/:rid/comments/:cid', commentCtrl.delete);

module.exports = router;