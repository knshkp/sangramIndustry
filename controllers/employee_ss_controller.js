const VendorServices = require('../services/employee_ss_services')
const EmployeeComplaint=require('../services/employee_complaint')

const addEmployee=async(req, res)=> {
    try {
        const data = req.body;
        const vendor = await VendorServices.addEmployeeService(data);
        return res.status(200).json({msg : 'Service Added Successfully', result : vendor});
    } catch (error) {
        console.error('Error in adding service:', error);
        return res.status(500).json({ message: 'Failed to add service' });
    }
}
const addEmployeeComplaint=async(req,res)=>{
    try{
        const data=req.body;
        const complain=await EmployeeComplaint.addEmployeeComplaint(data)
        return res.status(200).json({msg:'Complaint adde Successfully',result:complain})
    }
    catch(error){
        console.error('Error in adding Complaint', error);
        return res.status(500).json({ message: 'Failed to add complaint' });
    }
}
const getEmployeeCompalint=async(req,res)=>{
    try{
        const data=req.query
        const complain=await EmployeeComplaint.getEmployeeComplaint(data)
        return res.status(200).send({msg:'Getting COmpalint Successfully'})
    }
    catch(error){
        console.error('Error in getting Complaint', error);
        return res(500).json({message:'Failed in Getting Complaint'})
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
    addEmployee, getEmployeeServiceDetails,addEmployeeComplaint,getEmployeeCompalint
}