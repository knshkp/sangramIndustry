const mongoose = require("mongoose");
const BannerSchema = mongoose.Schema({
    banner:{
        type:Number,
        required:true
    },bannerImage:{
        type:String,
        required:true
    }
},
{ timestamps: true });
module.exports=mongoose.model("banner",BannerSchema)
