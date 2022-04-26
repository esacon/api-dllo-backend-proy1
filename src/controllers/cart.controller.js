const cartModel = require('../models/cart.model');
const historyModel = require('../models/history.model');

const addToCart = async (req, res) => {
    const cart = new cartModel(req.body);

    try {
        await cart.save();
        res.status(200).send(cart);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

const fetchCart = async (req, res) => {    
    try {
        res.status(200).send(await cartModel.find({ 'user_id': req.query.user_id }));      
    } catch (error) {
        res.status(500).send(error);
    }
}

const removeFromCart = async (req, res) => {
    try {
        res.status(200).send(await cartModel.findByIdAndDelete(req.query.item_id));      
    } catch (error) {
        res.status(500).send("Product ID not found.");
    }
}

const buyCart = async (req, res) => {    
    try {
        const cart = await cartModel.find({ 'user_id': req.body.user_id });
        cart.map(async item => {
            const history = new historyModel({cart_id: item._id, user_id: item.user_id, product_id: item.product_id});
            await history.save();
            await cartModel.findByIdAndDelete(item._id);
        });
        res.status(200).send(cart);        
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    addToCart, fetchCart, removeFromCart, buyCart
}
