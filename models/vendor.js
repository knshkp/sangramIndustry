var mongoose = require('mongoose');

var vendorSchema = new mongoose.Schema({
  vendor_name: { 
    type: String,
    required: true
  },
  phone_number: { 
    type: Number,
    unique: true,
    required: true
  },
  vendor_type: { 
    type: String,
    required: true
  },
  user_id: {
    type: Number
  },
  father_name: {
    type: String,
    required: true
  }
},
{ timestamps: true });

module.exports = mongoose.model('vendord', vendorSchema);