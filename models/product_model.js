var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    dealer_price:{
        type:Number
    },
    discount: {
        type: Number,
        required: true
    },
    category_id: {
        type: String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    is_dealerProducts:{
        type:Number,
        required:true
    },
    product_count:{
        type:Number,
        required:true
    },
    product_image:{
        type:String,
        required:true
    }
},
{ timestamps: true });

module.exports = mongoose.model('Product', productSchema);
