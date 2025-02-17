// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  profileImage: { type: String },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  reclamations: [{ title: String, status: String }] // Adjust as needed
});

const User = mongoose.model('User', userSchema);
module.exports = User;