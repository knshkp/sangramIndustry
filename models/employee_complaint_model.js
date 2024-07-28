var mongoose = require('mongoose');

var employeeComplaintSchema = new mongoose.Schema({
  customer_name: { 
    type: String,
    required: true
  },
  customer_phone: { 
    type: String,
    required: true
  },
  customer_address: {
    type: String,
    required:true
  },
  pending_staff_name: {
    type: String
  },
  pending_staff_phone:{
    type:String
  },
  pending_staff_date:{
    type:String
  },
  pending_staff_time:{
    type:String
  },
  accept_staff_name:{
    type:String
  },
  accept_staff_phone:{
    type:String
  },
  pending_staff_date:{
    type:String
  },
  accept_staff_time:{
    type:String
  },
  completed_staff_date:{
    type:String
  },
  completed_staff_time:{
    type:String
  },
  completed_staff_name:{
    type:String
  },
  completed_staff_phone:{
    type:String
  },
  description:{
    type:String
  },
  status:{
    type:String
  }
},
{ timestamps: true });

module.exports = mongoose.model('employee_complaint', employeeComplaintSchema);