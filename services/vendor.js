const Vendor = require('../models/vendor');

const addVendor = async (data) => {
    try {
        const existingVendor = await Vendor.findOne({
            user_id: data.user_id,
            seller_phone: data.seller_phone
        });
        if (existingVendor) {
            throw new Error(`A vendor with user_id ${data.user_id} already exists under phone number ${data.seller_phone}.`);
        }
        const newVendorDetails = new Vendor({
            vendor_name: data?.vendor_name,
            phone_number: data?.phone_number,
            vendor_type: data?.vendor_type,
            father_name: data?.father_name,
            user_id: data?.user_id,
            seller_phone: data?.seller_phone,
            address: data?.address,
            city: data?.city,
            state: data?.state,
            pincode: data?.pincode,
            upi:data?.upi,
            type:data?.type!==undefined?data.type:1,
            type_rate:data.type_rate
        });
        await newVendorDetails.save();
        return newVendorDetails;
    } catch (error) {
        console.error('Error adding vendor:', error);
        throw error;
    }
};
const updateVendorByPhone = async (phoneNumber, seller_phone, updatedData) => {
    try {
        const vendor = await Vendor.findOne({ phone_number: phoneNumber, seller_phone: seller_phone });

        if (!vendor) {
            throw new Error(`Vendor with phone number ${phoneNumber} not found.`);
        }

        // Update the vendor's details with the new data
        Object.assign(vendor, updatedData);

        await vendor.save();
        return vendor;
    } catch (error) {
        console.error('Error updating vendor:', error);
        throw error;
    }
};



const loginVendor=async(phone)=>{
    const vendorDetials=await Vendor.find({phone_number:phone})
    if (!vendorDetials){
        throw new Error(`Vendor with Phone ${phone} not found`);
    }
    return vendorDetials
}

const removeVendor = async (vendorId) => {
    try {
        const removedVendor = await Vendor.findByIdAndDelete(vendorId);
        if (!removedVendor) {
            throw new Error(`Vendor with ID ${vendorId} not found`);
        }
        return removedVendor;
    } catch (error) {
        console.error('Error removing vendor:', error);
        throw error;
    }
};




const getVendorDetails=async(userId)=> {
    const vendorData = await Vendor.find({ seller_phone : userId });
    return vendorData
}

module.exports={
    addVendor, getVendorDetails,removeVendor,loginVendor,updateVendorByPhone
}