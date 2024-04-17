const mongoose = require("mongoose");
const RateSchema = mongoose.Schema({
    phone:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    rate:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model("rate",RateSchema)