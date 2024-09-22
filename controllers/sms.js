const twilio=require("twilio")
const accountSid = 'AC89c48ed13158c24b2785724412e779b0';
const authToken = '972ed4039e17326cf9ce87142d26bd88';
const client=new twilio(accountSid,authToken)
const sendOtp=(req,res)=>{
    const phone=req.body.phone;
    const otp=req.body.otp;
    twilioClient.messages.create({
        body:`Your OTP from Sangram Industry is ${otp}`,
        from:`+17743003054`,
        to:`+91${phone}`
    }).then(()=>{res.json({success:true,message:"OTP sent successfully",otp:otp})})
    .catch(error=>{
        res.status(500).json({success:false,message:error.message})
    })

}
module.exports={sendOtp}