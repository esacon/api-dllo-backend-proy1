const express = require('express');
const router = express.Router();

const Review = require('../controllers/review.controller');

router.get('/', Review.getReview);
router.post('/', Review.create);

module.exports = router;