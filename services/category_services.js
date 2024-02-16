
const Category = require('../models/category_model'); // Assuming you have a Category model
const cloudinary = require('cloudinary').v2; // Assuming you have cloudinary configured

const addCategory = async (categoryName, file) => {
    try {
        console.log(`>>>>>>...ser>>>>>>>`,categoryName)
        console.log(`>>>>>>...serImage>>>>>>>`,file)
        // Check if the category already exists
        const existingCategory = await Category.findOne({ category: categoryName.toLowerCase() });

        // if (existingCategory) {
        //     return { success: true, msg: "This Category is already found" };
        // } else {
            // Upload image to cloudinary
            const cloudinaryUpload = await cloudinary.uploader.upload(file.path);

            // Create a new category
            const category = new Category({
                category: categoryName.toLowerCase(),
                categoryImage: cloudinaryUpload.secure_url
            });

            // Save the new category
            const cat_data = await category.save();

            return { success: true, msg: "Category Data", data: cat_data };
        // }
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