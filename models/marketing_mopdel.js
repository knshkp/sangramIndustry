const mongoose = require('mongoose');

// Define the Schema for the Marketing Entry
const marketingSchema = new mongoose.Schema({
  staff_phone: {
    type: String,
    required: true,
  },
  customer_name: {
    type: String,
    required: true,
  },
  customer_phone: {
    type: String,
    required: true,
  },
  customer_address: {
    type: String,
    required: true,
  },
  category_name: {
    type: String,
    required: true,
  },
  shop_name: {
    type: String,
    required: true,
  },
  customer_city: {
    type: String,
    required: true,
  },
  customer_state: {
    type: String,
    required: true,
  },
  customer_pincode: {
    type: String,
    required: true,
  },
  customer_location: {
    type: String,
    required: true,
  },
  shop_photo: {
    type: String, // You can use a URL or a path for the photo, depending on how it's stored
    required: false,
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

// Create the model using the schema
const Marketing = mongoose.model('Marketing', marketingSchema);

// Export the model so it can be used in other parts of the application
module.exports = Marketing;
