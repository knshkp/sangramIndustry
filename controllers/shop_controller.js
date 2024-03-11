const shopServices=require('../services/shop_services')
const cloudinary=require('cloudinary')
const Banner=require("../models/banner_model")
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
    try{
        console.log(`>>>>>>>>>>>>>>>req>>`,req.body)
        var product=req.body
        var result=await shopServices.addProduct(product)
        console.log(`>>>>>>>>.result>>>>>>>m`,result)
        res.status(200).send({data:result,message:"added product successfully"})
    }
    catch(error){
        res.status(400).send({success:false,msg:error.message})
    }
}
const getProduct = async (req, res) => {
    try {
        const result = await shopServices.getProduct();
        res.status(200).send({data:result});
    } catch (error) {
        console.error("Error getting product:", error);
        res.status(500).send({ success: false, msg: "Internal server error", data: [] });
    }
};
const addBanner=async(req,res)=>{
    console.log(`>>>>>>`,req.file)
    console.log(req.body)        

      try {
        const bannerUploadPromise = new Promise((resolve, reject) => {
            const bannerStream = cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
                if (error) {
                    reject(new Error("Error uploading banner image to Cloudinary: " + error.message));
                } else {
                    resolve(result);
                }
            });
    
            bannerStream.end(req.file.buffer);
        });
        const bannerResult=await bannerUploadPromise
        const bannerImageUrl = bannerResult.secure_url;
          var banner=new Banner({
              banner:1,
              bannerImage: bannerImageUrl
          })
          const productData=await banner.save();
          res.status(200).send({success:true,msg:"Banner Details",data:productData})
  
      } catch (error) {
          res.status(400).send({success:false,msg:error.message})
      }
  }
module.exports={
    addProduct,
    getProduct,
    addBanner

}