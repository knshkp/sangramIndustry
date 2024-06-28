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
  },
  address:{
    type:String
  },
  city:{
    type:String
  },
  state:{
    type:String
  },
  pincode:{
    type:String
  },
  upi:{
    type:String
  }
},
{ timestamps: true });

module.exports = mongoose.model('vendord', vendorSchema);