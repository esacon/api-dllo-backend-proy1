const historyModel = require('../models/history.model');

const fetchHistory = async (req, res) => {    
    try {
        const history = await historyModel.find({ 'user_id': req.params.user_id });
        res.status(200).json(history);      
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    fetchHistory
}
