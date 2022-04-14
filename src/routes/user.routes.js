const express = require('express');
const router = express.Router();

const User = require('../controllers/user.controller');

router.get('/', User.fetchUser);
router.post('/login', User.doLogin);
router.post('/register', User.doRegister);
router.post('/prev-login', User.fetchPrevLogin);

module.exports = router;