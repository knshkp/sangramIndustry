const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: { type: Number, unique: true, autoIncrement: true },
  name: { type: String, required: true },
  dairy_name: { type: String },
  father_name: { type: String },
  phone: { type: String, unique: true },
  address: { type: String },
  pan: { type: String },
  pincode: { type: Number }
});

module.exports = mongoose.model('User', userSchema);