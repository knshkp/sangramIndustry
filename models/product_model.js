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
    productImage:{
        type:String
    },
    is_dealerProducts:{
        type:Number,
        required:true
    },
    category_id:{
        type:String,
        required:true
    },
    product_count:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Product', productSchema);
