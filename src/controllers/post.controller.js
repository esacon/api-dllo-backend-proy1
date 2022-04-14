const postModel = require('../models/post.model');
const mongoose = require('mongoose');

const create = async (req, res) => {

    const post = new postModel(req.body);

    try {
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).send(error);
    }

}

const update = async (req, res) => {
    const hash = crypt.cryptPassword('hola mundo');
    console.log(hash)
    res.status(200).json({});
}

const getPostByOwner = async (req, res) => {
    

}

const getPost = async (req, res) => {
    try {
        let posts = [];
        if (req.query.post_id){
            posts = await postModel.findOne({ '_id': req.query.post_id });
        } else {
            const _id = mongoose.Types.ObjectId(req.query.user_id);
            posts = await postModel.find({ 'owner_id': _id });
        }
        res.status(200).json(posts);   
    } catch (error) {
        res.status(500).send(error)
    }


}

const getRecent = async (req, res) => {
    
    try {
        const posts = await postModel.find({});
        res.status(200).json(posts);      
    } catch (error) {
        res.status(500).send(error)
    }

}

module.exports = {
    create, update, getPost, getRecent, getPostByOwner
}
