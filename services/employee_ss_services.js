const EmployeeSSchema = require('../models/employee_ss_model');
const MarketingSchema=require("../models/marketing_mopdel")
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
            service_type:data?.service_type,
            shop_name:data?.shop_name,
            customer_city:data?.customer_city,
            customer_state:data?.customer_state,
            customer_pincode:data?.customer_pincode

        });
        await newVendorDetails.save();

        // Return the saved vendor details
        return newVendorDetails;
    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error adding vendor:', error);
        throw error; // Re-throw the error to be handled by the caller
    }
};

const addMarketingService = async (data) => {
    try {

        // Create a new vendor using the provided data
        const newMarketingEntry = new MarketingSchema({
            staff_phone: data?.staff_phone,
            customer_name: data?.customer_name,
            customer_phone: data?.customer_phone,
            customer_address: data?.customer_address,
            category_name: data?.category_name,
            shop_name:data?.shop_name,
            customer_address:data?.customer_address,
            customer_city:data?.customer_city,
            customer_state:data?.customer_state,
            customer_pincode:data?.customer_pincode,
            customer_location:data?.customer_location,
            shop_photo:data?.shop_photo

        });
        await newMarketingEntry.save();

        // Return the saved vendor details
        return newMarketingEntry;
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
const getEmployeeService = async (phone) => {
    try {
        // Search for employees/vendors in the database based on the provided phone number
        const employees = await EmployeeSSchema.find({ phone_number: phone });

        if (!employees || employees.length === 0) {
            throw new Error('No employees found with the given phone number.');
        }

        // Return the fetched employee details
        return employees;
    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error fetching employees:', error);
        throw error; // Re-throw the error to be handled by the caller
    }
};

module.exports={
    addEmployeeService,getEmployeeServiceDetails,addMarketingService
}