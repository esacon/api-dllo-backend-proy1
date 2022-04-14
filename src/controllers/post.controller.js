const postModel = require('../models/post.model');

const createPost = async (req, res) => {
    const post = new postModel(req.body);

    try {
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).send(error);
    }
}

const fetchPost = async (req, res) => {
    try {
        let posts = [];
        if (req.query.post_id){
            posts = await postModel.findOne({ '_id': req.query.post_id });
        } else {
            posts = await postModel.find({ 'owner_id': req.query.user_id });
        }
        res.status(200).send(posts);   
    } catch (error) {
        res.status(500).send(error)
    }
}

const fetchRecentPosts = async (req, res) => {    
    try {
        const posts = await postModel.find({}).sort({created_date: 'desc'});
        res.status(200).json(posts);      
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    createPost, fetchPost, fetchRecentPosts
}
