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
        return [		{
			"type": "fatsnf",
			"rate": "6.5",
		},
        {
			"type": "fat",
			"rate": "6.5"
		},
        {

			"type": "fatclr",
			"rate": "6.5"
		},
        {

			"type": "fatclr",
			"rate": "6.0"
		},{

			"type": "fatsnf",
			"rate": "6.02"
		},
        {

			"type": "fat",
			"rate": "6.02"
		},
        {

			"type": "fatclr",
			"rate": "6.04"
		},
        {

			"type": "fatsnf",
			"rate": "6.08"
		},
        {

			"type": "fat",
			"rate": "7.0"
		}
    ];
    }
    return RateData
}

module.exports={
    addRate, getRateDetails
}