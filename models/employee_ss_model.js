var mongoose = require('mongoose');

var EmployeeSSSchema = new mongoose.Schema({
  seller_phone: { 
    type: String,
    required: true
  },
  customer_phone: { 
    type: Number,
    unique:true
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
    type:Number
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
  }
},
{ timestamps: true });

module.exports = mongoose.model('employeess', EmployeeSSSchema);