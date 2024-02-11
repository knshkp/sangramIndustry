const Vendor = require('../models/vendor');

const addVendor=async(data)=> {
    const addVendor = await Vendor.findOne({ phone_number : data.phone_number }); 
    if (!addVendor) {
        const newVendorDetails = new Vendor({
            vendor_name : data.vendor_name,
            phone_number : data.phone_number,
            vendor_type : data.vendor_type,
            father_name : data.father_name,
            user_id : data.user_id
        }); await newVendorDetails.save();
        return newVendorDetails
    } else {
      return addVendor
    }
}

const getVendorDetails=async(userId)=> {
    const vendorData = await Vendor.find({ user_id : userId });
    return vendorData
}

module.exports={
    addVendor, getVendorDetails
}