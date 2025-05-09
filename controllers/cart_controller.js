const Cart=require('../models/cart_model')
const addCart = async (req, res) => {
    try {
        const existingCartEntry = await Cart.findOne({
            customer_phone: req.body.phone,
            product_name: req.body.product_name
        });

        if (existingCartEntry) {
            // If the product already exists in the cart, update the quantity
            existingCartEntry.quantity += parseInt(req.body.quantity, 10);
            await existingCartEntry.save();
            res.status(200).send({
                success: true,
                msg: 'Quantity updated in the cart',
                data: existingCartEntry,
            });
        } else {
            // If the product doesn't exist in the cart, create a new entry
            const cart_obj = new Cart({
                customer_phone: req.body.phone,
                product_name: req.body.product_name,
                price: req.body.price,
                quantity: req.body.quantity,
                image_link:req.body?.image_link
            });

            const cartData = await cart_obj.save();
            res.status(200).send({
                success: true,
                msg: 'Added to the cart',
                data: cartData,
            });
        }
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};
const removeCart = async (req, res) => {
    try {
        const { phone, product_name, quantity } = req.body;

        // Find the existing cart entry for the customer and product
        const existingCartEntry = await Cart.findOne({
            customer_phone: phone,
            product_name: product_name,
        });

        if (!existingCartEntry) {
            return res.status(404).send({
                success: false,
                msg: 'Product not found in the cart',
            });
        }

        // Check if quantity needs to be decremented or the cart entry removed
        const newQuantity = existingCartEntry.quantity - parseInt(quantity, 10);
        if (newQuantity > 0) {
            existingCartEntry.quantity = newQuantity;
            await existingCartEntry.save();
            return res.status(200).send({
                success: true,
                msg: 'Quantity decremented in the cart',
                data: existingCartEntry,
            });
        } else {
            // Use deleteOne to remove the cart entry
            await Cart.deleteOne({ _id: existingCartEntry._id });
            return res.status(200).send({
                success: true,
                msg: 'Product removed from the cart',
                data: existingCartEntry,
            });
        }
    } catch (error) {
        // Handle unexpected errors
        return res.status(500).send({
            success: false,
            msg: 'Internal server error',
            error: error.message,
        });
    }
};

const getCart=async(req,res)=>{
    try {
        const phone=req.query.phone;
        const cart_data = await Cart.find({customer_phone:phone});
        console.log(cart_data)
        if(cart_data){
        const cartResult = {
            name: cart_data.product_name,
            price:cart_data.price,
            quantity:cart_data.quantity,
            customer_phone:cart_data.customer_phone
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
    addCart,
    getCart,
    removeCart
}