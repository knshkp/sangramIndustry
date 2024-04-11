var mongoose = require('mongoose');

var vendorSchema = new mongoose.Schema({
  vendor_name: { 
    type: String
  },
  phone_number: { 
    type: Number
  },
  vendor_type: { 
    type: String 
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