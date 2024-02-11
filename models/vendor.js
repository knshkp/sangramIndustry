var mongoose = require('mongoose');

var vendorSchema = new mongoose.Schema({
  vendor_id: { 
    type: Number, 
    unique: true, 
    autoIncrement: {
      startAt: 1
    }
  },
  vendor_name: { 
    type: String
  },
  phone_number: { 
    type: Number,
    unique: true 
  },
  vendor_type: { 
    type: String 
  },
  user_id: {
    type: Number
  },
  father_name: {
    type: String
  }
},
{ timestamps: true });

module.exports = mongoose.model('vendor', vendorSchema);