var mongoose = require('mongoose');

var EmployeeSSSchema = new mongoose.Schema({
  seller_phone: { 
    type: Number,
    required: true
  },
  customer_phone: { 
    type: Number,
    required:true
  },
  shop_name:{
    type:String
  },
  customer_city:{
    type:String
  },
  customer_state:{
    type:String
  },
  customer_pincode:{
    type:String
  },
  
  customer_name: { 
    type: String,
    required: true
  },
  customer_address: {
    type: String
  },
  category_name: {
    type: String
  },
  product_name:{
    type:String
  },
  product_price:{
    type:String
  },
  discount:{
    type:String
  },
  final_price:{
    type:String
  },
  payment_method:{
    type:String
  },
  service_type:{
    type:String
  },
  customer_latitude:{
    type:Number
  },
  customer_longitude:{
    type:Number
  },
  shop_photo:{
    type:String
  }
},
{ timestamps: true });

module.exports = mongoose.model('employeess', EmployeeSSSchema);