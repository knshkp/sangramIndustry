var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  dairy_name: { 
    type: String 
  },
  father_name: { 
    type: String 
  },
  phone: { 
    type: String, 
    unique: true 
  },
  address: { 
    type: String 
  },
  pan: { 
    type: String 
  },
  pincode: { 
    type: Number 
  },
  user_type: { 
    type: String 
  },
  customers: { 
    type: Array 
  },
  sub_customers: { 
    type: Array 
  }
});

module.exports = mongoose.model('Userd', userSchema);