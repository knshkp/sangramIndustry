const shopServices=require('../services/shop_services')
const cloudinary=require('cloudinary')
const uploadImageToCloudinary = async (imageFile) => {
    try {
      // Upload the image to Cloudinary
      const result = await cloudinary.uploader.upload(imageFile, {
   // Optional: You can specify a folder to organize your images
        use_filename: true, // Keep the original filename
      });
  
      // Cloudinary response will contain the image URL and other information
      return result.url;
    } 
    catch (error) {
      throw new Error('Image upload failed');
    }
  };
const addProduct=async(req,res)=>{
    console.log(`>>>>>>>>>>>>>>>>>>>>>`,req)
    console.log(`>>>>>>>>>>>>>`,req.body.file)
    const image=req.body.file;
    console.log(`>>>>>>>>>>.`)
    let cloudinaryUpload=''
    if(image){
        console.log(`>>>>>>img>>>>>>>>`)
        cloudinaryUpload = await cloudinary.uploader.upload(image.path);
    }
    
    try{
        var product=[...req.body,{product_image:cloudinaryUpload.link}]
        var result=shopServices.addProduct(product)
        res.status(200).send({data:result,message:"added product successfully"})
    }
    catch(error){
        res.status(400).send({success:false,msg:error.message})
    }
}
const getProduct = async (req, res) => {
    try {
        const result = await shopServices.getProduct();
        res.status(200).send(result);
    } catch (error) {
        console.error("Error getting product:", error);
        res.status(500).send({ success: false, msg: "Internal server error", data: [] });
    }
};

module.exports={
    addProduct,
    getProduct,

}