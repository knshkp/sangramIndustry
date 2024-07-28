const employeeComplaintSchema = require('../models/employee_complaint_model');

const addEmployeeComplaint = async (data) => {
    try {
        const newEmployeeComplaint = new employeeComplaintSchema({
            customer_name: data?.customer_name,
            customer_phone: data?.customer_phone,
            customer_address: data?.customer_address,
            pending_staff_name: data?.pending_staff_name,
            pending_staff_phone: data?.pending_staff_phone,
            pending_staff_date: data?.pending_staff_date,
            pending_staff_time: data?.pending_staff_time,
            accept_staff_name: data?.accept_staff_name,
            accept_staff_phone: data?.accept_staff_phone,
            accept_staff_date: data?.accept_staff_date,
            accept_staff_time: data?.accept_staff_time,
            completed_staff_date:data?.completed_staff_date,
            completed_staff_time:data?.completed_staff_time,
            desctiption:data?.desctiption
        });
        
        // Save the new vendor to the database
        await newEmployeeComplaint.save();

        // Return the saved vendor details
        return newEmployeeComplaint;
    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error adding Complaint:', error);
        throw error; // Re-throw the error to be handled by the caller
    }
};

const removeEmployeeComplaint = async (vendorId) => {
    try {
        // Find the vendor by ID and remove it
        const removedVendor = await employeeComplaintSchema.findByIdAndDelete(vendorId);
        
        // Check if a vendor was found and removed
        if (!removedVendor) {
            // If no vendor was found with the provided ID, throw an error
            throw new Error(`Complaint with ID ${vendorId} not found`);
        }

        // Return the removed vendor details
        return removedVendor;
    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error removing Complaint:', error);
        throw error; // You can throw the error to be handled by the caller
    }
};




const getEmployeeComplainDetails=async()=> {
    const vendorData = await employeeComplaintSchema.find();
    return vendorData
}

module.exports={
    addEmployeeComplaint,removeEmployeeComplaint, getEmployeeComplainDetails
}