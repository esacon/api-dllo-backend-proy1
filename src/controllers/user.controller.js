const userModel = require('../models/user.model');
const crypt = require('../config/encrypting');
const mongoose = require('mongoose');

const create = async (req, res) => {

    let { display_name, username, password, confirm_password } = req.body;

    if (password !== confirm_password) {
        res.status(500).send('Las contraseñas no coinciden.');
    }

    password = crypt.cryptPassword(password);

    const user = new userModel({
        display_name: display_name,
        username: username,
        password: password
    });

    try {
        await user.save();
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }

}

const login = async (req, res) => {
    const { username, password } = req.body;

    const usr = await userModel.findOne({ 'username': username });

    try {
        if (crypt.comparePassword(password, usr.password)) {
            res.status(200).json(usr);    
        } else {
            res.status(500).send('User not found.');
        }       
    } catch (error) {
        res.status(500).send(error);
    }
}

const prev_login = async (req, res) => {
    const { user_id } = req.body;

    const usr = await userModel.findOne({ '_id': user_id });

    res.status(200).json(usr);
}

const getUser = async (req, res) => {

    try {
        const _id = mongoose.Types.ObjectId(req.query.user_id);
        const usr = await userModel.findOne({ '_id': _id });
        res.status(200).json(usr);      
    } catch (error) {
        res.status(500).send(error);
    }

}

module.exports = {
    create, login, prev_login, getUser
}
