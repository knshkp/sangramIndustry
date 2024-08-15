var mongoose = require('mongoose');

var ExpenseSchema = new mongoose.Schema({
  seller_phone: { 
    type: Number,
    required: true
  },
  expense_type: { 
    type: String,
    required:true
  },
  mode_payment: { 
    type: String,
    required: true
  },
  amount: {
    type: String
  },
  photo: {
    type: String
  },
},
{ timestamps: true });

module.exports = mongoose.model('expenses', ExpenseSchema);