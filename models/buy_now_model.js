const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
    productArray: {
        type: Array,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("Buyentry", cartSchema);
