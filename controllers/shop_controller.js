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
    const cloudinaryUpload = await cloudinary.uploader.upload(req.file.path);
    try{
        var product=req.body
        var file=cloudinaryUpload.secure_url
        var result=await shopServices.addProduct(product,file)
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
    const cloudinaryUpload = await cloudinary.uploader.upload(req.file.path);
      try {
          var banner=new Banner({
              banner:req.body.banner,
              bannerImage: cloudinaryUpload.secure_url
          })
          const productData=await banner.save();
          res.status(200).send({success:true,msg:"Banner Details",data:productData})
  
      } catch (error) {
          res.status(400).send({success:false,msg:error.message})
      }
  }
  const removeBanner = async (req, res) => {
    const bannerNumber = req.query.banner;
    try {
      const removedBanner = await Banner.findOneAndDelete({ banner: bannerNumber });
  
      if (removedBanner) {
        res.status(200).send({ success: true, msg: "Banner removed successfully", data: removedBanner });
      } else {
        res.status(404).send({ success: false, msg: "Banner not found" });
      }
    } catch (error) {
      res.status(500).send({ success: false, msg: error.message });
    }
  };
  const getBanner=async(req,res)=>{
    try {
        // Retrieve all banners
        const banners = await Banner.find();
    
        // Send the banners as a response
        res.status(200).send({ success: true, msg: "Banners retrieved successfully", data: banners });
      } catch (error) {
        // If an error occurs during the process, send an error response
        res.status(500).send({ success: false, msg: error.message });
      }
  };
  
module.exports={
    addProduct,
    getProduct,
    addBanner,
    removeBanner,
    getBanner
}