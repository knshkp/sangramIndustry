const addService=async(req, res)=> {
    try {
        const data = req.body;
        const vendor = await VendorServices.addEmployee(data);
        return res.status(200).json({msg : 'Vendor Added Successfully', result : vendor});
    } catch (error) {
        console.error('Error in adding vendor:', error);
        return res.status(500).json({ message: 'Failed to add vendor' });
    }
}