const express = require('express');
const router = express.Router();

const Cart = require('../controllers/cart.controller');

router.get('/', Cart.fetchCart);
router.post('/', Cart.addToCart);
router.post('/buy', Cart.buyCart);
router.delete('/', Cart.removeFromCart);

module.exports = router;