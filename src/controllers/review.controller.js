const reviewModel = require('../models/review.model');
const mongoose = require('mongoose');

const create = async (req, res) => {

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

const getReview = async (req, res) => {

    try {
        let reviews = [];
        if (req.query.product_id){
            reviews = await reviewModel.find({ 'product_id': req.query.product_id });
        } else {
            const _id = mongoose.Types.ObjectId(req.query.user_id);
            reviews = await reviewModel.find({ 'user_id': _id });
        }
        res.status(200).json(reviews);  
    } catch (error) {
        res.status(500).send(error)
    }

}

module.exports = {
    create, getReview
}
