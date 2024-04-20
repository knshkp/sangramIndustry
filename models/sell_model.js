const mongoose = require("mongoose");
const SellSchema = mongoose.Schema({
    phone:{
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
        default: () => new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }) // Convert to IST
    },
    milk_type:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    shift:{
        type:Number,
        required:true
    }
});
module.exports=mongoose.model("sell",SellSchema)