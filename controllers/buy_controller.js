const Buy=require('../models/buy_now_model')
const addProduct = async (req, res) => {
    try {
        const existingCartEntry = await Buy.findOne({
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
            const cart_obj = new Buy({
                customer_phone: req.body.phone,
                product_name: req.body.product_name,
                price: req.body.price,
                quantity: req.body.quantity,
                address:req.body.address
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

const getProduct=async(req,res)=>{
    try {
        const phone=req.query.phone;
        const cart_data = await Buy.find({customer_phone:phone});
        if(cart_data){
        const cartResult = {
            name: cart_data.product_name,
            price:cart_data.price,
            quantity:cart_data.quantity,
            customer_phone:cart_data.customer_phone,
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