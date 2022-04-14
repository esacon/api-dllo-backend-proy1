const express = require('express');
const router = express.Router();

const History = require('../controllers/history.controller');

router.get('/:user_id', History.fetchHistory);

module.exports = router;