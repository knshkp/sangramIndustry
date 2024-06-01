const Buy=require('../models/buy_now_model')
const Cart=require('../models/cart_model')
    const addProduct = async (req, res) => {
        try {
            const { productArray, totalAmount, phone, address } = req.body;
    
            // Validate required fields
            if (!productArray || !totalAmount || !phone || !address) {
                return res.status(400).json({ message: "All fields are required" });
            }
    
            // Create a new Buy document
            const newBuy = new Buy({
                productArray,
                totalAmount,
                phone,
                address
            });
    
            // Save the Buy document
            await newBuy.save();
    
            // Remove the product(s) from the cart
            for (const product of productArray) {
                await Cart.findOneAndDelete({ product_name: product.product_name, customer_phone: phone });
            }
    
            res.status(201).json({ message: "Product added to buy successfully and removed from cart" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    };

const getProduct=async(req,res)=>{
    try {
        const phone=req.query.phone;
        const cart_data = await Buy.find({phone:phone});
        if(cart_data){
        const cartResult = {
            products: cart_data.productArray,
            totalAmount:cart_data.totalAmount,
            userId:cart_data.userId,
            address:cart_data.address
        };
    
          const response = {
            success: true,
            msg: "BuyDetail",
            data: cart_data,
          };
          res.status(200).send(response);
        }
        else{
            res.status(200).send({success:true,msg:"data is null"})
        }
    } catch (error) {
        res.status(400).send({success:false,msg:error.message});
    }
}
module.exports={
    addProduct,
    getProduct,
}