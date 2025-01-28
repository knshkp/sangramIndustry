const VendorServices = require('../services/employee')

const addEmployee=async(req, res)=> {
    try {
        const data = req.body;
        console.log(data)
        const vendor = await VendorServices.addEmployee(data);
        return res.status(200).json({msg : 'Vendor Added Successfully', result : vendor});
    } catch (error) {
        console.error('Error in adding vendor:', error);
        return res.status(500).json({ message: 'Failed to add vendor' });
    }
}
const editEmployee=async(req, res)=> {
    try {
        const data = req.body;
        console.log(data)
        const vendor = await VendorServices.editEmployee(data);
        return res.status(200).json({msg : 'Vendor Edited Successfully', result : vendor});
    } catch (error) {
        console.error('Error in editing vendor:', error);
        return res.status(500).json({ message: 'Failed to Edit vendor' });
    }
}
const removeEmployee = async (req, res) => {
    try {
        const vendorId = req.query.id;
        const removedVendor = await VendorServices.removeEmployee(vendorId);

        if (removedVendor) {
            return res.status(200).json({ msg: 'Vendor removed successfully', result: removedVendor });
        } else {
            return res.status(404).json({ message: 'Vendor not found' });
        }
    } catch (error) {
        console.error('Error in removing vendor:', error);
        return res.status(500).json({ message: 'Failed to remove vendor' });
    }
};
const loginEmployee=async(req,res)=>{
    try{
        const phone=req.body.phone
        const vendor=await VendorServices.loginEmployee(phone)
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


const getEmployeeDetails=async(req, res)=> {
    try {
        const userId = req.query.phone;
        const getVendorDetails = await VendorServices.getEmployeeDetails(userId);
        return res.status(200).json({msg : 'All Vendors Details Shown Successfully', result : getVendorDetails});
    } catch (error) {
        console.error('Error in getting vendor:', error);
        return res.status(500).json({ message: 'Failed to get vendors details' });
    }
}

module.exports={
    addEmployee, getEmployeeDetails,removeEmployee,loginEmployee,editEmployee
}