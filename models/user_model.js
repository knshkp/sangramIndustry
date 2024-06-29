var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  dairy_name: { 
    type: String,
    required:true
  },
  father_name: { 
    type: String,
    required:true 
  },
  phone: { 
    type: String, 
    unique: true ,
    required:true
  },
  address: { 
    type: String,
    required:true, 
  },
  pan: { 
    type: String, 
    required:true
  },
  pincode: { 
    type: Number,
    required:true 
  },
  user_type: { 
    type: String
  },
  dairy_type:{
    type:String,
    required:true
  },
  customers: { 
    type: Array 
  },
  sub_customers: { 
    type: Array 
  }
});

module.exports = mongoose.model('Userd', userSchema);