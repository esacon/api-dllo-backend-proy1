const express = require('express');
const router = express.Router();

const Post = require('../controllers/post.controller');

router.get('/', Post.fetchPost);
router.get('/recent', Post.fetchRecentPosts);
router.post('/', Post.createPost);

module.exports = router;