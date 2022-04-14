const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    cart_id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    product_id: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

const History = mongoose.model('History', historySchema);
module.exports = History;