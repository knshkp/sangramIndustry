const Expense=require("../models/expenses")
const addExpense = async (productData,image) => {
    try {
        const expense = new Expense({
            seller_phone: productData.seller_phone,
            expense_type: productData.expense_type,
            mode_payment: productData.mode_payment,
            amount: productData.amount,
            photo: image
        });

        return await expense.save();
    } catch (error) {
        throw new Error(error.message);
    }
};
const getExpense = async () => {
    try {
        return await Expense.find();
    } catch (error) {
        throw new Error("Error getting category: " + error.message);
    }
};
module.exports={
    addExpense,
    getExpense
}