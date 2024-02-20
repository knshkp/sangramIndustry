
const Category = require('../models/category_model'); // Assuming you have a Category model
const cloudinary = require('cloudinary').v2; // Assuming you have cloudinary configured

const addCategory = async (category) => {
    try {

        // Check if the category already exists
        const existingCategory = await Category.findOne({ category: category.toLowerCase() });

        if (existingCategory) {
            return { success: true, msg: "This Category is already found" };
        } else {
            // Upload image to cloudinary
            console.log(`>>>>>>>>ser2>>>>`)

            // Create a new category
            const categorys = new Category({
                category: category.toLowerCase()
            });
            console.log(`>>>>>>>>>>ser1>>>>>>>>>`, categorys)

            // Save the new category
            const cat_data = await categorys.save();

            return { success: true, msg: "Category Data", data: cat_data };
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