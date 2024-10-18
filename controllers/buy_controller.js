const Buy = require('../models/buy_now_model');
const Cart = require('../models/cart_model');

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
            address,
            status: "received"
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

const updateOrderStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body;

        // Validate input
        if (!orderId || !status) {
            return res.status(400).json({ message: "Order ID and status are required" });
        }

        // Find the order by ID and update the status
        const updatedOrder = await Buy.findByIdAndUpdate(
            orderId,
            { status: status },
            { new: true } // Return the updated document
        );

        if (!updatedOrder) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.status(200).json({ success: true, message: "Order status updated", data: updatedOrder });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const getProduct = async (req, res) => {
    try {
        const phone = req.query.phone;
        const cart_data = await Buy.find({ phone: phone });

        if (cart_data.length > 0) {
            const response = {
                success: true,
                msg: "BuyDetail",
                data: cart_data,
            };
            res.status(200).send(response);
        } else {
            res.status(200).send({ success: true, msg: "No data found" });
        }
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

const getPastOrders = async (req, res) => {
    try {
        const phone = req.query.phone;
        const pastOrders = await Buy.find({ phone: phone, status: 'completed' });

        if (pastOrders.length > 0) {
            res.status(200).json({ success: true, msg: "Past orders retrieved", data: pastOrders });
        } else {
            res.status(200).json({ success: true, msg: "No past orders found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, msg: error.message });
    }
};

const getCurrentOrders = async (req, res) => {
    try {
        const phone = req.query.phone;
        const currentOrders = await Buy.find({ phone: phone, status: { $in: ['received', 'in transit', 'shipped'] } });

        if (currentOrders.length > 0) {
            res.status(200).json({ success: true, msg: "Current orders retrieved", data: currentOrders });
        } else {
            res.status(200).json({ success: true, msg: "No current orders found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, msg: error.message });
    }
};

module.exports = {
    addProduct,
    getProduct,
    updateOrderStatus,
    getPastOrders,
    getCurrentOrders
};
