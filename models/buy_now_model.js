const mongoose=require("mongoose")
const cartSchema=mongoose.Schema({
    customer_phone:{
        type:Number,
        required:true
    },
    product_name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    }

});
module.exports=mongoose.model("BuyProduct",cartSchema);