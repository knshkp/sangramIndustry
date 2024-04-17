const RateServices = require('../services/rate_services')

const addRate=async(req, res)=> {
    try {
        const data = req.body;
        const rate = await RateServices.addRate(data);
        return res.status(200).json({msg : 'Rate Added Successfully', result : rate});
    } catch (error) {
        console.error('Error in adding rate:', error);
        return res.status(500).json({ message: 'Failed to add rate' });
    }
}

const getRateDetails=async(req, res)=> {
    try {
        const userId = req.query.phone;
        const getRateDetails = await RateServices.getRateDetails(userId);
        return res.status(200).json({msg : 'All Rate Details Shown Successfully', result : getRateDetails});
    } catch (error) {
        console.error('Error in getting Rate:', error);
        return res.status(500).json({ message: 'Failed to get Rate details' });
    }
}

module.exports={
    addRate, getRateDetails
}