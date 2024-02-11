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

const getVendorDetails=async(req, res)=> {
    try {
        const userId = req.params.user_id;
        const getVendorDetails = await VendorServices.getVendorDetails(userId);
        return res.status(200).json({msg : 'All Vendors Details Shown Successfully', result : getVendorDetails});
    } catch (error) {
        console.error('Error in getting vendor:', error);
        return res.status(500).json({ message: 'Failed to get vendors details' });
    }
}

module.exports={
    addVendor, getVendorDetails
}