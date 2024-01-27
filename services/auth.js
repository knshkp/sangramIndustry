const User = require('../models/user');

const userLogin=async(userData)=> {
    const user = await User.findOne({ mobile_number : userData.phone });  
    if (!user) {
        const newDetails = new User({
            name : userData.name,
            dairy_name : userData.dairy_name,
            father_name : userData.father_name,
            phone : userData.phone,
            address : userData.address,
            pan : userData.pan,
            pincode : userData.pincode
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
module.exports={
    userLogin
}