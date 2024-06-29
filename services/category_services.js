
const Category = require('../models/category_model'); // Assuming you have a Category model
const cloudinary = require('cloudinary').v2; // Assuming you have cloudinary configured
cloudinary.config({
    cloud_name: "dyukjqemj",
    api_key: "975334944781146",
    api_secret: "USmTRR4C6ly_RDh-82Y8rhMIMzc",
  });
  const addCategory = async (category, categoryImage, bannerImage) => {
    try {
        const categoryUploadPromise = new Promise((resolve, reject) => {
            const categoryStream = cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
                if (error) {
                    reject(new Error("Error uploading category image to Cloudinary: " + error.message));
                } else {
                    resolve(result);
                }
            });

            categoryStream.end(categoryImage.buffer);
        });

        const bannerUploadPromise = new Promise((resolve, reject) => {
            const bannerStream = cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
                if (error) {
                    reject(new Error("Error uploading banner image to Cloudinary: " + error.message));
                } else {
                    resolve(result);
                }
            });

            bannerStream.end(bannerImage.buffer);
        });

        // Wait for both uploads to complete
        const [categoryResult, bannerResult] = await Promise.all([categoryUploadPromise, bannerUploadPromise]);

        // Extract secure URLs for category and banner images
        const categoryImageUrl = categoryResult.secure_url;
        const bannerImageUrl = bannerResult.secure_url;

        // Check if the category already exists
        const existingCategory = await Category.findOne({ category: category.toLowerCase() });

        if (existingCategory) {
            return { success: true, msg: "This Category is already found" };
        } else {
            // Create a new category
            const newCategory = new Category({
                category: category.toLowerCase(),
                categoryImage: categoryImageUrl,
                bannerImage: bannerImageUrl,
            });

            // Save the new category
            const savedCategory = await newCategory.save();

            return { success: true, msg: "Category Data", data: savedCategory };
        }
    } catch (error) {
        throw new Error("Error adding category: " + error.message);
    }
};




const getCategory = async () => {
    try {
        return await Category.find();
    } catch (error) {
        throw new Error("Error getting category: " + error.message);
    }
};

const getCategoryResult = async () => {
    try {
        const cat_data = await Category.find();
        let category_result = [];

        for (let i = 0; i < cat_data.length; i++) {
            category_result.push({
                "categoryName": cat_data[i]['category'],
                "categoryImage": cat_data[i]['categoryImage']
            });
        }

        return { success: true, msg: "Category Data", data: category_result };
    } catch (error) {
        throw new Error("Error getting category result: " + error.message);
    }
};

module.exports = {
    addCategory,
    getCategory,
    getCategoryResult
};