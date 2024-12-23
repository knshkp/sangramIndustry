const categoryService = require('../services/category_services');

const addCategory = async (req, res) => {
    try {
        const categoryImage = req.files['categoryImage'][0];
        const bannerImage = req.files['bannerImage'][0];
        const result = await categoryService.addCategory(req.body.category, categoryImage, bannerImage);
        res.status(200).send(result);
    } catch (error) {
        console.error("Error adding category:", error);
        res.status(400).send({ success: false, msg: "Error adding category", error: error.message });
    }
};

const getCategory = async (req, res) => {
    try {
        const result = await categoryService.getCategory();
        res.status(200).send(result);
    } catch (error) {
        console.error("Error getting category:", error);
        res.status(400).send({ success: false, msg: "Error getting category", error: error.message });
    }
};


const getCategoryResult = async (req, res) => {
    try {
        const result = await categoryService.getCategoryResult();
        res.status(200).send(result);
    } catch (error) {
        console.error("Error getting category result:", error);
        res.status(400).send({ success: false, msg: "Error getting category result", error: error.message });
    }
};
module.exports = {
    addCategory,
    getCategory,
    getCategoryResult
};
