const expenseServices=require('../services/expense_services')
const cloudinary=require('cloudinary')
const addExpense=async(req,res)=>{
    const cloudinaryUpload = await cloudinary.uploader.upload(req.file.path);
    try{
        var expense=req.body
        var file=cloudinaryUpload.secure_url
        var result=await expenseServices.addExpense(expense,file)
        res.status(200).send({data:result,message:"added expense successfully"})
    }
    catch(error){
        res.status(400).send({success:false,msg:error.message})
    }
}
const getExpense = async (req, res) => {
    try {
        const result = await expenseServices.getExpense();
        res.status(200).send(result);
    } catch (error) {
        console.error("Error getting expense:", error);
        res.status(400).send({ success: false, msg: "Error getting category", error: error.message });
    }
};
module.exports = {addExpense,getExpense};