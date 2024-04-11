var mongoose = require('mongoose');

var vendorSchema = new mongoose.Schema({
  vendor_name: { 
    type: String,
    required: true
  },
  phone_number: { 
    type: Number,
    unique:true
  },
  vendor_type: { 
    type: String,
    required: true
  },
  user_id: {
    type: Number
  },
  father_name: {
    type: String
  },
  seller_phone:{
    type:Number
  }
},
{ timestamps: true });

module.exports = mongoose.model('vendord', vendorSchema);