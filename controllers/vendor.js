const VendorServices = require('../services/vendor')

const addVendor=async(req, res)=> {
    try {
        const data = req.body;
        const vendor = await VendorServices.addVendor(data);
        return res.status(200).json({msg : 'Vendor Added Successfully', result : vendor});
    } catch (error) {
        console.error('Error in adding vendor:', error);
        return res.status(500).json({ message: 'Failed to add vendor' });
    }
}
const removeVendor = async (req, res) => {
    try {
        // Assuming the vendor ID is passed in the request parameters
        const vendorId = req.query.id;

        // Use VendorServices to remove the vendor by ID
        const removedVendor = await VendorServices.removeVendor(vendorId);

        if (removedVendor) {
            // If the vendor was removed successfully, send a success response
            return res.status(200).json({ msg: 'Vendor removed successfully', result: removedVendor });
        } else {
            // If no vendor was found to remove, send a not found response
            return res.status(404).json({ message: 'Vendor not found' });
        }
    } catch (error) {
        console.error('Error in removing vendor:', error);
        return res.status(500).json({ message: 'Failed to remove vendor' });
    }
};
const loginVendor=async(req,res)=>{
    try{
        const phone=req.body.phone
        const vendor=await VendorServices.loginVendor(phone)
        if(vendor){
            return res.status(200).json({msg : 'Vendors Details', result : vendor});
        }
        else{
            return res.status(401).send("Vendor Detail not found")
        }
    }
    catch(error){
        console.error('Error in getting vendor:', error);
        return res.status(500).json({ message: 'Failed to login vendors ' });


    }
}


const getVendorDetails=async(req, res)=> {
    try {
        const userId = req.query.phone;
        const getVendorDetails = await VendorServices.getVendorDetails(userId);
        return res.status(200).json({msg : 'All Vendors Details Shown Successfully', result : getVendorDetails});
    } catch (error) {
        console.error('Error in getting vendor:', error);
        return res.status(500).json({ message: 'Failed to get vendors details' });
    }
}

module.exports={
    addVendor, getVendorDetails,removeVendor,loginVendor
}