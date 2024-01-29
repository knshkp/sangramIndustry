const shopServices=require('../services/shop_services')
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
const getProduct = async (req, res) => {
    try {
        const result = await productService.getProduct();
        res.status(200).send(result);
    } catch (error) {
        console.error("Error getting product:", error);
        res.status(500).send({ success: false, msg: "Internal server error", data: [] });
    }
};

const searchProduct = async (req, res) => {
    try {
        const result = await productService.searchProduct(req.body.search);
        res.status(200).send(result);
    } catch (error) {
        console.error("Error searching product:", error);
        res.status(500).send({ success: false, msg: "Internal server error", data: [] });
    }
};
module.exports={
    addProduct,
    getProduct,
    searchProduct

}