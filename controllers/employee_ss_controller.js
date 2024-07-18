const VendorServices = require('../services/employee_ss_services')

const addEmployee=async(req, res)=> {
    try {
        const data = req.body;
        const vendor = await VendorServices.addEmployee(data);
        return res.status(200).json({msg : 'Service Added Successfully', result : vendor});
    } catch (error) {
        console.error('Error in adding service:', error);
        return res.status(500).json({ message: 'Failed to add service' });
    }
}

const getEmployeeServiceDetails=async(req, res)=> {
    try {
        const userId = req.query.phone;
        const getVendorDetails = await VendorServices.getEmployeeServiceDetails(userId);
        return res.status(200).json({msg : 'All Employee Service Shown Successfully', result : getVendorDetails});
    } catch (error) {
        console.error('Error in getting Services:', error);
        return res.status(500).json({ message: 'Failed to get services details' });
    }
}

module.exports={
    addEmployee, getEmployeeServiceDetails
}