const User = require('../models/User')

// Signup
const signupGet = (req, res) => {
  res.render("signup");
};
const signupPost = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Tạo user mới
    const newUser = new User({ email, password });

    // Lưu user vào database
    await newUser.save();

    res.status(201).send('User registered successfully');
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(400).send(error.message);
  }
};

module.exports = {
  signupGet,
  signupPost,
};