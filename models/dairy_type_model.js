const mongoose = require("mongoose");
const DairyTypeSchema = mongoose.Schema({
    type:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model("dairyType",DairyTypeSchema)