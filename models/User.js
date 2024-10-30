const mongoose = require('mongoose');
const validator = require('validator');

// Định nghĩa userSchema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please enter a valid email address']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long']
  }
});

// Tạo model User
const User = mongoose.model('User', userSchema);

module.exports = User;