const EmployeeSSchema = require('../models/employee_ss_model');

const addEmployeeService = async (data) => {
    try {

        // Create a new vendor using the provided data
        const newVendorDetails = new EmployeeSSchema({
            seller_phone: data?.seller_phone,
            customer_name: data?.customer_name,
            customer_phone: data?.customer_phone,
            customer_address: data?.customer_address,
            category_name: data?.category_name,
            product_name: data?.product_name,
            product_price: data?.product_price,
            discount: data?.discount,
            final_price: data?.final_price,
            payment_method: data?.payment_method,
            service_type:data?.service_type
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




const getEmployeeServiceDetails=async(userId)=> {
    const vendorData = await EmployeeSSchema.find({ seller_phone : userId });
    return vendorData
}

module.exports={
    addEmployeeService,getEmployeeServiceDetails
}