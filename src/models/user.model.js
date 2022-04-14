const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  display_name: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    match: /(?=.*[a-zA-Z])(?=.*[0-9]+).*/,
    minlength: 8
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;