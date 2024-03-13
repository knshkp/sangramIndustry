const mongoose = require("mongoose");
const BuySchema = mongoose.Schema({
    phone:{
        type:String,
        required:true
    },
    customer_id:{
        type:String,
        required:true
    },
    customer_name:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now
    },
    milk_type:{
        type:String
    },
    shift:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
});
module.exports=mongoose.model("buy",BuySchema)