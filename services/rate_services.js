const Rate = require('../models/rate_model');
const addRate=async(data)=> {
        const newRateDetails = new Rate({
            phone:data.phone,
            rate:data.rate,
            type:data.type
                
        }); await newRateDetails.save();
        return newRateDetails
}

const getRateDetails=async(phone)=> {
    const RateData = await Rate.find({ phone : phone });
    if(RateData.length===0){
        return [6.0,6.5,7.0,7.5];
    }
    return RateData
}

module.exports={
    addRate, getRateDetails
}