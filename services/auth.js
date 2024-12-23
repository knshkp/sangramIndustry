const User = require('../models/user_model');

const userLogin=async(userData)=> {
    const user = await User.findOne({ phone : userData.phone });  
    if (!user) {
        const newDetails = new User({
            name : userData.name,
            dairy_name : userData.dairy_name,
            father_name : userData.father_name,
            phone : userData.phone,
            address : userData.address,
            pan : userData.pan,
            pincode : userData.pincode,
            dairy_type:userData.dairy_type
        }); await newDetails.save();
        return newDetails
    } else {
      return user
    }
}

// export async function userSignUp(userData) {
//     const userDetails = new User({
//         name : userData.name,
//         dairy_name : userData.dairy_name,
//         father_name : userData.father_name,
//         mobile_number : userData.mobile_number,
//         address : userData.address,
//         pan : userData.pan,
//         pincode : userData.pincode
//     }); await userDetails.save();
//     return userDetails
// }
const getAllUser=async()=>{
    const user = await User.find({});
    return user;

}
module.exports={
    userLogin,
    getAllUser
}