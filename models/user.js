var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  user_id: { 
    type: Number, 
    unique: true, 
    autoIncrement: true
  },
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
  }
},
{ timestamps: true });

module.exports = mongoose.model('User', userSchema);