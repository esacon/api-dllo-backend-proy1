const express = require('express');
const router = express.Router();

const Post = require('../controllers/post.controller');

router.get('/', Post.getPost);
router.get('/recent', Post.getRecent);
router.post('/', Post.create);

module.exports = router;