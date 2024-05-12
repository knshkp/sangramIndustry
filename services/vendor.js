const Vendor = require('../models/vendor');

const addVendor = async (data) => {
    try {
        // Check if a vendor with the same user_id already exists under the given seller_phone
        const existingVendor = await Vendor.findOne({
            user_id: data.user_id,
            seller_phone: data.seller_phone
        });
        
        // If a vendor with the same user_id and seller_phone already exists, throw an error
        if (existingVendor) {
            throw new Error(`A vendor with user_id ${data.user_id} already exists under phone number ${data.seller_phone}.`);
        }

        // Create a new vendor using the provided data
        const newVendorDetails = new Vendor({
            vendor_name: data.vendor_name,
            phone_number: data.phone_number,
            vendor_type: data.vendor_type,
            father_name: data.father_name,
            user_id: data.user_id,
            seller_phone: data.seller_phone,
        });
        
        // Save the new vendor to the database
        await newVendorDetails.save();

        // Return the saved vendor details
        return newVendorDetails;
    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error adding vendor:', error);
        throw error; // Re-throw the error to be handled by the caller
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
        // Find the vendor by ID and remove it
        const removedVendor = await Vendor.findByIdAndDelete(vendorId);
        
        // Check if a vendor was found and removed
        if (!removedVendor) {
            // If no vendor was found with the provided ID, throw an error
            throw new Error(`Vendor with ID ${vendorId} not found`);
        }

        // Return the removed vendor details
        return removedVendor;
    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error removing vendor:', error);
        throw error; // You can throw the error to be handled by the caller
    }
};




const getVendorDetails=async(userId)=> {
    const vendorData = await Vendor.find({ seller_phone : userId });
    return vendorData
}

module.exports={
    addVendor, getVendorDetails,removeVendor,loginVendor
}