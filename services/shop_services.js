const Product=require(`../models/product_model`)
const cloudinary=require('cloudinary')
const categoryController=require('../controllers/category_controller')
const categoryService=require('../services/category_services')
const addProduct = async (productData) => {
    try {
        const product = new Product({
            name: productData.name,
            price: productData.price,
            // productImage: cloudinaryUpload.secure_url,
            discount: productData.discount,
            category_id: productData.category_id,
            description: productData.description,
            is_dealerProducts:productData.is_dealerProducts,
            dealer_price:productData.dealer_price,
            product_count:productData.product_count
            

        });

        return await product.save();
    } catch (error) {
        throw new Error(error.message);
    }
};
const getProduct = async () => {
    try {
        const send_data = [];
        const cat_data = await categoryService.getCategory();

        if (cat_data.length > 0) {
            for (let i = 0; i < cat_data.length; i++) {
                const product_data = [];
                const cat_id = cat_data[i]['_id'].toString();
                const cat_pro = await Product.find({ category_id: cat_id });

                if (cat_pro.length > 0) {
                    for (let j = 0; j < cat_pro.length; j++) {
                        product_data.push({
                            "product_name": cat_pro[j]['name'],
                            "product_price": cat_pro[j]['price'],
                            "discount": cat_pro[j]['discount'],
                            "description": cat_pro[j]['description'],
                            "productImage": cat_pro[j]['productImage']
                        });
                    }
                }
                send_data.push({
                    "category": cat_data[i]['category'],
                    "categoryImage": cat_data[i]['categoryImage'],
                    "product": product_data,
                });
            }
            return { success: true, msg: "Product Details", data: send_data };
        } else {
            return { success: false, msg: "No categories found", data: send_data };
        }
    } catch (error) {
        throw new Error("Error getting product: " + error.message);
    }
};

const searchProduct = async (search) => {
    try {
        const productData = await Product.find({
            "name": { "$regex": ".*" + search + ".*" }
        });

        if (productData.length > 0) {
            return { success: true, msg: "Data found", data: productData };
        } else {
            return { success: true, msg: "Data not found", data: [] };
        }
    } catch (error) {
        throw new Error("Error searching product: " + error.message);
    }
};
module.exports={
    addProduct,
    getProduct,
    searchProduct

}