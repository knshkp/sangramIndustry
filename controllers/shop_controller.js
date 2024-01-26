import * as shopServices from '../services/shop_services'
const addProduct=async(req,res)=>{
    const cloudinaryUpload = await cloudinary.uploader.upload(req.file.path);
    try{
        var product=[...req.body,{product_image:cloudinaryUpload.link}]
        var result=shopServices.addProduct(product)
        res.status(200).send({data:result,message:"added product successfully"})
    }
    catch(error){
        res.status(400).send({success:false,msg:error.message})
    }
}
modules.export={
    addProduct

}