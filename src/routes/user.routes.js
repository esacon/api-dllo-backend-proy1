const express = require('express');
const router = express.Router();

const User = require('../controllers/user.controller');

router.get('/', User.getUser);
router.post('/login', User.login);
router.post('/register', User.create);
router.post('/prev-login', User.prev_login);

module.exports = router;