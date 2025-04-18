const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String // 'mentor' or 'mentee'
});

module.exports = mongoose.model('User', userSchema);
