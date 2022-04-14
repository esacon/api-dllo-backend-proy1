const reviewModel = require('../models/review.model');

const postReview = async (req, res) => {
    let { user_id, product_id, description, rating } = req.body;
    
    if (parseFloat(rating) > 5) {
        rating = 5.0;
    } else if (parseFloat(rating) < 0) {
        rating = 0.0;
    }

    const review = new reviewModel({ user_id, product_id, description, rating });

    try {
        await review.save();
        res.status(200).send(review);
    } catch (error) {
        res.status(500).send(error);
    }
}

const fetchReviews = async (req, res) => {
    try {
        let reviews = [];
        if (req.query.product_id){
            reviews = await reviewModel.find({ 'product_id': req.query.product_id });
        } else {
            reviews = await reviewModel.find({ 'user_id': req.query.user_id });
        }
        res.status(200).send(reviews);  
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    postReview, fetchReviews
}
