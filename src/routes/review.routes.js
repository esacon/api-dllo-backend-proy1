const express = require('express');
const router = express.Router();

const Review = require('../controllers/review.controller');

router.get('/', Review.fetchReviews);
router.post('/', Review.postReview);

module.exports = router;