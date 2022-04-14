const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    product_id: {
        type: String,
        required: true,
        unique: true
    }
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;