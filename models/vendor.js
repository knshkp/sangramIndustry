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
  },
  type:{
    type:String
  },
  type_rate:{
    type:String
  }
},
{ timestamps: true });

module.exports = mongoose.model('vendord', vendorSchema);