const mongoose = require("mongoose");
const CategorySchema = mongoose.Schema({
    category:{
        type:String,
        required:true
    },categoryImage:{
        type:String,
        required:true
    },bannerImage:{
        type:String,
        required:true
    }
},
{ timestamps: true });
module.exports=mongoose.model("category",CategorySchema)
